"use client";

import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="relative flex flex-col items-center justify-center pt-40 pb-32 px-4 text-center">
        {/* Arkaplan Katmanları */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560')] bg-cover bg-center opacity-10 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#052c1e]/70 to-[#052c1e] -z-10"></div>

        <div className="container mx-auto max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-8 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase">
             Sustainability Consultancy
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-[1.05]">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-emerald-100/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
            <button className="bg-emerald-500 text-[#052c1e] px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all">
              {t.tryAudit} →
            </button>
            <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
              {t.learnMore}
            </button>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-white/10 max-w-4xl mx-auto">
            <div className="text-left">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest">{t.projects}</div>
            </div>
            <div className="text-left border-l border-white/10 pl-8">
              <div className="text-4xl font-bold text-white mb-2">45%</div>
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest">{t.wasteRed}</div>
            </div>
            <div className="text-left border-l border-white/10 pl-8">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest">{t.retention}</div>
            </div>
          </div>
        </div>

        {/* CircularAI Asistan Kutusu (Sağ Alt) */}
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-[#0a3d2b] border border-white/10 rounded-2xl shadow-2xl p-4 text-left hidden sm:block">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              🤖
            </div>
            <div>
              <div className="text-sm font-bold text-white">{t.assistantName}</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                {t.assistantStatus}
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-sm text-emerald-100/80 leading-relaxed">
            {t.assistantMsg}
          </div>
        </div>
      </main>
    </div>
  );
}
