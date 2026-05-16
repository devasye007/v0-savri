"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  Brain,
  CalendarDays,
  Check,
  ChefHat,
  CircleDollarSign,
  Clock3,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  UtensilsCrossed,
} from "lucide-react"

import {
  aiFeaturePreview,
  BOOKING_URL,
  bookingRule,
  extraDishPrice,
  homepageFaqs,
  homeSteps,
  pricingTiers,
  testimonials,
  whySavriCards,
} from "@/lib/site-data"
import { SavriAiNewsletter } from "@/components/sections/savri-ai-newsletter"
import { Reveal } from "@/components/ui/reveal"

function PricingCalculator() {
  const [tierId, setTierId] = useState(pricingTiers[0].id)
  const [extraDishes, setExtraDishes] = useState(0)
  const tier = pricingTiers.find((item) => item.id === tierId) ?? pricingTiers[0]

  const total = useMemo(() => tier.price + extraDishes * extraDishPrice, [tier.price, extraDishes])

  return (
    <div className="immersive-card interactive-spotlight rounded-[2rem] border border-dark/8 bg-white p-6 shadow-[0_20px_60px_rgba(26,26,26,0.08)] md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">Pricing Calculator</p>
      <h3 className="mt-3 font-serif text-3xl font-semibold text-dark">See your booking total</h3>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-3 sm:grid-cols-2">
          {pricingTiers.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setTierId(option.id)}
              className={`immersive-card rounded-[1.5rem] border px-4 py-4 text-left transition ${
                tierId === option.id
                  ? "border-rose bg-rose/8 shadow-[0_8px_24px_rgba(181,99,106,0.12)]"
                  : "border-dark/10 bg-[#fffaf4] hover:border-rose/35"
              }`}
            >
              <p className="text-sm font-semibold text-dark">{option.name}</p>
              <p className="mt-1 text-2xl font-semibold text-rose">₹{option.price}</p>
              <p className="mt-1 text-sm text-dark/60">{option.guests}</p>
            </button>
          ))}
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-dark">Extra dishes</span>
          <input
            type="range"
            min={0}
            max={6}
            value={extraDishes}
            onChange={(event) => setExtraDishes(Number(event.target.value))}
            className="accent-rose"
          />
          <div className="flex items-center justify-between text-sm text-dark/60">
            <span>0</span>
            <span>{extraDishes} selected</span>
            <span>6</span>
          </div>
        </label>
      </div>

      <div className="mt-6 rounded-[1.5rem] bg-dark px-5 py-5 text-cream">
        <p className="text-sm text-cream/60">
          {tier.name} base + {extraDishes} extra dish{extraDishes === 1 ? "" : "es"}
        </p>
        <p className="mt-2 text-4xl font-semibold">₹{total}</p>
        <p className="mt-2 text-sm text-cream/70">
          {extraDishPrice > 0 ? `Extra dishes charged at ₹${extraDishPrice} each.` : null}
        </p>
      </div>
    </div>
  )
}

export function HomepageRedesign() {
  return (
    <main className="overflow-x-hidden bg-cream text-dark ambient-grid">
      <div className="ambient-orb left-[-6rem] top-[14rem] h-72 w-72 bg-rose/40" />
      <div className="ambient-orb right-[-8rem] top-[52rem] h-80 w-80 bg-gold/30" />
      <section className="relative isolate min-h-screen overflow-hidden bg-dark pt-28 text-cream">
        <Image
          src="/images/hero-food.jpg"
          alt="Premium Indian dinner table with chef-plated dishes in a warm home setting"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.8)_0%,rgba(10,10,10,0.45)_50%,rgba(10,10,10,0.65)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(181,99,106,0.24),transparent_36%)]" />

        <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] items-center px-6 pb-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="max-w-2xl" variant="left">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold backdrop-blur">
                Premium Home Dining
              </p>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-none md:text-6xl lg:text-7xl">
                Private Chef, Ghar pe
              </h1>
              <p className="mt-6 max-w-xl text-xl text-cream/82 md:text-2xl">
                Authentic. Fresh. Personal. Starting ₹549.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-cream/72 md:text-lg">
                Savri brings trained private chefs into Indian homes for intimate dinners, family meals, and celebrations that feel polished without feeling performative.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="immersive-button hover-shine inline-flex min-h-12 items-center justify-center rounded-2xl bg-rose px-7 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark"
                >
                  Book a Chef Now
                </a>
                <Link
                  href="/how-it-works"
                  className="immersive-button hover-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/14 bg-white/8 px-7 py-3 text-base font-semibold text-cream transition hover:bg-white/12"
                >
                  Learn How It Works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-cream/70">
                <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">Tier 1: 1-3 guests · ₹549</span>
                <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">Tier 2: 4-6 guests · ₹1,149</span>
                <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">{bookingRule}</span>
              </div>
            </Reveal>

            <Reveal className="grid gap-4" delayMs={160} variant="right">
              <div className="parallax-panel interactive-spotlight rounded-[2rem] border border-white/12 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">What you get</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    "Fresh cooking in your kitchen",
                    "Trained, vetted private chefs",
                    "Menu personalization before service",
                    "Kitchen cleanup after the meal",
                  ].map((item) => (
                    <div key={item} className="immersive-card rounded-[1.5rem] bg-black/12 px-4 py-4 flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-sm text-cream/84">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-surface immersive-card rounded-[1.75rem] p-5">
                  <p className="text-sm text-cream/60">Starting at</p>
                  <p className="mt-2 text-4xl font-semibold text-cream">₹549</p>
                  <p className="mt-2 text-sm text-cream/72">1 hour · 2 dishes · 1-3 guests</p>
                </div>
                <div className="immersive-card rounded-[1.75rem] border border-[#6C63FF]/24 bg-[#6C63FF]/12 p-5 backdrop-blur">
                  <p className="text-sm text-[#d9d7ff]">Savri AI</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Coming August 2026</p>
                  <p className="mt-2 text-sm text-[#ecebff]">Taste learning, chef matching, and smarter recommendations.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Why Savri</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Why Choose Savri?</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whySavriCards.map((card, index) => {
              const icons = [CircleDollarSign, UtensilsCrossed, ShieldCheck, Sparkles]
              const Icon = icons[index]
              return (
                <Reveal key={card.title} delayMs={index * 90} variant="up">
                <article className="immersive-card interactive-spotlight rounded-[2rem] border border-dark/8 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.05)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/10 text-rose">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-rose">{card.eyebrow}</p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-dark">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-dark/68">{card.copy}</p>
                </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works-preview" className="bg-[#fffaf4] py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">How It Works</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Book Your Chef in 3 Steps</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {homeSteps.map((step, index) => {
              const icons = [ChefHat, CalendarDays, Sparkles]
              const Icon = icons[index]
              return (
                <Reveal key={step.title} delayMs={index * 100}>
                <article className="immersive-card interactive-spotlight rounded-[2rem] border border-dark/8 bg-white p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-dark text-sm font-semibold text-cream">
                    0{index + 1}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-rose" />
                    <h3 className="font-serif text-2xl font-semibold text-dark">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-dark/68">{step.copy}</p>
                </article>
                </Reveal>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="immersive-button hover-shine inline-flex min-h-12 items-center justify-center rounded-2xl bg-rose px-7 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark"
            >
              Book a Chef Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-cream md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Pricing</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Simple, Transparent Pricing</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-cream/70 md:text-lg">
                Two booking tiers. Clear add-ons. No fuzzy packages. Ingredients are reimbursed separately so you know exactly what you are paying for.
              </p>

              <div className="mt-10 grid gap-6 xl:grid-cols-2">
                {pricingTiers.map((tier) => (
                  <article
                    key={tier.id}
                    className={`immersive-card hover-shine rounded-[2rem] border p-7 ${
                      tier.badge
                        ? "border-gold/35 bg-gradient-to-b from-[#1c1714] to-[#100f0f]"
                        : "border-white/10 bg-white/6"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{tier.name}</p>
                        <h3 className="mt-3 font-serif text-3xl font-semibold">{tier.guests}</h3>
                      </div>
                      {tier.badge ? (
                        <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-dark">
                          {tier.badge}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-6 text-5xl font-semibold text-cream">₹{tier.price}</p>
                    <p className="mt-2 text-sm text-cream/62">{tier.perPerson}</p>

                    <ul className="mt-6 space-y-3 text-sm text-cream/80">
                      {[
                        `${tier.hours} hour${tier.hours > 1 ? "s" : ""} of cooking`,
                        `${tier.dishes} curated dishes`,
                        "Professional chef",
                        "Kitchen cleanup",
                        "Beverage advisory",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 text-sm text-cream/62">
                      <span className="font-semibold text-cream">Best for:</span> {tier.bestFor}
                    </p>

                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`immersive-button mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition ${
                        tier.badge
                          ? "bg-rose text-cream hover:bg-rose-dark"
                          : "border border-cream/18 text-cream hover:bg-white/8"
                      }`}
                    >
                      {tier.name === "Tier 1" ? "Book Tier 1" : "Book Tier 2"}
                    </a>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/6 p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/18 text-rose">
                    <UtensilsCrossed className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Add-ons</p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold">Want more? Add extra dishes</h3>
                    <p className="mt-3 text-sm leading-7 text-cream/70">
                      Add butter chicken, biryani, dessert, or a signature specialty for ₹149 per dish. Each extra dish adds roughly 30 minutes of cooking time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-cream">
                  See full pricing details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            </Reveal>

            <Reveal delayMs={120} variant="right">
              <PricingCalculator />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf4] py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Testimonials</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Loved by Homes Across Delhi</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 xl:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delayMs={index * 80} variant="scale">
              <article className="immersive-card interactive-spotlight rounded-[2rem] border border-dark/8 bg-white p-6">
                <Quote className="h-7 w-7 text-rose" />
                <div className="mt-4 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-dark/72">{testimonial.quote}</p>
                <p className="mt-6 font-semibold text-dark">
                  {testimonial.name} <span className="font-normal text-dark/55">| {testimonial.location}</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose">{testimonial.useCase}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-cream md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal variant="left">
            <div className="parallax-panel interactive-spotlight rounded-[2rem] border border-[#6C63FF]/24 bg-[linear-gradient(160deg,rgba(108,99,255,0.18),rgba(26,26,26,0.3))] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6d2ff]">Savri AI Preview</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
                The Future of Private Dining
              </h2>
              <p className="mt-5 text-base leading-7 text-cream/72 md:text-lg">
                Imagine a chef experience that already understands your taste, your usual spice level, your dietary needs, and the kind of evenings you like to host.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {aiFeaturePreview.map((item) => (
                  <div key={item.title} className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-4">
                    <item.icon className="h-5 w-5 text-[#d6d2ff]" />
                    <span className="text-sm text-cream/86">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>

            <Reveal variant="right" delayMs={140}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Coming August 2026</p>
              <h3 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Personalized experiences powered by intelligence.</h3>
              <p className="mt-5 text-base leading-7 text-cream/70 md:text-lg">
                Savri AI will learn your taste profile, predict what you are likely to want next, and match you with the right chef without making the experience feel robotic.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/ai"
                  className="immersive-button hover-shine inline-flex min-h-12 items-center justify-center rounded-2xl bg-rose px-7 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark"
                >
                  Explore Savri AI
                </Link>
                <a
                  href="#plans-notify"
                  className="immersive-button inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/14 px-7 py-3 text-base font-semibold text-cream transition hover:bg-white/8"
                >
                  Get notified when it launches
                </a>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">FAQ</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Got Questions? We&apos;ve Got Answers.</h2>
          </Reveal>

          <Reveal delayMs={100}>
          <div className="mx-auto mt-14 max-w-4xl divide-y divide-dark/10 rounded-[2rem] border border-dark/8 bg-white interactive-spotlight">
            {homepageFaqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-dark">
                  {faq.question}
                  <span className="text-2xl text-rose transition group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pr-8 text-sm leading-7 text-dark/68">{faq.answer}</p>
              </details>
            ))}
          </div>
          </Reveal>

          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-rose hover:text-rose-dark">
              See full FAQ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="plans-notify" className="bg-[#fffaf4] py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal variant="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Monthly Plans</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Monthly Plans Are Coming Soon</h2>
              <p className="mt-5 text-base leading-7 text-dark/68 md:text-lg">
                Daily chef plans are not available yet. Join the newsletter to be notified when plans launch and when Savri AI updates start rolling out.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "Be notified when monthly plans launch",
                  "Get Savri AI rollout updates",
                  "Stay ahead on launch pricing and availability",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-dark/68">
                    <Brain className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>

            <Reveal variant="right" delayMs={120}>
              <SavriAiNewsletter />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-cream md:py-24">
        <Reveal className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Ready When You Are</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
            Ready to Experience Premium Home Dining?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cream/72 md:text-lg">
            Book your first chef in 3 minutes. Just remember the 24+ hour lead time.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="immersive-button hover-shine mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl bg-rose px-8 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark"
          >
            Book a Chef Now
          </a>
          <p className="mt-4 text-sm text-cream/55">First booking? We&apos;ll walk you through every step.</p>
        </Reveal>
      </section>
    </main>
  )
}
