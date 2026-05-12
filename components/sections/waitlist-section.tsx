"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Check, Copy, MessageCircle } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreyaowo"

function generateReferralCode(name: string): string {
  const first =
    name.trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, "") || "user"
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  const rand = Array.from({ length: 4 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("")
  return `${first}-${rand}`
}

// ── Referral Section (shown after successful submission) ─────────────────────

function ReferralSection({ referralCode }: { referralCode: string }) {
  const [copied, setCopied] = useState(false)
  const link = `savri.co.in/?ref=${referralCode}`
  const fullLink = `https://savri.co.in/?ref=${referralCode}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullLink)
    } catch {
      // Fallback for older browsers
      const el = document.createElement("input")
      el.value = fullLink
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const waText = encodeURIComponent(
    `Hey! I just joined the waitlist for Savri — Delhi NCR's first private chef booking platform launching June 2026. Join using my link and we both get ₹100 off our first booking: ${link}`
  )
  const waLink = `https://wa.me/?text=${waText}`

  return (
    <div
      className="mt-8 rounded-2xl p-6 text-left animate-fade-in"
      style={{ backgroundColor: "#222222" }}
    >
      {/* Heading */}
      <p className="text-cream font-semibold text-base mb-1">
        Share Savri with a friend.
      </p>
      <p className="text-cream/60 text-sm leading-relaxed mb-5">
        When they join using your link, you both get{" "}
        <span className="text-rose font-medium">₹100 off</span> your first
        booking at launch.
      </p>

      {/* Link input + copy */}
      <div className="flex gap-2 mb-4">
        <div
          className="flex-1 px-4 py-3 rounded-lg border border-cream/10 text-cream/70 text-sm font-mono truncate select-all"
          style={{ backgroundColor: "#1A1A1A" }}
        >
          {link}
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 flex items-center gap-1.5 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            backgroundColor: copied ? "rgba(181,99,106,0.15)" : "rgba(181,99,106,0.1)",
            border: "1px solid rgba(181,99,106,0.3)",
            color: copied ? "#B5636A" : "#F5F0EB",
          }}
        >
          <Copy className="w-4 h-4" strokeWidth={1.8} />
          {copied ? "Copied! ✓" : "Copy"}
        </button>
      </div>

      {/* Share buttons */}
      <div className="flex gap-3">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{ backgroundColor: "#25D366", color: "#fff" }}
        >
          <MessageCircle className="w-4 h-4" strokeWidth={1.8} />
          Share on WhatsApp
        </a>
        <button
          onClick={handleCopy}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium border border-cream/10 text-cream/70 hover:text-cream hover:border-cream/30 transition-all duration-200"
          style={{ backgroundColor: "#1A1A1A" }}
        >
          <Copy className="w-4 h-4" strokeWidth={1.8} />
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  )
}

// ── Main Section ─────────────────────────────────────────────────────────────

export function WaitlistSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    plan_interest: "",
    whatsapp: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [referralCode, setReferralCode] = useState("")
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
          whatsapp: formData.whatsapp,
          _replyto: "founder@savri.co.in",
          _subject: "New Savri Waitlist Signup",
        }),
      })

      if (response.ok) {
        setReferralCode(generateReferralCode(formData.name))
        setIsSubmitted(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch {
      setError(
        "Something went wrong. Please email us directly at founder@savri.co.in"
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

          {/* Form or Success state */}
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
              <input type="hidden" name="_replyto" value="founder@savri.co.in" />
              <input type="hidden" name="_subject" value="New Savri Waitlist Signup" />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
              />
              <input
                type="text"
                name="area"
                placeholder="Your area in Delhi NCR"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
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

              <div>
                <label className="block text-cream/60 text-xs font-medium mb-1 text-left pl-1">
                  WhatsApp Number <span className="text-cream/40">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Your WhatsApp number"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsapp: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-dark-light border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/50 transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose text-cream px-8 py-4 rounded-lg text-lg font-medium transition-all duration-150 hover:bg-rose-dark hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? "Joining..." : "I want early access"}
              </button>

              {error && (
                <p className="text-red-400 text-sm mt-4 animate-fade-in">{error}</p>
              )}
            </form>
          ) : (
            /* ── Success + Referral state ── */
            <div className="animate-fade-in">
              {/* Checkmark + confirmation */}
              <div className="py-8">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose mb-6"
                  style={{
                    animation: "scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                  }}
                >
                  <Check className="w-10 h-10 text-cream" strokeWidth={2.5} />
                </div>

                <p className="font-serif text-rose text-2xl md:text-3xl mb-3">
                  You're on the list! 🎉
                </p>

                <p className="text-cream/70 text-base md:text-lg leading-relaxed mb-2">
                  Savri launches in Delhi NCR, June 2026.
                  <br />
                  We'll reach out on WhatsApp when bookings open.
                </p>

                <p className="text-gold text-sm">
                  Check founder@savri.co.in is not in your spam —
                  <br />
                  that is where our reply comes from.
                </p>
              </div>

              {/* Referral section */}
              <ReferralSection referralCode={referralCode} />
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

      <style jsx>{`
        @keyframes scale-in {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
