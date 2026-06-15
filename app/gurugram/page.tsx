import type { Metadata } from "next"

import { CityLanding } from "@/components/sections/city-landing"

export const metadata: Metadata = {
  title: "Private Chef in Gurugram | Party Bookings from ₹7,998",
  description:
    "Hire a verified private chef at home in Gurugram. Party bookings ₹7,998 (₹5,999 + ₹1,999 NCR travel). 4 snacks, 4 mains, 2 sides, 2 desserts cooked live in your kitchen. DLF, Sushant Lok, Golf Course Road and more.",
  keywords: [
    "private chef Gurugram",
    "private chef Gurgaon",
    "party chef Gurugram",
    "chef at home Gurugram",
    "private chef booking Gurgaon",
    "chef for birthday party Gurugram",
    "home party chef Gurugram",
    "Savri Gurugram",
  ],
  alternates: {
    canonical: "https://savri.co.in/gurugram",
  },
  openGraph: {
    type: "website",
    url: "https://savri.co.in/gurugram",
    siteName: "Savri",
    locale: "en_IN",
    title: "Private Chef in Gurugram | Savri Party Bookings",
    description:
      "Verified private chefs at home in Gurugram. Party bookings at ₹7,998 across DLF, Sushant Lok, Golf Course Road and the rest of Gurugram.",
    images: [{ url: "/images/party-mains.jpg", width: 1200, height: 630, alt: "Savri private chef Gurugram" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Chef in Gurugram | Savri Party Bookings",
    description: "Party bookings from ₹7,998. Verified chefs across Gurugram.",
    images: ["/images/party-mains.jpg"],
  },
}

const cityFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a private chef cost in Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Savri party booking in Gurugram costs ₹7,998 in total — ₹5,999 base plus a ₹1,999 NCR travel surcharge. The price covers the chef, on-site cooking of 12 dishes, and full kitchen cleanup.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover DLF Cyber City, Sushant Lok and Golf Course Road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our chefs regularly travel across DLF (Phase 1–5), Sushant Lok, Golf Course Road, Sohna Road, Sector 50/56, MG Road and the new sectors. We confirm your address before the chef leaves so timings stay on track.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a party chef in Gurugram on short notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We need a minimum of 24 hours so the chef has time for menu confirmation and ingredient sourcing. WhatsApp us as soon as you have a date — for the weekend rush in Gurugram we recommend confirming earlier in the week.",
      },
    },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://savri.co.in/#business",
  name: "Savri",
  url: "https://savri.co.in/gurugram",
  telephone: "+919810641941",
  email: "founder@savri.co.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: "Gurugram",
  priceRange: "₹₹",
}

export default function GurugramPage() {
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
        city="Gurugram"
        priceLabel="₹7,998"
        priceBreakdown="₹5,999 base + ₹1,999 NCR travel surcharge"
        heroBlurb="Verified private chefs across Gurugram — for the dinner you would rather host than order in. From DLF high-rises to Sohna Road floors, we get a chef to your kitchen on the date and time you confirm."
        neighborhoods={[
          "DLF Phase 1",
          "DLF Phase 2",
          "DLF Phase 3",
          "DLF Phase 4",
          "DLF Phase 5",
          "Sushant Lok",
          "Golf Course Road",
          "Sohna Road",
          "MG Road",
          "Sector 50",
          "Sector 56",
          "Sector 49",
          "South City I & II",
          "Nirvana Country",
        ]}
        intro="Gurugram homes work hard for a single weekend evening — between high-rise security, building service lifts and the predictable Friday traffic on Golf Course Road, getting good food on the table for ten guests is its own logistics puzzle. Savri removes the puzzle. Tell us the date, confirm the menu, and a vetted chef is in your kitchen with knives, induction prep and a clean apron well before the first guest arrives."
        body="Our Gurugram party booking is ₹7,998 — ₹5,999 base and a ₹1,999 NCR travel surcharge that covers the chef's commute from our central Delhi base. Twelve dishes are cooked live: 4 snacks, 4 main course, 2 sides of breads or rice, 2 desserts and a fresh salad. We have regulars across DLF Phase 4 apartments, Sushant Lok floors and the newer sectors near Sohna Road who book us for birthdays, in-law lunches, anniversaries and small office dinners. Need a custom menu? Vegetarian only? Jain? Gluten-light? Mention it in the WhatsApp thread and we will build the plan around it before the chef leaves."
        occasions={[
          "Apartment birthdays across DLF Phase 4 and Phase 5",
          "In-law lunches on Golf Course Road",
          "Anniversary dinners in Sushant Lok and South City",
          "Office leadership dinners in MG Road condos",
          "House-warming parties across the new Sohna Road sectors",
        ]}
      />
    </>
  )
}
