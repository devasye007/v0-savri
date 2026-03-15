"use client"

import { useRef, useState, useCallback } from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  tiltAmount?: number
}

export function TiltCard({ children, className = "", tiltAmount = 10 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const calculateTilt = useCallback((clientX: number, clientY: number) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const posX = clientX - centerX
    const posY = clientY - centerY

    const rotateX = (posY / (rect.height / 2)) * -tiltAmount
    const rotateY = (posX / (rect.width / 2)) * tiltAmount

    // Calculate glare position
    const glareX = ((clientX - rect.left) / rect.width) * 100
    const glareY = ((clientY - rect.top) / rect.height) * 100

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    setGlare({ x: glareX, y: glareY, opacity: 0.15 })
  }, [tiltAmount])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    calculateTilt(e.clientX, e.clientY)
  }

  // Touch support for mobile
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0]
      calculateTilt(touch.clientX, touch.clientY)
    }
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0]
      calculateTilt(touch.clientX, touch.clientY)
    }
  }

  const resetTilt = () => {
    setTransform("")
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: transform ? "none" : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetTilt}
    >
      {children}
      {/* Glare effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
        }}
      />
    </div>
  )
}
