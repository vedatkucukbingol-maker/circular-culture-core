"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#052c1e]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-500/20"></div>
          <span className="font-bold text-xl tracking-tighter text-white">Circular Culture</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-black/20 p-1 rounded-lg border border-white/10">
            {['tr', 'en', 'de'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as any)}
                className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
                  language === lang ? "bg-emerald-500 text-[#052c1e]" : "text-white/40 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
