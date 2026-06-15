import type { Metadata } from "next"

import { PartyClient } from "./party-client"

export const metadata: Metadata = {
  title: "Party Bookings | Savri — Private Chef for Your Party in Delhi NCR",
  description:
    "Host a stress-free party at home. A vetted Savri private chef cooks 4 snacks, 4 mains, 2 sides + salad and 2 desserts live in your kitchen — from ₹5,999 in Delhi, ₹8,398 across NCR.",
  openGraph: {
    title: "Party Bookings | Savri — Private Chef for Your Party in Delhi NCR",
    description:
      "12 dishes, one fixed price, live cooking at home. Party bookings from ₹5,999.",
    images: ["/images/party-mains.jpg"],
  },
}

export default function PartyPage() {
  return <PartyClient />
}
