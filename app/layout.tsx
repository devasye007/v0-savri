import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { IntroScreen } from '@/components/ui/intro-screen'
import { ComingSoonBanner } from '@/components/ui/coming-soon-banner'
import { LaunchPopup } from '@/components/ui/launch-popup'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://savri.co.in'),
  title: {
    default: 'Savri | Private Chef at Home & Party Bookings in Delhi NCR',
    template: '%s | Savri',
  },
  description:
    'Book a verified private chef at your home in Delhi NCR. Fresh food, your recipes, kitchen cleaned. Regular bookings from ₹549. Party bookings from ₹5,999. Ghar Ka Khana, Ghar Pe.',
  applicationName: 'Savri',
  authors: [{ name: 'Savri', url: 'https://savri.co.in' }],
  creator: 'Savri',
  publisher: 'Savri',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Savri',
    locale: 'en_IN',
    url: 'https://savri.co.in',
    title: 'Savri | Private Chef at Home & Party Bookings in Delhi NCR',
    description: 'Authentic. Fresh. Personal. Regular dining from ₹549. Party bookings from ₹5,999.',
    images: [
      {
        url: '/images/hero-food.jpg',
        width: 1200,
        height: 630,
        alt: 'Savri private chef at home — premium Indian dining in Delhi NCR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@savri_in',
    creator: '@savri_in',
    title: 'Savri | Private Chef at Home & Party Bookings in Delhi NCR',
    description: 'Authentic. Fresh. Personal. Regular dining from ₹549. Party bookings from ₹5,999.',
    images: ['/images/hero-food.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    // TODO: Replace with the verification code from Google Search Console
    // (Settings → Ownership verification → HTML tag → copy the content value).
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
  },
  category: 'food',
  icons: {
    icon: [
      { url: '/savri-logo-dark.png', media: '(prefers-color-scheme: light)' },
      { url: '/savri-logo-light.png', media: '(prefers-color-scheme: dark)' },
      { url: '/savri-logo-dark.png', type: 'image/png' },
    ],
    apple: '/savri-logo-dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18031459831"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18031459831');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-cream text-dark">
        <ComingSoonBanner />
        <IntroScreen />
        <LaunchPopup />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
