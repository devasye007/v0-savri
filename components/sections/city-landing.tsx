import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, MapPin, PartyPopper, Sparkles, UtensilsCrossed } from "lucide-react"

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

      {/* ─────────── 01 / HERO ─────────── */}
      <section className="relative isolate flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="savri-ai-orb" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

        <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
          <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
          <ChevronRight className="mx-2 inline h-3 w-3" />
          <span className="text-[#C9A84C]">{city}</span>
        </div>

        <p className="reveal-up relative z-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
          <MapPin className="h-3 w-3" /> 01 — {city} · Delhi NCR
        </p>
        <h1
          className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.86] text-[#F5F0E8]"
          style={{ fontSize: "clamp(56px, 11vw, 220px)" }}
        >
          Private Chef at Home in {city}
        </h1>
        <p className="reveal-up relative z-10 mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
          {heroBlurb}
        </p>

        <div className="reveal-up relative z-10 mt-12 flex flex-col gap-4 sm:flex-row">
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

        <p className="reveal-up relative z-10 mt-10 text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/55">
          Party bookings from{" "}
          <span className="font-semibold text-[#F5F0E8]">{priceLabel}</span>
          <span className="ml-2 text-[#F5F0E8]/40">· {priceBreakdown}</span>
        </p>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
          <span>↓ Scroll</span>
        </div>
      </section>

      {/* ─────────── 02 / WHY SAVRI ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Why Savri in {city}</p>
            <h2
              className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
            >
              A private chef who shows up, cooks fresh, and cleans your kitchen.
            </h2>
          </div>

          <div className="savri-ai-stagger mt-24 md:mt-32">
            <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">01</span>
              <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{intro}</p>
            </div>
            <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">02</span>
              <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{body}</p>
            </div>
            <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">03</span>
              <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
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
        </div>
      </section>

      {/* ─────────── 03 / AREAS WE SERVE ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-gold" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — Areas we serve</p>
            <div>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                We serve all areas of {city}
              </h2>
              <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                Our chefs travel across {city} for your private dining and party bookings. A few of the neighborhoods we cover regularly:
              </p>
            </div>
          </div>

          <div className="reveal-up mt-20 md:mt-28 flex flex-wrap gap-3">
            {neighborhoods.map((area) => (
              <span
                key={area}
                className="px-5 py-2.5 text-sm uppercase tracking-[0.18em] text-[#F5F0E8]/82 border-b border-[#F5F0E8]/15"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 04 / WHAT WE COOK ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — Common bookings</p>
            <h2
              className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
            >
              What we cook in {city}
            </h2>
          </div>

          <div className="savri-ai-stagger mt-24 md:mt-32">
            {occasions.map((line, i) => (
              <div
                key={line}
                className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-12 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-16"
              >
                <div className="flex items-start gap-6 md:flex-col md:items-start md:gap-4">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Sparkles className="h-7 w-7 text-[#B5636A]" />
                </div>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/82 md:text-lg">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 05 / PARTY MENU + PRICE ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-gold" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — Party menu</p>
            <div>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Everything included.
              </h2>
            </div>
          </div>

          <div className="savri-ai-stagger mt-24 md:mt-32">
            {includedItems.map((line, i) => (
              <div
                key={line}
                className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-10 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-12"
              >
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(24px, 3.2vw, 52px)" }}
                >
                  {line}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal-up mt-20 border-t border-[#F5F0E8]/12 pt-16 md:mt-28">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">{city} pricing</p>
            <p
              className="mt-6 font-serif italic leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(56px, 10vw, 180px)" }}
            >
              {priceLabel}
            </p>
            <p className="mt-4 text-base text-[#F5F0E8]/65 md:text-lg">{priceBreakdown}</p>
          </div>
        </div>
      </section>

      {/* ─────────── 06 / CTA ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/images/chef-cooking.jpg"
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,#1A1A1A/85_50%,#1A1A1A_100%)]" />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">06 — Book now</p>
            <div>
              <PartyPopper className="reveal-up h-8 w-8 text-[#C9A84C]" />
              <h2
                className="reveal-up mt-6 font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Ready to book a private chef in {city}?
              </h2>
              <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                Pick a date. We'll send the chef, the menu and the magic.
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
