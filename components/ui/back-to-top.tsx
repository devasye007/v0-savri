"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", check, { passive: true })
    return () => window.removeEventListener("scroll", check)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-dark-light border border-cream/10 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-dark transition-all duration-200"
    >
      <ArrowUp className="w-5 h-5 text-rose" strokeWidth={2} />
    </button>
  )
}
