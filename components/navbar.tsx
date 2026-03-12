"use client"

import { useState } from "react"
import { Recycle, Menu, X } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const navItems = [
    { name: t.navServices, href: "#services" },
    { name: t.navTool, href: "#audit-tool" },
    { name: t.navAbout, href: "#about" },
  ]

  return (
    <nav className="fixed w-full bg-[#030c0a]/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Circular Culture</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-gray-300 hover:text-emerald-400">
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

          <div className="md:hidden flex items-center gap-4">
            <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
               {['tr', 'en', 'de'].map((l) => (
                <button key={l} onClick={() => setLang(l as any)} className={`text-[10px] p-1 font-bold uppercase ${lang === l ? 'text-emerald-400' : 'text-gray-500'}`}>{l}</button>
              ))}
            </div>
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
