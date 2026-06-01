"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { useGyroscopeTilt } from "@/hooks/use-scroll-3d"
import { useCounter } from "@/hooks/use-counter"

// ↓ Update this single number to reflect the current waitlist size
const WAITLIST_COUNT = 47

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { tilt, isSupported } = useGyroscopeTilt()
  const magneticRef = useRef<HTMLAnchorElement>(null)
  const count = useCounter({ to: WAITLIST_COUNT, duration: 1500, isActive: mounted })

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches)
  }, [])

  // Parallax: track scroll position
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Magnetic CTA: remove CSS transition while tracking, restore on leave
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = magneticRef.current
    if (!btn || isMobile) return
    const rect = btn.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2
    btn.style.transition = "none"
    btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`
    btn.style.boxShadow = "0 12px 35px rgba(181,99,106,0.4)"
  }

  const handleMagneticLeave = () => {
    const btn = magneticRef.current
    if (!btn) return
    btn.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease"
    btn.style.transform = "translate(0,0) scale(1)"
    btn.style.boxShadow = ""
  }

  const words = ["Delhi's", "private", "chef", "is", "coming", "home."]

  return (
    <section className="min-h-screen bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 lg:py-0 min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center z-10 pt-12 lg:pt-0">
          {/* Logo — first to appear */}
          <h1
            className="font-serif text-rose text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
              transitionDelay: "0ms",
            }}
          >
            Savri
          </h1>

          {/* Waitlist counter pill — appears just after the logo */}
          <div
            className="mb-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease 150ms, transform 0.5s ease 150ms",
            }}
          >
            <span
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#222222" }}
            >
              {/* Pulsing live dot */}
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span
                  className="animate-ping-dot absolute inline-flex h-full w-full rounded-full"
                  style={{ backgroundColor: "#B5636A" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5 animate-pulse-dot"
                  style={{ backgroundColor: "#B5636A" }}
                />
              </span>
              <span className="text-cream/80">
                <span className="text-cream font-semibold">{count}</span>
                {" people have joined the waitlist"}
              </span>
            </span>
          </div>

          {/* Headline with word-by-word stagger — second */}
          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 flex flex-wrap gap-x-3">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                  transitionDelay: `${200 + index * 80}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Sub-headline — third */}
          <p
            className="text-cream/80 text-lg md:text-xl leading-relaxed mb-6 max-w-md"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
              transitionDelay: "680ms",
            }}
          >
            A real trained chef.
            <br />
            Your kitchen. Fresh food.
            <br />
            Every time.
          </p>

          {/* AI Feature Pill */}
          <div
            className="mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              transitionDelay: "760ms",
            }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-rose/30 bg-cream/5 text-rose text-xs font-medium tracking-wide relative overflow-hidden">
              <span className="absolute inset-0 animate-shimmer" />
              <span className="text-gold animate-star-pulse relative z-10">✦</span>
              <span className="relative z-10">AI-powered meal planning included</span>
            </span>
          </div>

          {/* CTA Button — fourth (magnetic) */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.5s ease",
              transitionDelay: "900ms",
            }}
          >
            <a
              ref={magneticRef}
              href="#waitlist"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="inline-block bg-rose text-cream px-8 py-4 rounded-lg text-lg font-medium shadow-lg shadow-rose/20 magnetic-btn"
              style={{ display: "inline-block" }}
            >
              Join the waitlist
            </a>
          </div>

          {/* Launch date */}
          <p
            className="text-gold text-sm mt-6 font-medium tracking-wide"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.5s ease",
              transitionDelay: "1000ms",
            }}
          >
            Bookings Open
          </p>

          {/* Social link */}
          <div
            className="mt-6 flex items-center gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.5s ease",
              transitionDelay: "1100ms",
            }}
          >
            <a
              href="https://www.instagram.com/savri.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/60 hover:text-cream transition-colors duration-200 group"
              aria-label="Follow Savri on Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm">@savri.in</span>
            </a>
          </div>
        </div>

        {/* Right Visual — parallax applied to outer container */}
        <div
          className="flex-1 relative w-full lg:h-screen flex items-center justify-center perspective-container"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.7s ease 400ms",
            // Parallax: image moves at ~0.3x scroll speed (slower than page)
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div
            className={`relative w-full aspect-[4/3] lg:aspect-auto lg:h-[80vh] max-w-2xl ${!isMobile && !isSupported ? "animate-float-3d" : ""}`}
            style={{
              transformStyle: "preserve-3d",
              transform:
                isMobile && isSupported
                  ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
                  : undefined,
              transition: isMobile ? "transform 0.1s ease-out" : undefined,
            }}
          >
            <Image
              src="/images/hero-food.jpg"
              alt="Chef's hands plating a beautifully prepared Indian dish on a dark marble surface"
              fill
              className="object-cover rounded-2xl lg:rounded-3xl shadow-2xl shadow-rose/10"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* 3D depth layer */}
            <div
              className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-rose/10"
              style={{ transform: "translateZ(20px)" }}
            />
            {/* Gradient overlay for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent lg:hidden rounded-2xl" />
          </div>

          {isMobile && !isSupported && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: "none" }}
            >
              <div className="w-full aspect-[4/3] max-w-2xl animate-swing-3d" />
            </div>
          )}
        </div>
      </div>

      {/* Animated background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose/5 rounded-full blur-[150px] pointer-events-none animate-float-glow" />
    </section>
  )
}
