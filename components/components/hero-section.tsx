"use client"

import { ArrowRight, Leaf, TrendingUp, ShieldCheck } from "lucide-react"
import { AiChatWidget } from "./ai-chat-widget"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function HeroSection() {
  const { lang } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-0">
        {/* Left: Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-8 flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm">
            <Leaf className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {t(translations.hero.badge, lang)}
            </span>
          </div>

          <h1 className="mb-4 font-mono text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              {t(translations.hero.title1, lang)}{" "}
              <span className="relative inline-block">
                {t(translations.hero.titleHighlight, lang)}
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent" aria-hidden="true" />
              </span>{" "}
              {t(translations.hero.title2, lang)}
            </span>
          </h1>

          <p className="mb-6 w-full max-w-lg text-pretty text-sm leading-relaxed text-primary-foreground/70 sm:mb-10 sm:text-base md:text-lg">
            {t(translations.hero.description, lang)}
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#audit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/25 sm:w-auto sm:px-7 sm:py-3.5"
            >
              {t(translations.hero.ctaPrimary, lang)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="flex w-full items-center justify-center rounded-xl border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/5 sm:w-auto sm:px-7 sm:py-3.5"
            >
              {t(translations.hero.ctaSecondary, lang)}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 grid w-full grid-cols-3 gap-4 border-t border-primary-foreground/10 pt-6 sm:mt-14 sm:gap-8 sm:pt-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                <span className="font-mono text-xl font-bold text-primary-foreground sm:text-2xl md:text-3xl">
                  200+
                </span>
              </div>
              <span className="mt-1 text-center text-[10px] leading-tight text-primary-foreground/50 sm:text-xs md:text-sm">
                {t(translations.hero.stats.projects, lang)}
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1">
                <Leaf className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                <span className="font-mono text-xl font-bold text-primary-foreground sm:text-2xl md:text-3xl">
                  45%
                </span>
              </div>
              <span className="mt-1 text-center text-[10px] leading-tight text-primary-foreground/50 sm:text-xs md:text-sm">
                {t(translations.hero.stats.waste, lang)}
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                <span className="font-mono text-xl font-bold text-primary-foreground sm:text-2xl md:text-3xl">
                  98%
                </span>
              </div>
              <span className="mt-1 text-center text-[10px] leading-tight text-primary-foreground/50 sm:text-xs md:text-sm">
                {t(translations.hero.stats.retention, lang)}
              </span>
            </div>
          </div>
        </div>

        {/* Right: AI Chat Widget */}
        <div className="w-full max-w-sm flex-shrink-0 sm:max-w-md lg:w-[420px]">
          <AiChatWidget />
        </div>
      </div>
    </section>
  )
}
