import type { Metadata } from "next"
import Link from "next/link"
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

export default function ContactPage() {
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
            <span className="text-[#C9A84C]">Contact</span>
          </div>

          <p className="reveal-up relative z-10 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            01 — Contact
          </p>
          <h1
            className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.86] text-[#F5F0E8]"
            style={{ fontSize: "clamp(64px, 13vw, 260px)" }}
          >
            Tell us what you need.
          </h1>
          <p className="reveal-up relative z-10 mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
            Booking question, event enquiry, chef partnership, or just checking availability in your city. We&apos;ll route it properly.
          </p>

          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
            <span>↓ Scroll</span>
          </div>
        </section>

        {/* ─────────── 02 / REACH US ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Reach us</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Direct lines.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {contactDetails.map((detail, i) => (
                <div
                  key={detail.label}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
                >
                  <div className="flex items-start gap-6 md:flex-col md:items-start md:gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <detail.icon className="h-9 w-9 text-[#B5636A]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/55">{detail.label}</p>
                    <p
                      className="mt-4 font-serif italic leading-[0.95] text-[#F5F0E8]"
                      style={{ fontSize: "clamp(28px, 4.2vw, 64px)" }}
                    >
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">04</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/55">Social</p>
                  <div className="mt-6 flex gap-4">
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

        {/* ─────────── 03 / SEND A MESSAGE ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — Send a message</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Write to the team.
              </h2>
            </div>

            <div className="reveal-up mt-20 md:mt-28">
              <div className="savri-ai-glass p-6 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
