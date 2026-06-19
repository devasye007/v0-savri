// Father's Day 2026 promotional window — active up to and including 21 Jun 2026 IST.
// Cutoff is 22 Jun 2026 00:00 IST = 21 Jun 2026 18:30 UTC.
const FATHERS_DAY_CUTOFF_MS = Date.UTC(2026, 5, 21, 18, 30, 0)

export function isFathersDayOfferActive(now: Date = new Date()): boolean {
  return now.getTime() < FATHERS_DAY_CUTOFF_MS
}

export const FATHERS_DAY_VALIDITY_COPY = "Offer valid until June 21, 2026"
