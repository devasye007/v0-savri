"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, Loader2, ShieldCheck } from "lucide-react"

import { BookingShell, BookingHeader, Stepper } from "@/components/booking/BookingShell"
import { MenuPicker } from "@/components/booking/MenuPicker"
import { NumberStepper } from "@/components/booking/NumberStepper"
import { FieldLabel, TextInput, TextArea, Select, FieldError } from "@/components/booking/form-fields"
import { dishById } from "@/lib/menu"
import {
  CITY_OPTIONS,
  PARTY_MIN_GUESTS,
  WAITER_COST,
  BARTENDER_COST,
  type City,
  type QuoteResponse,
  type CreateBookingResponse,
} from "@/lib/booking-types"
import { buildCheckoutUrl, formatINR } from "@/lib/cashfree-checkout"

const STEPS = ["Event", "Menu", "Staff", "Review"]

// 30-minute slots from 08:00 to the 20:00 hard cutoff.
const TIME_SLOTS = (() => {
  const slots: string[] = []
  for (let m = 8 * 60; m <= 20 * 60; m += 30) {
    const h = Math.floor(m / 60)
    const mm = m % 60
    slots.push(`${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`)
  }
  return slots
})()

function tomorrowISO(): string {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().slice(0, 10)
}

function labelForTime(t: string): string {
  const [h, m] = t.split(":").map(Number)
  const period = h >= 12 ? "PM" : "AM"
  const h12 = h % 12 === 0 ? 12 : h % 12
  return `${h12}:${String(m).padStart(2, "0")} ${period}`
}

export function PartyBookingClient() {
  const [step, setStep] = useState(0)

  // Contact + event
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState(PARTY_MIN_GUESTS)
  const [address, setAddress] = useState("")
  const [city, setCity] = useState<City>("Delhi")

  // Menu + staff
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [waiters, setWaiters] = useState(0)
  const [bartenders, setBartenders] = useState(0)

  // Terms + submission
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showErrors, setShowErrors] = useState(false)

  const minDate = useMemo(() => tomorrowISO(), [])
  const dishCount = selected.size

  const toggleDish = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  // ── Live quote (party). Server owns the numbers; we only display them. ──────
  const [quote, setQuote] = useState<QuoteResponse | null>(null)
  const [quoteLoading, setQuoteLoading] = useState(false)
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current)
    setQuoteLoading(true)
    debounce.current = setTimeout(async () => {
      try {
        const res = await fetch("/api/booking/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ guests, dishCount, city, waiters, bartenders }),
        })
        if (res.ok) setQuote((await res.json()) as QuoteResponse)
      } catch {
        /* keep last known quote */
      } finally {
        setQuoteLoading(false)
      }
    }, 300)
    return () => {
      if (debounce.current) clearTimeout(debounce.current)
    }
  }, [guests, dishCount, city, waiters, bartenders])

  // ── Per-step validation ─────────────────────────────────────────────────────
  const detailErrors = useMemo(() => {
    const e: Record<string, string> = {}
    if (name.trim().length < 2) e.name = "Please enter your name."
    if (!/^[+\d][\d\s-]{7,}$/.test(phone.trim())) e.phone = "Enter a valid phone number."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email."
    if (!date) e.date = "Choose a date."
    else if (date < minDate) e.date = "Bookings need at least 24 hours' notice."
    if (!time) e.time = "Choose a time."
    if (guests < PARTY_MIN_GUESTS) e.guests = `Minimum ${PARTY_MIN_GUESTS} guests.`
    if (address.trim().length < 6) e.address = "Enter your full address."
    return e
  }, [name, phone, email, date, time, guests, address, minDate])

  const canLeaveDetails = Object.keys(detailErrors).length === 0
  const canLeaveMenu = dishCount >= 1

  const next = () => {
    if (step === 0 && !canLeaveDetails) {
      setShowErrors(true)
      return
    }
    if (step === 1 && !canLeaveMenu) return
    setShowErrors(false)
    setStep((s) => Math.min(STEPS.length - 1, s + 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const back = () => {
    setStep((s) => Math.max(0, s - 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function submit() {
    if (!termsAccepted) return
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingType: "party",
          contact: { name: name.trim(), phone: phone.trim(), email: email.trim() },
          event: { date, time, guests, address: address.trim(), city },
          dishes: [...selected].map((id) => ({ id, name: dishById[id]?.name || id })),
          staff: { waiters, bartenders },
          termsAccepted: true,
        }),
      })
      const data = (await res.json()) as CreateBookingResponse & { error?: string }
      if (!res.ok || !data.paymentSessionId) {
        throw new Error(data.error || "Could not start payment.")
      }
      window.location.href = buildCheckoutUrl(data.paymentSessionId, data.cashfreeEnv)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.")
      setSubmitting(false)
    }
  }

  return (
    <BookingShell>
      <BookingHeader
        eyebrow="Party Booking"
        title="Book your party chef"
        subtitle="Full payment secures your date. Tell us the essentials, pick your dishes, and we handle the rest."
      />
      <Stepper steps={STEPS} current={step} />

      {step === 0 ? (
        <StepEvent
          values={{ name, phone, email, date, time, guests, address, city }}
          errors={showErrors ? detailErrors : {}}
          minDate={minDate}
          onChange={{ setName, setPhone, setEmail, setDate, setTime, setGuests, setAddress, setCity }}
        />
      ) : null}

      {step === 1 ? (
        <div>
          <SectionTitle title="Choose your dishes" hint={`${dishCount} selected`} />
          <MenuPicker selected={selected} onToggle={toggleDish} />
        </div>
      ) : null}

      {step === 2 ? (
        <StepStaff
          waiters={waiters}
          bartenders={bartenders}
          setWaiters={setWaiters}
          setBartenders={setBartenders}
        />
      ) : null}

      {step === 3 ? (
        <StepReview
          summary={{ name, phone, email, date, time, guests, address, city }}
          dishes={[...selected].map((id) => dishById[id]?.name || id)}
          quote={quote}
          termsAccepted={termsAccepted}
          setTermsAccepted={setTermsAccepted}
          submitting={submitting}
          submitError={submitError}
          onSubmit={submit}
        />
      ) : null}

      {/* Nav buttons (payment lives in review step) */}
      {step < 3 ? (
        <div className="mt-10 flex items-center justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-cream/80 transition hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={next}
            disabled={step === 1 && !canLeaveMenu}
            className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-cream transition hover:bg-rose-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="mt-8">
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-cream/80 transition hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </div>
      )}

      {/* Live total bar (from menu step onward) */}
      {step >= 1 ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
          <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-white/12 bg-dark/95 px-6 py-3 shadow-lg backdrop-blur">
            <span className="text-sm text-cream/60">Estimated total</span>
            <span className="text-lg font-semibold text-cream">
              {quoteLoading && !quote ? "…" : quote ? formatINR(quote.total) : "—"}
            </span>
          </div>
        </div>
      ) : null}
    </BookingShell>
  )
}

function SectionTitle({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="mb-5 flex items-baseline justify-between">
      <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      {hint ? <span className="text-sm text-gold">{hint}</span> : null}
    </div>
  )
}

// ─── Step 1: Event + contact details ──────────────────────────────────────────
function StepEvent({
  values,
  errors,
  minDate,
  onChange,
}: {
  values: {
    name: string
    phone: string
    email: string
    date: string
    time: string
    guests: number
    address: string
    city: City
  }
  errors: Record<string, string>
  minDate: string
  onChange: {
    setName: (v: string) => void
    setPhone: (v: string) => void
    setEmail: (v: string) => void
    setDate: (v: string) => void
    setTime: (v: string) => void
    setGuests: (v: number) => void
    setAddress: (v: string) => void
    setCity: (v: City) => void
  }
}) {
  return (
    <div className="space-y-8">
      <div>
        <SectionTitle title="Your details" />
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <TextInput id="name" value={values.name} onChange={(e) => onChange.setName(e.target.value)} placeholder="Your name" />
            <FieldError>{errors.name}</FieldError>
          </div>
          <div>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <TextInput id="phone" inputMode="tel" value={values.phone} onChange={(e) => onChange.setPhone(e.target.value)} placeholder="10-digit mobile" />
            <FieldError>{errors.phone}</FieldError>
          </div>
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <TextInput id="email" type="email" value={values.email} onChange={(e) => onChange.setEmail(e.target.value)} placeholder="you@example.com" />
            <FieldError>{errors.email}</FieldError>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle title="Event details" />
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="date">Date</FieldLabel>
            <TextInput id="date" type="date" min={minDate} value={values.date} onChange={(e) => onChange.setDate(e.target.value)} />
            <FieldError>{errors.date}</FieldError>
          </div>
          <div>
            <FieldLabel htmlFor="time">Time</FieldLabel>
            <Select id="time" value={values.time} onChange={(e) => onChange.setTime(e.target.value)}>
              <option value="">Select a slot</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {labelForTime(t)}
                </option>
              ))}
            </Select>
            <p className="mt-1.5 text-xs text-cream/50">Last booking slot is 8:00 PM.</p>
            <FieldError>{errors.time}</FieldError>
          </div>
          <div>
            <FieldLabel>Guests</FieldLabel>
            <div className="flex items-center gap-3">
              <NumberStepper value={values.guests} onChange={onChange.setGuests} min={PARTY_MIN_GUESTS} max={500} ariaLabel="guests" />
              <span className="text-sm text-cream/50">min {PARTY_MIN_GUESTS}</span>
            </div>
            <FieldError>{errors.guests}</FieldError>
          </div>
          <div>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Select id="city" value={values.city} onChange={(e) => onChange.setCity(e.target.value as City)}>
              {CITY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </div>
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="address">Full address</FieldLabel>
            <TextArea id="address" value={values.address} onChange={(e) => onChange.setAddress(e.target.value)} placeholder="House / flat, street, locality, landmark" />
            <FieldError>{errors.address}</FieldError>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Step 3: Staff add-ons ────────────────────────────────────────────────────
function StepStaff({
  waiters,
  bartenders,
  setWaiters,
  setBartenders,
}: {
  waiters: number
  bartenders: number
  setWaiters: (n: number) => void
  setBartenders: (n: number) => void
}) {
  return (
    <div>
      <SectionTitle title="Add staff (optional)" />
      <p className="mb-6 max-w-lg text-cream/70">
        Waiters and bartenders are optional. Add as many as you need — the running cost updates below.
      </p>
      <div className="space-y-4">
        <StaffRow
          title="Waiters"
          rate={WAITER_COST}
          count={waiters}
          onChange={setWaiters}
        />
        <StaffRow
          title="Bartenders"
          rate={BARTENDER_COST}
          count={bartenders}
          onChange={setBartenders}
        />
      </div>
    </div>
  )
}

function StaffRow({
  title,
  rate,
  count,
  onChange,
}: {
  title: string
  rate: number
  count: number
  onChange: (n: number) => void
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <div>
        <p className="font-medium text-cream">
          {title} — {formatINR(rate)} each
        </p>
        <p className="mt-0.5 text-sm text-cream/55">
          {count > 0 ? `${count} × ${formatINR(rate)} = ${formatINR(count * rate)}` : "None added"}
        </p>
      </div>
      <NumberStepper value={count} onChange={onChange} min={0} max={30} ariaLabel={title} />
    </div>
  )
}

// ─── Step 4: Review & terms ───────────────────────────────────────────────────
const TERMS = [
  "Ingredients are arranged by me — Savri will send a complete ingredient list for my selected dishes after booking.",
  "If cooking runs past my requested ready time, a surge charge of ₹999/hour plus a convenience fee applies.",
  "The chef will send completion photos immediately after cooking.",
  "If the session runs past 8:30 PM, I will arrange return transport for the chef.",
  "The last booking slot is 8:00 PM.",
]

function StepReview({
  summary,
  dishes,
  quote,
  termsAccepted,
  setTermsAccepted,
  submitting,
  submitError,
  onSubmit,
}: {
  summary: {
    name: string
    phone: string
    email: string
    date: string
    time: string
    guests: number
    address: string
    city: City
  }
  dishes: string[]
  quote: QuoteResponse | null
  termsAccepted: boolean
  setTermsAccepted: (v: boolean) => void
  submitting: boolean
  submitError: string | null
  onSubmit: () => void
}) {
  return (
    <div className="space-y-8">
      <div>
        <SectionTitle title="Review your booking" />
        <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2">
          <SummaryItem label="Date" value={summary.date} />
          <SummaryItem label="Time" value={labelForTime(summary.time || "20:00")} />
          <SummaryItem label="Guests" value={String(summary.guests)} />
          <SummaryItem label="City" value={summary.city} />
          <SummaryItem label="Name" value={summary.name} />
          <SummaryItem label="Phone" value={summary.phone} />
          <div className="sm:col-span-2">
            <SummaryItem label="Address" value={summary.address} />
          </div>
        </div>
      </div>

      <div>
        <SectionTitle title={`Selected dishes (${dishes.length})`} />
        <div className="flex flex-wrap gap-2">
          {dishes.map((d) => (
            <span key={d} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-cream/80">
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Price summary — bundled Chef & Service, staff line items, total. */}
      <div>
        <SectionTitle title="Price" />
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <PriceRow label="Chef & Service" value={quote ? formatINR(quote.chefService) : "…"} />
          {quote && quote.waiters.count > 0 ? (
            <PriceRow label={`Waiters (${quote.waiters.count})`} value={formatINR(quote.waiters.cost)} />
          ) : null}
          {quote && quote.bartenders.count > 0 ? (
            <PriceRow label={`Bartenders (${quote.bartenders.count})`} value={formatINR(quote.bartenders.cost)} />
          ) : null}
          <div className="mt-3 border-t border-white/10 pt-3">
            <PriceRow label="Total" value={quote ? formatINR(quote.total) : "…"} emphasis />
          </div>
        </div>
      </div>

      {/* Ingredients notice — prominent, bordered callout. */}
      <div className="rounded-2xl border-2 border-gold/60 bg-gold/[0.06] p-5">
        <p className="mb-1 flex items-center gap-2 font-semibold text-gold">
          <ShieldCheck className="h-5 w-5" /> Ingredients are arranged by you
        </p>
        <p className="text-sm leading-relaxed text-cream/80">
          After booking, we will send you a complete ingredient list for your selected dishes so you can arrange
          them before your chef arrives. Ingredient costs are not included in this price.
        </p>
      </div>

      {/* Terms + acceptance gate */}
      <div>
        <SectionTitle title="Before you pay" />
        <ul className="mb-4 space-y-2">
          {TERMS.map((t) => (
            <li key={t} className="flex gap-2 text-sm text-cream/75">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
              {t}
            </li>
          ))}
        </ul>
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/12 bg-white/[0.03] p-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#B5636A]"
          />
          <span className="text-sm text-cream/85">
            I have read and accept all of the above terms.
          </span>
        </label>
      </div>

      {submitError ? (
        <p className="rounded-xl border border-rose/40 bg-rose/10 px-4 py-3 text-sm text-rose">{submitError}</p>
      ) : null}

      <button
        type="button"
        onClick={onSubmit}
        disabled={!termsAccepted || submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-4 text-base font-semibold text-cream transition hover:bg-rose-dark disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Starting payment…
          </>
        ) : (
          <>Pay {quote ? formatINR(quote.total) : ""} &amp; confirm</>
        )}
      </button>
      <p className="text-xs text-cream/45">Full payment upfront. You'll be redirected to Cashfree's secure checkout.</p>
    </div>
  )
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-cream/45">{label}</p>
      <p className="mt-0.5 text-cream">{value || "—"}</p>
    </div>
  )
}

function PriceRow({ label, value, emphasis }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className={emphasis ? "text-base font-semibold text-cream" : "text-cream/75"}>{label}</span>
      <span className={emphasis ? "text-lg font-semibold text-cream" : "text-cream/90"}>{value}</span>
    </div>
  )
}
