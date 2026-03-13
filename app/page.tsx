"use client";

import { useLanguage } from "@/context/LanguageContext"; // '../' yerine '@/ ' dene
import Navbar from "@/components/Navbar";               // '../' yerine '@/ ' dene
export default function Home() {
  const { t } = useLanguage();

  if (!t) return null; // Dil dosyası yüklenene kadar boş dön, hatayı engelle

  return (
    <div className="min-h-screen bg-[#052c1e] text-white font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="relative flex flex-col items-center justify-center pt-40 pb-32 px-4 text-center">
        <div className="absolute inset-0 bg-black/20 -z-10"></div>

        <div className="container mx-auto max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-8 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
            Sustainability Consultancy
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
            {t.heroTitle || "Leading the Circular Revolution"}
          </h1>

          <p className="text-lg md:text-xl text-emerald-100/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.heroSub || "Transforming organizations for a sustainable future."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
            <button className="bg-emerald-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all">
              {t.tryAudit || "Get Started"}
            </button>
            <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
              {t.learnMore || "Learn More"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/10 max-w-4xl mx-auto">
            <StatBox value="200+" label={t.projects || "Projects"} />
            <StatBox value="45%" label={t.wasteRed || "Reduction"} />
            <StatBox value="98%" label={t.retention || "Retention"} />
          </div>
        </div>
      </main>
    </div>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{label}</div>
    </div>
  );
}
