"use client"

import Image from "next/image"
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react"

import {
  BOOKING_URL,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "@/lib/site-data"

const aboutLinks = [
  { label: "About Savri", href: "/about" },
  { label: "Our Story", href: "/founder" },
  { label: "The Founder", href: "/founder" },
]

const serviceLinks = [
  { label: "Daily Meals", href: "/daily-meals" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Party Bookings", href: "/party" },
  { label: "Pricing", href: "/pricing" },
  { label: "Savri AI", href: "/ai" },
  { label: "Careers", href: "/careers" },
  { label: "Book Now", href: BOOKING_URL },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: INSTAGRAM_URL, handle: "@savri.in" },
  { icon: Twitter, label: "Twitter", href: TWITTER_URL, handle: "@savri_in" },
  { icon: Linkedin, label: "LinkedIn", href: LINKEDIN_URL, handle: "Savri" },
  { icon: Mail, label: "Email", href: `mailto:${CONTACT_EMAIL}`, handle: CONTACT_EMAIL },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-transparent">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_1fr] md:gap-8 items-start">
          <div>
            <Image src="/savri-logo-light.png" alt="Savri" width={200} height={80} className="h-24 w-auto -my-7 mb-1" />
            <p className="text-cream/60 text-sm">Your chef. Your kitchen. Your table.</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-cream/48">
              Premium private dining for Indian homes. Freshly cooked, clearly priced, and designed to feel effortless.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">About</p>
            <nav className="mt-4 flex flex-col gap-3">
              {aboutLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-cream/70 hover:text-cream text-sm transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">Service</p>
            <nav className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-cream/70 hover:text-cream text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">Legal</p>
            <nav className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-cream/70 hover:text-cream text-sm transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">Social</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-cream/10 text-cream/60 hover:text-cream hover:border-cream/30 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <div className="flex flex-col items-start gap-1 md:items-end">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-cream text-sm transition-colors"
              >
                @savri.in
              </a>
              <a 
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-cream/60 hover:text-cream text-sm transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">&copy; 2026 Savri. Made with care in India.</p>
          <p className="text-cream/40 text-sm">Premium home dining, built around trust.</p>
        </div>
      </div>
    </footer>
  )
}
