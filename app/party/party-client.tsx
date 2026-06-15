"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion"
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  IndianRupee,
  MapPin,
  Salad,
  Sparkles,
  UtensilsCrossed,
  Wheat,
} from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { BackToTop } from "@/components/ui/back-to-top"

import { CursorGlow } from "./cursor-glow"
import { LenisProvider } from "./lenis-provider"

const WHATSAPP_URL =
  "https://wa.me/919310590819?text=Hi%20Savri%2C%20I%20want%20to%20book%20a%20party%20for%20%E2%82%B95%2C999."
const SITE_URL = "https://savri.co.in"

/* ============================================================
 * Hooks
 * ============================================================ */

function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)")
    const onChange = () => setCoarse(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return coarse
}

function useIsMobile() {
  const [mob, setMob] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)")
    const onChange = () => setMob(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return mob
}

function useCountUp(target: number, durationMs: number, run: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3) // easeOut cubic
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, durationMs])
  return value
}

/* ============================================================
 * Motion variants
 * ============================================================ */

const sectionContainer: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/* ============================================================
 * Scroll progress bar (framer-motion useScroll)
 * ============================================================ */

function PageProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.4 })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[80] h-[3px] bg-[#B5636A]"
    />
  )
}

/* ============================================================
 * Hero
 * ============================================================ */

type Particle = { left: string; top: string; size: number; delay: string; duration: string }

function HeroParticles() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 22 }).map(() => {
        const size = 3 + Math.random() * 5
        return {
          left: `${Math.random() * 100}%`,
          top: `${60 + Math.random() * 40}%`,
          size,
          delay: `${Math.random() * 6}s`,
          duration: `${5 + Math.random() * 5}s`,
        }
      }),
    [],
  )

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="party-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  // Parallax: image moves DOWN inside its container at half the scroll speed
  // → from viewer's POV the image rises at 0.5× of the page scroll = depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 0.95])

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden pt-28"
    >
      {/* Parallax background */}
      <motion.div
        aria-hidden
        style={{ y, scale: bgScale }}
        className="absolute inset-[-6%] -z-10 will-change-transform"
      >
        <Image src="/images/hero-food.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/72 to-[#0A0A0A]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_55%)]"
      />

      <HeroParticles />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 text-center sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 14, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.42em" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="text-[11px] font-medium uppercase text-[#D4AF37] sm:text-xs"
        >
          Introducing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 56, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="mt-6 font-serif text-[14vw] italic leading-[0.95] text-[#F5F0EB] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          <span className="party-shimmer-text">party bookings</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
          className="mt-8 text-sm uppercase tracking-[0.42em] text-[#F5F0EB]/65"
        >
          At just
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 1.4, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: [0.34, 1.56, 0.64, 1], delay: 1.55 }}
          className="mt-3 font-sans text-[12vw] font-black leading-none text-[#F5F0EB] sm:text-7xl md:text-8xl"
        >
          ₹5,999
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 2.05 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="immersive-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#F5F0EB] shadow-[0_18px_45px_rgba(181,99,106,0.45)] hover:bg-[#9A5158]"
          >
            Book Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#whats-included"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D4AF37]/45 px-8 py-3.5 text-sm font-medium text-[#F5F0EB]/85 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            See what's included
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#whats-included"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="party-scroll-bounce absolute bottom-8 left-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[#F5F0EB]/80 backdrop-blur"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  )
}

/* ============================================================
 * Section 2 — What You Get (image zoom on view)
 * ============================================================ */

type IncludedItem = {
  count: string
  title: string
  blurb: string
  Icon: typeof UtensilsCrossed
  img: string
}

function IncludedCard({ item, index }: { item: IncludedItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group"
    >
      <div className="relative rounded-[1.75rem] border border-[#D4AF37]/22 bg-[#141414] shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
          <motion.div
            initial={{ scale: 1 }}
            animate={inView ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-[#D4AF37]/25" />

          <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-5">
            <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/45 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37] backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
              Included
            </div>
            <div className="rounded-full border border-white/15 bg-black/40 p-2 text-[#D4AF37] backdrop-blur">
              <item.Icon className="h-4 w-4" />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-serif text-5xl italic leading-none text-[#D4AF37]">{item.count}</p>
            <h3 className="mt-2 font-serif text-2xl font-medium text-[#F5F0EB]">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#F5F0EB]/65">{item.blurb}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ============================================================
 * Section 3 — Pricing with 3D tilt + animated counter
 * ============================================================ */

type PriceCardProps = {
  variant: "left" | "right"
  tagLabel: string
  total: number
  breakdown?: string
  subline: string
  list: string[]
  accent: "rose" | "gold"
  badge?: string
}

function PriceCounter({ target, run }: { target: number; run: boolean }) {
  const v = useCountUp(target, 1500, run)
  return (
    <span className="tabular-nums">
      {v.toLocaleString("en-IN")}
    </span>
  )
}

function TiltPricingCard({ variant, tagLabel, total, breakdown, subline, list, accent, badge }: PriceCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapperRef, { once: true, margin: "-15% 0px" })
  const isCoarse = useIsCoarsePointer()

  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mvY, [-0.5, 0.5], [10, -10]), { stiffness: 220, damping: 22, mass: 0.6 })
  const rotateY = useSpring(useTransform(mvX, [-0.5, 0.5], [-10, 10]), { stiffness: 220, damping: 22, mass: 0.6 })

  const shadowOffX = useTransform(mvX, [-0.5, 0.5], [22, -22])
  const shadowOffY = useTransform(mvY, [-0.5, 0.5], [-12, 36])
  const boxShadow = useMotionTemplate`0px ${shadowOffY}px 70px rgba(181,99,106,0.32), ${shadowOffX}px 18px 80px rgba(181,99,106,0.18), 0 30px 90px rgba(0,0,0,0.45)`

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isCoarse) return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mvX.set(px)
    mvY.set(py)
  }

  const onLeave = () => {
    mvX.set(0)
    mvY.set(0)
  }

  const accentColor = accent === "rose" ? "#B5636A" : "#D4AF37"

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, x: variant === "left" ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : undefined}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={
          isCoarse
            ? undefined
            : {
                rotateX,
                rotateY,
                transformPerspective: 1000,
                transformStyle: "preserve-3d",
                boxShadow,
              }
        }
        className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#141414] p-8 will-change-transform sm:p-10"
      >
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ background: accentColor }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: accentColor }}
        />

        <div className="relative flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ borderColor: `${accentColor}66`, color: accentColor }}
          >
            <MapPin className="h-3.5 w-3.5" />
            {tagLabel}
          </span>
          {badge ? (
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#F5F0EB]/45">
              {badge}
            </span>
          ) : null}
        </div>

        <div className="relative mt-8 flex items-baseline gap-1" style={{ transform: "translateZ(20px)" }}>
          <IndianRupee className="h-7 w-7 text-[#F5F0EB]/60" />
          <span className="font-serif text-6xl font-medium leading-none text-[#F5F0EB] sm:text-7xl">
            <PriceCounter target={total} run={inView} />
          </span>
        </div>

        {breakdown ? (
          <p className="mt-2 text-xs text-[#F5F0EB]/55">{breakdown}</p>
        ) : (
          <p className="mt-2 text-xs text-[#F5F0EB]/55">One-time party fee · all-in</p>
        )}
        <p className="mt-5 text-sm text-[#F5F0EB]/75">{subline}</p>

        <div className="relative mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <ul className="relative mt-8 space-y-3">
          {list.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.06 }}
              className="flex items-start gap-3 text-sm text-[#F5F0EB]/85"
            >
              <span
                className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${accentColor}22`, color: accentColor }}
              >
                <Sparkles className="h-3 w-3" />
              </span>
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="immersive-button mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-[#F5F0EB] transition"
          style={{ backgroundColor: accentColor }}
        >
          Book this plan
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  )
}

/* ============================================================
 * Section 4 — Terms accordion
 * ============================================================ */

type TermItem = { title: string; body: string }

function AccordionItem({ item, index, defaultOpen = false }: { item: TermItem; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <motion.div variants={fadeUp} className="group">
      <div
        className={`overflow-hidden rounded-2xl border bg-[#141414]/80 backdrop-blur-sm transition-colors duration-300 ${
          open ? "border-[#D4AF37]/50" : "border-white/8 hover:border-[#D4AF37]/25"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="flex items-center gap-4">
            <span className="font-serif text-base italic text-[#D4AF37]">0{index + 1}</span>
            <span className="font-serif text-lg text-[#F5F0EB] sm:text-xl">{item.title}</span>
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] ${
              open ? "bg-[#D4AF37]/10" : ""
            }`}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pl-[5.25rem] text-sm leading-relaxed text-[#F5F0EB]/72 sm:text-[15px]">
                {item.body}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ============================================================
 * Section 5 — How It Works (horizontal scroll pinned)
 * ============================================================ */

type Step = { num: string; title: string; body: string }

function StepPanel({ step, total, index }: { step: Step; total: number; index: number }) {
  return (
    <div className="relative flex h-full w-screen shrink-0 items-center justify-center px-6">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.42em] text-[#D4AF37]">
          Step {index + 1} / {total}
        </div>
        <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/45 bg-[#0A0A0A] font-serif text-4xl italic text-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.25)]">
          {step.num}
        </div>
        <h3 className="mt-10 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl">
          {step.title}
        </h3>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#F5F0EB]/70">{step.body}</p>
      </div>
    </div>
  )
}

function HorizontalSteps({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  // 4 panels each 100vw → translate from 0 to -(n-1)/n * 100% = -75%
  const xPct = `-${((steps.length - 1) / steps.length) * 100}%`
  const x = useTransform(scrollYProgress, [0, 1], ["0%", xPct])
  const xSpring = useSpring(x, { stiffness: 180, damping: 30, mass: 0.4 })

  // Active step indicator — drives the dot pagination
  const [activeIdx, setActiveIdx] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.round(v * (steps.length - 1))
    setActiveIdx(Math.max(0, Math.min(steps.length - 1, i)))
  })

  if (isMobile) {
    return (
      <div className="mt-16 grid gap-12">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0A0A0A] font-serif text-xl italic text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              {s.num}
            </div>
            <h3 className="mt-5 font-serif text-2xl text-[#F5F0EB]">{s.title}</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#F5F0EB]/70">{s.body}</p>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div ref={containerRef} style={{ height: `${steps.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div ref={trackRef} style={{ x: xSpring }} className="flex h-full will-change-transform">
          {steps.map((s, i) => (
            <StepPanel key={s.num} step={s} total={steps.length} index={i} />
          ))}
        </motion.div>

        {/* Step indicator dots */}
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIdx === i ? "w-10 bg-[#D4AF37]" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============================================================
 * Main page component
 * ============================================================ */

export function PartyClient() {
  const [veilGone, setVeilGone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVeilGone(true), 1300)
    return () => clearTimeout(t)
  }, [])

  const included: IncludedItem[] = useMemo(
    () => [
      { count: "4", title: "Snacks", blurb: "Crisp, crowd-favourite starters to open the evening.", Icon: Sparkles, img: "/images/party-snacks.jpg" },
      { count: "4", title: "Main Course", blurb: "Slow-cooked curries and signature mains made fresh in your kitchen.", Icon: UtensilsCrossed, img: "/images/party-mains.jpg" },
      { count: "2+1", title: "Sides & Salad", blurb: "Hand-rolled breads or fragrant rice, plus a fresh salad.", Icon: Wheat, img: "/images/party-sides.jpg" },
      { count: "2", title: "Desserts", blurb: "Two indulgent finishers — because every party deserves a sweet ending.", Icon: Salad, img: "/images/party-desserts.jpg" },
    ],
    [],
  )

  const terms: TermItem[] = [
    { title: "Overtime Charges", body: "After your requested food-ready time, ₹999 per hour is added as a surge charge plus a small convenience fee. We'll always confirm before extending." },
    { title: "Live Kitchen", body: "Live kitchen setups — open cooking stations, live counters and theatre-style service — have separate charges. Drop us a message for a tailored quote." },
    { title: "Chef Completion", body: "As soon as the chef finishes cooking, they must immediately send photos of every dish for quality verification. It's how we keep standards consistent." },
    { title: "Late Evening Bookings", body: "Our last booking slot is 8:00 PM. If the session extends beyond 8:30 PM, the customer must arrange safe transportation for the chef." },
    { title: "Ingredient Delivery", body: "If you'd like ingredients delivered to your home before the session, delivery charges apply at real-time cart rates. We'll share a clear breakdown." },
    { title: "NCR Surcharge", body: "Bookings outside Delhi (Noida, Gurugram, Faridabad, Ghaziabad) include a flat ₹1,999 travel charge to cover the chef's commute and time." },
  ]

  const steps: Step[] = [
    { num: "01", title: "Reach Out", body: "Message us on WhatsApp or head to savri.co.in to start your booking." },
    { num: "02", title: "Confirm Menu", body: "Choose 4 snacks, 4 mains, 2 sides and 2 desserts from the curated party menu." },
    { num: "03", title: "Chef Arrives", body: "Your private chef shows up on time, sets up in your kitchen and cooks everything fresh." },
    { num: "04", title: "You Enjoy", body: "Food is ready at your requested time. The chef cleans up. You stay the host, not the cook." },
  ]

  const delhiList = [
    "4 Snacks",
    "4 Main Course",
    "2 Sides (Breads / Rice)",
    "2 Desserts + 1 Salad",
    "Private chef at your home",
    "Kitchen cleaned after",
  ]
  const ncrList = [
    "Everything in the Delhi plan",
    "Travel surcharge included",
    "Serves Noida, Gurugram, Faridabad, Ghaziabad",
    "Same chef, same standard",
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0EB]">
      {/* Smooth scrolling */}
      <LenisProvider />

      {/* Page entrance veil */}
      {!veilGone ? <div aria-hidden className="party-veil" /> : null}

      {/* Premium cursor glow (auto-disabled on touch) */}
      <CursorGlow />

      {/* Framer-motion scroll progress bar */}
      <PageProgress />

      <Navbar />

      {/* ============ SECTION 1 — HERO ============ */}
      <Hero />

      {/* ============ SECTION 2 — WHAT YOU GET ============ */}
      <motion.section
        id="whats-included"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-12%" }}
        variants={sectionContainer}
        className="relative overflow-hidden bg-[#0A0A0A] py-24 sm:py-32"
      >
        <div aria-hidden className="ambient-orb left-[-10%] top-1/4 h-[420px] w-[420px] bg-[#B5636A]/30" />
        <div aria-hidden className="ambient-orb right-[-12%] bottom-1/4 h-[380px] w-[380px] bg-[#D4AF37]/25" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
              The Menu
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              Everything Included.{" "}
              <em className="font-serif italic text-[#D4AF37]">Nothing Left Out.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#F5F0EB]/65">
              A full-spread party menu, cooked live at your home by a vetted private chef. Twelve dishes,
              one fixed price, zero stress.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {included.map((item, i) => (
              <IncludedCard key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ============ SECTION 3 — PRICING ============ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-12%" }}
        variants={sectionContainer}
        className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] py-24 sm:py-32"
      >
        <div aria-hidden className="absolute inset-0 ambient-grid opacity-40" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">Pricing</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              Simple,{" "}
              <em className="font-serif italic text-[#B5636A]">transparent</em> pricing
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
              One flat fee. No hidden markups. Pick your city — we'll handle the rest.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            <TiltPricingCard
              variant="left"
              tagLabel="Delhi"
              total={5999}
              subline="Everything you need to host."
              list={delhiList}
              accent="rose"
              badge="Most popular"
            />
            <TiltPricingCard
              variant="right"
              tagLabel="NCR"
              total={8398}
              breakdown="₹6,399 + ₹1,999 NCR travel"
              subline="Noida · Gurugram · Faridabad · Ghaziabad"
              list={ncrList}
              accent="gold"
            />
          </div>

          <motion.p variants={fadeUp} className="mt-10 text-center text-xs text-[#F5F0EB]/45">
            Inclusive of chef time, on-site cooking and post-cleanup. Ingredients & overtime billed separately.
          </motion.p>
        </div>
      </motion.section>

      {/* ============ SECTION 4 — TERMS ============ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-12%" }}
        variants={sectionContainer}
        className="relative overflow-hidden bg-[#0A0A0A] py-24 sm:py-32"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
              Fine Print
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              Good to know{" "}
              <em className="font-serif italic text-[#D4AF37]">before you book.</em>
            </h2>
          </motion.div>

          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {terms.map((item, i) => (
              <AccordionItem key={item.title} item={item} index={i} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ============ SECTION 5 — HOW IT WORKS (horizontal pinned scroll) ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] py-24 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">The Flow</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F5F0EB] sm:text-5xl md:text-6xl">
              How it <em className="font-serif italic text-[#B5636A]">works</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
              From the first message to the last bite — four clean steps.
            </p>
          </div>
        </motion.div>

        <HorizontalSteps steps={steps} />
      </section>

      {/* ============ SECTION 6 — FINAL CTA ============ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        variants={sectionContainer}
        className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#0A0A0A] py-24 sm:py-32"
      >
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image src="/images/chef-cooking.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/85 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(181,99,106,0.22),transparent_60%)]" />
        </div>

        <div className="container mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.p variants={fadeUp} className="text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            Your Party, Sorted
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="party-final-glow mt-6 font-serif text-5xl leading-[1.02] text-[#F5F0EB] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Ready to host{" "}
            <em className="font-serif italic text-[#D4AF37]">without the stress?</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#F5F0EB]/65">
            Tell us your date. We'll send the chef, the menu, and the magic.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="immersive-button group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#B5636A] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#F5F0EB] shadow-[0_18px_45px_rgba(181,99,106,0.5)] hover:bg-[#9A5158]"
            >
              Book on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={SITE_URL}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D4AF37]/50 px-8 py-3.5 text-sm font-medium text-[#F5F0EB]/85 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto mt-20 flex flex-col items-center gap-3">
            <Image src="/savri-logo-light.png" alt="Savri" width={160} height={64} className="h-14 w-auto opacity-90" />
            <p className="font-serif text-xl italic text-[#F5F0EB]/72">Private Chef, Ghar Pe.</p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <BackToTop />
    </div>
  )
}
