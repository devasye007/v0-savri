"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
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

import { TiltCard } from "@/components/ui/tilt-card"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"

const WHATSAPP_URL =
  "https://wa.me/919310590819?text=Hi%20Savri%2C%20I%20want%20to%20book%20a%20party%20for%20%E2%82%B95%2C999."
const SITE_URL = "https://savri.co.in"

/* ----- Hooks ----- */

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px", ...options },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}

function useParallax<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        const node = ref.current
        if (!node) return
        const rect = node.getBoundingClientRect()
        const viewportH = window.innerHeight || 1
        const progress = 1 - (rect.top + rect.height / 2) / (viewportH + rect.height / 2)
        setOffset(progress * strength * 100)
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [strength])

  return { ref, offset }
}

/* ----- Counter ----- */

function PriceCounter({ target, prefix = "₹", duration = 1600 }: { target: number; prefix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString("en-IN")}
    </span>
  )
}

/* ----- Particles ----- */

type Particle = { left: string; top: string; size: number; delay: string; duration: string }

function HeroParticles() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 22 }).map(() => {
        const size = 3 + Math.random() * 5
        return {
          left: `${Math.random() * 100}%`,
          top: `${60 + Math.random() * 40}%`,
          size,
          delay: `${Math.random() * 6}s`,
          duration: `${5 + Math.random() * 5}s`,
        }
      }),
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

/* ----- Zoom Card ----- */

type IncludedItem = {
  count: string
  title: string
  blurb: string
  Icon: typeof UtensilsCrossed
  img: string
  filter: string
}

function IncludedCard({ item, index }: { item: IncludedItem; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={`reveal-block ${inView ? "revealed revealed-up" : "reveal-initial-up"}`}
    >
      <TiltCard
        tiltAmount={8}
        className="group relative rounded-[1.75rem] border border-[#D4AF37]/22 bg-[#141414] shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04]"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
          <div className={`party-zoom-img absolute inset-0 ${inView ? "in-view" : ""}`}>
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
              className="object-cover"
              style={{ filter: item.filter }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/25 rounded-[1.75rem]" />

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
      </TiltCard>
    </div>
  )
}

/* ----- Accordion ----- */

type TermItem = { title: string; body: string }

function AccordionItem({ item, index, defaultOpen = false }: { item: TermItem; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 70}ms` }}
      className={`reveal-block ${inView ? "revealed revealed-up" : "reveal-initial-up"}`}
    >
      <div
        className={`overflow-hidden rounded-2xl border bg-[#141414]/80 backdrop-blur-sm transition-colors duration-300 ${
          open ? "border-[#D4AF37]/50" : "border-white/8 hover:border-[#D4AF37]/25"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="flex items-center gap-4">
            <span className="font-serif text-base italic text-[#D4AF37]">
              0{index + 1}
            </span>
            <span className="font-serif text-lg text-[#F5F0EB] sm:text-xl">{item.title}</span>
          </span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] transition-transform duration-500 ${
              open ? "rotate-180 bg-[#D4AF37]/10" : ""
            }`}
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </button>
        <div className={`party-accordion-content ${open ? "open" : ""}`}>
          <div className="px-6 pb-6 pl-[5.25rem] text-sm leading-relaxed text-[#F5F0EB]/72 sm:text-[15px]">
            {item.body}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ----- Timeline Step ----- */

type Step = { num: string; title: string; body: string }

function TimelineStep({ step, index, last }: { step: Step; index: number; last: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 })
  return (
    <div ref={ref} className="relative flex flex-1 flex-col items-start">
      <div
        className={`party-step ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0A0A0A] font-serif text-xl italic text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.25)]">
          {step.num}
        </div>
        <h3 className="mt-5 font-serif text-xl text-[#F5F0EB]">{step.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#F5F0EB]/65">{step.body}</p>
      </div>
      {!last ? (
        <div className="absolute left-14 right-0 top-7 hidden h-px md:block">
          <div
            className={`party-timeline-line h-px w-full bg-gradient-to-r from-[#D4AF37]/60 to-[#D4AF37]/0 ${
              inView ? "in-view" : ""
            }`}
          />
        </div>
      ) : null}
    </div>
  )
}

/* ----- Page ----- */

export function PartyClient() {
  const hero = useParallax<HTMLDivElement>(0.4)
  const [veilGone, setVeilGone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVeilGone(true), 1300)
    return () => clearTimeout(t)
  }, [])

  const included: IncludedItem[] = useMemo(
    () => [
      {
        count: "4",
        title: "Snacks",
        blurb: "Crisp, crowd-favourite starters to open the evening.",
        Icon: Sparkles,
        img: "/images/party-snacks.jpg",
        filter: "saturate(1.05)",
      },
      {
        count: "4",
        title: "Main Course",
        blurb: "Slow-cooked curries and signature mains made fresh in your kitchen.",
        Icon: UtensilsCrossed,
        img: "/images/party-mains.jpg",
        filter: "saturate(1.08)",
      },
      {
        count: "2+1",
        title: "Sides & Salad",
        blurb: "Hand-rolled breads or fragrant rice, plus a fresh salad.",
        Icon: Wheat,
        img: "/images/party-sides.jpg",
        filter: "saturate(1.05)",
      },
      {
        count: "2",
        title: "Desserts",
        blurb: "Two indulgent finishers — because every party deserves a sweet ending.",
        Icon: Salad,
        img: "/images/party-desserts.jpg",
        filter: "saturate(1.08)",
      },
    ],
    [],
  )

  const terms: TermItem[] = [
    {
      title: "Overtime Charges",
      body:
        "After your requested food-ready time, ₹999 per hour is added as a surge charge plus a small convenience fee. We'll always confirm before extending.",
    },
    {
      title: "Live Kitchen",
      body:
        "Live kitchen setups — open cooking stations, live counters and theatre-style service — have separate charges. Drop us a message for a tailored quote.",
    },
    {
      title: "Chef Completion",
      body:
        "As soon as the chef finishes cooking, they must immediately send photos of every dish for quality verification. It's how we keep standards consistent.",
    },
    {
      title: "Late Evening Bookings",
      body:
        "Our last booking slot is 8:00 PM. If the session extends beyond 8:30 PM, the customer must arrange safe transportation for the chef.",
    },
    {
      title: "Ingredient Delivery",
      body:
        "If you'd like ingredients delivered to your home before the session, delivery charges apply at real-time cart rates. We'll share a clear breakdown.",
    },
    {
      title: "NCR Surcharge",
      body:
        "Bookings outside Delhi (Noida, Gurugram, Faridabad, Ghaziabad) include a flat ₹1,999 travel charge to cover the chef's commute and time.",
    },
  ]

  const steps: Step[] = [
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

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0EB]">
      {/* Page entrance veil */}
      {!veilGone ? <div aria-hidden className="party-veil" /> : null}

      <ScrollProgress />
      <Navbar />

      {/* ============ SECTION 1 — HERO ============ */}
      <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden pt-28">
        {/* Parallax background */}
        <div
          ref={hero.ref}
          aria-hidden
          className="absolute inset-0 -z-10 will-change-transform"
          style={{ transform: `translate3d(0, ${hero.offset}px, 0)` }}
        >
          <div className="party-hero-bg absolute inset-[-6%] will-change-transform">
            <Image
              src="/images/hero-food.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/85 via-[#0A0A0A]/70 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_55%)]" />
        </div>

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

        {/* Scroll indicator */}
        <a
          href="#whats-included"
          aria-label="Scroll down"
          className="party-scroll-bounce absolute bottom-8 left-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[#F5F0EB]/80 backdrop-blur"
        >
          <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      {/* ============ SECTION 2 — WHAT YOU GET ============ */}
      <section id="whats-included" className="relative overflow-hidden bg-[#0A0A0A] py-24 sm:py-32">
        <div aria-hidden className="ambient-orb left-[-10%] top-1/4 h-[420px] w-[420px] bg-[#B5636A]/30" />
        <div aria-hidden className="ambient-orb right-[-12%] bottom-1/4 h-[380px] w-[380px] bg-[#D4AF37]/25" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
              The Menu
            </p>
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
              <IncludedCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 — PRICING ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] py-24 sm:py-32">
        <div aria-hidden className="absolute inset-0 ambient-grid opacity-40" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
              Pricing
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              Simple,{" "}
              <em className="font-serif italic text-[#B5636A]">transparent</em> pricing
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
              One flat fee. No hidden markups. Pick your city — we'll handle the rest.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Delhi card */}
            <PricingCard
              variant="left"
              tagLabel="Delhi"
              tagIcon={<MapPin className="h-3.5 w-3.5" />}
              total={5999}
              subline="Everything you need to host."
              list={delhiList}
              accent="rose"
            />

            {/* NCR card */}
            <PricingCard
              variant="right"
              tagLabel="NCR"
              tagIcon={<MapPin className="h-3.5 w-3.5" />}
              total={8398}
              breakdown="₹6,399 + ₹1,999 NCR travel"
              subline="Noida · Gurugram · Faridabad · Ghaziabad"
              list={ncrList}
              accent="gold"
            />
          </div>

          <p className="mt-10 text-center text-xs text-[#F5F0EB]/45">
            Inclusive of chef time, on-site cooking and post-cleanup. Ingredients & overtime billed separately.
          </p>
        </div>
      </section>

      {/* ============ SECTION 4 — TERMS ============ */}
      <section className="relative overflow-hidden bg-[#0A0A0A] py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
              Fine Print
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              Good to know{" "}
              <em className="font-serif italic text-[#D4AF37]">before you book.</em>
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {terms.map((item, i) => (
              <AccordionItem key={item.title} item={item} index={i} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 — HOW IT WORKS ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
              The Flow
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              How it{" "}
              <em className="font-serif italic text-[#B5636A]">works</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
              From the first message to the last bite — four clean steps.
            </p>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <TimelineStep key={step.num} step={step} index={i} last={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 6 — FINAL CTA ============ */}
      <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#0A0A0A] py-24 sm:py-32">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image src="/images/chef-cooking.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/85 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(181,99,106,0.22),transparent_60%)]" />
        </div>

        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            Your Party, Sorted
          </p>
          <h2 className="party-final-glow mt-6 font-serif text-5xl leading-[1.02] text-[#F5F0EB] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Ready to host{" "}
            <em className="font-serif italic text-[#D4AF37]">without the stress?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
            Tell us your date. We'll send the chef, the menu, and the magic.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
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

          <div className="mx-auto mt-20 flex flex-col items-center gap-3">
            <Image
              src="/savri-logo-light.png"
              alt="Savri"
              width={160}
              height={64}
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

/* ----- Pricing Card ----- */

function PricingCard({
  variant,
  tagLabel,
  tagIcon,
  total,
  breakdown,
  subline,
  list,
  accent,
}: {
  variant: "left" | "right"
  tagLabel: string
  tagIcon: React.ReactNode
  total: number
  breakdown?: string
  subline: string
  list: string[]
  accent: "rose" | "gold"
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 })
  const accentColor = accent === "rose" ? "#B5636A" : "#D4AF37"

  return (
    <div
      ref={ref}
      className={`reveal-block ${inView ? `revealed revealed-${variant}` : `reveal-initial-${variant}`}`}
    >
      <div
        className="party-price-card relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#141414] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10"
        style={{ borderTopColor: accentColor, borderTopWidth: 2 }}
      >
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ background: accentColor }}
        />

        <div className="relative flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ borderColor: `${accentColor}66`, color: accentColor }}
          >
            {tagIcon}
            {tagLabel}
          </span>
          {accent === "rose" ? (
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#F5F0EB]/45">
              Most popular
            </span>
          ) : null}
        </div>

        <div className="relative mt-8 flex items-baseline gap-1">
          <IndianRupee className="h-7 w-7 text-[#F5F0EB]/60" />
          <span className="font-serif text-6xl font-medium leading-none text-[#F5F0EB] sm:text-7xl">
            <PriceCounter target={total} prefix="" />
          </span>
        </div>
        {breakdown ? (
          <p className="mt-2 text-xs text-[#F5F0EB]/55">{breakdown}</p>
        ) : (
          <p className="mt-2 text-xs text-[#F5F0EB]/55">One-time party fee · all-in</p>
        )}
        <p className="mt-5 text-sm text-[#F5F0EB]/75">{subline}</p>

        <div
          className="relative mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

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
