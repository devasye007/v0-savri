import "server-only"

/**
 * SERVER-ONLY pricing engine.
 *
 * `import "server-only"` makes the build fail if this module is ever pulled
 * into a client component / client bundle. The party constants below
 * (COOK_COST, PER_GUEST, PER_DISH, EXTENDED_AREA_CHARGE) are commercially
 * sensitive and MUST NOT ship to the browser. Everything the customer is
 * allowed to see is bundled into a single "Chef & Service" figure by
 * quotePartyDisplay() — the individual constants never leave the server.
 *
 * The API route that creates the Cashfree order calls calculatePartyPrice /
 * calculateDailyPrice from RAW inputs and uses ONLY that result as the order
 * amount. A price sent by the client is never trusted.
 */

import { isExtendedArea, WAITER_COST, BARTENDER_COST, EXTRA_DISH_PRICE, DAILY_TABLES } from "@/lib/booking-types"

// ─── PARTY constants (SECRET — server-only) ───────────────────────────────────
const COOK_COST = 3500 // flat, regardless of party size
const PER_GUEST = 75
const PER_DISH = 200
const EXTENDED_AREA_CHARGE = 1999

export type PartyPriceInputs = {
  guests: number
  dishCount: number
  city: string
  waiters: number
  bartenders: number
}

export type PartyPriceBreakdown = {
  // Internal breakdown — stored on the booking for reference, NEVER shown.
  cookCost: number
  guestCost: number
  dishCost: number
  extendedAreaCharge: number
  waiterCost: number
  bartenderCost: number
  // The bundled figure the customer is shown (cook + guests + dishes + travel).
  chefService: number
  total: number
}

/**
 * Authoritative party price. All money is whole rupees.
 */
export function calculatePartyPrice(input: PartyPriceInputs): PartyPriceBreakdown {
  const guests = clampInt(input.guests, 0)
  const dishCount = clampInt(input.dishCount, 0)
  const waiters = clampInt(input.waiters, 0)
  const bartenders = clampInt(input.bartenders, 0)

  const cookCost = COOK_COST
  const guestCost = guests * PER_GUEST
  const dishCost = dishCount * PER_DISH
  const extendedAreaCharge = isExtendedArea(input.city) ? EXTENDED_AREA_CHARGE : 0
  const waiterCost = waiters * WAITER_COST
  const bartenderCost = bartenders * BARTENDER_COST

  // The single figure the customer sees. The extended-area charge is silently
  // absorbed here — never a separate line, never labelled a surcharge.
  const chefService = cookCost + guestCost + dishCost + extendedAreaCharge

  const total = chefService + waiterCost + bartenderCost

  return {
    cookCost,
    guestCost,
    dishCost,
    extendedAreaCharge,
    waiterCost,
    bartenderCost,
    chefService,
    total,
  }
}

/**
 * Customer-facing display shape for a party. Returns ONLY the bundled
 * "Chef & Service" figure plus the (customer-chosen) staff line items. No
 * per-guest / per-dish / cook / travel breakdown is exposed.
 */
export function quotePartyDisplay(input: PartyPriceInputs) {
  const b = calculatePartyPrice(input)
  return {
    chefService: b.chefService,
    waiters: { count: clampInt(input.waiters, 0), unit: WAITER_COST, cost: b.waiterCost },
    bartenders: { count: clampInt(input.bartenders, 0), unit: BARTENDER_COST, cost: b.bartenderCost },
    total: b.total,
  }
}

// ─── DAILY MEALS ──────────────────────────────────────────────────────────────
// Base prices are already public, so this breakdown CAN be shown.

export type DailyTable = "small_table" | "full_table"

export type DailyPriceBreakdown = {
  base: number
  includedDishes: number
  extraDishes: number
  extraDishCost: number
  total: number
}

/**
 * Authoritative daily-meals price. `dishCount` is the total number of dishes
 * the customer selected; anything beyond the table's included allowance is
 * charged at EXTRA_DISH_PRICE each.
 */
export function calculateDailyPrice(table: DailyTable, dishCount: number): DailyPriceBreakdown {
  const config = DAILY_TABLES[table]
  const included = config.includedDishes
  const selected = clampInt(dishCount, 0)
  const extraDishes = Math.max(0, selected - included)
  const extraDishCost = extraDishes * EXTRA_DISH_PRICE
  return {
    base: config.base,
    includedDishes: included,
    extraDishes,
    extraDishCost,
    total: config.base + extraDishCost,
  }
}

function clampInt(n: unknown, min: number): number {
  const v = Math.floor(Number(n))
  if (!Number.isFinite(v) || v < min) return min
  return v
}
