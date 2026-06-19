"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

import { isFathersDayOfferActive } from "@/lib/fathers-day"

export function ComingSoonBanner() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setHidden(isFathersDayOfferActive())
  }, [])

  if (hidden) return null

  return (
    <div
      role="region"
      aria-label="Introducing Savri Party Bookings"
      className="fixed left-0 right-0 top-0 z-[70] flex h-11 w-full items-center bg-[#1A1A1A] px-3 text-white"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-3 sm:gap-4">
        <p className="flex items-center gap-1.5 truncate text-[11px] font-medium leading-tight text-white/95 md:text-[13px]">
          <span aria-hidden="true">🎉</span>
          <span className="hidden sm:inline">
            Introducing{" "}
            <span className="font-semibold text-white">Party Bookings</span> — Private chef for your next party at just{" "}
            <span className="font-semibold text-white">₹5,999</span>
          </span>
          <span className="sm:hidden">
            Party Bookings — chef at home from{" "}
            <span className="font-semibold text-white">₹5,999</span>
          </span>
        </p>

        <Link
          href="/party"
          className="inline-flex h-7 shrink-0 items-center gap-1 rounded-full bg-[#B5636A] px-3 text-[11px] font-semibold leading-none text-white transition hover:bg-[#9A5158] md:h-7 md:px-3.5 md:text-[12px]"
        >
          Book Now
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}
