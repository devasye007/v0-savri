"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { BOOKING_URL } from "@/lib/site-data"

const HERO_IMG = "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=2400&q=80"
const CHEF_IMG = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80"
const PARTY_BG = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=2400&q=80"
const FINAL_BG = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2400&q=80"

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80", alt: "Hyderabadi biryani" },
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80", alt: "Hand-rolled pasta" },
  { src: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=900&q=80", alt: "Indian thali spread" },
  { src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80", alt: "Asian noodles" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80", alt: "Wood-fired pizza" },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80", alt: "Plated fine dining" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80", alt: "Restaurant plate" },
  { src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80", alt: "Breakfast spread" },
]

function useReveal<T extends HTMLElement>() {
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
            root.querySelectorAll<HTMLElement>(".savri-line, .savri-fade").forEach((el) => el.classList.add("is-on"))
            io.unobserve(root)
          }
        })
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])
  return ref
}

function CountUp({ target, prefix = "₹", duration = 1400 }: { target: number; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const run = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.round(target * eased))
              if (t < 1) requestAnimationFrame(run)
            }
            requestAnimationFrame(run)
            io.unobserve(node)
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-IN")}
    </span>
  )
}

function MinimalNav() {
  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-7 md:px-10 md:py-9">
        <Link href="/" className="font-serif text-2xl italic tracking-tight text-[#F5F0E8] md:text-3xl">
          Savri
        </Link>
        <div className="flex items-center gap-5 text-[12px] uppercase tracking-[0.22em] text-[#F5F0E8]/85 md:gap-9 md:text-[13px]">
          <Link href="/party" className="savri-nav-link hidden sm:inline-flex">
            Party Bookings
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="savri-nav-link text-[#C9A84C]"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Indian feast plated for a private chef dinner at home"
          fill
          priority
          sizes="100vw"
          className="savri-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.55)_0%,rgba(10,10,10,0.35)_38%,rgba(10,10,10,0.85)_100%)]" />
      </div>

      <MinimalNav />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="leading-[0.85] tracking-tight">
          <span
            className="savri-hero-rise block font-serif italic text-[#F5F0E8]"
            data-delay="1"
            style={{ fontSize: "clamp(64px, 10vw, 168px)" }}
          >
            Private Chef
          </span>
          <span
            className="savri-hero-rise mt-2 block font-sans font-extrabold text-[#B5636A]"
            data-delay="2"
            style={{ fontSize: "clamp(80px, 14vw, 240px)", lineHeight: 0.86 }}
          >
            Ghar Pe.
          </span>
        </h1>
      </div>

      <div
        className="savri-hero-rise absolute bottom-8 left-6 z-10 text-[11px] uppercase tracking-[0.34em] text-[#C9A84C] md:bottom-10 md:left-10 md:text-[12px]"
        data-delay="3"
      >
        Delhi NCR • Bookings Open
      </div>

      <div
        className="savri-hero-rise absolute bottom-8 right-6 z-10 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#F5F0E8]/70 md:bottom-10 md:right-10 md:text-[11px]"
        data-delay="4"
      >
        Scroll
        <span className="block h-12 w-px overflow-hidden bg-[#F5F0E8]/20">
          <span className="savri-scroll-line block h-full w-full bg-[#F5F0E8]" />
        </span>
      </div>
    </section>
  )
}

function FullBleedQuote() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Image
        src={CHEF_IMG}
        alt="Private chef plating a dish in a home kitchen"
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.05)_0%,rgba(10,10,10,0.15)_40%,rgba(10,10,10,0.78)_100%)]" />
      <div className="absolute inset-0 flex items-center justify-end px-6 md:px-16">
        <div className="max-w-[680px] text-right">
          <p
            className="font-serif italic leading-[0.92] text-[#F5F0E8]"
            style={{ fontSize: "clamp(40px, 7vw, 112px)" }}
          >
            <span className="savri-line block" data-stagger="1">Restaurant quality.</span>
            <span className="savri-line block" data-stagger="2">Zero effort.</span>
            <span className="savri-line block text-[#C9A84C]" data-stagger="3">Ghar pe.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

function StatementText() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="relative w-full bg-[#F5F0E8] px-6 py-32 text-[#1A1A1A] md:px-16 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <p
          className="font-serif leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(34px, 5vw, 88px)" }}
        >
          <span className="savri-line block" data-stagger="1">A verified chef arrives at your home.</span>
          <span className="savri-line block" data-stagger="2">Cooks exactly what you want.</span>
          <span className="savri-line block" data-stagger="3">Cleans up after.</span>
          <span className="savri-line block italic text-[#B5636A]" data-stagger="4">You just eat.</span>
        </p>
        <p
          className="savri-line mt-14 text-[12px] uppercase tracking-[0.32em] text-[#1A1A1A]/55 md:text-[13px]"
          data-stagger="5"
        >
          Starting ₹549 • Delhi NCR • Book in 2 minutes
        </p>
      </div>
    </section>
  )
}

function MenuGallery() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#1A1A1A] py-24 text-[#F5F0E8] md:py-32">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <div className="px-6 md:px-16 lg:sticky lg:top-1/3">
          <p className="savri-fade mb-6 text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">The Menu</p>
          <h2
            className="savri-fade font-serif italic leading-[0.92]"
            style={{ fontSize: "clamp(44px, 6vw, 104px)" }}
          >
            Your menu.
            <br />
            Your choice.
          </h2>
          <p className="savri-fade mt-8 max-w-md text-base leading-7 text-[#F5F0E8]/65 md:text-lg">
            Pick from 90+ dishes across Indian, Italian, Chinese and more. Your chef brings the
            ingredients and cooks it fresh in your kitchen.
          </p>
        </div>

        <div className="savri-fade overflow-hidden">
          <div className="savri-h-scroll pb-4">
            {GALLERY.map((item) => (
              <div
                key={item.src}
                className="relative h-[460px] w-[280px] overflow-hidden md:h-[560px] md:w-[360px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 360px, 280px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end p-5">
                  <p className="font-serif text-lg italic text-[#F5F0E8] md:text-xl">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingFloating() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#1A1A1A] py-28 text-[#F5F0E8] md:py-36">
      <Image
        src={HERO_IMG}
        alt=""
        fill
        loading="lazy"
        aria-hidden
        sizes="100vw"
        className="object-cover opacity-25 blur-[8px]"
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/70" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-16">
        <p className="savri-fade text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">Pricing</p>

        <div className="mt-10 grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto_1fr]">
          <div className="savri-fade text-left">
            <div
              className="font-sans font-bold leading-none text-[#C9A84C]"
              style={{ fontSize: "clamp(80px, 10vw, 200px)" }}
            >
              <CountUp target={549} />
            </div>
            <p className="mt-6 max-w-xs font-serif text-xl italic text-[#F5F0E8]/85 md:text-2xl">
              Small Table
            </p>
            <p className="mt-2 text-[13px] uppercase tracking-[0.28em] text-[#F5F0E8]/55">
              1–3 guests • 2 dishes
            </p>
          </div>

          <div className="savri-fade mx-auto hidden h-48 w-px bg-[#B5636A]/60 md:block" />
          <div className="savri-fade mx-auto block h-px w-32 bg-[#B5636A]/60 md:hidden" />

          <div className="savri-fade text-left md:text-right">
            <div
              className="font-sans font-bold leading-none text-[#C9A84C]"
              style={{ fontSize: "clamp(80px, 10vw, 200px)" }}
            >
              <CountUp target={1149} />
            </div>
            <p className="mt-6 font-serif text-xl italic text-[#F5F0E8]/85 md:ml-auto md:max-w-xs md:text-2xl">
              Full Table
            </p>
            <p className="mt-2 text-[13px] uppercase tracking-[0.28em] text-[#F5F0E8]/55">
              4–6 guests • 4 dishes
            </p>
          </div>
        </div>

        <div className="savri-fade mt-20 flex flex-wrap items-center gap-6 text-base md:text-lg">
          <Link
            href="/party"
            className="group inline-flex items-center gap-3 text-[#B5636A] hover:text-[#C9A84C]"
          >
            <span className="font-serif italic">Party Bookings from ₹5,999</span>
            <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function PartyTeaser() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Image
        src={PARTY_BG}
        alt="A celebratory dinner spread plated for a party booking"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,99,106,0.18),transparent_60%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="savri-fade text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
          Introducing
        </p>
        <h2
          className="savri-fade mt-6 font-serif italic leading-[0.85] text-[#F5F0E8]"
          style={{ fontSize: "clamp(64px, 12vw, 200px)" }}
        >
          party bookings
        </h2>
        <p
          className="savri-fade mt-8 font-sans font-bold tracking-tight text-white"
          style={{ fontSize: "clamp(20px, 2.6vw, 36px)" }}
        >
          AT JUST ₹6,399
        </p>
        <Link
          href="/party"
          className="savri-fade group mt-12 inline-flex items-center gap-3 bg-[#B5636A] px-9 py-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158]"
        >
          Book Your Party
          <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
        </Link>
      </div>
    </section>
  )
}

function HowItWorksRow({
  img,
  alt,
  text,
  index,
  reverse,
}: {
  img: string
  alt: string
  text: string
  index: number
  reverse: boolean
}) {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      ref={ref}
      className={`grid w-full grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-16 md:py-32 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="savri-fade relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]">
        <Image
          src={img}
          alt={alt}
          fill
          loading="lazy"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="savri-fade">
        <p className="font-serif text-[12px] uppercase tracking-[0.42em] text-[#B5636A]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <p
          className="mt-5 font-serif italic leading-[1] text-[#1A1A1A]"
          style={{ fontSize: "clamp(36px, 5vw, 88px)" }}
        >
          {text}
        </p>
      </div>
    </section>
  )
}

function HowItWorks() {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80",
      alt: "Chef arriving with fresh ingredients",
      text: "Book in 2 minutes. Choose your menu.",
      reverse: false,
    },
    {
      img: CHEF_IMG,
      alt: "Chef cooking in a home kitchen",
      text: "Chef arrives. Fresh ingredients, your kitchen.",
      reverse: true,
    },
    {
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80",
      alt: "Beautifully plated dishes",
      text: "Just eat. We clean up after.",
      reverse: false,
    },
  ]

  return (
    <section className="relative w-full bg-[#F5F0E8] text-[#1A1A1A]">
      <div className="px-6 pt-28 md:px-16 md:pt-40">
        <p className="text-[11px] uppercase tracking-[0.42em] text-[#B5636A]">How It Works</p>
      </div>

      {items.map((item, idx) => (
        <HowItWorksRow
          key={idx}
          img={item.img}
          alt={item.alt}
          text={item.text}
          reverse={item.reverse}
          index={idx}
        />
      ))}
    </section>
  )
}

function FinalCTA() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Image
        src={FINAL_BG}
        alt="A warm home dining moment"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.5),rgba(10,10,10,0.9))]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h2
          className="savri-fade font-serif italic leading-[0.92] text-[#F5F0E8]"
          style={{ fontSize: "clamp(48px, 8vw, 140px)" }}
        >
          Ready for ghar ka khana?
        </h2>
        <p className="savri-fade mt-8 text-base uppercase tracking-[0.38em] text-[#C9A84C] md:text-lg">
          Private Chef. Your Home. Your Menu.
        </p>

        <div className="savri-fade mt-14 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="https://wa.me/919810641941"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-w-[240px] items-center justify-center gap-3 bg-[#B5636A] px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#F5F0E8] transition-colors duration-300 hover:bg-[#9A5158]"
          >
            Book on WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
          <Link
            href="/ai"
            className="group inline-flex min-w-[240px] items-center justify-center gap-3 border border-[#F5F0E8]/55 bg-transparent px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#F5F0E8] transition-colors duration-300 hover:border-[#F5F0E8] hover:bg-[#F5F0E8]/8"
          >
            Download App
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function MinimalFooter() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-[#F5F0E8]">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-16 md:py-32">
        <p
          className="font-serif italic leading-none text-[#F5F0E8]"
          style={{ fontSize: "clamp(56px, 10vw, 180px)" }}
        >
          Savri
        </p>
        <p className="mt-6 text-[12px] uppercase tracking-[0.42em] text-[#C9A84C]">
          Private Chef, Ghar Pe.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-4 text-base">
            <Link href="/" className="savri-nav-link w-fit text-[#F5F0E8]/80 hover:text-[#F5F0E8]">
              Home
            </Link>
            <Link href="/party" className="savri-nav-link w-fit text-[#F5F0E8]/80 hover:text-[#F5F0E8]">
              Party Bookings
            </Link>
            <Link href="/blog" className="savri-nav-link w-fit text-[#F5F0E8]/80 hover:text-[#F5F0E8]">
              Blog
            </Link>
            <Link href="/compare" className="savri-nav-link w-fit text-[#F5F0E8]/80 hover:text-[#F5F0E8]">
              Compare
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-base md:items-end md:text-right">
            <a
              href="mailto:founder@savri.co.in"
              className="savri-nav-link w-fit text-[#F5F0E8]/80 hover:text-[#F5F0E8]"
            >
              founder@savri.co.in
            </a>
            <a
              href="https://www.instagram.com/savri.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="savri-nav-link w-fit text-[#F5F0E8]/80 hover:text-[#F5F0E8]"
            >
              Instagram @savri.in
            </a>
            <a
              href="https://savri.co.in"
              className="savri-nav-link w-fit text-[#F5F0E8]/80 hover:text-[#F5F0E8]"
            >
              savri.co.in
            </a>
          </div>
        </div>

        <p className="mt-24 text-[11px] uppercase tracking-[0.36em] text-[#F5F0E8]/40">
          © 2026 Savri • Delhi NCR • All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export function HomepageRedesign() {
  return (
    <main className="bg-[#1A1A1A] text-[#F5F0E8]">
      <HeroSection />
      <FullBleedQuote />
      <StatementText />
      <MenuGallery />
      <PricingFloating />
      <PartyTeaser />
      <HowItWorks />
      <FinalCTA />
      <MinimalFooter />
    </main>
  )
}
