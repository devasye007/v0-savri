import type { Metadata } from "next"
import Link from "next/link"

import { BlogShell } from "@/components/sections/blog-shell"
import { articleSchema } from "@/lib/article-schema"
import { getPost } from "@/lib/blog-posts"

const post = getPost("party-chef-delhi")!

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
    images: [{ url: "/images/party-mains.jpg", width: 1200, height: 630, alt: "Party chef Delhi NCR" }],
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
        <p className="reveal-fade">
          Hiring a{" "}
          <Link href="/party" className="text-[#B5636A] underline-offset-4 hover:underline">
            party chef Delhi
          </Link>{" "}
          to cook live at your home is starting to replace restaurant takeout and traditional
          banquet catering for 10–20 guest parties. This 2026 guide walks through why that shift
          is happening, what a good{" "}
          <Link href="/party" className="text-[#B5636A] underline-offset-4 hover:underline">
            private chef for party Delhi NCR
          </Link>{" "}
          booking actually includes, how to plan the menu, and what to expect on the day of the
          party.
        </p>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          Why a home party chef beats restaurant catering
        </h2>
        <p className="reveal-fade">
          A chef for house party Delhi booking gives you three things that party catering at home
          Delhi simply can&apos;t match. First, the food is plated hot from your kitchen instead
          of sitting in chafing dishes for two hours. Second, you control the menu down to the
          dish — no &ldquo;set menu&rdquo; constraints. Third, the social dynamic of the chef
          working at your stove while guests sip drinks turns the cooking itself into part of the
          evening, instead of something that happened in a banquet truck two hours away.
        </p>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          What a Savri party booking actually includes
        </h2>
        <p className="reveal-fade">
          A Savri party booking in Delhi is ₹5,999 flat and includes a 12-dish spread cooked live
          in your kitchen: 4 snacks, 4 main course dishes, 2 sides of breads or fragrant rice, 2
          desserts and a fresh salad. The chef brings their knives, sets up in your kitchen, plates
          everything at the time you confirmed, and leaves the counters as clean as they were when
          they arrived. Across NCR (Noida, Gurugram, Faridabad, Ghaziabad) the same booking is
          ₹7,998 — Delhi base plus a flat ₹1,999 NCR travel surcharge.
        </p>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          How to plan the menu (and avoid common mistakes)
        </h2>
        <ul className="reveal-fade list-disc space-y-3 pl-6 marker:text-[#C9A84C]">
          <li>
            <strong className="text-[#F5F0E8]">Skew snack-heavy if you have a long cocktail hour.</strong> Four snacks is
            enough for ~90 minutes of pre-dinner mingling.
          </li>
          <li>
            <strong className="text-[#F5F0E8]">Keep two veg and two non-veg mains</strong> as a baseline unless you know
            your guest list. It covers almost every dietary mix without negotiation.
          </li>
          <li>
            <strong className="text-[#F5F0E8]">Pair contrasting breads.</strong> A laccha paratha plus a soft naan reads
            better on the table than two of the same.
          </li>
          <li>
            <strong className="text-[#F5F0E8]">Confirm allergies and Jain prep early.</strong> Mention it on the WhatsApp
            thread before menu lock-in so the chef can plan sourcing around it.
          </li>
        </ul>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          What to expect on the day
        </h2>
        <p className="reveal-fade">
          Your chef typically arrives 90–120 minutes before the food-ready time, depending on the
          menu complexity. They take over the kitchen, ask for any cooking gear they need, and
          start prep. Most cooking is live — the chef is in your kitchen the whole time. Food is
          plated at the time you asked for, served buffet-style or course-by-course based on your
          preference, and the chef cleans the kitchen before leaving. The last booking slot for
          chef for birthday party at home Delhi is 8:00 PM; if the session runs past 8:30 PM,
          you&apos;re asked to arrange return transportation for the chef.
        </p>

        <h2 className="reveal-up mt-14 font-serif italic text-3xl leading-[1.05] text-[#F5F0E8] md:text-4xl lg:text-5xl">
          Ready to book?
        </h2>
        <p className="reveal-fade">
          The full menu, fine print and current availability live on the{" "}
          <Link href="/party" className="text-[#B5636A] underline-offset-4 hover:underline">
            party bookings page
          </Link>
          . If you want to compare the home-chef model against traditional catering before you
          decide, our{" "}
          <Link href="/blog/private-chef-vs-catering" className="text-[#B5636A] underline-offset-4 hover:underline">
            private chef vs catering breakdown
          </Link>{" "}
          covers it. For Delhi-specific neighborhoods we cover (and the no-NCR-surcharge base
          price), see the{" "}
          <Link href="/delhi" className="text-[#B5636A] underline-offset-4 hover:underline">
            Delhi private chef page
          </Link>
          .
        </p>
      </BlogShell>
    </>
  )
}
