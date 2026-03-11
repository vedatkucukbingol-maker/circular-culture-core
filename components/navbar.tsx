"use client"

import { useState } from "react"
import { Recycle, Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "../lib/language-context"
import { translations, t, Language } from "../lib/translations"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage() as { language: Language; setLanguage: (lang: Language) => void }

  const navItems = [
    { name: language === "tr" ? "Hizmetler" : "Services", href: "#services" },
    { name: language === "tr" ? "Analiz Aracı" : "Audit Tool", href: "#audit-tool" },
    { name: language === "tr" ? "Hakkımızda" : "About Us", href: "#about" },
  ]

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Circular Culture</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center gap-2 border-l pl-8">
              <button 
                onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                className="text-sm font-bold text-gray-700 hover:text-emerald-600 uppercase"
              >
                {language === "tr" ? "EN" : "TR"}
              </button>
            </div>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="block text-base font-medium text-gray-600" onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
