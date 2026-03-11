"use client"

import { Recycle, BarChart3, ShieldCheck, Leaf, Globe, Zap, ArrowRight } from "lucide-react"
import { useLanguage } from "../lib/language-context"
import { translations, t, Language } from "../lib/translations"

export function ServicesSection() {
  const { language } = useLanguage() as { language: Language }

  const serviceIcons = [Recycle, BarChart3, ShieldCheck, Leaf, Globe, Zap]

  const services = [
    {
      title: language === "tr" ? "Döngüsel Strateji" : "Circular Strategy",
      description: language === "tr" ? "İş modellerinizi döngüsel ekonomiye uyumlu hale getiriyoruz." : "We align your business models with the circular economy.",
      icon: serviceIcons[0]
    },
    {
      title: language === "tr" ? "LCA Analizi" : "LCA Analysis",
      description: language === "tr" ? "Ürünlerinizin yaşam döngüsü analizini yaparak çevresel etkiyi ölçüyoruz." : "We measure environmental impact by analyzing product life cycles.",
      icon: serviceIcons[1]
    },
    {
      title: language === "tr" ? "Sürdürülebilirlik Raporlaması" : "Sustainability Reporting",
      description: language === "tr" ? "Uluslararası standartlarda (GRI, ESRS) raporlama desteği sunuyoruz." : "We provide reporting support in international standards.",
      icon: serviceIcons[2]
    }
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "tr" ? "Hizmetlerimiz" : "Our Services"}
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <button className="flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:gap-3 transition-all">
                {language === "tr" ? "Detaylı Bilgi" : "Learn More"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
