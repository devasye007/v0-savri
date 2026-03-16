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
  CalendarDays,
  Home,
  Sparkles
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
          className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl text-center font-medium leading-tight mb-12 md:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? `perspective(1000px) rotateX(0deg) translateY(0)` 
              : `perspective(1000px) rotateX(15deg) translateY(40px)`,
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          One chef.
          <br />
          Every occasion.
        </h2>

        {/* Two Main Service Cards - Daily Meals & Party Chef */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto mb-8">
          {/* Daily Home Chef Card */}
          <TiltCard
            tiltAmount={6}
            className="group rounded-xl cursor-pointer touch-3d-active"
          >
            <div
              className="p-6 md:p-8 bg-[#0A0A0A] border border-rose rounded-xl transition-all duration-300 h-full flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? `perspective(1000px) rotateX(0deg) translateY(0) translateZ(0)` 
                  : `perspective(1000px) rotateX(20deg) translateY(50px) translateZ(-50px)`,
                transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) 100ms`,
              }}
            >
              <div 
                className="mb-5 transform transition-transform duration-300 group-hover:scale-110 group-active:scale-110" 
                style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
              >
                <Home 
                  className="w-9 h-9 text-rose transition-colors duration-200" 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 
                className="font-serif text-cream text-2xl md:text-3xl font-medium mb-3 transition-colors duration-200"
                style={{ transform: "translateZ(20px)" }}
              >
                Daily Home Chef
              </h3>
              <p 
                className="text-cream/65 text-sm leading-relaxed mb-6 flex-1 transition-colors duration-200"
                style={{ transform: "translateZ(10px)" }}
              >
                Same verified chef comes to your home every day. Cooks fresh lunch and dinner — or all three meals. Your taste. Your kitchen. Your routine.
              </p>
              <div style={{ transform: "translateZ(15px)" }}>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose/20 border border-rose/40 text-rose text-xs font-medium">
                  Regular + Gold Plans Available
                </span>
              </div>
            </div>
          </TiltCard>

          {/* Party Chef Card */}
          <TiltCard
            tiltAmount={6}
            className="group rounded-xl cursor-pointer touch-3d-active"
          >
            <div
              className="p-6 md:p-8 bg-[#0A0A0A] border border-gold rounded-xl transition-all duration-300 h-full flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? `perspective(1000px) rotateX(0deg) translateY(0) translateZ(0)` 
                  : `perspective(1000px) rotateX(20deg) translateY(50px) translateZ(-50px)`,
                transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) 200ms`,
              }}
            >
              <div 
                className="mb-5 transform transition-transform duration-300 group-hover:scale-110 group-active:scale-110" 
                style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
              >
                <Sparkles 
                  className="w-9 h-9 text-gold transition-colors duration-200" 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 
                className="font-serif text-gold text-2xl md:text-3xl font-medium mb-3 transition-colors duration-200"
                style={{ transform: "translateZ(20px)" }}
              >
                Party Chef
              </h3>
              <p 
                className="text-cream/65 text-sm leading-relaxed mb-6 flex-1 transition-colors duration-200"
                style={{ transform: "translateZ(10px)" }}
              >
                A professional chef for your kitty party, birthday, anniversary, date night, family gathering, or corporate dinner. Add bartender, waiters, and live cooking counter too.
              </p>
              <div style={{ transform: "translateZ(15px)" }}>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-medium">
                  One-time booking — no subscription
                </span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Helper text between cards */}
        <p 
          className="text-dark/50 text-sm text-center mb-16 md:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 400ms",
          }}
        >
          Not sure which you need? Both are available on Savri.
        </p>

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
                  transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${(index + 3) * 100}ms`,
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
