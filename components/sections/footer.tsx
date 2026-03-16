"use client"

import Image from "next/image"
import { Instagram, Mail } from "lucide-react"

const navLinks = [
  { label: "About Savri", href: "#about" },
  { label: "For Chefs", href: "#chef-apply" },
  { label: "Join Waitlist", href: "#waitlist" },
  { label: "Contact", href: "mailto:savrifounder@gmail.com" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/savri.in/", handle: "@savri.in" },
  { icon: Mail, label: "Email", href: "mailto:savrifounder@gmail.com", handle: "savrifounder@gmail.com" },
]

export function Footer() {
  return (
    <footer className="bg-dark border-t border-cream/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Logo & Tagline */}
          <div>
            <div style={{ background: "transparent", display: "inline-flex", alignItems: "center" }}>
              <Image
                src="/images/logo-savri.png"
                alt="Savri"
                width={120}
                height={40}
                className="h-10 md:h-10 w-auto mb-3"
                style={{ 
                  background: "transparent",
                  mixBlendMode: "screen",
                }}
              />
            </div>
            <p className="text-cream/60 text-sm">
              Your chef. Your kitchen. Your table.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start md:items-center">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-cream/70 hover:text-cream text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links & Contact */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Instagram" ? "_blank" : undefined}
                  rel={social.label === "Instagram" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-cream/10 text-cream/60 hover:text-cream hover:border-cream/30 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <a 
                href="https://www.instagram.com/savri.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-cream text-sm transition-colors"
              >
                @savri.in
              </a>
              <a 
                href="mailto:savrifounder@gmail.com"
                className="text-cream/60 hover:text-cream text-sm transition-colors"
              >
                savrifounder@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col items-center gap-6">
          <p className="text-cream/40 text-sm">
            &copy; 2026 Savri. Delhi NCR.
          </p>

          {/* Made In India Badge */}
          <div className="flex flex-col items-center gap-3">
            <div 
              className="inline-flex items-center gap-2 px-5 py-2 rounded-[40px] border border-[#D4AF37]/50 bg-transparent"
            >
              <span className="text-sm">🇮🇳</span>
              <span className="text-cream text-sm font-medium tracking-wide">MADE IN INDIA</span>
            </div>
            <p className="text-cream/60 text-xs">
              with <span className="text-rose">❤️</span> in Delhi
            </p>
          </div>

          {/* Tagline */}
          <p className="text-cream/40 text-xs text-center">
            Proudly Indian. Built in Delhi.
            <br />
            For every Indian home.
          </p>
        </div>
      </div>
    </footer>
  )
}
