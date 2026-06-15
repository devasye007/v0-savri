"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const SESSION_KEY = "splashSeen"
const AUTO_DISMISS_MS = 5000
const FADE_MS = 450

export function IntroScreen() {
  const [visible, setVisible] = useState(false)
  const [dismissing, setDismissing] = useState(false)
  const [mounted, setMounted] = useState(false)

  // First-paint gate: only show once per session, never if reduced-motion
  useEffect(() => {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      if (sessionStorage.getItem(SESSION_KEY)) return
      sessionStorage.setItem(SESSION_KEY, "1")
      setVisible(true)
      requestAnimationFrame(() => setMounted(true))
    } catch {
      // browser APIs unavailable — skip splash
    }
  }, [])

  // Auto-dismiss after 5s
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setDismissing(true), AUTO_DISMISS_MS)
    return () => clearTimeout(t)
  }, [visible])

  // Unmount after fade-out
  useEffect(() => {
    if (!dismissing) return
    const t = setTimeout(() => setVisible(false), FADE_MS)
    return () => clearTimeout(t)
  }, [dismissing])

  const dismiss = () => setDismissing(true)

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Introducing Savri Party Bookings"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#1A1A1A] px-6 py-10"
      style={{
        opacity: dismissing ? 0 : mounted ? 1 : 0,
        transition: `opacity ${FADE_MS}ms ease`,
      }}
    >
      {/* Subtle food image overlay */}
      <Image
        src="/images/party-mains.jpg"
        alt=""
        aria-hidden
        fill
        priority
        className="pointer-events-none object-cover opacity-15"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/65 to-[#1A1A1A]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,168,76,0.16),transparent_55%)]"
      />

      {/* Skip — always visible from the start */}
      <button
        type="button"
        onClick={dismiss}
        aria-label="Skip introduction"
        className="absolute right-5 top-5 z-10 inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/75 transition hover:border-white/40 hover:text-white sm:right-6 sm:top-6"
      >
        Skip →
      </button>

      {/* Savri logo at top */}
      <Image
        src="/savri-logo-light.png"
        alt="Savri"
        width={140}
        height={56}
        priority
        className="relative z-10 mb-10 h-11 w-auto sm:mb-12 sm:h-12"
        style={{ opacity: 0, animation: "splash-fade 0.6s ease 0.2s forwards" }}
      />

      {/* Headings — animated in sequence */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#C9A84C] sm:text-xs"
          style={{ opacity: 0, animation: "splash-fade 0.7s ease 0.6s forwards" }}
        >
          Introducing
        </p>

        <h2
          className="mt-6 font-serif text-5xl italic leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          style={{
            opacity: 0,
            animation:
              "splash-slide-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) 1.0s forwards",
          }}
        >
          party bookings
        </h2>

        <p
          className="mt-8 font-sans text-3xl font-black leading-none text-white sm:text-4xl md:text-5xl"
          style={{
            opacity: 0,
            animation:
              "splash-punch 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) 1.5s forwards",
          }}
        >
          AT JUST ₹6,399
        </p>

        <p
          className="mt-6 text-sm text-white/70 md:text-base"
          style={{ opacity: 0, animation: "splash-fade 0.6s ease 2.0s forwards" }}
        >
          Private chef. Your home. Your party.
        </p>
      </div>

      {/* Buttons */}
      <div
        className="relative z-10 mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        style={{ opacity: 0, animation: "splash-fade 0.6s ease 2.4s forwards" }}
      >
        <Link
          href="/party"
          onClick={dismiss}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(181,99,106,0.45)] transition hover:bg-[#9A5158]"
        >
          Explore Party Bookings
          <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white/85 transition hover:border-white/55 hover:text-white"
        >
          Skip
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
