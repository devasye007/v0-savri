"use client"

import { useCallback, useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react"

import { BookingShell, BookingHeader, Stepper } from "@/components/booking/BookingShell"
import { MenuPicker } from "@/components/booking/MenuPicker"
import { FieldLabel, TextInput, TextArea, Select, FieldError } from "@/components/booking/form-fields"
import { dishById } from "@/lib/menu"
import {
  CITY_OPTIONS,
  DAILY_TABLES,
  EXTRA_DISH_PRICE,
  type City,
  type CreateBookingResponse,
} from "@/lib/booking-types"
import { buildCheckoutUrl, formatINR } from "@/lib/cashfree-checkout"

const STEPS = ["Table", "Menu", "Review"]
type Table = "small_table" | "full_table"

// 30-minute slots from 08:00 to the 20:00 hard cutoff.
const TIME_SLOTS = (() => {
  const slots: string[] = []
  for (let m = 8 * 60; m <= 20 * 60; m += 30) {
    const h = Math.floor(m / 60)
    slots.push(`${String(h).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`)
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

export function DailyBookingClient() {
  const [step, setStep] = useState(0)
  const [table, setTable] = useState<Table>("small_table")

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState<City>("Delhi")

  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showErrors, setShowErrors] = useState(false)

  const minDate = useMemo(() => tomorrowISO(), [])
  const config = DAILY_TABLES[table]
  const dishCount = selected.size
  const included = config.includedDishes
  const extraDishes = Math.max(0, dishCount - included)
  const total = config.base + extraDishes * EXTRA_DISH_PRICE

  const toggleDish = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const detailErrors = useMemo(() => {
    const e: Record<string, string> = {}
    if (name.trim().length < 2) e.name = "Please enter your name."
    if (!/^[+\d][\d\s-]{7,}$/.test(phone.trim())) e.phone = "Enter a valid phone number."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email."
    if (!date) e.date = "Choose a date."
    else if (date < minDate) e.date = "Bookings need at least 24 hours' notice."
    if (!time) e.time = "Choose a time."
    if (address.trim().length < 6) e.address = "Enter your full address."
    return e
  }, [name, phone, email, date, time, address, minDate])

  const canLeaveDetails = Object.keys(detailErrors).length === 0
  const canLeaveMenu = dishCount >= included

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
          bookingType: table,
          contact: { name: name.trim(), phone: phone.trim(), email: email.trim() },
          event: { date, time, guests: table === "full_table" ? 6 : 3, address: address.trim(), city },
          dishes: [...selected].map((id) => ({ id, name: dishById[id]?.name || id })),
          staff: { waiters: 0, bartenders: 0 },
          termsAccepted: true,
        }),
      })
      const data = (await res.json()) as CreateBookingResponse & { error?: string }
      if (!res.ok || !data.paymentSessionId) throw new Error(data.error || "Could not start payment.")
      window.location.href = buildCheckoutUrl(data.paymentSessionId, data.cashfreeEnv)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.")
      setSubmitting(false)
    }
  }

  return (
    <BookingShell>
      <BookingHeader
        eyebrow="Daily Meals"
        title="Book a chef at home"
        subtitle="Fresh, restaurant-quality food cooked in your kitchen. Pick a table, choose your dishes, pay online."
      />
      <Stepper steps={STEPS} current={step} />

      {step === 0 ? (
        <div className="space-y-8">
          <div>
            <h2 className="mb-5 font-serif text-2xl font-semibold">Choose your table</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {(Object.keys(DAILY_TABLES) as Table[]).map((t) => {
                const c = DAILY_TABLES[t]
                const on = table === t
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTable(t)}
                    aria-pressed={on}
                    className={`rounded-2xl border p-5 text-left transition ${
                      on ? "border-rose bg-rose/15" : "border-white/12 bg-white/[0.03] hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-serif text-xl font-semibold text-cream">{c.label}</p>
                      {on ? <Check className="h-5 w-5 text-rose" /> : null}
                    </div>
                    <p className="mt-1 text-sm text-cream/60">{c.guests}</p>
                    <p className="mt-4 text-2xl font-semibold text-cream">{formatINR(c.base)}</p>
                    <p className="mt-1 text-sm text-cream/60">
                      {c.includedDishes} dishes included · extra dishes {formatINR(EXTRA_DISH_PRICE)} each
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-serif text-2xl font-semibold">Your details</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="name">Full name</FieldLabel>
                <TextInput id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                <FieldError>{showErrors ? detailErrors.name : ""}</FieldError>
              </div>
              <div>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <TextInput id="phone" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" />
                <FieldError>{showErrors ? detailErrors.phone : ""}</FieldError>
              </div>
              <div className="sm:col-span-2">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <TextInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                <FieldError>{showErrors ? detailErrors.email : ""}</FieldError>
              </div>
              <div>
                <FieldLabel htmlFor="date">Date</FieldLabel>
                <TextInput id="date" type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} />
                <FieldError>{showErrors ? detailErrors.date : ""}</FieldError>
              </div>
              <div>
                <FieldLabel htmlFor="time">Serve time</FieldLabel>
                <Select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value="">Select a slot</option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>
                      {labelForTime(t)}
                    </option>
                  ))}
                </Select>
                <p className="mt-1.5 text-xs text-cream/50">Last booking slot is 8:00 PM.</p>
                <FieldError>{showErrors ? detailErrors.time : ""}</FieldError>
              </div>
              <div>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <Select id="city" value={city} onChange={(e) => setCity(e.target.value as City)}>
                  {CITY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="sm:col-span-2">
                <FieldLabel htmlFor="address">Full address</FieldLabel>
                <TextArea id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="House / flat, street, locality, landmark" />
                <FieldError>{showErrors ? detailErrors.address : ""}</FieldError>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div>
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl font-semibold">Choose your dishes</h2>
            <span className={`text-sm ${canLeaveMenu ? "text-gold" : "text-cream/50"}`}>
              {dishCount}/{included} included
              {extraDishes > 0 ? ` · +${extraDishes} extra` : ""}
            </span>
          </div>
          {!canLeaveMenu ? (
            <p className="mb-4 text-sm text-cream/60">
              {config.label} includes {included} dishes — select {included - dishCount} more to continue. Extra dishes
              beyond {included} are {formatINR(EXTRA_DISH_PRICE)} each.
            </p>
          ) : null}
          <MenuPicker selected={selected} onToggle={toggleDish} />
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-8">
          <div>
            <h2 className="mb-5 font-serif text-2xl font-semibold">Review your booking</h2>
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2">
              <SummaryItem label="Table" value={`${config.label} (${config.guests})`} />
              <SummaryItem label="Date" value={date} />
              <SummaryItem label="Serve time" value={labelForTime(time || "20:00")} />
              <SummaryItem label="City" value={city} />
              <SummaryItem label="Name" value={name} />
              <SummaryItem label="Phone" value={phone} />
              <div className="sm:col-span-2">
                <SummaryItem label="Address" value={address} />
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-serif text-2xl font-semibold">Dishes ({dishCount})</h2>
            <div className="flex flex-wrap gap-2">
              {[...selected].map((id) => (
                <span key={id} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-cream/80">
                  {dishById[id]?.name || id}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-serif text-2xl font-semibold">Price</h2>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <PriceRow label={`${config.label} base (${included} dishes)`} value={formatINR(config.base)} />
              {extraDishes > 0 ? (
                <PriceRow label={`Extra dishes (${extraDishes} × ${formatINR(EXTRA_DISH_PRICE)})`} value={formatINR(extraDishes * EXTRA_DISH_PRICE)} />
              ) : null}
              <div className="mt-3 border-t border-white/10 pt-3">
                <PriceRow label="Total" value={formatINR(total)} emphasis />
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-2xl font-semibold">Before you pay</h2>
            <ul className="mb-4 space-y-2 text-sm text-cream/75">
              {[
                "The chef arrives before your serve time — 1 hour before for Small Table, 2 hours before for Full Table.",
                "The chef will send completion photos immediately after cooking.",
                "The last booking slot is 8:00 PM.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
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
              <span className="text-sm text-cream/85">I have read and accept all of the above terms.</span>
            </label>
          </div>

          {submitError ? (
            <p className="rounded-xl border border-rose/40 bg-rose/10 px-4 py-3 text-sm text-rose">{submitError}</p>
          ) : null}

          <button
            type="button"
            onClick={submit}
            disabled={!termsAccepted || submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-4 text-base font-semibold text-cream transition hover:bg-rose-dark disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            {submitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" /> Starting payment…
              </>
            ) : (
              <>Pay {formatINR(total)} &amp; confirm</>
            )}
          </button>
          <p className="text-xs text-cream/45">Full payment upfront. You'll be redirected to Cashfree's secure checkout.</p>
        </div>
      ) : null}

      {/* Nav */}
      {step < 2 ? (
        <div className="mt-10 flex items-center justify-between">
          {step > 0 ? (
            <button type="button" onClick={back} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-cream/80 transition hover:text-cream">
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
          <button type="button" onClick={back} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-cream/80 transition hover:text-cream">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </div>
      )}

      {step >= 1 ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
          <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-white/12 bg-dark/95 px-6 py-3 shadow-lg backdrop-blur">
            <span className="text-sm text-cream/60">Total</span>
            <span className="text-lg font-semibold text-cream">{formatINR(total)}</span>
          </div>
        </div>
      ) : null}
    </BookingShell>
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
