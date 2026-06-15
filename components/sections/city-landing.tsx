import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, MapPin, PartyPopper, Sparkles, UtensilsCrossed } from "lucide-react"

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
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: city, href: `/${city.toLowerCase()}` },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0EB]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-28">
        <div aria-hidden className="party-hero-parallax absolute inset-0 -z-10" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A0A]/85 via-[#0A0A0A]/72 to-[#0A0A0A]" />

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="absolute left-0 right-0 top-[5.5rem] z-20 mx-auto max-w-7xl px-6 text-[11px] uppercase tracking-[0.32em] text-[#F5F0EB]/55 lg:px-8"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden className="text-[#F5F0EB]/30">/</span> : null}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={c.href} className="transition hover:text-[#D4AF37]">
                    {c.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-[#D4AF37]">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="container mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D4AF37] backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            {city} · Delhi NCR
          </p>
          <h1 className="mt-6 font-serif text-5xl italic leading-[1.02] text-[#F5F0EB] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Private Chef at Home in {city}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#F5F0EB]/72 md:text-lg">
            {heroBlurb}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/party"
              className="immersive-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#F5F0EB] shadow-[0_18px_45px_rgba(181,99,106,0.45)] hover:bg-[#9A5158]"
            >
              Book a Party in {city}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D4AF37]/45 px-8 py-3.5 text-sm font-medium text-[#F5F0EB]/85 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.32em] text-[#F5F0EB]/55">
            Party bookings from{" "}
            <span className="font-semibold text-[#F5F0EB]">{priceLabel}</span>
            <span className="ml-2 text-[#F5F0EB]/40">· {priceBreakdown}</span>
          </p>
        </div>
      </section>

      {/* INTRO + BODY */}
      <section className="relative bg-[#0A0A0A] py-20 sm:py-24">
        <div className="container mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            Why Savri in {city}
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#F5F0EB] sm:text-4xl">
            A private chef who shows up, cooks fresh, and cleans your kitchen.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#F5F0EB]/72">
            <p>{intro}</p>
            <p>{body}</p>
            <p>
              Looking for the full party menu, fine print and live availability? Head to our{" "}
              <Link href="/party" className="text-[#D4AF37] underline-offset-4 hover:underline">
                party bookings page
              </Link>{" "}
              or open the{" "}
              <Link href="/" className="text-[#D4AF37] underline-offset-4 hover:underline">
                Savri homepage
              </Link>{" "}
              for our regular private chef plans starting at ₹549.
            </p>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="relative bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] py-20 sm:py-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            Areas we serve
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#F5F0EB] sm:text-4xl">
            We serve all areas of {city}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#F5F0EB]/65">
            Our chefs travel across {city} for your private dining and party bookings. A few of
            the neighborhoods we cover regularly:
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {neighborhoods.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#D4AF37]/30 bg-white/[0.03] px-4 py-2 text-sm text-[#F5F0EB]/80"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS + WHAT'S INCLUDED */}
      <section className="relative bg-[#0A0A0A] py-20 sm:py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
                Common bookings
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-[#F5F0EB] sm:text-4xl">
                What we cook in {city}
              </h2>
              <ul className="mt-8 grid gap-3">
                {occasions.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-[#F5F0EB]/80">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                      <Sparkles className="h-3 w-3" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
                Party menu
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-[#F5F0EB] sm:text-4xl">
                Everything included.
              </h2>
              <ul className="mt-8 grid gap-3">
                {[
                  "4 Snacks",
                  "4 Main Course",
                  "2 Sides (Breads / Rice)",
                  "2 Desserts + 1 Salad",
                  "Verified private chef",
                  "Kitchen cleaned after",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-[#F5F0EB]/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#141414] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
                  {city} pricing
                </p>
                <p className="mt-2 font-serif text-4xl font-semibold text-[#F5F0EB]">
                  {priceLabel}
                </p>
                <p className="mt-2 text-xs text-[#F5F0EB]/55">{priceBreakdown}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate flex items-center justify-center overflow-hidden bg-[#0A0A0A] py-20 sm:py-24">
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
        </div>
        <div className="container mx-auto max-w-3xl px-6 text-center lg:px-8">
          <PartyPopper className="mx-auto h-8 w-8 text-[#D4AF37]" />
          <h2 className="mt-6 font-serif text-3xl leading-[1.05] text-[#F5F0EB] sm:text-4xl md:text-5xl">
            Ready to book a private chef in {city}?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
            Pick a date. We'll send the chef, the menu and the magic.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="immersive-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold text-[#F5F0EB] hover:bg-[#9A5158]"
            >
              <UtensilsCrossed className="h-4 w-4" />
              Book a Chef on WhatsApp
            </a>
            <Link
              href="/party"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D4AF37]/50 px-8 py-3.5 text-sm font-medium text-[#F5F0EB]/85 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              See full party menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
