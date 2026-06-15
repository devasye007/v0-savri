"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  IndianRupee,
  MapPin,
  Salad,
  Sparkles,
  UtensilsCrossed,
  Wheat,
} from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { BackToTop } from "@/components/ui/back-to-top"

const WHATSAPP_URL =
  "https://wa.me/919310590819?text=Hi%20Savri%2C%20I%20want%20to%20book%20a%20party%20for%20%E2%82%B95%2C999."
const SITE_URL = "https://savri.co.in"

/* ============================================================
 * Data
 * ============================================================ */

type IncludedItem = {
  count: string
  title: string
  blurb: string
  Icon: typeof UtensilsCrossed
  img: string
}

const included: IncludedItem[] = [
  { count: "4", title: "Snacks", blurb: "Crisp, crowd-favourite starters to open the evening.", Icon: Sparkles, img: "/images/party-snacks.jpg" },
  { count: "4", title: "Main Course", blurb: "Slow-cooked curries and signature mains made fresh in your kitchen.", Icon: UtensilsCrossed, img: "/images/party-mains.jpg" },
  { count: "2+1", title: "Sides & Salad", blurb: "Hand-rolled breads or fragrant rice, plus a fresh salad.", Icon: Wheat, img: "/images/party-sides.jpg" },
  { count: "2", title: "Desserts", blurb: "Two indulgent finishers — because every party deserves a sweet ending.", Icon: Salad, img: "/images/party-desserts.jpg" },
]

const terms = [
  { title: "Overtime Charges", body: "After your requested food-ready time, ₹999 per hour is added as a surge charge plus a small convenience fee. We'll always confirm before extending." },
  { title: "Live Kitchen", body: "Live kitchen setups — open cooking stations, live counters and theatre-style service — have separate charges. Drop us a message for a tailored quote." },
  { title: "Chef Completion", body: "As soon as the chef finishes cooking, they must immediately send photos of every dish for quality verification. It's how we keep standards consistent." },
  { title: "Late Evening Bookings", body: "Our last booking slot is 8:00 PM. If the session extends beyond 8:30 PM, the customer must arrange safe transportation for the chef." },
  { title: "Ingredient Delivery", body: "If you'd like ingredients delivered to your home before the session, delivery charges apply at real-time cart rates. We'll share a clear breakdown." },
  { title: "NCR Surcharge", body: "Bookings outside Delhi (Noida, Gurugram, Faridabad, Ghaziabad) include a flat ₹1,999 travel charge to cover the chef's commute and time." },
]

const steps = [
  { num: "01", title: "Reach Out", body: "Message us on WhatsApp or head to savri.co.in to start your booking." },
  { num: "02", title: "Confirm Menu", body: "Choose 4 snacks, 4 mains, 2 sides and 2 desserts from the curated party menu." },
  { num: "03", title: "Chef Arrives", body: "Your private chef shows up on time, sets up in your kitchen and cooks everything fresh." },
  { num: "04", title: "You Enjoy", body: "Food is ready at your requested time. The chef cleans up. You stay the host, not the cook." },
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
 * Hero particles (purely decorative, contained CSS animation)
 * ============================================================ */

function HeroParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${60 + Math.random() * 40}%`,
        size: 3 + Math.random() * 5,
        delay: `${Math.random() * 6}s`,
        duration: `${5 + Math.random() * 5}s`,
      })),
    [],
  )

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="party-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}

/* ============================================================
 * Page
 * ============================================================ */

export function PartyClient() {
  // Single IntersectionObserver for the whole page.
  // Fires once per element, then unobserves — no scroll listener.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".js-reveal").forEach((el) => el.classList.add("is-revealed"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed")
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    document.querySelectorAll(".js-reveal").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0EB]">
      {/* Page entrance veil — pure CSS opacity animation */}
      <PageVeil />

      {/* Scroll-driven progress bar — native CSS scroll-timeline */}
      <div aria-hidden className="party-progress-bar" />

      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden pt-28">
        {/* Parallax background: CSS background-attachment: fixed, zero JS */}
        <div aria-hidden className="party-hero-parallax absolute inset-0 -z-10" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A0A]/82 via-[#0A0A0A]/72 to-[#0A0A0A]" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_55%)]" />

        <HeroParticles />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 text-center sm:pb-32">
          <p className="party-eyebrow text-[11px] font-medium uppercase text-[#D4AF37] sm:text-xs">
            Introducing
          </p>

          <h1 className="party-title mt-6 font-serif text-[14vw] italic leading-[0.95] text-[#F5F0EB] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <span className="party-shimmer-text">party bookings</span>
          </h1>

          <p className="party-punch mt-8 text-sm uppercase tracking-[0.42em] text-[#F5F0EB]/65">
            At just
          </p>
          <p className="party-punch mt-3 font-sans text-[12vw] font-black leading-none text-[#F5F0EB] sm:text-7xl md:text-8xl">
            ₹5,999
          </p>

          <div className="party-cta mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="immersive-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#F5F0EB] shadow-[0_18px_45px_rgba(181,99,106,0.45)] hover:bg-[#9A5158]"
            >
              Book Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#whats-included"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D4AF37]/45 px-8 py-3.5 text-sm font-medium text-[#F5F0EB]/85 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              See what's included
            </a>
          </div>
        </div>

        <a
          href="#whats-included"
          aria-label="Scroll down"
          className="party-scroll-bounce absolute bottom-8 left-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[#F5F0EB]/80 backdrop-blur"
        >
          <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      {/* ============ WHAT YOU GET ============ */}
      <section id="whats-included" className="relative overflow-hidden bg-[#0A0A0A] py-24 sm:py-32">
        <div aria-hidden className="ambient-orb left-[-10%] top-1/4 h-[420px] w-[420px] bg-[#B5636A]/30" />
        <div aria-hidden className="ambient-orb right-[-12%] bottom-1/4 h-[380px] w-[380px] bg-[#D4AF37]/25" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center js-reveal">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">The Menu</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              Everything Included.{" "}
              <em className="font-serif italic text-[#D4AF37]">Nothing Left Out.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#F5F0EB]/65">
              A full-spread party menu, cooked live at your home by a vetted private chef. Twelve dishes,
              one fixed price, zero stress.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {included.map((item, i) => (
              <div
                key={item.title}
                className="js-reveal party-included-card group"
                data-delay={i.toString()}
              >
                <div className="relative rounded-[1.75rem] border border-[#D4AF37]/22 bg-[#141414] shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                    <div className="party-included-img absolute inset-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-[#D4AF37]/25" />

                    <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-5">
                      <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/45 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37] backdrop-blur">
                        <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
                        Included
                      </div>
                      <div className="rounded-full border border-white/15 bg-black/40 p-2 text-[#D4AF37] backdrop-blur">
                        <item.Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-serif text-5xl italic leading-none text-[#D4AF37]">{item.count}</p>
                      <h3 className="mt-2 font-serif text-2xl font-medium text-[#F5F0EB]">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#F5F0EB]/65">{item.blurb}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] py-24 sm:py-32">
        <div aria-hidden className="absolute inset-0 ambient-grid opacity-40" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center js-reveal">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">Pricing</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              Simple,{" "}
              <em className="font-serif italic text-[#B5636A]">transparent</em> pricing
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
              One flat fee. No hidden markups. Pick your city — we'll handle the rest.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            <PricingCard
              variant="left"
              tagLabel="Delhi"
              total={5999}
              subline="Everything you need to host."
              list={delhiList}
              accent="rose"
              badge="Most popular"
            />
            <PricingCard
              variant="right"
              tagLabel="NCR"
              total={8398}
              breakdown="₹6,399 + ₹1,999 NCR travel"
              subline="Noida · Gurugram · Faridabad · Ghaziabad"
              list={ncrList}
              accent="gold"
            />
          </div>

          <p className="js-reveal mt-10 text-center text-xs text-[#F5F0EB]/45">
            Inclusive of chef time, on-site cooking and post-cleanup. Ingredients & overtime billed separately.
          </p>
        </div>
      </section>

      {/* ============ TERMS ============ */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center js-reveal">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">Fine Print</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              Good to know{" "}
              <em className="font-serif italic text-[#D4AF37]">before you book.</em>
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {terms.map((item, i) => (
              <details
                key={item.title}
                open={i === 0}
                className="js-reveal group overflow-hidden rounded-2xl border border-white/8 bg-[#141414]/80 backdrop-blur-sm open:border-[#D4AF37]/50"
                data-delay={Math.min(i, 5).toString()}
              >
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="flex items-center gap-4">
                    <span className="font-serif text-base italic text-[#D4AF37]">0{i + 1}</span>
                    <span className="font-serif text-lg text-[#F5F0EB] sm:text-xl">{item.title}</span>
                  </span>
                  <span className="party-accordion-chevron flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] group-open:bg-[#D4AF37]/10">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </summary>
                <div className="party-accordion-body">
                  <div>
                    <div className="px-6 pb-6 pl-[5.25rem] text-sm leading-relaxed text-[#F5F0EB]/72 sm:text-[15px]">
                      {item.body}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center js-reveal">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">The Flow</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              How it <em className="font-serif italic text-[#B5636A]">works</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
              From the first message to the last bite — four clean steps.
            </p>
          </div>

          <div className="party-steps-scroll mt-16">
            <div className="party-steps-track relative">
              {/* Desktop connector line */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-7 right-7 top-7 hidden h-px bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37]/30 to-[#D4AF37]/60 md:block"
              />
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className="js-reveal relative flex flex-col items-start"
                  data-delay={i.toString()}
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0A0A0A] font-serif text-xl italic text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.25)]">
                    {s.num}
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-[#F5F0EB]">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#F5F0EB]/65">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#0A0A0A] py-24 sm:py-32">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/images/chef-cooking.jpg"
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/85 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(181,99,106,0.22),transparent_60%)]" />
        </div>

        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="js-reveal text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            Your Party, Sorted
          </p>
          <h2 className="js-reveal party-final-glow mt-6 font-serif text-5xl leading-[1.02] text-[#F5F0EB] sm:text-6xl md:text-7xl lg:text-[5.5rem]" data-delay="1">
            Ready to host{" "}
            <em className="font-serif italic text-[#D4AF37]">without the stress?</em>
          </h2>
          <p className="js-reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65" data-delay="2">
            Tell us your date. We'll send the chef, the menu, and the magic.
          </p>

          <div className="js-reveal mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4" data-delay="3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="immersive-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#F5F0EB] shadow-[0_18px_45px_rgba(181,99,106,0.5)] hover:bg-[#9A5158]"
            >
              Book on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={SITE_URL}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D4AF37]/50 px-8 py-3.5 text-sm font-medium text-[#F5F0EB]/85 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Learn More
            </a>
          </div>

          <div className="js-reveal mx-auto mt-20 flex flex-col items-center gap-3" data-delay="4">
            <Image
              src="/savri-logo-light.png"
              alt="Savri"
              width={160}
              height={64}
              loading="lazy"
              className="h-14 w-auto opacity-90"
            />
            <p className="font-serif text-xl italic text-[#F5F0EB]/72">Private Chef, Ghar Pe.</p>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

/* ============================================================
 * Page entrance veil — pure CSS, removes itself after fade
 * ============================================================ */

function PageVeil() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1300)
    return () => clearTimeout(t)
  }, [])
  if (!show) return null
  return <div aria-hidden className="party-veil" />
}

/* ============================================================
 * Pricing card — CSS-only tilt, static price (no counter)
 * ============================================================ */

type PriceCardProps = {
  variant: "left" | "right"
  tagLabel: string
  total: number
  breakdown?: string
  subline: string
  list: string[]
  accent: "rose" | "gold"
  badge?: string
}

function PricingCard({ variant, tagLabel, total, breakdown, subline, list, accent, badge }: PriceCardProps) {
  const accentColor = accent === "rose" ? "#B5636A" : "#D4AF37"

  return (
    <div className={`js-reveal ${variant === "left" ? "js-reveal-left" : "js-reveal-right"}`}>
      <div
        className={`party-pricing-card relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#141414] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10 ${
          variant === "right" ? "party-pricing-right" : ""
        }`}
      >
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ background: accentColor }}
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-px" style={{ background: accentColor }} />

        <div className="relative flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ borderColor: `${accentColor}66`, color: accentColor }}
          >
            <MapPin className="h-3.5 w-3.5" />
            {tagLabel}
          </span>
          {badge ? (
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#F5F0EB]/45">{badge}</span>
          ) : null}
        </div>

        <div className="relative mt-8 flex items-baseline gap-1">
          <IndianRupee className="h-7 w-7 text-[#F5F0EB]/60" />
          <span className="font-serif text-6xl font-medium leading-none text-[#F5F0EB] tabular-nums sm:text-7xl">
            {total.toLocaleString("en-IN")}
          </span>
        </div>

        {breakdown ? (
          <p className="mt-2 text-xs text-[#F5F0EB]/55">{breakdown}</p>
        ) : (
          <p className="mt-2 text-xs text-[#F5F0EB]/55">One-time party fee · all-in</p>
        )}
        <p className="mt-5 text-sm text-[#F5F0EB]/75">{subline}</p>

        <div className="relative mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <ul className="relative mt-8 space-y-3">
          {list.map((line) => (
            <li key={line} className="flex items-start gap-3 text-sm text-[#F5F0EB]/85">
              <span
                className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${accentColor}22`, color: accentColor }}
              >
                <Sparkles className="h-3 w-3" />
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="immersive-button mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-[#F5F0EB] transition"
          style={{ backgroundColor: accentColor }}
        >
          Book this plan
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
