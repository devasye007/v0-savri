"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function IntroScreen() {
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      if (!sessionStorage.getItem("savri_intro_seen")) {
        sessionStorage.setItem("savri_intro_seen", "1")
        setVisible(true)
      }
    } catch {
      // browser APIs unavailable — skip intro
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    // Stillness ends at 2.3 s; screen fully gone at 2.7 s
    const t1 = setTimeout(() => setFading(true), 2300)
    const t2 = setTimeout(() => setVisible(false), 2700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [visible])

  if (!visible) return null

  // Shared stroke props for every chef SVG path
  const stroke: React.CSSProperties = {
    strokeDasharray: 1,
    strokeDashoffset: 1,
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "#1A1A1A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        opacity: fading ? 0 : 1,
        transition: "opacity 0.4s ease-in-out",
        pointerEvents: "none",
      }}
    >
      {/* Warm radial glow — Rose at 4 % opacity, fades in with the logo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(600px, 100vw)",
          height: "min(600px, 100vw)",
          background:
            "radial-gradient(circle, rgba(181, 99, 106, 0.04) 0%, transparent 70%)",
          opacity: 0,
          animation: "savri-fade-in 1.8s ease-in-out 0s forwards",
          pointerEvents: "none",
        }}
      />

      {/*
        ─── CHEF SVG ILLUSTRATION ─────────────────────────────────────────────
        Side-profile chef at a stove: toque hat → face → body → arm → ladle →
        kadhai pot → two steam curves. Every path uses pathLength="1" so
        stroke-dashoffset animates from 1 (invisible) to 0 (fully drawn) without
        needing getTotalLength(). Paths are timed sequentially to simulate a
        single continuous line being sketched from the top of the hat downward.

        Coordinate map (viewBox 0 0 155 185):
          Hat body:  x 27–83, y  8–58
          Hat brim:  x 25–85, y 58–66
          Face:      x 73–87, y 64–100  (right-facing profile)
          Body:      x 18–82, y 66–152
          Arm:       x 80–114, y 128–152
          Ladle:     x 106–114, y 152–168
          Pot:       x 84–138, y 160–180
          Steam:     x 88–110, y 72–152
      */}
      <svg
        viewBox="0 0 155 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          width: "clamp(120px, 42vw, 160px)",
          height: "auto",
          marginBottom: 28,
          overflow: "visible",
        }}
      >
        {/* 1 — Toque (chef hat): brim → up left → over top → down right → close brim
             draws 0.00–0.45 s */}
        <path
          pathLength="1"
          d="M 25,66 L 25,58 L 27,58 L 27,18 Q 27,8 55,8 Q 83,8 83,18 L 83,58 L 85,58 L 85,66 Z"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ ...stroke, animation: "savri-draw 0.22s ease-in-out 0s forwards" }}
        />

        {/* 2 — Face profile: right-facing side view from hat brim to chin
             draws 0.40–0.65 s */}
        <path
          pathLength="1"
          d="M 83,64 C 87,70 88,78 86,86 C 84,92 80,96 75,100"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ ...stroke, animation: "savri-draw 0.13s ease-in-out 0.2s forwards" }}
        />

        {/* 3 — Body front (chest/stomach outline going down)
             draws 0.60–0.88 s */}
        <path
          pathLength="1"
          d="M 75,100 C 78,108 80,118 82,130 C 83,138 82,145 80,152"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ ...stroke, animation: "savri-draw 0.14s ease-in-out 0.3s forwards" }}
        />

        {/* 4 — Body back + torso bottom: left/back side and base of uniform
             draws 0.85–1.13 s */}
        <path
          pathLength="1"
          d="M 25,66 C 20,74 18,84 18,96 L 18,152 L 80,152"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ ...stroke, animation: "savri-draw 0.14s ease-in-out 0.42s forwards" }}
        />

        {/* 5 — Right arm extending toward the pot
             draws 1.10–1.35 s */}
        <path
          pathLength="1"
          d="M 80,130 C 90,136 102,142 114,150"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ ...stroke, animation: "savri-draw 0.12s ease-in-out 0.55s forwards" }}
        />

        {/* 6 — Ladle handle descending into pot
             draws 1.30–1.45 s */}
        <path
          pathLength="1"
          d="M 114,150 C 112,156 110,162 108,168"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ ...stroke, animation: "savri-draw 0.08s ease-in-out 0.64s forwards" }}
        />

        {/* 7 — Kadhai / pot body: rim arc → right side → bottom arc → left side
             draws 1.42–1.70 s */}
        <path
          pathLength="1"
          d="M 86,162 Q 112,154 138,162 L 138,176 Q 112,184 86,176 Z"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ ...stroke, animation: "savri-draw 0.14s ease-in-out 0.70s forwards" }}
        />

        {/* 8 — Left ear handle of pot
             draws 1.68–1.81 s */}
        <path
          pathLength="1"
          d="M 86,165 L 74,165 L 74,174 L 86,174"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ ...stroke, animation: "savri-draw 0.07s ease-in-out 0.83s forwards" }}
        />

        {/* 9 — Steam left: gentle S-curve rising from pot
             draws 1.78–1.91 s */}
        <path
          pathLength="1"
          d="M 96,152 C 90,138 102,126 96,112 C 90,100 98,90 93,76"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ ...stroke, animation: "savri-draw 0.07s ease-out 0.88s forwards" }}
        />

        {/* 10 — Steam right: second S-curve, offset from left
             draws 1.88–2.00 s */}
        <path
          pathLength="1"
          d="M 110,150 C 104,136 116,124 110,110 C 104,98 112,88 107,74"
          stroke="#B5636A"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ ...stroke, animation: "savri-draw 0.07s ease-out 0.93s forwards" }}
        />
      </svg>

      {/*
        ─── BRANDING BLOCK ────────────────────────────────────────────────────
        Logo → gold underline → tagline, all centred, generous spacing.
      */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "min(200px, 75vw)",
          position: "relative",
        }}
      >
        {/* Logo — identical source to navbar (/savri-logo-light.png)
            fades in + scales 0.92→1.0 from 1.2 s, then breathes until fade-out */}
        <Image
          src="/savri-logo-light.png"
          alt="Savri"
          width={200}
          height={80}
          priority
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            opacity: 0,
            animation: [
              "savri-logo-enter 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards",
              "savri-logo-breathe 1.2s ease-in-out 1.3s infinite",
            ].join(", "),
          }}
        />

        {/* Gold underline — draws left-to-right 2.2 s → 2.8 s */}
        <div
          style={{
            marginTop: 16,
            height: 1,
            width: "100%",
            backgroundColor: "#C9A84C",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            animation: "savri-line-expand 0.4s ease-in-out 1.3s forwards",
          }}
        />

        {/* Tagline — fades in to 85 % opacity 2.8 s → 3.3 s */}
        <p
          style={{
            fontFamily:
              'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
            fontSize: "clamp(16px, 4.5vw, 18px)",
            fontStyle: "italic",
            letterSpacing: "0.05em",
            color: "#F5F0E8",
            margin: 0,
            marginTop: 18,
            opacity: 0,
            whiteSpace: "nowrap",
            animation: "savri-fade-in-85 0.3s ease-in-out 1.7s forwards",
          }}
        >
          Private chef, ghar pe
        </p>
      </div>
    </div>
  )
}
