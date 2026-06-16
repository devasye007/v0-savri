import type { Metadata } from "next"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SiteBreadcrumb } from "@/components/ui/site-breadcrumb"

export const metadata: Metadata = {
  title: "Terms & Conditions | Savri",
  description: "Read the Savri terms and conditions for bookings, cancellations, pricing, ingredients, and service expectations.",
}

const sections = [
  {
    heading: "1. Bookings",
    body:
      "Savri bookings are subject to chef availability, serviceable locality coverage, and the required 24-hour minimum advance notice.",
  },
  {
    heading: "2. Pricing",
    body:
      "Base booking prices are listed on the website. Extra dishes, ingredients, and any agreed additions may increase the final amount. Customers are responsible for ingredient reimbursement unless explicitly stated otherwise.",
  },
  {
    heading: "3. Customer Responsibilities",
    body:
      "Customers must provide accurate service details, kitchen access at the scheduled time, and relevant dietary or allergy information before service begins.",
  },
  {
    heading: "4. Cancellations",
    body:
      "Cancellations are expected to be made more than 24 hours before service where possible. Short-notice cancellations may affect refund eligibility depending on chef preparation and sourcing already completed.",
  },
  {
    heading: "5. Service Standards",
    body:
      "Savri aims to provide trained, vetted chefs and a high-quality home dining experience, but specific outcomes may also depend on kitchen conditions, timing, ingredient availability, and customer instructions.",
  },
  {
    heading: "6. Contact",
    body:
      "Questions regarding these terms can be sent through the contact page.",
  },
]

export default function TermsAndConditionsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── HERO ─────────── */}
        <section className="relative isolate flex min-h-[70svh] w-full flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-40 text-center md:min-h-[78svh] md:pt-44">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_22%,transparent_78%,#1A1A1A_100%)]" />

          <div className="relative z-10 w-full max-w-[1100px]">
            <div className="reveal-fade flex justify-center text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/55">
              <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
            </div>

            <p className="reveal-fade mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
              01 — Legal
            </p>
            <h1
              className="reveal-fade mt-8 font-serif italic leading-[0.88] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
            >
              Terms & Conditions
            </h1>
            <p className="reveal-fade mx-auto mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
              These terms describe how Savri bookings work, what customers can expect, and the basic responsibilities attached to each service.
            </p>
          </div>
        </section>

        {/* ─────────── BODY ─────────── */}
        <section className="relative w-full overflow-hidden pb-32 pt-10 md:pb-48">
          <div className="relative mx-auto w-full max-w-[800px] px-6">
            {sections.map((item, i) => (
              <div
                key={item.heading}
                className={i === 0 ? "" : "mt-20 border-t border-[#F5F0E8]/12 pt-20"}
              >
                <h2
                  className="reveal-fade font-serif italic leading-[1.05] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
                >
                  {item.heading}
                </h2>
                <p className="reveal-fade mt-6 max-w-[700px] text-base leading-8 text-[#F5F0E8]/82 md:text-lg">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
