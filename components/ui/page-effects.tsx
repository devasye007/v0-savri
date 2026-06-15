"use client"

import { useEffect } from "react"

import { useScrollReveal } from "@/hooks/useScrollReveal"

/**
 * Global page chrome — mounts once in <body> from the root layout.
 * - Auto-applies the scroll-reveal IntersectionObserver to every page
 *   via `useScrollReveal` (re-scans on route changes).
 * - Renders a CSS-only scroll progress bar at the top of the viewport.
 * - Renders a desktop-only cursor glow that follows the mouse via
 *   CSS custom properties (no DOM mutations per frame).
 */
export function PageEffects() {
  useScrollReveal()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(max-width: 1024px), (hover: none)").matches) return

    const root = document.documentElement
    const onMove = (event: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`)
      root.style.setProperty("--cursor-y", `${event.clientY}px`)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <>
      <div className="savri-scroll-progress" aria-hidden="true" />
      <div className="savri-cursor-glow" aria-hidden="true" />
    </>
  )
}
