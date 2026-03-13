"use client";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    // min-h-screen ve flex yapısı içeriği dikeyde ve yatayda ortalar
    <div className="min-h-screen bg-[#052c1e] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl w-full">
          {/* Başlık: Font boyutu ve satır aralığı v4 uyumlu */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            {t.heroTitle}
          </h1>
          
          {/* Alt Başlık */}
          <p className="text-xl md:text-2xl text-emerald-100/70 mb-12 max-w-2xl mx-auto">
            {t.heroSub}
          </p>

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-emerald-500 text-[#052c1e] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
              {t.tryAudit}
            </button>
            <button className="w-full sm:w-auto border border-white/20 bg-white/5 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              {t.learnMore}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
