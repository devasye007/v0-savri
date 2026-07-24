import { NextResponse } from "next/server"

import { quotePartyDisplay } from "@/lib/server/pricing"
import type { QuoteRequest, QuoteResponse } from "@/lib/booking-types"

export const runtime = "nodejs"

/**
 * Live display quote for the PARTY flow. Returns ONLY the bundled
 * "Chef & Service" figure and the customer-chosen staff line items — the
 * per-guest / per-dish / cook / travel constants never leave the server.
 *
 * This endpoint is display-only. The authoritative charge is recomputed by
 * /api/booking/create from the raw inputs.
 */
export async function POST(req: Request): Promise<NextResponse> {
  let body: Partial<QuoteRequest>
  try {
    body = (await req.json()) as Partial<QuoteRequest>
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 })
  }

  const quote: QuoteResponse = quotePartyDisplay({
    guests: Number(body.guests) || 0,
    dishCount: Number(body.dishCount) || 0,
    city: typeof body.city === "string" ? body.city : "",
    waiters: Number(body.waiters) || 0,
    bartenders: Number(body.bartenders) || 0,
  })

  return NextResponse.json(quote)
}
