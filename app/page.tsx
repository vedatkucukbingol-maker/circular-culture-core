"use client";

import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000')] bg-cover bg-center opacity-20 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#052c1e]/50 to-[#052c1e] -z-10"></div>

        <div className="container mx-auto max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-8 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-widest uppercase">
             Sustainability Consultancy
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
            {t.heroTitle.split(' ').map((word: string, i: number) => 
              word === "Revolution" || word === "Devrime" || word === "Revolution" ? 
              <span key={i} className="underline decoration-emerald-500 decoration-4 underline-offset-8"> {word}</span> : " " + word
            )}
          </h1>

          <p className="text-lg md:text-xl text-emerald-100/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <button className="bg-[#10b981] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#059669] transition-all flex items-center justify-center gap-2">
              {t.tryAudit} →
            </button>
            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
              {t.learnMore}
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10 max-w-4xl mx-auto text-left">
            <div>
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-emerald-100/50 uppercase tracking-wider">{t.projects}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">45%</div>
              <div className="text-sm text-emerald-100/50 uppercase tracking-wider">{t.wasteRed}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-emerald-100/50 uppercase tracking-wider">{t.retention}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
