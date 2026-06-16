"use client"

import Image from "next/image"
import { useEffect } from "react"
import {
  ArrowRight,
  ChevronRight,
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

const pricingPlans = [
  {
    tagLabel: "Delhi",
    total: 5999,
    breakdown: "One-time party fee · all-in",
    subline: "Everything you need to host.",
    list: delhiList,
    badge: "Most popular",
  },
  {
    tagLabel: "NCR",
    total: 7998,
    breakdown: "₹5,999 + ₹1,999 NCR travel",
    subline: "Noida · Gurugram · Faridabad · Ghaziabad",
    list: ncrList,
    badge: null as string | null,
  },
]

/* ============================================================
 * Page
 * ============================================================ */

export function PartyClient() {
  // Single IntersectionObserver — reveal items as they enter the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-fade")
        .forEach((el) => el.classList.add("visible"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    document
      .querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-fade")
      .forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Navbar />

      {/* ─────────── 01 / HERO ─────────── */}
      <section className="relative isolate flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="savri-ai-orb" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

        <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
          <a href="/" className="hover:text-[#F5F0E8]">Home</a>
          <ChevronRight className="mx-2 inline h-3 w-3" />
          <span className="text-[#C9A84C]">Party Bookings</span>
        </div>

        <p className="reveal-up relative z-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
          <Sparkles className="h-3 w-3" /> 01 — Introducing
        </p>
        <h1
          className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.86] text-[#F5F0E8]"
          style={{ fontSize: "clamp(64px, 13vw, 260px)" }}
        >
          party bookings
        </h1>
        <p className="reveal-up relative z-10 mt-10 max-w-xl text-sm uppercase tracking-[0.42em] text-[#F5F0E8]/65 md:text-base">
          At just
        </p>
        <p className="reveal-up relative z-10 mt-3 font-serif italic leading-none text-[#F5F0E8]" style={{ fontSize: "clamp(72px, 12vw, 200px)" }}>
          ₹5,999
        </p>

        <div className="reveal-up relative z-10 mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
          >
            Book Now
          </a>
          <a
            href="#whats-included"
            className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
          >
            See what&apos;s included
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
          <span>↓ Scroll</span>
        </div>
      </section>

      {/* ─────────── 02 / THE MENU ─────────── */}
      <section id="whats-included" className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — The Menu</p>
            <div>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Everything Included. Nothing Left Out.
              </h2>
              <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                A full-spread party menu, cooked live at your home by a vetted private chef. Twelve dishes, one fixed price, zero stress.
              </p>
            </div>
          </div>

          <div className="savri-ai-stagger mt-24 md:mt-32">
            {included.map((item, i) => (
              <div
                key={item.title}
                className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
              >
                <div className="flex items-start gap-6 md:flex-col md:items-start md:gap-4">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <item.Icon className="h-9 w-9 text-[#B5636A]" />
                  <span className="font-serif italic leading-none text-[#C9A84C]" style={{ fontSize: "clamp(48px, 6vw, 96px)" }}>
                    {item.count}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(28px, 4.2vw, 72px)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                    {item.blurb}
                  </p>
                  <div className="mt-8 hidden md:block">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={1200}
                      height={600}
                      sizes="(min-width: 1024px) 60vw, 90vw"
                      loading="lazy"
                      className="h-64 w-full max-w-3xl object-cover opacity-90"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 03 / PRICING ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-gold" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — Pricing</p>
            <div>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Simple, transparent pricing
              </h2>
              <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                One flat fee. No hidden markups. Pick your city — we&apos;ll handle the rest.
              </p>
            </div>
          </div>

          <div className="savri-ai-stagger mt-24 md:mt-32">
            {pricingPlans.map((plan, i) => (
              <article
                key={plan.tagLabel}
                className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
              >
                <div className="flex flex-col gap-4">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex w-fit items-center gap-1.5 border border-[#C9A84C]/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.32em] text-[#C9A84C]">
                    <MapPin className="h-3.5 w-3.5" />
                    {plan.tagLabel}
                  </span>
                  {plan.badge ? (
                    <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#B5636A]">{plan.badge}</span>
                  ) : null}
                </div>
                <div>
                  <h3
                    className="font-serif italic leading-[0.9] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(48px, 7vw, 120px)" }}
                  >
                    ₹{plan.total.toLocaleString("en-IN")}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.32em] text-[#F5F0E8]/55">{plan.breakdown}</p>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{plan.subline}</p>

                  <ul className="mt-8 grid gap-3 max-w-3xl">
                    {plan.list.map((line) => (
                      <li key={line} className="flex items-start gap-3 border-l border-[#C9A84C]/40 pl-5 text-base text-[#F5F0E8]/85 md:text-lg">
                        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#C9A84C]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="savri-ai-btn-primary mt-10 inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                  >
                    Book this plan
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="reveal-up mt-16 text-center text-xs uppercase tracking-[0.32em] text-[#F5F0E8]/45">
            Inclusive of chef time, on-site cooking and post-cleanup. Ingredients &amp; overtime billed separately.
          </p>
        </div>
      </section>

      {/* ─────────── 04 / FINE PRINT ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — Fine Print</p>
            <h2
              className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
            >
              Good to know before you book.
            </h2>
          </div>

          <div className="savri-ai-faq mt-20 divide-y divide-[#F5F0E8]/15 md:mt-28">
            {terms.map((item, i) => (
              <details key={item.title} open={i === 0} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none">
                  <span className="flex items-center gap-5">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif italic text-xl text-[#F5F0E8] md:text-2xl">{item.title}</span>
                  </span>
                  <span className="text-3xl text-[#B5636A] transition group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 pr-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{item.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 05 / THE FLOW ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-gold" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — The Flow</p>
            <div>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                How it works
              </h2>
              <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                From the first message to the last bite — four clean steps.
              </p>
            </div>
          </div>

          <div className="savri-ai-stagger mt-24 md:mt-32">
            {steps.map((s) => (
              <div
                key={s.num}
                className="savri-ai-row reveal-up grid grid-cols-1 items-baseline gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.18fr_0.3fr_1fr] md:gap-12 md:py-18"
              >
                <div
                  className="font-serif italic leading-none text-[#C9A84C]"
                  style={{ fontSize: "clamp(72px, 9vw, 180px)" }}
                >
                  {s.num}
                </div>
                <h3
                  className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
                >
                  {s.title}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 06 / WHY SAVRI ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">06 — Why Savri</p>
            <div>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
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

      {/* ─────────── 07 / YOUR PARTY, SORTED ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-gold" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">07 — Your Party, Sorted</p>
            <div>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Ready to host without the stress?
              </h2>
              <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                Tell us your date. We&apos;ll send the chef, the menu, and the magic.
              </p>

              <div className="reveal-up mt-12 flex flex-col gap-4 sm:flex-row">
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

              <div className="reveal-up mt-20 flex flex-col items-start gap-3">
                <Image
                  src="/savri-logo-light.png"
                  alt="Savri"
                  width={160}
                  height={64}
                  loading="lazy"
                  className="h-14 w-auto opacity-90"
                />
                <p className="font-serif text-xl italic text-[#F5F0E8]/72">Private Chef, Ghar Pe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
