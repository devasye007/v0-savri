"use client"

import { useInView } from "@/hooks/use-in-view"
import { Calendar, Users, Heart, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Weekly meal plans",
    description:
      "Tell us your preferences once. Savri plans your entire week — automatically sent to your chef every Sunday.",
  },
  {
    icon: Users,
    title: "Matched to your taste",
    description:
      "Our system finds the right chef for your cuisine, your schedule, and your household — every time.",
  },
  {
    icon: Heart,
    title: "Gets better over time",
    description:
      "Savri remembers what you loved and what you didn't. Every meal is more you than the last.",
  },
  {
    icon: Lightbulb,
    title: "Knows before you ask",
    description:
      "From booking times to cuisine choices — Savri suggests what you need before you think to ask for it.",
  },
]

export function AiFeaturesSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="font-serif text-rose text-2xl md:text-3xl font-medium mb-4 transition-all duration-600"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            A little intelligence.
            <br />
            A lot of flavour.
          </h2>
          <p
            className="text-dark/70 text-base md:text-lg transition-all duration-600"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "100ms",
            }}
          >
            Savri learns what you love
            <br />
            and makes every meal better
            <br />
            than the last.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center transition-all duration-600"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${(index + 2) * 100}ms`,
              }}
            >
              <feature.icon
                className="w-6 h-6 text-rose mx-auto mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-dark text-lg font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-dark/60 text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p
          className="text-rose text-center text-sm md:text-base font-medium tracking-wide transition-all duration-600"
          style={{
            opacity: isInView ? 1 : 0,
            transitionDelay: "700ms",
          }}
        >
          Intelligent by design.
          <br />
          Personal by nature.
        </p>
      </div>
    </section>
  )
}
