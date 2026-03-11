"use client"

import { Recycle, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "../lib/language-context"
import { translations, t } from "../lib/translations"

export function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Circular Culture</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === "tr" 
                ? "Sürdürülebilir bir gelecek için döngüsel ekonomi çözümleri." 
                : "Circular economy solutions for a sustainable future."}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{language === "tr" ? "Hızlı Bağlantılar" : "Quick Links"}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">{language === "tr" ? "Hizmetler" : "Services"}</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">{language === "tr" ? "Analiz Aracı" : "Audit Tool"}</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">{language === "tr" ? "Hakkımızda" : "About Us"}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{language === "tr" ? "İletişim" : "Contact"}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-500" />
                info@circularculture.com.tr
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-500" />
                İstanbul, Türkiye
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Circular Culture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
