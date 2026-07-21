import type { Metadata } from "next"
import Image from "next/image"

const PAGE_URL = "https://savri.co.in/links"

export const metadata: Metadata = {
  title: "Savri — All Our Links",
  description:
    "Book a private chef, chat on WhatsApp, and follow Savri on Instagram and LinkedIn. All Savri links in one place.",
  alternates: { canonical: PAGE_URL },
  // Hidden hub page — reachable by direct link / QR only, kept out of search.
  robots: { index: false, follow: false },
}

type LinkItem = {
  label: string
  sublabel: string
  href: string
  icon: React.ReactNode
}

const links: LinkItem[] = [
  {
    label: "Visit our Website",
    sublabel: "savri.co.in",
    href: "https://www.savri.co.in",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
      </svg>
    ),
  },
  {
    label: "Book on WhatsApp",
    sublabel: "Chat with us to book a chef",
    href: "https://api.whatsapp.com/send/?phone=919310590819&text=Hi+Savri%2C+I+want+to+book+a+private+chef.&type=phone_number&app_absent=0",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "Follow on Instagram",
    sublabel: "@savri.in",
    href: "https://www.instagram.com/savri.in/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Connect on LinkedIn",
    sublabel: "Savri",
    href: "https://www.linkedin.com/company/savri",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-16 pt-14 sm:pt-20">
        {/* Brand header */}
        <Image
          src="/savri-logo-dark.png"
          alt="Savri"
          width={200}
          height={80}
          priority
          className="h-16 w-auto sm:h-20"
        />
        <p className="mt-4 text-center font-serif text-xl font-semibold text-dark sm:text-2xl">
          Private chef, ghar pe.
        </p>
        <p className="mt-2 text-center text-sm text-dark/60">
          Private chefs at your home across Delhi NCR.
        </p>

        {/* Link buttons */}
        <nav className="mt-9 flex w-full flex-col gap-3.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-dark/10 bg-white/70 px-5 py-4 shadow-[0_2px_16px_rgba(10,10,10,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/40 hover:bg-white hover:shadow-[0_10px_30px_rgba(181,99,106,0.16)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose/10 text-rose transition-colors duration-300 group-hover:bg-rose group-hover:text-white [&_svg]:h-5 [&_svg]:w-5">
                {link.icon}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-sans text-[15px] font-semibold leading-tight text-dark">
                  {link.label}
                </span>
                <span className="truncate text-[13px] leading-tight text-dark/50">
                  {link.sublabel}
                </span>
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="ml-auto h-4 w-4 shrink-0 text-dark/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-rose"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </nav>

        {/* QR card */}
        <div className="mt-10 flex w-full flex-col items-center rounded-2xl border border-dark/10 bg-white/70 px-6 py-7 shadow-[0_2px_16px_rgba(10,10,10,0.04)] backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-rose">
            Scan to share
          </p>
          <div className="mt-4 rounded-xl bg-white p-3 shadow-[0_2px_10px_rgba(10,10,10,0.05)]">
            <Image
              src="/savri-links-qr.svg"
              alt="QR code linking to savri.co.in/links"
              width={180}
              height={180}
              className="h-44 w-44"
            />
          </div>
          <a
            href="/savri-links-qr.png"
            download="savri-links-qr.png"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-rose px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(181,99,106,0.28)] transition-colors duration-300 hover:bg-rose-dark"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download QR code
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-dark/40">
          © {new Date().getFullYear()} Savri · Delhi NCR
        </p>
      </div>
    </main>
  )
}
