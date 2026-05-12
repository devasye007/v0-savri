"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  // Track scroll for slim border + bg transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Track active section on main page only
  useEffect(() => {
    if (pathname !== "/") return

    const sections = ["waitlist", "faq"]
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4, rootMargin: "-40% 0px -40% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/careers") return pathname === "/careers"
    if (href === "#waitlist") return activeSection === "waitlist"
    return false
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-black/80 border-b border-white/10"
          : "bg-dark/80 border-b border-transparent"
      }`}
    >
      <Link href="/" className="hover:opacity-90 transition-opacity duration-200">
        <Image
          src="/savri-logo-light.png"
          alt="Savri"
          width={120}
          height={40}
          className="h-10 w-auto"
          priority
        />
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/careers"
          className={`nav-link-underline text-sm transition-colors duration-200 pb-0.5 ${
            isActive("/careers") ? "text-rose active" : "text-cream/70 hover:text-cream"
          }`}
        >
          Careers
        </Link>

        <a
          href={pathname === "/" ? "#waitlist" : "/#waitlist"}
          className={`nav-link-underline text-sm transition-colors duration-200 pb-0.5 ${
            isActive("#waitlist") ? "text-rose active" : "text-cream/70 hover:text-cream"
          }`}
        >
          Join Waitlist
        </a>

        <a
          href="https://forms.gle/yp8yC2JTLmj9nQt7A"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link-underline text-cream/70 hover:text-cream text-sm transition-colors duration-200 pb-0.5"
        >
          Join as Chef
        </a>
      </div>
    </nav>
  )
}
