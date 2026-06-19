"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, type CSSProperties } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"

import { BOOKING_URL } from "@/lib/site-data"

const HERO_IMG = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80"
const PORTRAIT_IMG = "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1920&q=80"
const QUOTE_IMG = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80"
const CTA_IMG = "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

const timelineMilestones = [
  {
    label: "Final Year of College",
    copy: "The idea takes shape in a Chennai apartment.",
  },
  {
    label: "Graduation 2026",
    copy: "Moved back to Delhi. Went all in on Savri.",
  },
  {
    label: "March 2026",
    copy: "Product development begins. Every feature built in-house.",
  },
  {
    label: "May 2026",
    copy: "Chef pipeline starts. Personal cooking tests begin.",
  },
  {
    label: "June 2026",
    copy: "Delhi NCR launch. The Sunday problem gets solved.",
  },
]

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

export function FounderClient() {
  const quoteRef = useOnEnter<HTMLElement>(0.25)
  const timelineRef = useOnEnter<HTMLElement>(0.2)
  const ctaRef = useOnEnter<HTMLElement>(0.25)

  return (
    <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      {/* ─────────── 01 / HERO — massive founder name + headline on image bg ─────────── */}
      <section className="relative isolate h-[100svh] w-full overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="A Sunday kitchen scene"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.55)_14%,rgba(26,26,26,0.35)_46%,rgba(26,26,26,0.92)_88%,#1A1A1A_100%)]" />

        <div className="absolute left-6 top-32 z-10 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
          <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
          <ChevronRight className="mx-2 inline h-3 w-3" />
          <span className="text-[#C9A84C]">Our Story</span>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            01 — The Story
          </p>
          <h1 className="mt-10 flex flex-col items-center leading-[0.86] tracking-tight">
            <span
              className="block font-serif font-semibold text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
            >
              Built from a Sunday
            </span>
            <span
              className="block font-serif font-semibold text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
            >
              with no cook
            </span>
            <span
              className="block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(52px, 10vw, 200px)", lineHeight: 0.84 }}
            >
              and a dead Zomato feed.
            </span>
          </h1>
          <p className="mt-10 max-w-2xl font-serif italic text-xl text-[#F5F0E8]/72 md:text-2xl">
            The real story behind Savri.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[12px]">
            Delhi NCR · June 2026
          </span>
          <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
        </div>
      </section>

      {/* ─────────── 02 / THE PERSON — edge-faded image bleed ─────────── */}
      <section className="savri-bleed-wrap text-[#F5F0E8]">
        <div className="absolute inset-0 savri-bleed-img">
          <Image
            src={PORTRAIT_IMG}
            alt="A kitchen moment — hands at work"
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
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — The Person</p>
            <p
              className="mt-6 block font-serif font-semibold"
              style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
            >
              Who is
            </p>
            <p
              className="mt-1 block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(56px, 10vw, 200px)", lineHeight: 0.9 }}
            >
              Devasye.
            </p>
            <div className="mt-10 grid max-w-3xl gap-6 text-base leading-8 text-[#F5F0E8]/82 md:text-lg">
              <p>
                Devasye Sachdeva is a 22-year-old computer science student who specialised in AI and Machine Learning at SRM University, Chennai.
              </p>
              <p>
                He graduated recently — but Savri started before that. It started in his college apartment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── 03 / THE IDEA — sticky word-reveal moment ─────────── */}
      <section className="savri-words-wrap text-[#F5F0E8]">
        <div className="savri-words-pin">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — The Idea</p>
            <p
              className="mt-10 font-serif leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(34px, 5vw, 96px)" }}
            >
              <WordStream
                text="Picture a Sunday morning in a Chennai apartment shared by four college guys."
                startVh={60}
                endVh={150}
                className="block"
              />
              <WordStream
                text="The cook had taken the day off. Again."
                startVh={160}
                endVh={220}
                className="mt-[0.35em] block"
              />
              <WordStream
                text="Open Swiggy. Scroll for 20 minutes. Order something cold, overpriced, disappointing."
                startVh={230}
                endVh={310}
                className="mt-[0.35em] block"
              />
              <WordStream
                text="There was nothing in between."
                startVh={320}
                endVh={380}
                className="mt-[0.35em] block italic text-[#B5636A]"
              />
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── 04 / THE BUILD — cinematic full-height moment ─────────── */}
      <section className="relative z-[4] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1920&q=80"
            alt="Hands cooking — chef preparing a fresh meal"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.82)_18%,rgba(26,26,26,0.78)_50%,rgba(26,26,26,0.88)_82%,#1A1A1A_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-center px-6 py-32 md:px-16 md:py-48">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — The Build</p>
          <h2
            className="mt-10 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
            style={{ fontSize: "clamp(56px, 11vw, 220px)" }}
          >
            Built in final year.
          </h2>
          <h2
            className="font-serif font-semibold leading-[0.9] text-[#B5636A]"
            style={{ fontSize: "clamp(56px, 11vw, 220px)" }}
          >
            Launched in Delhi.
          </h2>

          <div className="mt-16 grid max-w-3xl gap-6 text-base leading-8 text-[#F5F0E8]/78 md:text-lg">
            <p>
              Devasye started building Savri in his final year — between classes, between exams, between everything that final year throws at you. He came back to Delhi after graduating and went all in.
            </p>
            <p>
              Finding & vetting the first wave of chefs across Delhi NCR. Running personal cooking tests before signing anyone. Building every part of the product himself. Preparing for a June 2026 launch.
            </p>
            <p className="font-serif italic text-[#F5F0E8]">
              No shortcuts on the chef quality. No shortcuts on the experience. Every booking should feel like someone genuinely cared about your evening.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── 05 / WHO THIS IS FOR — single massive line moment ─────────── */}
      <section className="relative z-[5] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(181,99,106,0.18)_0%,transparent_70%)]" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-center px-6 py-32 md:px-16 md:py-48">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — Who This Is For</p>
          <h2
            className="mt-10 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
            style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
          >
            Everyone who has been
          </h2>
          <h2
            className="font-serif font-semibold leading-[0.9] text-[#B5636A]"
            style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
          >
            in that apartment.
          </h2>

          <div className="mt-16 grid max-w-4xl gap-5 text-base leading-8 text-[#F5F0E8]/82 md:text-lg">
            <p>The flatmates who are tired of negotiating whose turn it is to cook.</p>
            <p>The family whose regular cook called in sick again.</p>
            <p>The working professional who gets home at 10pm and deserves a proper meal, not a sad delivery box.</p>
            <p>The couple who wants a real dinner at home without the stress of making it happen.</p>
            <p>The parents hosting family on Sunday who want to actually sit with their guests instead of being stuck in the kitchen.</p>
          </div>

          <p className="mt-14 max-w-3xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
            This is not a luxury product. This is the solution to a problem that millions of people in India face every single week.
          </p>
          <p
            className="mt-8 font-serif italic leading-[0.95] text-[#F5F0E8]"
            style={{ fontSize: "clamp(36px, 5.5vw, 96px)" }}
          >
            Savri just made it affordable.
          </p>
        </div>
      </section>

      {/* ─────────── 06 / THE JOURNEY — timeline row format (it IS a timeline) ─────────── */}
      <section
        ref={timelineRef}
        className="relative z-[6] w-full overflow-hidden py-32 md:py-48"
      >
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">06 — The Journey</p>
            <h2
              className="savri-from-left font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
            >
              How Savri came to be.
            </h2>
          </div>

          <div className="mt-24 md:mt-32">
            {timelineMilestones.map((milestone, i) => (
              <div
                key={milestone.label}
                className="savri-rise grid grid-cols-1 items-baseline gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.18fr_0.3fr_1fr] md:gap-12 md:py-18"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div
                  className="font-serif italic leading-none text-[#C9A84C]"
                  style={{ fontSize: "clamp(72px, 9vw, 180px)" }}
                >
                  {i + 1}
                </div>
                <h3
                  className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(24px, 2.6vw, 44px)" }}
                >
                  {milestone.label}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  {milestone.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 07 / BIG QUOTE MOMENT — 100svh quote on image bg ─────────── */}
      <section
        ref={quoteRef}
        className="relative z-[7] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
      >
        <Image
          src={QUOTE_IMG}
          alt="A fresh-cooked meal plated at home"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.75)_18%,rgba(26,26,26,0.78)_50%,rgba(26,26,26,0.88)_82%,#1A1A1A_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col justify-center px-6 py-32 md:px-16 md:py-48">
          <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">07 — A Note from Devasye</p>
          <blockquote className="savri-rise mt-12 space-y-8 border-l-2 border-[#B5636A] pl-8 md:pl-14" style={{ transitionDelay: "200ms" }}>
            <p
              className="font-serif italic leading-[1.06] text-[#F5F0E8]"
              style={{ fontSize: "clamp(36px, 5.5vw, 96px)" }}
            >
              &ldquo;I have lived this problem. My friends have lived this problem. Almost everyone I know in this country has lived this problem.
            </p>
            <p className="max-w-3xl text-lg leading-9 text-[#F5F0E8]/78 md:text-xl">
              A cook who disappears on Sunday. A kitchen that sits empty because nobody has the energy. A Zomato order that somehow costs ₹600 and tastes like nothing.
            </p>
            <p className="max-w-3xl text-lg leading-9 text-[#F5F0E8]/78 md:text-xl">
              I built Savri because I was genuinely tired of that being the only option.
            </p>
            <p className="max-w-3xl text-lg leading-9 text-[#F5F0E8]/78 md:text-xl">
              You deserve a proper meal at home. Freshly cooked. In your kitchen. By someone who knows what they are doing. For less than you spent on that last disappointing delivery.
            </p>
            <p
              className="font-serif italic leading-[1.1] text-[#B5636A]"
              style={{ fontSize: "clamp(28px, 4vw, 72px)" }}
            >
              That is Savri. I hope you feel the difference the first time you book.&rdquo;
            </p>
            <footer className="border-t border-[#F5F0E8]/15 pt-6">
              <p className="font-semibold text-[#F5F0E8]">— Devasye Sachdeva</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#B5636A]">
                Founder, Savri
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─────────── 08 / CINEMATIC FINAL CTA ─────────── */}
      <section
        ref={ctaRef}
        className="relative z-[8] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
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
          <h2
            className="savri-rise font-serif font-semibold leading-[0.85]"
            style={{ fontSize: "clamp(120px, 20vw, 400px)" }}
          >
            Ready?
          </h2>
          <p
            className="savri-rise mt-10 text-[#C9A84C]"
            style={{ fontSize: "clamp(20px, 3vw, 52px)", transitionDelay: "200ms" }}
          >
            Book your private chef.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="savri-rise mt-14 inline-flex items-center justify-center bg-[#B5636A] px-10 py-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-base"
            style={{ transitionDelay: "400ms" }}
          >
            Book on WhatsApp →
          </a>
          <Link
            href="/how-it-works"
            className="savri-rise mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.32em] text-[#F5F0E8]/70 hover:text-[#F5F0E8]"
            style={{ transitionDelay: "550ms" }}
          >
            How Savri works
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
