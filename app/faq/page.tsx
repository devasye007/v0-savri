import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import { ChevronRight, Sparkles } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BOOKING_URL, homepageFaqs, pricingFaqs, processFaqs } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "FAQ | Savri Private Chef Booking",
  description:
    "Answers about Savri pricing, booking timelines, ingredients, allergies, cancellations, and what to expect from your private chef experience.",
}

const HERO_IMG = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
const BLEED_IMG = "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1920&q=80"
const CTA_IMG = "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

const sectionAccents = ["#B5636A", "#C9A84C", "#B5636A"] as const

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
      <main className="savri-travel-stack overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── 01 / HERO — image bg + massive serif "FAQ" ─────────── */}
        <div className="savri-hero-wrap">
          <section className="savri-hero-pin">
            <div className="absolute inset-0 savri-hero-img">
              <Image
                src={HERO_IMG}
                alt="Savri private chef at home — frequently asked questions"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.55)_14%,rgba(26,26,26,0.35)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

            <div className="absolute left-6 top-28 z-10 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
              <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
              <ChevronRight className="mx-2 inline h-3 w-3" />
              <span className="text-[#C9A84C]">FAQ</span>
            </div>

            <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#F5F0E8]">
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
                <Sparkles className="h-3 w-3" /> 01 — FAQ
              </p>
              <h1 className="mt-10 flex flex-col items-center leading-[0.86] tracking-tight">
                <span
                  className="block font-serif font-semibold text-[#F5F0E8]"
                  style={{ fontSize: "clamp(120px, 26vw, 480px)", lineHeight: 0.82 }}
                >
                  FAQ.
                </span>
                <span
                  className="mt-6 block font-serif italic text-[#B5636A]"
                  style={{ fontSize: "clamp(28px, 4.5vw, 84px)" }}
                >
                  Clear answers, upfront.
                </span>
              </h1>
              <p className="mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                The goal is clarity. If you are deciding whether Savri is right for your home, start here.
              </p>
            </div>

            <div className="savri-hero-foot absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 text-[#F5F0E8]">
              <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
            </div>
          </section>
        </div>

        {/* ─────────── FAQ SECTIONS — each is a sticky-pinned moment ─────────── */}
        {sections.map((section, sectionIdx) => {
          const accent = sectionAccents[sectionIdx % sectionAccents.length]
          const sectionNumber = String(sectionIdx + 2).padStart(2, "0")
          const itemCount = section.items.length
          return (
            <section
              key={section.label}
              className="relative w-full bg-[#1A1A1A] text-[#F5F0E8]"
            >
              {/* Inside the section: a sticky title rail on the left, the questions scroll on the right */}
              <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-12 px-6 py-32 md:grid-cols-[0.45fr_1fr] md:gap-20 md:px-16 md:py-48">
                <div className="md:sticky md:top-24 md:h-fit">
                  <p
                    className="reveal-up text-[11px] uppercase tracking-[0.5em]"
                    style={{ color: accent }}
                  >
                    {sectionNumber} — {section.label}
                  </p>
                  <h2
                    className="reveal-up mt-8 font-serif font-semibold leading-[0.88] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(56px, 9vw, 180px)" }}
                  >
                    {section.label}
                  </h2>
                  <p
                    className="reveal-up mt-6 font-serif italic"
                    style={{
                      fontSize: "clamp(15px, 1.2vw, 22px)",
                      color: `${accent}`,
                    }}
                  >
                    {itemCount} question{itemCount === 1 ? "" : "s"}
                  </p>
                </div>

                <div className="savri-ai-faq divide-y divide-[#F5F0E8]/15">
                  {section.items.map((faq, i) => (
                    <details
                      key={faq.question}
                      className="reveal-up group py-2"
                      style={{ "--reveal-delay": `${i * 60}ms` } as CSSProperties}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none">
                        <span className="font-serif italic text-xl text-[#F5F0E8] md:text-2xl">
                          {faq.question}
                        </span>
                        <span
                          className="text-3xl transition group-open:rotate-45"
                          style={{ color: accent }}
                        >
                          +
                        </span>
                      </summary>
                      <p className="pb-6 pr-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Between sections — soft full-width hairline to mark chapter */}
              {sectionIdx < sections.length - 1 ? (
                <div className="mx-auto h-px w-full max-w-[1600px] bg-[#F5F0E8]/10" />
              ) : null}
            </section>
          )
        })}

        {/* ─────────── EDGE-FADED IMAGE BLEED — quiet visual break ─────────── */}
        <section className="savri-bleed-wrap text-[#F5F0E8]">
          <div className="absolute inset-0 savri-bleed-img">
            <Image
              src={BLEED_IMG}
              alt="Private chef plating a course at home"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="savri-bleed-overlay absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.4)_18%,rgba(26,26,26,0.25)_50%,rgba(26,26,26,0.85)_82%,#1A1A1A_100%)]" />

          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-20 md:pb-24">
            <div className="savri-bleed-text max-w-[1200px]">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">Still curious?</p>
              <p
                className="mt-6 block font-serif font-semibold"
                style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
              >
                We&apos;ll answer
              </p>
              <p
                className="mt-1 block font-serif font-semibold text-[#B5636A]"
                style={{ fontSize: "clamp(44px, 7.5vw, 136px)", lineHeight: 1 }}
              >
                anything.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── FINAL CTA — cinematic 100svh ─────────── */}
        <section className="relative z-[7] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
          <Image
            src={CTA_IMG}
            alt="Warm home dining moment"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.6)_18%,rgba(26,26,26,0.75)_50%,rgba(26,26,26,0.92)_82%,#1A1A1A_100%)]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <h2
              className="reveal-up font-serif font-semibold leading-[0.85]"
              style={{ fontSize: "clamp(96px, 18vw, 360px)" }}
            >
              Ready?
            </h2>
            <p
              className="reveal-up mt-8 text-[#C9A84C]"
              style={{ fontSize: "clamp(18px, 2.4vw, 40px)" }}
            >
              Book your private chef.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-up mt-12 inline-flex items-center justify-center bg-[#B5636A] px-10 py-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-base"
            >
              Book on WhatsApp →
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
