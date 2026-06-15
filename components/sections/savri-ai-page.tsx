import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ChefHat,
  Clock3,
  HeartHandshake,
  Lightbulb,
  PartyPopper,
  Salad,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react"

import { SavriAiNewsletter } from "@/components/sections/savri-ai-newsletter"

const problemCards = [
  {
    icon: Clock3,
    title: "Generic Menus Waste Your Time",
    copy:
      "Every time you book a chef, you start from scratch. No memory of what you love, what you hate, or what gives you allergies.",
  },
  {
    icon: ChefHat,
    title: "Chefs Have No Insight",
    copy:
      "Chefs cook based on the moment, not on deep knowledge of you. They guess. You compromise.",
  },
  {
    icon: Lightbulb,
    title: "Know You. Serve You. Delight You.",
    copy:
      "Savri AI learns your taste over time, predicts what you'll love, and matches you with chefs who specialize in your preferences.",
  },
]

const featureCards = [
  {
    icon: Brain,
    title: "Taste Profile Learning",
    description:
      "After every meal, Savri AI learns your preferences. Loves spicy? Dislikes seafood? Allergic to nuts? The system remembers everything. Over time, it builds a complete taste map of you.",
    visual: "Spicy ↔ Mild · Sweet ↔ Savoury · Comfort ↔ Experimental",
    example: "Book 1st meal → Rate dishes → AI learns → 2nd meal is better matched",
  },
  {
    icon: Sparkles,
    title: "Meal Prediction Engine",
    description:
      "Based on your history, mood, season, occasion, and past ratings, Savri AI predicts what you'll crave. It suggests menus before you even think to book.",
    visual: "Monsoon comfort · Sunday brunch · Late-night light meal",
    example: "It's monsoon season → AI suggests comfort food options → You pick favourite → Chef cooks",
  },
  {
    icon: Target,
    title: "Perfect Chef Matching",
    description:
      "Instead of random assignment, Savri AI matches you with chefs who specialize in your preferences. Love Bengali food? Get the chef who already understands your taste.",
    visual: "Your profile + chef strengths + occasion needs = stronger match",
    example: "Loves vegetarian, spicy, Bengali → Matches Neha, Bengali vegetarian specialist",
  },
  {
    icon: Salad,
    title: "Intelligent Dietary Tracking",
    description:
      "Tell Savri AI your dietary restrictions once. It auto-filters every chef recommendation and meal suggestion so safe options become the default.",
    visual: "No nuts · Vegetarian · Gluten-free · High-protein",
    example: "Shellfish allergy + Vegetarian → AI filters chefs and menus → Only safe options shown",
  },
  {
    icon: PartyPopper,
    title: "Occasion-Aware Recommendations",
    description:
      "Special dinner? Anniversary? Work celebration? Family gathering? Savri AI understands the moment and tailors the chef, menu, and tone around it.",
    visual: "Date night · Family lunch · Work dinner · Celebration spread",
    example: "You book for anniversary → AI suggests romantic cuisines, ambience tips, and special chefs",
  },
  {
    icon: TrendingUp,
    title: "Gets Better With Time",
    description:
      "Every booking, every rating, and every preference teaches the system something useful. Savri AI adapts as your life and taste evolve.",
    visual: "Month 1 → Month 3 → Month 6",
    example: "Month 1: 70% accuracy → Month 3: 85% → Month 6: personal recommendations feel obvious",
  },
]

const steps = [
  {
    number: "1",
    title: "Tell Us Your Taste",
    copy:
      "During onboarding, answer quick questions about your taste preferences, dietary needs, and favourite cuisines. Just 2 minutes.",
  },
  {
    number: "2",
    title: "Book & Enjoy",
    copy:
      "Book a private chef like normal. Savri AI suggests the right chef and menu for you.",
  },
  {
    number: "3",
    title: "Rate Your Experience",
    copy:
      "After the meal, rate what you loved and what you did not. This teaches Savri AI about your real preferences.",
  },
  {
    number: "4",
    title: "AI Learns",
    copy:
      "Savri AI analyzes your ratings, your patterns, seasonal trends, and your evolving taste.",
  },
  {
    number: "5",
    title: "Next Meal Is Better",
    copy:
      "Your next booking gets smarter recommendations, better chef matching, and more personalized menus.",
  },
]

const stories = [
  {
    profile: "Rahul, Delhi, 35, Corporate Manager",
    challenge:
      "I love food but hate decisions. Between work and family, I don't have time to browse menus every time I book.",
    solution:
      "Savri AI knows Rahul loves North Indian, likes spicy, dislikes seafood, and prefers quick turnarounds. Every suggestion is tailored. He books in 30 seconds.",
    outcome: "Time saved + better meals + stress-free booking",
  },
  {
    profile: "Priya, Bangalore, 28, Fitness Coach",
    challenge:
      "I'm vegetarian, gluten-free, and need high protein. Most chefs don't understand. I spend an hour on each booking explaining restrictions.",
    solution:
      "Savri AI remembers her profile and only suggests vegetarian, high-protein, gluten-free menus. Chefs are already vetted for her needs.",
    outcome: "No explanations needed + safe meals + perfect matches",
  },
  {
    profile: "Amit & Neha, Mumbai, 32, Always Learning",
    challenge:
      "We love trying new cuisines but get overwhelmed by options. We want to be surprised but still trust the recommendation.",
    solution:
      "Based on past bookings, Savri AI knows they're adventurous but prefer certain spice levels. It suggests cuisines they've never tried but would likely love.",
    outcome: "Curated discovery + delightful surprises + perfect matches",
  },
  {
    profile: "Sharma Family, Delhi, Multi-generational",
    challenge:
      "Booking for family dinners is hard. Grandma likes simple, kids like fun, parents like elegant. No single menu works.",
    solution:
      "Savri AI understands family dynamics and suggests menus that work across ages. It finds chefs who specialize in multi-generational cooking.",
    outcome: "Everyone happy + family bonding + stress-free hosting",
  },
]

const roadmap = [
  {
    month: "June 2026",
    phase: "Savri Launches",
    items: ["Daily chef bookings live", "Manual chef selection"],
  },
  {
    month: "August 2026",
    phase: "Savri AI Phase 1",
    items: ["Taste profile collection", "Basic chef recommendations", "Dietary tracking"],
  },
  {
    month: "October 2026",
    phase: "Savri AI Phase 2",
    items: ["Meal prediction engine", "Smart chef matching", "Occasion-aware suggestions"],
  },
  {
    month: "December 2026",
    phase: "Savri AI Phase 3",
    items: ["Continuous learning loop", "Personalized menu suggestions", "Full AI experience"],
  },
]

const privacyPoints = [
  {
    title: "Your Data Is Safe",
    copy:
      "Savri AI learns about your taste. That data stays tied to your account, encrypted and private.",
  },
  {
    title: "You Control Everything",
    copy:
      "Pause learning, export your taste profile, or delete it entirely. You own your data.",
  },
  {
    title: "No Creepy Tracking",
    copy:
      "Savri AI does not track you outside the app. No browsing history. No location trail. Just your meal preferences, saved securely.",
  },
]

const faqs = [
  {
    question: "When will Savri AI be available?",
    answer:
      "Savri AI launches in phases starting August 2026. Early features include taste learning and chef recommendations. The full experience is planned for December 2026.",
  },
  {
    question: "Do I have to use Savri AI?",
    answer:
      "No. Savri AI is optional. You can keep booking chefs manually if that is how you prefer to use Savri.",
  },
  {
    question: "How does Savri AI learn my taste?",
    answer:
      "Through a quick onboarding quiz and by learning from the ratings you leave after each meal. The more context you share, the better the recommendations get.",
  },
  {
    question: "What if I change my taste?",
    answer:
      "Savri AI adapts over time. If your routine changes, your spice tolerance shifts, or your diet evolves, the recommendations change with you.",
  },
  {
    question: "Will Savri AI recommend expensive dishes?",
    answer:
      "No. Savri AI works within your budget and plan. Its job is to reduce decision fatigue, not push you into upgrades.",
  },
  {
    question: "Can I reset my taste profile?",
    answer:
      "Yes. You can clear your learning data and start fresh whenever you want.",
  },
  {
    question: "How accurate is Savri AI?",
    answer:
      "Our goal is 95%+ match accuracy by month 6. Actual accuracy improves as you rate meals and give feedback.",
  },
]

export function SavriAiPage() {
  return (
    <main className="overflow-x-hidden bg-cream text-dark">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f5f0e8_0%,#f3e2df_46%,#b5636a_100%)] pt-32">
        <div className="absolute inset-0 opacity-35">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(201,168,76,0.18),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.16)_49%,transparent_50%),linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.14)_49%,transparent_50%)] bg-[length:120px_120px] mix-blend-soft-light" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pb-20 md:pb-28">
          <div className="mb-8 flex items-center gap-2 text-sm text-dark/60">
            <Link href="/" className="hover:text-dark">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-dark">Savri AI</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#6C63FF] backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Coming Soon
              </div>
              <h1 className="reveal-up max-w-xl font-serif text-5xl font-semibold leading-none text-dark md:text-6xl lg:text-7xl">
                Meet Savri AI
              </h1>
              <p className="mt-6 max-w-xl text-xl text-dark/80 md:text-2xl">
                The future of private chef experiences. Coming soon.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-dark/72 md:text-lg">
                Savri AI learns your taste, predicts your cravings, and matches you with the perfect chef. Personalized dining, powered by intelligence.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#notify"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-rose px-7 py-3 text-base font-semibold text-cream transition hover:bg-rose-dark"
                >
                  Notify Me When It Launches
                </a>
                <a
                  href="#roadmap"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-dark/10 bg-white/60 px-7 py-3 text-base font-semibold text-dark transition hover:bg-white"
                >
                  See launch timeline
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-dark shadow-[0_30px_80px_rgba(26,26,26,0.18)]">
                <Image
                  src="/images/hero-food.jpg"
                  alt="Warm Indian meal plating with a premium private-chef feel"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover opacity-82"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.15),rgba(10,10,10,0.7))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-sm uppercase tracking-[0.22em] text-gold">Savri AI Preview</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/10 p-4 text-cream">
                        <p className="text-xs uppercase tracking-[0.18em] text-cream/60">Learns</p>
                        <p className="mt-2 text-sm leading-6">Spice level, cuisine patterns, allergies, comfort-food moods.</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4 text-cream">
                        <p className="text-xs uppercase tracking-[0.18em] text-cream/60">Suggests</p>
                        <p className="mt-2 text-sm leading-6">Menus, chefs, and occasions before booking feels like work.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-[1.75rem] border border-[#6C63FF]/20 bg-white/90 p-5 shadow-xl md:block">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6C63FF]">Launch Goal</p>
                <p className="mt-2 text-2xl font-semibold text-dark">95%+ match accuracy</p>
                <p className="mt-1 text-sm text-dark/60">By month 6 of active learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Why AI</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              Why Every Meal Should Be Personal
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-dark/8 bg-white p-8 shadow-[0_12px_40px_rgba(26,26,26,0.05)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose/10 text-rose">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-dark">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-dark/70">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-up bg-dark py-20 text-cream md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Features</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              What Savri AI Can Do
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6C63FF]/18 text-[#c7c3ff]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-gold/20 px-3 py-1 text-xs uppercase tracking-[0.16em] text-gold/90">
                    Coming soon
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cream/72">{feature.description}</p>

                <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-black/10 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cream/45">Visual</p>
                  <p className="mt-2 text-sm text-cream/82">{feature.visual}</p>
                </div>

                <div className="mt-4 flex gap-3 rounded-[1.5rem] border border-rose/12 bg-rose/8 p-4">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-sm leading-6 text-cream/86">{feature.example}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Experience</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              The Savri AI Experience
            </h2>
            <p className="mt-5 text-base leading-7 text-dark/68 md:text-lg">
              From the first taste quiz to the next better meal, the flow stays simple. The intelligence works quietly in the background.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="relative rounded-[2rem] border border-dark/8 bg-white p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-dark text-lg font-semibold text-cream">
                  {step.number}
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark/68">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf4] py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Use Cases</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              Savri AI in Real Life
            </h2>
          </div>

          <div className="mt-14 grid gap-6 xl:grid-cols-2">
            {stories.map((story) => (
              <article
                key={story.profile}
                className="rounded-[2rem] border border-dark/8 bg-white p-8 shadow-[0_12px_40px_rgba(26,26,26,0.05)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">Profile</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-dark">{story.profile}</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-dark/72">
                  <p>
                    <span className="font-semibold text-dark">Challenge:</span> {story.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-dark">Savri AI Solution:</span> {story.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-dark">Outcome:</span> {story.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="reveal-up bg-dark py-20 text-cream md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Timeline</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              When Is Savri AI Coming?
            </h2>
            <p className="mt-5 text-base leading-7 text-cream/68 md:text-lg">
              We&apos;re building Savri AI thoughtfully. Quality over speed. Every feature ships only when it improves the experience for real homes.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6">
            {roadmap.map((item) => (
              <div
                key={item.month}
                className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-7 md:grid-cols-[220px_1fr]"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{item.month}</p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold">{item.phase}</h3>
                </div>
                <div className="grid gap-3">
                  {item.items.map((detail) => (
                    <div key={detail} className="flex items-start gap-3 rounded-2xl bg-black/12 px-4 py-3">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#c7c3ff]" />
                      <span className="text-sm text-cream/86">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Privacy</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              Your Privacy. Our Priority.
            </h2>
            <p className="mt-5 text-base leading-7 text-dark/68 md:text-lg">
              We believe AI should enhance privacy, not invade it. Every feature is designed with your trust in mind.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {privacyPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-[2rem] border border-dark/8 bg-white p-8 shadow-[0_12px_40px_rgba(26,26,26,0.05)]"
              >
                <ShieldCheck className="h-7 w-7 text-rose" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-dark">{point.title}</h3>
                <p className="mt-4 text-base leading-7 text-dark/68">{point.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf4] py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">FAQ</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              Questions About Savri AI
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-4xl divide-y divide-dark/10 rounded-[2rem] border border-dark/8 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-dark marker:content-none">
                  {faq.question}
                  <span className="text-2xl text-rose transition group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pr-8 text-sm leading-7 text-dark/68">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="notify" className="reveal-up bg-[linear-gradient(180deg,#1a1a1a_0%,#261c1d_100%)] py-20 text-cream md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-12">
            <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Waitlist</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                  Be First to Know When Savri AI Launches
                </h2>
                <p className="mt-5 text-base leading-7 text-cream/72 md:text-lg">
                  Join the waitlist and get exclusive early access, special pricing, and insider updates.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Early notice when AI features go live",
                    "Special launch pricing updates",
                    "Insider product progress from August to December 2026",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-cream/82">
                      <HeartHandshake className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <SavriAiNewsletter />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-dark/8 bg-cream py-10">
        <div className="container mx-auto flex flex-col gap-4 px-6 text-sm text-dark/62 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2">
            <UtensilsCrossed className="h-4 w-4 text-rose" />
            Savri AI is being built to support real private-chef bookings, not replace the human experience.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 font-semibold text-rose hover:text-rose-dark">
            Explore Savri home page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
