"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#052c1e]/60 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-emerald-500 rounded-md shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
          <span className="font-bold text-lg tracking-tighter text-white">Circular Culture</span>
        </div>

        <div className="flex bg-black/40 p-1 rounded-lg border border-white/5">
          {['tr', 'en', 'de'].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang as any)}
              className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
                language === lang ? "bg-emerald-600 text-white shadow-lg" : "text-white/40 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
