"use client";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white overflow-hidden">
      <Navbar />
      
      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-10 text-center">
        {/* Arka plan efekti */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent -z-10"></div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 border border-emerald-500/20 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
            Sustainability Consultancy
          </div>

          {/* Yazı boyutu burada dengelendi */}
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
            {t.heroTitle}
          </h1>

          <p className="text-base md:text-lg text-emerald-100/60 mb-10 max-w-xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-500 text-[#052c1e] px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-400 transition-all cursor-pointer">
              {t.tryAudit}
            </button>
            <button className="border border-white/10 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/5 transition-all cursor-pointer">
              {t.learnMore}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
