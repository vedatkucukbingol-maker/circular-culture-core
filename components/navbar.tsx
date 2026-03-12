"use client"

import { useState } from "react"
import { Recycle, Menu, X, Globe } from "lucide-react"
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
            
            {/* 3 Dil Seçici */}
            <div className="flex items-center gap-3 border-l pl-8 text-xs font-bold text-gray-500">
              <button onClick={() => setLang('tr')} className={`${lang === 'tr' ? 'text-emerald-600 underline' : 'hover:text-emerald-600'}`}>TR</button>
              <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-emerald-600 underline' : 'hover:text-emerald-600'}`}>EN</button>
              <button onClick={() => setLang('de')} className={`${lang === 'de' ? 'text-emerald-600 underline' : 'hover:text-emerald-600'}`}>DE</button>
            </div>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl text-center">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="block text-base font-medium text-gray-600" onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
          <div className="flex justify-center gap-6 pt-4 border-t">
            <button onClick={() => { setLang('tr'); setIsOpen(false); }} className={lang === 'tr' ? 'text-emerald-600 font-bold' : ''}>TR</button>
            <button onClick={() => { setLang('en'); setIsOpen(false); }} className={lang === 'en' ? 'text-emerald-600 font-bold' : ''}>EN</button>
            <button onClick={() => { setLang('de'); setIsOpen(false); }} className={lang === 'de' ? 'text-emerald-600 font-bold' : ''}>DE</button>
          </div>
        </div>
      )}
    </nav>
  )
}
