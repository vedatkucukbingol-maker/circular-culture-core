'use client';

import React, { useState } from 'react';

const translations: any = {
  TR: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aboutTitle: "Hakkımızda",
    aboutText: "Circular Culture, döngüsel ekonomi prensiplerini iş modellerine entegre eden küresel bir danışmanlık platformudur.",
    btnAudit: "Denetime Başla",
    btnMore: "Daha Fazla Bilgi",
    s1Title: "Döngüsel Denetim",
    s1Desc: "Süreçlerinizi analiz ediyor ve atıklarınızı kaynağa dönüştürüyoruz.",
    s2Title: "Sürdürülebilirlik Raporu",
    s2Desc: "Uluslararası standartlarda çevresel etki raporlaması sunuyoruz.",
    s3Title: "Yeşil Dönüşüm",
    s3Desc: "Karbon ayak izinizi azaltacak stratejik yol haritaları çiziyoruz.",
    footerText: "Geleceği döngüsel ekonomi ile şekillendiriyoruz.",
    contact: "İletişim"
  },
  EN: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
    aboutTitle: "About Us",
    aboutText: "Circular Culture is a global consultancy platform integrating circular economy principles into business models.",
    btnAudit: "Start Audit",
    btnMore: "Learn More",
    s1Title: "Circular Audit",
    s1Desc: "We analyze your processes and turn your waste into resources.",
    s2Title: "Sustainability Report",
    s2Desc: "We offer environmental impact reporting at international standards.",
    s3Title: "Green Transformation",
    s3Desc: "Strategic roadmaps to reduce your carbon footprint.",
    footerText: "Shaping the future with circular economy.",
    contact: "Contact"
  },
  DE: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transformation von Organisationen für eine nachhaltige Zukunft.",
    aboutTitle: "Über Uns",
    aboutText: "Circular Culture ist eine globale Beratungsplattform, die Prinzipien der Kreislaufwirtschaft integriert.",
    btnAudit: "Audit Starten",
    btnMore: "Mehr Erfahren",
    s1Title: "Zirkuläres Audit",
    s1Desc: "Wir analysieren Ihre Prozesse und machen Abfall zu Ressourcen.",
    s2Title: "Nachhaltigkeitsbericht",
    s2Desc: "Umweltverträglichkeitsprüfung nach internationalen Standards.",
    s3Title: "Grüne Transformation",
    s3Desc: "Roadmaps zur Reduzierung Ihres CO2-Fußabdrucks.",
    footerText: "Die Zukunft kreislauffähig gestalten.",
    contact: "Kontakt"
  },
  ES: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transformando organizaciones para un futuro sostenible.",
    aboutTitle: "Nosotros",
    aboutText: "Circular Culture es una plataforma de consultoría global que integra principios de economía circular.",
    btnAudit: "Iniciar Auditoría",
    btnMore: "Saber Más",
    s1Title: "Auditoría Circular",
    s1Desc: "Analizamos sus procesos y convertimos sus residuos en recursos.",
    s2Title: "Informe de Sostenibilidad",
    s2Desc: "Informes de impacto ambiental bajo estándares internacionales.",
    s3Title: "Transformación Verde",
    s3Desc: "Hojas de ruta para reducir su huella de carbono.",
    footerText: "Definiendo el futuro circular.",
    contact: "Contact"
  }
};

export default function Home() {
  const [lang, setLang] = useState('TR');
  const t = translations[lang] || translations.TR;

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)', zIndex: 10000
      }}>
        {/* LOGO */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>CC</div>
        
        {/* SAĞ TARAF: HAKKIMIZDA + BAYRAKLAR */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '0.85rem', color: '#aaa', fontWeight: '500' }}>{t.aboutTitle}</span>
          
          <div style={{
            display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)',
            padding: '6px 14px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'
          }}>
            {[
              { id: 'TR', f: '🇹🇷' }, { id: 'EN', f: '🇬🇧' }, 
              { id: 'DE', f: '🇩🇪' }, { id: 'ES', f: '🇪🇸' }
            ].map((langObj) => (
              <button 
                key={langObj.id} 
                onClick={() => setLang(langObj.id)}
                style={{
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  fontSize: '18px', opacity: lang === langObj.id ? '1' : '0.2',
                  transition: '0.3s', display: 'flex', alignItems: 'center'
                }}
              >
                {langObj.f}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main style={{ 
        paddingTop: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center',
        background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)',
        overflowX: 'hidden'
      }}>
        
        {/* HERO */}
        <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '850px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', color: '#10b981', fontWeight: '900', letterSpacing: '-1px' }}>{t.heroTitle}</h1>
          <p style={{ color: '#aaa', marginTop: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>{t.heroSub}</p>
          <div style={{ marginTop: '35px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '14px 30px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>{t.btnAudit}</button>
            <button style={{ background: 'transparent', color: 'white', border: '1px solid #444', padding: '14px 30px', borderRadius: '50px', cursor: 'pointer' }}>{t.btnMore}</button>
          </div>
        </div>

        {/* HAKKIMIZDA BÖLÜMÜ */}
        <section style={{ maxWidth: '800px', padding: '80px 20px', textAlign: 'center' }}>
          <h2 style={{ color: '#10b981', fontSize: '1.8rem', marginBottom: '20px' }}>{t.aboutTitle}</h2>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.05rem' }}>{t.aboutText}</p>
        </section>

        {/* HİZMETLER */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px', width: '100%', maxWidth: '1100px', padding: '40px 20px' 
        }}>
          {[
            { t: t.s1Title, d: t.s1Desc, i: '♻️' },
            { t: t.s2Title, d: t.s2Desc, i: '📊' },
            { t: t.s3Title, d: t.s3Desc, i: '🌱' }
          ].map((s, idx) => (
            <div key={idx} style={{ 
              padding: '35px', borderRadius: '24px', background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(16,185,129,0.1)', transition: '0.3s'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{s.i}</div>
              <h3 style={{ color: '#10b981', fontSize: '1.4rem', marginBottom: '10px' }}>{s.t}</h3>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #111' }}>
        <p style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>Circular Culture</p>
        <p style={{ color: '#444', fontSize: '0.85rem', marginTop: '10px' }}>© 2026. {t.footerText}</p>
      </footer>
    </div>
  );
}
