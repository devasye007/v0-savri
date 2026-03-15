"use client"

import { useInView } from "@/hooks/use-in-view"
import { ShieldCheck, Users2, MapPin, Heart } from "lucide-react"

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
]

export function WhySavriSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-dark">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2
          className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-16 md:mb-20 transition-all duration-600"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Built different.
        </h2>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center transition-all duration-600"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-cream/10 bg-cream/5 mb-6 transition-transform duration-300"
                style={{
                  animation: isInView ? `pulse-subtle 2s ease-in-out ${index * 0.2}s` : 'none',
                }}
              >
                <pillar.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-cream text-xl font-medium mb-3">
                {pillar.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  )
}
