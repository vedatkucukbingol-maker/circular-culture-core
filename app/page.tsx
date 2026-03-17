'use client';

import React, { useState, useRef, useEffect } from 'react';

const translations: any = {
  TR: {
    heroTitle1: "CIRCULAR",
    heroTitle2: "CULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    menu: {
      vision: "Vizyon",
      mission: "Misyon",
      legal: "Yasal Dayanak",
      contact: "İletişim"
    },
    aiTitle: "CC Asistan",
    btnAudit: "Denetime Başla",
  },
  EN: {
    heroTitle1: "CIRCULAR",
    heroTitle2: "CULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
    menu: {
      vision: "Vision",
      mission: "Mission",
      legal: "Legal Basis",
      contact: "Contact"
    },
    aiTitle: "CC Assistant",
    btnAudit: "Start Audit",
  }
};

export default function Home() {
  const [lang, setLang] = useState('TR');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const t = translations[lang] || translations.TR;

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', width: '100%' }}>
      
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        display: 'flex', flexDirection: 'column', // Menüyü alta almak için
        background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
        zIndex: 10000, borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* Üst Kısım: Logo ve Dil */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #00BFFF', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '16px' }}>♻️</span>
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>CC</span>
          </div>
          
          <div style={{ display: 'flex', gap: '5px', background: 'rgba(255,255,255,0.1)', padding: '3px', borderRadius: '50px' }}>
            {['TR', 'EN'].map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{ background: lang === l ? '#10b981' : 'transparent', border: 'none', color: 'white', fontSize: '10px', fontWeight: 'bold', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer' }}>
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Alt Kısım: Ana Menü Başlıkları (Kaydırılabilir Mobil Menü) */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          padding: '0 20px 10px 20px', 
          overflowX: 'auto', // Mobilde sığmazsa yana kayar
          whiteSpace: 'nowrap',
          fontSize: '0.85rem',
          scrollbarWidth: 'none' // Firefox için scroll gizleme
        }}>
          <a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>{t.menu.vision}</a>
          <a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>{t.menu.mission}</a>
          <a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>{t.menu.legal}</a>
          <a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>{t.menu.contact}</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main style={{ paddingTop: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingInline: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 12vw, 5.5rem)', lineHeight: '0.85', color: '#10b981', fontWeight: '900', margin: 0 }}>
          {t.heroTitle1}<br />
          <span style={{ color: '#059669' }}>{t.heroTitle2}</span>
        </h1>
        <p style={{ color: '#aaa', marginTop: '30px', maxWidth: '300px', fontSize: '1rem' }}>{t.heroSub}</p>
        <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '15px 35px', borderRadius: '50px', fontWeight: 'bold', marginTop: '30px' }}>
          {t.btnAudit}
        </button>
      </main>

      {/* AI BOT BUTONU */}
      <button onClick={() => setIsChatOpen(!isChatOpen)} style={{ position: 'fixed', bottom: '25px', right: '25px', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#10b981', border: 'none', color: 'white', fontSize: '26px', zIndex: 10001 }}>
        {isChatOpen ? '✕' : '🤖'}
      </button>

      {/* Sayfa Altı Boşluğu */}
      <footer style={{ height: '100px' }}></footer>
    </div>
  );
}
