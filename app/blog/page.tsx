import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
      <div className="min-h-screen bg-cream text-dark">
        <Navbar />

        <main className="container mx-auto max-w-5xl px-6 pt-32 pb-20 lg:px-8 lg:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
            Savri Blog
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-dark md:text-5xl reveal-up">
            Private chef tips, home dining guides & party planning in Delhi NCR.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-dark/65 md:text-lg">
            Practical, up-to-date writing from the Savri team on hiring private chefs in Delhi
            NCR, planning home parties and getting the most out of a Savri booking.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {blogPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="immersive-card group flex h-full flex-col rounded-[1.75rem] border border-dark/8 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.05)] transition hover:border-rose/40"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose">
                  {new Date(p.datePublished).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {p.readingTimeMin} min read
                </p>
                <h2 className="mt-4 font-serif text-2xl font-semibold leading-snug text-dark reveal-up">
                  {p.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-dark/68">{p.excerpt}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose">
                  Read article <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-[1.75rem] border border-dark/8 bg-[#1c1714] p-7 text-cream shadow-[0_20px_60px_rgba(212,175,55,0.12)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Party Bookings
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-snug text-cream md:text-4xl reveal-up">
              Private chef for your next party. ₹5,999 in Delhi.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-cream/70 md:text-base">
              12 dishes cooked live in your kitchen. Vetted chef. Cleanup included.
            </p>
            <Link
              href="/party"
              className="immersive-button mt-7 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-gold px-6 py-3 text-sm font-semibold text-dark hover:bg-gold-dark"
            >
              Book a Party Chef <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
