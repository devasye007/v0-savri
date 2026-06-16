import type { Metadata } from "next"
import { ArrowRight, Check, ChevronRight, Clock3 } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BOOKING_URL, howItWorksSteps, processFaqs } from "@/lib/site-data"

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
      <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── 01 / HERO ─────────── */}
        <section className="relative isolate flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="savri-ai-orb" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

          <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
            <a href="/" className="hover:text-[#F5F0E8]">Home</a>
            <ChevronRight className="mx-2 inline h-3 w-3" />
            <span className="text-[#C9A84C]">How It Works</span>
          </div>

          <p className="reveal-up relative z-10 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            01 — How It Works
          </p>
          <h1
            className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.86] text-[#F5F0E8]"
            style={{ fontSize: "clamp(64px, 13vw, 260px)" }}
          >
            From booking to enjoying.
          </h1>
          <p className="reveal-up relative z-10 mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
            Savri is designed to feel premium without feeling complicated. Here is the full process, step by step.
          </p>

          <div className="reveal-up relative z-10 mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
            >
              Book a Chef Now
            </a>
            <a
              href="#steps"
              className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
            >
              See the full process
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
            <span>↓ Scroll</span>
          </div>
        </section>

        {/* ─────────── 02 / STEPS ─────────── */}
        <section id="steps" className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — The Steps</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Six clean steps from sign-up to service.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {howItWorksSteps.map((step) => (
                <article
                  key={step.step}
                  className="savri-ai-row reveal-up grid grid-cols-1 items-baseline gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.18fr_0.45fr_1fr] md:gap-12 md:py-18"
                >
                  <div
                    className="font-serif italic leading-none text-[#C9A84C]"
                    style={{ fontSize: "clamp(72px, 9vw, 180px)" }}
                  >
                    {step.step}
                  </div>
                  <div className="flex flex-col gap-4">
                    <step.icon className="h-9 w-9 text-[#B5636A]" />
                    <h3
                      className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                      style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]/85">
                      Typical time · {step.timing}
                    </p>
                  </div>
                  <p className="max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                    {step.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 03 / WHAT THE CHEF DOES ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — What the Chef Does</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Service, cooking, plating, cleanup.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {chefDoes.map((item, i) => (
                <div
                  key={item}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-12 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-16"
                >
                  <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Check className="h-9 w-9 text-[#B5636A]" />
                  </div>
                  <p className="max-w-3xl font-serif italic leading-[1.05] text-[#F5F0E8]" style={{ fontSize: "clamp(24px, 3vw, 44px)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 04 / WHAT YOU PROVIDE ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — What You Provide</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                The essentials from your side.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {youProvide.map((item, i) => (
                <div
                  key={item}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-12 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-16"
                >
                  <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Check className="h-9 w-9 text-[#B5636A]" />
                  </div>
                  <p className="max-w-3xl font-serif italic leading-[1.05] text-[#F5F0E8]" style={{ fontSize: "clamp(24px, 3vw, 44px)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 05 / 24-HOUR RULE ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — 24-Hour Rule</p>
              <div>
                <h2
                  className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
                >
                  Why 24 hours minimum?
                </h2>
                <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  It protects quality. Your chef needs time for sourcing, route planning, and prep decisions. That lead time is what keeps the service professional instead of rushed.
                </p>
              </div>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {[
                "Ensures chef availability for your preferred slot.",
                "Leaves enough time for ingredient sourcing and dish planning.",
                "Helps us maintain cleaner logistics and stronger service standards.",
              ].map((line, i) => (
                <div
                  key={line}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-12 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-16"
                >
                  <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Clock3 className="h-9 w-9 text-[#C9A84C]" />
                  </div>
                  <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/78 md:text-lg">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 06 / FAQ ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">06 — FAQ</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Questions before you book.
              </h2>
            </div>

            <div className="savri-ai-faq mt-20 divide-y divide-[#F5F0E8]/15 md:mt-28">
              {processFaqs.map((faq) => (
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
                Book a Chef Now
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
