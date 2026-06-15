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
      <main className="bg-cream pt-32 text-dark">
        <section className="container mx-auto px-6 pb-20 reveal-up">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">How It Works</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl reveal-up">From booking to enjoying.</h1>
            <p className="mt-6 text-base leading-8 text-dark/68 md:text-lg">
              Savri is designed to feel premium without feeling complicated. Here is the full process, step by step.
            </p>
          </Reveal>
        </section>

        <section className="bg-[#fffaf4] py-20 reveal-up">
          <div className="container mx-auto px-6">
            <div className="grid gap-6">
              {howItWorksSteps.map((step, index) => (
                <Reveal key={step.step} delayMs={index * 70}>
                <article
                  key={step.step}
                  className="immersive-card interactive-spotlight grid gap-6 rounded-[2rem] border border-dark/8 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.05)] md:grid-cols-[120px_1fr_220px] reveal-up"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">Step {step.step}</p>
                    <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-dark text-cream">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl font-semibold text-dark reveal-up">{step.title}</h2>
                    <p className="mt-4 text-base leading-7 text-dark/68">{step.copy}</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#fffaf4] px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-dark/45">Typical time</p>
                    <p className="mt-3 text-2xl font-semibold text-dark">{step.timing}</p>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 reveal-up">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2">
            <Reveal>
            <div className="immersive-card rounded-[2rem] border border-dark/8 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">What the Chef Does</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold reveal-left">Service, cooking, plating, cleanup.</h2>
              <div className="mt-8 grid gap-3">
                {[
                  "Arrives on time and sets up your kitchen",
                  "Cooks all selected dishes fresh",
                  "Plates beautifully and serves if desired",
                  "Cleans up completely before leaving",
                  "Leaves the kitchen service-ready, not chaotic",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-dark/70">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-rose" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>

            <Reveal delayMs={100}>
            <div className="immersive-card rounded-[2rem] border border-dark/8 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">What You Provide</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold reveal-right">The essentials from your side.</h2>
              <div className="mt-8 grid gap-3">
                {[
                  "Access to your kitchen at the scheduled time",
                  "Ingredient reimbursement",
                  "Your existing plates and kitchen utensils unless otherwise arranged",
                  "Beverages or alcohol if you want them served",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-dark/70">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-rose" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-dark py-20 text-cream reveal-up">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">24-Hour Rule</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl reveal-left">Why 24 hours minimum?</h2>
              <p className="mt-6 text-base leading-8 text-cream/70 md:text-lg">
                It protects quality. Your chef needs time for sourcing, route planning, and prep decisions. That lead time is what keeps the service professional instead of rushed.
              </p>
            </div>
            </Reveal>
            <Reveal delayMs={120} variant="right">
            <div className="immersive-card rounded-[2rem] border border-white/10 bg-white/6 p-8">
              <div className="flex items-start gap-4">
                <Clock3 className="mt-1 h-6 w-6 text-gold" />
                <div className="space-y-4 text-sm leading-7 text-cream/78">
                  <p>Ensures chef availability for your preferred slot.</p>
                  <p>Leaves enough time for ingredient sourcing and dish planning.</p>
                  <p>Helps us maintain cleaner logistics and stronger service standards.</p>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 reveal-up">
          <div className="container mx-auto px-6">
            <Reveal className="mx-auto max-w-4xl divide-y divide-dark/10 rounded-[2rem] border border-dark/8 bg-white">
              {processFaqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-dark">
                    {faq.question}
                    <span className="text-2xl text-rose transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-7 text-dark/68">{faq.answer}</p>
                </details>
              ))}
            </Reveal>

            <Reveal className="mt-10 text-center" delayMs={120}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="immersive-button hover-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-rose px-7 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark"
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
