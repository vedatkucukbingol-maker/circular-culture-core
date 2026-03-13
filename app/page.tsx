"use client";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4 text-center">
        {/* Arka Plan Efekti */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent -z-10"></div>

        <div className="container mx-auto max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-8 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
            Sustainability Consultancy
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
            {t.heroTitle}
          </h1>

          <p className="text-base md:text-xl text-emerald-100/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
            <button className="bg-emerald-500 text-[#052c1e] px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
              {t.tryAudit}
            </button>
            <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
              {t.learnMore}
            </button>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-4xl font-bold mb-1 italic">200+</div>
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{t.projects}</div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="text-4xl font-bold mb-1 italic">45%</div>
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{t.wasteRed}</div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="text-4xl font-bold mb-1 italic">98%</div>
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{t.retention}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
