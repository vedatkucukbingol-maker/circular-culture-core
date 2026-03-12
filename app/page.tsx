"use client";

import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import { Recycle, BarChart3, FileText, Lightbulb, ArrowRight } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#030c0a] text-white">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-400 text-xs font-bold mb-8">
              {t.visionBadge}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 italic bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 group">
                {t.ctaStart}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-white/5">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <Lightbulb className="text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t.service1Title}</h3>
              <p className="text-gray-400">{t.service1Desc}</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <BarChart3 className="text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t.service2Title}</h3>
              <p className="text-gray-400">{t.service2Desc}</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <FileText className="text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t.service3Title}</h3>
              <p className="text-gray-400">{t.service3Desc}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
