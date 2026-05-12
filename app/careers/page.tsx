"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { useCounter } from "@/hooks/use-counter"
import {
  DollarSign,
  Calendar,
  BadgeCheck,
  ShieldCheck,
  ChefHat,
  Instagram,
  Mail,
} from "lucide-react"
import { Navbar } from "@/components/sections/navbar"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"

const APPLY_LINK = "https://forms.gle/ESCw7Zpt5vJNgJxa8"

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Per Booking",
    description:
      "60% of every booking paid directly to you within 48 hours via UPI. No waiting, no delays.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description:
      "You choose when you're available. No fixed hours, no minimum commitment. Cook on your terms.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Profile",
    description:
      "Build a public Savri Chef Profile with your cuisine, reviews, and booking history. Your reputation, your asset.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Minimum",
    description:
      "We guarantee a minimum monthly earning so you always have a floor income — on top of your per-booking earnings.",
  },
]

const steps = [
  {
    number: 1,
    title: "Apply",
    description: "Fill the application form in 5 minutes.",
    active: true,
  },
  {
    number: 2,
    title: "Video Call",
    description: "Quick intro call with our team.",
    active: false,
  },
  {
    number: 3,
    title: "Verification",
    description: "ID check and cooking test.",
    active: false,
  },
  {
    number: 4,
    title: "Profile Live",
    description: "Go live on the Savri platform.",
    active: false,
  },
  {
    number: 5,
    title: "Start Earning",
    description: "Receive bookings and get paid.",
    active: false,
  },
]

const cuisines = [
  "North Indian",
  "Continental",
  "Chinese",
  "Italian",
  "Multi-cuisine",
  "Healthy & Diet",
  "Baking & Desserts",
]

// ── Hero Section ─────────────────────────────────────────────────────────────

function CareersHero() {
  const [mounted, setMounted] = useState(false)
  const magneticRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // tiny delay so CSS transitions run on first paint
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = magneticRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2
    btn.style.transition = "none"
    btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`
  }

  const handleMagneticLeave = () => {
    const btn = magneticRef.current
    if (!btn) return
    btn.style.transition = "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)"
    btn.style.transform = "translate(0,0) scale(1)"
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden" style={{ backgroundColor: "#1A1A1A" }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Label */}
        <p
          className="text-rose text-xs font-medium tracking-[0.2em] uppercase mb-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            transitionDelay: "0ms",
          }}
        >
          Careers at Savri
        </p>

        {/* Headline */}
        <h1
          className="font-serif text-cream text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            transitionDelay: "150ms",
          }}
        >
          Cook for Delhi NCR's most exciting homes.
        </h1>

        {/* Sub-headline */}
        <p
          className="text-rose text-xl md:text-2xl font-serif font-medium mb-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            transitionDelay: "300ms",
          }}
        >
          Join Savri's founding chef roster.
        </p>

        {/* Body text */}
        <p
          className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            transitionDelay: "450ms",
          }}
        >
          Verified chefs. Flexible schedule. Real earnings from Day 1.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            transitionDelay: "600ms",
          }}
        >
          <a
            ref={magneticRef}
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="bg-rose text-cream px-8 py-4 rounded-lg text-base font-medium shadow-lg shadow-rose/25 magnetic-btn btn-savri"
          >
            Apply Now
          </a>
          <a
            href="#benefits"
            className="border border-cream/30 text-cream px-8 py-4 rounded-lg text-base font-medium hover:border-rose hover:text-rose transition-all duration-300 btn-savri"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Benefits Section ──────────────────────────────────────────────────────────

function BenefitsSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section
      id="benefits"
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="container mx-auto px-6">
        {/* Section label */}
        <p
          className="text-rose text-xs font-medium tracking-[0.2em] uppercase text-center mb-4"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          Why Cook With Savri
        </p>

        <h2
          className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-16 md:mb-20"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 80ms",
          }}
        >
          Built for chefs who take their craft seriously.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="card-hover rounded-2xl p-8 border border-cream/5"
              style={{
                backgroundColor: "#222222",
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${100 + i * 100}ms`,
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border border-rose/30 bg-rose/10">
                <benefit.icon className="w-6 h-6 text-rose" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-cream text-xl font-medium mb-3">
                {benefit.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works Timeline ─────────────────────────────────────────────────────

function TimelineStep({
  step,
  index,
  isInView,
}: {
  step: (typeof steps)[0]
  index: number
  isInView: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const filled = step.active || hovered

  return (
    <div
      className="flex-1 flex flex-col items-center text-center cursor-default select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 150}ms, transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 150}ms`,
      }}
    >
      {/* Circle — z-10 keeps it above the connector line */}
      <div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-lg font-serif font-semibold border-2 mb-5 shrink-0"
        style={{
          backgroundColor: filled ? "#B5636A" : "#0A0A0A",
          borderColor: "#B5636A",
          color: "#F5F0EB",
          boxShadow: filled ? "0 0 28px rgba(181,99,106,0.45)" : "none",
          transition: "background-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        {step.number}
      </div>

      {/* Title */}
      <h3
        className="font-serif text-base font-semibold mb-2 leading-snug"
        style={{
          color: filled ? "#B5636A" : "#F5F0EB",
          transition: "color 0.2s ease",
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-cream/50 text-xs leading-relaxed max-w-[110px]">
        {step.description}
      </p>
    </div>
  )
}

function MobileTimelineStep({
  step,
  index,
  isInView,
  isLast,
}: {
  step: (typeof steps)[0]
  index: number
  isInView: boolean
  isLast: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const filled = step.active || hovered

  return (
    <div
      className={`flex items-start gap-5 ${isLast ? "" : "mb-8"}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 150}ms, transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 150}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Circle */}
      <div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-lg font-serif font-semibold border-2 shrink-0"
        style={{
          backgroundColor: filled ? "#B5636A" : "#0A0A0A",
          borderColor: "#B5636A",
          color: "#F5F0EB",
          boxShadow: filled ? "0 0 24px rgba(181,99,106,0.45)" : "none",
          transition: "background-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        {step.number}
      </div>

      {/* Text */}
      <div className="pt-4">
        <h3
          className="font-serif text-base font-semibold mb-1"
          style={{
            color: filled ? "#B5636A" : "#F5F0EB",
            transition: "color 0.2s ease",
          }}
        >
          {step.title}
        </h3>
        <p className="text-cream/50 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

function HowItWorksSection() {
  const { ref, isInView } = useInView({ threshold: 0.25 })

  return (
    <section
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-dark"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <p
          className="text-rose text-xs font-medium tracking-[0.2em] uppercase text-center mb-3"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          Chef Journey
        </p>
        <h2
          className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-12 md:mb-16"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 80ms",
          }}
        >
          How It Works
        </h2>

        {/* ── DESKTOP: horizontal ──────────────────────────────────────── */}
        {/*
          5 flex-1 columns → each is exactly 20% wide.
          First circle centre = 10%, last circle centre = 90%.
          The connector line spans left-[10%] → right-[10%], perfectly centre-to-centre.
        */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative">
            {/* Track (always visible, very subtle) */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 rounded-full bg-rose/20" />

            {/* Animated rose fill — scaleX 0→1 from the left edge */}
            <div
              className="absolute top-8 left-[10%] right-[10%] h-0.5 rounded-full bg-rose origin-left"
              style={{
                transform: isInView ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 350ms",
              }}
            />

            {/* Steps — flex so every column is exactly 1/5 of the width */}
            <div className="flex">
              {steps.map((step, i) => (
                <TimelineStep key={i} step={step} index={i} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE: vertical ─────────────────────────────────────────── */}
        {/*
          Left-side vertical line running behind the circles.
          Circles sit at the left; text sits to the right.
          Line is absolutely positioned at left-8 (32px = half of w-16 circle).
        */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="relative">
            {/* Vertical track */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 -translate-x-px rounded-full bg-rose/20" />

            {/* Animated vertical fill */}
            <div
              className="absolute left-8 top-8 w-0.5 -translate-x-px rounded-full bg-rose origin-top"
              style={{
                height: isInView ? "calc(100% - 4rem)" : "0%",
                transition: "height 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 350ms",
              }}
            />

            {steps.map((step, i) => (
              <MobileTimelineStep
                key={i}
                step={step}
                index={i}
                isInView={isInView}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Cuisine & Roles Section ───────────────────────────────────────────────────

function CuisineSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="py-24 md:py-28"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2
          className="font-serif text-cream text-2xl md:text-3xl font-medium mb-10"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          Whatever your speciality — there's a booking waiting for you.
        </h2>

        <div
          className="flex flex-wrap justify-center gap-3"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 100ms",
          }}
        >
          {cuisines.map((cuisine) => (
            <span
              key={cuisine}
              className="px-5 py-2.5 rounded-full border border-rose/40 text-cream text-sm font-medium hover:border-rose hover:bg-rose/10 transition-all duration-200 cursor-default"
            >
              {cuisine}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonial Placeholder ───────────────────────────────────────────────────

function TestimonialSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-dark"
    >
      <div className="container mx-auto px-6 max-w-2xl text-center">
        {/* Opening quote */}
        <div
          className="font-serif text-rose text-8xl md:text-9xl leading-none mb-4 select-none"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            lineHeight: "0.7",
          }}
        >
          "
        </div>

        <p
          className="font-serif text-cream/80 text-xl md:text-2xl italic leading-relaxed mb-6"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 100ms",
          }}
        >
          This section will feature reviews from our founding chefs after launch.
        </p>

        <p
          className="text-cream/40 text-sm"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.6s ease 200ms",
          }}
        >
          — Savri Founding Chefs, Delhi NCR · Coming soon
        </p>

        {/* Closing quote */}
        <div
          className="font-serif text-rose text-8xl md:text-9xl leading-none mt-2 select-none"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 50ms",
            lineHeight: "0.7",
          }}
        >
          "
        </div>
      </div>
    </section>
  )
}

// ── Final CTA Section ─────────────────────────────────────────────────────────

function FinalCTASection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const count = useCounter({ to: 15, duration: 1400, isActive: isInView })

  return (
    <section
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 text-center"
      style={{ backgroundColor: "#B5636A" }}
    >
      <div className="container mx-auto px-6 max-w-2xl">
        <h2
          className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          Ready to cook for Delhi NCR's best homes?
        </h2>

        <p
          className="text-cream text-xl md:text-2xl font-medium mb-10"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 100ms",
          }}
        >
          <span className="font-bold">{count}+</span> chefs already onboarded on Savri.
        </p>

        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 200ms",
          }}
        >
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark text-cream px-10 py-5 rounded-lg text-lg font-semibold animate-pulse-cta hover:bg-dark-light transition-colors duration-200"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Minimal Footer for Careers ────────────────────────────────────────────────

function CareersFooter() {
  return (
    <footer className="bg-dark border-t border-cream/5 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-serif text-rose text-2xl font-semibold hover:opacity-80 transition-opacity">
          Savri
        </Link>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/savri.in/" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-cream transition-colors duration-200">
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href="mailto:founder@savri.co.in" className="text-cream/50 hover:text-cream transition-colors duration-200">
            <Mail className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
        <p className="text-cream/40 text-sm">© 2026 Savri. Delhi NCR.</p>
      </div>
    </footer>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden">
        <CareersHero />
        <BenefitsSection />
        <HowItWorksSection />
        <CuisineSection />
        <TestimonialSection />
        <FinalCTASection />
        <CareersFooter />
      </main>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg animate-pulse-whatsapp hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <BackToTop />
    </>
  )
}
