"use client"

import { useInView } from "@/hooks/use-in-view"
import { Calendar, UserCheck, ChefHat, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Book",
    description: "Open the app. Pick your date and time.",
  },
  {
    icon: UserCheck,
    title: "Chef arrives",
    description: "Your verified Savri chef arrives with fresh ingredients.",
  },
  {
    icon: ChefHat,
    title: "Cooks fresh",
    description: "Cooks in your kitchen. Your taste. Your preferences.",
  },
  {
    icon: Sparkles,
    title: "You enjoy",
    description: "Eat fresh home-cooked food. Chef leaves everything clean.",
  },
]

export function SolutionSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-dark">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2
          className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl text-center font-medium leading-tight max-w-2xl mx-auto mb-16 md:mb-24 transition-all duration-600"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          A real chef.
          <br />
          Your kitchen.
          <br />
          Your food.
        </h2>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center relative transition-all duration-600"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/30 mb-5">
                  <step.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-cream text-xl font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {step.description}
                </p>
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gold/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p
          className="font-serif text-cream/80 text-xl md:text-2xl text-center italic transition-all duration-600"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "600ms",
          }}
        >
          Not delivery. Not a restaurant.
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          Yours.
        </p>
      </div>
    </section>
  )
}
