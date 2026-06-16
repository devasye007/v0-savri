"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, type CSSProperties } from "react"
import {
  BadgeCheck,
  Calendar,
  ChevronRight,
  DollarSign,
  Instagram,
  Mail,
  ShieldCheck,
} from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"

const APPLY_LINK = "https://forms.gle/ESCw7Zpt5vJNgJxa8"

const HERO_IMG = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
const BLEED_IMG = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const CTA_IMG = "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Per Booking",
    description:
      "60% of every booking paid directly to you within 48 hours via UPI. No waiting, no delays.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description:
      "You choose when you're available. No fixed hours, no minimum commitment. Cook on your terms.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Profile",
    description:
      "Build a public Savri Chef Profile with your cuisine, reviews, and booking history. Your reputation, your asset.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Minimum",
    description:
      "We guarantee a minimum monthly earning so you always have a floor income — on top of your per-booking earnings.",
  },
]

const steps = [
  {
    number: 1,
    title: "Apply",
    description: "Fill the application form in 5 minutes.",
  },
  {
    number: 2,
    title: "Video Call",
    description: "Quick intro call with our team.",
  },
  {
    number: 3,
    title: "Verification",
    description: "ID check and cooking test.",
  },
  {
    number: 4,
    title: "Profile Live",
    description: "Go live on the Savri platform.",
  },
  {
    number: 5,
    title: "Start Earning",
    description: "Receive bookings and get paid.",
  },
]

const cuisines = [
  "North Indian",
  "Continental",
  "Chinese",
  "Italian",
  "Multi-cuisine",
  "Healthy & Diet",
  "Baking & Desserts",
]

/** Adds `is-on` to the section + descendants when it scrolls into view (first time). */
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

/** Renders text as scroll-driven .savri-word spans (vh-based activation). */
function WordStream({
  text,
  startVh,
  endVh,
  windowVh = 28,
  className = "",
}: {
  text: string
  startVh: number
  endVh: number
  windowVh?: number
  className?: string
}) {
  const words = text.split(" ")
  const span = endVh - startVh
  const step = words.length > 1 ? span / (words.length - 1) : 0

  return (
    <span className={className}>
      {words.map((w, i) => {
        const ws = Math.round(startVh + i * step)
        const we = Math.round(ws + windowVh)
        return (
          <span
            key={`${w}-${i}`}
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

export default function CareersPage() {
  const teaserRef = useOnEnter<HTMLElement>(0.3)
  const ctaRef = useOnEnter<HTMLElement>(0.25)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="savri-travel-stack overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── 01 / HERO — image bg + stacked massive serif ─────────── */}
        <div className="savri-hero-wrap">
          <section className="savri-hero-pin">
            <div className="absolute inset-0 savri-hero-img">
              <Image
                src={HERO_IMG}
                alt="Savri chef cooking at home in Delhi NCR"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.5)_14%,rgba(26,26,26,0.3)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

            <div className="absolute left-6 top-28 z-10 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
              <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
              <ChevronRight className="mx-2 inline h-3 w-3" />
              <span className="text-[#C9A84C]">Careers</span>
            </div>

            <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#F5F0E8]">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
                01 — Careers at Savri
              </p>
              <h1 className="mt-10 flex flex-col items-center leading-[0.86] tracking-tight">
                <span
                  className="block font-serif font-semibold text-[#F5F0E8]"
                  style={{ fontSize: "clamp(56px, 11vw, 220px)" }}
                >
                  Cook for
                </span>
                <span
                  className="block font-serif font-semibold text-[#B5636A]"
                  style={{ fontSize: "clamp(72px, 14vw, 280px)", lineHeight: 0.82 }}
                >
                  Delhi NCR.
                </span>
                <span
                  className="mt-6 block font-serif italic text-[#F5F0E8]/80"
                  style={{ fontSize: "clamp(24px, 3.8vw, 64px)" }}
                >
                  The most exciting homes.
                </span>
              </h1>
              <p className="mt-10 max-w-2xl font-serif italic text-xl text-[#F5F0E8]/82 md:text-2xl">
                Join Savri&apos;s founding chef roster.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#F5F0E8]/68 md:text-lg">
                Verified chefs. Flexible schedule. Real earnings from Day 1.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href={APPLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                >
                  Apply Now
                </a>
                <a
                  href="#benefits"
                  className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="savri-hero-foot absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 text-[#F5F0E8]">
              <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
            </div>
          </section>
        </div>

        {/* ─────────── 02 / WORD-REVEAL — manifesto ─────────── */}
        <section className="savri-words-wrap text-[#F5F0E8]">
          <div className="savri-words-pin">
            <div className="mx-auto w-full max-w-[1600px]">
              <p
                className="font-serif leading-[1.06] tracking-tight"
                style={{ fontSize: "clamp(34px, 5vw, 96px)" }}
              >
                <WordStream
                  text="Real chefs."
                  startVh={70}
                  endVh={150}
                  className="block"
                />
                <WordStream
                  text="Real homes."
                  startVh={150}
                  endVh={230}
                  className="mt-[0.35em] block"
                />
                <WordStream
                  text="Real money."
                  startVh={230}
                  endVh={310}
                  className="mt-[0.35em] block italic text-[#C9A84C]"
                />
                <WordStream
                  text="From Day 1."
                  startVh={310}
                  endVh={370}
                  className="mt-[0.35em] block italic text-[#B5636A]"
                />
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 03 / EDGE-FADED IMAGE BLEED — chef in action ─────────── */}
        <section id="benefits" className="savri-bleed-wrap text-[#F5F0E8]">
          <div className="absolute inset-0 savri-bleed-img">
            <Image
              src={BLEED_IMG}
              alt="Private chef cooking in a Delhi NCR home"
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
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Why Cook With Savri</p>
              <p
                className="mt-6 block font-serif font-semibold"
                style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
              >
                Built for chefs
              </p>
              <p
                className="mt-1 block font-serif font-semibold text-[#B5636A]"
                style={{ fontSize: "clamp(44px, 7.5vw, 136px)", lineHeight: 1 }}
              >
                who take their craft
              </p>
              <p
                className="mt-1 block font-serif font-semibold text-[#F5F0E8]/85"
                style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
              >
                seriously.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 04 / BENEFITS — sticky sequential reveal ─────────── */}
        <section className="savri-pricing-wrap text-[#F5F0E8]">
          <div className="savri-pricing-pin">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col">
              <p
                className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
                style={{ "--ws": 6, "--we": 16 } as CSSProperties}
              >
                03 — The Deal
              </p>

              <div className="mt-8 flex flex-col gap-6 md:mt-12 md:gap-8">
                {benefits.map((benefit, i) => {
                  const stepCount = Math.max(1, benefits.length)
                  const span = 65 / stepCount
                  const ws = Math.round(18 + i * span)
                  const we = ws + 8
                  const Icon = benefit.icon
                  return (
                    <div key={benefit.title} className="w-full">
                      <div className="flex items-baseline gap-6">
                        <Icon
                          className="savri-price-label h-7 w-7 shrink-0 text-[#B5636A]"
                          style={{ "--ws": ws, "--we": we } as CSSProperties}
                        />
                        <div
                          className="savri-price-amount font-serif font-semibold leading-[0.92] text-[#F5F0E8]"
                          style={{
                            fontSize: "clamp(32px, 5.5vw, 96px)",
                            "--ws": ws,
                            "--we": we,
                          } as CSSProperties}
                        >
                          {benefit.title}
                        </div>
                      </div>
                      <p
                        className="savri-price-label mt-3 max-w-3xl font-sans font-medium tracking-wide text-[#F5F0E8]/75"
                        style={{
                          fontSize: "clamp(14px, 1.2vw, 22px)",
                          "--ws": ws + 2,
                          "--we": we + 2,
                        } as CSSProperties}
                      >
                        {benefit.description}
                      </p>
                      {i < benefits.length - 1 ? (
                        <div
                          className="savri-price-line mt-5 h-px w-full bg-[#B5636A]/50"
                          style={{
                            "--ws": we,
                            "--we": we + 6,
                          } as CSSProperties}
                        />
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 05 / CHEF JOURNEY — sticky sequential reveal ─────────── */}
        <section className="savri-pricing-wrap text-[#F5F0E8]">
          <div className="savri-pricing-pin">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col">
              <p
                className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#B5636A] md:text-[13px]"
                style={{ "--ws": 6, "--we": 16 } as CSSProperties}
              >
                04 — Chef Journey · How It Works
              </p>

              <div className="mt-8 flex flex-col gap-4 md:mt-12 md:gap-6">
                {steps.map((step, i) => {
                  const stepCount = Math.max(1, steps.length)
                  const span = 65 / stepCount
                  const ws = Math.round(18 + i * span)
                  const we = ws + 7
                  return (
                    <div
                      key={step.number}
                      className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 md:grid-cols-[auto_0.4fr_1fr] md:gap-x-10"
                    >
                      <div
                        className="savri-price-amount font-serif italic leading-none text-[#C9A84C]"
                        style={{
                          fontSize: "clamp(56px, 8vw, 160px)",
                          "--ws": ws,
                          "--we": we,
                        } as CSSProperties}
                      >
                        {step.number}
                      </div>
                      <h3
                        className="savri-price-label font-serif font-semibold leading-[0.95] text-[#F5F0E8]"
                        style={{
                          fontSize: "clamp(26px, 3.2vw, 56px)",
                          "--ws": ws + 1,
                          "--we": we + 1,
                        } as CSSProperties}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="savri-price-label col-span-2 max-w-2xl text-base leading-7 text-[#F5F0E8]/72 md:col-span-1 md:text-lg"
                        style={{
                          "--ws": ws + 2,
                          "--we": we + 2,
                        } as CSSProperties}
                      >
                        {step.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 06 / CUISINES — bleed-style moment ─────────── */}
        <section className="relative z-[3] w-full overflow-hidden bg-[#1A1A1A] py-32 md:py-48">
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — Cuisines</p>
              <h2
                className="reveal-up font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Whatever your speciality — there&apos;s a booking waiting for you.
              </h2>
            </div>

            <div className="reveal-up mt-20 flex flex-wrap gap-x-8 gap-y-4 md:mt-28 md:gap-x-12">
              {cuisines.map((cuisine) => (
                <span
                  key={cuisine}
                  className="font-serif italic text-[#F5F0E8]/90"
                  style={{ fontSize: "clamp(22px, 3vw, 52px)" }}
                >
                  {cuisine}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 07 / TESTIMONIAL — quiet centered moment ─────────── */}
        <section
          ref={teaserRef}
          className="relative z-[4] flex w-full flex-col items-center justify-center overflow-hidden bg-[#1A1A1A] px-6 py-32 text-center md:py-48"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,99,106,0.10),transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p
              className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]"
            >
              06 — Voices from our founding chefs
            </p>
            <blockquote
              className="savri-from-left mt-12 font-serif italic leading-[1.05] text-[#F5F0E8]"
              style={{ fontSize: "clamp(32px, 5vw, 88px)" }}
            >
              &ldquo;This section will feature reviews from our founding chefs after launch.&rdquo;
            </blockquote>
            <p
              className="savri-from-right mt-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#B5636A]"
              style={{ transitionDelay: "150ms" }}
            >
              — Savri Founding Chefs, Delhi NCR · Coming soon
            </p>
          </div>
        </section>

        {/* ─────────── 08 / CINEMATIC APPLY CTA ─────────── */}
        <section
          ref={ctaRef}
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
            <p
              className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#B5636A]"
            >
              07 — Apply
            </p>
            <h2
              className="savri-from-left mt-8 font-serif font-semibold leading-[0.85] text-[#F5F0E8]"
              style={{ fontSize: "clamp(80px, 14vw, 280px)" }}
            >
              Apply.
            </h2>
            <h2
              className="savri-from-right font-serif font-semibold leading-[0.85] text-[#C9A84C]"
              style={{ fontSize: "clamp(64px, 11vw, 220px)", transitionDelay: "150ms" }}
            >
              Cook. Earn.
            </h2>
            <p
              className="savri-rise mt-10 max-w-2xl font-serif italic text-[#F5F0E8]/85"
              style={{ fontSize: "clamp(20px, 2.6vw, 44px)", transitionDelay: "300ms" }}
            >
              <span className="font-semibold text-[#C9A84C]">15+</span> chefs already onboarded on Savri.
            </p>
            <a
              href={APPLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="savri-rise mt-12 inline-flex items-center justify-center bg-[#B5636A] px-10 py-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-base"
              style={{ transitionDelay: "450ms" }}
            >
              Apply Now →
            </a>
          </div>
        </section>

        {/* ─────────── Footer note ─────────── */}
        <section className="relative w-full overflow-hidden border-t border-[#F5F0E8]/12 py-12">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 text-sm text-[#F5F0E8]/62 md:flex-row md:items-center md:justify-between md:px-16">
            <Link href="/" className="font-serif italic text-2xl text-[#B5636A] hover:text-[#F5F0E8]">
              Savri
            </Link>
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/savri.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F0E8]/60 transition hover:text-[#F5F0E8]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:founder@savri.co.in"
                className="text-[#F5F0E8]/60 transition hover:text-[#F5F0E8]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
            <p className="text-[#F5F0E8]/50">© 2026 Savri. Delhi NCR.</p>
          </div>
        </section>
      </main>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919310590819"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <BackToTop />
    </>
  )
}
