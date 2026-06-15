import { HomepageRedesign } from "@/components/sections/homepage-redesign"
import { Footer } from "@/components/sections/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Navbar } from "@/components/sections/navbar"
import { FloatingPartyCTA } from "@/components/ui/floating-party-cta"

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
