import type { Metadata } from "next"

import { CityLanding } from "@/components/sections/city-landing"

export const metadata: Metadata = {
  title: "Private Chef in Delhi | Party Bookings from ₹5,999",
  description:
    "Hire a verified private chef at home in Delhi. Regular bookings from ₹549. Party bookings from ₹5,999 — 4 snacks, 4 mains, 2 sides, 2 desserts. We serve South, Central, North and West Delhi.",
  keywords: [
    "private chef Delhi",
    "private chef at home Delhi",
    "chef on demand Delhi",
    "home chef booking Delhi",
    "party chef Delhi",
    "chef for birthday party Delhi",
    "private chef booking Delhi NCR",
    "home dining experience Delhi",
    "Savri Delhi",
  ],
  alternates: {
    canonical: "https://savri.co.in/delhi",
  },
  openGraph: {
    type: "website",
    url: "https://savri.co.in/delhi",
    siteName: "Savri",
    locale: "en_IN",
    title: "Private Chef in Delhi | Savri Party Bookings",
    description:
      "Book a verified private chef at home in Delhi. Party bookings from ₹5,999. South, Central, North and West Delhi.",
    images: [{ url: "/images/party-mains.jpg", width: 1200, height: 630, alt: "Savri private chef Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Chef in Delhi | Savri Party Bookings",
    description: "Party bookings from ₹5,999. Verified chefs across Delhi.",
    images: ["/images/party-mains.jpg"],
  },
}

const cityFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a private chef cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Savri's regular private chef bookings in Delhi start at ₹549 for 1–3 guests. Our party booking — 4 snacks, 4 mains, 2 sides and 2 desserts — is ₹5,999 anywhere in Delhi with no travel surcharge.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Delhi does Savri serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our private chefs travel across South Delhi (Hauz Khas, Greater Kailash, Defence Colony, Saket), Central Delhi (Connaught Place, Karol Bagh, Lutyens'), North Delhi (Civil Lines, Model Town) and West Delhi (Punjabi Bagh, Janakpuri).",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a private chef in Delhi for a birthday party?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Delhi party booking at ₹5,999 is designed for birthdays, anniversaries, in-law dinners and intimate house parties of roughly 10–20 guests. A verified chef cooks live in your kitchen and cleans up after.",
      },
    },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://savri.co.in/#business",
  name: "Savri",
  url: "https://savri.co.in/delhi",
  telephone: "+919810641941",
  email: "founder@savri.co.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  areaServed: "Delhi",
  priceRange: "₹₹",
}

export default function DelhiPage() {
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
        city="Delhi"
        priceLabel="₹5,999"
        priceBreakdown="Delhi base — no travel surcharge"
        heroBlurb="Trained private chefs at your home across Delhi — for weeknight dinners, milestone birthdays and the kind of parties you actually get to enjoy instead of plate-juggling."
        neighborhoods={[
          "Hauz Khas",
          "Greater Kailash",
          "Defence Colony",
          "Saket",
          "Vasant Kunj",
          "Connaught Place",
          "Karol Bagh",
          "Lutyens' Delhi",
          "Civil Lines",
          "Model Town",
          "Punjabi Bagh",
          "Janakpuri",
          "Dwarka",
        ]}
        intro="Savri runs a fully managed private chef booking service in Delhi. Our chefs are background-verified, trained on Indian regional cuisine and reviewed every month by real households across the city. Whether you live in a South Delhi independent floor or a Central Delhi apartment, we get a chef to your kitchen on your date with everything sorted before they ring the bell."
        body="Delhi is also where our flagship ₹5,999 party booking lives — twelve dishes cooked fresh at your home with no NCR travel charge. Regulars use it for birthdays in Greater Kailash, board-game nights in Vasant Kunj, in-law lunches in Defence Colony and small office gatherings in Connaught Place. The chef shows up with their own knives, sets up in your kitchen, plates the food at the time you asked for, and leaves the counters cleaner than they found them."
        occasions={[
          "Birthdays at home in Greater Kailash, Saket and Hauz Khas",
          "In-law dinners across Lutyens' and Civil Lines",
          "Brunches for 10–20 guests in Defence Colony and Karol Bagh",
          "Office leadership lunches in Connaught Place flats",
          "Anniversary dinners across Vasant Kunj and Dwarka",
        ]}
      />
    </>
  )
}
