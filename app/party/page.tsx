import type { Metadata } from "next"

import { PartyClient } from "./party-client"

export const metadata: Metadata = {
  title: "Party Bookings | Private Chef for Your Party in Delhi NCR",
  description:
    "Book a private chef for your next party or gathering in Delhi. 4 snacks, 4 main course, 2 sides, 2 desserts. Starting ₹5,999 for Delhi, ₹7,998 for NCR (Noida/Gurugram/Faridabad/Ghaziabad). No stress. Just food.",
  keywords: [
    "party chef Delhi",
    "private chef for party Delhi",
    "chef for birthday party Delhi",
    "party booking chef NCR",
    "home party chef Gurugram",
    "party chef Noida",
    "party catering Delhi",
    "private chef booking Delhi NCR",
    "book private chef for party Delhi",
    "home dining experience Delhi",
  ],
  alternates: {
    canonical: "https://savri.co.in/party",
  },
  openGraph: {
    type: "website",
    url: "https://savri.co.in/party",
    siteName: "Savri",
    locale: "en_IN",
    title: "Party Bookings | Private Chef for Your Party in Delhi NCR | Savri",
    description:
      "12 dishes, one fixed price, live cooking at home. Party bookings from ₹5,999 in Delhi NCR.",
    images: [
      {
        url: "/images/party-mains.jpg",
        width: 1200,
        height: 630,
        alt: "Savri party booking — private chef serving curries and rice at home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Party Bookings | Private Chef for Your Party in Delhi NCR",
    description: "12 dishes. One chef. Zero stress. From ₹5,999 in Delhi NCR.",
    images: ["/images/party-mains.jpg"],
  },
}

const partyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Party Chef Booking Delhi NCR",
  serviceType: "Private party chef at home",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://savri.co.in/#business",
    name: "Savri",
    url: "https://savri.co.in",
  },
  description:
    "Private chef for your party or gathering at home in Delhi NCR. Includes 4 snacks, 4 main course, 2 sides, 2 desserts and salad. Chef cooks live in your kitchen and cleans up after.",
  areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
  url: "https://savri.co.in/party",
  offers: [
    {
      "@type": "Offer",
      name: "Delhi Party Booking",
      price: "5999",
      priceCurrency: "INR",
      description: "Delhi party booking — 4 snacks, 4 mains, 2 sides, 2 desserts + salad. Chef and cleanup included.",
      availability: "https://schema.org/InStock",
      areaServed: "Delhi",
    },
    {
      "@type": "Offer",
      name: "NCR Party Booking",
      price: "7998",
      priceCurrency: "INR",
      description: "NCR party booking (Noida, Gurugram, Faridabad, Ghaziabad). Includes ₹1,999 travel surcharge over the Delhi base.",
      availability: "https://schema.org/InStock",
      areaServed: ["Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a party chef booking cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Savri party bookings start at ₹5,999 for Delhi. For NCR areas (Noida, Gurugram, Faridabad, Ghaziabad) there is an additional ₹1,999 travel surcharge, making it ₹7,998 total.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a Savri party booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each party booking includes 4 snacks, 4 main course dishes, 2 sides (breads or rice), 2 desserts, and 1 salad. A verified private chef comes to your home, cooks fresh, and cleans the kitchen after.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer private chef services in Gurugram and Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Savri operates across Delhi NCR including Gurugram, Noida, Faridabad, and Ghaziabad. An additional travel surcharge of ₹1,999 applies for NCR locations.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a private chef for a party in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a party chef through the Savri website at savri.co.in/party or WhatsApp us directly. We confirm your booking, assign a verified chef, and handle everything from cooking to cleanup.",
      },
    },
    {
      "@type": "Question",
      name: "What is the last booking time for party bookings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Last party booking slot is 8:00 PM. If the session extends beyond 8:30 PM, the customer must arrange return transportation for the chef. Overtime charges of ₹999 per hour apply after the agreed food-ready time.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://savri.co.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Party Bookings",
      item: "https://savri.co.in/party",
    },
  ],
}

export default function PartyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partyServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PartyClient />
    </>
  )
}
