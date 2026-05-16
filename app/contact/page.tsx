import type { Metadata } from "next"
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { ContactForm } from "@/components/forms/contact-form"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Reveal } from "@/components/ui/reveal"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SiteBreadcrumb } from "@/components/ui/site-breadcrumb"
import { CONTACT_EMAIL, CONTACT_PHONE, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact | Savri",
  description:
    "Contact Savri for bookings, partnerships, pricing questions, city availability, and chef enquiries.",
}

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-cream pt-32 text-dark">
        <section className="container mx-auto px-6 pb-20">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal variant="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Contact</p>
              <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl">Tell us what you need.</h1>
              <p className="mt-6 text-base leading-8 text-dark/68 md:text-lg">
                Booking question, event enquiry, chef partnership, or just checking availability in your city. We&apos;ll route it properly.
              </p>

              <div className="mt-10 space-y-5 rounded-[2rem] border border-dark/8 bg-white p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-rose" />
                  <div>
                    <p className="font-semibold text-dark">Savri HQ</p>
                    <p className="text-sm text-dark/62">Delhi NCR</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-rose" />
                  <div>
                    <p className="font-semibold text-dark">Phone</p>
                    <p className="text-sm text-dark/62">{CONTACT_PHONE}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-rose" />
                  <div>
                    <p className="font-semibold text-dark">Email</p>
                    <p className="text-sm text-dark/62">{CONTACT_EMAIL}</p>
                  </div>
                </div>

                <div className="pt-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark/45">Social</p>
                  <div className="mt-4 flex gap-3">
                    {[
                      { href: INSTAGRAM_URL, icon: Instagram, label: "Instagram" },
                      { href: TWITTER_URL, icon: Twitter, label: "Twitter" },
                      { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 text-dark/70 transition hover:border-rose hover:text-rose"
                        aria-label={item.label}
                      >
                        <item.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </Reveal>

            <Reveal variant="right" delayMs={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
