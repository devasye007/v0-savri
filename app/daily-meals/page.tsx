import type { Metadata } from "next"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"

import { DailyMealsClient } from "./daily-meals-client"

export const metadata: Metadata = {
  title: "Daily Meals | Private Chef at Home from ₹549 | Savri",
  description:
    "Book a private chef for daily meals at home in Delhi NCR. Small Table from ₹549, Full Table from ₹1,149. Fresh ingredients, your choice of dishes, kitchen cleaned after.",
  alternates: {
    canonical: "https://savri.co.in/daily-meals",
  },
  openGraph: {
    type: "website",
    url: "https://savri.co.in/daily-meals",
    siteName: "Savri",
    locale: "en_IN",
    title: "Daily Meals | Private Chef at Home from ₹549 | Savri",
    description:
      "Restaurant quality. Every day. At home. Small Table ₹549, Full Table ₹1,149. Extra dishes ₹149.",
    images: [
      {
        url: "/images/hero-food.jpg",
        width: 1200,
        height: 630,
        alt: "Savri daily meals — private chef at home in Delhi NCR",
      },
    ],
  },
}

export default function DailyMealsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <DailyMealsClient />
      <Footer />
      <BackToTop />
    </>
  )
}
