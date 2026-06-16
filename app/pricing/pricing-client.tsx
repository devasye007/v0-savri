"use client"

import Image from "next/image"
import { useEffect, useRef, type CSSProperties } from "react"
import { ArrowRight } from "lucide-react"

const HERO_IMG =
  "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1920&q=80"
const BLEED_IMG =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const CTA_IMG =
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

type Tier = {
  id: string
  name: string
  guests: string
  price: number
  dishes: number
  hours: number
  perPerson: string
  bestFor: string
  badge: string | null
}

type Example = {
  title: string
  lines: string[]
  total: string
  perPerson: string
}

type FAQ = { question: string; answer: string }

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

function HeroMoment() {
  return (
    <div className="savri-hero-wrap">
      <section className="savri-hero-pin">
        <div className="absolute inset-0 savri-hero-img">
          <Image
            src={HERO_IMG}
            alt="Indian thali at home"
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
              style={{ fontSize: "clamp(60px, 11vw, 200px)" }}
            >
              Simple
            </span>
            <span
              className="block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(80px, 15vw, 280px)", lineHeight: 0.82 }}
            >
              Pricing.
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
            Clear base tiers, fixed add-ons, and a straightforward explanation of what is included in every Savri booking.
          </p>
        </div>

        <div className="savri-hero-foot absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 text-[#F5F0E8]">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[12px]">
            Affordable enough to make it a habit.
          </span>
          <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
        </div>
      </section>
    </div>
  )
}

function SequentialPricingMoment({ tiers }: { tiers: Tier[] }) {
  // Sequence: ₹549 → ₹1,149 → ₹5,999 (party teaser)
  const rows: Array<{
    amount: string
    label: string
    detail: string
    ws: number
    we: number
    lineWs?: number
    lineWe?: number
  }> = [
    {
      amount: `₹${tiers[0].price.toLocaleString("en-IN")}`,
      label: `Small Table • ${tiers[0].guests} • ${tiers[0].dishes} dishes`,
      detail: tiers[0].perPerson,
      ws: 18,
      we: 26,
      lineWs: 26,
      lineWe: 34,
    },
    {
      amount: `₹${tiers[1].price.toLocaleString("en-IN")}`,
      label: `Full Table • ${tiers[1].guests} • ${tiers[1].dishes} dishes`,
      detail: tiers[1].perPerson,
      ws: 36,
      we: 44,
      lineWs: 44,
      lineWe: 52,
    },
    {
      amount: "₹5,999",
      label: "Party Booking • Delhi • Custom menu",
      detail: "12 dishes, one fixed price",
      ws: 54,
      we: 62,
    },
  ]

  return (
    <section className="savri-pricing-wrap text-[#F5F0E8]">
      <div className="savri-pricing-pin">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          <p
            className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
            style={{ "--ws": 6, "--we": 16 } as CSSProperties}
          >
            Two tiers. Zero surprises.
          </p>

          <div className="mt-6 flex flex-col gap-3 md:mt-10 md:gap-5">
            {rows.map((row, idx) => (
              <div key={row.amount} className="w-full">
                <div
                  className="savri-price-amount font-sans font-extrabold leading-[0.9] text-[#C9A84C]"
                  style={{
                    fontSize: "clamp(56px, 9.5vw, 220px)",
                    fontVariantNumeric: "lining-nums tabular-nums",
                    letterSpacing: "-0.02em",
                    "--ws": row.ws,
                    "--we": row.we,
                  } as CSSProperties}
                >
                  {row.amount}
                </div>
                <p
                  className="savri-price-label mt-3 font-sans font-medium tracking-wide text-[#F5F0E8]/90"
                  style={{
                    fontSize: "clamp(15px, 1.4vw, 24px)",
                    "--ws": row.ws + 4,
                    "--we": row.we + 4,
                  } as CSSProperties}
                >
                  {row.label}
                </p>
                <p
                  className="savri-price-label mt-1 text-[11px] uppercase tracking-[0.32em] text-[#F5F0E8]/55"
                  style={{
                    "--ws": row.ws + 5,
                    "--we": row.we + 5,
                  } as CSSProperties}
                >
                  {row.detail}
                </p>
                {idx < rows.length - 1 ? (
                  <div
                    className="savri-price-line mt-3 h-px w-full bg-[#B5636A] md:mt-5"
                    style={{
                      "--ws": row.lineWs ?? row.we,
                      "--we": row.lineWe ?? row.we + 6,
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

function TiersDetailMoment({ tiers, bookingUrl }: { tiers: Tier[]; bookingUrl: string }) {
  return (
    <section className="relative z-[3] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">In Detail</p>
        <h2
          className="reveal-up mt-8 font-serif font-semibold leading-[0.9]"
          style={{ fontSize: "clamp(40px, 6.5vw, 120px)" }}
        >
          Pick your table.
        </h2>

        <div className="savri-ai-stagger mt-20 grid gap-12 md:mt-28 md:grid-cols-2 md:gap-16">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className="savri-ai-row reveal-up flex flex-col gap-6 border-t border-[#F5F0E8]/12 pt-10"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#B5636A]">{tier.guests}</p>
                {tier.badge ? (
                  <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#C9A84C]">
                    {tier.badge}
                  </span>
                ) : null}
              </div>
              <h3
                className="font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(40px, 5vw, 88px)" }}
              >
                {tier.name}
              </h3>
              <p
                className="font-sans font-extrabold leading-none text-[#C9A84C]"
                style={{ fontSize: "clamp(56px, 8vw, 140px)" }}
              >
                ₹{tier.price.toLocaleString("en-IN")}
              </p>
              <p className="text-base text-[#F5F0E8]/72 md:text-lg">{tier.perPerson}</p>

              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div className="border-l border-[#F5F0E8]/18 pl-5">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#F5F0E8]/50">Dishes</p>
                  <p className="mt-2 text-base text-[#F5F0E8]/85">{tier.dishes} dishes</p>
                </div>
                <div className="border-l border-[#F5F0E8]/18 pl-5">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#F5F0E8]/50">Cooking Time</p>
                  <p className="mt-2 text-base text-[#F5F0E8]/85">
                    {tier.hours} hour{tier.hours > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="border-l border-[#B5636A]/55 pl-5 sm:col-span-2">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#F5F0E8]/50">Best For</p>
                  <p className="mt-2 text-base text-[#F5F0E8]/85">{tier.bestFor}</p>
                </div>
              </div>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="savri-ai-btn-primary mt-6 inline-flex min-h-12 w-fit items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
              >
                Book {tier.name}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AddOnsBleed({ notIncluded }: { notIncluded: string[] }) {
  const ref = useOnEnter<HTMLElement>(0.3)
  return (
    <section
      ref={ref}
      className="relative z-[4] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
    >
      <div className="savri-ambient-zoom absolute inset-0">
        <Image
          src={BLEED_IMG}
          alt="Add-ons backdrop"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.85)_16%,rgba(26,26,26,0.7)_50%,rgba(26,26,26,0.85)_84%,#1A1A1A_100%)]" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center md:px-16">
        <p
          className="savri-rise uppercase text-[#C9A84C]"
          style={{ fontSize: "clamp(12px, 1.5vw, 22px)", letterSpacing: "0.5em" }}
        >
          Add-ons
        </p>
        <h2
          className="savri-rise mt-6 font-serif font-semibold leading-[0.88] text-[#F5F0E8]"
          style={{ fontSize: "clamp(48px, 9vw, 180px)", transitionDelay: "100ms" }}
        >
          What sits outside
          <br />
          <span className="text-[#B5636A]">base price.</span>
        </h2>
        <ul className="savri-rise mt-12 flex flex-col items-center gap-4" style={{ transitionDelay: "300ms" }}>
          {notIncluded.map((item) => (
            <li
              key={item}
              className="font-serif text-xl text-[#F5F0E8]/85 md:text-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ComparisonMoment({ comparison }: { comparison: [string, string, string][] }) {
  return (
    <section className="relative z-[5] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">Comparison</p>
        <h2
          className="reveal-up mt-8 font-serif font-semibold leading-[0.9]"
          style={{ fontSize: "clamp(40px, 6.5vw, 120px)" }}
        >
          Side by side.
        </h2>

        <div className="savri-ai-stagger mt-20 md:mt-28">
          <div className="reveal-up grid grid-cols-3 gap-8 border-t border-[#F5F0E8]/12 py-6 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
            <span>Feature</span>
            <span>Small Table</span>
            <span>Full Table</span>
          </div>
          {comparison.map((row) => (
            <div
              key={row[0]}
              className="savri-ai-row reveal-up grid grid-cols-3 gap-8 border-t border-[#F5F0E8]/12 py-8 md:py-10"
            >
              <span
                className="font-serif text-[#F5F0E8]"
                style={{ fontSize: "clamp(18px, 1.8vw, 28px)" }}
              >
                {row[0]}
              </span>
              <span className="text-base text-[#F5F0E8]/78 md:text-lg">{row[1]}</span>
              <span className="text-base text-[#F5F0E8]/78 md:text-lg">{row[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExamplesMoment({ examples }: { examples: Example[] }) {
  return (
    <section className="relative z-[5] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">Examples</p>
        <h2
          className="reveal-up mt-8 font-serif font-semibold leading-[0.9]"
          style={{ fontSize: "clamp(40px, 6.5vw, 120px)" }}
        >
          What you actually pay.
        </h2>

        <div className="savri-ai-stagger mt-20 grid gap-10 md:mt-28 md:grid-cols-3 md:gap-12">
          {examples.map((example) => (
            <article
              key={example.title}
              className="savri-ai-row reveal-up flex flex-col gap-5 border-t border-[#F5F0E8]/12 pt-10"
            >
              <h3
                className="font-serif font-semibold leading-[0.95] text-[#F5F0E8]"
                style={{ fontSize: "clamp(22px, 2.4vw, 36px)" }}
              >
                {example.title}
              </h3>
              <div className="space-y-1 text-base text-[#F5F0E8]/72 md:text-lg">
                {example.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p
                className="font-sans font-extrabold leading-none text-[#C9A84C]"
                style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
              >
                {example.total}
              </p>
              <p className="text-sm uppercase tracking-[0.32em] text-[#F5F0E8]/55">{example.perPerson}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function IncludedMoment({ included }: { included: string[] }) {
  return (
    <section className="relative z-[5] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">Included</p>
        <h2
          className="reveal-up mt-8 font-serif font-semibold leading-[0.9]"
          style={{ fontSize: "clamp(40px, 6.5vw, 120px)" }}
        >
          What you are paying for
        </h2>

        <ul className="savri-ai-stagger mt-16 grid gap-4 md:mt-24 md:grid-cols-2 md:gap-6">
          {included.map((item) => (
            <li
              key={item}
              className="reveal-up border-l border-[#C9A84C]/40 pl-5 font-serif text-lg text-[#F5F0E8]/90 md:text-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FAQMoment({ faqs, bookingUrl }: { faqs: FAQ[]; bookingUrl: string }) {
  const ref = useOnEnter<HTMLElement>(0.15)
  return (
    <section
      ref={ref}
      className="relative z-[6] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48"
    >
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">FAQ</p>
        <h2
          className="savri-rise mt-8 font-serif font-semibold leading-[0.9]"
          style={{ fontSize: "clamp(48px, 9vw, 170px)", transitionDelay: "100ms" }}
        >
          Pricing
          <br />
          <span className="text-[#B5636A]">questions.</span>
        </h2>

        <div className="savri-ai-faq mt-20 divide-y divide-[#F5F0E8]/15 md:mt-28">
          {faqs.map((faq, i) => (
            <details key={faq.question} open={i === 0} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none">
                <span className="flex items-center gap-5">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl text-[#F5F0E8] md:text-2xl">{faq.question}</span>
                </span>
                <span className="text-3xl text-[#B5636A] transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 pr-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="reveal-up mt-20 flex justify-center md:mt-24">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
          >
            Book Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function CinematicCTA({ bookingUrl }: { bookingUrl: string }) {
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
          Book your private chef.
        </p>
        <a
          href={bookingUrl}
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

export function PricingClient({
  tiers,
  included,
  notIncluded,
  comparison,
  examples,
  faqs,
  bookingUrl,
}: {
  tiers: Tier[]
  included: string[]
  notIncluded: string[]
  comparison: [string, string, string][]
  examples: Example[]
  faqs: FAQ[]
  bookingUrl: string
}) {
  return (
    <main className="savri-travel-stack overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <HeroMoment />
      <SequentialPricingMoment tiers={tiers} />
      <TiersDetailMoment tiers={tiers} bookingUrl={bookingUrl} />
      <AddOnsBleed notIncluded={notIncluded} />
      <ComparisonMoment comparison={comparison} />
      <ExamplesMoment examples={examples} />
      <IncludedMoment included={included} />
      <FAQMoment faqs={faqs} bookingUrl={bookingUrl} />
      <CinematicCTA bookingUrl={bookingUrl} />
    </main>
  )
}
