"use client"

import { Recycle, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function Footer() {
  const { lang } = useLanguage()

  const footerLinks = {
    services: {
      title: t(translations.footer.columns.services, lang),
      links: [
        t(translations.footer.links.circularityAudits, lang),
        t(translations.footer.links.strategyDevelopment, lang),
        t(translations.footer.links.esgCompliance, lang),
        t(translations.footer.links.greenSupplyChain, lang),
      ],
    },
    company: {
      title: t(translations.footer.columns.company, lang),
      links: [
        t(translations.footer.links.aboutUs, lang),
        t(translations.footer.links.ourTeam, lang),
        t(translations.footer.links.careers, lang),
        t(translations.footer.links.blog, lang),
      ],
    },
    resources: {
      title: t(translations.footer.columns.resources, lang),
      links: [
        t(translations.footer.links.caseStudies, lang),
        t(translations.footer.links.whitepapers, lang),
        t(translations.footer.links.webinars, lang),
        t(translations.footer.links.newsletter, lang),
      ],
    },
  }

  return (
    <footer id="contact" className="border-t border-border/40 bg-primary">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid w-full gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="w-full lg:col-span-2">
            <a href="#" className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-2.5">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent sm:h-9 sm:w-9">
                <Recycle className="h-4 w-4 text-accent-foreground sm:h-5 sm:w-5" />
              </div>
              <span className="font-mono text-base font-bold tracking-tight text-primary-foreground sm:text-lg">
                Circular Culture
              </span>
            </a>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-primary-foreground/60 sm:mb-6">
              {t(translations.footer.description, lang)}
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/50 sm:gap-3">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" /> hello@circularculture.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" /> +41 44 123 45 67
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" /> Zurich, Switzerland
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, column]) => (
            <div key={key}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
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
        <div className="mt-10 flex w-full flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 sm:mt-14 sm:flex-row sm:pt-8">
          <p className="text-center text-xs text-primary-foreground/40 sm:text-left">
            {t(translations.footer.legal.copyright, lang)}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-primary-foreground/40 sm:gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              {t(translations.footer.legal.privacy, lang)}
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              {t(translations.footer.legal.terms, lang)}
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              {t(translations.footer.legal.cookies, lang)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
