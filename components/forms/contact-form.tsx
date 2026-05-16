"use client"

import { useState } from "react"

import { contactReasons, FORMSPREE_ENDPOINT } from "@/lib/site-data"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: contactReasons[0],
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
          ...formData,
          source: "savri-contact-page",
          _replyto: formData.email,
          _subject: "New Savri Contact Enquiry",
        }),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        reason: contactReasons[0],
      })
    } catch {
      setError("Something went wrong. Please email us directly instead.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 px-5 py-6 text-sm font-medium text-emerald-800">
        Thanks. Your message is with Savri now. We&apos;ll reply soon.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[2rem] border border-dark/8 bg-white p-6 shadow-[0_16px_40px_rgba(26,26,26,0.06)] md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
          className="min-h-12 rounded-2xl border border-dark/10 px-4 py-3 text-dark placeholder:text-dark/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/15"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
          className="min-h-12 rounded-2xl border border-dark/10 px-4 py-3 text-dark placeholder:text-dark/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/15"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_220px]">
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
          className="min-h-12 rounded-2xl border border-dark/10 px-4 py-3 text-dark placeholder:text-dark/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/15"
        />
        <select
          value={formData.reason}
          onChange={(event) => setFormData((current) => ({ ...current, reason: event.target.value }))}
          className="min-h-12 rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/15"
        >
          {contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <textarea
        required
        rows={6}
        placeholder="Message"
        value={formData.message}
        onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
        className="w-full rounded-2xl border border-dark/10 px-4 py-3 text-dark placeholder:text-dark/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/15"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="min-h-12 w-full rounded-2xl bg-rose px-6 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {error ? <p className="text-sm text-rose-dark">{error}</p> : null}
    </form>
  )
}
