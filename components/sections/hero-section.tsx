"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { useGyroscopeTilt } from "@/hooks/use-scroll-3d"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { tilt, isSupported } = useGyroscopeTilt()

  useEffect(() => {
    setMounted(true)
    // Check if mobile device
    setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches)
  }, [])

  const words = ["Delhi's", "private", "chef", "is", "coming", "home."]

  return (
    <section className="min-h-screen bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 lg:py-0 min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center z-10 pt-12 lg:pt-0">
          {/* Logo */}
          <h1 className="font-serif text-rose text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8">
            Savri
          </h1>

          {/* Headline with word-by-word animation */}
          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block mr-3 transition-all duration-500"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* AI Platform Pill - First thing after headline */}
          <div
            className="mb-4 transition-all duration-500"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "650ms",
            }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/15 text-gold text-[10px] font-medium tracking-widest uppercase relative overflow-hidden">
              <span className="absolute inset-0 animate-shimmer" />
              <span className="animate-star-pulse relative z-10">✦</span>
              <span className="relative z-10">AI-POWERED PRIVATE CHEF PLATFORM</span>
            </span>
          </div>

          {/* Sub-headline */}
          <p
            className="text-cream/80 text-lg md:text-xl leading-relaxed mb-6 max-w-md transition-all duration-500"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "700ms",
            }}
          >
            A real trained chef.
            <br />
            Your kitchen. Fresh food.
            <br />
            For daily meals and parties both.
          </p>

          {/* CTA Button */}
          <div
            className="transition-all duration-500"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "800ms",
            }}
          >
            <a
              href="#waitlist"
              className="inline-block bg-rose text-cream px-8 py-4 rounded-lg text-lg font-medium transition-all duration-150 hover:bg-rose-dark hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-rose/20"
            >
              Join the waitlist
            </a>
          </div>

          {/* Made In India */}
          <p
            className="text-gold text-sm mt-4 font-medium tracking-wide transition-all duration-500 flex items-center gap-1.5"
            style={{
              opacity: mounted ? 1 : 0,
              transitionDelay: "850ms",
            }}
          >
            <span className="text-base">🇮🇳</span> Proudly Made In India
          </p>

          {/* Launch date */}
          <p
            className="text-gold text-sm mt-6 font-medium tracking-wide transition-all duration-500"
            style={{
              opacity: mounted ? 1 : 0,
              transitionDelay: "900ms",
            }}
          >
            Launching Delhi NCR — June 2026
          </p>

          {/* Social link */}
          <div
            className="mt-6 flex items-center gap-3 transition-all duration-500"
            style={{
              opacity: mounted ? 1 : 0,
              transitionDelay: "1000ms",
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

        {/* Right Visual */}
        <div
          className="flex-1 relative w-full lg:h-screen flex items-center justify-center transition-all duration-700 perspective-container"
          style={{
            opacity: mounted ? 1 : 0,
            transitionDelay: "400ms",
          }}
        >
          <div 
            className={`relative w-full aspect-[4/3] lg:aspect-auto lg:h-[80vh] max-w-2xl ${!isMobile && !isSupported ? "animate-float-3d" : ""}`}
            style={{
              transformStyle: "preserve-3d",
              // Use gyroscope tilt on mobile, or swing animation as fallback
              transform: isMobile && isSupported 
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
            {/* Gradient overlay for better text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent lg:hidden rounded-2xl" />
          </div>
          
          {/* Mobile: Add swing animation if no gyroscope */}
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
