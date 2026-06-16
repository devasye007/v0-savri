import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { aboutValues } from "@/lib/site-data"

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
      <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── 01 / HERO ─────────── */}
        <section className="relative isolate flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="savri-ai-orb" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

          <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
            <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
            <ChevronRight className="mx-2 inline h-3 w-3" />
            <span className="text-[#C9A84C]">About</span>
          </div>

          <p className="reveal-up relative z-10 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            01 — About Savri
          </p>
          <h1
            className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.86] text-[#F5F0E8]"
            style={{ fontSize: "clamp(64px, 13vw, 260px)" }}
          >
            Premium private dining for real homes.
          </h1>
          <p className="reveal-up relative z-10 mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
            Savri started with a simple observation: people want better food at home, but most options are either impersonal delivery or high-friction event catering. We built something in between and better.
          </p>

          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
            <span>↓ Scroll</span>
          </div>
        </section>

        {/* ─────────── 02 / OUR STORY ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Our Story</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Why we started Savri
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">01</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  We wanted to make private chef experiences feel accessible, dependable, and beautifully simple. Not just for rare celebrations, but for people who care about food, hosting, and quality time at home.
                </p>
              </div>
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">02</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  That means transparent pricing, properly vetted chefs, thoughtful service standards, and eventually AI that personalizes the experience without making it feel cold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 03 / MISSION ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — Mission</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Premium private dining for everyone who values it.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">01</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  Our goal is not to imitate restaurant dining at home. It is to create something more intimate: fresh food, your kitchen, your pace, and a chef service you can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 04 / VALUES ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — Values</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                What we believe in
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {aboutValues.map((value, i) => (
                <div
                  key={value.title}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
                >
                  <div className="flex items-start gap-6 md:flex-col md:items-start md:gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <value.icon className="h-9 w-9 text-[#B5636A]" />
                  </div>
                  <div>
                    <h3
                      className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                      style={{ fontSize: "clamp(28px, 4.2vw, 72px)" }}
                    >
                      {value.title}
                    </h3>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                      {value.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 05 / EXPLORE ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — Explore</p>
              <div>
                <h2
                  className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
                >
                  Keep reading
                </h2>
                <div className="reveal-up mt-12 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/founder"
                    className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                  >
                    The founder story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                  >
                    How Savri works
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
