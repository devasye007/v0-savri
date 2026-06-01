"use client"

import { useInView } from "@/hooks/use-in-view"
import { useCounter } from "@/hooks/use-counter"

export function TrustBar() {
  const { ref, isInView } = useInView({ threshold: 0.5, triggerOnce: true })
  const count = useCounter({ to: 15, duration: 1200, isActive: isInView })

  return (
    <div
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      className="w-full bg-[#1A1A1A] py-3 px-6 text-center border-t border-cream/5"
    >
      <p className="text-[#F5F0E8] text-xs font-medium tracking-wide">
        <span className="text-rose font-semibold">{count}+</span> verified chefs onboarded
        {" · "}Bookings Open
      </p>
    </div>
  )
}
