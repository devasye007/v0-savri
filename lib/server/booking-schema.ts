import "server-only"

import { FieldValue } from "firebase-admin/firestore"

import type { BookingType, ContactDetails, SelectedDish, StaffSelection } from "@/lib/booking-types"
import type { PartyPriceBreakdown, DailyPriceBreakdown } from "./pricing"

// City has already been validated by the route; accept it as a plain string here.
type EventInput = {
  date: string
  time: string
  guests: number
  address: string
  city: string
}

/**
 * Builds the `bookings` document. The camelCase + snake_case duplication is
 * deliberate — it matches exactly what the mobile apps write (see
 * savri_user/app/party-summary.tsx) so the Chef Partner app renders web
 * bookings with zero changes. The chef app treats `status: "pending"` as an
 * available booking; the Cashfree webhook / verify route flips it to
 * "confirmed" + payment_status "paid" once money lands.
 *
 * The `pricing` map stores the FULL server-calculated breakdown for internal
 * reference only. It is never returned to the browser.
 */

type BuildArgs = {
  bookingType: BookingType
  contact: ContactDetails
  event: EventInput
  dishes: SelectedDish[]
  staff: StaffSelection
  amount: number
  paymentOrderId: string
  breakdown: PartyPriceBreakdown | DailyPriceBreakdown
  termsAcceptedAt: string
}

export function buildBookingDoc(args: BuildArgs): Record<string, unknown> {
  const { bookingType, contact, event, dishes, staff, amount, paymentOrderId, breakdown, termsAcceptedAt } = args

  // Mobile schema uses `type: "party"` for parties; daily meals map to the
  // "daily" family. We additionally persist the precise bookingType.
  const mobileType = bookingType === "party" ? "party" : "daily"
  const dishNames = dishes.map((d) => d.name)
  const nowIso = new Date().toISOString()

  return {
    // ── Identity (anonymous web buyer — no Firebase uid) ──────────────────────
    source: "web",
    bookingType, // 'party' | 'small_table' | 'full_table'
    type: mobileType,

    userId: null,
    user_id: null,
    customer_id: null,
    userName: contact.name,
    userPhone: contact.phone,
    userEmail: contact.email,

    // ── Chef assignment (UBER model — assigned after booking) ─────────────────
    chefId: null,
    chef_id: null,
    chefName: null,
    chefAssigned: false,

    customer_name: contact.name,
    customer_phone: contact.phone,
    customer_email: contact.email,
    customer_address: event.address,
    customer_locality: event.city,
    locality: event.city,
    city: event.city,

    // ── Status — pending until payment confirms → 'confirmed' ────────────────
    status: "pending",
    paymentStatus: "pending",
    payment_status: "pending",
    paymentOrderId,

    // ── Schedule ──────────────────────────────────────────────────────────────
    scheduledDate: event.date,
    scheduledTime: event.time,
    date: event.date,
    time: event.time,
    visit_date: event.date,
    serving_time: event.time,

    // ── Party details ─────────────────────────────────────────────────────────
    guestCount: event.guests,
    guest_count: event.guests,
    guests: event.guests,

    dishes: dishNames,
    selectedDishes: dishNames,
    dishIds: dishes.map((d) => d.id),

    staff: { waiters: staff.waiters, bartenders: staff.bartenders },
    services: { waiters: staff.waiters, bartenders: staff.bartenders },

    address: {
      full: event.address,
      city: event.city,
    },

    // ── Money (authoritative, server-calculated) ──────────────────────────────
    amount,
    totalAmount: amount,
    total_amount: amount,
    payment_type: "full",
    paid_amount: amount,

    // Full internal breakdown — stored, never shown to the customer.
    pricing: breakdown as Record<string, unknown>,

    // ── Terms + timestamps ────────────────────────────────────────────────────
    termsAcceptedAt,
    createdAt: nowIso,
    updatedAt: nowIso,
    created_at: FieldValue.serverTimestamp(),
    updated_at: FieldValue.serverTimestamp(),
  }
}
