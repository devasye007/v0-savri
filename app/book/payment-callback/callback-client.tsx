"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle2, Clock, XCircle, Loader2 } from "lucide-react"

import type { VerifyResponse } from "@/lib/booking-types"

type Phase = "verifying" | "confirmed" | "pending" | "failed"

export function CallbackClient() {
  const params = useSearchParams()
  const orderId = params.get("order_id") || ""
  const bookingId = params.get("booking_id") || ""

  const [phase, setPhase] = useState<Phase>("verifying")
  const [message, setMessage] = useState<string>("")
  const attempts = useRef(0)

  useEffect(() => {
    if (!orderId || !bookingId) {
      setPhase("failed")
      setMessage("Missing payment reference. If you were charged, contact us and we'll sort it out.")
      return
    }

    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const poll = async () => {
      attempts.current += 1
      try {
        const res = await fetch("/api/booking/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId, bookingId }),
        })
        const data = (await res.json()) as VerifyResponse & { error?: string }
        if (cancelled) return

        if (res.ok && data.verified) {
          setPhase("confirmed")
          return
        }
        // Not yet confirmed — Cashfree may still be settling. Retry a few times.
        if (attempts.current < 5) {
          timer = setTimeout(poll, 3000)
          setPhase("verifying")
        } else {
          setPhase("pending")
          setMessage(data.message || "We haven't received confirmation from the payment gateway yet.")
        }
      } catch {
        if (cancelled) return
        if (attempts.current < 5) {
          timer = setTimeout(poll, 3000)
        } else {
          setPhase("pending")
          setMessage("We couldn't reach the payment gateway. Your booking is safe — we'll confirm shortly.")
        }
      }
    }
    poll()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [orderId, bookingId])

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
      {phase === "verifying" ? (
        <>
          <Loader2 className="mx-auto h-14 w-14 animate-spin text-rose" />
          <h1 className="mt-6 font-serif text-3xl font-semibold">Confirming your payment…</h1>
          <p className="mt-3 text-cream/65">Hang tight — this takes a few seconds.</p>
        </>
      ) : null}

      {phase === "confirmed" ? (
        <>
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
          <h1 className="mt-6 font-serif text-3xl font-semibold">Booking confirmed!</h1>
          <p className="mt-3 text-cream/70">
            Thank you — your payment went through and your booking is confirmed. We'll be in touch with your chef
            details and, for party bookings, the ingredient list for your dishes.
          </p>
          <p className="mt-2 text-sm text-cream/45">Reference: {bookingId}</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-cream transition hover:bg-rose-dark"
          >
            Back to home
          </Link>
        </>
      ) : null}

      {phase === "pending" ? (
        <>
          <Clock className="mx-auto h-14 w-14 text-gold" />
          <h1 className="mt-6 font-serif text-3xl font-semibold">Payment processing</h1>
          <p className="mt-3 text-cream/70">{message}</p>
          <p className="mt-2 text-sm text-cream/45">
            If money was deducted, your booking will confirm automatically. Reference: {bookingId}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-white/10"
          >
            Contact support
          </Link>
        </>
      ) : null}

      {phase === "failed" ? (
        <>
          <XCircle className="mx-auto h-14 w-14 text-rose" />
          <h1 className="mt-6 font-serif text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-3 text-cream/70">{message}</p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-cream transition hover:bg-rose-dark"
          >
            Start over
          </Link>
        </>
      ) : null}
    </div>
  )
}
