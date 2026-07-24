import { NextResponse } from "next/server"
import { z } from "zod"

import { dishById } from "@/lib/menu"
import {
  PARTY_MIN_GUESTS,
  LAST_SLOT_MINUTES,
  DAILY_TABLES,
  type CreateBookingResponse,
} from "@/lib/booking-types"
import { calculatePartyPrice, calculateDailyPrice } from "@/lib/server/pricing"
import { createCashfreeOrder } from "@/lib/server/cashfree"
import { getDb } from "@/lib/server/firebase-admin"
import { buildBookingDoc } from "@/lib/server/booking-schema"

export const runtime = "nodejs"

// ─── Input schema. NOTE: no price/amount field — the client cannot send one. ──
const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(6).max(20),
  email: z.string().trim().email().max(200),
})

const eventSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date."),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time."),
  guests: z.number().int().min(1).max(1000),
  address: z.string().trim().min(6).max(500),
  city: z.string().trim().min(1).max(80),
})

const dishSchema = z.object({ id: z.string(), name: z.string() })

const bodySchema = z.object({
  bookingType: z.enum(["party", "small_table", "full_table"]),
  contact: contactSchema,
  event: eventSchema,
  dishes: z.array(dishSchema).min(1).max(60),
  staff: z.object({
    waiters: z.number().int().min(0).max(50),
    bartenders: z.number().int().min(0).max(50),
  }),
  termsAccepted: z.literal(true, { message: "Terms must be accepted." }),
})

function minutesFromTime(time: string): number {
  const [h, m] = time.split(":").map(Number)
  return h * 60 + m
}

function isFutureDate(dateStr: string): boolean {
  // Compare in local date terms — reject dates strictly before today.
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const d = new Date(dateStr + "T00:00:00")
  return d.getTime() >= today.getTime()
}

export async function POST(req: Request): Promise<NextResponse> {
  // 1. Parse + validate structure.
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Invalid booking details." },
      { status: 400 },
    )
  }
  const data = parsed.data

  // 2. Business-rule validation (server is the source of truth).
  if (minutesFromTime(data.event.time) > LAST_SLOT_MINUTES) {
    return NextResponse.json({ error: "Last booking slot is 8:00 PM." }, { status: 400 })
  }
  if (!isFutureDate(data.event.date)) {
    return NextResponse.json({ error: "Please choose a future date." }, { status: 400 })
  }

  // Resolve dishes against the server-side menu — never trust client names.
  const resolvedDishes: { id: string; name: string }[] = []
  for (const d of data.dishes) {
    const known = dishById[d.id]
    if (!known) {
      return NextResponse.json({ error: `Unknown dish: ${d.id}` }, { status: 400 })
    }
    resolvedDishes.push({ id: known.id, name: known.name })
  }
  // Guard against duplicate ids inflating the dish count.
  const uniqueIds = new Set(resolvedDishes.map((d) => d.id))
  if (uniqueIds.size !== resolvedDishes.length) {
    return NextResponse.json({ error: "Duplicate dishes selected." }, { status: 400 })
  }
  const dishCount = resolvedDishes.length

  // 3. Recalculate the authoritative amount from RAW inputs.
  let amount: number
  let breakdown: ReturnType<typeof calculatePartyPrice> | ReturnType<typeof calculateDailyPrice>
  let staff = { waiters: data.staff.waiters, bartenders: data.staff.bartenders }

  if (data.bookingType === "party") {
    if (data.event.guests < PARTY_MIN_GUESTS) {
      return NextResponse.json(
        { error: `Party bookings require at least ${PARTY_MIN_GUESTS} guests.` },
        { status: 400 },
      )
    }
    breakdown = calculatePartyPrice({
      guests: data.event.guests,
      dishCount,
      city: data.event.city,
      waiters: staff.waiters,
      bartenders: staff.bartenders,
    })
    amount = breakdown.total
  } else {
    // Daily meals — staff add-ons do not apply.
    staff = { waiters: 0, bartenders: 0 }
    const table = data.bookingType // 'small_table' | 'full_table'
    const included = DAILY_TABLES[table].includedDishes
    if (dishCount < included) {
      return NextResponse.json(
        { error: `${DAILY_TABLES[table].label} includes ${included} dishes — please select at least ${included}.` },
        { status: 400 },
      )
    }
    breakdown = calculateDailyPrice(table, dishCount)
    amount = breakdown.total
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: "Could not price this booking." }, { status: 500 })
  }

  // 4. Reserve a booking id, mint an order id, create the Cashfree order.
  let db
  try {
    db = getDb()
  } catch (err) {
    console.error("[booking/create] firebase-admin init failed:", err)
    return NextResponse.json({ error: "Booking service is temporarily unavailable." }, { status: 503 })
  }

  const bookingRef = db.collection("bookings").doc()
  const bookingId = bookingRef.id
  const orderId = `SAVRI_WEB_${bookingId}`

  const origin = resolveOrigin(req)
  const returnUrl = `${origin}/book/payment-callback?order_id={order_id}&booking_id=${bookingId}`

  let order
  try {
    order = await createCashfreeOrder({
      orderId,
      amount,
      customerId: bookingId,
      customerName: data.contact.name,
      customerEmail: data.contact.email,
      customerPhone: data.contact.phone,
      returnUrl,
      note: `Savri ${data.bookingType} web booking`,
    })
  } catch (err) {
    console.error("[booking/create] cashfree order failed:", err)
    return NextResponse.json({ error: "Could not start payment. Please try again." }, { status: 502 })
  }

  // 5. Persist the booking (status pending) with the server-owned amount.
  try {
    const doc = buildBookingDoc({
      bookingType: data.bookingType,
      contact: data.contact,
      event: data.event,
      dishes: resolvedDishes,
      staff,
      amount,
      paymentOrderId: order.orderId,
      breakdown,
      termsAcceptedAt: new Date().toISOString(),
    })
    await bookingRef.set(doc)
  } catch (err) {
    console.error("[booking/create] firestore write failed:", err)
    return NextResponse.json({ error: "Could not save your booking. Please try again." }, { status: 500 })
  }

  const response: CreateBookingResponse = {
    bookingId,
    orderId: order.orderId,
    paymentSessionId: order.paymentSessionId,
    cashfreeEnv: order.env,
    amount,
  }
  return NextResponse.json(response)
}

function resolveOrigin(req: Request): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (envUrl) return envUrl.replace(/\/$/, "")
  const proto = req.headers.get("x-forwarded-proto") || "https"
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host")
  if (host) return `${proto}://${host}`
  return new URL(req.url).origin
}
