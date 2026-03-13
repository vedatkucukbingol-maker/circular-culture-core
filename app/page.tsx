"use client";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/60 mb-10 max-w-2xl mx-auto">
            {t.heroSub}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-emerald-500 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-400 transition-all">
              {t.tryAudit}
            </button>
            <button className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/5 transition-all">
              {t.learnMore}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
