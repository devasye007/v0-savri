import { Suspense } from "react"
import type { Metadata } from "next"

import { BookingShell } from "@/components/booking/BookingShell"
import { CallbackClient } from "./callback-client"

export const metadata: Metadata = {
  title: "Payment | Savri",
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <BookingShell>
      <Suspense fallback={<div className="py-20 text-center text-cream/60">Loading…</div>}>
        <CallbackClient />
      </Suspense>
    </BookingShell>
  )
}
