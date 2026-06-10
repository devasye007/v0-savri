"use client"

import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

export function ComingSoonSection() {
  return (
    <section
      id="surprise"
      className="relative isolate overflow-hidden bg-[#1A1A1A] py-20 text-white md:py-28"
    >
      <Image
        src="/images/hero-food.jpg"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover opacity-15"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,26,0.92)_0%,rgba(26,26,26,0.78)_55%,rgba(26,26,26,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(181,99,106,0.22),transparent_45%),radial-gradient(circle_at_bottom,rgba(201,168,76,0.14),transparent_55%)]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B5636A] backdrop-blur">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-[#B5636A] savri-coming-soon-glow"
            />
            Something New
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <h2 className="mt-7 font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            A Surprise Is On The Way
          </h2>
        </Reveal>

        <Reveal delayMs={200}>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/72 md:text-lg">
            Something new is coming to Savri. Stay tuned.
          </p>
        </Reveal>

        <Reveal delayMs={280} className="mt-12 w-full md:mt-16">
          <div
            aria-hidden="true"
            className="savri-coming-soon-drift mx-auto flex flex-col items-center gap-1 md:gap-2"
          >
            <span
              className="block font-serif uppercase leading-[0.95] tracking-[0.04em] text-white/30"
              style={{ fontWeight: 300, fontSize: "clamp(2.25rem, 11vw, 6.5rem)" }}
            >
              Coming Soon
            </span>
            <span
              className="block font-serif uppercase leading-[0.95] tracking-[0.04em] text-white"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2.75rem, 13vw, 7.5rem)",
                textShadow: "0 0 28px rgba(181, 99, 106, 0.45)",
              }}
            >
              Coming Soon
            </span>
            <span
              className="block font-serif uppercase leading-[0.95] tracking-[0.04em] text-white/30"
              style={{ fontWeight: 300, fontSize: "clamp(2.25rem, 11vw, 6.5rem)" }}
            >
              Coming Soon
            </span>
          </div>
        </Reveal>

        <Reveal delayMs={360}>
          <div className="mt-12 flex flex-col items-center gap-3 md:mt-16">
            <span className="h-px w-12 bg-[#B5636A]" aria-hidden="true" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">
              Savri · Premium Home Dining
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
