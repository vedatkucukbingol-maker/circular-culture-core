'use client'; // Etkileşim (dil seçimi) için bu satır en üstte olmalı

import React, { useState } from 'react';

// 1. DİL SÖZLÜĞÜ (Sayfanın en üstünde tanımlıyoruz)
const translations = {
  TR: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    btnAudit: "Denetime Başla",
    btnMore: "Daha Fazla Bilgi",
    s1Title: "Döngüsel Denetim",
    s1Desc: "Süreçlerinizi analiz ediyor ve atıklarınızı kaynağa dönüştürüyoruz.",
    s2Title: "Sürdürülebilirlik Raporu",
    s2Desc: "Uluslararası standartlarda çevresel etki raporlaması sunuyoruz.",
    s3Title: "Yeşil Dönüşüm",
    s3Desc: "Karbon ayak izinizi azaltacak stratejik yol haritaları çiziyoruz.",
    footerText: "Geleceği döngüsel ekonomi ile şekillendiren danışmanlık platformu.",
    contact: "İletişim"
  },
  EN: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
    btnAudit: "Start Audit",
    btnMore: "Learn More",
    s1Title: "Circular Audit",
    s1Desc: "We analyze your processes and turn your waste into resources.",
    s2Title: "Sustainability Report",
    s2Desc: "We offer environmental impact reporting at international standards.",
    s3Title: "Green Transformation",
    s3Desc: "We draw strategic roadmaps to reduce your carbon footprint.",
    footerText: "Consultancy platform shaping the future with circular economy.",
    contact: "Contact"
  },
  DE: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transformation von Organisationen für eine nachhaltige Zukunft.",
    btnAudit: "Audit Starten",
    btnMore: "Mehr Erfahren",
    s1Title: "Zirkuläres Audit",
    s1Desc: "Wir analysieren Ihre Prozesse und machen Abfall zu Ressourcen.",
    s2Title: "Nachhaltigkeitsbericht",
    s2Desc: "Umweltverträglichkeitsprüfung nach internationalen Standards.",
    s3Title: "Grüne Transformation",
    s3Desc: "Strategische Roadmaps zur Reduzierung Ihres CO2-Fußabdrucks.",
    footerText: "Beratungsplattform, die die Zukunft zirkulär gestaltet.",
    contact: "Kontakt"
  },
  ES: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transformando organizaciones para un futuro sostenible.",
    btnAudit: "Iniciar Auditoría",
    btnMore: "Saber Más",
    s1Title: "Auditoría Circular",
    s1Desc: "Analizamos sus procesos y convertimos sus residuos en recursos.",
    s2Title: "Informe de Sostenibilidad",
    s2Desc: "Ofrecemos informes de impacto ambiental bajo estándares internacionales.",
    s3Title: "Transformación Verde",
    s3Desc: "Diseñamos hojas de ruta para reducir su huella de carbono.",
    footerText: "Plataforma de consultoría que define el futuro circular.",
    contact: "Contacto"
  }
};

export default function Home() {
  // 2. DİL DURUMU (State)
  const [lang, setLang] = useState('TR');
  
  // @ts-ignore - Basitlik için tip kontrolünü geçiyoruz
  const t = translations[lang];

  return (
    <>
      {/* 3. DİL SEÇİCİ (NAVBAR) */}
      <nav style={{
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 100,
        display: 'flex', 
        gap: '8px', 
        background: 'rgba(0,0,0,0.5)',
        padding: '6px', 
        borderRadius: '50px', 
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {['TR', 'EN', 'DE', 'ES'].map((l) => (
          <button 
            key={l}
            onClick={() => setLang(l)}
            style={{
              background: lang === l ? '#10b981' : 'transparent',
              color: 'white', 
              border: 'none', 
              cursor: 'pointer',
              padding: '6px 14px', 
              borderRadius: '20px', 
              fontWeight: 'bold',
              fontSize: '0.8rem',
              transition: 'all 0.3s ease'
            }}
          >
            {l}
          </button>
        ))}
      </nav>

      <main style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '140px 20px 60px 20px',
        backgroundColor: 'black',
        background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)'
      }}>
        {/* HERO */}
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            color: '#10b981', 
            fontWeight: '900',
            textTransform: 'uppercase' 
          }}>
            {t.heroTitle}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#a1a1aa', marginTop: '20px', lineHeight: '1.6' }}>
            {t.heroSub}
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '16px 36px', borderRadius: '100px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.btnAudit}
            </button>
            <button style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 36px', borderRadius: '100px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.btnMore}
            </button>
          </div>
        </div>

        {/* HİZMETLER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', width: '100%', maxWidth: '1100px' }}>
          {[
            { title: t.s1Title, desc: t.s1Desc, icon: '♻️' },
            { title: t.s2Title, desc: t.s2Desc, icon: '📊' },
            { title: t.s3Title, desc: t.s3Desc, icon: '🌱' }
          ].map((s, i) => (
            <div key={i} style={{ padding: '40px 30px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(16,185,129,0.15)', textAlign: 'left', backdropFilter: 'blur(5px)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{s.icon}</div>
              <h3 style={{ color: '#10b981', marginBottom: '12px', fontSize: '1.4rem' }}>{s.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: 'black', width: '100%', padding: '60px 20px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1100px', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#10b981', margin: '0 0 10px 0' }}>Circular Culture</h4>
            <p style={{ color: '#666', fontSize: '0.85rem', maxWidth: '250px' }}>{t.footerText}</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <h5 style={{ color: 'white', margin: '0 0 10px 0' }}>{t.contact}</h5>
            <p style={{ color: '#666', fontSize: '0.85rem', margin: '5px 0' }}>info@circularculture.com.tr</p>
          </div>
        </div>
      </footer>
    </>
  );
}
