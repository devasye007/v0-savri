"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const SESSION_KEY = "savri_launch_popup_seen"
const INTRO_DELAY_MS = 2800
const AUTO_DISMISS_MS = 1800
const FADE_DURATION_MS = 500

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

  const goToSurprise = () => {
    dismiss()
    setTimeout(() => {
      const el = document.getElementById("surprise")
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }, FADE_DURATION_MS + 50)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="A surprise is cooking at Savri"
      className={`fixed inset-0 z-[10001] flex flex-col items-center justify-center overflow-hidden bg-[#0E0E0E] px-6 text-center transition-opacity duration-500 ease-in-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/images/hero-food.jpg"
        alt=""
        fill
        aria-hidden="true"
        priority
        sizes="100vw"
        className="object-cover opacity-30 savri-popup-zoom"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.92)_0%,rgba(14,14,14,0.7)_45%,rgba(14,14,14,0.95)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(181,99,106,0.28),transparent_50%),radial-gradient(circle_at_bottom,rgba(201,168,76,0.12),transparent_55%)]" />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center savri-popup-rise">
        <p
          className="font-serif text-2xl font-semibold tracking-wide text-white/95 md:text-3xl"
          style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif' }}
        >
          Savri
        </p>

        <div className="mt-8 flex flex-col items-center">
          <span
            aria-hidden="true"
            className="text-4xl md:text-5xl savri-popup-eyes"
          >
            👀
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold uppercase leading-[1.08] tracking-tight text-white md:text-5xl">
            Can You Guess
            <br />
            What&apos;s Cooking at Savri?
          </h2>
        </div>

        <p className="mt-6 max-w-md text-sm leading-6 text-white/75 md:text-base">
          <span className="font-semibold uppercase tracking-[0.18em] text-[#B5636A]">Hint:</span>{" "}
          Your favourite home dining experience… just got bigger.
        </p>

        <button
          type="button"
          onClick={goToSurprise}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white backdrop-blur transition hover:bg-white/12"
        >
          Answer
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-lg text-white/55 md:bottom-10 md:text-xl"
        style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif' }}
      >
        Savri
      </p>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Skip surprise announcement"
        className="absolute right-5 top-5 inline-flex h-9 items-center rounded-full border border-white/15 bg-white/5 px-3 text-xs text-white/70 transition hover:bg-white/12 md:right-8 md:top-8"
      >
        Skip
      </button>
    </div>
  )
}
