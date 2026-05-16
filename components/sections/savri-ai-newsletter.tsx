"use client"

import { useState } from "react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreyaowo"

export function SavriAiNewsletter() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    notifyAi: true,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          notify_ai_features: formData.notifyAi ? "yes" : "no",
          source: "savri-ai-page",
          _replyto: formData.email,
          _subject: "New Savri AI Waitlist Signup",
        }),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      setIsSubmitted(true)
      setFormData({
        email: "",
        name: "",
        phone: "",
        notifyAi: true,
      })
    } catch {
      setError("Something went wrong. Please email founder@savri.co.in instead.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-[2rem] border border-rose/15 bg-[#fffaf4] p-6 shadow-[0_20px_60px_rgba(26,26,26,0.08)] md:p-8">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="email"
              required
              value={formData.email}
              onChange={(event) =>
                setFormData((current) => ({ ...current, email: event.target.value }))
              }
              placeholder="Email address"
              className="min-h-12 rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark placeholder:text-dark/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/15"
            />
            <input
              type="text"
              value={formData.name}
              onChange={(event) =>
                setFormData((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Name (optional)"
              className="min-h-12 rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark placeholder:text-dark/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/15"
            />
          </div>

          <input
            type="tel"
            value={formData.phone}
            onChange={(event) =>
              setFormData((current) => ({ ...current, phone: event.target.value }))
            }
            placeholder="Phone (optional)"
            className="min-h-12 w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark placeholder:text-dark/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/15"
          />

          <label className="flex items-start gap-3 rounded-2xl border border-dark/8 bg-white px-4 py-3 text-sm text-dark/75">
            <input
              type="checkbox"
              checked={formData.notifyAi}
              onChange={(event) =>
                setFormData((current) => ({ ...current, notifyAi: event.target.checked }))
              }
              className="mt-1 h-4 w-4 rounded border-dark/20 accent-rose"
            />
            <span>Notify me about AI features</span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="min-h-12 w-full rounded-2xl bg-rose px-6 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </button>

          {error ? <p className="text-sm text-rose-dark">{error}</p> : null}
          <p className="text-sm text-dark/55">No spam. Just 1 email when Savri AI is ready.</p>
        </form>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-5 text-sm font-medium text-emerald-800">
          ✅ Thanks! You&apos;re on the list. We&apos;ll notify you when Savri AI launches.
        </div>
      )}
    </div>
  )
}
