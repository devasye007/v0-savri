"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorGlow() {
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.6 })

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mqHover = window.matchMedia("(hover: hover) and (pointer: fine)")
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    setEnabled(mqHover.matches && !mqReduce.matches)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[400px] w-[400px] rounded-full mix-blend-screen"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(181,99,106,0.18) 0%, rgba(181,99,106,0.08) 35%, rgba(181,99,106,0) 70%)",
          filter: "blur(2px)",
        }}
      />
    </motion.div>
  )
}
