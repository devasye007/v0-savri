import type { Metadata } from "next"

import { HomepageRedesign } from "@/components/sections/homepage-redesign"
import { Footer } from "@/components/sections/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Navbar } from "@/components/sections/navbar"
import { FloatingPartyCTA } from "@/components/ui/floating-party-cta"

export const metadata: Metadata = {
  title: "Savri | Private Chef at Home & Party Bookings in Delhi NCR",
  description:
    "Book a verified private chef at your home in Delhi NCR. Fresh food, your recipes, kitchen cleaned. Regular bookings from ₹549. Party bookings from ₹5,999. Ghar Ka Khana, Ghar Pe.",
  keywords: [
    "private chef Delhi",
    "private chef booking Delhi NCR",
    "chef at home Delhi",
    "party chef Delhi",
    "home dining Delhi",
    "private chef Gurugram",
    "private chef Noida",
    "private chef Faridabad",
    "private chef Ghaziabad",
    "Savri",
  ],
  alternates: {
    canonical: "https://savri.co.in",
  },
  openGraph: {
    type: "website",
    url: "https://savri.co.in",
    siteName: "Savri",
    locale: "en_IN",
    title: "Savri | Private Chef at Home & Party Bookings in Delhi NCR",
    description:
      "Authentic. Fresh. Personal. Regular dining from ₹549. Party bookings from ₹5,999. Verified private chefs across Delhi, Noida, Gurugram, Faridabad and Ghaziabad.",
    images: [
      {
        url: "/images/hero-food.jpg",
        width: 1200,
        height: 630,
        alt: "Savri private chef at home — premium Indian dining in Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savri | Private Chef at Home & Party Bookings in Delhi NCR",
    description: "Private chefs at your home. Regular dining ₹549. Party bookings ₹5,999.",
    images: ["/images/hero-food.jpg"],
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://savri.co.in/#business",
  name: "Savri",
  description: "Premium private chef booking platform for Delhi NCR",
  url: "https://savri.co.in",
  telephone: "+919810641941",
  email: "founder@savri.co.in",
  image: "https://savri.co.in/images/hero-food.jpg",
  logo: "https://savri.co.in/savri-logo-dark.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/savri.in/",
    "https://x.com/savri_in",
    "https://www.linkedin.com/company/savri",
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Private Chef Booking",
  serviceType: "Private chef at home",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://savri.co.in/#business",
    name: "Savri",
  },
  areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
  url: "https://savri.co.in",
  offers: [
    {
      "@type": "Offer",
      name: "Small Table",
      price: "549",
      priceCurrency: "INR",
      description: "1-3 guests, 2 dishes of your choice, 1 hour of cooking",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Full Table",
      price: "1149",
      priceCurrency: "INR",
      description: "4-6 guests, 4 dishes of your choice, 2 hours of cooking",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Party Booking",
      price: "5999",
      priceCurrency: "INR",
      description: "Party booking with private chef in Delhi — 4 snacks, 4 main course, 2 sides, 2 desserts + salad",
      availability: "https://schema.org/InStock",
      url: "https://savri.co.in/party",
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <HomepageRedesign />
      <Footer />
      <BackToTop />
      <FloatingPartyCTA />
    </>
  )
}
