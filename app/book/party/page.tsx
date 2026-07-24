import type { Metadata } from "next"

import { PartyBookingClient } from "./party-booking-client"

export const metadata: Metadata = {
  title: "Book a Party Chef | Savri",
  description:
    "Book a private chef for your party in Delhi NCR. Pick your date, choose from 90+ dishes, add waiters and bartenders, and pay securely online.",
  alternates: { canonical: "https://savri.co.in/book/party" },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <PartyBookingClient />
}
