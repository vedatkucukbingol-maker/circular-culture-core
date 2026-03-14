"use client";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    // 'flex flex-col items-center justify-center' her şeyi tam ortaya toplar
    <div className="min-h-screen flex flex-col bg-[#052c1e]">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Rozet */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            {t.heroSub}
          </span>

          {/* v0 Tarzı Başlık */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            {t.heroTitle}
          </h1>

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="px-8 py-4 bg-emerald-500 text-[#052c1e] rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
              {t.tryAudit}
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              {t.learnMore}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
