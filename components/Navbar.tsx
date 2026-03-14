"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-7xl flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
        <div className="text-xl font-bold tracking-tighter text-white">
          CIRCULAR<span className="text-emerald-500">CULTURE</span>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            className="text-sm font-medium hover:text-emerald-400 transition-colors bg-white/5 px-3 py-1 rounded-lg border border-white/5"
          >
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
}
