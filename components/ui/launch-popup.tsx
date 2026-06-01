"use client"

import { useEffect, useState } from "react"
import { BOOKING_URL } from "@/lib/site-data"

const SESSION_KEY = "savri_launch_popup_seen"
const INTRO_DELAY_MS = 2800
const AUTO_DISMISS_MS = 3000
const FADE_DURATION_MS = 400

export function LaunchPopup() {
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
      sessionStorage.setItem(SESSION_KEY, "1")
    } catch {
      // sessionStorage unavailable — fall through and show anyway
    }

    const showTimer = setTimeout(() => setVisible(true), INTRO_DELAY_MS)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const fadeTimer = setTimeout(() => setFading(true), AUTO_DISMISS_MS)
    const hideTimer = setTimeout(
      () => setVisible(false),
      AUTO_DISMISS_MS + FADE_DURATION_MS,
    )
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [visible])

  const dismiss = () => {
    setFading(true)
    setTimeout(() => setVisible(false), FADE_DURATION_MS)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Savri bookings now open"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10001,
        backgroundColor: "#B5636A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
      }}
    >
      <p
        style={{
          color: "#F5F0E8",
          fontSize: "clamp(11px, 2.6vw, 13px)",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontWeight: 500,
          margin: 0,
        }}
      >
        Now Open
      </p>

      <h2
        style={{
          fontFamily:
            'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
          color: "#F5F0E8",
          fontSize: "clamp(40px, 9vw, 88px)",
          fontWeight: 700,
          lineHeight: 1.05,
          margin: "20px 0 0",
          maxWidth: "12ch",
        }}
      >
        We&rsquo;re taking
        <br />
        bookings.
      </h2>

      <p
        style={{
          color: "#F5F0E8",
          opacity: 0.8,
          fontSize: "clamp(13px, 3vw, 16px)",
          marginTop: 20,
          marginBottom: 0,
          letterSpacing: "0.02em",
        }}
      >
        Private Chef · Ghar Pe · From ₹549
      </p>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismiss}
        style={{
          marginTop: 36,
          display: "inline-block",
          padding: "16px 36px",
          backgroundColor: "#F5F0E8",
          color: "#B5636A",
          fontWeight: 700,
          fontSize: "clamp(15px, 3vw, 17px)",
          letterSpacing: "0.02em",
          textDecoration: "none",
          borderRadius: 999,
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"
        }}
      >
        Book on WhatsApp
      </a>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Skip launch announcement"
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#F5F0E8",
          opacity: 0.5,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: 13,
          letterSpacing: "0.05em",
          padding: 8,
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.85"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.5"
        }}
      >
        Skip →
      </button>
    </div>
  )
}
