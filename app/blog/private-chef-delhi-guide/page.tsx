import type { Metadata } from "next"
import Link from "next/link"

import { BlogShell } from "@/components/sections/blog-shell"
import { articleSchema } from "@/lib/article-schema"
import { getPost } from "@/lib/blog-posts"

const post = getPost("private-chef-delhi-guide")!

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `https://savri.co.in/blog/${post.slug}` },
  openGraph: {
    type: "article",
    url: `https://savri.co.in/blog/${post.slug}`,
    siteName: "Savri",
    locale: "en_IN",
    title: post.title,
    description: post.description,
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    images: [{ url: "/images/hero-food.jpg", width: 1200, height: 630, alt: "Savri private chef Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: ["/images/hero-food.jpg"],
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <BlogShell slug={post.slug} title={post.title} datePublished={post.datePublished} readingTimeMin={post.readingTimeMin}>
        <p className="reveal-fade">
          If you are looking to book a{" "}
          <Link href="/" className="text-[#B5636A] underline-offset-4 hover:underline">
            private chef
          </Link>{" "}
          for your home in Delhi NCR in 2026, the experience has changed quite a bit from even a
          year ago. You are no longer comparing a few caterers and home cooks on WhatsApp — there
          is now a clear category of <em>private chef booking</em> services that send a vetted
          professional to your kitchen, cook fresh from your menu, and clean up after themselves.
          This guide walks through what a good private chef Delhi booking looks like in 2026, what
          it costs, and how to actually book one.
        </p>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          What does &ldquo;private chef at home&rdquo; actually mean?
        </h2>
        <p className="reveal-fade">
          A proper private chef Delhi booking has four moving parts: the chef themselves, the menu,
          the ingredients and the post-meal cleanup. A solid home dining experience Delhi service
          handles all four — the chef arrives at the time you confirmed, with their own knives, a
          locked-in menu, fresh ingredients sourced for that booking and the agreement that the
          kitchen leaves as clean as it started. If any of those four are missing, you are really
          just paying for a home cook, not a private chef booking Delhi NCR service.
        </p>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          What should it cost in 2026?
        </h2>
        <p className="reveal-fade">
          Pricing across the personal chef Delhi market is wider than people realize. Most generic
          on-demand services charge ₹1,500 and up per session, often with hidden ingredient
          markups and overtime fees that nobody quotes upfront.{" "}
          <Link href="/" className="text-[#B5636A] underline-offset-4 hover:underline">
            Savri
          </Link>{" "}
          starts at ₹549 for a 1–3 guest table with 2 dishes, and ₹1,149 for a full table of 4–6
          guests with 4 dishes. Ingredients are billed separately and transparently at real
          market rates — no fuzzy multipliers. Party-sized bookings (10–20 guests with 12 dishes)
          start at ₹5,999 in Delhi, with a flat ₹1,999 surcharge across NCR.
        </p>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          What to look for before you book
        </h2>
        <p className="reveal-fade">
          Three things separate a great private chef Delhi booking from a mediocre one:
        </p>
        <ul className="reveal-fade list-disc space-y-3 pl-6 marker:text-[#C9A84C]">
          <li>
            <strong className="text-[#F5F0E8]">Verified chefs.</strong> Background-checked, trained on Indian regional
            cuisine, and reviewed monthly by real households. Ask the service explicitly.
          </li>
          <li>
            <strong className="text-[#F5F0E8]">Clean pricing.</strong> One headline price for the session. Ingredients
            itemized. No &ldquo;convenience&rdquo; or &ldquo;packaging&rdquo; fees added at the end.
          </li>
          <li>
            <strong className="text-[#F5F0E8]">Cleanup included.</strong> The chef leaves your kitchen at least as clean as
            they found it. This sounds basic — many cheap personal chef Delhi services skip it.
          </li>
        </ul>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          How to actually book
        </h2>
        <ol className="reveal-fade list-decimal space-y-3 pl-6 marker:text-[#C9A84C]">
          <li>
            Pick the date and time you want the food to be ready. Most chef at home Delhi
            services need at least 24 hours&apos; notice.
          </li>
          <li>
            Confirm the menu — choose dishes, share dietary restrictions, mention if anyone is
            doing Jain prep or has serious allergies.
          </li>
          <li>
            On the day, the chef arrives, sets up in your kitchen, cooks live and plates the food
            at your requested time. They clean up before leaving.
          </li>
        </ol>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          Where to go from here
        </h2>
        <p className="reveal-fade">
          For the regular dinner-at-home experience, the{" "}
          <Link href="/" className="text-[#B5636A] underline-offset-4 hover:underline">
            Savri homepage
          </Link>{" "}
          has the booking flow and live availability. For 10–20 guest parties, the{" "}
          <Link href="/party" className="text-[#B5636A] underline-offset-4 hover:underline">
            party bookings page
          </Link>{" "}
          has the full menu and pricing breakdown — and if you want to dig into specific
          neighborhoods, our{" "}
          <Link href="/delhi" className="text-[#B5636A] underline-offset-4 hover:underline">
            Delhi
          </Link>
          ,{" "}
          <Link href="/gurugram" className="text-[#B5636A] underline-offset-4 hover:underline">
            Gurugram
          </Link>{" "}
          and{" "}
          <Link href="/noida" className="text-[#B5636A] underline-offset-4 hover:underline">
            Noida
          </Link>{" "}
          pages cover the areas we serve regularly.
        </p>
      </BlogShell>
    </>
  )
}
