import type { Metadata } from "next"
import Link from "next/link"

import { BlogShell } from "@/components/sections/blog-shell"
import { articleSchema } from "@/lib/article-schema"
import { getPost } from "@/lib/blog-posts"

const post = getPost("home-dining-delhi")!

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
    images: [{ url: "/images/hero-food.jpg", width: 1200, height: 630, alt: "Home dining Delhi" }],
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
        <p>
          The biggest shift in Delhi dining in 2026 is not a new restaurant — it&apos;s where
          people are choosing to eat. Home dining Delhi is replacing takeout and short-notice
          restaurant trips for a meaningful slice of weeknight and weekend meals, and the
          private chef service Delhi category is the biggest driver. Here are the five reasons
          this is happening.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl reveal-up">
          1. The math has flipped
        </h2>
        <p>
          A weeknight dinner-at-home with a chef at home Delhi NCR booking now starts at ₹549
          for 1–3 guests — cheaper than a midrange restaurant meal for two once you add cabs,
          drinks markup and tips. For 4–6 guests at ₹1,149, the per-head price is in the same
          ballpark as a casual dinner out, but the food is fresher and you control the menu.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl reveal-up">
          2. Hygiene is verifiable
        </h2>
        <p>
          You can see the chef wash their hands. You can see your ingredients. You know how long
          the dish sat between the pan and the plate. With a personal chef Delhi booking, there
          is no opaque kitchen — the cooking is happening three feet from your dining table. For
          households with young kids, elderly parents or anyone immunocompromised, that
          transparency is the actual product.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl reveal-up">
          3. Menus get personal
        </h2>
        <p>
          Restaurant menus are designed for the median customer. A private chef service Delhi
          booking is designed for you specifically — your spice tolerance, your dal preference,
          your one allergy that your mother-in-law forgot about. After a few bookings the chef
          starts to remember things and the experience gets dramatically better than any
          restaurant can offer.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl reveal-up">
          4. No commute, no parking, no waiting
        </h2>
        <p>
          Delhi traffic between 7 PM and 10 PM does not respect your dinner plans. A home dining
          Delhi booking removes the round-trip cab problem entirely. The chef shows up; the food
          shows up; you don&apos;t move from the couch. For families with kids whose bedtimes
          don&apos;t bend, this single advantage is decisive.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl reveal-up">
          5. It scales for parties
        </h2>
        <p>
          The same chef at home Delhi NCR pipeline that handles a weeknight dinner for 3 also
          handles a 12-dish party for 15. A Savri party booking is ₹5,999 in Delhi (₹7,998
          across NCR) — twelve dishes cooked live, full cleanup. For most households that means
          the same trusted service for everyday meals, in-law lunches, milestone birthdays and
          office dinners.
        </p>

        <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl reveal-up">
          The takeaway
        </h2>
        <p>
          Home dining Delhi has stopped being &ldquo;the version when you can&apos;t go out&rdquo;
          and started being the default. If you want to try it, the{" "}
          <Link href="/" className="text-rose underline-offset-4 hover:underline">
            Savri homepage
          </Link>{" "}
          has the everyday booking flow; for parties, the{" "}
          <Link href="/party" className="text-rose underline-offset-4 hover:underline">
            party bookings page
          </Link>{" "}
          has the full 12-dish menu. To see the differences vs traditional catering, read our{" "}
          <Link href="/blog/private-chef-vs-catering" className="text-rose underline-offset-4 hover:underline">
            private chef vs catering comparison
          </Link>
          .
        </p>
      </BlogShell>
    </>
  )
}
