"use client"

import { useState, useEffect, useRef } from "react"

export function IntroAnimation() {
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if already played this session
    const played = sessionStorage.getItem("savri_intro_played")
    if (played) {
      setIsPlaying(false)
    }
    setMounted(true)
  }, [])

  // Fallback timeout - dismiss after 5 seconds max
  useEffect(() => {
    if (!mounted || !isPlaying) return
    
    const fallback = setTimeout(() => {
      sessionStorage.setItem("savri_intro_played", "true")
      setIsPlaying(false)
    }, 5000)
    
    return () => clearTimeout(fallback)
  }, [mounted, isPlaying])

  const handleVideoEnd = () => {
    sessionStorage.setItem("savri_intro_played", "true")
    setIsPlaying(false)
  }

  // Don't render anything until mounted to avoid hydration mismatch
  // Then don't render if not playing
  if (!mounted || !isPlaying) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#F5F0EB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        ref={videoRef}
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
        <source src="/videos/logo-animation.mov" type="video/quicktime" />
        <source src="/videos/logo-animation.mov" type="video/mp4" />
      </video>
    </div>
  )
}
