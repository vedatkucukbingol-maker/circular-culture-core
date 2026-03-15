'use client';

import React, { useState } from 'react';

// Çeviri Sözlüğü
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
    contact: "İletişim",
    about: "Hakkımızda"
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
    contact: "Contact",
    about: "About Us"
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
    contact: "Kontakt",
    about: "Über Uns"
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
    contact: "Contacto",
    about: "Nosotros"
  }
};

export default function Home() {
  const [lang, setLang] = useState('TR');
  // @ts-ignore
  const t = translations[lang];

  return (
    <>
      {/* ÜST DİL SEÇİCİ - Navbar'ın üzerine veya yanına oturur */}
      <div style={{
        position: 'fixed',
        top: '25px',
        right: '20px',
        zIndex: 9999, // En üstte durması için
        display: 'flex',
        gap: '5px'
      }}>
        {['TR', 'EN', 'DE', 'ES'].map((l) => (
          <button 
            key={l}
            onClick={() => setLang(l)}
            style={{
              background: lang === l ? '#10b981' : 'rgba(255,255,255,0.05)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: 'bold',
              transition: 'all 0.2s'
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <main style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '160px 20px 80px 20px',
        backgroundColor: 'black',
        background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)'
      }}>
        {/* HERO */}
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 8vw, 5rem)', 
            color: '#10b981', 
            fontWeight: '900',
            letterSpacing: '-1px'
          }}>
            {t.heroTitle}
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#a1a1aa', marginTop: '20px', maxWidth: '600px', marginInline: 'auto' }}>
            {t.heroSub}
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '14px 30px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.btnAudit}
            </button>
            <button style={{ background: 'transparent', color: 'white', border: '1px solid #333', padding: '14px 30px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.btnMore}
            </button>
          </div>
        </div>

        {/* HİZMETLER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%', maxWidth: '1100px' }}>
          {[
            { title: t.s1Title, desc: t.s1Desc, icon: '♻️' },
            { title: t.s2Title, desc: t.s2Desc, icon: '📊' },
            { title: t.s3Title, desc: t.s3Desc, icon: '🌱' }
          ].map((s, i) => (
            <div key={i} style={{ 
              padding: '40px 30px', 
              borderRadius: '24px', 
              backgroundColor: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(16,185,129,0.1)', 
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{s.icon}</div>
              <h3 style={{ color: '#10b981', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: 'black', width: '100%', padding: '60px 20px', borderTop: '1px solid #111', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1100px', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#10b981', marginBottom: '15px' }}>Circular Culture</h4>
            <p style={{ color: '#555', fontSize: '0.85rem', maxWidth: '300px' }}>{t.footerText}</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <h5 style={{ color: 'white', marginBottom: '15px' }}>{t.contact}</h5>
            <p style={{ color: '#555', fontSize: '0.85rem' }}>info@circularculture.com.tr</p>
          </div>
        </div>
      </footer>
    </>
  );
}
