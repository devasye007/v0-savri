import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { BackToTop } from "@/components/ui/back-to-top"

/** Dark, cinematic page frame shared by the booking flows. */
export function BookingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-dark text-cream">
      <Navbar />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36 md:px-6">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export function BookingHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <header className="mb-8">
      <Link
        href="/book"
        className="mb-6 inline-flex items-center gap-2 text-sm text-cream/60 transition hover:text-cream"
      >
        <ArrowLeft className="h-4 w-4" /> All booking options
      </Link>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">{title}</h1>
      {subtitle ? <p className="mt-3 max-w-xl text-cream/70">{subtitle}</p> : null}
    </header>
  )
}

/** Numbered step indicator. */
export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="mb-10 flex flex-wrap items-center gap-x-3 gap-y-2">
      {steps.map((label, i) => {
        const state = i < current ? "done" : i === current ? "active" : "todo"
        return (
          <li key={label} className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                state === "active"
                  ? "bg-rose text-cream"
                  : state === "done"
                    ? "bg-gold text-dark"
                    : "border border-white/20 text-cream/50"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`text-sm ${state === "active" ? "text-cream" : "text-cream/50"} hidden sm:inline`}
            >
              {label}
            </span>
            {i < steps.length - 1 ? <span className="h-px w-4 bg-white/15 sm:w-6" /> : null}
          </li>
        )
      })}
    </ol>
  )
}
