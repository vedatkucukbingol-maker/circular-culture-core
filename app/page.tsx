'use client';

import React, { useState } from 'react';

// Çeviri objesi
const translations: any = {
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
  const [lang, setLang] = useState('TR');
  
  // Güvenli veri çekme
  const t = translations[lang] || translations['TR'];

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* DİL SEÇİCİ */}
      <div style={{
        position: 'fixed',
        top: '15px',
        right: '15px',
        zIndex: 9999,
        display: 'flex',
        gap: '12px',
        background: 'rgba(0,0,0,0.7)',
        padding: '10px 16px',
        borderRadius: '50px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.15)'
      }}>
        {[
          { id: 'TR', flag: '🇹🇷' },
          { id: 'EN', flag: '🇬🇧' },
          { id: 'DE', flag: '🇩🇪' },
          { id: 'ES', flag: '🇪🇸' }
        ].map((langObj) => (
          <button 
            key={langObj.id}
            onClick={() => setLang(langObj.id)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              opacity: lang === langObj.id ? '1' : '0.3',
              transform: lang === langObj.id ? 'scale(1.2)' : 'scale(1)',
              transition: 'all 0.3s ease'
            }}
          >
            {langObj.flag}
          </button>
        ))}
      </div>

      <main style={{ 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '100px 20px 60px 20px',
        background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)',
        overflowX: 'hidden'
      }}>
        
        {/* HERO */}
        <div style={{ width: '100%', maxWidth: '850px', marginBottom: '80px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 10vw, 5rem)', 
            color: '#10b981', 
            fontWeight: '900',
            letterSpacing: '-2px'
          }}>
            {t.heroTitle}
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: '#a1a1aa', 
            marginTop: '25px', 
            lineHeight: '1.6',
            maxWidth: '650px',
            marginInline: 'auto'
          }}>
            {t.heroSub}
          </p>
          
          <div style={{ marginTop: '40px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '16px 36px', borderRadius: '100px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.btnAudit}
            </button>
            <button style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 36px', borderRadius: '100px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.btnMore}
            </button>
          </div>
        </div>

        {/* HİZMETLER */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px', 
          width: '100%', 
          maxWidth: '1100px' 
        }}>
          {[
            { title: t.s1Title, desc: t.s1Desc, icon: '♻️' },
            { title: t.s2Title, desc: t.s2Desc, icon: '📊' },
            { title: t.s3Title, desc: t.s3Desc, icon: '🌱' }
          ].map((s, i) => (
            <div key={i} style={{
              padding: '30px',
              borderRadius: '24px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(16,185,129,0.1)',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{s.icon}</div>
              <h3 style={{ color: '#10b981', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '60px 20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <p style={{ color: '#10b981', fontWeight: 'bold' }}>Circular Culture</p>
        <p style={{ color: '#444', fontSize: '0.8rem', marginTop: '10px' }}>© 2026. {t.footerText}</p>
      </footer>
    </div>
  );
}
