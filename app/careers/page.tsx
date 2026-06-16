"use client"

import Link from "next/link"
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

export default function CareersPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── 01 / HERO ─────────── */}
        <section className="relative isolate flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="savri-ai-orb" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

          <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
            <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
            <ChevronRight className="mx-2 inline h-3 w-3" />
            <span className="text-[#C9A84C]">Careers</span>
          </div>

          <p className="reveal-up relative z-10 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            01 — Careers at Savri
          </p>
          <h1
            className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.86] text-[#F5F0E8]"
            style={{ fontSize: "clamp(56px, 11vw, 220px)" }}
          >
            Cook for Delhi NCR&apos;s most exciting homes.
          </h1>
          <p className="reveal-up relative z-10 mt-8 max-w-2xl font-serif italic text-xl text-[#F5F0E8]/82 md:text-2xl">
            Join Savri&apos;s founding chef roster.
          </p>
          <p className="reveal-up relative z-10 mt-6 max-w-2xl text-base leading-8 text-[#F5F0E8]/68 md:text-lg">
            Verified chefs. Flexible schedule. Real earnings from Day 1.
          </p>

          <div className="reveal-up relative z-10 mt-12 flex flex-col gap-4 sm:flex-row">
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

          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
            <span>↓ Scroll</span>
          </div>
        </section>

        {/* ─────────── 02 / BENEFITS ─────────── */}
        <section id="benefits" className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Why Cook With Savri</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Built for chefs who take their craft seriously.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
                >
                  <div className="flex items-start gap-6 md:flex-col md:items-start md:gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <benefit.icon className="h-9 w-9 text-[#B5636A]" />
                  </div>
                  <div>
                    <h3
                      className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                      style={{ fontSize: "clamp(28px, 4.2vw, 72px)" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 03 / CHEF JOURNEY ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — Chef Journey</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                How It Works
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="savri-ai-row reveal-up grid grid-cols-1 items-baseline gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.18fr_0.3fr_1fr] md:gap-12 md:py-18"
                >
                  <div
                    className="font-serif italic leading-none text-[#C9A84C]"
                    style={{ fontSize: "clamp(72px, 9vw, 180px)" }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 04 / CUISINES ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — Cuisines</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Whatever your speciality — there&apos;s a booking waiting for you.
              </h2>
            </div>

            <div className="reveal-up mt-20 md:mt-28 flex flex-wrap gap-3">
              {cuisines.map((cuisine) => (
                <span
                  key={cuisine}
                  className="px-5 py-2.5 text-sm uppercase tracking-[0.18em] text-[#F5F0E8]/82 border-b border-[#F5F0E8]/15"
                >
                  {cuisine}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 05 / TESTIMONIAL ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — Voices</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                From our founding chefs.
              </h2>
            </div>

            <div className="reveal-up mt-20 md:mt-28">
              <blockquote className="mx-auto max-w-3xl border-l-2 border-[#B5636A]/60 pl-8 md:pl-12">
                <p className="font-serif italic text-xl leading-9 text-[#F5F0E8]/90 md:text-2xl">
                  &ldquo;This section will feature reviews from our founding chefs after launch.&rdquo;
                </p>
                <footer className="mt-8 border-t border-[#F5F0E8]/15 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#B5636A]">
                    — Savri Founding Chefs, Delhi NCR · Coming soon
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ─────────── 06 / APPLY ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">06 — Apply</p>
              <div>
                <h2
                  className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
                >
                  Ready to cook for Delhi NCR&apos;s best homes?
                </h2>
                <p className="reveal-up mt-8 max-w-2xl font-serif italic text-xl text-[#F5F0E8]/82 md:text-2xl">
                  <span className="font-semibold text-[#C9A84C]">15+</span> chefs already onboarded on Savri.
                </p>
                <div className="reveal-up mt-12">
                  <a
                    href={APPLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
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
