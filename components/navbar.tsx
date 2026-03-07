"use client"

import { useState } from "react"
import { Recycle, Menu, X, ChevronDown } from "lucide-react"

const languages = [
  { code: "EN", flag: "\u{1F1EC}\u{1F1E7}", label: "English" },
  { code: "TR", flag: "\u{1F1F9}\u{1F1F7}", label: "Turkce" },
  { code: "DE", flag: "\u{1F1E9}\u{1F1EA}", label: "Deutsch" },
  { code: "ES", flag: "\u{1F1EA}\u{1F1F8}", label: "Espanol" },
]

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Audit Tool", href: "#audit" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Recycle className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-mono text-lg font-bold tracking-tight text-foreground">
            Circular Culture
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-2 text-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              aria-label="Select language"
              aria-expanded={langOpen}
            >
              <span className="text-base leading-none">{selectedLang.flag}</span>
              <span className="font-medium text-foreground">{selectedLang.code}</span>
              <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-border/60 bg-card/95 shadow-xl backdrop-blur-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang)
                      setLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                      selectedLang.code === lang.code
                        ? "bg-secondary font-medium text-primary"
                        : "text-foreground"
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#audit"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-border/40" />
            {/* Mobile Language Selection */}
            <div className="flex items-center gap-2 px-3 py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                    selectedLang.code === lang.code
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <span className="text-sm leading-none">{lang.flag}</span>
                  <span className="font-medium">{lang.code}</span>
                </button>
              ))}
            </div>
            <a
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
