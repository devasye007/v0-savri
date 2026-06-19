"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, type CSSProperties } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"

import { aboutValues, BOOKING_URL } from "@/lib/site-data"

const HERO_IMG = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
const MISSION_IMG = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const VALUES_IMG = "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1920&q=80"
const CTA_IMG = "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

function useOnEnter<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const root = entry.target as HTMLElement
            root.classList.add("is-on")
            root
              .querySelectorAll<HTMLElement>(
                ".savri-rise, .savri-from-left, .savri-from-right",
              )
              .forEach((el) => el.classList.add("is-on"))
            io.unobserve(root)
          }
        })
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [threshold])
  return ref
}

function WordStream({
  text,
  startVh,
  endVh,
  windowVh = 28,
  className = "",
}: {
  text: string
  startVh: number
  endVh: number
  windowVh?: number
  className?: string
}) {
  const words = text.split(" ")
  const span = endVh - startVh
  const step = words.length > 1 ? span / (words.length - 1) : 0
  return (
    <span className={className}>
      {words.map((w, i) => {
        const ws = Math.round(startVh + i * step)
        const we = Math.round(ws + windowVh)
        return (
          <span
            key={i}
            className="savri-word"
            style={{ "--ws": ws, "--we": we } as CSSProperties}
          >
            {w}
          </span>
        )
      })}
    </span>
  )
}

export function AboutClient() {
  const ctaRef = useOnEnter<HTMLElement>(0.25)
  const valuesRef = useOnEnter<HTMLElement>(0.2)

  return (
    <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      {/* ─────────── 01 / HERO — massive stacked serif on image bg ─────────── */}
      <section className="relative isolate h-[100svh] w-full overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="A warm private dining moment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.55)_14%,rgba(26,26,26,0.35)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

        <div className="absolute left-6 top-32 z-10 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
          <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
          <ChevronRight className="mx-2 inline h-3 w-3" />
          <span className="text-[#C9A84C]">About</span>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            01 — About Savri
          </p>
          <h1 className="mt-10 flex flex-col items-center leading-[0.86] tracking-tight">
            <span
              className="block font-serif font-semibold text-[#F5F0E8]"
              style={{ fontSize: "clamp(64px, 11vw, 200px)" }}
            >
              Premium private dining
            </span>
            <span
              className="block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(72px, 13vw, 240px)", lineHeight: 0.82 }}
            >
              for real homes.
            </span>
          </h1>
        </div>

        <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[12px]">
            Delhi NCR
          </span>
          <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
        </div>
      </section>

      {/* ─────────── 02 / OUR STORY — sticky word-reveal moment ─────────── */}
      <section className="savri-words-wrap text-[#F5F0E8]">
        <div className="savri-words-pin">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Our Story</p>
            <p
              className="mt-10 font-serif leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(34px, 5vw, 96px)" }}
            >
              <WordStream
                text="Savri started with a simple observation: people want better food at home, but most options are either impersonal delivery or high-friction event catering."
                startVh={60}
                endVh={200}
                className="block"
              />
              <WordStream
                text="We built something in between and better."
                startVh={210}
                endVh={290}
                className="mt-[0.35em] block italic text-[#B5636A]"
              />
              <WordStream
                text="Private chef experiences that feel accessible, dependable, and beautifully simple."
                startVh={300}
                endVh={380}
                className="mt-[0.35em] block"
              />
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── 03 / MISSION — edge-faded image bleed ─────────── */}
      <section className="savri-bleed-wrap text-[#F5F0E8]">
        <div className="absolute inset-0 savri-bleed-img">
          <Image
            src={MISSION_IMG}
            alt="A home dinner spread laid out warmly"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="savri-bleed-overlay absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.4)_18%,rgba(26,26,26,0.22)_50%,rgba(26,26,26,0.8)_82%,#1A1A1A_100%)]" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-20 md:pb-24">
          <div className="savri-bleed-text max-w-[1300px]">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — Mission</p>
            <p
              className="mt-6 block font-serif font-semibold"
              style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
            >
              Premium private dining
            </p>
            <p
              className="mt-1 block font-serif font-semibold"
              style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
            >
              for everyone
            </p>
            <p
              className="mt-1 block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(44px, 7.5vw, 136px)", lineHeight: 1 }}
            >
              who values it.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/82 md:text-lg">
              Our goal is not to imitate restaurant dining at home. It is to create something more intimate: fresh food, your kitchen, your pace, and a chef service you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── 04 / VALUES — cinematic full-height moment with massive text + image bg ─────────── */}
      <section
        ref={valuesRef}
        className="relative z-[4] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
      >
        <div className="absolute inset-0">
          <Image
            src={VALUES_IMG}
            alt="An Indian thali plated with care"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.82)_18%,rgba(26,26,26,0.78)_50%,rgba(26,26,26,0.88)_82%,#1A1A1A_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-6 py-32 md:px-16 md:py-48">
          <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — Values</p>
          <h2
            className="savri-from-left mt-10 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
            style={{ fontSize: "clamp(56px, 11vw, 220px)" }}
          >
            What we
          </h2>
          <h2
            className="savri-from-right font-serif font-semibold leading-[0.9] text-[#B5636A]"
            style={{ fontSize: "clamp(56px, 11vw, 220px)", transitionDelay: "150ms" }}
          >
            believe in.
          </h2>

          <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-3 md:gap-10">
            {aboutValues.map((value, i) => (
              <div
                key={value.title}
                className="savri-rise flex flex-col gap-5"
                style={{ transitionDelay: `${250 + i * 150}ms` }}
              >
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <value.icon className="h-9 w-9 text-[#B5636A]" />
                <h3
                  className="font-serif font-semibold leading-[0.95] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(32px, 4.4vw, 72px)" }}
                >
                  {value.title}
                </h3>
                <p className="text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  {value.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 05 / CINEMATIC FINAL CTA ─────────── */}
      <section
        ref={ctaRef}
        className="relative z-[5] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
      >
        <Image
          src={CTA_IMG}
          alt="Warm home dining moment"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.6)_18%,rgba(26,26,26,0.75)_50%,rgba(26,26,26,0.92)_82%,#1A1A1A_100%)]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            05 — Explore
          </p>
          <h2
            className="savri-rise mt-6 font-serif font-semibold leading-[0.85]"
            style={{ fontSize: "clamp(96px, 17vw, 340px)", transitionDelay: "150ms" }}
          >
            Keep reading
          </h2>
          <p
            className="savri-rise mt-10 text-[#C9A84C]"
            style={{ fontSize: "clamp(18px, 2.4vw, 40px)", transitionDelay: "300ms" }}
          >
            The founder story · How Savri works
          </p>
          <div
            className="savri-rise mt-14 flex flex-col gap-4 sm:flex-row"
            style={{ transitionDelay: "450ms" }}
          >
            <Link
              href="/founder"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#B5636A] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-[15px]"
            >
              The founder story
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#F5F0E8]/30 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F0E8] transition-colors duration-300 hover:border-[#F5F0E8]/60 md:text-[15px]"
            >
              How Savri works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="savri-rise mt-10 text-[12px] uppercase tracking-[0.32em] text-[#F5F0E8]/70 underline-offset-4 hover:text-[#F5F0E8] hover:underline"
            style={{ transitionDelay: "600ms" }}
          >
            Or book on WhatsApp →
          </a>
        </div>
      </section>
    </main>
  )
}
