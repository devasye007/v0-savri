import type { Metadata } from "next"
import { ArrowRight, Check } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Reveal } from "@/components/ui/reveal"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SiteBreadcrumb } from "@/components/ui/site-breadcrumb"
import { BOOKING_URL, extraDishPrice, pricingFaqs, pricingTiers } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Pricing | Savri Private Chef at Home",
  description:
    "See Savri's final pricing: Tier 1 at ₹549, Tier 2 at ₹1,149, extra dishes at ₹149, and exactly what is included in every booking.",
}

export default function PricingPage() {
  const examples = [
    {
      title: "2 guests, Tier 1, no add-ons",
      lines: ["Base: ₹549"],
      total: "₹549 total",
      perPerson: "₹275 per person",
    },
    {
      title: "4 guests, Tier 2, +2 extra dishes",
      lines: ["Base: ₹1,149", "Add-ons: ₹298"],
      total: "₹1,447 total",
      perPerson: "₹361 per person",
    },
    {
      title: "6 guests, Tier 2, +3 extra dishes",
      lines: ["Base: ₹1,149", "Add-ons: ₹447"],
      total: "₹1,596 total",
      perPerson: "₹266 per person",
    },
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-cream pt-32 text-dark">
        <section className="container mx-auto px-6 pb-20">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Pricing</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl">Affordable Enough to Make It a Habit.</h1>
            <p className="mt-6 text-base leading-8 text-dark/68 md:text-lg">
              Clear base tiers, fixed add-ons, and a straightforward explanation of what is included in every Savri booking.
            </p>
          </Reveal>
        </section>

        <section className="bg-[#fffaf4] py-20">
          <div className="container mx-auto px-6">
            <Reveal className="overflow-hidden rounded-[2rem] border border-dark/8 bg-white shadow-[0_18px_50px_rgba(26,26,26,0.05)]">
              <div className="grid border-b border-dark/8 bg-dark px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-cream/80 md:grid-cols-3">
                <span>Feature</span>
                <span>Tier 1</span>
                <span>Tier 2</span>
              </div>
              {[
                ["Guests", "1-3 guests", "4-6 guests"],
                ["Price", "₹549", "₹1,149"],
                ["Per Person", "₹183-₹549", "₹191-₹287"],
                ["Cooking Hours", "1 hour", "2 hours"],
                ["Dishes", "2 dishes", "4 dishes"],
                ["Best For", "Couples, small groups", "Family dinners, parties"],
                ["Availability", "High", "Medium"],
              ].map((row) => (
                <div key={row[0]} className="grid gap-2 border-b border-dark/8 px-6 py-5 text-sm md:grid-cols-3 md:gap-6">
                  <span className="font-semibold text-dark">{row[0]}</span>
                  <span className="text-dark/70">{row[1]}</span>
                  <span className="text-dark/70">{row[2]}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {examples.map((example, index) => (
                <Reveal key={example.title} delayMs={index * 80}>
                <article className="immersive-card interactive-spotlight rounded-[2rem] border border-dark/8 bg-white p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">Pricing Example</p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold text-dark">{example.title}</h2>
                  <div className="mt-6 space-y-2 text-sm text-dark/70">
                    {example.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <p className="mt-6 text-2xl font-semibold text-dark">{example.total}</p>
                  <p className="mt-1 text-sm text-dark/55">{example.perPerson}</p>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-dark py-20 text-cream">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2">
            <Reveal>
            <div className="immersive-card rounded-[2rem] border border-white/10 bg-white/6 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Included</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold">What you are paying for</h2>
              <div className="mt-8 grid gap-3">
                {[
                  "Professional, trained chef",
                  "Fresh cooking in your kitchen",
                  "Selected dishes",
                  "Plating and service guidance",
                  "Kitchen cleanup",
                  "Beverage advisory",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-cream/78">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>

            <Reveal delayMs={120} variant="right">
            <div className="immersive-card rounded-[2rem] border border-white/10 bg-white/6 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Not Included</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold">What sits outside base price</h2>
              <div className="mt-8 grid gap-3">
                {[
                  "Ingredients, reimbursed separately",
                  "Alcohol and other beverages",
                  `Extra dishes at ₹${extraDishPrice} each`,
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-cream/78">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <Reveal className="mx-auto max-w-4xl divide-y divide-dark/10 rounded-[2rem] border border-dark/8 bg-white">
              {pricingFaqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-dark">
                    {faq.question}
                    <span className="text-2xl text-rose transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-7 text-dark/68">{faq.answer}</p>
                </details>
              ))}
            </Reveal>

            <Reveal className="mt-10 text-center" delayMs={120}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="immersive-button hover-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-rose px-7 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark"
              >
                Book Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
