import type { Metadata } from "next"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"

import { FounderClient } from "./founder-client"

export const metadata: Metadata = {
  title: "Built from a Sunday with no cook and a dead Zomato feed. | Savri",
  description:
    "The story behind Savri — a private chef platform built by a 22-year-old who was genuinely tired of bad delivery food. Launching Delhi NCR, June 2026.",
  openGraph: {
    title: "Built from a Sunday with no cook and a dead Zomato feed.",
    description:
      "The story behind Savri — a private chef platform built by a 22-year-old who was genuinely tired of bad delivery food.",
  },
}

export default function FounderPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <FounderClient />
      <Footer />
      <BackToTop />
    </>
  )
}
