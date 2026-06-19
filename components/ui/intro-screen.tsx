"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

import { isFathersDayOfferActive } from "@/lib/fathers-day"

const SESSION_KEY = "splashSeen"
const AUTO_DISMISS_MS = 5000
const FADE_MS = 450
const FD_AUTO_DISMISS_MS = 6500

const FD_WHATSAPP =
  "https://wa.me/919310590819?text=Hi%20Savri%2C%20I%27d%20like%20to%20book%20for%20Father%27s%20Day."

export function IntroScreen() {
  const [visible, setVisible] = useState(false)
  const [dismissing, setDismissing] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isFathersDay, setIsFathersDay] = useState(false)

  // First-paint gate: only show once per session, never if reduced-motion
  useEffect(() => {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      if (sessionStorage.getItem(SESSION_KEY)) return
      sessionStorage.setItem(SESSION_KEY, "1")
      setIsFathersDay(isFathersDayOfferActive())
      setVisible(true)
      requestAnimationFrame(() => setMounted(true))
    } catch {
      // browser APIs unavailable — skip splash
    }
  }, [])

  // Auto-dismiss after the variant's duration (FD splash holds a touch longer)
  useEffect(() => {
    if (!visible) return
    const duration = isFathersDay ? FD_AUTO_DISMISS_MS : AUTO_DISMISS_MS
    const t = setTimeout(() => setDismissing(true), duration)
    return () => clearTimeout(t)
  }, [visible, isFathersDay])

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
        width={240}
        height={96}
        priority
        className="relative z-10 mb-4 h-28 w-auto -my-7 sm:mb-6 sm:h-32 sm:-my-8"
        style={{ opacity: 0, animation: "splash-fade 0.6s ease 0.2s forwards" }}
      />

      {/* Headings — animated in sequence */}
      {isFathersDay ? (
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#C9A84C] sm:text-xs"
            style={{ opacity: 0, animation: "splash-fade 0.7s ease 0.6s forwards" }}
          >
            June 21 · 2026
          </p>

          <h2
            className="mt-6 font-serif font-semibold leading-[0.92] text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            style={{
              opacity: 0,
              animation:
                "splash-slide-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) 1.0s forwards",
            }}
          >
            Father&apos;s Day
          </h2>

          <p
            className="mt-3 font-serif font-semibold text-[#B5636A] text-2xl sm:text-3xl md:text-4xl"
            style={{ opacity: 0, animation: "splash-fade 0.6s ease 1.4s forwards" }}
          >
            with Savri
          </p>

          <div
            className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 sm:gap-8"
            style={{
              opacity: 0,
              animation:
                "splash-punch 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s forwards",
            }}
          >
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-5 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/55">
                Starting at just
              </p>
              <p className="mt-2 font-serif font-semibold leading-none text-[#B5636A] text-4xl sm:text-5xl">
                ₹549
              </p>
              <p className="mt-3 text-sm leading-6 text-white/75 sm:text-[15px]">
                + <span className="font-semibold text-white">1 complimentary dessert</span> with your meal
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-5 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/55">
                Parties of 15 or more
              </p>
              <p className="mt-2 font-serif font-semibold leading-none text-[#B5636A] text-4xl sm:text-5xl">
                ₹5,999
              </p>
              <p className="mt-3 text-sm leading-6 text-white/75 sm:text-[15px]">
                + <span className="font-semibold text-white">complimentary celebration cake</span> on bills above ₹5,999
              </p>
            </div>
          </div>

          <p
            className="mt-6 text-[11px] uppercase tracking-[0.32em] text-white/55"
            style={{ opacity: 0, animation: "splash-fade 0.6s ease 2.2s forwards" }}
          >
            Offer valid until June 21, 2026
          </p>
        </div>
      ) : (
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
            AT JUST ₹5,999
          </p>

          <p
            className="mt-6 text-sm text-white/70 md:text-base"
            style={{ opacity: 0, animation: "splash-fade 0.6s ease 2.0s forwards" }}
          >
            Private chef. Your home. Your party.
          </p>
        </div>
      )}

      {/* Buttons */}
      <div
        className="relative z-10 mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        style={{ opacity: 0, animation: "splash-fade 0.6s ease 2.4s forwards" }}
      >
        {isFathersDay ? (
          <a
            href={FD_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(181,99,106,0.45)] transition hover:bg-[#9A5158]"
          >
            Book Father&apos;s Day
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <Link
            href="/party"
            onClick={dismiss}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(181,99,106,0.45)] transition hover:bg-[#9A5158]"
          >
            Explore Party Bookings
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
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
