"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#052c1e]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
          <span className="font-bold text-xl tracking-tighter">Circular Culture</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-emerald-100/60">
            <a href="#" className="hover:text-emerald-400 transition-colors">{t.navServices}</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">{t.navAbout}</a>
          </div>

          <div className="flex bg-black/20 p-1 rounded-lg border border-white/10">
            {['tr', 'en', 'de'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as any)}
                className={`px-3 py-1 rounded-md text-xs font-bold uppercase transition-all ${
                  language === lang ? "bg-emerald-500 text-black" : "text-white/50 hover:text-white"
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
