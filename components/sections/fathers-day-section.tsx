"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Cake, ChevronDown, UtensilsCrossed } from "lucide-react"

import { ScrollReveal } from "@/components/ScrollReveal"
import { BOOKING_URL } from "@/lib/site-data"
import { FATHERS_DAY_VALIDITY_COPY, isFathersDayOfferActive } from "@/lib/fathers-day"

const INTIMATE_IMG =
  "https://images.unsplash.com/photo-1556910103925-9bb44e98f9ed?w=1920&q=80"
// Indian family / celebration cake scene for the "larger celebration?" panel.
const CELEBRATION_IMG =
  "https://images.unsplash.com/photo-1530103862676-de2f6b6da465?w=1920&q=80"

const FD_WHATSAPP =
  "https://wa.me/919310590819?text=Hi%20Savri%2C%20I%27d%20like%20to%20book%20for%20Father%27s%20Day."

export function FathersDaySection() {
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    setMounted(true)
    setActive(isFathersDayOfferActive())
  }, [])

  if (!mounted || !active) return null

  return (
    <div id="fathers-day" className="relative z-[2]">
      {/* — Section 1: intimate dining — */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        <div className="savri-ambient-zoom absolute inset-0">
          <Image
            src={INTIMATE_IMG}
            alt="A warm, intimate father-and-son dinner at home"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.72)_18%,rgba(26,26,26,0.6)_50%,rgba(26,26,26,0.88)_84%,#1A1A1A_100%)]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <ScrollReveal direction="up" delay={0}>
            <p
              className="uppercase text-[#C9A84C]"
              style={{ fontSize: "clamp(11px, 1.2vw, 16px)", letterSpacing: "0.5em" }}
            >
              June 21 · 2026
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120}>
            <h2
              className="mt-5 font-serif font-semibold leading-[0.86] text-[#F5F0E8]"
              style={{ fontSize: "clamp(64px, 11vw, 200px)" }}
            >
              FATHER&apos;S DAY
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={240}>
            <div className="mt-3 flex items-center justify-center gap-3 md:gap-5">
              <span
                className="font-serif font-semibold text-[#B5636A]"
                style={{ fontSize: "clamp(22px, 3vw, 52px)", letterSpacing: "0.04em" }}
              >
                with
              </span>
              <Image
                src="/savri-logo-light.png"
                alt="Savri"
                width={200}
                height={80}
                className="h-20 w-auto -my-6 md:h-28 md:-my-9"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={420}>
            <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
              <div className="flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B5636A]/95 ring-1 ring-[#F5F0E8]/15">
                  <UtensilsCrossed className="h-7 w-7 text-[#F5F0E8]" aria-hidden="true" />
                </span>
                <p className="mt-4 text-[11px] uppercase tracking-[0.32em] text-[#F5F0E8]/70">
                  Starting at just
                </p>
                <p className="mt-1 font-serif font-semibold leading-none text-[#B5636A]"
                  style={{ fontSize: "clamp(34px, 4vw, 56px)" }}>
                  ₹549
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B5636A]/95 ring-1 ring-[#F5F0E8]/15">
                  <Cake className="h-7 w-7 text-[#F5F0E8]" aria-hidden="true" />
                </span>
                <p className="mt-4 text-[11px] uppercase tracking-[0.32em] text-[#F5F0E8]/70">
                  1 Complimentary dessert with
                </p>
                <p className="mt-1 font-serif font-semibold leading-none text-[#B5636A]"
                  style={{ fontSize: "clamp(22px, 2.4vw, 36px)" }}>
                  your meal
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          direction="fade"
          delay={600}
          className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-2 text-[#F5F0E8]/75"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] md:text-[11px]">
            Scroll for more
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </ScrollReveal>
      </section>

      {/* — Section 2: larger celebration — */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        <div className="savri-ambient-zoom absolute inset-0">
          <Image
            src={CELEBRATION_IMG}
            alt="A celebration cake on a warmly lit family table"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.7)_18%,rgba(26,26,26,0.58)_50%,rgba(26,26,26,0.9)_84%,#1A1A1A_100%)]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <ScrollReveal direction="up" delay={0}>
            <p
              className="uppercase text-[#B5636A]"
              style={{ fontSize: "clamp(11px, 1.2vw, 16px)", letterSpacing: "0.5em" }}
            >
              Planning a
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={140}>
            <h2
              className="mt-5 font-serif font-semibold leading-[0.86] text-[#F5F0E8]"
              style={{ fontSize: "clamp(60px, 10vw, 188px)" }}
            >
              larger celebration?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={320}>
            <div className="mt-10 max-w-2xl space-y-2 text-[#F5F0E8]/90">
              <p className="text-base md:text-lg">For parties of 15 or more,</p>
              <p className="text-lg font-semibold md:text-xl">
                enjoy a complimentary celebration cake
              </p>
              <p className="text-base md:text-lg">
                on bills above{" "}
                <span className="font-semibold text-[#B5636A]">₹5,999</span>.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={500}>
            <a
              href={FD_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-center justify-center gap-2 bg-[#B5636A] px-9 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-base"
            >
              Book for Father&apos;s Day
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={650}>
            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-[#F5F0E8]/55">
              {FATHERS_DAY_VALIDITY_COPY}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
