import type { Metadata } from "next"
import { ArrowRight, Check, ChevronRight, Sparkles } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BOOKING_URL, extraDishPrice, pricingFaqs, pricingTiers } from "@/lib/site-data"

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

export default function PricingPage() {
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

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── 01 / HERO ─────────── */}
        <section className="relative isolate flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="savri-ai-orb" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

          <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
            <a href="/" className="hover:text-[#F5F0E8]">Home</a>
            <ChevronRight className="mx-2 inline h-3 w-3" />
            <span className="text-[#C9A84C]">Pricing</span>
          </div>

          <p className="reveal-up relative z-10 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            01 — Pricing
          </p>
          <h1
            className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.86] text-[#F5F0E8]"
            style={{ fontSize: "clamp(56px, 11vw, 220px)" }}
          >
            Affordable Enough to Make It a Habit.
          </h1>
          <p className="reveal-up relative z-10 mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
            Clear base tiers, fixed add-ons, and a straightforward explanation of what is included in every Savri booking.
          </p>

          <div className="reveal-up relative z-10 mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
            >
              Book Now
            </a>
            <a
              href="#tiers"
              className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
            >
              See the tiers
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
            <span>↓ Scroll</span>
          </div>
        </section>

        {/* ─────────── 02 / TIERS ─────────── */}
        <section id="tiers" className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Tiers</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Two tiers. Zero surprises.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {pricingTiers.map((tier, i) => (
                <article
                  key={tier.id}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.4em] text-[#B5636A]">{tier.guests}</p>
                    {tier.badge ? (
                      <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#C9A84C]">{tier.badge}</span>
                    ) : null}
                  </div>
                  <div>
                    <h3
                      className="font-serif italic leading-[0.9] text-[#F5F0E8]"
                      style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className="mt-4 font-serif italic leading-none text-[#C9A84C]"
                      style={{ fontSize: "clamp(48px, 8vw, 140px)" }}
                    >
                      ₹{tier.price.toLocaleString("en-IN")}
                    </p>
                    <p className="mt-4 text-base text-[#F5F0E8]/72 md:text-lg">{tier.perPerson}</p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-3xl">
                      <div className="border-l border-[#F5F0E8]/18 pl-5">
                        <p className="text-[10px] uppercase tracking-[0.32em] text-[#F5F0E8]/50">Dishes</p>
                        <p className="mt-2 text-base text-[#F5F0E8]/85">{tier.dishes} dishes</p>
                      </div>
                      <div className="border-l border-[#F5F0E8]/18 pl-5">
                        <p className="text-[10px] uppercase tracking-[0.32em] text-[#F5F0E8]/50">Cooking Time</p>
                        <p className="mt-2 text-base text-[#F5F0E8]/85">{tier.hours} hour{tier.hours > 1 ? "s" : ""}</p>
                      </div>
                      <div className="border-l border-[#B5636A]/55 pl-5 md:col-span-2">
                        <p className="text-[10px] uppercase tracking-[0.32em] text-[#F5F0E8]/50">Best For</p>
                        <p className="mt-2 text-base text-[#F5F0E8]/85">{tier.bestFor}</p>
                      </div>
                    </div>

                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="savri-ai-btn-primary mt-10 inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                    >
                      Book {tier.name}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 03 / COMPARISON ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — Comparison</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Side by side.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              <div className="reveal-up grid grid-cols-3 gap-8 border-t border-[#F5F0E8]/12 py-6 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                <span>Feature</span>
                <span>Small Table</span>
                <span>Full Table</span>
              </div>
              {comparison.map((row) => (
                <div
                  key={row[0]}
                  className="savri-ai-row reveal-up grid grid-cols-3 gap-8 border-t border-[#F5F0E8]/12 py-8 md:py-10"
                >
                  <span className="font-serif italic text-[#F5F0E8]" style={{ fontSize: "clamp(18px, 1.8vw, 28px)" }}>{row[0]}</span>
                  <span className="text-base text-[#F5F0E8]/78 md:text-lg">{row[1]}</span>
                  <span className="text-base text-[#F5F0E8]/78 md:text-lg">{row[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 04 / EXAMPLES ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — Examples</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                What you actually pay.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {examples.map((example, i) => (
                <article
                  key={example.title}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#B5636A]">Pricing Example</span>
                  </div>
                  <div>
                    <h3
                      className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                      style={{ fontSize: "clamp(24px, 3vw, 48px)" }}
                    >
                      {example.title}
                    </h3>
                    <div className="mt-6 space-y-2 text-base text-[#F5F0E8]/72 md:text-lg">
                      {example.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <p
                      className="mt-6 font-serif italic leading-none text-[#C9A84C]"
                      style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                    >
                      {example.total}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.32em] text-[#F5F0E8]/55">{example.perPerson}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 05 / INCLUDED ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — Included</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                What you are paying for
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {included.map((item, i) => (
                <div
                  key={item}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-12 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-14"
                >
                  <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Check className="h-9 w-9 text-[#C9A84C]" />
                  </div>
                  <p className="max-w-3xl font-serif italic leading-[1.05] text-[#F5F0E8]" style={{ fontSize: "clamp(22px, 2.6vw, 40px)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 06 / NOT INCLUDED ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">06 — Add-ons</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                What sits outside base price
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {notIncluded.map((item, i) => (
                <div
                  key={item}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-12 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-14"
                >
                  <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Sparkles className="h-9 w-9 text-[#B5636A]" />
                  </div>
                  <p className="max-w-3xl font-serif italic leading-[1.05] text-[#F5F0E8]" style={{ fontSize: "clamp(22px, 2.6vw, 40px)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 07 / FAQ ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">07 — FAQ</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Pricing questions.
              </h2>
            </div>

            <div className="savri-ai-faq mt-20 divide-y divide-[#F5F0E8]/15 md:mt-28">
              {pricingFaqs.map((faq) => (
                <details key={faq.question} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none">
                    <span className="font-serif italic text-xl text-[#F5F0E8] md:text-2xl">{faq.question}</span>
                    <span className="text-3xl text-[#B5636A] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-6 pr-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="reveal-up mt-20 flex justify-center md:mt-24">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
              >
                Book Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
