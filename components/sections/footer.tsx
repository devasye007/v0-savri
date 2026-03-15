"use client"

import { Instagram, Linkedin } from "lucide-react"

const navLinks = [
  { label: "About Savri", href: "#about" },
  { label: "For Chefs", href: "#chef-apply" },
  { label: "Join Waitlist", href: "#waitlist" },
  { label: "Contact", href: "mailto:hello@savri.in" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/savri" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/savri" },
]

export function Footer() {
  return (
    <footer className="bg-dark border-t border-cream/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Logo & Tagline */}
          <div>
            <h3 className="font-serif text-rose text-3xl font-semibold mb-3">Savri</h3>
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

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-cream/10 text-cream/60 hover:text-cream hover:border-cream/30 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="text-cream/40 text-xs mt-4">@savri</p>
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
