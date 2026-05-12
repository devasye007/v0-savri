"use client"

import { useInView } from "@/hooks/use-in-view"
import { useScroll3D } from "@/hooks/use-scroll-3d"
import { Check } from "lucide-react"

const regularFeatures = [
  "Breakfast/Lunch + Dinner daily",
  "Verified private chef",
  "Fresh cooked in your kitchen",
  "Customised to your taste",
  "Substitute chef guaranteed",
  "AI-powered weekly meal plan",
  "Cancel anytime",
]

const goldFeatures = [
  "Breakfast + Lunch + Dinner daily",
  "Everything in Regular",
  "Priority chef matching",
  "Premium and luxury cuisines",
  "Exclusive Gold member events",
  "Early access to new features",
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
          className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-4 leading-tight"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "perspective(1000px) rotateX(0deg) translateY(0)"
              : "perspective(1000px) rotateX(15deg) translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          Two plans.
          <br />
          One promise.
        </h2>

        {/* Sub-headline */}
        <p
          className="text-cream/60 text-base md:text-lg text-center mb-16 md:mb-20 max-w-md mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 100ms",
          }}
        >
          Fresh home-cooked food — every single day.
          <br />
          Per month pricing announced at launch.
          <br />
          Join the waitlist to be first.
        </p>

        {/* Plan Cards */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto perspective-container">
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
            {/* Meal badge - prominent on mobile */}
            <div className="mb-4">
              <span className="inline-block bg-rose/20 border border-rose/40 text-rose text-xs font-medium tracking-wide px-3 py-1.5 rounded-full">
                2 meals/day
              </span>
            </div>

            {/* Label */}
            <span className="text-rose text-xs font-medium tracking-widest uppercase">
              REGULAR
            </span>

            {/* Headline */}
            <h3 className="font-serif text-cream text-2xl md:text-3xl font-medium mt-3 mb-2 leading-tight">
              2 meals a day.
              <br />
              Every day.
            </h3>

            {/* Meal detail */}
            <p className="text-gold text-sm font-medium mb-4">
              Breakfast/Lunch + Dinner
            </p>

            {/* Description */}
            <p className="text-cream/65 text-sm leading-relaxed mb-8">
              A verified Savri chef comes to your home and cooks two meals fresh every day. Choose breakfast or lunch, plus dinner. Same chef. Same kitchen. Same care — every single day.
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

            {/* Pricing area */}
            <div className="mb-6 space-y-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-rose/15 border border-rose/30 text-rose text-xs font-medium">
                2 meals/day
              </span>
              <p className="text-cream/50 text-xs">
                Per month pricing —
                <br />
                announced at launch
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToWaitlist}
              className="w-full bg-rose text-cream py-4 rounded-lg font-medium transition-all duration-150 hover:bg-rose-dark hover:scale-[1.01] active:scale-[0.99]"
            >
              Join waitlist
            </button>
          </div>

          {/* VS Divider - visible on large screens */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-dark border border-cream/20 text-cream/60 text-xs font-medium">
              vs
            </span>
          </div>

          {/* VS Divider - visible on mobile */}
          <div className="flex lg:hidden items-center justify-center -my-1">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-dark border border-cream/20 text-cream/60 text-xs font-medium">
              vs
            </span>
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

            {/* Meal badge - prominent on mobile */}
            <div className="mb-4 relative z-10">
              <span className="inline-block bg-gold/20 border border-gold/50 text-gold text-xs font-medium tracking-wide px-3 py-1.5 rounded-full">
                3 meals/day <span className="ml-0.5">&#10022;</span>
              </span>
            </div>

            {/* Label */}
            <span className="inline-block bg-gold text-dark text-xs font-medium tracking-widest uppercase px-3 py-1 rounded relative z-10">
              <span className="mr-1">&#10022;</span> GOLD
            </span>

            {/* Headline */}
            <h3 className="font-serif text-gold text-2xl md:text-3xl font-medium mt-3 mb-2 leading-tight relative z-10">
              3 meals a day.
              <br />
              The Gold way.
            </h3>

            {/* Meal detail */}
            <p className="text-gold text-sm font-medium mb-4 relative z-10">
              Breakfast + Lunch + Dinner
            </p>

            {/* Description */}
            <p className="text-cream/65 text-sm leading-relaxed mb-8 relative z-10">
              Your entire day — handled. A Savri Gold chef arrives for breakfast, returns for lunch and dinner. The complete home dining experience — every single day.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8 relative z-10">
              {goldFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-cream/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Pricing area */}
            <div className="mb-6 space-y-2 relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-medium">
                3 meals/day <span className="ml-0.5">&#10022;</span>
              </span>
              <p className="text-cream/50 text-xs">
                Per month pricing —
                <br />
                announced at launch
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToWaitlist}
              className="w-full bg-gold text-dark py-4 rounded-lg font-medium transition-all duration-150 hover:bg-gold-dark hover:scale-[1.01] active:scale-[0.99] hover:shadow-lg hover:shadow-gold/20 relative z-10"
            >
              Join Gold waitlist
            </button>
          </div>
        </div>

        {/* Event Pricing Table */}
        <div
          className="mt-20 md:mt-28 max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 450ms",
          }}
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-cream text-2xl md:text-3xl font-medium mb-3">
              One-time bookings & events
            </h3>
            <p className="text-cream/50 text-sm md:text-base">
              Parties, dinners, celebrations — priced per booking by guest count.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { guests: "1–3 guests", price: "₹549", popular: false },
              { guests: "4–6 guests", price: "₹799", popular: false },
              { guests: "7–10 guests", price: "₹1,199", popular: true },
              { guests: "11–15 guests", price: "₹1,699", popular: false },
              { guests: "16–20 guests", price: "₹2,099", popular: false },
              { guests: "20+ guests", price: "₹2,499+", popular: false },
            ].map(({ guests, price, popular }) => (
              <div
                key={guests}
                className="relative rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#222222",
                  border: popular ? "1.5px solid #B5636A" : "1px solid rgba(245,240,235,0.08)",
                  boxShadow: popular ? "0 0 30px rgba(181,99,106,0.12)" : "none",
                }}
              >
                {popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                    style={{ backgroundColor: "#B5636A", color: "#F5F0EB" }}
                  >
                    Most Popular
                  </span>
                )}
                <p className="text-cream font-semibold text-sm md:text-base leading-tight">
                  {guests}
                </p>
                <p
                  className="font-serif text-2xl md:text-3xl font-medium"
                  style={{ color: "#B5636A" }}
                >
                  {price}
                </p>
                <p className="text-cream/40 text-xs">per booking · GST inclusive</p>
                <a
                  href="#waitlist"
                  className="mt-1 block text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    backgroundColor: popular ? "#B5636A" : "transparent",
                    border: popular ? "none" : "1px solid rgba(181,99,106,0.35)",
                    color: popular ? "#F5F0EB" : "#B5636A",
                  }}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 md:mt-16 max-w-xl mx-auto">
          <p
            className="text-cream/60 text-sm mb-4 leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.6s ease 600ms",
            }}
          >
            Both plans include the same verified chef quality and substitute guarantee.
            <br />
            Gold adds breakfast and elevates the entire experience.
          </p>
          <p
            className="text-gold/80 text-xs"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.6s ease 700ms",
            }}
          >
            Per month pricing for both plans announced at launch.
            <br />
            Gold members get priority access on launch day. <span className="ml-0.5">&#10022;</span>
          </p>
        </div>
      </div>
    </section>
  )
}
