"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

/**
 * Mounts Lenis on the document for premium smooth scrolling site-wide.
 * Static import (more reliable than dynamic in App Router). Adds the
 * `lenis lenis-smooth` classes to <html> so the required CSS reset
 * (in globals.css) kicks in. Skips entirely on prefers-reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    let raf = 0
    const tick = (time: number) => {
      lenis.raf(time)
      raf = window.requestAnimationFrame(tick)
    }
    raf = window.requestAnimationFrame(tick)

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return null
}
