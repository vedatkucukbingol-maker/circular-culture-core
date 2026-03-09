"use client"

import { useState } from "react"
import { Recycle, Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t, Language } from "@/lib/translations"

// Dil seçeneklerini tanımlıyoruz
const languages: { code: Language; flag: string; label: string }[] = [
  { code: "EN", flag: "🇬🇧", label: "English" },
  { code: "TR", flag: "🇹🇷", label: "Türkçe" },
  { code: "DE", flag: "🇩🇪", label: "Deutsch" },
  { code: "ES", flag: "🇪🇸", label: "Español" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  // Seçili olan dili listeden buluyoruz
  const selectedLang = languages.find((l) => l.code === lang) || languages[0]

  // Menü linklerini çeviri dosyasına göre oluşturuyoruz
  const navLinks = [
    { label: t(translations.nav.services, lang), href: "#services" },
    { label: t(translations.nav.auditTool, lang), href: "#audit" },
    { label: t(translations.nav.about, lang), href: "#about" },
    { label: t(translations.nav.contact, lang), href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary sm:h-9 sm:w-9">
            <Recycle className="h-4 w-4 text-primary-foreground sm:h-5 sm:w-5" />
          </div>
          <span className="font-mono text-base font-bold tracking-tight text-foreground sm:text-lg">
            Circular Culture
          </span>
        </a>

        {/* Masaüstü Menü */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Sağ Taraf - Dil ve Başla Butonu */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Dil Seçici */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-2 text-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
            >
              <span className="text-base leading-none">{selectedLang.flag}</span>
              <span className="font-medium text-foreground">{selectedLang.code}</span>
              <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-border/60 bg-card/95 shadow-xl backdrop-blur-xl">
                {languages.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => {
                      setLang(langItem.code)
                      setLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                      lang === langItem.code ? "bg-secondary font-medium text-primary" : "text-foreground"
                    }`}
                  >
                    <span className="text-base leading-none">{langItem.flag}</span>
                    <span>{langItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#audit"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            {t(translations.nav.getStarted, lang)}
          </a>
        </div>

        {/* Mobil Menü Butonu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobil Menü İçeriği */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex w-full flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-border/40" />
            
            {/* Mobil Dil Seçimi */}
            <div className="grid w-full grid-cols-4 gap-2 px-1 py-2">
              {languages.map((langItem) => (
                <button
                  key={langItem.code}
                  onClick={() => setLang(langItem.code)}
                  className={`flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-2.5 text-xs transition-colors ${
                    lang === langItem.code ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <span className="text-base leading-none">{langItem.flag}</span>
                  <span className="font-medium">{langItem.code}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
