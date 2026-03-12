"use client"

import { useState } from "react"
import { Recycle, Menu, X } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const navItems = [
    { name: t.navServices, href: "#services" },
    { name: t.navTool, href: "#audit-tool" },
    { name: t.navAbout, href: "#about" },
  ]

  return (
    <nav className="fixed w-full bg-[#061a14]/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Circular Culture</span>
          </div>

          {/* Desktop Nav & Languages */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-3 border-l border-white/20 pl-6">
              {['tr', 'en', 'de'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as any)}
                  className={`text-xs font-bold uppercase ${lang === l ? 'text-emerald-400' : 'text-gray-500 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Language Switcher & Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex gap-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              {['tr', 'en', 'de'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as any)}
                  className={`text-xs font-extrabold uppercase ${lang === l ? 'text-emerald-400' : 'text-gray-400'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#061a14] border-t border-white/10 p-4 space-y-4">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="block text-lg font-medium text-gray-300 py-2" onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
