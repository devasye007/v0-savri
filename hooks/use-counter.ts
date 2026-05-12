"use client"

import { useEffect, useRef, useState } from "react"

interface UseCounterOptions {
  from?: number
  to: number
  duration?: number
  isActive?: boolean
}

export function useCounter({ from = 0, to, duration = 1500, isActive = false }: UseCounterOptions) {
  const [count, setCount] = useState(from)
  const started = useRef(false)

  useEffect(() => {
    if (!isActive || started.current) return
    started.current = true

    const startTime = Date.now()
    const range = to - from

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(from + range * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isActive, from, to, duration])

  return count
}
