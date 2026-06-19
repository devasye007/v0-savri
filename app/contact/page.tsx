import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import { ChevronRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { ContactForm } from "@/components/forms/contact-form"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact | Savri",
  description:
    "Contact Savri for bookings, partnerships, pricing questions, city availability, and chef enquiries.",
}

const HERO_IMG = "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1920&q=80"
const BLEED_IMG = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const FORM_IMG = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80"

const contactDetails = [
  { icon: MapPin, label: "Savri HQ", value: "Delhi NCR" },
  { icon: Phone, label: "Phone", value: CONTACT_PHONE },
  { icon: Mail, label: "Email", value: CONTACT_EMAIL },
]

const socials = [
  { href: INSTAGRAM_URL, icon: Instagram, label: "Instagram" },
  { href: TWITTER_URL, icon: Twitter, label: "Twitter" },
  { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
]

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

export default function ContactPage() {
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
                alt="Contact Savri — Delhi NCR"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.5)_14%,rgba(26,26,26,0.3)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

            <div className="absolute left-6 top-32 z-10 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
              <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
              <ChevronRight className="mx-2 inline h-3 w-3" />
              <span className="text-[#C9A84C]">Contact</span>
            </div>

            <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#F5F0E8]">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
                01 — Contact
              </p>
              <h1 className="mt-10 flex flex-col items-center leading-[0.84] tracking-tight">
                <span
                  className="block font-serif font-semibold text-[#F5F0E8]"
                  style={{ fontSize: "clamp(64px, 12vw, 240px)" }}
                >
                  Tell us
                </span>
                <span
                  className="block font-serif font-semibold text-[#F5F0E8]/85"
                  style={{ fontSize: "clamp(44px, 8vw, 160px)", lineHeight: 0.9 }}
                >
                  what you
                </span>
                <span
                  className="block font-serif font-semibold text-[#B5636A]"
                  style={{ fontSize: "clamp(80px, 14vw, 280px)", lineHeight: 0.82 }}
                >
                  need.
                </span>
              </h1>
              <p className="mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                Booking question, event enquiry, chef partnership, or just checking availability in your city. We&apos;ll route it properly.
              </p>
            </div>

            <div className="savri-hero-foot absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 text-[#F5F0E8]">
              <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
            </div>
          </section>
        </div>

        {/* ─────────── 02 / EDGE-FADED IMAGE BLEED — "Direct lines." ─────────── */}
        <section className="savri-bleed-wrap text-[#F5F0E8]">
          <div className="absolute inset-0 savri-bleed-img">
            <Image
              src={BLEED_IMG}
              alt="Savri team — Delhi NCR"
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
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Reach us</p>
              <p
                className="mt-6 block font-serif font-semibold"
                style={{ fontSize: "clamp(48px, 9vw, 170px)", lineHeight: 1 }}
              >
                Direct
              </p>
              <p
                className="mt-1 block font-serif font-semibold text-[#B5636A]"
                style={{ fontSize: "clamp(56px, 10vw, 200px)", lineHeight: 1 }}
              >
                lines.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 03 / CONTACT DETAILS — sticky pricing-style reveal ─────────── */}
        <section className="savri-pricing-wrap text-[#F5F0E8]">
          <div className="savri-pricing-pin">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col">
              <p
                className="savri-price-eyebrow text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]"
                style={{ "--ws": 6, "--we": 16 } as CSSProperties}
              >
                Direct lines · Delhi NCR
              </p>

              <div className="mt-8 flex flex-col gap-4 md:mt-12 md:gap-6">
                {contactDetails.map((detail, i) => {
                  const stepCount = Math.max(1, contactDetails.length + 1)
                  const span = 60 / stepCount
                  const ws = Math.round(18 + i * span)
                  const we = ws + 8
                  const Icon = detail.icon
                  return (
                    <div key={detail.label} className="w-full">
                      <div className="flex items-baseline gap-6">
                        <Icon
                          className="savri-price-label h-7 w-7 shrink-0 text-[#B5636A]"
                          style={{ "--ws": ws, "--we": we } as CSSProperties}
                        />
                        <div className="flex flex-col">
                          <p
                            className="savri-price-label text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/55"
                            style={{
                              "--ws": ws,
                              "--we": we,
                            } as CSSProperties}
                          >
                            {detail.label}
                          </p>
                          <div
                            className="savri-price-amount mt-2 font-serif font-semibold leading-[0.92] text-[#F5F0E8]"
                            style={{
                              fontSize: "clamp(32px, 5.5vw, 96px)",
                              "--ws": ws + 1,
                              "--we": we + 1,
                            } as CSSProperties}
                          >
                            {detail.value}
                          </div>
                        </div>
                      </div>
                      {i < contactDetails.length - 1 ? (
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

                <div className="mt-8 md:mt-10">
                  <p
                    className="savri-price-label text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/55"
                    style={{ "--ws": 56, "--we": 66 } as CSSProperties}
                  >
                    Social
                  </p>
                  <div
                    className="savri-price-label mt-5 flex gap-4"
                    style={{ "--ws": 58, "--we": 68 } as CSSProperties}
                  >
                    {socials.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#F5F0E8]/20 text-[#F5F0E8]/80 transition hover:border-[#B5636A] hover:text-[#B5636A]"
                        aria-label={item.label}
                      >
                        <item.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 04 / WORD-REVEAL — "Write to the team." ─────────── */}
        <section className="savri-words-wrap text-[#F5F0E8]">
          <div className="savri-words-pin">
            <div className="mx-auto w-full max-w-[1600px]">
              <p
                className="font-serif leading-[1.06] tracking-tight"
                style={{ fontSize: "clamp(40px, 7vw, 140px)" }}
              >
                <WordStream
                  text="Write to"
                  startVh={70}
                  endVh={170}
                  className="block"
                />
                <WordStream
                  text="the team."
                  startVh={170}
                  endVh={280}
                  className="mt-[0.25em] block italic text-[#B5636A]"
                />
              </p>
              <p
                className="mt-12 max-w-2xl font-serif italic text-[#F5F0E8]/72"
                style={{ fontSize: "clamp(16px, 1.6vw, 28px)" }}
              >
                03 — Send a message. We reply within a working day.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 05 / FORM — cinematic dark canvas + glass panel ─────────── */}
        <section className="relative z-[6] w-full overflow-hidden bg-[#1A1A1A] py-32 md:py-48">
          <div className="absolute inset-0">
            <Image
              src={FORM_IMG}
              alt=""
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover opacity-25"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.7)_18%,rgba(26,26,26,0.6)_50%,rgba(26,26,26,0.85)_82%,#1A1A1A_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,99,106,0.12),transparent_60%)]" />

          <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-16">
            <div className="reveal-up text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">04 — Send a message</p>
              <h2
                className="mt-8 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 8vw, 160px)" }}
              >
                Write to us.
              </h2>
            </div>

            <div className="reveal-up mt-16 md:mt-20">
              <div className="savri-ai-glass p-6 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 06 / FINAL CTA — quiet cinematic close ─────────── */}
        <section className="relative z-[7] flex h-[80svh] w-full flex-col items-center justify-center overflow-hidden bg-[#1A1A1A] px-6 text-center text-[#F5F0E8]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.7)_50%,#1A1A1A_100%)]" />
          <div className="relative z-10">
            <h2
              className="reveal-up font-serif font-semibold leading-[0.85] text-[#F5F0E8]"
              style={{ fontSize: "clamp(64px, 12vw, 240px)" }}
            >
              We&apos;ll route it.
            </h2>
            <p
              className="reveal-up mt-8 max-w-xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg"
            >
              Or reach us straight on{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#C9A84C] underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
