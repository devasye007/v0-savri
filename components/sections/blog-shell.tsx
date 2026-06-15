import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    <div className="min-h-screen bg-cream text-dark">
      <Navbar />

      <article className="container mx-auto max-w-3xl px-6 pt-32 pb-16 lg:px-8 lg:pt-36">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] uppercase tracking-[0.32em] text-dark/55"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition hover:text-rose">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-dark/25">/</li>
            <li>
              <Link href="/blog" className="transition hover:text-rose">
                Blog
              </Link>
            </li>
            <li aria-hidden className="text-dark/25">/</li>
            <li aria-current="page" className="text-rose">
              {title.split(" — ")[0]}
            </li>
          </ol>
        </nav>

        <header className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
            Savri Blog · Delhi NCR
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-dark md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-dark/55">
            {dateLabel} · {readingTimeMin} min read · By Devasye Sachdeva, Founder
          </p>
        </header>

        <div className="prose-savri mt-10 space-y-5 text-[16px] leading-relaxed text-dark/75">
          {children}
        </div>

        {/* End CTA */}
        <div className="mt-12 rounded-[1.75rem] border border-dark/8 bg-white p-6 shadow-[0_16px_40px_rgba(26,26,26,0.05)] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
            Ready to book?
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-dark md:text-3xl">
            Get a verified private chef to your door
          </p>
          <p className="mt-3 text-sm leading-7 text-dark/65">
            Regular bookings from ₹549. Party bookings from ₹5,999 in Delhi.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/party"
              className="immersive-button inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-rose px-6 py-3 text-sm font-semibold text-cream hover:bg-rose-dark"
            >
              Book a Party Chef
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-dark/15 px-6 py-3 text-sm font-semibold text-dark transition hover:border-dark/35"
            >
              Regular Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <aside className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
            Read next
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {related.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="immersive-card rounded-2xl border border-dark/8 bg-white p-5 transition hover:border-rose/40"
              >
                <p className="font-serif text-lg font-semibold leading-snug text-dark">
                  {p.title}
                </p>
                <p className="mt-2 text-sm text-dark/60">{p.excerpt}</p>
                <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.24em] text-rose">
                  Read article <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </div>
        </aside>
      </article>

      <Footer />
    </div>
  )
}
