"use client"

import { useInView } from "@/hooks/use-in-view"
import { useScroll3D } from "@/hooks/use-scroll-3d"
import { TiltCard } from "@/components/ui/tilt-card"
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
  const { ref: scrollRef, isVisible, scrollProgress } = useScroll3D({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div ref={scrollRef} className="container mx-auto px-6">
        {/* Headline with 3D scroll effect */}
        <h2
          className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl text-center font-medium leading-tight mb-16 md:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? `perspective(1000px) rotateX(0deg) translateY(0)` 
              : `perspective(1000px) rotateX(15deg) translateY(40px)`,
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          Every occasion.
          <br />
          One chef.
        </h2>

        {/* Occasion Cards Grid with 3D scroll reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto perspective-container">
          {occasions.map((occasion, index) => (
            <TiltCard
              key={index}
              tiltAmount={8}
              className="group rounded-xl cursor-pointer touch-3d-active"
            >
              <div
                className="p-6 md:p-8 bg-cream border border-rose/20 rounded-xl transition-all duration-300 hover:bg-rose hover:border-rose active:bg-rose active:border-rose h-full"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? `perspective(1000px) rotateX(0deg) translateY(0) translateZ(0)` 
                    : `perspective(1000px) rotateX(20deg) translateY(50px) translateZ(-50px)`,
                  transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${(index + 1) * 100}ms`,
                }}
              >
                <div 
                  className="mb-5 transform transition-transform duration-300 group-hover:scale-110 group-active:scale-110" 
                  style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
                >
                  <occasion.icon 
                    className="w-8 h-8 text-rose group-hover:text-cream group-active:text-cream transition-colors duration-200" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 
                  className="font-serif text-dark group-hover:text-cream group-active:text-cream text-xl md:text-2xl font-medium mb-2 transition-colors duration-200"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {occasion.title}
                </h3>
                <p 
                  className="text-dark/60 group-hover:text-cream/80 group-active:text-cream/80 text-sm leading-relaxed transition-colors duration-200"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {occasion.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
