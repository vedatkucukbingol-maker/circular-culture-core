import { Recycle, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  Services: ["Circularity Audits", "Strategy Development", "ESG Compliance", "Green Supply Chain"],
  Company: ["About Us", "Our Team", "Careers", "Blog"],
  Resources: ["Case Studies", "Whitepapers", "Webinars", "Newsletter"],
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-5 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <Recycle className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-mono text-lg font-bold tracking-tight text-primary-foreground">
                Circular Culture
              </span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              Helping organizations transition to circular business models for a
              sustainable future. Based in Zurich, working globally.
            </p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/50">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@circularculture.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +41 44 123 45 67
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Zurich, Switzerland
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {"2024 Circular Culture. All rights reserved."}
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <a href="#" className="transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
