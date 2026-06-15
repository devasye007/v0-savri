"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"

type Direction = "up" | "left" | "right" | "fade"

type Props = {
  children: ReactNode
  direction?: Direction
  delay?: number
  distance?: number
  className?: string
  /** HTML tag to render — defaults to <div>. */
  as?: "div" | "section" | "article" | "header" | "footer" | "span" | "p" | "h1" | "h2" | "h3" | "li"
  threshold?: number
}

/**
 * Reusable scroll-reveal wrapper. Adds the `.reveal-*` class and an
 * IntersectionObserver that adds `.visible` once the element crosses
 * the threshold. Animates opacity + transform only.
 */
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  distance,
  className = "",
  as = "div",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("visible")
            io.unobserve(node)
          }
        })
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [threshold])

  const style: CSSProperties = { transitionDelay: `${delay}ms` }
  if (distance !== undefined) {
    style.transitionProperty = "opacity, transform"
    style["--reveal-distance" as keyof CSSProperties] = `${distance}px`
  }

  const Tag = as as any
  return (
    <Tag ref={ref} className={`reveal-${direction} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
