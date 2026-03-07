"use client"

import {
  Recycle,
  BarChart3,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

const serviceIcons = [Recycle, BarChart3, ShieldCheck, Leaf]
const serviceKeys = [
  "circularityAudits",
  "strategyDevelopment",
  "esgCompliance",
  "greenSupplyChain",
] as const

export function ServicesSection() {
  const { lang } = useLanguage()

  return (
    <section id="services" className="bg-background py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 w-full max-w-2xl sm:mb-16">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent sm:mb-4">
            {t(translations.services.badge, lang)}
          </span>
          <h2 className="mb-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">
              {t(translations.services.title, lang)}
            </span>
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {t(translations.services.description, lang)}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[index]
            const service = translations.services.items[key]
            return (
              <div
                key={key}
                className="group rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:rounded-2xl sm:p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary sm:mb-5 sm:h-12 sm:w-12 sm:rounded-xl">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-2 font-mono text-base font-semibold text-card-foreground sm:mb-2.5 sm:text-lg">
                  {t(service.title, lang)}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-5">
                  {t(service.description, lang)}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  {t(translations.services.learnMore, lang)}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
