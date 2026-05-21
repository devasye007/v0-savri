import type { Metadata } from "next"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Reveal } from "@/components/ui/reveal"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SiteBreadcrumb } from "@/components/ui/site-breadcrumb"

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

export default function FounderPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-cream pt-32 text-dark">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="container mx-auto px-6 pb-20">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Our Story" }]} />
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">The Story</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">
              Built from a Sunday with no cook and a dead Zomato feed.
            </h1>
            <p className="mt-6 text-xl font-serif text-dark/60 md:text-2xl">The real story behind Savri.</p>
          </Reveal>
        </section>

        {/* ── The Person + The Idea intro ──────────────────────────────── */}
        <section className="bg-[#fffaf4] py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="immersive-card rounded-[2rem] border border-dark/8 bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">The Person</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold">Who is Devasye</h2>
                <p className="mt-6 text-base leading-8 text-dark/68">
                  Devasye Sachdeva is a 22-year-old computer science student who specialised in AI and Machine
                  Learning at SRM University, Chennai.
                </p>
                <p className="mt-4 text-base leading-8 text-dark/68">
                  He graduated recently — but Savri started before that. It started in his college apartment.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120} variant="right">
              <div className="immersive-card rounded-[2rem] border border-dark/8 bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">The Idea</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold">Where it started</h2>
                <p className="mt-6 text-base leading-8 text-dark/68">
                  Picture a Sunday morning in a Chennai apartment shared by four college guys.
                </p>
                <p className="mt-4 text-base leading-8 text-dark/68">
                  The cook had taken the day off. Again. It was a regular thing.
                </p>
                <p className="mt-4 text-base leading-8 text-dark/68">
                  Open Swiggy. Scroll for 20 minutes. Order something that arrives cold, overpriced, and somehow
                  still disappointing.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── The Full Idea ────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">The Idea</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                There was nothing in between.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <Reveal>
                <div className="space-y-6 text-base leading-8 text-dark/68">
                  <p>
                    They were not asking for much. Just a proper home-cooked meal. Dal. Roti. Something that felt
                    real. But that option did not exist.
                  </p>
                  <p>
                    You could go to a restaurant. You could order delivery. Or you could cook yourself — which,
                    after a full week of college and assignments, nobody wanted to do.
                  </p>
                  <p>There was nothing in between.</p>
                  <p>That gap is what Devasye could not stop thinking about.</p>
                </div>
              </Reveal>

              <Reveal delayMs={120} variant="right">
                <div className="immersive-card rounded-[2rem] border border-dark/8 bg-white p-8">
                  <p className="text-base leading-8 text-dark/68">
                    If you could get someone to come to your home, cook a fresh meal in your kitchen, and leave it
                    spotless — why was that not a thing?
                  </p>
                  <p className="mt-4 text-base leading-8 text-dark/68">
                    Why was a private chef only something you read about in a magazine interview?
                  </p>
                  <p className="mt-6 font-serif text-3xl font-semibold text-dark">Why could it not be ₹549?</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── The Build ────────────────────────────────────────────────── */}
        <section className="bg-[#fffaf4] py-20">
          <div className="container mx-auto px-6">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">The Build</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                Built in final year. Launched in Delhi.
              </h2>
              <p className="mt-6 text-base leading-8 text-dark/68">
                Devasye started building Savri in his final year — between classes, between exams, between
                everything that final year throws at you. He came back to Delhi after graduating and went all in.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Finding & vetting the first wave of chefs across Delhi NCR",
                },
                {
                  title: "Running personal cooking tests before signing anyone",
                },
                {
                  title: "Building every part of the product himself",
                },
                {
                  title: "Preparing for a June 2026 launch",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delayMs={index * 80} variant="up">
                  <article className="immersive-card interactive-spotlight rounded-[2rem] border border-dark/8 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.05)]">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose/10 font-semibold text-rose text-sm">
                      {index + 1}
                    </div>
                    <p className="mt-5 text-base leading-7 text-dark/68">{item.title}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 max-w-2xl">
              <div className="rounded-[2rem] border border-dark/8 bg-white p-8">
                <p className="text-base leading-8 text-dark/68">
                  No shortcuts on the chef quality. No shortcuts on the experience. Every booking should feel like
                  someone genuinely cared about your evening.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Who This Is For ──────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Who This Is For</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                Everyone who has been in that apartment.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {audienceItems.map((item, index) => (
                <Reveal key={item} delayMs={index * 80}>
                  <article className="immersive-card interactive-spotlight rounded-[2rem] border border-dark/8 bg-white p-7">
                    <p className="text-base leading-8 text-dark/68">{item}</p>
                  </article>
                </Reveal>
              ))}
              <Reveal delayMs={audienceItems.length * 80}>
                <article className="immersive-card interactive-spotlight rounded-[2rem] border border-rose/20 bg-rose/5 p-7 md:col-span-2 lg:col-span-1">
                  <p className="text-base leading-8 text-dark/68">
                    This is not a luxury product. This is the solution to a problem that millions of people in India
                    face every single week.
                  </p>
                  <p className="mt-4 font-serif text-2xl font-semibold text-dark">
                    Savri just made it affordable.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────────── */}
        <section className="bg-dark py-20 text-cream md:py-28">
          <div className="container mx-auto px-6">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">The Journey</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">How Savri came to be.</h2>
            </Reveal>

            <div className="mt-16 mx-auto max-w-2xl">
              {timelineMilestones.map((milestone, index) => (
                <Reveal key={milestone.label} delayMs={index * 100}>
                  <div className="relative flex gap-8 pb-10 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-rose bg-rose/20 text-sm font-semibold text-cream">
                        {index + 1}
                      </div>
                      {index < timelineMilestones.length - 1 && (
                        <div className="mt-2 w-0.5 flex-1 bg-rose/20" />
                      )}
                    </div>
                    <div className="pb-2 pt-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                        {milestone.label}
                      </p>
                      <p className="mt-2 text-base leading-7 text-cream/70">{milestone.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── A Note from Devasye ──────────────────────────────────────── */}
        <section className="bg-[#fffaf4] py-20 md:py-28">
          <div className="container mx-auto px-6">
            <Reveal className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">A Note</p>
              <blockquote className="mt-8 rounded-[2rem] border border-dark/8 bg-white p-10">
                <p className="font-serif text-xl leading-9 text-dark/80 md:text-2xl">
                  &ldquo;I have lived this problem. My friends have lived this problem. Almost everyone I know in
                  this country has lived this problem.
                </p>
                <p className="mt-6 text-base leading-8 text-dark/68">
                  A cook who disappears on Sunday. A kitchen that sits empty because nobody has the energy. A
                  Zomato order that somehow costs ₹600 and tastes like nothing.
                </p>
                <p className="mt-6 text-base leading-8 text-dark/68">
                  I built Savri because I was genuinely tired of that being the only option.
                </p>
                <p className="mt-6 text-base leading-8 text-dark/68">
                  You deserve a proper meal at home. Freshly cooked. In your kitchen. By someone who knows what
                  they are doing. For less than you spent on that last disappointing delivery.
                </p>
                <p className="mt-6 font-serif text-xl font-semibold text-dark">
                  That is Savri. I hope you feel the difference the first time you book.&rdquo;
                </p>
                <footer className="mt-8 border-t border-dark/8 pt-6">
                  <p className="font-semibold text-dark">— Devasye Sachdeva</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-rose">
                    Founder, Savri
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
