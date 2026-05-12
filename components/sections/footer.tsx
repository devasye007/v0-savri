"use client"

import Image from "next/image"
import { Instagram, Mail, Linkedin } from "lucide-react"

const navLinks = [
  { label: "About Savri", href: "#about" },
  { label: "For Chefs", href: "/careers" },
  { label: "Join Waitlist", href: "#waitlist" },
  { label: "Contact", href: "mailto:founder@savri.co.in" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/savri.in/", handle: "@savri.in" },
  { icon: Mail, label: "Email", href: "mailto:founder@savri.co.in", handle: "founder@savri.co.in" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/savri", handle: "Savri" },
]

export function Footer() {
  return (
    <footer className="bg-dark border-t border-cream/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Logo & Tagline */}
          <div>
            <Image src="/savri-logo-light.png" alt="Savri" width={120} height={36} className="h-9 w-auto mb-3" />
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
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
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
                href="mailto:founder@savri.co.in"
                className="text-cream/60 hover:text-cream text-sm transition-colors"
              >
                founder@savri.co.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            &copy; 2026 Savri. Delhi NCR.
          </p>
          <p className="text-cream/40 text-sm">
            Made with care in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
