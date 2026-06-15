import type { Metadata } from "next"
import Link from "next/link"

import { BlogShell } from "@/components/sections/blog-shell"
import { articleSchema } from "@/lib/article-schema"
import { getPost } from "@/lib/blog-posts"

const post = getPost("private-chef-vs-catering")!

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
    images: [{ url: "/images/party-mains.jpg", width: 1200, height: 630, alt: "Private chef vs catering Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: ["/images/party-mains.jpg"],
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
        <p>
          If you&apos;re hosting 10–20 people in Delhi and weighing party catering Delhi against a{" "}
          <Link href="/" className="text-rose underline-offset-4 hover:underline">
            private chef Delhi
          </Link>{" "}
          booking, the right answer is almost always the chef. Here&apos;s why, broken down by
          the things that actually matter — cost, freshness, control, and cleanup.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
          1. Cost
        </h2>
        <p>
          Traditional party catering Delhi starts at around ₹500–₹800 per head for a basic spread
          and climbs fast if you want anything beyond the standard set menu. For 12 guests
          that&apos;s ₹6,000–₹9,600 before service charges. A Savri home chef service Delhi NCR
          party booking is ₹6,399 flat in Delhi and ₹8,398 across NCR — with no per-head scaling
          and no service fee. For most 10–20 guest gatherings, the private chef route comes out
          cheaper or matches it, while delivering a meaningfully better experience.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
          2. Freshness
        </h2>
        <p>
          Catering food is cooked at a central kitchen, transported in insulated boxes or chafing
          dishes, and held at temperature until your guests arrive. Even with the best operations,
          you lose texture on snacks, sogginess creeps into breads, and gravies thicken. A private
          chef Delhi setup is the opposite — the food finishes cooking five minutes before it
          hits the plate. The snack you eat at minute 3 of the party was in the pan at minute 0.
          That&apos;s a real, noticeable difference in how the meal lands.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
          3. Control over the menu
        </h2>
        <p>
          Catering menus come in tiers. You pick a tier, you pick within the tier. Dietary
          customizations are possible but slow — a vegan main or a Jain prep often takes 48–72
          hours of pre-confirmation. A home chef service Delhi NCR booking flips this. You build
          the menu dish by dish, the chef accommodates allergies and prep restrictions per-guest
          if needed, and you can change the snack list the morning of (as long as the
          ingredients are sourceable).
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
          4. Cleanup
        </h2>
        <p>
          Caterers drop the food off and leave. You inherit the chafing dishes, the disposable
          plates, the trays — and most importantly, the leftover gravy spills and the lingering
          oil. A private chef Delhi booking ends with the chef cleaning your kitchen before they
          leave. For party hosts who have spent the next morning scrubbing oil off the stove
          backsplash, this single difference is usually enough to switch services entirely.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
          When catering still wins
        </h2>
        <p>
          To be fair: if you&apos;re hosting 60+ guests, a catering operation is built for that
          scale and a single chef is not. For weddings and large corporate events, traditional
          catering still has the operational edge. But for the 10–20 guest sweet spot — birthdays,
          anniversaries, in-law dinners, small office gatherings — the private chef model wins on
          every dimension that matters.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
          Where to go next
        </h2>
        <p>
          See the full menu and pricing on the{" "}
          <Link href="/party" className="text-rose underline-offset-4 hover:underline">
            Savri party bookings page
          </Link>
          , or read our{" "}
          <Link href="/blog/party-chef-delhi" className="text-rose underline-offset-4 hover:underline">
            2026 party chef hiring guide
          </Link>{" "}
          for the day-of-event details. For ongoing dinner-at-home bookings (not party-sized),
          the{" "}
          <Link href="/" className="text-rose underline-offset-4 hover:underline">
            Savri homepage
          </Link>{" "}
          has live availability.
        </p>
      </BlogShell>
    </>
  )
}
