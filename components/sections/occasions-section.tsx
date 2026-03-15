"use client"

import { useInView } from "@/hooks/use-in-view"
import { 
  Utensils, 
  PartyPopper, 
  Heart, 
  Users, 
  Star, 
  CalendarDays 
} from "lucide-react"

const occasions = [
  {
    icon: Utensils,
    title: "Daily Meals",
    description: "Lunch and dinner. Every day. Sorted.",
  },
  {
    icon: PartyPopper,
    title: "Party",
    description: "Kitty parties. Birthdays. Anniversaries. Corporate dinners.",
  },
  {
    icon: Heart,
    title: "Date Night",
    description: "An intimate dinner. In your own home.",
  },
  {
    icon: Users,
    title: "Family Gathering",
    description: "Feed the whole family. Without cooking for hours.",
  },
  {
    icon: Star,
    title: "Special Occasions",
    description: "Make it memorable. Chef included.",
  },
  {
    icon: CalendarDays,
    title: "Subscription",
    description: "Daily home cooking. Same chef. Every day.",
  },
]

export function OccasionsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2
          className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl text-center font-medium leading-tight mb-16 md:mb-20 transition-all duration-600"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Every occasion.
          <br />
          One chef.
        </h2>

        {/* Occasion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-cream border border-rose/20 rounded-xl transition-all duration-200 hover:bg-rose hover:border-rose hover:scale-[1.02] cursor-pointer"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${(index + 1) * 80}ms`,
              }}
            >
              <div className="mb-5">
                <occasion.icon 
                  className="w-8 h-8 text-rose group-hover:text-cream transition-colors duration-200" 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="font-serif text-dark group-hover:text-cream text-xl md:text-2xl font-medium mb-2 transition-colors duration-200">
                {occasion.title}
              </h3>
              <p className="text-dark/60 group-hover:text-cream/80 text-sm leading-relaxed transition-colors duration-200">
                {occasion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
