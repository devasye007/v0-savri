export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  description: string
  keywords: string[]
  datePublished: string
  dateModified: string
  readingTimeMin: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: "private-chef-delhi-guide",
    title: "How to Book a Private Chef in Delhi NCR — Complete 2026 Guide",
    excerpt:
      "Everything you need to know about hiring a private chef at home in Delhi NCR — what to look for, what it costs in 2026, and how to book in three steps.",
    description:
      "A complete 2026 guide to booking a private chef in Delhi NCR — what services include, expected pricing, what to ask before you book, and how Savri compares.",
    keywords: [
      "private chef Delhi",
      "private chef booking Delhi NCR",
      "chef at home Delhi",
      "home dining experience Delhi",
      "personal chef Delhi",
    ],
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
    readingTimeMin: 6,
  },
  {
    slug: "party-chef-delhi",
    title: "How to Hire a Private Chef for Your Party in Delhi — 2026 Guide",
    excerpt:
      "Why a home party chef is almost always the better move over restaurant catering — what to expect, what to plan, and how Savri's ₹6,399 party booking actually works.",
    description:
      "A practical 2026 guide to hiring a private chef for your party in Delhi NCR — menu planning, pricing, timing, dietary planning and what's actually included in a Savri party booking.",
    keywords: [
      "party chef Delhi",
      "private chef for party Delhi NCR",
      "chef for birthday party at home Delhi",
      "party catering at home Delhi",
      "chef for house party Delhi",
    ],
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
    readingTimeMin: 7,
  },
  {
    slug: "private-chef-vs-catering",
    title: "Private Chef vs Catering Service — Which is Better for Your Delhi Party?",
    excerpt:
      "Restaurant catering vs a private chef at home — a side-by-side look at cost, freshness, control and the small details that decide how a Delhi party actually feels.",
    description:
      "Private chef vs catering for a Delhi party — a side-by-side comparison of cost, freshness, customization, and clean-up. Spoiler: the private chef model usually wins.",
    keywords: [
      "private chef Delhi",
      "party catering Delhi",
      "home chef service Delhi NCR",
      "private chef vs catering",
    ],
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
    readingTimeMin: 5,
  },
  {
    slug: "home-dining-delhi",
    title: "5 Reasons Why Delhi is Switching to Private Chef Services in 2026",
    excerpt:
      "Home dining is having a moment in Delhi. Five practical reasons why people are choosing a private chef at home over takeout, restaurants and traditional catering.",
    description:
      "Why home dining is replacing restaurant takeout for Delhi households in 2026 — cost, hygiene, custom menus, no travel time, and the small experience details that matter.",
    keywords: [
      "home dining Delhi",
      "private chef service Delhi",
      "chef at home Delhi NCR",
      "personal chef Delhi",
    ],
    datePublished: "2026-06-15",
    dateModified: "2026-06-15",
    readingTimeMin: 5,
  },
]

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
