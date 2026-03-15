"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Check } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreyaowo"

export function WaitlistSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    plan_interest: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          area: formData.area,
          plan_interest: formData.plan_interest,
          _replyto: "savrifounder@gmail.com",
          _subject: "New Savri Waitlist Signup",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch {
      setError(
        "Something went wrong. Please email us directly at savrifounder@gmail.com"
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      id="waitlist"
      className="min-h-screen py-24 md:py-32 bg-dark flex items-center"
    >
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
              {/* Hidden fields for Formspree */}
              <input type="hidden" name="_replyto" value="savrifounder@gmail.com" />
              <input type="hidden" name="_subject" value="New Savri Waitlist Signup" />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
              />
              <input
                type="text"
                name="area"
                placeholder="Your area in Delhi NCR"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
              />
              <select
                name="plan_interest"
                value={formData.plan_interest}
                onChange={(e) =>
                  setFormData({ ...formData, plan_interest: e.target.value })
                }
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
                  I am interested in
                </option>
                <option value="Regular Plan — daily meals" className="bg-dark text-cream">
                  Regular Plan — daily meals
                </option>
                <option value="Gold Plan — premium experience" className="bg-dark text-cream">
                  Gold Plan — premium experience
                </option>
                <option value="Party and events only" className="bg-dark text-cream">
                  Party and events only
                </option>
                <option value="Not sure yet — tell me more" className="bg-dark text-cream">
                  Not sure yet — tell me more
                </option>
              </select>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose text-cream px-8 py-4 rounded-lg text-lg font-medium transition-all duration-150 hover:bg-rose-dark hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? "Joining..." : "I want early access"}
              </button>

              {/* Error message */}
              {error && (
                <p className="text-red-400 text-sm mt-4 animate-fade-in">
                  {error}
                </p>
              )}
            </form>
          ) : (
            /* Success Message */
            <div className="py-12 animate-fade-in">
              {/* Animated checkmark */}
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose mb-6"
                style={{
                  animation: "scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                }}
              >
                <Check className="w-10 h-10 text-cream" strokeWidth={2.5} />
              </div>

              <p className="font-serif text-cream text-2xl md:text-3xl mb-4">
                {"You're on the list."}
              </p>

              <p className="text-cream/70 text-lg leading-relaxed mb-6">
                We will reach out to you personally before
                <br />
                Savri launches in your area this June.
              </p>

              <p className="text-gold text-sm">
                Check savrifounder@gmail.com is not in your spam —
                <br />
                that is where our reply comes from.
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

      {/* Scale-in animation for checkmark */}
      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
