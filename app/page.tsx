"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import { Recycle, BarChart3, FileText, Lightbulb, ArrowRight } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#030c0a] text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-400 text-xs font-bold tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t.visionBadge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight italic bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              {t.heroTitle}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.heroSub}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 group">
                {t.ctaStart}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {t.ctaMore}
              </button>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-white/5 border-y border-white/5">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.servicesTitle}</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <ServiceCard icon={<Lightbulb />} title={t.service1Title} desc={t.service1Desc} />
            <ServiceCard icon={<BarChart3 />} title={t.service2Title} desc={t.service2Desc} />
            <ServiceCard icon={<FileText />} title={t.service3Title} desc={t.service3Desc} />
          </div>
        </section>

        {/* AUDIT TOOL PREVIEW */}
        <section id="audit-tool" className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-emerald-950/30 border border-emerald-500/20 p-8 md:p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-8 text-center">{t.auditTitle}</h2>
              <div className="space-y-6">
                <p className="text-xl text-emerald-200/80 mb-6">{t.auditQuestion}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[t.option1, t.option2, t.option3].map((opt) => (
                    <button key={opt} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-emerald-600/20 hover:border-emerald-500 transition-all text-sm font-medium">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
      <div className="text-emerald-500 mb-6 group-hover:scale
