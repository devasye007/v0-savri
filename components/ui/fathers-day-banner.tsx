"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

import { isFathersDayOfferActive } from "@/lib/fathers-day"

export function FathersDayBanner() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(isFathersDayOfferActive())
  }, [])

  if (!active) return null

  return (
    <div
      role="region"
      aria-label="Father's Day with Savri"
      className="fixed left-0 right-0 top-0 z-[71] flex h-11 w-full items-center bg-[#B5636A] px-3 text-white"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-3 sm:gap-4">
        <p className="flex items-center gap-1.5 truncate text-[11px] font-medium leading-tight text-white/95 md:text-[13px]">
          <span aria-hidden="true">🎁</span>
          <span className="hidden sm:inline">
            Father&apos;s Day with Savri —{" "}
            <span className="font-semibold text-white">1 complimentary dessert</span> with every booking. Offer ends June 21.
          </span>
          <span className="sm:hidden">
            Father&apos;s Day —{" "}
            <span className="font-semibold text-white">free dessert</span>. Ends Jun 21.
          </span>
        </p>

        <Link
          href="#fathers-day"
          className="inline-flex h-7 shrink-0 items-center gap-1 rounded-full bg-[#1A1A1A] px-3 text-[11px] font-semibold leading-none text-white transition hover:bg-black md:h-7 md:px-3.5 md:text-[12px]"
        >
          See Offer
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}
