import type { Metadata } from "next"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"

import { AboutClient } from "./about-client"

export const metadata: Metadata = {
  title: "About Savri | Premium Private Dining",
  description:
    "Learn why Savri exists, what the team believes about premium home dining, and the values behind our private chef experience.",
}

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <AboutClient />
      <Footer />
      <BackToTop />
    </>
  )
}
