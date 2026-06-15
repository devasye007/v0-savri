"use client"

import { useEffect, useState } from "react"

import { BOOKING_URL } from "@/lib/site-data"

/**
 * Floating WhatsApp CTA at the bottom-right of every page.
 * Round green button with the WhatsApp glyph + gentle pulse ring.
 * Slides up on first paint so it doesn't fight the hero animation.
 */
export function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 900)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Savri on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_38px_rgba(37,211,102,0.45)] transition-all duration-500 hover:scale-105 hover:bg-[#1FB256] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16 animate-pulse-whatsapp ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9.39 3 3.97 8.42 3.97 15.06c0 2.13.56 4.21 1.62 6.04L3 28l7.13-1.85a12.06 12.06 0 0 0 5.91 1.5h.01c6.65 0 12.07-5.42 12.07-12.06A12.04 12.04 0 0 0 16.04 3Zm0 21.86c-1.74 0-3.45-.47-4.94-1.34l-.35-.21-3.66.95.98-3.57-.23-.37a9.91 9.91 0 0 1-1.5-5.26C6.34 9.5 10.7 5.14 16.04 5.14a9.94 9.94 0 0 1 9.94 9.92c0 5.45-4.46 9.81-9.94 9.81Z" />
        <path d="M21.6 17.69c-.31-.15-1.83-.9-2.11-1-.28-.1-.49-.15-.7.15s-.81 1-.99 1.21c-.18.21-.36.23-.67.08-.31-.15-1.3-.48-2.49-1.53a9.33 9.33 0 0 1-1.72-2.13c-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.16-.18.21-.31.31-.51.1-.21.05-.39-.03-.54-.08-.15-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53l-.59-.01c-.21 0-.54.08-.83.39-.28.31-1.09 1.06-1.09 2.59 0 1.53 1.11 3.01 1.27 3.22.15.21 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z" />
      </svg>
    </a>
  )
}
