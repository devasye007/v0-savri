"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"

import { BOOKING_URL } from "@/lib/site-data"

const HERO_IMG = "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1920&q=80"
const BLEED_IMG = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const PARTY_IMG = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
const CTA_IMG = "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"
const KITCHEN_IMG = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80"

/**
 * Cooking footage played as autoplay loops. Drop the .mp4 files at these
 * paths under /public/ and they will be served at the URLs below. Until
 * the files exist, each <video> falls back to its `poster` image, so the
 * page never has a blank frame.
 *
 *   /public/videos/hero.mp4      — used on the hero
 *   /public/videos/kitchen.mp4   — used on the Kitchen scroll moment
 *
 * Recommended source: pixabay.com or pexels.com — download the .mp4
 * directly and place it at the path. Any clip under 15 MB will fly.
 */
const HERO_VIDEO = "/videos/hero.mp4"
const KITCHEN_VIDEO = "/videos/kitchen.mp4"

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
          <video
            src={HERO_VIDEO}
            poster={HERO_IMG}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.45)_14%,rgba(26,26,26,0.28)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

        <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#F5F0E8]">
          <h1 className="flex flex-col items-center leading-[0.86] tracking-tight">
            <span
              className="block font-serif font-semibold text-[#F5F0E8]"
              style={{ fontSize: "clamp(72px, 12vw, 220px)" }}
            >
              Private
            </span>
            <span
              className="block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(96px, 16vw, 300px)", lineHeight: 0.82 }}
            >
              Chef.
            </span>
            <span
              className="block font-serif font-semibold text-[#F5F0E8]"
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
    <section className="savri-words-wrap text-[#F5F0E8]">
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

function KitchenScene() {
  return (
    <section className="relative z-[2] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      {/* Real cooking footage plays in a loop */}
      <video
        src={KITCHEN_VIDEO}
        poster={KITCHEN_IMG}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      {/* Edge-fade dark gradient — top and bottom blend into surrounding dark */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.55)_18%,rgba(26,26,26,0.4)_50%,rgba(26,26,26,0.85)_82%,#1A1A1A_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
          The Kitchen
        </p>
        <h2
          className="reveal-up mt-6 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
          style={{ fontSize: "clamp(56px, 9vw, 180px)" }}
        >
          Live cooking.
          <br />
          <span className="text-[#B5636A]">Your home.</span>
        </h2>
        <p className="reveal-up mt-8 max-w-xl text-base leading-7 text-[#F5F0E8]/82 md:text-lg">
          Pan on the flame. Food tossing. Steam rising. Right in front of you.
        </p>
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.4)_18%,rgba(26,26,26,0.2)_50%,rgba(26,26,26,0.8)_82%,#1A1A1A_100%)]" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-20 md:pb-24">
        <div className="savri-bleed-text max-w-[1200px]">
          <p
            className="block font-serif font-semibold"
            style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
          >
            Your menu.
          </p>
          <p
            className="mt-1 block font-serif font-semibold"
            style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
          >
            Your kitchen.
          </p>
          <p
            className="mt-1 block font-serif font-semibold text-[#B5636A]"
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
  return (
    <section className="savri-dishes-wrap text-[#F5F0E8]">
      <div className="savri-dishes-pin">
        <div className="z-10 px-6 md:px-16">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[#C9A84C]">The Menu</p>
          <h2
            className="mt-4 font-serif font-semibold leading-[0.92]"
            style={{ fontSize: "clamp(40px, 5.5vw, 110px)" }}
          >
            90+ dishes to choose from.
          </h2>
        </div>

        <div className="savri-dishes-track mt-12">
          {DISHES.map((dish) => (
            <div key={dish.src} className="savri-dish-card">
              <Image
                src={dish.src}
                alt={dish.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 30vw, 70vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end p-5">
                <p className="font-serif font-semibold text-[#F5F0E8] text-lg md:text-xl">{dish.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const tiers: Array<{
    amount: string
    label: string
    /** view-timeline cover-phase % when this row activates */
    ws: number
    we: number
    /** activation range for its trailing hairline */
    lineWs?: number
    lineWe?: number
  }> = [
    { amount: "₹549", label: "Small Table • 1-3 guests • 2 dishes", ws: 22, we: 30, lineWs: 30, lineWe: 38 },
    { amount: "₹1,149", label: "Full Table • 4-6 guests • 4 dishes", ws: 40, we: 48, lineWs: 48, lineWe: 56 },
    { amount: "₹5,999", label: "Party Booking • Delhi • Custom menu", ws: 58, we: 66 },
  ]

  return (
    <section className="savri-pricing-wrap text-[#F5F0E8]">
      <div className="savri-pricing-pin">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          <p
            className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
            style={{ "--ws": 8, "--we": 18 } as CSSProperties}
          >
            Simple Pricing
          </p>

          <div className="mt-6 flex flex-col gap-3 md:mt-10 md:gap-5">
            {tiers.map((tier, idx) => (
              <div key={tier.amount} className="w-full">
                <div
                  className="savri-price-amount font-sans font-extrabold leading-[0.9] text-[#C9A84C]"
                  style={{
                    fontSize: "clamp(64px, 10vw, 220px)",
                    fontVariantNumeric: "lining-nums tabular-nums",
                    letterSpacing: "-0.02em",
                    "--ws": tier.ws,
                    "--we": tier.we,
                  } as CSSProperties}
                >
                  {tier.amount}
                </div>
                <p
                  className="savri-price-label mt-3 font-sans font-medium tracking-wide text-[#F5F0E8]/90"
                  style={{
                    fontSize: "clamp(15px, 1.4vw, 24px)",
                    "--ws": tier.ws + 4,
                    "--we": tier.we + 4,
                  } as CSSProperties}
                >
                  {tier.label}
                </p>
                {idx < tiers.length - 1 ? (
                  <div
                    className="savri-price-line mt-3 h-px w-full bg-[#B5636A] md:mt-5"
                    style={{
                      "--ws": tier.lineWs ?? tier.we,
                      "--we": tier.lineWe ?? tier.we + 6,
                    } as CSSProperties}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.85)_16%,rgba(26,26,26,0.7)_50%,rgba(26,26,26,0.85)_84%,#1A1A1A_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="savri-rise uppercase text-[#C9A84C]"
          style={{ fontSize: "clamp(12px, 1.5vw, 22px)", letterSpacing: "0.5em" }}
        >
          Introducing
        </p>
        <h2
          className="savri-from-left mt-6 font-serif font-semibold leading-[0.88] text-[#F5F0E8]"
          style={{ fontSize: "clamp(80px, 15vw, 280px)" }}
        >
          party
        </h2>
        <h2
          className="savri-from-right font-serif font-semibold leading-[0.88] text-[#B5636A]"
          style={{ fontSize: "clamp(80px, 15vw, 280px)", transitionDelay: "150ms" }}
        >
          bookings.
        </h2>
        <Link
          href="/party"
          className="savri-rise group mt-12 inline-flex items-center gap-3 text-white"
          style={{ fontSize: "clamp(18px, 2vw, 36px)", transitionDelay: "350ms" }}
        >
          <span>From ₹5,999</span>
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.6)_18%,rgba(26,26,26,0.75)_50%,rgba(26,26,26,0.92)_82%,#1A1A1A_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h2
          className="savri-rise font-serif font-semibold leading-[0.85]"
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
      <KitchenScene />
      <BleedSection />
      <DishesSection />
      <PricingSection />
      <PartyTeaserSection />
      <FinalCTASection />
    </main>
  )
}
