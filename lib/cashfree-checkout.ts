/**
 * Client-safe helper to build the Cashfree hosted-checkout URL from a payment
 * session id. Contains no secrets — the base URLs are public and the session id
 * is minted server-side per order.
 */
export function buildCheckoutUrl(paymentSessionId: string, env: "sandbox" | "production"): string {
  const base = env === "production" ? "https://api.cashfree.com" : "https://sandbox.cashfree.com"
  return `${base}/pg/view/sessions/checkout?payment_session_id=${encodeURIComponent(paymentSessionId)}`
}

/** Money formatting used across the booking UI. */
export function formatINR(amount: number): string {
  return "₹" + Math.round(amount).toLocaleString("en-IN")
}
