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

const sections = [
  {
    heading: "1. Information We Collect",
    body:
      "We may collect your name, phone number, email address, booking details, locality, dietary preferences, allergy information, and communication history when you use Savri or contact us.",
  },
  {
    heading: "2. How We Use Information",
    body:
      "We use this information to manage bookings, coordinate chefs, communicate service updates, improve the customer experience, and send relevant launch or product information when you opt in.",
  },
  {
    heading: "3. Sharing of Information",
    body:
      "We only share the information required to fulfill your service, such as passing dietary or logistical details to the chef handling your booking. We do not sell your personal information.",
  },
  {
    heading: "4. Data Security",
    body:
      "Savri takes reasonable steps to secure customer and chef information. While no system can guarantee absolute security, we aim to limit access and store data responsibly.",
  },
  {
    heading: "5. Your Choices",
    body:
      "You may contact Savri to update your information, request deletion where appropriate, or opt out of promotional messages. Service-related communication may still be required for active bookings.",
  },
  {
    heading: "6. Contact",
    body:
      "For privacy-related questions, contact Savri directly through the contact page.",
  },
]

export default function PrivacyPolicyPage() {
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
              <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
            </div>

            <p className="reveal-fade mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
              01 — Legal
            </p>
            <h1
              className="reveal-fade mt-8 font-serif italic leading-[0.88] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
            >
              Privacy Policy
            </h1>
            <p className="reveal-fade mx-auto mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
              Savri is committed to handling customer and chef information responsibly. This page outlines what we collect, why we collect it, and how we protect it.
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
