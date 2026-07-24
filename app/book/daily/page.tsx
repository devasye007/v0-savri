import type { Metadata } from "next"

import { DailyBookingClient } from "./daily-booking-client"

export const metadata: Metadata = {
  title: "Book Daily Meals | Savri",
  description:
    "Book a private chef for everyday meals at home in Delhi NCR. Small Table ₹549 (1-3 guests) or Full Table ₹1,149 (4-6 guests). Choose your dishes and pay online.",
  alternates: { canonical: "https://savri.co.in/book/daily" },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <DailyBookingClient />
}
