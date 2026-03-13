"use client";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Üst Küçük Başlık */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t.heroSub}</span>
          </div>

          {/* Ana Başlık */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            {t.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={word === "Geleceği" || word === "Future" ? "text-emerald-400" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-[#052c1e] px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20">
              {t.tryAudit}
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all">
              {t.learnMore}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
