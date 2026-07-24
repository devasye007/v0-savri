import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CalendarDays, PartyPopper, MessageCircle } from "lucide-react"

import { BookingShell } from "@/components/booking/BookingShell"
import { ScrollReveal } from "@/components/ScrollReveal"
import { BOOKING_URL } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Book a Private Chef Online | Savri",
  description:
    "Book a private chef online in Delhi NCR. Everyday meals from ₹549 or party bookings from ₹5,999. Choose your dishes and pay securely.",
  alternates: { canonical: "https://savri.co.in/book" },
}

const OPTIONS = [
  {
    href: "/book/daily",
    icon: CalendarDays,
    title: "Daily Meals",
    price: "From ₹549",
    copy: "A chef at home for everyday dining. Small Table for 1-3 guests, Full Table for 4-6. Pick your dishes and a serve time.",
    cta: "Book daily meals",
  },
  {
    href: "/book/party",
    icon: PartyPopper,
    title: "Party Booking",
    price: "From ₹5,999",
    copy: "A private chef for your celebration — 15+ guests, 90+ dishes to choose from, optional waiters and bartenders.",
    cta: "Book a party",
  },
]

export default function Page() {
  return (
    <BookingShell>
      <ScrollReveal as="header" className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Book online</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">What are you booking?</h1>
        <p className="mx-auto mt-3 max-w-lg text-cream/70">
          Choose a flow below. You'll pick your dishes, review everything, and pay securely — no back-and-forth.
        </p>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2">
        {OPTIONS.map((o, i) => (
          <ScrollReveal key={o.href} delay={i * 80}>
            <Link
              href={o.href}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-rose/50 hover:bg-white/[0.05]"
            >
              <o.icon className="h-9 w-9 text-rose" />
              <div className="mt-5 flex items-baseline justify-between">
                <h2 className="font-serif text-2xl font-semibold text-cream">{o.title}</h2>
                <span className="text-sm font-medium text-gold">{o.price}</span>
              </div>
              <p className="mt-3 flex-1 text-cream/70">{o.copy}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose transition group-hover:gap-3">
                {o.cta} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* WhatsApp kept as a secondary option, not removed. */}
      <div className="mt-12 text-center">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cream/60 transition hover:text-cream"
        >
          <MessageCircle className="h-4 w-4" /> Questions? Chat with us on WhatsApp
        </a>
      </div>
    </BookingShell>
  )
}
