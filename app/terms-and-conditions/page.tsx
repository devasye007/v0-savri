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

export default function TermsAndConditionsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-cream pt-32 text-dark">
        <section className="container mx-auto px-6 pb-20 reveal-up">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Legal</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl reveal-up">Terms & Conditions</h1>
            <p className="mt-6 text-base leading-8 text-dark/68 md:text-lg">
              These terms describe how Savri bookings work, what customers can expect, and the basic responsibilities attached to each service.
            </p>
          </div>
        </section>

        <section className="pb-20 reveal-up">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl rounded-[2rem] border border-dark/8 bg-white p-8 shadow-[0_16px_40px_rgba(26,26,26,0.05)] md:p-10">
              <div className="space-y-8 text-sm leading-7 text-dark/72 md:text-base">
                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark reveal-up">1. Bookings</h2>
                  <p className="mt-3">
                    Savri bookings are subject to chef availability, serviceable locality coverage, and the required 24-hour minimum advance notice.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark reveal-up">2. Pricing</h2>
                  <p className="mt-3">
                    Base booking prices are listed on the website. Extra dishes, ingredients, and any agreed additions may increase the final amount. Customers are responsible for ingredient reimbursement unless explicitly stated otherwise.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark reveal-up">3. Customer Responsibilities</h2>
                  <p className="mt-3">
                    Customers must provide accurate service details, kitchen access at the scheduled time, and relevant dietary or allergy information before service begins.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark reveal-up">4. Cancellations</h2>
                  <p className="mt-3">
                    Cancellations are expected to be made more than 24 hours before service where possible. Short-notice cancellations may affect refund eligibility depending on chef preparation and sourcing already completed.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark reveal-up">5. Service Standards</h2>
                  <p className="mt-3">
                    Savri aims to provide trained, vetted chefs and a high-quality home dining experience, but specific outcomes may also depend on kitchen conditions, timing, ingredient availability, and customer instructions.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark reveal-up">6. Contact</h2>
                  <p className="mt-3">
                    Questions regarding these terms can be sent through the contact page.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
