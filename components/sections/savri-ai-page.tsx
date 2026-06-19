"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ChefHat,
  Clock3,
  HeartHandshake,
  Lightbulb,
  PartyPopper,
  Salad,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react"

import { SavriAiNewsletter } from "@/components/sections/savri-ai-newsletter"

const EXPERIENCE_IMG = "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1920&q=80"
const PRIVACY_IMG = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const CTA_IMG = "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

const problemCards = [
  {
    icon: Clock3,
    title: "Generic Menus Waste Your Time",
    copy:
      "Every time you book a chef, you start from scratch. No memory of what you love, what you hate, or what gives you allergies.",
  },
  {
    icon: ChefHat,
    title: "Chefs Have No Insight",
    copy:
      "Chefs cook based on the moment, not on deep knowledge of you. They guess. You compromise.",
  },
  {
    icon: Lightbulb,
    title: "Know You. Serve You. Delight You.",
    copy:
      "Savri AI learns your taste over time, predicts what you'll love, and matches you with chefs who specialize in your preferences.",
  },
]

const featureCards = [
  {
    icon: Brain,
    title: "Taste Profile Learning",
    description:
      "After every meal, Savri AI learns your preferences. Loves spicy? Dislikes seafood? Allergic to nuts? The system remembers everything. Over time, it builds a complete taste map of you.",
    visual: "Spicy ↔ Mild · Sweet ↔ Savoury · Comfort ↔ Experimental",
    example: "Book 1st meal → Rate dishes → AI learns → 2nd meal is better matched",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80",
  },
  {
    icon: Sparkles,
    title: "Meal Prediction Engine",
    description:
      "Based on your history, mood, season, occasion, and past ratings, Savri AI predicts what you'll crave. It suggests menus before you even think to book.",
    visual: "Monsoon comfort · Sunday brunch · Late-night light meal",
    example: "It's monsoon season → AI suggests comfort food options → You pick favourite → Chef cooks",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80",
  },
  {
    icon: Target,
    title: "Perfect Chef Matching",
    description:
      "Instead of random assignment, Savri AI matches you with chefs who specialize in your preferences. Love Bengali food? Get the chef who already understands your taste.",
    visual: "Your profile + chef strengths + occasion needs = stronger match",
    example: "Loves vegetarian, spicy, Bengali → Matches Neha, Bengali vegetarian specialist",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80",
  },
  {
    icon: Salad,
    title: "Intelligent Dietary Tracking",
    description:
      "Tell Savri AI your dietary restrictions once. It auto-filters every chef recommendation and meal suggestion so safe options become the default.",
    visual: "No nuts · Vegetarian · Gluten-free · High-protein",
    example: "Shellfish allergy + Vegetarian → AI filters chefs and menus → Only safe options shown",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1600&q=80",
  },
  {
    icon: PartyPopper,
    title: "Occasion-Aware Recommendations",
    description:
      "Special dinner? Anniversary? Work celebration? Family gathering? Savri AI understands the moment and tailors the chef, menu, and tone around it.",
    visual: "Date night · Family lunch · Work dinner · Celebration spread",
    example: "You book for anniversary → AI suggests romantic cuisines, ambience tips, and special chefs",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
  },
  {
    icon: TrendingUp,
    title: "Gets Better With Time",
    description:
      "Every booking, every rating, and every preference teaches the system something useful. Savri AI adapts as your life and taste evolve.",
    visual: "Month 1 → Month 3 → Month 6",
    example: "Month 1: 70% accuracy → Month 3: 85% → Month 6: personal recommendations feel obvious",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1600&q=80",
  },
]

const steps = [
  {
    number: "1",
    title: "Tell Us Your Taste",
    copy:
      "During onboarding, answer quick questions about your taste preferences, dietary needs, and favourite cuisines. Just 2 minutes.",
  },
  {
    number: "2",
    title: "Book & Enjoy",
    copy:
      "Book a private chef like normal. Savri AI suggests the right chef and menu for you.",
  },
  {
    number: "3",
    title: "Rate Your Experience",
    copy:
      "After the meal, rate what you loved and what you did not. This teaches Savri AI about your real preferences.",
  },
  {
    number: "4",
    title: "AI Learns",
    copy:
      "Savri AI analyzes your ratings, your patterns, seasonal trends, and your evolving taste.",
  },
  {
    number: "5",
    title: "Next Meal Is Better",
    copy:
      "Your next booking gets smarter recommendations, better chef matching, and more personalized menus.",
  },
]

const stories = [
  {
    profile: "Rahul, Delhi, 35, Corporate Manager",
    challenge:
      "I love food but hate decisions. Between work and family, I don't have time to browse menus every time I book.",
    solution:
      "Savri AI knows Rahul loves North Indian, likes spicy, dislikes seafood, and prefers quick turnarounds. Every suggestion is tailored. He books in 30 seconds.",
    outcome: "Time saved + better meals + stress-free booking",
  },
  {
    profile: "Priya, Bangalore, 28, Fitness Coach",
    challenge:
      "I'm vegetarian, gluten-free, and need high protein. Most chefs don't understand. I spend an hour on each booking explaining restrictions.",
    solution:
      "Savri AI remembers her profile and only suggests vegetarian, high-protein, gluten-free menus. Chefs are already vetted for her needs.",
    outcome: "No explanations needed + safe meals + perfect matches",
  },
  {
    profile: "Amit & Neha, Mumbai, 32, Always Learning",
    challenge:
      "We love trying new cuisines but get overwhelmed by options. We want to be surprised but still trust the recommendation.",
    solution:
      "Based on past bookings, Savri AI knows they're adventurous but prefer certain spice levels. It suggests cuisines they've never tried but would likely love.",
    outcome: "Curated discovery + delightful surprises + perfect matches",
  },
  {
    profile: "Sharma Family, Delhi, Multi-generational",
    challenge:
      "Booking for family dinners is hard. Grandma likes simple, kids like fun, parents like elegant. No single menu works.",
    solution:
      "Savri AI understands family dynamics and suggests menus that work across ages. It finds chefs who specialize in multi-generational cooking.",
    outcome: "Everyone happy + family bonding + stress-free hosting",
  },
]

const roadmap = [
  {
    month: "June 2026",
    phase: "Savri Launches",
    items: ["Daily chef bookings live", "Manual chef selection"],
  },
  {
    month: "August 2026",
    phase: "Savri AI Phase 1",
    items: ["Taste profile collection", "Basic chef recommendations", "Dietary tracking"],
  },
  {
    month: "October 2026",
    phase: "Savri AI Phase 2",
    items: ["Meal prediction engine", "Smart chef matching", "Occasion-aware suggestions"],
  },
  {
    month: "December 2026",
    phase: "Savri AI Phase 3",
    items: ["Continuous learning loop", "Personalized menu suggestions", "Full AI experience"],
  },
]

const privacyPoints = [
  {
    title: "Your Data Is Safe",
    copy:
      "Savri AI learns about your taste. That data stays tied to your account, encrypted and private.",
  },
  {
    title: "You Control Everything",
    copy:
      "Pause learning, export your taste profile, or delete it entirely. You own your data.",
  },
  {
    title: "No Creepy Tracking",
    copy:
      "Savri AI does not track you outside the app. No browsing history. No location trail. Just your meal preferences, saved securely.",
  },
]

const faqs = [
  {
    question: "When will Savri AI be available?",
    answer:
      "Savri AI launches in phases starting August 2026. Early features include taste learning and chef recommendations. The full experience is planned for December 2026.",
  },
  {
    question: "Do I have to use Savri AI?",
    answer:
      "No. Savri AI is optional. You can keep booking chefs manually if that is how you prefer to use Savri.",
  },
  {
    question: "How does Savri AI learn my taste?",
    answer:
      "Through a quick onboarding quiz and by learning from the ratings you leave after each meal. The more context you share, the better the recommendations get.",
  },
  {
    question: "What if I change my taste?",
    answer:
      "Savri AI adapts over time. If your routine changes, your spice tolerance shifts, or your diet evolves, the recommendations change with you.",
  },
  {
    question: "Will Savri AI recommend expensive dishes?",
    answer:
      "No. Savri AI works within your budget and plan. Its job is to reduce decision fatigue, not push you into upgrades.",
  },
  {
    question: "Can I reset my taste profile?",
    answer:
      "Yes. You can clear your learning data and start fresh whenever you want.",
  },
  {
    question: "How accurate is Savri AI?",
    answer:
      "Our goal is 95%+ match accuracy by month 6. Actual accuracy improves as you rate meals and give feedback.",
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

function FeatureMoment({
  feature,
  index,
}: {
  feature: (typeof featureCards)[number]
  index: number
}) {
  const ref = useOnEnter<HTMLElement>(0.18)
  const reverse = index % 2 === 1
  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
    >
      <div className="absolute inset-0">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.85)_18%,rgba(26,26,26,0.8)_50%,rgba(26,26,26,0.92)_82%,#1A1A1A_100%)]" />

      <div
        className={`relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-center gap-12 px-6 py-28 md:px-16 md:py-40 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } md:items-center md:gap-20`}
      >
        <div className="flex-1">
          <div className="savri-rise flex items-center gap-5">
            <feature.icon className="h-9 w-9 text-[#C9A84C]" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
              Feature {String(index + 1).padStart(2, "0")} · Coming soon
            </span>
          </div>
          <h2
            className="savri-from-left mt-8 font-serif font-semibold leading-[0.92] text-[#F5F0E8]"
            style={{ fontSize: "clamp(48px, 8.5vw, 168px)" }}
          >
            {feature.title}
          </h2>
          <p
            className="savri-rise mt-10 max-w-2xl text-lg leading-9 text-[#F5F0E8]/85 md:text-xl"
            style={{ transitionDelay: "200ms" }}
          >
            {feature.description}
          </p>
          <div
            className="savri-rise mt-10 grid gap-6 md:grid-cols-2"
            style={{ transitionDelay: "350ms" }}
          >
            <div className="border-l border-[#F5F0E8]/18 pl-5">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#F5F0E8]/50">Visual</p>
              <p className="mt-2 text-base text-[#F5F0E8]/90">{feature.visual}</p>
            </div>
            <div className="flex gap-3 border-l border-[#B5636A]/55 pl-5">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#C9A84C]" />
              <p className="text-base leading-7 text-[#F5F0E8]/90">{feature.example}</p>
            </div>
          </div>
        </div>

        <div
          className="savri-rise relative aspect-[4/5] w-full max-w-md flex-1 overflow-hidden rounded-sm"
          style={{ transitionDelay: "150ms" }}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(26,26,26,0.7)_100%)]" />
        </div>
      </div>
    </section>
  )
}

/* ─────────── FUTURE-FACING HELPERS ─────────── */

/** Adds `.is-typed` on mount (delayed one frame so the keyframe's `from` state
 * applies before the animation runs). Falls back to fully visible if JS off. */
function useTypeOnEnter<T extends HTMLElement>(_threshold = 0.4) {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const raf = window.requestAnimationFrame(() => node.classList.add("is-typed"))
    return () => window.cancelAnimationFrame(raf)
  }, [])
  return ref
}

function TypedHeadline({
  children,
  className = "",
  style,
}: {
  children: string
  className?: string
  style?: CSSProperties
}) {
  const ref = useTypeOnEnter<HTMLSpanElement>(0.4)
  return (
    <span ref={ref} className={`savri-ai-typing ${className}`} style={style}>
      {children}
    </span>
  )
}

function LivingOrb() {
  return (
    <div className="savri-ai-orb-future" aria-hidden="true">
      <span className="savri-ai-orb-core" />
      <span className="savri-ai-orb-ring-1" />
      <span className="savri-ai-orb-ring-2" />
      <span className="savri-ai-orb-ring-3" />
    </div>
  )
}

function ParticleField({ count = 36 }: { count?: number }) {
  // Deterministic-ish seed via index so SSR/CSR match. Each particle has its own
  // drift vector and timing.
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const seed = (n: number) => ((Math.sin((i + 1) * n) + 1) / 2)
        return {
          id: i,
          left: seed(12.9898) * 100,
          top: 40 + seed(78.233) * 55,
          px: (seed(37.719) - 0.5) * 280,
          py: -80 - seed(63.171) * 220,
          delay: seed(91.421) * 8,
          duration: 6 + seed(45.123) * 5,
        }
      }),
    [count],
  )
  return (
    <div className="savri-ai-particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="savri-ai-particle"
          style={
            {
              left: `${p.left.toFixed(2)}%`,
              top: `${p.top.toFixed(2)}%`,
              "--px": `${p.px.toFixed(0)}px`,
              "--py": `${p.py.toFixed(0)}px`,
              animationDelay: `${p.delay.toFixed(2)}s`,
              animationDuration: `${p.duration.toFixed(2)}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

/** Animated number that counts from 0 → target over 1.4s when scrolled into view */
function StatCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1400,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const run = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.round(target * eased))
              if (t < 1) requestAnimationFrame(run)
            }
            requestAnimationFrame(run)
            io.unobserve(node)
          }
        })
      },
      { threshold: 0.5 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="savri-ai-stat">
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  )
}

/** Horizontal SVG pipeline — 5 nodes connected by a rail with a flowing data dot */
function PipelineDiagram({
  nodes,
}: {
  nodes: Array<{ number: string; label: string }>
}) {
  return (
    <div className="relative w-full" aria-hidden="true">
      {/* Rail with flowing dot */}
      <div className="absolute left-0 right-0 top-[34px] h-1px md:top-[36px]">
        <div className="savri-ai-pipeline-rail h-px w-full" />
      </div>
      {/* Nodes */}
      <div className="relative grid gap-8 sm:grid-cols-5 sm:gap-6">
        {nodes.map((n, i) => (
          <div key={n.number} className="flex flex-col items-center text-center">
            <div className="relative flex h-[72px] w-full items-center justify-center">
              <div
                className={
                  i === 0
                    ? "savri-ai-pipeline-node h-5 w-5"
                    : "savri-ai-pipeline-node savri-ai-pipeline-node-mute h-5 w-5"
                }
                style={i > 0 ? { animationDelay: `${i * 0.45}s` } : undefined}
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#C9A84C]">
              Node {String(i + 1).padStart(2, "0")}
            </p>
            <p
              className="mt-3 font-serif font-semibold leading-tight text-[#F5F0E8]"
              style={{ fontSize: "clamp(18px, 1.6vw, 26px)" }}
            >
              {n.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SavriAiPage() {
  const ctaRef = useOnEnter<HTMLElement>(0.25)
  const experienceRef = useOnEnter<HTMLElement>(0.2)
  const privacyRef = useOnEnter<HTMLElement>(0.2)
  const useCasesRef = useOnEnter<HTMLElement>(0.18)

  return (
    <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      {/* ─────────── 01 / HERO — kitchen silhouettes + steam + typed headline ─────────── */}
      <section className="savri-ai-dotgrid relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-16 text-center md:pt-32 md:pb-20">
        {/* Warm food-kitchen ambient: rose+gold radial wash + steam wisps
            drifting up the screen + faint kitchen cutlery silhouettes. No
            circles, no photos. */}
        <div className="savri-ai-foodbed" aria-hidden="true">
          <span className="warm-wash" />
          <span className="wisp wisp-1" />
          <span className="wisp wisp-2" />
          <span className="wisp wisp-3" />
          <span className="wisp wisp-4" />
          <span className="wisp wisp-5" />
          <span className="wisp wisp-6" />
        </div>

        {/* Kitchen cutlery silhouettes — faded SVG line art in the corners.
            Suggests "food" without using any photo or any circle. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 80 240"
          className="pointer-events-none absolute left-[6%] top-[14%] h-[36vh] w-auto opacity-[0.16] md:left-[8%]"
          fill="#C9A84C"
        >
          {/* Fork — 4 prongs + tine bar + handle */}
          <rect x="10" y="8"  width="6" height="62" rx="3" />
          <rect x="22" y="8"  width="6" height="62" rx="3" />
          <rect x="34" y="8"  width="6" height="62" rx="3" />
          <rect x="46" y="8"  width="6" height="62" rx="3" />
          <rect x="10" y="64" width="42" height="14" rx="7" />
          <rect x="27" y="74" width="8"  height="158" rx="4" />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 80 240"
          className="pointer-events-none absolute right-[6%] top-[16%] h-[34vh] w-auto opacity-[0.14] md:right-[8%]"
          fill="#B5636A"
        >
          {/* Spoon — bowl + handle */}
          <ellipse cx="40" cy="40" rx="28" ry="36" />
          <rect x="36" y="72" width="8" height="162" rx="4" />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 80 240"
          className="pointer-events-none absolute left-[12%] bottom-[10%] h-[28vh] w-auto opacity-[0.12]"
          fill="#C9A84C"
        >
          {/* Knife — angled blade + handle */}
          <path d="M40 4 L66 120 L36 132 Z" />
          <rect x="32" y="128" width="14" height="100" rx="5" />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 120 140"
          className="pointer-events-none absolute right-[10%] bottom-[12%] h-[22vh] w-auto opacity-[0.14]"
          fill="#B5636A"
        >
          {/* Herb leaf — almond shape + center vein */}
          <path d="M60 8 C20 28 20 100 60 132 C100 100 100 28 60 8 Z" />
          <rect x="58" y="8" width="4" height="124" fill="rgba(26,26,26,0.5)" />
          <path d="M60 35 L36 50 M60 35 L84 50 M60 60 L32 78 M60 60 L88 78 M60 88 L40 100 M60 88 L80 100"
            stroke="rgba(26,26,26,0.5)" strokeWidth="2" fill="none" />
        </svg>

        <ParticleField count={36} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

        <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
          <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
          <ChevronRight className="mx-2 inline h-3 w-3" />
          <span className="text-[#C9A84C]">Savri AI</span>
        </div>

        <p className="reveal-up relative z-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
          <Sparkles className="h-3 w-3" /> 01 — Coming Soon
        </p>
        <h1 className="reveal-up relative z-10 mt-10 flex flex-col items-center leading-[0.84] tracking-tight">
          <TypedHeadline
            className="block font-serif font-semibold text-[#F5F0E8]"
            style={{ fontSize: "clamp(32px, 5.5vw, 92px)" }}
          >
            Meet
          </TypedHeadline>
          <TypedHeadline
            className="block font-serif font-semibold text-[#B5636A]"
            style={{ fontSize: "clamp(40px, 7vw, 120px)", lineHeight: 0.92, animationDelay: "0.6s" }}
          >
            Savri AI.
          </TypedHeadline>
        </h1>
        <p className="reveal-up relative z-10 mt-10 max-w-xl text-xl text-[#F5F0E8]/82 md:text-2xl">
          The future of private chef experiences. Coming soon.
        </p>
        <p className="reveal-up relative z-10 mt-6 max-w-2xl text-base leading-8 text-[#F5F0E8]/68 md:text-lg">
          Savri AI learns your taste, predicts your cravings, and matches you with the perfect chef. Personalized dining, powered by intelligence.
        </p>
        <div className="reveal-up relative z-10 mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#notify"
            className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
          >
            Notify Me When It Launches
          </a>
          <a
            href="#roadmap"
            className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
          >
            See launch timeline
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
          <span>↓ Scroll</span>
        </div>
      </section>

      {/* ─────────── 02 / WHY AI — sticky word-reveal moment ─────────── */}
      <section className="relative w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-16">
          <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Why AI</p>
          <h2
            className="reveal-up mt-10 font-serif font-semibold leading-[1.04] tracking-tight text-[#F5F0E8]"
            style={{ fontSize: "clamp(32px, 4.5vw, 84px)" }}
          >
            Why Every Meal Should Be Personal
          </h2>
          <div className="mt-20 grid max-w-6xl gap-12 md:mt-28 md:grid-cols-3">
            {problemCards.map((card, i) => (
              <div
                key={card.title}
                className="reveal-up flex flex-col gap-5"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <card.icon className="h-7 w-7 shrink-0 text-[#B5636A]" />
                <h3 className="font-serif font-semibold leading-[1.15] text-[#F5F0E8] text-xl md:text-[26px]">
                  {card.title}
                </h3>
                <p className="text-sm leading-7 text-[#F5F0E8]/75 md:text-base">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 03 / EXPERIENCE — edge-faded image bleed ─────────── */}
      <section className="savri-bleed-wrap text-[#F5F0E8]">
        <div className="absolute inset-0 savri-bleed-img">
          <Image
            src={EXPERIENCE_IMG}
            alt="A chef's hand-rolled pasta on a kitchen surface"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="savri-bleed-overlay absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.4)_18%,rgba(26,26,26,0.22)_50%,rgba(26,26,26,0.8)_82%,#1A1A1A_100%)]" />
        {/* Mobile-only stronger bottom gradient — guarantees text reads at small sizes */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_40%,rgba(10,10,10,0.55)_65%,rgba(10,10,10,0.88)_100%)] md:hidden" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-20 md:pb-24">
          <div
            className="savri-bleed-text max-w-[1300px]"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
          >
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">03 — Experience</p>
            <p
              className="mt-6 block font-serif font-semibold text-[#F5F0E8]"
              style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
            >
              The Savri AI
            </p>
            <p
              className="mt-1 block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
            >
              Experience.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8] md:text-lg">
              From the first taste quiz to the next better meal, the flow stays simple. The intelligence works quietly in the background.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── 04 / FEATURES — each one a 100svh cinematic moment ─────────── */}
      <section className="relative z-[4] w-full">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-16 md:py-32">
          <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">04 — Features</p>
          <h2
            className="reveal-up mt-6 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
            style={{ fontSize: "clamp(44px, 8.5vw, 160px)" }}
          >
            What Savri AI
          </h2>
          <h2
            className="reveal-up font-serif font-semibold leading-[0.9] text-[#B5636A]"
            style={{ fontSize: "clamp(44px, 8.5vw, 160px)" }}
          >
            Can Do.
          </h2>
        </div>

        {featureCards.map((feature, i) => (
          <FeatureMoment key={feature.title} feature={feature} index={i} />
        ))}
      </section>

      {/* ─────────── 05 / EXPERIENCE FLOW — pipeline diagram + step cards ─────────── */}
      <section
        ref={experienceRef}
        className="savri-ai-dotgrid relative z-[5] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_40%,rgba(201,168,76,0.18)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-6 py-32 md:px-16 md:py-48">
          <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">05 — Flow</p>
          <h2
            className="savri-from-left mt-10 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
            style={{ fontSize: "clamp(44px, 8.5vw, 160px)" }}
          >
            Five steps.
          </h2>
          <h2
            className="savri-from-right font-serif font-semibold leading-[0.9] text-[#C9A84C]"
            style={{ fontSize: "clamp(44px, 8.5vw, 160px)", transitionDelay: "150ms" }}
          >
            One better meal.
          </h2>

          {/* Animated pipeline — visual representation of the AI flow */}
          <div className="savri-rise mt-24 md:mt-32" style={{ transitionDelay: "350ms" }}>
            <PipelineDiagram
              nodes={steps.map((s) => ({ number: s.number, label: s.title }))}
            />
          </div>

          {/* Detailed step copy below the diagram */}
          <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-5 md:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="savri-rise flex flex-col gap-5 border-t border-[#F5F0E8]/18 pt-6"
                style={{ transitionDelay: `${250 + i * 100}ms` }}
              >
                <div
                  className="savri-ai-stat font-serif font-semibold leading-none"
                  style={{ fontSize: "clamp(56px, 6vw, 120px)" }}
                >
                  {step.number}
                </div>
                <h3
                  className="font-serif font-semibold leading-[0.95] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(22px, 2.2vw, 36px)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-[#F5F0E8]/75 md:text-base">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 06 / TIMELINE — row format works for a timeline ─────────── */}
      <section id="roadmap" className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">06 — Timeline</p>
            <div>
              <h2
                className="reveal-up font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                When Is Savri AI Coming?
              </h2>
              <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                We&apos;re building Savri AI thoughtfully. Quality over speed. Every feature ships only when it improves the experience for real homes.
              </p>
            </div>
          </div>

          {/* Vertical timeline rail — gold node for first phase, muted for future */}
          <div className="savri-ai-timeline savri-ai-stagger mt-24 pl-10 md:mt-32 md:pl-14">
            {roadmap.map((item, i) => (
              <div
                key={item.month}
                className="reveal-up relative grid grid-cols-1 gap-6 pb-16 md:grid-cols-[0.3fr_1fr] md:gap-16 md:pb-24"
              >
                <span
                  className={
                    i === 0
                      ? "savri-ai-timeline-node"
                      : "savri-ai-timeline-node savri-ai-timeline-node-future"
                  }
                  style={{ left: "-2.5rem", top: "0.6rem" }}
                  aria-hidden="true"
                />
                <div>
                  <p className="savri-ai-stat text-[11px] uppercase tracking-[0.4em]">{item.month}</p>
                  <h3
                    className="mt-4 font-serif font-semibold leading-[0.95] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(28px, 4vw, 64px)" }}
                  >
                    {item.phase}
                  </h3>
                </div>
                <div className="grid gap-4">
                  {item.items.map((detail) => (
                    <div key={detail} className="flex items-start gap-4">
                      <CalendarDays className="mt-1 h-4 w-4 shrink-0 text-[#C9A84C]" />
                      <span className="text-base leading-7 text-[#F5F0E8]/86 md:text-lg">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 07 / USE CASES — cinematic stories moment ─────────── */}
      <section
        ref={useCasesRef}
        className="relative z-[7] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(181,99,106,0.16)_0%,transparent_70%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-6 py-32 md:px-16 md:py-48">
          <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">07 — Use Cases</p>
          <h2
            className="savri-from-left mt-10 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
            style={{ fontSize: "clamp(44px, 8.5vw, 160px)" }}
          >
            Savri AI in
          </h2>
          <h2
            className="savri-from-right font-serif font-semibold leading-[0.9] text-[#B5636A]"
            style={{ fontSize: "clamp(44px, 8.5vw, 160px)", transitionDelay: "150ms" }}
          >
            real life.
          </h2>

          <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-2 md:gap-12">
            {stories.map((story, i) => (
              <article
                key={story.profile}
                className="savri-rise flex flex-col gap-6 border-t border-[#F5F0E8]/18 pt-8"
                style={{ transitionDelay: `${250 + i * 120}ms` }}
              >
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#B5636A]">
                  Profile {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-serif font-semibold leading-[1.15] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(18px, 1.5vw, 28px)" }}
                >
                  {story.profile}
                </h3>
                <div className="space-y-5 text-base leading-7 text-[#F5F0E8]/78 md:text-lg">
                  <p>
                    <span className="block text-[10px] uppercase tracking-[0.32em] text-[#C9A84C]">Challenge</span>
                    <span className="mt-2 block">{story.challenge}</span>
                  </p>
                  <p>
                    <span className="block text-[10px] uppercase tracking-[0.32em] text-[#C9A84C]">Savri AI Solution</span>
                    <span className="mt-2 block">{story.solution}</span>
                  </p>
                  <p>
                    <span className="block text-[10px] uppercase tracking-[0.32em] text-[#C9A84C]">Outcome</span>
                    <span className="mt-2 block font-serif font-semibold text-[#F5F0E8]">{story.outcome}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 08 / PRIVACY — edge-faded image bleed ─────────── */}
      <section
        ref={privacyRef}
        className="relative z-[8] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
      >
        <Image
          src={PRIVACY_IMG}
          alt="A quiet kitchen — fresh ingredients laid out"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.78)_18%,rgba(26,26,26,0.75)_50%,rgba(26,26,26,0.88)_82%,#1A1A1A_100%)]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-center px-6 md:px-16">
          <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">07 — Privacy</p>
          <h2
            className="savri-from-left mt-8 font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
            style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
          >
            Your Privacy.
          </h2>
          <h2
            className="savri-from-right font-serif font-semibold leading-[0.9] text-[#B5636A]"
            style={{ fontSize: "clamp(48px, 9vw, 180px)", transitionDelay: "150ms" }}
          >
            Our Priority.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {privacyPoints.map((point, i) => (
              <div
                key={point.title}
                className="savri-rise flex flex-col gap-3"
                style={{ transitionDelay: `${300 + i * 130}ms` }}
              >
                <ShieldCheck className="h-7 w-7 text-[#C9A84C]" />
                <h3 className="font-serif font-semibold text-xl text-[#F5F0E8] md:text-2xl">{point.title}</h3>
                <p className="text-sm leading-7 text-[#F5F0E8]/75 md:text-base">{point.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 09 / FAQ — accordion row format works for FAQs ─────────── */}
      <section className="relative w-full overflow-hidden py-32 md:py-48">
        <div className="savri-ai-glow-rose" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
          <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">08 — FAQ</p>
            <h2
              className="reveal-up font-serif font-semibold leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
            >
              Questions About Savri AI
            </h2>
          </div>

          <div className="savri-ai-faq mt-20 divide-y divide-[#F5F0E8]/15 md:mt-28">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none">
                  <span className="font-serif font-semibold text-xl text-[#F5F0E8] md:text-2xl">{faq.question}</span>
                  <span className="text-3xl text-[#B5636A] transition group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 pr-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 10 / WAITLIST — cinematic final CTA with newsletter ─────────── */}
      <section
        id="notify"
        ref={ctaRef}
        className="relative z-[10] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
      >
        <Image
          src={CTA_IMG}
          alt="Warm home dining moment"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.7)_18%,rgba(26,26,26,0.78)_50%,rgba(26,26,26,0.92)_82%,#1A1A1A_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-center px-6 py-32 md:px-16 md:py-48">
          <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">09 — Waitlist</p>
          <h2
            className="savri-rise mt-8 font-serif font-semibold leading-[0.88] text-[#F5F0E8]"
            style={{ fontSize: "clamp(64px, 12vw, 240px)", transitionDelay: "150ms" }}
          >
            Be First to Know
          </h2>
          <h2
            className="savri-rise font-serif font-semibold leading-[0.88] text-[#B5636A]"
            style={{ fontSize: "clamp(64px, 12vw, 240px)", transitionDelay: "300ms" }}
          >
            When Savri AI Launches
          </h2>
          <p
            className="savri-rise mt-10 max-w-2xl text-lg leading-9 text-[#F5F0E8]/82 md:text-xl"
            style={{ transitionDelay: "450ms" }}
          >
            Join the waitlist and get exclusive early access, special pricing, and insider updates.
          </p>

          <div className="mt-16 grid items-start gap-12 md:mt-20 md:grid-cols-[0.9fr_1.1fr]">
            <div className="savri-rise space-y-5" style={{ transitionDelay: "600ms" }}>
              {[
                "Early notice when AI features go live",
                "Special launch pricing updates",
                "Insider product progress from August to December 2026",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 text-base text-[#F5F0E8]/86 md:text-lg">
                  <HeartHandshake className="mt-1 h-5 w-5 shrink-0 text-[#C9A84C]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="savri-ai-glass savri-rise p-6 md:p-10" style={{ transitionDelay: "700ms" }}>
              <SavriAiNewsletter />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Footer note ─────────── */}
      <section className="relative w-full overflow-hidden border-t border-[#F5F0E8]/12 py-12">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 text-sm text-[#F5F0E8]/62 md:flex-row md:items-center md:justify-between md:px-16">
          <p className="flex items-center gap-2">
            <UtensilsCrossed className="h-4 w-4 text-[#B5636A]" />
            Savri AI is being built to support real private-chef bookings, not replace the human experience.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 font-semibold text-[#B5636A] hover:text-[#F5F0E8]">
            Explore Savri home page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
