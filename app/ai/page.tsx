import type { Metadata } from "next"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { SavriAiPage } from "@/components/sections/savri-ai-page"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export const metadata: Metadata = {
  title: "Savri AI | Private Chef Intelligence Coming Soon",
  description:
    "Explore Savri AI: taste learning, chef matching, meal prediction, dietary tracking, and the roadmap from August 2026 to December 2026.",
  openGraph: {
    title: "Meet Savri AI",
    description:
      "The future of private chef experiences. See the upcoming Savri AI features, roadmap, privacy commitments, and launch waitlist.",
    images: ["/images/hero-food.jpg"],
  },
}

export default function AiPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <SavriAiPage />
      <Footer />
      <BackToTop />
    </>
  )
}
