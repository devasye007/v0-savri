import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { blogPosts } from "@/lib/blog-posts"

type BlogShellProps = {
  slug: string
  title: string
  datePublished: string
  readingTimeMin: number
  children: React.ReactNode
}

export function BlogShell({ slug, title, datePublished, readingTimeMin, children }: BlogShellProps) {
  const related = blogPosts.filter((p) => p.slug !== slug)
  const dateLabel = new Date(datePublished).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
      <Navbar />

      <main>
        {/* ─────────── HERO ─────────── */}
        <section className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-6 pt-32 pb-24 md:px-16 md:pt-40">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

          <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
            <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
            <ChevronRight className="mx-2 inline h-3 w-3" />
            <Link href="/blog" className="hover:text-[#F5F0E8]">Blog</Link>
            <ChevronRight className="mx-2 inline h-3 w-3" />
            <span className="text-[#C9A84C]">{title.split(" — ")[0]}</span>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1600px]">
            <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A] md:text-[13px]">
              Savri Blog · Delhi NCR
            </p>
            <h1
              className="reveal-up mt-10 font-serif italic leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
            >
              {title}
            </h1>
            <p className="reveal-up mt-10 text-[11px] uppercase tracking-[0.32em] text-[#F5F0E8]/55">
              {dateLabel} · {readingTimeMin} min read · By Devasye Sachdeva, Founder
            </p>
          </div>
        </section>

        {/* ─────────── BODY ─────────── */}
        <section className="relative w-full overflow-hidden py-24 md:py-32">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <article className="relative mx-auto max-w-[800px] px-6 prose-savri space-y-7 text-base leading-8 text-[#F5F0E8]/82 md:text-lg">
            {children}
          </article>
        </section>

        {/* ─────────── END CTA ─────────── */}
        <section className="relative w-full overflow-hidden py-24 md:py-32">
          <div className="savri-ai-glow-gold" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">Ready to book?</p>
              <div>
                <h2
                  className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
                >
                  Get a verified private chef to your door
                </h2>
                <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                  Regular bookings from ₹549. Party bookings from ₹5,999 in Delhi.
                </p>
                <div className="reveal-up mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/party"
                    className="savri-ai-btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                  >
                    Book a Party Chef
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/"
                    className="savri-ai-btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                  >
                    Regular Pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── READ NEXT ─────────── */}
        <section className="relative w-full overflow-hidden py-24 md:py-32">
          <div className="savri-ai-glow-rose" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
            <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
              <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">Read next</p>
              <h2
                className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
              >
                Keep reading.
              </h2>
            </div>

            <div className="savri-ai-stagger mt-20 md:mt-28">
              {related.slice(0, 3).map((p, i) => (
                <article key={p.slug} className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-12 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-16">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <Link href={`/blog/${p.slug}`} className="group block">
                      <h3
                        className="font-serif italic leading-[0.98] text-[#F5F0E8] transition group-hover:text-[#B5636A]"
                        style={{ fontSize: "clamp(24px, 3.4vw, 56px)" }}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-5 max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                        {p.excerpt}
                      </p>
                      <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#B5636A] transition group-hover:text-[#C9A84C]">
                        Read article <ArrowRight className="h-3 w-3" />
                      </p>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
