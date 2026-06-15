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
      <div className="min-h-screen bg-[#1A1A1A] text-[#F5F0E8]">
        <Navbar />

        <main className="container mx-auto max-w-5xl px-6 pt-32 pb-20 lg:px-8 lg:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B5636A]">
            Savri Blog
          </p>
          <h1
            className="reveal-up mt-6 font-serif italic leading-[0.95] text-[#F5F0E8]"
            style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
          >
            Private chef tips, home dining guides & party planning in Delhi NCR.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[#F5F0E8]/72 md:text-lg">
            Practical, up-to-date writing from the Savri team on hiring private chefs in Delhi
            NCR, planning home parties and getting the most out of a Savri booking.
          </p>

          <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-16">
            {blogPosts.map((p) => (
              <article key={p.slug} className="reveal-up">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col border-transparent"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                    {new Date(p.datePublished).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    · {p.readingTimeMin} min read
                  </p>
                  <h2 className="reveal-up mt-5 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] transition group-hover:text-[#B5636A] md:text-4xl lg:text-5xl">
                    {p.title}
                  </h2>
                  <p className="mt-5 flex-1 text-sm leading-7 text-[#F5F0E8]/68">{p.excerpt}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B5636A]">
                    Read article <ArrowRight className="h-4 w-4" />
                  </p>
                </Link>
              </article>
            ))}
          </div>

          <div className="reveal-up mt-24 border-transparent p-0 md:p-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A84C]">
              Party Bookings
            </p>
            <h2
              className="reveal-up mt-4 font-serif italic leading-[0.95] text-[#F5F0E8]"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              Private chef for your next party. ₹5,999 in Delhi.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#F5F0E8]/70 md:text-base">
              12 dishes cooked live in your kitchen. Vetted chef. Cleanup included.
            </p>
            <Link
              href="/party"
              className="immersive-button mt-8 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#1A1A1A] hover:bg-gold-dark"
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
