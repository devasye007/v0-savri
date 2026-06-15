import type { Metadata } from "next"

import { CityLanding } from "@/components/sections/city-landing"

export const metadata: Metadata = {
  title: "Private Chef in Noida | Party Bookings from ₹8,398",
  description:
    "Hire a verified private chef at home in Noida. Party bookings ₹8,398 (₹6,399 + ₹1,999 NCR travel). 12 dishes cooked live in your kitchen. We serve Sector 18, Sector 50, Sector 137, Greater Noida and Noida Extension.",
  keywords: [
    "private chef Noida",
    "party chef Noida",
    "chef at home Noida",
    "private chef booking Noida",
    "chef for birthday party Noida",
    "home party chef Noida",
    "private chef Greater Noida",
    "Savri Noida",
  ],
  alternates: {
    canonical: "https://savri.co.in/noida",
  },
  openGraph: {
    type: "website",
    url: "https://savri.co.in/noida",
    siteName: "Savri",
    locale: "en_IN",
    title: "Private Chef in Noida | Savri Party Bookings",
    description:
      "Verified private chefs at home in Noida. Party bookings at ₹8,398 across Sector 18, Sector 50, Sector 137, Greater Noida and Noida Extension.",
    images: [{ url: "/images/party-mains.jpg", width: 1200, height: 630, alt: "Savri private chef Noida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Chef in Noida | Savri Party Bookings",
    description: "Party bookings from ₹8,398. Verified chefs across Noida.",
    images: ["/images/party-mains.jpg"],
  },
}

const cityFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a private chef cost in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Savri party booking in Noida costs ₹8,398 in total — ₹6,399 base plus a ₹1,999 NCR travel surcharge. That covers the chef, on-site cooking of 12 dishes, and a clean kitchen after.",
      },
    },
    {
      "@type": "Question",
      name: "Which sectors of Noida do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover the full Noida footprint — Sector 18, 25, 41, 50, 62, 76, 100, 128, 137 — plus Greater Noida and Noida Extension. The travel surcharge is flat across all of these.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cook for a 15-person birthday in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our party booking is sized for 10–20 guests, which is the sweet spot for most Noida sector homes and high-rise apartments. The chef plates 12 dishes total: 4 snacks, 4 mains, 2 sides and 2 desserts plus a salad.",
      },
    },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://savri.co.in/#business",
  name: "Savri",
  url: "https://savri.co.in/noida",
  telephone: "+919810641941",
  email: "founder@savri.co.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: "Noida",
  priceRange: "₹₹",
}

export default function NoidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityFaqSchema) }}
      />
      <CityLanding
        city="Noida"
        priceLabel="₹8,398"
        priceBreakdown="₹6,399 base + ₹1,999 NCR travel surcharge"
        heroBlurb="Verified private chefs across Noida — for the kind of party where you actually sit with your guests instead of ferrying chafing dishes from the dining table to the kitchen. Sector apartments and Greater Noida floors equally welcome."
        neighborhoods={[
          "Sector 18",
          "Sector 25",
          "Sector 41",
          "Sector 50",
          "Sector 62",
          "Sector 76",
          "Sector 78",
          "Sector 100",
          "Sector 128",
          "Sector 137",
          "Greater Noida",
          "Noida Extension",
          "Jaypee Greens",
          "ATS One Hamlet",
        ]}
        intro="Noida households are great party hosts and frequently terrible to themselves about it — half the family ends up in the kitchen for three hours while the other half entertains the guests. Our private chef booking flips that. A vetted Savri chef arrives at your sector address or your Greater Noida tower with their own knives, takes over the kitchen and plates 12 dishes exactly when you asked the food to be ready."
        body="The Noida party booking is ₹8,398 — ₹6,399 base plus a flat ₹1,999 NCR travel surcharge. You get 4 snacks, 4 main course dishes, 2 sides of breads or rice, 2 desserts and a fresh salad. We have repeat hosts in Sector 50 high-rises, Sector 137 apartments, ATS One Hamlet and Jaypee Greens floors who book us for birthdays, anniversary dinners, in-law meals and small office gatherings. Tell us about dietary restrictions, Jain prep or particular family recipes on the WhatsApp thread and we will share the chef's plan back before the booking is locked in."
        occasions={[
          "Birthdays at home across Sector 50 and Sector 137",
          "In-law dinners in Jaypee Greens and ATS One Hamlet",
          "Anniversary lunches across Sector 100 apartments",
          "Office leadership meals in Sector 62 condos",
          "House-warming parties across Greater Noida and Noida Extension",
        ]}
      />
    </>
  )
}
