'use client';

import React, { useState } from 'react';

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
  const [lang, setLang] = useState('TR');
  // @ts-ignore
  const t = translations[lang];

  return (
    <>
      {/* MOBİL UYUMLU DİL SEÇİCİ */}
      <div style={{
        position: 'fixed',
        top: '15px',
        right: '15px',
        zIndex: 9999,
        display: 'flex',
        gap: '4px',
        background: 'rgba(0,0,0,0.6)',
        padding: '4px',
        borderRadius: '8px',
        backdropFilter: 'blur(8px)',
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
              padding: '6px 8px',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: 'bold',
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <main style={{ 
        minHeight: '100vh', 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '100px 15px 40px 15px', // Mobilde padding düşürüldü
        backgroundColor: 'black',
        background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)',
        overflowX: 'hidden' // Yatay kaymayı engeller
      }}>
        {/* HERO */}
        <div style={{ width: '100%', maxWidth: '800px', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: 'clamp(1.8rem, 10vw, 4.5rem)', // Mobilde küçülen font
            color: '#10b981', 
            fontWeight: '900',
            letterSpacing: '-1px',
            lineHeight: '1.1'
          }}>
            {t.heroTitle}
          </h1>
          <p style={{ fontSize: '1rem', color: '#a1a1aa', marginTop: '15px', lineHeight: '1.5', padding: '0 10px' }}>
            {t.heroSub}
          </p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center' }}>
            {/* Butonlar mobilde alt alta daha iyi durabilir */}
            <button style={{ width: '100%', maxWidth: '250px', backgroundColor: '#10b981', color: 'white', border: 'none', padding: '15px 0', borderRadius: '50px', fontWeight: 'bold' }}>
              {t.btnAudit}
            </button>
            <button style={{ width: '100%', maxWidth: '250px', background: 'transparent', color: 'white', border: '1px solid #333', padding: '15px 0', borderRadius: '50px', fontWeight: 'bold' }}>
              {t.btnMore}
            </button>
          </div>
        </div>

        {/* HİZMETLER */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', // Mobilde varsayılan tek sütun
          gap: '20px', 
          width: '100%', 
          maxWidth: '1100px'
        }}>
          {/* Ekran genişledikçe grid değişecek (Media query simülasyonu için responsive CSS gerekebilir ama şimdilik manuel hizalama yapıyoruz) */}
          {[
            { title: t.s1Title, desc: t.s1Desc, icon: '♻️' },
            { title: t.s2Title, desc: t.s2Desc, icon: '📊' },
            { title: t.s3Title, desc: t.s3Desc, icon: '🌱' }
          ].map((s, i) => (
            <div key={i} style={{ 
              padding: '30px 20px', 
              borderRadius: '20px', 
              backgroundColor: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(16,185,129,0.1)', 
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{s.icon}</div>
              <h3 style={{ color: '#10b981', marginBottom: '10px', fontSize: '1.2rem' }}>{s.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ backgroundColor: 'black', width: '100%', padding: '40px 20px', borderTop: '1px solid #111', textAlign: 'center' }}>
        <p style={{ color: '#10b981', fontSize: '0.9rem', marginBottom: '10px' }}>Circular Culture</p>
        <p style={{ color: '#444', fontSize: '0.75rem' }}>© 2026. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}
