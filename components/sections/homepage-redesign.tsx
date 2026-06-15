"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState, type ReactNode } from "react"

import { BOOKING_URL } from "@/lib/site-data"

const HERO_IMG = "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1920&q=80"
const BLEED_IMG = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const PARTY_IMG = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
const CTA_IMG = "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

const DISHES = [
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80", alt: "Hyderabadi biryani" },
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80", alt: "Hand-rolled pasta" },
  { src: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=900&q=80", alt: "Indian thali" },
  { src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=900&q=80", alt: "Asian noodles" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80", alt: "Wood-fired pizza" },
]

function Reveal({
  children,
  className = "",
  threshold = 0.5,
  delayMs = 0,
  as = "div",
}: {
  children: ReactNode
  className?: string
  threshold?: number
  delayMs?: number
  as?: "div" | "span" | "p" | "h2" | "h3" | "section"
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [threshold])

  const Tag = as as any
  const baseStyle = {
    opacity: shown ? 1 : 0,
    transform: shown ? "translate3d(0,0,0)" : "translate3d(0,40px,0)",
    transition:
      "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: `${delayMs}ms`,
    willChange: "opacity, transform",
  }

  return (
    <Tag ref={ref} className={className} style={baseStyle}>
      {children}
    </Tag>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Image
        src={HERO_IMG}
        alt="Indian feast plated for a private chef dinner at home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.6)_0%,rgba(10,10,10,0.35)_40%,rgba(10,10,10,0.85)_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="flex flex-col items-center leading-[0.86] tracking-tight">
          <Reveal as="span" delayMs={150} threshold={0.1}>
            <span
              className="block font-serif italic text-[#F5F0E8]"
              style={{ fontSize: "clamp(72px, 12vw, 220px)" }}
            >
              Private
            </span>
          </Reveal>
          <Reveal as="span" delayMs={450} threshold={0.1}>
            <span
              className="block font-sans font-extrabold text-[#B5636A]"
              style={{ fontSize: "clamp(96px, 16vw, 300px)", lineHeight: 0.82 }}
            >
              Chef.
            </span>
          </Reveal>
          <Reveal as="span" delayMs={780} threshold={0.1}>
            <span
              className="block font-serif italic text-[#F5F0E8]"
              style={{ fontSize: "clamp(60px, 10vw, 184px)" }}
            >
              Ghar Pe.
            </span>
          </Reveal>
        </h1>
      </div>

      <Reveal
        delayMs={1100}
        threshold={0.1}
        className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-4"
      >
        <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[12px]">
          Delhi NCR • Book Now
        </span>
        <span className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">
          <span>↓ Scroll</span>
        </span>
      </Reveal>
    </section>
  )
}

function StatementSection() {
  const lines = [
    "A chef arrives at your door.",
    "Cooks what you love.",
    "Cleans up after.",
    "You just eat.",
  ]
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center bg-[#F5F0E8] px-6 py-32 text-[#1A1A1A] md:px-20 md:py-48">
      <div className="mx-auto w-full max-w-[1500px]">
        {lines.map((line, idx) => (
          <Reveal key={line} as="p" threshold={0.5} delayMs={0}>
            <span
              className={`block font-serif leading-[1.05] tracking-tight ${
                idx === lines.length - 1 ? "italic text-[#B5636A]" : "text-[#1A1A1A]"
              }`}
              style={{ fontSize: "clamp(34px, 5vw, 96px)", marginTop: idx === 0 ? 0 : "0.4em" }}
            >
              {line}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FullBleedSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Image
        src={BLEED_IMG}
        alt="Chef cooking a vibrant spread"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0)_30%,rgba(10,10,10,0.85)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-20 md:pb-24">
        <div className="max-w-[1200px]">
          <Reveal as="p" threshold={0.4}>
            <span
              className="block font-serif italic text-[#F5F0E8]"
              style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
            >
              Your menu.
            </span>
          </Reveal>
          <Reveal as="p" threshold={0.4} delayMs={150}>
            <span
              className="mt-1 block font-serif italic text-[#F5F0E8]"
              style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
            >
              Your kitchen.
            </span>
          </Reveal>
          <Reveal as="p" threshold={0.4} delayMs={300}>
            <span
              className="mt-1 block font-sans font-extrabold text-[#B5636A]"
              style={{ fontSize: "clamp(44px, 7.5vw, 136px)", lineHeight: 1 }}
            >
              Your rules.
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function DishesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <div className="grid min-h-[100svh] grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[0.95fr_1.4fr] md:gap-16 md:px-16 md:py-32">
        <div className="lg:sticky lg:top-1/3">
          <Reveal as="p" threshold={0.3}>
            <span className="block text-[11px] uppercase tracking-[0.42em] text-[#C9A84C]">
              The Menu
            </span>
          </Reveal>
          <Reveal as="h2" threshold={0.3} delayMs={120}>
            <span
              className="mt-6 block font-serif italic leading-[0.92] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 6vw, 128px)" }}
            >
              90+ dishes
              <br />
              to choose
              <br />
              from.
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {DISHES.map((dish, idx) => (
            <Reveal key={dish.src} threshold={0.2} delayMs={idx * 120}>
              <div className="relative aspect-[3/5] w-full overflow-hidden">
                <Image
                  src={dish.src}
                  alt={dish.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 18vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const tiers = [
    { price: "₹549", label: "Small Table • 1-3 guests • 2 dishes" },
    { price: "₹1,149", label: "Full Table • 4-6 guests • 4 dishes" },
    { price: "₹6,399", label: "Party Booking • Delhi • Custom menu" },
  ]
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center bg-[#F5F0E8] px-6 py-24 text-[#1A1A1A] md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-[1600px]">
        <Reveal as="p" threshold={0.4}>
          <span className="block text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            Simple Pricing
          </span>
        </Reveal>

        <div className="mt-20 flex flex-col">
          {tiers.map((tier, idx) => (
            <div key={tier.price} className="w-full">
              <Reveal as="div" threshold={0.45}>
                <div
                  className="block font-sans font-extrabold leading-[0.9] text-[#C9A84C]"
                  style={{ fontSize: "clamp(80px, 15vw, 320px)" }}
                >
                  {tier.price}
                </div>
              </Reveal>
              <Reveal as="p" threshold={0.45} delayMs={150}>
                <span
                  className="mt-4 block font-serif italic text-[#1A1A1A]"
                  style={{ fontSize: "clamp(18px, 2vw, 38px)" }}
                >
                  {tier.label}
                </span>
              </Reveal>
              {idx < tiers.length - 1 ? (
                <Reveal threshold={0.4} delayMs={300}>
                  <div className="my-16 h-px w-full bg-[#B5636A]/70 md:my-20" />
                </Reveal>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartyTeaserSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Image
        src={PARTY_IMG}
        alt="Party booking dinner spread"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/75" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <Reveal as="p" threshold={0.3}>
          <span
            className="block uppercase text-[#C9A84C]"
            style={{ fontSize: "clamp(12px, 1.5vw, 22px)", letterSpacing: "0.5em" }}
          >
            Introducing
          </span>
        </Reveal>
        <Reveal as="h2" threshold={0.3} delayMs={150}>
          <span
            className="mt-6 block font-serif italic leading-[0.88] text-[#F5F0E8]"
            style={{ fontSize: "clamp(80px, 15vw, 280px)" }}
          >
            party
          </span>
        </Reveal>
        <Reveal as="h2" threshold={0.3} delayMs={350}>
          <span
            className="block font-serif italic leading-[0.88] text-[#B5636A]"
            style={{ fontSize: "clamp(80px, 15vw, 280px)" }}
          >
            bookings.
          </span>
        </Reveal>
        <Reveal as="p" threshold={0.3} delayMs={600}>
          <Link
            href="/party"
            className="group mt-12 inline-flex items-center gap-3 text-white"
            style={{ fontSize: "clamp(18px, 2vw, 36px)" }}
          >
            <span>From ₹6,399</span>
            <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Image
        src={CTA_IMG}
        alt="Warm home dining"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.55),rgba(10,10,10,0.9))]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <Reveal as="h2" threshold={0.25}>
          <span
            className="block font-serif italic leading-[0.85] text-[#F5F0E8]"
            style={{ fontSize: "clamp(120px, 20vw, 400px)" }}
          >
            Ready?
          </span>
        </Reveal>
        <Reveal as="p" threshold={0.25} delayMs={200}>
          <span
            className="mt-10 block text-[#C9A84C]"
            style={{ fontSize: "clamp(20px, 3vw, 52px)" }}
          >
            Book your private chef.
          </span>
        </Reveal>
        <Reveal as="p" threshold={0.25} delayMs={400}>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-flex items-center justify-center bg-[#B5636A] px-10 py-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-base"
          >
            Book on WhatsApp →
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function HomepageRedesign() {
  return (
    <main className="bg-[#1A1A1A] text-[#F5F0E8]">
      <HeroSection />
      <StatementSection />
      <FullBleedSection />
      <DishesSection />
      <PricingSection />
      <PartyTeaserSection />
      <FinalCTASection />
    </main>
  )
}
