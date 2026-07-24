import { NextResponse } from "next/server"
import { z } from "zod"
import { FieldValue } from "firebase-admin/firestore"

import { getDb } from "@/lib/server/firebase-admin"
import { verifyCashfreeOrder } from "@/lib/server/cashfree"
import { sendBookingNotification, type BookingNotification } from "@/lib/server/notifications"
import type { BookingType, VerifyResponse } from "@/lib/booking-types"

export const runtime = "nodejs"

const bodySchema = z.object({
  orderId: z.string().min(3).max(200),
  bookingId: z.string().min(3).max(200),
})

const TYPE_LABELS: Record<BookingType, string> = {
  party: "Party",
  small_table: "Small Table",
  full_table: "Full Table",
}

/**
 * Confirms a payment after the customer returns from Cashfree checkout.
 *
 * Security: the amount is NOT taken from the client. We read the booking's
 * stored (server-calculated) total and require Cashfree's reported paid amount
 * to match it before confirming. Idempotent — safe to call repeatedly and it
 * only sends the founder notification once.
 */
export async function POST(req: Request): Promise<NextResponse> {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }
  const { orderId, bookingId } = parsed.data

  const db = getDb()
  const bookingRef = db.collection("bookings").doc(bookingId)
  const snap = await bookingRef.get()
  if (!snap.exists) {
    return NextResponse.json({ error: "Booking not found." }, { status: 404 })
  }
  const booking = snap.data() || {}

  // The order id must belong to this booking.
  if (booking.paymentOrderId && booking.paymentOrderId !== orderId) {
    return NextResponse.json({ error: "Order does not match booking." }, { status: 400 })
  }

  // Already confirmed → report success without re-verifying or re-notifying.
  if (booking.payment_status === "paid" || booking.status === "confirmed") {
    return NextResponse.json({ verified: true, status: "confirmed" } satisfies VerifyResponse)
  }

  const expectedAmount = Number(booking.total_amount || booking.amount || 0)

  // Verify with Cashfree.
  let result
  try {
    result = await verifyCashfreeOrder(orderId)
  } catch (err) {
    console.error("[booking/verify] cashfree verify failed:", err)
    return NextResponse.json({ error: "Could not verify payment yet. Please wait a moment." }, { status: 502 })
  }

  if (!result.paid) {
    return NextResponse.json({
      verified: false,
      status: result.orderStatus,
      message: "Payment not confirmed yet.",
    } satisfies VerifyResponse)
  }

  // Amount must match the server-calculated total (paise tolerance).
  if (expectedAmount > 0 && Math.abs(result.paidAmount - expectedAmount) > 0.5) {
    console.error(
      `[booking/verify] amount mismatch on ${bookingId}: expected ${expectedAmount}, paid ${result.paidAmount}`,
    )
    await bookingRef.update({
      paymentStatus: "amount_mismatch",
      payment_status: "amount_mismatch",
      updated_at: FieldValue.serverTimestamp(),
    })
    return NextResponse.json({ error: "Payment amount mismatch." }, { status: 409 })
  }

  // Flip to confirmed exactly once and claim the right to notify.
  let shouldNotify = false
  await db.runTransaction(async (txn) => {
    const fresh = await txn.get(bookingRef)
    const d = fresh.data() || {}
    if (d.payment_status === "paid" || d.status === "confirmed") return // already done
    shouldNotify = !d.notifiedAt
    txn.update(bookingRef, {
      status: "confirmed",
      paymentStatus: "paid",
      payment_status: "paid",
      payment_method: "cashfree",
      cashfreeTransactionId: result.cfPaymentId,
      paymentConfirmedAt: FieldValue.serverTimestamp(),
      updated_at: FieldValue.serverTimestamp(),
      ...(shouldNotify ? { notifiedAt: FieldValue.serverTimestamp() } : {}),
    })
  })

  // Notify the founder (email now, WhatsApp later). Never blocks confirmation.
  if (shouldNotify) {
    const notification: BookingNotification = {
      bookingId,
      bookingType: (booking.bookingType as BookingType) || "party",
      bookingTypeLabel: TYPE_LABELS[(booking.bookingType as BookingType) || "party"],
      customerName: String(booking.customer_name || booking.userName || ""),
      customerPhone: String(booking.customer_phone || booking.userPhone || ""),
      customerEmail: String(booking.customer_email || booking.userEmail || ""),
      date: String(booking.date || ""),
      time: String(booking.time || ""),
      guests: Number(booking.guests || 0),
      city: String(booking.city || booking.locality || ""),
      address: String(booking.customer_address || ""),
      dishes: Array.isArray(booking.dishes) ? (booking.dishes as string[]) : [],
      staff: {
        waiters: Number(booking.staff?.waiters || 0),
        bartenders: Number(booking.staff?.bartenders || 0),
      },
      totalPaid: expectedAmount || result.paidAmount,
      paymentOrderId: orderId,
    }
    await sendBookingNotification(notification)
  }

  return NextResponse.json({ verified: true, status: "confirmed" } satisfies VerifyResponse)
}
