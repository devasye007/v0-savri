"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { BOOKING_URL, navLinks } from "@/lib/site-data"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    return pathname === href
  }

  // Every Savri page is now dark — make the navbar fully transparent at top
  // on all routes so it reads as seamless with the hero. Becomes the dark
  // backdrop-blur header only after the user scrolls past 10px.
  const transparent = !scrolled

  return (
    <header
      className={`fixed top-11 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent backdrop-blur-0"
          : scrolled
            ? "border-b border-white/10 bg-black/82 backdrop-blur-xl"
            : "border-b border-transparent bg-dark/72 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="hover:opacity-90 transition-opacity duration-200">
          <Image
            src="/savri-logo-light.png"
            alt="Savri"
            width={200}
            height={80}
            className="h-30 w-auto -my-10"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                isActive(link.href) ? "text-rose" : "text-cream/72 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/careers"
            className={`text-sm transition-colors duration-200 ${
              isActive("/careers") ? "text-rose" : "text-cream/72 hover:text-cream"
            }`}
          >
            Careers
          </Link>
          <a href="/ai#notify" className="text-sm text-cream/72 transition-colors duration-200 hover:text-cream">
            Join Waitlist
          </a>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="text-sm text-cream/68 transition hover:text-cream">
            Contact
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-rose-dark"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-black/92 px-4 py-4 lg:hidden">
          <div className="container mx-auto grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-3 py-3 text-sm ${
                  isActive(link.href) ? "bg-rose/14 text-rose" : "text-cream/80 hover:bg-white/6"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/careers"
              className={`rounded-2xl px-3 py-3 text-sm ${
                isActive("/careers") ? "bg-rose/14 text-rose" : "text-cream/80 hover:bg-white/6"
              }`}
            >
              Careers
            </Link>
            <a href="/ai#notify" className="rounded-2xl px-3 py-3 text-sm text-cream/80 hover:bg-white/6">
              Join Waitlist
            </a>
            <Link href="/contact" className="rounded-2xl px-3 py-3 text-sm text-cream/80 hover:bg-white/6">
              Contact
            </Link>
            <Link href="/about" className="rounded-2xl px-3 py-3 text-sm text-cream/80 hover:bg-white/6">
              About
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-2xl bg-rose px-5 py-3 text-sm font-semibold text-cream"
            >
              Book Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
