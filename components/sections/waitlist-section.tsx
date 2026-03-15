"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

export function WaitlistSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    useCase: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In production, this would send to Formspree, Tally, or your backend
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section ref={ref} id="waitlist" className="min-h-screen py-24 md:py-32 bg-dark flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          {/* Headline */}
          <h2
            className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-medium mb-4 transition-all duration-600"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Delhi — {"we're"} almost ready.
          </h2>

          {/* Date */}
          <p
            className="text-gold text-xl md:text-2xl font-serif font-medium mb-8 transition-all duration-600"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "100ms",
            }}
          >
            June 2026.
          </p>

          {/* Sub-text */}
          <p
            className="text-cream/70 text-base md:text-lg leading-relaxed mb-12 transition-all duration-600"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "200ms",
            }}
          >
            Be first when Savri goes live in your neighbourhood.
            <br />
            Join the waitlist and get early access before anyone else.
          </p>

          {/* Form or Success Message */}
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 transition-all duration-600"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "300ms",
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
              />
              <input
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Your area in Delhi"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
              />
              <select
                value={formData.useCase}
                onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F5F0EB' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1.5rem",
                }}
              >
                <option value="" disabled className="text-cream/40">
                  I want Savri for
                </option>
                <option value="daily" className="bg-dark text-cream">
                  Daily meals
                </option>
                <option value="parties" className="bg-dark text-cream">
                  Parties and events
                </option>
                <option value="both" className="bg-dark text-cream">
                  Both
                </option>
              </select>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose text-cream px-8 py-4 rounded-lg text-lg font-medium transition-all duration-150 hover:bg-rose-dark hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? "Joining..." : "I want early access"}
              </button>
            </form>
          ) : (
            <div
              className="py-12 animate-fade-in"
            >
              <p className="font-serif text-cream text-2xl md:text-3xl mb-2">
                {"You're on the list."}
              </p>
              <p className="text-cream/70 text-lg">
                {"We'll see you in June."} <span className="text-rose">&#10084;</span>
              </p>
            </div>
          )}

          {/* Privacy note */}
          {!isSubmitted && (
            <p
              className="text-gold/70 text-sm mt-6 transition-all duration-600"
              style={{
                opacity: isInView ? 1 : 0,
                transitionDelay: "500ms",
              }}
            >
              No spam. Ever.
              <br />
              We will contact you when Savri launches in your area.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
