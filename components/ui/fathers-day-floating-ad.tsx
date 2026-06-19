"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Gift, X } from "lucide-react"

import { isFathersDayOfferActive } from "@/lib/fathers-day"

const DISMISS_KEY = "fdAdDismissed"

export function FathersDayFloatingAd() {
  const [active, setActive] = useState(false)
  const [dismissed, setDismissed] = useState(true)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!isFathersDayOfferActive()) return
    let alreadyDismissed = false
    try {
      alreadyDismissed = sessionStorage.getItem(DISMISS_KEY) === "1"
    } catch {
      // sessionStorage unavailable — treat as not dismissed
    }
    setActive(true)
    setDismissed(alreadyDismissed)
    if (!alreadyDismissed) {
      const t = window.setTimeout(() => setShow(true), 1500)
      return () => window.clearTimeout(t)
    }
  }, [])

  const dismiss = () => {
    setShow(false)
    setDismissed(true)
    try {
      sessionStorage.setItem(DISMISS_KEY, "1")
    } catch {
      // ignore
    }
  }

  if (!active || dismissed) return null

  return (
    <div
      className={`fixed bottom-40 right-6 z-40 sm:bottom-44 sm:right-8 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      }`}
      role="complementary"
      aria-label="Father's Day offer"
    >
      <div className="relative w-[315px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-white/14 bg-[#1A1A1A]/95 shadow-[0_24px_60px_rgba(0,0,0,0.58)] backdrop-blur-md">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(181,99,106,0.32),transparent_60%)]"
        />
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss Father's Day offer"
          className="absolute right-2.5 top-2.5 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/60 transition hover:bg-white/15 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <Link
          href="/#fathers-day"
          className="relative z-[1] flex items-start gap-3.5 px-5 pb-5 pt-5 pr-11"
        >
          <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B5636A] text-white shadow-[0_12px_30px_rgba(181,99,106,0.4)]">
            <Gift className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.34em] text-[#C9A84C]">
              Father&apos;s Day
            </span>
            <span className="mt-1.5 font-serif text-[20px] font-semibold leading-[1.1] text-white">
              Free dessert + cake
            </span>
            <span className="mt-1.5 text-[12.5px] leading-snug text-white/70">
              On meals from <span className="font-semibold text-white">₹549</span> &amp; parties of 15+. Ends Jun 21.
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}
