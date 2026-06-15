import type { Metadata } from "next"
import { ArrowRight, Check, Clock3 } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Reveal } from "@/components/ui/reveal"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SiteBreadcrumb } from "@/components/ui/site-breadcrumb"
import { BOOKING_URL, howItWorksSteps, processFaqs } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "How It Works | Savri Private Chef Booking",
  description:
    "See how Savri works from booking to plating: tier selection, menu planning, 24-hour rule, and what to expect from your private chef.",
}

export default function HowItWorksPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-[#1A1A1A] pt-32 text-[#F5F0E8]">
        <section className="reveal-up container mx-auto px-6 pb-20">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
          <Reveal className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B5636A]">How It Works</p>
            <h1
              className="reveal-up mt-6 font-serif italic leading-[0.95] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
            >
              From booking to enjoying.
            </h1>
            <p className="mt-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
              Savri is designed to feel premium without feeling complicated. Here is the full process, step by step.
            </p>
          </Reveal>
        </section>

        <section className="reveal-up bg-[#1A1A1A] py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-6">
              {howItWorksSteps.map((step, index) => (
                <Reveal key={step.step} delayMs={index * 70}>
                <article
                  key={step.step}
                  className="reveal-up grid gap-6 border-transparent p-7 md:grid-cols-[120px_1fr_220px]"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B5636A]">Step {step.step}</p>
                    <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C] text-[#1A1A1A]">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h2 className="reveal-up font-serif text-3xl font-semibold text-[#F5F0E8]">{step.title}</h2>
                    <p className="mt-4 text-base leading-7 text-[#F5F0E8]/72">{step.copy}</p>
                  </div>
                  <div className="px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5F0E8]/45">Typical time</p>
                    <p className="mt-3 text-2xl font-semibold text-[#C9A84C]">{step.timing}</p>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal-up py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2">
            <Reveal>
            <div className="border-transparent p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B5636A]">What the Chef Does</p>
              <h2 className="reveal-left mt-4 font-serif text-4xl font-semibold text-[#F5F0E8]">Service, cooking, plating, cleanup.</h2>
              <div className="mt-8 grid gap-3">
                {[
                  "Arrives on time and sets up your kitchen",
                  "Cooks all selected dishes fresh",
                  "Plates beautifully and serves if desired",
                  "Cleans up completely before leaving",
                  "Leaves the kitchen service-ready, not chaotic",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-[#F5F0E8]/72">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#B5636A]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>

            <Reveal delayMs={100}>
            <div className="border-transparent p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B5636A]">What You Provide</p>
              <h2 className="reveal-right mt-4 font-serif text-4xl font-semibold text-[#F5F0E8]">The essentials from your side.</h2>
              <div className="mt-8 grid gap-3">
                {[
                  "Access to your kitchen at the scheduled time",
                  "Ingredient reimbursement",
                  "Your existing plates and kitchen utensils unless otherwise arranged",
                  "Beverages or alcohol if you want them served",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-[#F5F0E8]/72">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#B5636A]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="reveal-up bg-[#1A1A1A] py-20 text-[#F5F0E8]">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">24-Hour Rule</p>
              <h2 className="reveal-left mt-4 font-serif text-4xl font-semibold md:text-5xl">Why 24 hours minimum?</h2>
              <p className="mt-6 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                It protects quality. Your chef needs time for sourcing, route planning, and prep decisions. That lead time is what keeps the service professional instead of rushed.
              </p>
            </div>
            </Reveal>
            <Reveal delayMs={120} variant="right">
            <div className="border-transparent p-8">
              <div className="flex items-start gap-4">
                <Clock3 className="mt-1 h-6 w-6 text-[#C9A84C]" />
                <div className="space-y-4 text-sm leading-7 text-[#F5F0E8]/78">
                  <p>Ensures chef availability for your preferred slot.</p>
                  <p>Leaves enough time for ingredient sourcing and dish planning.</p>
                  <p>Helps us maintain cleaner logistics and stronger service standards.</p>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="reveal-up py-20">
          <div className="container mx-auto px-6">
            <Reveal className="mx-auto max-w-4xl divide-y divide-[#F5F0E8]/10 border-transparent">
              {processFaqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-[#F5F0E8]">
                    {faq.question}
                    <span className="text-2xl text-[#B5636A] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-7 text-[#F5F0E8]/72">{faq.answer}</p>
                </details>
              ))}
            </Reveal>

            <Reveal className="mt-10 text-center" delayMs={120}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="immersive-button hover-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#B5636A] px-7 py-3 text-base font-semibold text-[#F5F0E8] transition hover:bg-[#9A5158]"
              >
                Book a Chef Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
