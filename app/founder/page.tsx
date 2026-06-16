import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export const metadata: Metadata = {
  title: "Built from a Sunday with no cook and a dead Zomato feed. | Savri",
  description:
    "The story behind Savri — a private chef platform built by a 22-year-old who was genuinely tired of bad delivery food. Launching Delhi NCR, June 2026.",
  openGraph: {
    title: "Built from a Sunday with no cook and a dead Zomato feed.",
    description:
      "The story behind Savri — a private chef platform built by a 22-year-old who was genuinely tired of bad delivery food.",
  },
}

const timelineMilestones = [
  {
    label: "Final Year of College",
    copy: "The idea takes shape in a Chennai apartment.",
  },
  {
    label: "Graduation 2026",
    copy: "Moved back to Delhi. Went all in on Savri.",
  },
  {
    label: "March 2026",
    copy: "Product development begins. Every feature built in-house.",
  },
  {
    label: "May 2026",
    copy: "Chef pipeline starts. Personal cooking tests begin.",
  },
  {
    label: "June 2026",
    copy: "Delhi NCR launch. The Sunday problem gets solved.",
  },
]

const audienceItems = [
  "The flatmates who are tired of negotiating whose turn it is to cook.",
  "The family whose regular cook called in sick again.",
  "The working professional who gets home at 10pm and deserves a proper meal, not a sad delivery box.",
  "The couple who wants a real dinner at home without the stress of making it happen.",
  "The parents hosting family on Sunday who want to actually sit with their guests instead of being stuck in the kitchen.",
]

const buildItems = [
  "Finding & vetting the first wave of chefs across Delhi NCR",
  "Running personal cooking tests before signing anyone",
  "Building every part of the product himself",
  "Preparing for a June 2026 launch",
]

export default function FounderPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        {/* ─────────── 01 / HERO ─────────── */}
        <section className="relative isolate flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="savri-ai-orb" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

          <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
            <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
            <ChevronRight className="mx-2 inline h-3 w-3" />
            <span className="text-[#C9A84C]">Our Story</span>
          </div>

          <p className="reveal-up relative z-10 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
            01 — The Story
          </p>
          <h1
            className="reveal-up relative z-10 mt-10 font-serif italic leading-[0.86] text-[#F5F0E8]"
            style={{ fontSize: "clamp(56px, 11vw, 220px)" }}
          >
            Built from a Sunday with no cook and a dead Zomato feed.
          </h1>
          <p className="reveal-up relative z-10 mt-10 max-w-2xl font-serif italic text-xl text-[#F5F0E8]/72 md:text-2xl">
            The real story behind Savri.
          </p>

          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-[#F5F0E8]/55">
            <span>↓ Scroll</span>
          </div>
        </section>

        {/* ─────────── 02 / THE PERSON ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — The Person</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Who is Devasye
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">01</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  Devasye Sachdeva is a 22-year-old computer science student who specialised in AI and Machine Learning at SRM University, Chennai.
                </p>
              </div>
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">02</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  He graduated recently — but Savri started before that. It started in his college apartment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 03 / THE IDEA ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — The Idea</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                There was nothing in between.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">01</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  Picture a Sunday morning in a Chennai apartment shared by four college guys.
                </p>
              </div>
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">02</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  The cook had taken the day off. Again. It was a regular thing.
                </p>
              </div>
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">03</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  Open Swiggy. Scroll for 20 minutes. Order something that arrives cold, overpriced, and somehow still disappointing.
                </p>
              </div>
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">04</span>
                <div className="space-y-6 text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  <p>
                    They were not asking for much. Just a proper home-cooked meal. Dal. Roti. Something that felt real. But that option did not exist.
                  </p>
                  <p>
                    You could go to a restaurant. You could order delivery. Or you could cook yourself — which, after a full week of college and assignments, nobody wanted to do.
                  </p>
                  <p>There was nothing in between.</p>
                  <p>That gap is what Devasye could not stop thinking about.</p>
                </div>
              </div>
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">05</span>
                <div>
                  <p className="text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                    If you could get someone to come to your home, cook a fresh meal in your kitchen, and leave it spotless — why was that not a thing?
                  </p>
                  <p className="mt-6 text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                    Why was a private chef only something you read about in a magazine interview?
                  </p>
                  <p
                    className="mt-10 font-serif italic leading-[0.95] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(32px, 4.6vw, 80px)" }}
                  >
                    Why could it not be ₹549?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 04 / THE BUILD ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">04 — The Build</p>
              <div>
                <h2
                  className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
                >
                  Built in final year. Launched in Delhi.
                </h2>
                <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  Devasye started building Savri in his final year — between classes, between exams, between everything that final year throws at you. He came back to Delhi after graduating and went all in.
                </p>
              </div>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {buildItems.map((item, i) => (
                <div
                  key={item}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
                >
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">{item}</p>
                </div>
              ))}
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">05</span>
                <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                  No shortcuts on the chef quality. No shortcuts on the experience. Every booking should feel like someone genuinely cared about your evening.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 05 / WHO THIS IS FOR ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">05 — Who This Is For</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                Everyone who has been in that apartment.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {audienceItems.map((item, i) => (
                <div
                  key={item}
                  className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20"
                >
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">{item}</p>
                </div>
              ))}
              <div className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#B5636A]">06</span>
                <div>
                  <p className="max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                    This is not a luxury product. This is the solution to a problem that millions of people in India face every single week.
                  </p>
                  <p
                    className="mt-8 font-serif italic leading-[0.95] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(28px, 4vw, 64px)" }}
                  >
                    Savri just made it affordable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 06 / THE JOURNEY ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">06 — The Journey</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                How Savri came to be.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-24 md:mt-32">
              {timelineMilestones.map((milestone, i) => (
                <div
                  key={milestone.label}
                  className="savri-ai-row reveal-up grid grid-cols-1 items-baseline gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.18fr_0.3fr_1fr] md:gap-12 md:py-18"
                >
                  <div
                    className="font-serif italic leading-none text-[#C9A84C]"
                    style={{ fontSize: "clamp(72px, 9vw, 180px)" }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="font-serif italic leading-[0.95] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(24px, 2.6vw, 44px)" }}
                  >
                    {milestone.label}
                  </h3>
                  <p className="max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                    {milestone.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 07 / A NOTE ─────────── */}
        <section className="relative w-full overflow-hidden py-32 md:py-48">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">07 — A Note</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
              >
                From Devasye
              </h2>
            </div>

            <div className="reveal-up mt-20 md:mt-28">
              <blockquote className="mx-auto max-w-3xl space-y-6 border-l-2 border-[#B5636A]/60 pl-8 md:pl-12">
                <p className="font-serif italic text-xl leading-9 text-[#F5F0E8]/90 md:text-2xl">
                  &ldquo;I have lived this problem. My friends have lived this problem. Almost everyone I know in this country has lived this problem.
                </p>
                <p className="text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  A cook who disappears on Sunday. A kitchen that sits empty because nobody has the energy. A Zomato order that somehow costs ₹600 and tastes like nothing.
                </p>
                <p className="text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  I built Savri because I was genuinely tired of that being the only option.
                </p>
                <p className="text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  You deserve a proper meal at home. Freshly cooked. In your kitchen. By someone who knows what they are doing. For less than you spent on that last disappointing delivery.
                </p>
                <p className="font-serif italic text-xl text-[#F5F0E8] md:text-2xl">
                  That is Savri. I hope you feel the difference the first time you book.&rdquo;
                </p>
                <footer className="border-t border-[#F5F0E8]/15 pt-6">
                  <p className="font-semibold text-[#F5F0E8]">— Devasye Sachdeva</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#B5636A]">
                    Founder, Savri
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
