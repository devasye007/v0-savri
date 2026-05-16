import type { Metadata } from "next"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Reveal } from "@/components/ui/reveal"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SiteBreadcrumb } from "@/components/ui/site-breadcrumb"
import { homepageFaqs, pricingFaqs, processFaqs } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "FAQ | Savri Private Chef Booking",
  description:
    "Answers about Savri pricing, booking timelines, ingredients, allergies, cancellations, and what to expect from your private chef experience.",
}

export default function FaqPage() {
  const sections = [
    { title: "Booking & Service", items: homepageFaqs },
    { title: "Process", items: processFaqs },
    { title: "Pricing", items: pricingFaqs },
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-cream pt-32 text-dark">
        <section className="container mx-auto px-6 pb-20">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">FAQ</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl">Clear answers, upfront.</h1>
            <p className="mt-6 text-base leading-8 text-dark/68 md:text-lg">
              The goal is clarity. If you are deciding whether Savri is right for your home, start here.
            </p>
          </Reveal>
        </section>

        <section className="pb-20">
          <div className="container mx-auto grid gap-10 px-6">
            {sections.map((section) => (
              <Reveal key={section.title}>
              <div>
                <h2 className="font-serif text-3xl font-semibold text-dark">{section.title}</h2>
                <div className="mt-6 divide-y divide-dark/10 rounded-[2rem] border border-dark/8 bg-white interactive-spotlight">
                  {section.items.map((faq) => (
                    <details key={faq.question} className="group px-6 py-2">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-dark">
                        {faq.question}
                        <span className="text-2xl text-rose transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="pb-5 pr-8 text-sm leading-7 text-dark/68">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
