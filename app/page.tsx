'use client';

import React, { useState } from 'react';

const translations: any = {
  TR: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aboutTitle: "Hakkımızda",
    aboutText: "Circular Culture, döngüsel ekonomi prensiplerini iş modellerine entegre eden küresel bir danışmanlık platformudur. Atığı kaynağa, süreci verimliliğe dönüştürerek gezegenimiz ve işletmeniz için değer yaratıyoruz.",
    btnAudit: "Denetime Başla",
    btnMore: "Daha Fazla Bilgi",
    s1Title: "Döngüsel Denetim",
    s1Desc: "Süreçlerinizi analiz ediyor ve atıklarınızı kaynağa dönüştürüyoruz.",
    s2Title: "Sürdürülebilirlik Raporu",
    s2Desc: "Uluslararası standartlarda çevresel etki raporlaması sunuyoruz.",
    s3Title: "Yeşil Dönüşüm",
    s3Desc: "Karbon ayak izinizi azaltacak stratejik yol haritaları çiziyoruz.",
    footerText: "Döngüsel ekonomi ile geleceği şekillendiriyoruz.",
    contact: "İletişim"
  },
  EN: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
    aboutTitle: "About Us",
    aboutText: "Circular Culture is a global consultancy platform that integrates circular economy principles into business models. We create value for our planet and your business by transforming waste into resources and processes into efficiency.",
    btnAudit: "Start Audit",
    btnMore: "Learn More",
    s1Title: "Circular Audit",
    s1Desc: "We analyze your processes and turn your waste into resources.",
    s2Title: "Sustainability Report",
    s2Desc: "We offer environmental impact reporting at international standards.",
    s3Title: "Green Transformation",
    s3Desc: "We draw strategic roadmaps to reduce your carbon footprint.",
    footerText: "Shaping the future with circular economy.",
    contact: "Contact"
  },
  DE: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transformation von Organisationen für eine nachhaltige Zukunft.",
    aboutTitle: "Über Uns",
    aboutText: "Circular Culture ist eine globale Beratungsplattform, die Prinzipien der Kreislaufwirtschaft in Geschäftsmodelle integriert. Wir schaffen Wert für unseren Planeten und Ihr Unternehmen, indem wir Abfall in Ressourcen transformieren.",
    btnAudit: "Audit Starten",
    btnMore: "Mehr Erfahren",
    s1Title: "Zirkuläres Audit",
    s1Desc: "Wir analysieren Ihre Prozesse und machen Abfall zu Ressourcen.",
    s2Title: "Nachhaltigkeitsbericht",
    s2Desc: "Umweltverträglichkeitsprüfung nach internationalen Standards.",
    s3Title: "Grüne Transformation",
    s3Desc: "Strategische Roadmaps zur Reduzierung Ihres CO2-Fußabdrucks.",
    footerText: "Die Zukunft mit Kreislaufwirtschaft gestalten.",
    contact: "Kontakt"
  },
  ES: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transformando organizaciones para un futuro sostenible.",
    aboutTitle: "Nosotros",
    aboutText: "Circular Culture es una plataforma de consultoría global que integra los principios de la economía circular en los modelos de negocio. Creamos valor para el planeta y su empresa transformando residuos en recursos.",
    btnAudit: "Iniciar Auditoría",
    btnMore: "Saber Más",
    s1Title: "Auditoría Circular",
    s1Desc: "Analizamos sus procesos y convertimos sus residuos en recursos.",
    s2Title: "Informe de Sostenibilidad",
    s2Desc: "Ofrecemos informes de impacto ambiental bajo estándares internacionales.",
    s3Title: "Transformación Verde",
    s3Desc: "Diseñamos hojas de ruta para reducir su huella de carbono.",
    footerText: "Definiendo el futuro con economía circular.",
    contact: "Contacto"
  }
};

export default function Home() {
  const [lang, setLang] = useState('TR');
  const t = translations[lang] || translations['TR'];

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* YENİ NAVBAR & ORANTILI DİL SEÇİCİ */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        zIndex: 10000
      }}>
        {/* LOGO ALANI */}
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>
          CC
        </div>

        {/* BAYRAKLAR (Logo ile orantılı) */}
        <div style={{
          display: 'flex',
          gap: '10px',
          background: 'rgba(255,255,255,0.05)',
          padding: '6px 12px',
          borderRadius: '50px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {[{ id: 'TR', flag: '🇹🇷' }, { id: 'EN', flag: '🇬🇧' }, { id: 'DE', flag: '🇩🇪' }, { id: 'ES', flag: '🇪🇸' }].map((langObj) => (
            <button 
              key={langObj.id} 
              onClick={() => setLang(langObj.id)} 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                fontSize: '18px', // Boyutu daha orantılı hale getirdik
                opacity: lang === langObj.id ? '1' : '0.2', 
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {langObj.flag}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '140px 20px 60px 20px', background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)', overflowX: 'hidden' }}>
        
        {/* HERO */}
        <div style={{ width: '100%', maxWidth: '850px', marginBottom: '60px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 10vw, 5rem)', color: '#10b981', fontWeight: '900', letterSpacing: '-2px' }}>{t.heroTitle}</h1>
          <p style={{ fontSize: '1rem', color: '#a1a1aa', marginTop: '25px', lineHeight: '1.6' }}>{t.heroSub}</p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '16px 36px', borderRadius: '100px', fontWeight: 'bold', cursor: 'pointer' }}>{t.btnAudit}</button>
            <button style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 36px', borderRadius: '100px', fontWeight: 'bold', cursor: 'pointer' }}>{t.btnMore}</button>
          </div>
        </div>

        {/* HAKKIMIZDA */}
        <div style={{ width: '100%', maxWidth: '800px', marginBottom: '100px', textAlign: 'center', padding: '40px 20px', borderRadius: '30px', backgroundColor: 'rgba(16,185,129,0.03)', border: '1px solid rgba(16,185,129,0.1)' }}>
          <h2 style={{ color: '#10b981', marginBottom: '20px', fontSize: '1.8rem' }}>{t.
