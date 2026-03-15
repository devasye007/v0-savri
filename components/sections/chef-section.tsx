"use client"

import { useInView } from "@/hooks/use-in-view"
import { Check } from "lucide-react"
import Image from "next/image"

const chefBenefits = [
  "Flexible working hours",
  "Verified Savri badge",
  "Consistent bookings",
  "Direct household relationships",
  "Professional growth",
  "Work in premium Delhi homes",
]

const lookingFor = [
  "Trained and experienced chefs",
  "North Indian cuisine specialists",
  "Party and event chefs",
  "Continental and specialty cuisines",
  "Hotel management graduates",
  "Passionate about home cooking",
]

export function ChefSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Headline */}
              <h2
                className="font-serif text-rose text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 transition-all duration-600"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                Are you a trained chef
                <br />
                in Delhi NCR?
              </h2>

              {/* Sub-headline */}
              <p
                className="text-dark/70 text-lg leading-relaxed mb-10 max-w-lg transition-all duration-600"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: "100ms",
                }}
              >
                Savri is building a network of verified private chefs launching this June.
                Work flexible hours. Build your own client base. Cook what you love.
              </p>

              {/* Two columns of benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
                <div>
                  <h3
                    className="text-dark font-medium text-sm uppercase tracking-wide mb-4 transition-all duration-600"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transitionDelay: "200ms",
                    }}
                  >
                    What you get
                  </h3>
                  <ul className="space-y-2">
                    {chefBenefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-dark/70 text-sm transition-all duration-600"
                        style={{
                          opacity: isInView ? 1 : 0,
                          transform: isInView ? "translateX(0)" : "translateX(-10px)",
                          transitionDelay: `${250 + index * 50}ms`,
                        }}
                      >
                        <Check className="w-4 h-4 text-rose flex-shrink-0" strokeWidth={2} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-dark font-medium text-sm uppercase tracking-wide mb-4 mt-6 sm:mt-0 transition-all duration-600"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transitionDelay: "200ms",
                    }}
                  >
                    Who we are looking for
                  </h3>
                  <ul className="space-y-2">
                    {lookingFor.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-dark/70 text-sm transition-all duration-600"
                        style={{
                          opacity: isInView ? 1 : 0,
                          transform: isInView ? "translateX(0)" : "translateX(-10px)",
                          transitionDelay: `${250 + index * 50}ms`,
                        }}
                      >
                        <Check className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div
                className="transition-all duration-600"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: "600ms",
                }}
              >
                <a
                  href="#chef-apply"
                  className="inline-block bg-rose text-cream px-8 py-4 rounded-lg text-base font-medium transition-all duration-150 hover:bg-rose-dark hover:scale-[1.02] active:scale-[0.98]"
                >
                  Apply to be a Savri chef
                </a>
                
                {/* Early application contact */}
                <p className="text-dark/60 text-sm mt-4">
                  Want to apply early? Drop us a message at{" "}
                  <a 
                    href="mailto:savrifounder@gmail.com" 
                    className="text-rose hover:text-rose-dark underline underline-offset-2 transition-colors"
                  >
                    savrifounder@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="relative transition-all duration-700"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(20px)",
                transitionDelay: "300ms",
              }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/chef-cooking.jpg"
                  alt="Professional chef cooking in a home kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-rose/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
