"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { PartyPopper } from "lucide-react"

export function FloatingPartyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <Link
      href="/party"
      aria-label="Book a party — private chef from ₹5,999"
      className={`party-float-btn fixed bottom-6 right-6 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B5636A] px-5 py-3 text-sm font-semibold text-[#F5F0EB] transition-all duration-500 hover:bg-[#9A5158] sm:bottom-8 sm:right-8 ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <PartyPopper className="h-4 w-4" />
      <span>Book Party · ₹5,999</span>
    </Link>
  )
}
