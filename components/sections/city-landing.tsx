import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import { ArrowRight, ChevronRight, MapPin, PartyPopper, UtensilsCrossed } from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { BOOKING_URL } from "@/lib/site-data"

export type CityLandingProps = {
  city: string
  /** "₹5,999" or "₹7,998" — displayed prominently. */
  priceLabel: string
  /** "₹5,999" or "₹5,999 + ₹1,999 NCR travel" — shown below price. */
  priceBreakdown: string
  heroBlurb: string
  neighborhoods: string[]
  intro: string
  body: string
  occasions: string[]
}

const includedItems = [
  "4 Snacks",
  "4 Main Course",
  "2 Sides (Breads / Rice)",
  "2 Desserts + 1 Salad",
  "Verified private chef",
  "Kitchen cleaned after",
]

const HERO_IMG = "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1920&q=80"
const BLEED_IMG = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const MENU_IMG = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
const CTA_IMG = "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

/** Renders a phrase as <span class="savri-word"> blocks with scroll-driven activation ranges in vh. */
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

export function CityLanding({
  city,
  priceLabel,
  priceBreakdown,
  heroBlurb,
  neighborhoods,
  intro,
  body,
  occasions,
}: CityLandingProps) {
  return (
    <div className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Navbar />

      <main className="savri-travel-stack">
        {/* ─────────── 01 / HERO — image bg + stacked massive serif ─────────── */}
        <div className="savri-hero-wrap">
          <section className="savri-hero-pin">
            <div className="absolute inset-0 savri-hero-img">
              <Image
                src={HERO_IMG}
                alt={`Private chef cooking at home in ${city}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.45)_14%,rgba(26,26,26,0.28)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

            <div className="absolute left-6 top-32 z-10 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
              <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
              <ChevronRight className="mx-2 inline h-3 w-3" />
              <span className="text-[#C9A84C]">{city}</span>
            </div>

            <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#F5F0E8]">
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
                <MapPin className="h-3 w-3" /> 01 — {city} · Delhi NCR
              </p>
              <h1 className="mt-8 flex flex-col items-center leading-[0.86] tracking-tight">
                <span
                  className="block font-serif font-semibold text-[#F5F0E8]"
                  style={{ fontSize: "clamp(56px, 9vw, 170px)" }}
                >
                  Private Chef
                </span>
                <span
                  className="block font-serif font-semibold text-[#F5F0E8]/85"
                  style={{ fontSize: "clamp(36px, 5.5vw, 100px)", lineHeight: 0.95 }}
                >
                  at Home in
                </span>
                <span
                  className="block font-serif font-semibold text-[#B5636A]"
                  style={{ fontSize: "clamp(80px, 14vw, 260px)", lineHeight: 0.82 }}
                >
                  {city}.
                </span>
              </h1>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/party"
                  className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                >
                  Book a Party in {city}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                >
                  WhatsApp Us
                </a>
              </div>

              <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/55">
                Party bookings from{" "}
                <span className="font-semibold text-[#F5F0E8]">{priceLabel}</span>
                <span className="ml-2 text-[#F5F0E8]/40">· {priceBreakdown}</span>
              </p>
            </div>

            <div className="savri-hero-foot absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 text-[#F5F0E8]">
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[12px]">
                {city} · Book Now
              </span>
              <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
            </div>
          </section>
        </div>

        {/* ─────────── 02 / WORD-REVEAL — heroBlurb scrolls in word by word ─────────── */}
        <section className="savri-words-wrap text-[#F5F0E8]">
          <div className="savri-words-pin">
            <div className="mx-auto w-full max-w-[1600px]">
              <p
                className="font-serif leading-[1.06] tracking-tight"
                style={{ fontSize: "clamp(28px, 4.4vw, 84px)" }}
              >
                <WordStream
                  text={heroBlurb}
                  startVh={60}
                  endVh={340}
                  className="block"
                />
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 03 / EDGE-FADED IMAGE BLEED — chef in your kitchen ─────────── */}
        <section className="savri-bleed-wrap text-[#F5F0E8]">
          <div className="absolute inset-0 savri-bleed-img">
            <Image
              src={BLEED_IMG}
              alt={`Private chef cooking dinner in ${city}`}
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
                className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
              >
                02 — Why Savri in {city}
              </p>
              <p
                className="mt-6 block font-serif font-semibold"
                style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
              >
                A private chef
              </p>
              <p
                className="mt-1 block font-serif font-semibold"
                style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
              >
                who shows up,
              </p>
              <p
                className="mt-1 block font-serif font-semibold text-[#B5636A]"
                style={{ fontSize: "clamp(44px, 7.5vw, 136px)", lineHeight: 1 }}
              >
                cooks fresh,
              </p>
              <p
                className="mt-1 block font-serif font-semibold text-[#F5F0E8]/80"
                style={{ fontSize: "clamp(36px, 6vw, 110px)", lineHeight: 1 }}
              >
                cleans your kitchen.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 04 / WORD-REVEAL — intro paragraph ─────────── */}
        <section className="savri-words-wrap text-[#F5F0E8]">
          <div className="savri-words-pin">
            <div className="mx-auto w-full max-w-[1600px]">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] mb-10">
                03 — How it works in {city}
              </p>
              <p
                className="font-serif leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(22px, 3vw, 56px)" }}
              >
                <WordStream text={intro} startVh={40} endVh={360} className="block" />
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 05 / NEIGHBORHOODS — sticky pin reveal ─────────── */}
        <section className="savri-pricing-wrap text-[#F5F0E8]">
          <div className="savri-pricing-pin">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col">
              <p
                className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
                style={{ "--ws": 6, "--we": 16 } as CSSProperties}
              >
                04 — Areas we serve
              </p>
              <h2
                className="savri-price-label mt-8 font-serif font-semibold leading-[0.92]"
                style={{
                  fontSize: "clamp(40px, 6.5vw, 120px)",
                  "--ws": 12,
                  "--we": 24,
                } as CSSProperties}
              >
                We serve all areas of {city}
              </h2>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 md:mt-16 md:gap-x-10 md:gap-y-4">
                {neighborhoods.map((area, i) => {
                  const span = 70
                  const stepCount = Math.max(1, neighborhoods.length - 1)
                  const ws = Math.round(22 + (i / stepCount) * span)
                  const we = ws + 14
                  return (
                    <span
                      key={area}
                      className="savri-price-label font-serif italic text-[#F5F0E8]/90"
                      style={{
                        fontSize: "clamp(22px, 3vw, 52px)",
                        "--ws": ws,
                        "--we": we,
                      } as CSSProperties}
                    >
                      {area}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 06 / WORD-REVEAL — body paragraph ─────────── */}
        <section className="savri-words-wrap text-[#F5F0E8]">
          <div className="savri-words-pin">
            <div className="mx-auto w-full max-w-[1600px]">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#B5636A] mb-10">
                05 — What we cook in {city}
              </p>
              <p
                className="font-serif leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(22px, 3vw, 56px)" }}
              >
                <WordStream text={body} startVh={40} endVh={360} className="block" />
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 07 / OCCASIONS — sequential pricing-style reveal ─────────── */}
        <section className="savri-pricing-wrap text-[#F5F0E8]">
          <div className="savri-pricing-pin">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col">
              <p
                className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#B5636A] md:text-[13px]"
                style={{ "--ws": 6, "--we": 16 } as CSSProperties}
              >
                06 — Common bookings
              </p>

              <div className="mt-8 flex flex-col gap-5 md:mt-12 md:gap-7">
                {occasions.map((line, i) => {
                  const stepCount = Math.max(1, occasions.length)
                  const span = 70 / stepCount
                  const ws = Math.round(18 + i * span)
                  const we = ws + 8
                  const lineWs = we
                  const lineWe = we + 6
                  return (
                    <div key={line} className="w-full">
                      <p
                        className="savri-price-label font-serif italic text-[#F5F0E8]/92"
                        style={{
                          fontSize: "clamp(22px, 3vw, 56px)",
                          "--ws": ws,
                          "--we": we,
                        } as CSSProperties}
                      >
                        {line}
                      </p>
                      {i < occasions.length - 1 ? (
                        <div
                          className="savri-price-line mt-4 h-px w-full bg-[#B5636A]/55"
                          style={{
                            "--ws": lineWs,
                            "--we": lineWe,
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

        {/* ─────────── 08 / PARTY MENU IMAGE BLEED + INCLUSIONS ─────────── */}
        <section className="savri-bleed-wrap text-[#F5F0E8]">
          <div className="absolute inset-0 savri-bleed-img">
            <Image
              src={MENU_IMG}
              alt="Savri party menu spread"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="savri-bleed-overlay absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.55)_18%,rgba(26,26,26,0.45)_50%,rgba(26,26,26,0.85)_82%,#1A1A1A_100%)]" />

          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-20 md:pb-24">
            <div className="savri-bleed-text max-w-[1400px]">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">07 — Party menu</p>
              <p
                className="mt-6 font-serif font-semibold"
                style={{ fontSize: "clamp(36px, 6vw, 110px)", lineHeight: 1 }}
              >
                Everything included.
              </p>
              <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-3 text-[#F5F0E8]/88 md:grid-cols-2 md:gap-y-4">
                {includedItems.map((line, i) => (
                  <li
                    key={line}
                    className="reveal-up flex items-baseline gap-4 font-serif italic"
                    style={{ fontSize: "clamp(18px, 2vw, 32px)" }}
                  >
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─────────── 09 / PRICE — sticky single tier reveal ─────────── */}
        <section className="savri-pricing-wrap text-[#F5F0E8]">
          <div className="savri-pricing-pin">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col">
              <p
                className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
                style={{ "--ws": 6, "--we": 16 } as CSSProperties}
              >
                08 — {city} pricing
              </p>

              <div
                className="savri-price-amount mt-8 font-sans font-extrabold leading-[0.9] text-[#C9A84C]"
                style={{
                  fontSize: "clamp(96px, 18vw, 340px)",
                  fontVariantNumeric: "lining-nums tabular-nums",
                  letterSpacing: "-0.02em",
                  "--ws": 22,
                  "--we": 36,
                } as CSSProperties}
              >
                {priceLabel}
              </div>
              <p
                className="savri-price-label mt-6 font-sans font-medium tracking-wide text-[#F5F0E8]/90"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 32px)",
                  "--ws": 32,
                  "--we": 46,
                } as CSSProperties}
              >
                {priceBreakdown}
              </p>
              <div
                className="savri-price-line mt-10 h-px w-full bg-[#B5636A]"
                style={{ "--ws": 44, "--we": 58 } as CSSProperties}
              />
              <p
                className="savri-price-label mt-10 max-w-3xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg"
                style={{ "--ws": 52, "--we": 68 } as CSSProperties}
              >
                Looking for the full party menu, fine print and live availability? Head to our{" "}
                <Link href="/party" className="text-[#C9A84C] underline-offset-4 hover:underline">
                  party bookings page
                </Link>{" "}
                or open the{" "}
                <Link href="/" className="text-[#C9A84C] underline-offset-4 hover:underline">
                  Savri homepage
                </Link>{" "}
                for our regular private chef plans starting at ₹549.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 10 / FINAL CTA — cinematic 100svh ─────────── */}
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
            <PartyPopper className="reveal-up h-8 w-8 text-[#C9A84C]" />
            <h2
              className="reveal-up mt-6 font-serif font-semibold leading-[0.85]"
              style={{ fontSize: "clamp(80px, 16vw, 320px)" }}
            >
              Ready?
            </h2>
            <p
              className="reveal-up mt-8 font-serif italic text-[#F5F0E8]/85"
              style={{ fontSize: "clamp(22px, 3vw, 52px)" }}
            >
              Ready to book a private chef in {city}?
            </p>
            <p className="reveal-up mt-6 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
              Pick a date. We&apos;ll send the chef, the menu and the magic.
            </p>
            <div className="reveal-up mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
              >
                <UtensilsCrossed className="h-4 w-4" />
                Book a Chef on WhatsApp
              </a>
              <Link
                href="/party"
                className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
              >
                See full party menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
