"use client"

import Image from "next/image"
import { type ReactNode } from "react"

type Props = {
  image: string
  imageAlt?: string
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: "center" | "left"
  /** Pass false to skip the dark gradient (useful for already-dark images) */
  withGradient?: boolean
  className?: string
}

/**
 * Reusable cinematic hero with sticky 100vh, scroll-driven zoom on the
 * background image, and fade/translate-out on the headline. Drops into
 * any page above the rest of its content.
 */
export function StickyHero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  align = "center",
  withGradient = true,
  className = "",
}: Props) {
  return (
    <div className={`savri-hero-wrap relative ${className}`}>
      <section className="savri-hero-pin relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        <div className="savri-hero-img absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {withGradient ? (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.55)_0%,rgba(10,10,10,0.3)_42%,rgba(10,10,10,0.85)_100%)]" />
        ) : null}

        <div
          className={`savri-hero-text relative z-10 flex h-full w-full flex-col px-6 md:px-16 ${
            align === "center"
              ? "items-center justify-center text-center"
              : "items-start justify-end pb-24 text-left"
          }`}
        >
          {eyebrow ? (
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[13px]">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className="font-serif italic leading-[0.88] text-[#F5F0E8]"
            style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-8 max-w-3xl text-base text-[#F5F0E8]/75 md:text-lg">{subtitle}</p>
          ) : null}
        </div>
      </section>
    </div>
  )
}
