import "server-only"

/**
 * A booking notification, in a transport-agnostic shape. Every channel
 * (email now, WhatsApp later) receives exactly this and decides how to render
 * it. Adding WhatsApp is a new file implementing NotificationChannel plus a
 * one-line switch in ./index.ts — no changes to the booking logic.
 */
export type BookingNotification = {
  bookingId: string
  bookingType: "party" | "small_table" | "full_table"
  bookingTypeLabel: string
  customerName: string
  customerPhone: string
  customerEmail: string
  date: string
  time: string
  guests: number
  city: string
  address: string
  dishes: string[]
  staff: { waiters: number; bartenders: number }
  totalPaid: number
  paymentOrderId: string
}

export interface NotificationChannel {
  readonly name: string
  send(notification: BookingNotification): Promise<void>
}

/** Shared formatting so every channel reads consistently. */
export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN")
}

export function notificationLines(n: BookingNotification): string[] {
  return [
    `New ${n.bookingTypeLabel} booking — ${n.bookingId}`,
    "",
    `Customer:  ${n.customerName}`,
    `Phone:     ${n.customerPhone}`,
    `Email:     ${n.customerEmail}`,
    `Date:      ${n.date}`,
    `Time:      ${n.time}`,
    `Guests:    ${n.guests}`,
    `City:      ${n.city}`,
    `Address:   ${n.address}`,
    `Staff:     ${n.staff.waiters} waiter(s), ${n.staff.bartenders} bartender(s)`,
    `Total paid: ${formatINR(n.totalPaid)}`,
    `Order:     ${n.paymentOrderId}`,
    "",
    `Dishes (${n.dishes.length}):`,
    ...n.dishes.map((d) => `  • ${d}`),
  ]
}
