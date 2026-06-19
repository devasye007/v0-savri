"use client"

import { useEffect } from "react"

import { useScrollReveal } from "@/hooks/useScrollReveal"

/** Wires magnetic-hover behaviour: elements matching MAGNETIC_SELECTOR
 *  drift toward the cursor while the pointer is over them, and spring
 *  back to centre when the pointer leaves. Desktop only. Tracks the
 *  currently-active element via a closure so we always reset cleanly. */
function useMagneticHover() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(max-width: 1024px), (hover: none)").matches) return

    const STRENGTH = 0.4 // 0.4 means ~40% of pixel offset from element centre — clearly visible
    const MAX = 60       // pixel cap so big buttons don't drift too far
    const MAGNETIC_SELECTOR =
      "[data-magnetic],.savri-ai-btn-primary,.savri-ai-btn-secondary,.immersive-button"

    let active: HTMLElement | null = null

    const reset = (node: HTMLElement | null) => {
      if (!node) return
      node.style.transform = "translate3d(0, 0, 0)"
    }

    const onMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      const node = target?.closest<HTMLElement>(MAGNETIC_SELECTOR) ?? null

      if (node !== active) {
        reset(active)
        active = node
      }
      if (!node) return

      const rect = node.getBoundingClientRect()
      const dx = Math.max(-MAX, Math.min(MAX, (event.clientX - (rect.left + rect.width / 2)) * STRENGTH))
      const dy = Math.max(-MAX, Math.min(MAX, (event.clientY - (rect.top + rect.height / 2)) * STRENGTH))
      node.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`
    }

    document.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      document.removeEventListener("pointermove", onMove)
      reset(active)
    }
  }, [])
}

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
  useMagneticHover()

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
