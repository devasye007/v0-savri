"use client"

import Image from "next/image"
import { ArrowRight, ChefHat, Leaf, Sparkles, UtensilsCrossed } from "lucide-react"

import { ScrollReveal } from "@/components/ScrollReveal"
import { BOOKING_URL } from "@/lib/site-data"

const HERO_IMG =
  "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1920&q=80"

const included = [
  {
    icon: ChefHat,
    title: "Verified chef",
    body: "Professionally trained, background-checked, reviewed by real households.",
  },
  {
    icon: Leaf,
    title: "Fresh ingredients",
    body: "No frozen prep, no factory-made gravies. Sourced for your booking.",
  },
  {
    icon: Sparkles,
    title: "Kitchen cleaned",
    body: "Plating, service guidance, and a properly cleaned kitchen before they leave.",
  },
  {
    icon: UtensilsCrossed,
    title: "90+ dishes",
    body: "Build your menu from a wide, curated library — North, South, fusion, and more.",
  },
]

export function DailyMealsClient() {
  return (
    <main className="savri-travel-stack bg-[#1A1A1A] text-[#F5F0E8]">
      {/* — Hero — */}
      <div className="savri-hero-wrap">
        <section className="savri-hero-pin">
          <div className="absolute inset-0 savri-hero-img">
            <Image
              src={HERO_IMG}
              alt="A freshly cooked Indian thali at home"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.55)_14%,rgba(26,26,26,0.4)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

          <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <h1 className="flex flex-col items-center leading-[0.86] tracking-tight">
              <span
                className="block font-serif font-semibold text-[#F5F0E8]"
                style={{ fontSize: "clamp(72px, 12vw, 220px)" }}
              >
                Daily
              </span>
              <span
                className="block font-serif font-semibold text-[#B5636A]"
                style={{ fontSize: "clamp(96px, 16vw, 300px)", lineHeight: 0.82 }}
              >
                Meals.
              </span>
            </h1>
            <p
              className="mt-10 max-w-xl text-base leading-7 text-[#F5F0E8] md:text-lg"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
            >
              Restaurant quality. Every day. At home.
            </p>
          </div>

          <div className="savri-hero-foot absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 text-[#F5F0E8]">
            <span
              className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[12px]"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
            >
              Delhi NCR • From ₹549
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/85"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
            >
              ↓ Scroll
            </span>
          </div>
        </section>
      </div>

      {/* — Pricing — */}
      <section className="relative z-[2] w-full overflow-hidden bg-[#1A1A1A] py-32 md:py-48">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 md:px-16">
          <ScrollReveal direction="up">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
              Simple Pricing
            </p>
          </ScrollReveal>

          <div className="mt-12 flex flex-col gap-3 md:mt-16 md:gap-5">
            {/* Small Table */}
            <ScrollReveal direction="up" delay={120}>
              <div className="w-full">
                <div
                  className="font-sans font-extrabold leading-[0.9] text-[#C9A84C]"
                  style={{
                    fontSize: "clamp(64px, 10vw, 220px)",
                    fontVariantNumeric: "lining-nums tabular-nums",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ₹549
                </div>
                <p
                  className="mt-3 font-sans font-medium tracking-wide text-[#F5F0E8]/90"
                  style={{ fontSize: "clamp(15px, 1.4vw, 24px)" }}
                >
                  Small Table · 1–3 guests · 2 dishes of your choice
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={300}>
              <div className="mt-3 h-px w-full bg-[#B5636A] md:mt-5" />
            </ScrollReveal>

            {/* Full Table */}
            <ScrollReveal direction="up" delay={360}>
              <div className="mt-3 w-full md:mt-5">
                <div
                  className="font-sans font-extrabold leading-[0.9] text-[#C9A84C]"
                  style={{
                    fontSize: "clamp(64px, 10vw, 220px)",
                    fontVariantNumeric: "lining-nums tabular-nums",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ₹1,149
                </div>
                <p
                  className="mt-3 font-sans font-medium tracking-wide text-[#F5F0E8]/90"
                  style={{ fontSize: "clamp(15px, 1.4vw, 24px)" }}
                >
                  Full Table · 4–6 guests · 4 dishes of your choice
                </p>
              </div>
            </ScrollReveal>

            {/* Extra dish */}
            <ScrollReveal direction="up" delay={500}>
              <p
                className="mt-10 font-sans font-medium tracking-wide text-[#F5F0E8]/72 md:mt-14"
                style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}
              >
                <span className="font-semibold text-[#F5F0E8]">+₹149</span> per extra dish
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* — What's included — */}
      <section className="relative z-[3] w-full overflow-hidden bg-[#1A1A1A] py-32 md:py-48">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-16">
          <ScrollReveal direction="up">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
              What&apos;s included
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={120}>
            <h2
              className="mt-6 font-serif font-semibold leading-[0.92] text-[#F5F0E8]"
              style={{ fontSize: "clamp(40px, 5.5vw, 110px)" }}
            >
              Every booking, the same care.
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 md:mt-24">
            {included.map((item, idx) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} direction="up" delay={200 + idx * 100}>
                  <div className="flex items-start gap-5">
                    <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B5636A]/15 text-[#B5636A] ring-1 ring-[#B5636A]/30">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-serif text-2xl font-semibold text-[#F5F0E8] md:text-3xl">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#F5F0E8]/72 md:text-base">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* — CTA — */}
      <section className="relative z-[4] w-full overflow-hidden bg-[#1A1A1A] py-32 md:py-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(181,99,106,0.18),transparent_60%)]" />
        <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 text-center md:px-16">
          <ScrollReveal direction="up">
            <h2
              className="font-serif font-semibold leading-[0.85] text-[#F5F0E8]"
              style={{ fontSize: "clamp(64px, 10vw, 180px)" }}
            >
              Hungry?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={180}>
            <p
              className="mt-8 text-[#C9A84C]"
              style={{ fontSize: "clamp(18px, 2vw, 36px)" }}
            >
              Book your chef on WhatsApp.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={360}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-14 inline-flex items-center justify-center gap-2 bg-[#B5636A] px-10 py-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-base"
            >
              Book Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
