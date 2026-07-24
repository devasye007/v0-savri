/**
 * Shared booking types + PUBLIC constants used by both client and server.
 *
 * IMPORTANT: nothing secret lives here. The party pricing constants
 * (cook cost, per-guest, per-dish, extended-area charge) are server-only and
 * live in lib/server/pricing.ts. Only values the customer is *shown anyway*
 * are allowed in this file (daily-table base prices — already public on the
 * pricing page — and the per-unit waiter/bartender rates that appear as
 * visible line items).
 */

export type BookingType = "party" | "small_table" | "full_table"

/** Cities that carry the (silent) extended-area travel charge on party bookings. */
export const EXTENDED_AREA_CITIES = [
  "Gurgaon",
  "Gurugram",
  "Faridabad",
  "Sonipat",
  "Noida",
  "Greater Noida",
] as const

/**
 * City options offered in the address step. "Delhi" is the base city; the rest
 * are the extended-area list above. The server matches the chosen city against
 * EXTENDED_AREA_CITIES — it never trusts a client-sent price — so this list is
 * purely for a clean, typo-free capture of the city.
 */
export const CITY_OPTIONS = ["Delhi", ...EXTENDED_AREA_CITIES] as const
export type City = (typeof CITY_OPTIONS)[number]

/** Party rules that the UI enforces (server re-validates). */
export const PARTY_MIN_GUESTS = 15

/** Last slot a chef can be booked for, in 24h minutes-from-midnight (20:00). */
export const LAST_SLOT_MINUTES = 20 * 60

/**
 * Per-unit staff rates. These ARE shown to the customer as line items
 * ("Waiters (2) — ₹2,000"), so they are safe to expose to the client. The
 * server still owns the authoritative figure.
 */
export const WAITER_COST = 1000
export const BARTENDER_COST = 2000

/**
 * Daily-meals base prices. Public — already printed on /pricing and the
 * homepage — so the daily flow may compute and display these client-side.
 * The server recalculates before charging.
 */
export const DAILY_TABLES = {
  small_table: { label: "Small Table", guests: "1-3 guests", base: 549, includedDishes: 2 },
  full_table: { label: "Full Table", guests: "4-6 guests", base: 1149, includedDishes: 4 },
} as const

export const EXTRA_DISH_PRICE = 149

export function isExtendedArea(city: string): boolean {
  return (EXTENDED_AREA_CITIES as readonly string[]).includes(city)
}

// ─── Wire types shared between the client forms and the API routes ────────────

export type ContactDetails = {
  name: string
  phone: string
  email: string
}

export type EventDetails = {
  date: string // ISO yyyy-mm-dd
  time: string // "HH:mm" 24h
  guests: number
  address: string
  city: City
}

export type SelectedDish = {
  id: string
  name: string
}

export type StaffSelection = {
  waiters: number
  bartenders: number
}

/** POST body for /api/booking/quote (party live-total display). */
export type QuoteRequest = {
  guests: number
  dishCount: number
  city: string
  waiters: number
  bartenders: number
}

/**
 * Response from /api/booking/quote. Deliberately bundled: the customer sees a
 * single "Chef & Service" figure that folds in cook + guests + dishes + travel.
 * Waiters/bartenders are broken out because the customer is actively choosing
 * them. No per-guest / per-dish / travel breakdown is ever returned.
 */
export type QuoteResponse = {
  chefService: number
  waiters: { count: number; unit: number; cost: number }
  bartenders: { count: number; unit: number; cost: number }
  total: number
}

/** POST body for /api/booking/create. Note: NO price is sent — server owns it. */
export type CreateBookingRequest = {
  bookingType: BookingType
  contact: ContactDetails
  event: EventDetails
  dishes: SelectedDish[]
  staff: StaffSelection
  termsAccepted: boolean
}

export type CreateBookingResponse = {
  bookingId: string
  orderId: string
  paymentSessionId: string
  cashfreeEnv: "sandbox" | "production"
  amount: number
}

export type VerifyRequest = {
  orderId: string
  bookingId: string
}

export type VerifyResponse = {
  verified: boolean
  status: string
  message?: string
}
