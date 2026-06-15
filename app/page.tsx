import type { Metadata } from "next"

import { HomepageRedesign } from "@/components/sections/homepage-redesign"
import { Footer } from "@/components/sections/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Navbar } from "@/components/sections/navbar"
import { FloatingPartyCTA } from "@/components/ui/floating-party-cta"

export const metadata: Metadata = {
  title: "Savri — Private Chef & Party Bookings in Delhi NCR | Ghar Ka Khana, Ghar Pe",
  description:
    "Book a private chef for everyday dining or your next party. Starting ₹549 for regular bookings and ₹5,999 for party bookings in Delhi NCR.",
  openGraph: {
    title: "Savri — Private Chef & Party Bookings in Delhi NCR",
    description:
      "Authentic. Fresh. Personal. Regular dining from ₹549. Party bookings from ₹5,999.",
    images: ["/images/hero-food.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <HomepageRedesign />
      <Footer />
      <BackToTop />
      <FloatingPartyCTA />
    </>
  )
}
