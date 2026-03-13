"use client";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#052c1e] text-white">
      <Navbar />
      <main className="relative flex flex-col items-center justify-center pt-40 pb-32 px-4 text-center">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/60 mb-12 max-w-2xl mx-auto">
            {t.heroSub}
          </p>
          <div className="flex justify-center gap-4 mb-24">
            <button className="bg-emerald-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400">
              {t.tryAudit}
            </button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5">
              {t.learnMore}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
