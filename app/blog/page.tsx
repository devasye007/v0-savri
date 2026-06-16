import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Savri Blog — Private Chef Tips, Home Dining Guides & Party Planning in Delhi NCR",
  description:
    "Practical guides on hiring a private chef in Delhi NCR, planning home parties, and how Savri's verified chef bookings work. Updated regularly.",
  keywords: [
    "private chef Delhi blog",
    "home dining Delhi guide",
    "party chef Delhi tips",
    "how to hire a private chef",
    "chef at home Delhi NCR",
  ],
  alternates: {
    canonical: "https://savri.co.in/blog",
  },
  openGraph: {
    type: "website",
    url: "https://savri.co.in/blog",
    siteName: "Savri",
    locale: "en_IN",
    title: "Savri Blog — Private Chef & Party Planning Guides for Delhi NCR",
    description: "Hiring guides, party planning and home dining advice from Savri.",
    images: [{ url: "/images/hero-food.jpg", width: 1200, height: 630, alt: "Savri Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savri Blog — Private Chef & Party Planning Guides for Delhi NCR",
    description: "Hiring guides, party planning and home dining advice from Savri.",
    images: ["/images/hero-food.jpg"],
  },
}

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Savri Blog",
  url: "https://savri.co.in/blog",
  publisher: { "@type": "Organization", name: "Savri", url: "https://savri.co.in" },
  blogPost: blogPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    url: `https://savri.co.in/blog/${p.slug}`,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    author: { "@type": "Person", name: "Devasye Sachdeva" },
  })),
}

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <div className="min-h-screen overflow-x-hidden bg-[#1A1A1A] text-[#F5F0E8]">
        <Navbar />

        <main>
          {/* ─────────── 01 / HERO ─────────── */}
          <section className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 text-center md:pt-40">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A1A1A_0%,transparent_18%,transparent_82%,#1A1A1A_100%)]" />

            <div className="absolute left-6 top-28 text-[11px] uppercase tracking-[0.5em] text-[#F5F0E8]/55 md:left-16 md:top-32">
              <Link href="/" className="hover:text-[#F5F0E8]">Home</Link>
              <ChevronRight className="mx-2 inline h-3 w-3" />
              <span className="text-[#C9A84C]">Blog</span>
            </div>

            <p className="reveal-up relative z-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.5em] text-[#C9A84C] md:text-[13px]">
              <Sparkles className="h-3 w-3" /> 01 — The Blog
            </p>
            <h1
              className="reveal-up relative z-10 mt-10 max-w-[1400px] font-serif italic leading-[0.9] text-[#F5F0E8]"
              style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
            >
              Private chef tips, home dining guides & party planning in Delhi NCR.
            </h1>
            <p className="reveal-up relative z-10 mt-10 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
              Practical, up-to-date writing from the Savri team on hiring private chefs in Delhi
              NCR, planning home parties and getting the most out of a Savri booking.
            </p>
          </section>

          {/* ─────────── 02 / POSTS ─────────── */}
          <section className="relative w-full overflow-hidden py-32 md:py-48">
            <div className="savri-ai-glow-rose" aria-hidden="true" />
            <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
              <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
                <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#B5636A]">02 — Latest Writing</p>
                <h2
                  className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                  style={{ fontSize: "clamp(48px, 9vw, 170px)" }}
                >
                  Field notes from Savri.
                </h2>
              </div>

              <div className="savri-ai-stagger mt-24 md:mt-32">
                {blogPosts.map((p, i) => (
                  <article key={p.slug} className="savri-ai-row reveal-up grid grid-cols-1 gap-8 border-t border-[#F5F0E8]/12 py-14 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-20">
                    <div className="flex flex-col gap-4">
                      <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A84C]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F5F0E8]/55">
                        {new Date(p.datePublished).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        · {p.readingTimeMin} min read
                      </p>
                    </div>
                    <div>
                      <Link href={`/blog/${p.slug}`} className="group block">
                        <h3
                          className="font-serif italic leading-[0.95] text-[#F5F0E8] transition group-hover:text-[#B5636A]"
                          style={{ fontSize: "clamp(28px, 4.2vw, 72px)" }}
                        >
                          {p.title}
                        </h3>
                        <p className="mt-6 max-w-3xl text-base leading-8 text-[#F5F0E8]/70 md:text-lg">
                          {p.excerpt}
                        </p>
                        <p className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#B5636A] transition group-hover:text-[#C9A84C]">
                          Read article <ArrowRight className="h-3 w-3" />
                        </p>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ─────────── 03 / PARTY CTA ─────────── */}
          <section className="relative w-full overflow-hidden py-32 md:py-48">
            <div className="savri-ai-glow-gold" aria-hidden="true" />
            <div className="relative mx-auto max-w-[1600px] px-6 md:px-16">
              <div className="grid gap-12 md:grid-cols-[0.3fr_1fr]">
                <p className="reveal-up text-[11px] uppercase tracking-[0.5em] text-[#C9A84C]">03 — Party Bookings</p>
                <div>
                  <h2
                    className="reveal-up font-serif italic leading-[0.9] text-[#F5F0E8]"
                    style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
                  >
                    Private chef for your next party. ₹5,999 in Delhi.
                  </h2>
                  <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-[#F5F0E8]/72 md:text-lg">
                    12 dishes cooked live in your kitchen. Vetted chef. Cleanup included.
                  </p>
                  <Link
                    href="/party"
                    className="savri-ai-btn-primary mt-10 inline-flex min-h-12 items-center gap-2 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] md:text-[15px]"
                  >
                    Book a Party Chef <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
