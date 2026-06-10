import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { IntroScreen } from '@/components/ui/intro-screen'
import { ComingSoonBanner } from '@/components/ui/coming-soon-banner'
import { LaunchBanner } from '@/components/ui/launch-banner'
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
  title: 'Savri — Premium Private Chef at Home',
  description: 'Book a verified private chef for your home. Transparent pricing, premium dining, and trusted chefs for intimate dinners, family meals, and celebrations.',
  openGraph: {
    title: 'Savri — Premium Private Chef at Home',
    description: 'Authentic. Fresh. Personal. Starting ₹549.',
    images: ['/images/hero-food.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/savri-logo-dark.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/savri-logo-light.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/savri-logo-dark.png',
        type: 'image/png',
      },
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
        <LaunchBanner />
        <IntroScreen />
        <LaunchPopup />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
