"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseScroll3DOptions {
  threshold?: number
  once?: boolean
  rootMargin?: string
}

export function useScroll3D<T extends HTMLElement = HTMLElement>({
  threshold = 0.2,
  once = true,
  rootMargin = "0px 0px -50px 0px"
}: UseScroll3DOptions = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(element)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  // Calculate scroll progress for parallax-style 3D effects
  const handleScroll = useCallback(() => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementTop = rect.top
    const elementHeight = rect.height
    
    // Calculate how far through the viewport the element has scrolled
    const progress = Math.max(0, Math.min(1, 
      (windowHeight - elementTop) / (windowHeight + elementHeight)
    ))
    
    setScrollProgress(progress)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { ref, isVisible, scrollProgress }
}

// Hook for gyroscope-based tilt on mobile devices
export function useGyroscopeTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Check if device orientation is supported
    if (typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
      setIsSupported(true)

      const handleOrientation = (event: DeviceOrientationEvent) => {
        const beta = event.beta ?? 0 // X-axis rotation (-180 to 180)
        const gamma = event.gamma ?? 0 // Y-axis rotation (-90 to 90)

        // Normalize to smaller values for subtle effect
        const normalizedX = Math.max(-15, Math.min(15, gamma / 3))
        const normalizedY = Math.max(-15, Math.min(15, (beta - 45) / 3))

        setTilt({ x: normalizedX, y: normalizedY })
      }

      // Request permission on iOS 13+
      if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
        // Will need user interaction to request permission
        setIsSupported(false) // Will be enabled via button click
      } else {
        window.addEventListener("deviceorientation", handleOrientation)
        return () => window.removeEventListener("deviceorientation", handleOrientation)
      }
    }
  }, [])

  const requestPermission = async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission()
        if (permission === "granted") {
          setIsSupported(true)
          window.addEventListener("deviceorientation", (event: DeviceOrientationEvent) => {
            const beta = event.beta ?? 0
            const gamma = event.gamma ?? 0
            const normalizedX = Math.max(-15, Math.min(15, gamma / 3))
            const normalizedY = Math.max(-15, Math.min(15, (beta - 45) / 3))
            setTilt({ x: normalizedX, y: normalizedY })
          })
        }
      } catch (error) {
        console.error("Gyroscope permission denied")
      }
    }
  }

  return { tilt, isSupported, requestPermission }
}
