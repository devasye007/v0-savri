import type { Metadata } from "next"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SiteBreadcrumb } from "@/components/ui/site-breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy | Savri",
  description: "Read Savri's privacy policy for information about data collection, usage, storage, and customer rights.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-cream pt-43 text-dark">
        <section className="container mx-auto px-6 pb-20">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Legal</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl">Privacy Policy</h1>
            <p className="mt-6 text-base leading-8 text-dark/68 md:text-lg">
              Savri is committed to handling customer and chef information responsibly. This page outlines what we collect, why we collect it, and how we protect it.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl rounded-[2rem] border border-dark/8 bg-white p-8 shadow-[0_16px_40px_rgba(26,26,26,0.05)] md:p-10">
              <div className="space-y-8 text-sm leading-7 text-dark/72 md:text-base">
                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark">1. Information We Collect</h2>
                  <p className="mt-3">
                    We may collect your name, phone number, email address, booking details, locality, dietary preferences, allergy information, and communication history when you use Savri or contact us.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark">2. How We Use Information</h2>
                  <p className="mt-3">
                    We use this information to manage bookings, coordinate chefs, communicate service updates, improve the customer experience, and send relevant launch or product information when you opt in.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark">3. Sharing of Information</h2>
                  <p className="mt-3">
                    We only share the information required to fulfill your service, such as passing dietary or logistical details to the chef handling your booking. We do not sell your personal information.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark">4. Data Security</h2>
                  <p className="mt-3">
                    Savri takes reasonable steps to secure customer and chef information. While no system can guarantee absolute security, we aim to limit access and store data responsibly.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark">5. Your Choices</h2>
                  <p className="mt-3">
                    You may contact Savri to update your information, request deletion where appropriate, or opt out of promotional messages. Service-related communication may still be required for active bookings.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl font-semibold text-dark">6. Contact</h2>
                  <p className="mt-3">
                    For privacy-related questions, contact Savri directly through the contact page.
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
