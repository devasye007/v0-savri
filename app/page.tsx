import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { OccasionsSection } from "@/components/sections/occasions-section"
import { WhySavriSection } from "@/components/sections/why-savri-section"
import { ChefSection } from "@/components/sections/chef-section"
import { WaitlistSection } from "@/components/sections/waitlist-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <OccasionsSection />
      <WhySavriSection />
      <ChefSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
