import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Savri — Private Chef Booking Launching Delhi NCR June 2026',
  description: 'Book a verified private chef for your home in Delhi NCR. Daily meals, parties, special occasions. Coming June 2026.',
  generator: 'v0.app',
  openGraph: {
    title: 'Savri — Private Chef Booking',
    description: 'Your chef. Your kitchen. Your table. Launching Delhi NCR June 2026.',
    images: ['/images/hero-food.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-cream text-dark">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
