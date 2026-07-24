import "server-only"

/**
 * Cashfree Payment Gateway — server-only wrapper.
 *
 * Mirrors the pattern used by the mobile app's createCashfreeOrder Cloud
 * Function (api version 2023-08-01, sandbox/production base URLs, x-client-id /
 * x-client-secret headers) so behaviour is consistent across surfaces.
 *
 * Required env (Vercel):
 *   CASHFREE_APP_ID
 *   CASHFREE_SECRET_KEY
 *   CASHFREE_ENV            "sandbox" (default) | "production"
 *   CASHFREE_WEBHOOK_URL    (optional) notify_url for server-to-server confirm
 */

const CASHFREE_API_VERSION = "2023-08-01"
const REQUEST_TIMEOUT_MS = 15000

export type CashfreeEnv = "sandbox" | "production"

type CashfreeConfig = {
  appId: string
  secretKey: string
  env: CashfreeEnv
  baseUrl: string
}

export function getCashfreeConfig(): CashfreeConfig {
  const appId = process.env.CASHFREE_APP_ID
  const secretKey = process.env.CASHFREE_SECRET_KEY
  const env: CashfreeEnv = process.env.CASHFREE_ENV === "production" ? "production" : "sandbox"
  const baseUrl = env === "production" ? "https://api.cashfree.com" : "https://sandbox.cashfree.com"

  if (!appId || !secretKey) {
    throw new Error("Cashfree is not configured. Missing CASHFREE_APP_ID / CASHFREE_SECRET_KEY.")
  }
  return { appId, secretKey, env, baseUrl }
}

/** Public checkout URL the browser is redirected to. */
export function checkoutUrl(paymentSessionId: string, env: CashfreeEnv): string {
  const base = env === "production" ? "https://api.cashfree.com" : "https://sandbox.cashfree.com"
  return `${base}/pg/view/sessions/checkout?payment_session_id=${encodeURIComponent(paymentSessionId)}`
}

type CreateOrderArgs = {
  orderId: string
  amount: number
  customerId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  returnUrl: string
  note?: string
}

type CreateOrderResult = {
  orderId: string
  paymentSessionId: string
  orderStatus: string
  env: CashfreeEnv
}

function headers(cfg: CashfreeConfig): HeadersInit {
  return {
    "Content-Type": "application/json",
    "x-client-id": cfg.appId,
    "x-client-secret": cfg.secretKey,
    "x-api-version": CASHFREE_API_VERSION,
  }
}

async function withTimeout(input: RequestInfo, init: RequestInit): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    return await fetch(input, { ...init, signal: controller.signal })
  } finally {
    clearTimeout(timer)
  }
}

export async function createCashfreeOrder(args: CreateOrderArgs): Promise<CreateOrderResult> {
  const cfg = getCashfreeConfig()

  const orderMeta: Record<string, string> = {
    return_url: args.returnUrl,
  }
  const webhookUrl = process.env.CASHFREE_WEBHOOK_URL
  if (webhookUrl) orderMeta.notify_url = webhookUrl

  const res = await withTimeout(`${cfg.baseUrl}/pg/orders`, {
    method: "POST",
    headers: headers(cfg),
    body: JSON.stringify({
      order_id: args.orderId,
      order_amount: Number(args.amount.toFixed(2)),
      order_currency: "INR",
      customer_details: {
        customer_id: args.customerId,
        customer_name: args.customerName || "Savri Guest",
        customer_email: args.customerEmail || "guest@savri.co.in",
        customer_phone: args.customerPhone || "9999999999",
      },
      order_meta: orderMeta,
      order_note: args.note || "Savri web booking",
    }),
  })

  const data = (await res.json().catch(() => ({}))) as {
    order_id?: string
    payment_session_id?: string
    order_status?: string
    message?: string
  }

  if (!res.ok || !data.payment_session_id || !data.order_id) {
    throw new Error(data.message || `Cashfree order creation failed (${res.status}).`)
  }

  return {
    orderId: data.order_id,
    paymentSessionId: data.payment_session_id,
    orderStatus: data.order_status || "ACTIVE",
    env: cfg.env,
  }
}

export type CashfreeVerifyResult = {
  paid: boolean
  orderStatus: string
  paidAmount: number
  cfPaymentId: string | null
}

/**
 * Server-to-server verification. Reads the order + its payments from Cashfree
 * and reports whether a SUCCESS payment exists. The caller compares paidAmount
 * against its own recalculated amount before confirming the booking.
 */
export async function verifyCashfreeOrder(orderId: string): Promise<CashfreeVerifyResult> {
  const cfg = getCashfreeConfig()

  const [orderRes, paymentsRes] = await Promise.all([
    withTimeout(`${cfg.baseUrl}/pg/orders/${encodeURIComponent(orderId)}`, {
      method: "GET",
      headers: headers(cfg),
    }),
    withTimeout(`${cfg.baseUrl}/pg/orders/${encodeURIComponent(orderId)}/payments`, {
      method: "GET",
      headers: headers(cfg),
    }),
  ])

  const order = (await orderRes.json().catch(() => ({}))) as { order_status?: string }
  const payments = (await paymentsRes.json().catch(() => [])) as Array<{
    payment_status?: string
    payment_amount?: number
    cf_payment_id?: string
  }>

  const orderStatus = order.order_status || "UNKNOWN"
  const success = Array.isArray(payments)
    ? payments.find((p) => p.payment_status === "SUCCESS")
    : undefined

  return {
    paid: orderStatus === "PAID" && !!success,
    orderStatus,
    paidAmount: Number(success?.payment_amount || 0),
    cfPaymentId: success?.cf_payment_id || null,
  }
}
