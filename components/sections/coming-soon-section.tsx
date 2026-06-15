"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Reveal } from "@/components/ui/reveal"

export function ComingSoonSection() {
  return (
    <section
      id="party-teaser"
      className="relative isolate overflow-hidden bg-[#1A1A1A] py-24 text-white md:py-32"
    >
      <Image
        src="/images/party-mains.jpg"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,26,0.94)_0%,rgba(26,26,26,0.72)_45%,rgba(26,26,26,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(201,168,76,0.18),transparent_50%),radial-gradient(circle_at_70%_75%,rgba(181,99,106,0.22),transparent_55%)]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#C9A84C] backdrop-blur">
            <Sparkles className="h-3 w-3" />
            Introducing
          </p>
        </Reveal>

        <Reveal delayMs={140}>
          <h2 className="mt-8 font-serif text-5xl italic leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]">
            party bookings
          </h2>
        </Reveal>

        <Reveal delayMs={240}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/72 md:text-lg">
            A private chef at your home. Your menu. Your guest list. Starting at{" "}
            <span className="font-semibold text-white">₹5,999</span>.
          </p>
        </Reveal>

        <Reveal delayMs={340}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row md:mt-14">
            <Link
              href="/party"
              className="immersive-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_18px_45px_rgba(181,99,106,0.45)] hover:bg-[#9A5158]"
            >
              Explore Party Bookings
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={440}>
          <div className="mt-14 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55 md:mt-16">
            <span className="h-px w-10 bg-[#C9A84C]/60" aria-hidden="true" />
            12 Dishes · One Chef · Zero Stress
            <span className="h-px w-10 bg-[#C9A84C]/60" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
