import type { Metadata } from "next"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BOOKING_URL, howItWorksSteps, processFaqs } from "@/lib/site-data"

import { HowItWorksClient } from "./how-it-works-client"

export const metadata: Metadata = {
  title: "How It Works | Savri Private Chef Booking",
  description:
    "See how Savri works from booking to plating: tier selection, menu planning, 24-hour rule, and what to expect from your private chef.",
}

const chefDoes = [
  "Arrives on time and sets up your kitchen",
  "Cooks all selected dishes fresh",
  "Plates beautifully and serves if desired",
  "Cleans up completely before leaving",
  "Leaves the kitchen service-ready, not chaotic",
]

const youProvide = [
  "Access to your kitchen at the scheduled time",
  "Ingredient reimbursement",
  "Your existing plates and kitchen utensils unless otherwise arranged",
  "Beverages or alcohol if you want them served",
]

export default function HowItWorksPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <HowItWorksClient
        steps={howItWorksSteps.map((s) => ({
          step: s.step,
          title: s.title,
          timing: s.timing,
          copy: s.copy,
        }))}
        chefDoes={chefDoes}
        youProvide={youProvide}
        faqs={processFaqs}
        bookingUrl={BOOKING_URL}
      />
      <Footer />
      <BackToTop />
    </>
  )
}
