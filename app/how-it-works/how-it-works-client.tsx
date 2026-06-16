"use client"

import Image from "next/image"
import { useEffect, useRef, type CSSProperties } from "react"
import { ArrowRight } from "lucide-react"

const HERO_IMG =
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80"
const BLEED_IMG =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&q=80"
const CTA_IMG =
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"

type Step = { step: string; title: string; timing: string; copy: string }
type FAQ = { question: string; answer: string }

function useOnEnter<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const root = entry.target as HTMLElement
            root.classList.add("is-on")
            root
              .querySelectorAll<HTMLElement>(
                ".savri-rise, .savri-from-left, .savri-from-right, .savri-line-draw",
              )
              .forEach((el) => el.classList.add("is-on"))
            io.unobserve(root)
          }
        })
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [threshold])
  return ref
}

function WordStream({
  text,
  startVh,
  endVh,
  windowVh = 28,
  className = "",
}: {
  text: string
  startVh: number
  endVh: number
  windowVh?: number
  className?: string
}) {
  const words = text.split(" ")
  const span = endVh - startVh
  const step = words.length > 1 ? span / (words.length - 1) : 0
  return (
    <span className={className}>
      {words.map((w, i) => {
        const ws = Math.round(startVh + i * step)
        const we = Math.round(ws + windowVh)
        return (
          <span
            key={i}
            className="savri-word"
            style={{ "--ws": ws, "--we": we } as CSSProperties}
          >
            {w}
          </span>
        )
      })}
    </span>
  )
}

function HeroMoment() {
  return (
    <div className="savri-hero-wrap">
      <section className="savri-hero-pin">
        <div className="absolute inset-0 savri-hero-img">
          <Image
            src={HERO_IMG}
            alt="A chef setting up at a home kitchen"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.78)_14%,rgba(26,26,26,0.62)_46%,rgba(26,26,26,0.95)_88%,#1A1A1A_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.55)_0%,rgba(10,10,10,0)_55%)]" />

        <div className="savri-hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#F5F0E8]">
          <h1 className="flex flex-col items-center leading-[0.86] tracking-tight">
            <span
              className="block font-serif font-semibold text-[#F5F0E8]"
              style={{ fontSize: "clamp(60px, 11vw, 200px)" }}
            >
              How
            </span>
            <span
              className="block font-serif font-semibold text-[#B5636A]"
              style={{ fontSize: "clamp(72px, 14vw, 260px)", lineHeight: 0.82 }}
            >
              It Works.
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
            Savri is designed to feel premium without feeling complicated. Here is the full process, step by step.
          </p>
        </div>

        <div className="savri-hero-foot absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 text-[#F5F0E8]">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C] md:text-[12px]">
            Six clean steps
          </span>
          <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8]/55">↓ Scroll</span>
        </div>
      </section>
    </div>
  )
}

function StepsRevealMoment() {
  // 6 steps × ~80vh activation windows
  return (
    <section className="savri-words-wrap text-[#F5F0E8]" style={{ height: "520vh" }}>
      <div className="savri-words-pin">
        <div className="mx-auto w-full max-w-[1600px]">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">The Steps</p>
          <p
            className="mt-6 font-serif leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(32px, 4.8vw, 88px)" }}
          >
            <WordStream
              text="Sign up. Confirm area. Move on."
              startVh={60}
              endVh={140}
              className="block"
            />
            <WordStream
              text="Choose Small Table or Full Table."
              startVh={140}
              endVh={210}
              className="mt-[0.3em] block"
            />
            <WordStream
              text="Pick the date. Lock the time."
              startVh={210}
              endVh={280}
              className="mt-[0.3em] block"
            />
            <WordStream
              text="Select your dishes."
              startVh={280}
              endVh={340}
              className="mt-[0.3em] block"
            />
            <WordStream
              text="Book and pay."
              startVh={340}
              endVh={400}
              className="mt-[0.3em] block"
            />
            <WordStream
              text="Chef arrives. You eat."
              startVh={400}
              endVh={470}
              className="mt-[0.3em] block italic text-[#B5636A]"
            />
          </p>
        </div>
      </div>
    </section>
  )
}

function StepsDetailMoment({ steps }: { steps: Step[] }) {
  return (
    <section className="relative z-[3] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">The Full Flow</p>
        <h2
          className="reveal-up mt-8 font-serif font-semibold leading-[0.9]"
          style={{ fontSize: "clamp(40px, 6.5vw, 120px)" }}
        >
          Six steps,
          <br />
          <span className="text-[#C9A84C]">in detail.</span>
        </h2>

        <div className="savri-ai-stagger mt-24 md:mt-32">
          {steps.map((step) => (
            <article
              key={step.step}
              className="savri-ai-row reveal-up grid grid-cols-1 items-baseline gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.18fr_0.45fr_1fr] md:gap-12 md:py-18"
            >
              <div
                className="font-serif font-semibold leading-none text-[#C9A84C]"
                style={{ fontSize: "clamp(72px, 9vw, 180px)" }}
              >
                {step.step}
              </div>
              <div className="flex flex-col gap-4">
                <h3
                  className="font-serif font-semibold leading-[0.95] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(28px, 3.4vw, 56px)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]/85">
                  Typical time · {step.timing}
                </p>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function KitchenBleed() {
  return (
    <section className="savri-bleed-wrap text-[#F5F0E8]">
      <div className="absolute inset-0 savri-bleed-img">
        <Image
          src={BLEED_IMG}
          alt="Chef cooking in a private home kitchen"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="savri-bleed-overlay absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.4)_18%,rgba(26,26,26,0.2)_50%,rgba(26,26,26,0.8)_82%,#1A1A1A_100%)]" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-20 md:pb-24">
        <div className="savri-bleed-text max-w-[1200px]">
          <p
            className="block font-serif font-semibold"
            style={{ fontSize: "clamp(40px, 7vw, 128px)", lineHeight: 1 }}
          >
            Your kitchen.
          </p>
          <p
            className="mt-1 block font-serif font-semibold text-[#B5636A]"
            style={{ fontSize: "clamp(44px, 7.5vw, 136px)", lineHeight: 1 }}
          >
            Your home.
          </p>
        </div>
      </div>
    </section>
  )
}

function ChefDoesMoment({ chefDoes, youProvide }: { chefDoes: string[]; youProvide: string[] }) {
  return (
    <section className="relative z-[4] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">The Chef</p>
            <h3
              className="reveal-up mt-6 font-serif font-semibold leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 88px)" }}
            >
              Service, cooking, plating, cleanup.
            </h3>
            <ul className="reveal-up mt-10 space-y-5">
              {chefDoes.map((item) => (
                <li
                  key={item}
                  className="border-l border-[#C9A84C]/40 pl-5 text-base leading-7 text-[#F5F0E8]/85 md:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">Your Side</p>
            <h3
              className="reveal-up mt-6 font-serif font-semibold leading-[0.9]"
              style={{ fontSize: "clamp(36px, 5vw, 88px)" }}
            >
              The essentials from your side.
            </h3>
            <ul className="reveal-up mt-10 space-y-5">
              {youProvide.map((item) => (
                <li
                  key={item}
                  className="border-l border-[#B5636A]/55 pl-5 text-base leading-7 text-[#F5F0E8]/85 md:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function TwentyFourHourRule() {
  const ref = useOnEnter<HTMLElement>(0.3)
  return (
    <section
      ref={ref}
      className="relative z-[5] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
    >
      <div className="savri-ambient-zoom absolute inset-0">
        <Image
          src={BLEED_IMG}
          alt="Ingredients laid out for prep"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.85)_16%,rgba(26,26,26,0.7)_50%,rgba(26,26,26,0.85)_84%,#1A1A1A_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="savri-rise uppercase text-[#C9A84C]"
          style={{ fontSize: "clamp(12px, 1.5vw, 22px)", letterSpacing: "0.5em" }}
        >
          The 24-Hour Rule
        </p>
        <h2
          className="savri-from-left mt-6 font-serif font-semibold leading-[0.88] text-[#F5F0E8]"
          style={{ fontSize: "clamp(80px, 18vw, 360px)" }}
        >
          24
        </h2>
        <h2
          className="savri-from-right font-serif font-semibold leading-[0.88] text-[#B5636A]"
          style={{ fontSize: "clamp(40px, 8vw, 160px)", transitionDelay: "150ms" }}
        >
          hours minimum.
        </h2>
        <p
          className="savri-rise mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/75 md:text-lg"
          style={{ transitionDelay: "350ms" }}
        >
          It protects quality. Your chef needs time for sourcing, route planning, and prep decisions. That lead time is what keeps the service professional instead of rushed.
        </p>
      </div>
    </section>
  )
}

function FAQMoment({ faqs, bookingUrl }: { faqs: FAQ[]; bookingUrl: string }) {
  const ref = useOnEnter<HTMLElement>(0.15)
  return (
    <section
      ref={ref}
      className="relative z-[6] w-full overflow-hidden bg-[#1A1A1A] py-32 text-[#F5F0E8] md:py-48"
    >
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="savri-rise text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">FAQ</p>
        <h2
          className="savri-rise mt-8 font-serif font-semibold leading-[0.9]"
          style={{ fontSize: "clamp(48px, 9vw, 170px)", transitionDelay: "100ms" }}
        >
          Questions before
          <br />
          <span className="text-[#B5636A]">you book.</span>
        </h2>

        <div className="savri-ai-faq mt-20 divide-y divide-[#F5F0E8]/15 md:mt-28">
          {faqs.map((faq, i) => (
            <details key={faq.question} open={i === 0} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none">
                <span className="flex items-center gap-5">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl text-[#F5F0E8] md:text-2xl">{faq.question}</span>
                </span>
                <span className="text-3xl text-[#B5636A] transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 pr-8 text-base leading-8 text-[#F5F0E8]/72 md:text-lg">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="reveal-up mt-20 flex justify-center md:mt-24">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
          >
            Book a Chef Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function CinematicCTA({ bookingUrl }: { bookingUrl: string }) {
  const ref = useOnEnter<HTMLElement>(0.25)
  return (
    <section
      ref={ref}
      className="relative z-[7] h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]"
    >
      <Image
        src={CTA_IMG}
        alt="Warm home dining moment"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,rgba(26,26,26,0.6)_18%,rgba(26,26,26,0.75)_50%,rgba(26,26,26,0.92)_82%,#1A1A1A_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h2
          className="savri-rise font-serif font-semibold leading-[0.85]"
          style={{ fontSize: "clamp(96px, 18vw, 360px)" }}
        >
          Ready?
        </h2>
        <p
          className="savri-rise mt-10 text-[#C9A84C]"
          style={{ fontSize: "clamp(20px, 3vw, 52px)", transitionDelay: "200ms" }}
        >
          Book your private chef.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="savri-rise mt-14 inline-flex items-center justify-center bg-[#B5636A] px-10 py-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158] md:text-base"
          style={{ transitionDelay: "400ms" }}
        >
          Book on WhatsApp →
        </a>
      </div>
    </section>
  )
}

export function HowItWorksClient({
  steps,
  chefDoes,
  youProvide,
  faqs,
  bookingUrl,
}: {
  steps: Step[]
  chefDoes: string[]
  youProvide: string[]
  faqs: FAQ[]
  bookingUrl: string
}) {
  return (
    <main className="savri-travel-stack overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <HeroMoment />
      <StepsDetailMoment steps={steps} />
      <KitchenBleed />
      <ChefDoesMoment chefDoes={chefDoes} youProvide={youProvide} />
      <TwentyFourHourRule />
      <FAQMoment faqs={faqs} bookingUrl={bookingUrl} />
      <CinematicCTA bookingUrl={bookingUrl} />
    </main>
  )
}
