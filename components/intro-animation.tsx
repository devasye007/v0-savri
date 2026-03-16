"use client"

import { useState, useEffect } from "react"

export function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const played = sessionStorage.getItem("savri_intro")
    if (!played) {
      setShowIntro(true)
    }
  }, [])

  // Fallback timeout - auto dismiss after 5 seconds max
  useEffect(() => {
    if (!showIntro) return
    const fallback = setTimeout(() => {
      sessionStorage.setItem("savri_intro", "true")
      setShowIntro(false)
    }, 5000)
    return () => clearTimeout(fallback)
  }, [showIntro])

  const handleVideoEnd = () => {
    sessionStorage.setItem("savri_intro", "true")
    setShowIntro(false)
  }

  if (!showIntro) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#F5F0EB",
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        onError={handleVideoEnd}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/logo-animation.mov" type="video/mp4" />
        <source src="/videos/logo-animation.mov" type="video/quicktime" />
      </video>
    </div>
  )
}
