"use client"

import { useInView } from "@/hooks/use-in-view"
import { Calendar, Users, Heart, Lightbulb, Sparkles, Brain } from "lucide-react"

const features = [
  {
    icon: Calendar,
    accentColor: "gold",
    title: "AI Weekly Meal Planner",
    description:
      "Every Sunday Savri's AI creates a personalised weekly meal plan based on your taste, dietary needs, and preferences. Sent directly to your chef so they arrive prepared — every single day.",
    tag: "Powered by AI ✦",
  },
  {
    icon: Users,
    accentColor: "rose",
    title: "Smart Chef Matching",
    description:
      "Savri's matching system analyses your cuisine preferences, schedule, household size, and dietary needs to find the perfect chef for your home — not just any available chef. The right match every time.",
    tag: "Personalised for you ✦",
  },
  {
    icon: Heart,
    accentColor: "gold",
    title: "Learns Your Taste",
    description:
      "Every meal your Savri chef cooks is tracked and learned. Too much salt? Noted. Love extra tadka? Remembered. Your food profile gets smarter with every single visit. By week 2 your chef knows your kitchen better than you do.",
    tag: "Gets better every day ✦",
  },
  {
    icon: Lightbulb,
    accentColor: "rose",
    title: "Smart Booking Suggestions",
    description:
      "Savri predicts when you need a chef before you think to book. Suggests the right cuisine for the season, the occasion, and your mood. Recommends add-ons for your upcoming party. Thinks ahead so you don't have to.",
    tag: "Always one step ahead ✦",
  },
]

export function AiFeaturesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Subtle gold gradient glow at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(212, 175, 55, 0.08) 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight transition-all duration-600"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Not just a chef.
            <br />
            A smarter way to eat.
          </h2>
          <p
            className="text-[#D4AF37] text-base md:text-lg transition-all duration-600"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "100ms",
            }}
          >
            Savri uses AI so your food gets better every single day.
          </p>
        </div>

        {/* Features Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-12">
          {features.map((feature, index) => {
            const isGold = feature.accentColor === "gold"
            const borderColor = isGold ? "#D4AF37" : "#B5636A"
            const tagBg = isGold ? "bg-[#D4AF37]/15" : "bg-[#B5636A]/15"
            const tagBorder = isGold ? "border-[#D4AF37]/40" : "border-[#B5636A]/40"
            const tagText = isGold ? "text-[#D4AF37]" : "text-[#B5636A]"
            const iconColor = isGold ? "text-[#D4AF37]" : "text-[#B5636A]"
            
            return (
              <div
                key={index}
                className="bg-[#111111] rounded-xl p-6 md:p-8 transition-all duration-600"
                style={{
                  borderTop: `3px solid ${borderColor}`,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${(index + 2) * 100}ms`,
                }}
              >
                <feature.icon
                  className={`w-10 h-10 ${iconColor} mb-5`}
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-cream text-xl md:text-2xl font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>
                <span className={`inline-block ${tagBg} border ${tagBorder} ${tagText} text-xs font-medium px-3 py-1.5 rounded-full`}>
                  {feature.tag}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div
          className="max-w-5xl mx-auto bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl p-6 md:p-8 text-center transition-all duration-600"
          style={{
            opacity: isInView ? 1 : 0,
            transitionDelay: "600ms",
          }}
        >
          <p className="font-serif text-cream text-lg md:text-xl font-medium mb-4 leading-relaxed">
            This is not just a booking app.
            <br />
            This is your home's personal food intelligence system.
          </p>
          <p className="text-[#D4AF37] text-sm leading-relaxed">
            AI meal planning. Smart matching. Taste learning. Predictive suggestions.
            <br />
            All included. All working for you. From day one.
          </p>
        </div>
      </div>
    </section>
  )
}
