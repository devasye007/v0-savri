"use client"

import Image from "next/image"
import { useEffect, useRef, type CSSProperties } from "react"
import { ArrowRight } from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { BackToTop } from "@/components/ui/back-to-top"

const WHATSAPP_URL =
  "https://wa.me/919310590819?text=Hi%20Savri%2C%20I%20want%20to%20book%20a%20party%20for%20%E2%82%B95%2C999."
const SITE_URL = "https://savri.co.in"

/* ============================================================
 * Image sources — mix of local /images/party-* and Unsplash for
 * the cinematic full-bleed and horizontal pan moments.
 * ============================================================ */

const HERO_IMG =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
const BLEED_IMG =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const CTA_IMG =
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

/* ============================================================
 * Data — exact strings preserved from previous version
 * ============================================================ */

type IncludedItem = {
  count: string
  title: string
  blurb: string
  img: string
}

const included: IncludedItem[] = [
  { count: "4", title: "Snacks", blurb: "Crisp, crowd-favourite starters to open the evening.", img: "/images/party-snacks.jpg" },
  { count: "4", title: "Main Course", blurb: "Slow-cooked curries and signature mains made fresh in your kitchen.", img: "/images/party-mains.jpg" },
  { count: "2+1", title: "Sides & Salad", blurb: "Hand-rolled breads or fragrant rice, plus a fresh salad.", img: "/images/party-sides.jpg" },
  { count: "2", title: "Desserts", blurb: "Two indulgent finishers — because every party deserves a sweet ending.", img: "/images/party-desserts.jpg" },
]

const terms = [
  { title: "Overtime Charges", body: "After your requested food-ready time, ₹999 per hour is added as a surge charge plus a small convenience fee. We'll always confirm before extending." },
  { title: "Live Kitchen", body: "Live kitchen setups — open cooking stations, live counters and theatre-style service — have separate charges. Drop us a message for a tailored quote." },
  { title: "Chef Completion", body: "As soon as the chef finishes cooking, they must immediately send photos of every dish for quality verification. It's how we keep standards consistent." },
  { title: "Late Evening Bookings", body: "Our last booking slot is 8:00 PM. If the session extends beyond 8:30 PM, the customer must arrange safe transportation for the chef." },
  { title: "Ingredient Delivery", body: "If you'd like ingredients delivered to your home before the session, delivery charges apply at real-time cart rates. We'll share a clear breakdown." },
  { title: "NCR Surcharge", body: "Bookings outside Delhi (Noida, Gurugram, Faridabad, Ghaziabad) include a flat ₹1,999 travel charge to cover the chef's commute and time." },
]

const delhiList = [
  "4 Snacks",
  "4 Main Course",
  "2 Sides (Breads / Rice)",
  "2 Desserts + 1 Salad",
  "Private chef at your home",
  "Kitchen cleaned after",
]

const ncrList = [
  "Everything in the Delhi plan",
  "Travel surcharge included",
  "Serves Noida, Gurugram, Faridabad, Ghaziabad",
  "Same chef, same standard",
]

/* ============================================================
 * Helpers — same pattern as homepage-redesign
 * ============================================================ */

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
                ".savri-rise, .savri-from-left, .savri-from-right, .savri-line-draw",
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

/* ============================================================
 * Moments
 * ============================================================ */

function HeroMoment() {
  return (
    <div className="savri-hero-wrap">
      <section className="savri-hero-pin">
        <div className="absolute inset-0 savri-hero-img">
          <Image
            src={HERO_IMG}
            alt="Party booking dinner spread"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.45)_14%,rgba(26,26,26,0.28)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

        <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#F5F0E8]">
          <h1 className="flex flex-col items-center leading-[0.86] tracking-tight">
            <span
              className="block font-serif font-semibold text-[#F5F0E8]"
              style={{ fontSize: "clamp(72px, 12vw, 220px)" }}
            >
              Party
            </span>
            <span
              className="block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(96px, 16vw, 300px)", lineHeight: 0.82 }}
            >
              Bookings.
            </span>
          </h1>
          <p className="mt-10 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/65 md:text-[13px]">
            From
          </p>
          <p
            className="mt-3 font-serif font-semibold leading-none text-[#C9A84C]"
            style={{ fontSize: "clamp(56px, 9vw, 160px)" }}
          >
            ₹5,999
          </p>
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

function MenuWordsMoment() {
  return (
    <section className="savri-words-wrap text-[#F5F0E8]">
      <div className="savri-words-pin">
        <div className="mx-auto w-full max-w-[1600px]">
          <p
            className="font-serif leading-[1.04] tracking-tight"
            style={{ fontSize: "clamp(40px, 6vw, 120px)" }}
          >
            <WordStream text="4 snacks." startVh={70} endVh={140} className="block" />
            <WordStream text="4 mains." startVh={140} endVh={200} className="mt-[0.3em] block" />
            <WordStream text="2 sides." startVh={200} endVh={260} className="mt-[0.3em] block" />
            <WordStream text="2 desserts." startVh={260} endVh={320} className="mt-[0.3em] block" />
            <WordStream
              text="1 salad."
              startVh={320}
              endVh={380}
              className="mt-[0.3em] block italic text-[#B5636A]"
            />
          </p>
        </div>
      </div>
    </section>
  )
}

function LiveKitchenBleed() {
  return (
    <section className="savri-bleed-wrap text-[#F5F0E8]">
      <div className="absolute inset-0 savri-bleed-img">
        <Image
          src={BLEED_IMG}
          alt="Live cooking at home"
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
            Live
          </p>
          <p
            className="mt-1 block font-serif font-semibold"
            style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
          >
            in your
          </p>
          <p
            className="mt-1 block font-serif font-semibold text-[#B5636A]"
            style={{ fontSize: "clamp(44px, 7.5vw, 136px)", lineHeight: 1 }}
          >
            kitchen.
          </p>
        </div>
      </div>
    </section>
  )
}

function IncludedHorizontalPan() {
  return (
    <section id="whats-included" className="savri-dishes-wrap text-[#F5F0E8]">
      <div className="savri-dishes-pin">
        <div className="z-10 px-6 md:px-16">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[#C9A84C]">The Menu</p>
          <h2
            className="mt-4 font-serif font-semibold leading-[0.92]"
            style={{ fontSize: "clamp(40px, 5.5vw, 110px)" }}
          >
            Twelve dishes, one fixed price.
          </h2>
        </div>

        <div className="savri-dishes-track mt-12">
          {included.map((item) => (
            <div key={item.title} className="savri-dish-card">
              <Image
                src={item.img}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 40vw, 72vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,26,0)_45%,rgba(26,26,26,0.85)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-6">
                <span
                  className="font-serif font-semibold leading-none text-[#C9A84C]"
                  style={{ fontSize: "clamp(40px, 5vw, 96px)" }}
                >
                  {item.count}
                </span>
                <p className="font-serif font-semibold text-[#F5F0E8] text-xl md:text-2xl">
                  {item.title}
                </p>
                <p className="max-w-xs text-sm leading-6 text-[#F5F0E8]/75">
                  {item.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingMoment() {
  const tiers: Array<{
    amount: string
    label: string
    breakdown: string
    ws: number
    we: number
    lineWs?: number
    lineWe?: number
  }> = [
    {
      amount: "₹5,999",
      label: "Delhi • Most popular • All-in",
      breakdown: "One-time party fee · all-in",
      ws: 22,
      we: 32,
      lineWs: 32,
      lineWe: 44,
    },
    {
      amount: "₹7,998",
      label: "NCR • Noida · Gurugram · Faridabad · Ghaziabad",
      breakdown: "₹5,999 + ₹1,999 NCR travel",
      ws: 50,
      we: 60,
    },
  ]

  return (
    <section className="savri-pricing-wrap text-[#F5F0E8]">
      <div className="savri-pricing-pin">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          <p
            className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
            style={{ "--ws": 8, "--we": 18 } as CSSProperties}
          >
            One Flat Fee
          </p>

          <div className="mt-6 flex flex-col gap-3 md:mt-10 md:gap-6">
            {tiers.map((tier, idx) => (
              <div key={tier.amount} className="w-full">
                <div
                  className="savri-price-amount font-sans font-extrabold leading-[0.9] text-[#C9A84C]"
                  style={{
                    fontSize: "clamp(64px, 11vw, 240px)",
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
                <p
                  className="savri-price-label mt-1 text-[11px] uppercase tracking-[0.32em] text-[#F5F0E8]/55"
                  style={{
                    "--ws": tier.ws + 5,
                    "--we": tier.we + 5,
                  } as CSSProperties}
                >
                  {tier.breakdown}
                </p>
                {idx < tiers.length - 1 ? (
                  <div
                    className="savri-price-line mt-5 h-px w-full bg-[#B5636A] md:mt-8"
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

function WhatsIncludedBleed() {
  return (
    <section className="relative z-[6] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">Delhi · ₹5,999</p>
            <h3
              className="reveal-up mt-6 font-serif font-semibold leading-[0.9]"
              style={{ fontSize: "clamp(40px, 5vw, 88px)" }}
            >
              Everything you need to host.
            </h3>
            <ul className="reveal-up mt-10 space-y-4">
              {delhiList.map((line) => (
                <li
                  key={line}
                  className="border-l border-[#C9A84C]/40 pl-5 text-base text-[#F5F0E8]/85 md:text-lg"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">NCR · ₹7,998</p>
            <h3
              className="reveal-up mt-6 font-serif font-semibold leading-[0.9]"
              style={{ fontSize: "clamp(40px, 5vw, 88px)" }}
            >
              Same standard. Outside Delhi.
            </h3>
            <ul className="reveal-up mt-10 space-y-4">
              {ncrList.map((line) => (
                <li
                  key={line}
                  className="border-l border-[#B5636A]/55 pl-5 text-base text-[#F5F0E8]/85 md:text-lg"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="reveal-up mt-16 text-center text-xs uppercase tracking-[0.32em] text-[#F5F0E8]/45">
          Inclusive of chef time, on-site cooking and post-cleanup. Ingredients &amp; overtime billed separately.
        </p>
      </div>
    </section>
  )
}

function FAQMoment() {
  const ref = useOnEnter<HTMLElement>(0.15)
  return (
    <section
      ref={ref}
      className="relative z-[6] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48"
    >
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">Fine Print</p>
        <h2
          className="savri-rise mt-8 font-serif font-semibold leading-[0.9]"
          style={{ fontSize: "clamp(48px, 9vw, 170px)", transitionDelay: "100ms" }}
        >
          Good to know
          <br />
          <span className="text-[#B5636A]">before you book.</span>
        </h2>

        <div className="savri-ai-faq mt-20 divide-y divide-[#F5F0E8]/15 md:mt-28">
          {terms.map((item, i) => (
            <details key={item.title} open={i === 0} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none">
                <span className="flex items-center gap-5">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl text-[#F5F0E8] md:text-2xl">{item.title}</span>
                </span>
                <span className="text-3xl text-[#B5636A] transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 pr-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{item.body}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CinematicCTA() {
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
          style={{ fontSize: "clamp(96px, 18vw, 360px)" }}
        >
          Ready?
        </h2>
        <p
          className="savri-rise mt-10 text-[#C9A84C]"
          style={{ fontSize: "clamp(20px, 3vw, 52px)", transitionDelay: "200ms" }}
        >
          Tell us your date.
        </p>
        <p
          className="savri-rise mt-2 max-w-2xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg"
          style={{ transitionDelay: "300ms" }}
        >
          We&apos;ll send the chef, the menu, and the magic.
        </p>
        <div
          className="savri-rise mt-12 flex flex-col gap-4 sm:flex-row"
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
          >
            Book on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={SITE_URL}
            className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

function SEOCopyMoment() {
  return (
    <section className="relative z-[5] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
          <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">Why Savri</p>
          <div>
            <h2
              className="reveal-up font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(40px, 6.5vw, 120px)" }}
            >
              Private Chef for Your Party in Delhi NCR
            </h2>
            <div className="reveal-up mt-12 space-y-7 max-w-3xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
              <p>
                Savri is a{" "}
                <a href="/" className="text-[#C9A84C] underline-offset-4 hover:underline">
                  private chef
                </a>{" "}
                booking service built for households across Delhi NCR. Whether you are throwing a
                birthday at home, hosting in-laws over for dinner, or planning an anniversary brunch
                for twelve, our party booking gets a vetted{" "}
                <a href="/party" className="text-[#C9A84C] underline-offset-4 hover:underline">
                  party booking chef
                </a>{" "}
                to your kitchen with the menu locked in, the ingredients sorted, and the cleanup
                handled. You stay the host. The chef does the cooking.
              </p>
              <p>
                A Savri party booking in Delhi costs ₹5,999 and includes 4 snacks, 4 main course
                dishes, 2 sides of breads or fragrant rice, 2 desserts and a fresh salad — twelve
                dishes in total, all freshly cooked at your home. There are no hidden markups, no
                surprise convenience fees and no minimum guest count. It is built to be the
                stress-free upgrade to traditional party catering Delhi families have been asking
                for: cleaner plating, fewer leftovers, and food that arrives hot from your own
                stove instead of sitting in a chafing dish from a banquet truck.
              </p>
              <p>
                We bring the same{" "}
                <a href="/" className="text-[#C9A84C] underline-offset-4 hover:underline">
                  chef at home Delhi NCR
                </a>{" "}
                experience across Noida, Gurugram, Faridabad and Ghaziabad. A flat ₹1,999 travel
                surcharge applies for NCR locations, taking the total to ₹7,998. Our home party
                chef Gurugram Noida service covers everything from condo kitchens in DLF Cyber City
                to family floors in Sector 50 — the chef arrives with their own knives, sets up in
                your kitchen, cooks live, plates the food at your requested time and leaves the
                counters cleaner than they found them.
              </p>
              <p>
                Want a Delhi-only quote, a custom menu for dietary restrictions, or a quick
                availability check for a date next weekend? Message us on WhatsApp or open the{" "}
                <a href="/party" className="text-[#C9A84C] underline-offset-4 hover:underline">
                  party bookings
                </a>{" "}
                page above to confirm the menu. We will assign one of our verified chefs, share the
                ingredient plan, and lock in the timing so the food is ready exactly when your
                guests sit down.
              </p>
            </div>

            <div className="reveal-up mt-12 flex flex-wrap items-center gap-3 border-t border-[#F5F0E8]/12 pt-8 text-sm text-[#F5F0E8]/65">
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C9A84C]">
                Related
              </span>
              <a
                href="/"
                className="border border-[#F5F0E8]/15 px-3 py-1 transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                Private Chef at Home →
              </a>
              <a
                href="/pricing"
                className="border border-[#F5F0E8]/15 px-3 py-1 transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                Regular Pricing →
              </a>
              <a
                href="/how-it-works"
                className="border border-[#F5F0E8]/15 px-3 py-1 transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                How It Works →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
 * Page
 * ============================================================ */

export function PartyClient() {
  return (
    <main className="savri-travel-stack overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Navbar />
      <HeroMoment />
      <MenuWordsMoment />
      <LiveKitchenBleed />
      <IncludedHorizontalPan />
      <PricingMoment />
      <WhatsIncludedBleed />
      <FAQMoment />
      <SEOCopyMoment />
      <CinematicCTA />
      <Footer />
      <BackToTop />
    </main>
  )
}
