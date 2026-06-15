"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Mounts a single IntersectionObserver that watches every `.reveal-up`,
 * `.reveal-left`, `.reveal-right`, and `.reveal-fade` element on the page
 * (excluding ones already revealed) and adds `.visible` the first time
 * they cross the viewport threshold. Re-scans on route changes so freshly
 * mounted pages pick up automatically.
 */
export function useScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    let io: IntersectionObserver | null = null

    const scan = () => {
      const targets = document.querySelectorAll<HTMLElement>(
        ".reveal-up:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-fade:not(.visible)",
      )
      if (!targets.length) return
      io ??= new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible")
              io?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
      )
      targets.forEach((el) => io!.observe(el))
    }

    const raf = window.requestAnimationFrame(scan)

    return () => {
      window.cancelAnimationFrame(raf)
      io?.disconnect()
      io = null
    }
  }, [pathname])
}
