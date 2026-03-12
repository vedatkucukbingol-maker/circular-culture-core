"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight italic">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                {t.ctaStart}
              </button>
              <button className="bg-white border-2 border-gray-200 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all">
                {t.ctaMore}
              </button>
            </div>
          </div>
          
          {/* Arkaplan Süslemesi */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
            <div className="absolute top-24 left-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* İletişim Bölümü Önizleme */}
        <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.contactTitle}
            </h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
