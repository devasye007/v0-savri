"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"

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

/** Adds `is-on` to the element (and its descendants matching .savri-rise / .savri-dish / .savri-from-*) the first time it enters the viewport. */
function useOnEnter<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const root = entry.target as HTMLElement
            root.classList.add("is-on")
            root
              .querySelectorAll<HTMLElement>(
                ".savri-rise, .savri-dish, .savri-from-left, .savri-from-right, .savri-line-draw",
              )
              .forEach((el) => el.classList.add("is-on"))
            io.unobserve(root)
          }
        })
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [threshold])
  return ref
}

function CountUp({ target, duration = 1400 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const run = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.round(target * eased))
              if (t < 1) requestAnimationFrame(run)
            }
            requestAnimationFrame(run)
            io.unobserve(node)
          }
        })
      },
      { threshold: 0.5 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [target, duration])

  return <span ref={ref}>₹{value.toLocaleString("en-IN")}</span>
}

/** Renders a phrase as <span class="savri-word"> blocks with scroll-driven activation ranges in vh. */
function WordStream({
  text,
  startVh,
  endVh,
  windowVh = 28,
  className = "",
  style,
}: {
  text: string
  startVh: number
  endVh: number
  windowVh?: number
  className?: string
  style?: CSSProperties
}) {
  const words = text.split(" ")
  const span = endVh - startVh
  const step = words.length > 1 ? span / (words.length - 1) : 0

  return (
    <span className={className} style={style}>
      {words.map((w, i) => {
        const ws = Math.round(startVh + i * step)
        const we = Math.round(ws + windowVh)
        return (
          <span
            key={i}
            className="savri-word"
            style={{ "--ws": ws, "--we": we } as CSSProperties}
          >
            {w}
          </span>
        )
      })}
    </span>
  )
}

function HeroSection() {
  return (
    <div className="savri-hero-wrap">
      <section className="savri-hero-pin">
        <div className="absolute inset-0 savri-hero-img">
          <Image
            src={HERO_IMG}
            alt="Indian feast plated for a private chef dinner at home"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.55)_0%,rgba(10,10,10,0.3)_42%,rgba(10,10,10,0.85)_100%)]" />

        <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#F5F0E8]">
          <h1 className="flex flex-col items-center leading-[0.86] tracking-tight">
            <span
              className="block font-serif italic text-[#F5F0E8]"
              style={{ fontSize: "clamp(72px, 12vw, 220px)" }}
            >
              Private
            </span>
            <span
              className="block font-sans font-extrabold text-[#B5636A]"
              style={{ fontSize: "clamp(96px, 16vw, 300px)", lineHeight: 0.82 }}
            >
              Chef.
            </span>
            <span
              className="block font-serif italic text-[#F5F0E8]"
              style={{ fontSize: "clamp(60px, 10vw, 184px)" }}
            >
              Ghar Pe.
            </span>
          </h1>
        </div>

        <div className="savri-hero-foot absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 text-[#F5F0E8]">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[12px]">
            Delhi NCR • Book Now
          </span>
          <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
        </div>
      </section>
    </div>
  )
}

function WordsSection() {
  return (
    <section className="savri-words-wrap text-[#1A1A1A]">
      <div className="savri-words-pin">
        <div className="mx-auto w-full max-w-[1600px]">
          <p
            className="font-serif leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(34px, 5vw, 96px)" }}
          >
            <WordStream
              text="A chef arrives at your door."
              startVh={70}
              endVh={170}
              className="block"
            />
            <WordStream
              text="Cooks what you love."
              startVh={170}
              endVh={240}
              className="mt-[0.35em] block"
            />
            <WordStream
              text="Cleans up after."
              startVh={240}
              endVh={300}
              className="mt-[0.35em] block"
            />
            <WordStream
              text="You just eat."
              startVh={300}
              endVh={360}
              className="mt-[0.35em] block italic text-[#B5636A]"
            />
          </p>
        </div>
      </div>
    </section>
  )
}

function BleedSection() {
  return (
    <section className="savri-bleed-wrap text-[#F5F0E8]">
      <div className="absolute inset-0 savri-bleed-img">
        <Image
          src={BLEED_IMG}
          alt="A vibrant home dinner spread"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="savri-bleed-overlay absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0)_30%,rgba(10,10,10,0.85)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-20 md:pb-24">
        <div className="savri-bleed-text max-w-[1200px]">
          <p
            className="block font-serif italic"
            style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
          >
            Your menu.
          </p>
          <p
            className="mt-1 block font-serif italic"
            style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
          >
            Your kitchen.
          </p>
          <p
            className="mt-1 block font-sans font-extrabold text-[#B5636A]"
            style={{ fontSize: "clamp(44px, 7.5vw, 136px)", lineHeight: 1 }}
          >
            Your rules.
          </p>
        </div>
      </div>
    </section>
  )
}

function DishesSection() {
  const ref = useOnEnter<HTMLElement>(0.2)
  return (
    <section
      ref={ref}
      className="relative z-[4] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
    >
      <div className="grid min-h-[100svh] grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[0.95fr_1.4fr] md:gap-16 md:px-16 md:py-32">
        <div className="lg:sticky lg:top-1/3">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[#C9A84C]">The Menu</p>
          <h2
            className="mt-6 font-serif italic leading-[0.92]"
            style={{ fontSize: "clamp(48px, 6vw, 128px)" }}
          >
            90+ dishes
            <br />
            to choose
            <br />
            from.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {DISHES.map((dish, idx) => (
            <div
              key={dish.src}
              className="savri-dish relative aspect-[3/5] w-full overflow-hidden"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Image
                src={dish.src}
                alt={dish.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 18vw, 45vw"
                className="savri-dish-img object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingHeader() {
  const ref = useOnEnter<HTMLParagraphElement>(0.5)
  return (
    <p
      ref={ref}
      className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
    >
      Simple Pricing
    </p>
  )
}

function PricingSection() {
  const tiers: Array<{ amount: number; label: string }> = [
    { amount: 549, label: "Small Table • 1-3 guests • 2 dishes" },
    { amount: 1149, label: "Full Table • 4-6 guests • 4 dishes" },
    { amount: 6399, label: "Party Booking • Delhi • Custom menu" },
  ]
  return (
    <section className="relative z-[5] flex min-h-[100svh] w-full flex-col justify-center bg-[#F5F0E8] px-6 py-24 text-[#1A1A1A] md:px-16 md:py-32">
      <div className="mx-auto w-full max-w-[1600px]">
        <PricingHeader />

        <div className="mt-16 flex flex-col md:mt-24">
          {tiers.map((tier, idx) => (
            <Reveal key={tier.amount} idx={idx} amount={tier.amount} label={tier.label} isLast={idx === tiers.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Reveal({
  amount,
  label,
  isLast,
}: {
  idx: number
  amount: number
  label: string
  isLast: boolean
}) {
  const ref = useOnEnter<HTMLDivElement>(0.4)
  return (
    <div ref={ref} className="w-full">
      <div
        className="savri-rise font-sans font-extrabold leading-[0.9] text-[#C9A84C]"
        style={{ fontSize: "clamp(80px, 15vw, 320px)" }}
      >
        <CountUp target={amount} />
      </div>
      <p
        className="savri-rise mt-4 font-serif italic text-[#1A1A1A]"
        style={{ fontSize: "clamp(18px, 2vw, 38px)", transitionDelay: "150ms" }}
      >
        {label}
      </p>
      {!isLast ? (
        <div className="my-14 md:my-20">
          <div className="savri-line-draw h-px w-full bg-[#B5636A]" />
        </div>
      ) : null}
    </div>
  )
}

function PartyTeaserSection() {
  const ref = useOnEnter<HTMLElement>(0.3)
  return (
    <section
      ref={ref}
      className="relative z-[6] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
    >
      <div className="savri-ambient-zoom absolute inset-0">
        <Image
          src={PARTY_IMG}
          alt="Party booking dinner spread"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#1A1A1A]/75" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="savri-rise uppercase text-[#C9A84C]"
          style={{ fontSize: "clamp(12px, 1.5vw, 22px)", letterSpacing: "0.5em" }}
        >
          Introducing
        </p>
        <h2
          className="savri-from-left mt-6 font-serif italic leading-[0.88] text-[#F5F0E8]"
          style={{ fontSize: "clamp(80px, 15vw, 280px)" }}
        >
          party
        </h2>
        <h2
          className="savri-from-right font-serif italic leading-[0.88] text-[#B5636A]"
          style={{ fontSize: "clamp(80px, 15vw, 280px)", transitionDelay: "150ms" }}
        >
          bookings.
        </h2>
        <Link
          href="/party"
          className="savri-rise group mt-12 inline-flex items-center gap-3 text-white"
          style={{ fontSize: "clamp(18px, 2vw, 36px)", transitionDelay: "350ms" }}
        >
          <span>From ₹6,399</span>
          <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
        </Link>
      </div>
    </section>
  )
}

function FinalCTASection() {
  const ref = useOnEnter<HTMLElement>(0.25)
  return (
    <section
      ref={ref}
      className="relative z-[7] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
    >
      <Image
        src={CTA_IMG}
        alt="Warm home dining moment"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.55),rgba(10,10,10,0.9))]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h2
          className="savri-rise font-serif italic leading-[0.85]"
          style={{ fontSize: "clamp(120px, 20vw, 400px)" }}
        >
          Ready?
        </h2>
        <p
          className="savri-rise mt-10 text-[#C9A84C]"
          style={{ fontSize: "clamp(20px, 3vw, 52px)", transitionDelay: "200ms" }}
        >
          Book your private chef.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="savri-rise mt-14 inline-flex items-center justify-center bg-[#B5636A] px-10 py-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-base"
          style={{ transitionDelay: "400ms" }}
        >
          Book on WhatsApp →
        </a>
      </div>
    </section>
  )
}

export function HomepageRedesign() {
  return (
    <main className="savri-travel-stack">
      <HeroSection />
      <WordsSection />
      <BleedSection />
      <DishesSection />
      <PricingSection />
      <PartyTeaserSection />
      <FinalCTASection />
    </main>
  )
}
