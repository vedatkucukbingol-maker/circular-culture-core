"use client";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white flex flex-col selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <div className="max-w-5xl w-full flex flex-col items-center text-center animate-v0">
          
          {/* Hero Üstü Rozet */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium mb-10 tracking-wide">
            {t.heroSub}
          </div>

          {/* v0 Tarzı Dev Başlık */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-10 max-w-4xl">
            {t.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={word.includes("Geleceği") || word.includes("Future") ? "text-emerald-400" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          {/* Buton Grubu */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4">
            <button className="group relative w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-[#052c1e] px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              {t.tryAudit}
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm">
              {t.learnMore}
            </button>
          </div>

        </div>
      </main>

      {/* Sayfa altı süslemesi (v0 detayı) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none" />
    </div>
  );
}
