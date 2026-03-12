"use client";

import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white">
      <Navbar />
      <main className="relative pt-40 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-block px-4 py-1 mb-8 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            Sustainability Consultancy
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t.heroTitle}
          </h1>

          <p className="text-lg text-emerald-100/60 mb-12 max-w-2xl mx-auto">
            {t.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button className="bg-emerald-500 text-black px-10 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all">
              {t.tryAudit}
            </button>
            <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
              {t.learnMore}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/10 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-1">200+</div>
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{t.projects}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">45%</div>
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{t.wasteRed}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">98%</div>
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{t.retention}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
