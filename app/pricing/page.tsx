import type { Metadata } from "next"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BOOKING_URL, extraDishPrice, pricingFaqs, pricingTiers } from "@/lib/site-data"

import { PricingClient } from "./pricing-client"

export const metadata: Metadata = {
  title: "Pricing | Savri Private Chef at Home",
  description:
    "See Savri's final pricing: Small Table at ₹549, Full Table at ₹1,149, extra dishes at ₹149, and exactly what is included in every booking.",
}

const included = [
  "Professional, trained chef",
  "Fresh cooking in your kitchen",
  "Selected dishes",
  "Plating and service guidance",
  "Kitchen cleanup",
  "Beverage advisory",
]

const notIncluded = [
  "Ingredients, reimbursed separately",
  "Alcohol and other beverages",
  `Extra dishes at ₹${extraDishPrice} each`,
]

const comparison: [string, string, string][] = [
  ["Guests", "1-3 guests", "4-6 guests"],
  ["Price", "₹549", "₹1,149"],
  ["Per Person", "₹183-₹549", "₹191-₹287"],
  ["Cooking Hours", "1 hour", "2 hours"],
  ["Dishes", "2 dishes", "4 dishes"],
  ["Best For", "Couples, small groups", "Family dinners, parties"],
  ["Availability", "High", "Medium"],
]

const examples = [
  {
    title: "2 guests, Small Table, no add-ons",
    lines: ["Base: ₹549"],
    total: "₹549 total",
    perPerson: "₹275 per person",
  },
  {
    title: "4 guests, Full Table, +2 extra dishes",
    lines: ["Base: ₹1,149", "Add-ons: ₹298"],
    total: "₹1,447 total",
    perPerson: "₹361 per person",
  },
  {
    title: "6 guests, Full Table, +3 extra dishes",
    lines: ["Base: ₹1,149", "Add-ons: ₹447"],
    total: "₹1,596 total",
    perPerson: "₹266 per person",
  },
]

export default function PricingPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PricingClient
        tiers={pricingTiers.map((t) => ({
          id: t.id,
          name: t.name,
          guests: t.guests,
          price: t.price,
          dishes: t.dishes,
          hours: t.hours,
          perPerson: t.perPerson,
          bestFor: t.bestFor,
          badge: t.badge,
        }))}
        included={included}
        notIncluded={notIncluded}
        comparison={comparison}
        examples={examples}
        faqs={pricingFaqs}
        bookingUrl={BOOKING_URL}
      />
      <Footer />
      <BackToTop />
    </>
  )
}
