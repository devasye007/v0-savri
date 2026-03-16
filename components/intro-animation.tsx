"use client"

import { useEffect, useState } from "react"

export function IntroAnimation() {
  const [show, setShow] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Check if already played this session
    const played = sessionStorage.getItem("savri_intro_played")
    if (!played) {
      setShow(true)
    }
  }, [])

  const dismiss = () => {
    // Start fade out
    setFading(true)
    // After fade completes remove overlay
    setTimeout(() => {
      setShow(false)
      sessionStorage.setItem("savri_intro_played", "true")
    }, 600)
  }

  const handleVideoEnd = () => {
    dismiss()
  }

  // Safety fallback - max 6 seconds
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(() => {
      dismiss()
    }, 6000)
    return () => clearTimeout(timer)
  }, [show])

  if (!show) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#F5F0EB",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        onError={dismiss}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      >
        <source src="/videos/logo-animation.mov" type="video/mp4" />
        <source src="/videos/logo-animation.mov" type="video/quicktime" />
      </video>
    </div>
  )
}
