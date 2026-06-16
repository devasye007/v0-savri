import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Sparkles } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { homepageFaqs, pricingFaqs, processFaqs } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "FAQ | Savri Private Chef Booking",
  description:
    "Answers about Savri pricing, booking timelines, ingredients, allergies, cancellations, and what to expect from your private chef experience.",
}

export default function FaqPage() {
  const sections = [
    { label: "Booking & Service", items: homepageFaqs },
    { label: "Process", items: processFaqs },
    { label: "Pricing", items: pricingFaqs },
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── 01 / HERO ─────────── */}
        <section className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 text-center md:pt-40">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

          <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
            <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
            <ChevronRight className="mx-2 inline h-3 w-3" />
            <span className="text-[#C9A84C]">FAQ</span>
          </div>

          <p className="reveal-up relative z-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            <Sparkles className="h-3 w-3" /> 01 — FAQ
          </p>
          <h1
            className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.9] text-[#F5F0E8]"
            style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
          >
            Clear answers, upfront.
          </h1>
          <p className="reveal-up relative z-10 mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
            The goal is clarity. If you are deciding whether Savri is right for your home, start here.
          </p>
        </section>

        {/* ─────────── FAQ SECTIONS ─────────── */}
        {sections.map((section, sectionIdx) => {
          const glow = sectionIdx % 2 === 0 ? "savri-ai-glow-rose" : "savri-ai-glow-gold"
          const labelColor = sectionIdx % 2 === 0 ? "text-[#B5636A]" : "text-[#C9A84C]"
          const sectionNumber = String(sectionIdx + 2).padStart(2, "0")
          return (
            <section key={section.label} className="relative w-full overflow-hidden py-32 md:py-48">
              <div className={glow} aria-hidden="true" />
              <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
                <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
                  <p className={`reveal-up text-[11px] uppercase tracking-[0.5em] ${labelColor}`}>
                    {sectionNumber} — {section.label}
                  </p>
                  <h2
                    className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
                  >
                    {section.label}
                  </h2>
                </div>

                <div className="savri-ai-faq mt-20 divide-y divide-[#F5F0E8]/15 md:mt-28">
                  {section.items.map((faq) => (
                    <details key={faq.question} className="group py-2">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none">
                        <span className="font-serif italic text-xl text-[#F5F0E8] md:text-2xl">{faq.question}</span>
                        <span className="text-3xl text-[#B5636A] transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="pb-6 pr-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
