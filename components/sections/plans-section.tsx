"use client"

import { useInView } from "@/hooks/use-in-view"
import { useScroll3D } from "@/hooks/use-scroll-3d"
import { Check } from "lucide-react"

const regularFeatures = [
  "Verified private chef",
  "Fresh cooked in your kitchen",
  "Customised to your taste",
  "Substitute chef guaranteed",
  "AI-powered weekly meal plan",
  "Cancel anytime",
]

const goldFeatures = [
  "Everything in Regular",
  "Priority chef matching",
  "Premium and luxury cuisines",
  "Dedicated relationship manager",
  "Exclusive Gold member events",
  "Early access to new features",
  "Gold member badge in app",
]

export function PlansSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { ref: scrollRef, isVisible } = useScroll3D({ threshold: 0.1 })

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} className="py-24 md:py-32 bg-dark overflow-hidden">
      <div ref={scrollRef} className="container mx-auto px-6">
        {/* Headline */}
        <h2
          className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "perspective(1000px) rotateX(0deg) translateY(0)"
              : "perspective(1000px) rotateX(15deg) translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          Two ways to experience Savri.
        </h2>

        {/* Sub-headline */}
        <p
          className="text-gold/60 text-base md:text-lg text-center mb-16 md:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 100ms",
          }}
        >
          Pricing announced at launch.
          <br />
          Join the waitlist to be first.
        </p>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto perspective-container">
          {/* Regular Plan Card */}
          <div
            className="bg-dark-light border border-rose/30 rounded-2xl p-8 transition-all duration-300 hover:border-rose hover:-translate-y-1 touch-3d-active group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "perspective(1000px) rotateX(0deg) translateY(0) translateZ(0)"
                : "perspective(1000px) rotateX(20deg) translateY(60px) translateZ(-50px)",
              transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 200ms",
            }}
          >
            {/* Label */}
            <span className="text-rose text-xs font-medium tracking-widest uppercase">
              REGULAR
            </span>

            {/* Headline */}
            <h3 className="font-serif text-cream text-2xl md:text-3xl font-medium mt-4 mb-4 leading-tight">
              Your chef.
              <br />
              Every day.
            </h3>

            {/* Description */}
            <p className="text-cream/65 text-sm leading-relaxed mb-8">
              A verified Savri chef comes to your home and cooks fresh meals for your family.
              Same chef. Same care. Every single day.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {regularFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-rose mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-cream/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Pricing tag */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-rose/50 text-cream text-xs font-medium">
                Pricing announced soon
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToWaitlist}
              className="w-full bg-rose text-cream py-4 rounded-lg font-medium transition-all duration-150 hover:bg-rose-dark hover:scale-[1.01] active:scale-[0.99]"
            >
              Join waitlist
            </button>
          </div>

          {/* Gold Plan Card */}
          <div
            className="relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 touch-3d-active group overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #1A1410 0%, #0A0A0A 100%)",
              border: "1px solid rgba(212, 175, 55, 0.6)",
              boxShadow: "0 0 60px rgba(212, 175, 55, 0.08)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "perspective(1000px) rotateX(0deg) translateY(0) translateZ(0)"
                : "perspective(1000px) rotateX(20deg) translateY(60px) translateZ(-50px)",
              transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 350ms",
            }}
          >
            {/* Hover glow effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 80px rgba(212, 175, 55, 0.05)",
              }}
            />

            {/* Label */}
            <span className="inline-block bg-gold text-dark text-xs font-medium tracking-widest uppercase px-3 py-1 rounded">
              <span className="mr-1">&#10022;</span> GOLD
            </span>

            {/* Headline */}
            <h3 className="font-serif text-gold text-2xl md:text-3xl font-medium mt-4 mb-4 leading-tight">
              The Savri
              <br />
              Gold experience.
            </h3>

            {/* Description */}
            <p className="text-cream/65 text-sm leading-relaxed mb-8">
              Everything in Regular — elevated. For those who want the finest home dining experience Delhi has to offer.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {goldFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-cream/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Pricing tag */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-gold/60 text-gold text-xs font-medium">
                Pricing announced soon <span className="ml-1">&#10022;</span>
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToWaitlist}
              className="w-full bg-gold text-dark py-4 rounded-lg font-medium transition-all duration-150 hover:bg-gold-dark hover:scale-[1.01] active:scale-[0.99] hover:shadow-lg hover:shadow-gold/20"
            >
              Join Gold waitlist
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 md:mt-16">
          <p
            className="text-cream/50 text-sm mb-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.6s ease 600ms",
            }}
          >
            Not sure which plan is right?
            <br />
            Join the waitlist and we will help you choose at launch.
          </p>
          <p
            className="text-gold/70 text-xs"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.6s ease 700ms",
            }}
          >
            Gold members get priority access on launch day.
          </p>
        </div>
      </div>
    </section>
  )
}
