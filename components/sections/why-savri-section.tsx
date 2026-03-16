"use client"

import { useInView } from "@/hooks/use-in-view"
import { useScroll3D } from "@/hooks/use-scroll-3d"
import { ShieldCheck, Users2, MapPin, Heart, Sparkles } from "lucide-react"

// Custom Indian Flag/Chakra icon component
function IndianIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      strokeWidth={1.5}
      stroke="currentColor"
    >
      {/* Ashoka Chakra inspired icon */}
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      {/* Spokes */}
      <line x1="12" y1="3" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="3" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="21" y2="12" />
      <line x1="5.64" y1="5.64" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="18.36" y2="18.36" />
      <line x1="5.64" y1="18.36" x2="9.17" y2="14.83" />
      <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
    </svg>
  )
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "Verified Chefs",
    description:
      "Every Savri chef is background checked, trained, and tested before their first booking.",
  },
  {
    icon: Users2,
    title: "Substitute Guarantee",
    description:
      "Your chef can't make it? We send a replacement. No missed meals. Ever.",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    description:
      "Know exactly when your chef arrives. Real-time updates from booking to doorstep.",
  },
  {
    icon: Heart,
    title: "Surprisingly Affordable",
    description:
      "Home-cooked food by a real chef costs less than you think. More affordable than your weekly delivery spend.",
  },
  {
    icon: Sparkles,
    title: "Built with AI",
    description:
      "Savri learns your taste, plans your meals, and matches you with the right chef — automatically.",
  },
  {
    icon: IndianIcon,
    title: "Proudly Indian",
    description:
      "Built in Delhi. For Delhi. By someone who lives here and understands this city. Not a foreign app entering India — this is ours.",
    isCustomIcon: true,
  },
]

export function WhySavriSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { ref: scrollRef, isVisible } = useScroll3D({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-dark overflow-hidden">
      <div ref={scrollRef} className="container mx-auto px-6">
        {/* Headline with 3D entrance */}
        <h2
          className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-16 md:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? `perspective(1000px) rotateX(0deg) translateY(0) translateZ(0)` 
              : `perspective(1000px) rotateX(-20deg) translateY(60px) translateZ(-80px)`,
            transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          Built different.
        </h2>

        {/* Trust Pillars with 3D pop-in - 6 pillars now */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto perspective-container">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center group touch-3d-active"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? `perspective(1000px) rotateX(0deg) translateY(0) translateZ(0) scale(1)` 
                  : `perspective(1000px) rotateX(25deg) translateY(80px) translateZ(-100px) scale(0.9)`,
                transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${(index + 1) * 120}ms`,
              }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-cream/10 bg-cream/5 mb-6 icon-3d-flip cursor-pointer relative"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div 
                  className="absolute inset-0 flex items-center justify-center rounded-full"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <pillar.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <div 
                  className="absolute inset-0 flex items-center justify-center rounded-full bg-rose"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <pillar.icon className="w-7 h-7 text-cream" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-serif text-cream text-xl font-medium mb-3 group-hover:text-gold group-active:text-gold transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
