'use client';

import React, { useState, useRef, useEffect } from 'react';

const translations: any = {
  TR: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aiTitle: "CC Asistan",
    btnAudit: "Denetime Başla",
  },
  EN: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
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
      
      {/* NAVBAR - Doğrudan burada tanımlı */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        zIndex: 10000, borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #00BFFF', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '14px' }}>♻️</span>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>CC</span>
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          {['TR', 'EN'].map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', opacity: lang === l ? 1 : 0.3 }}>
              {l === 'TR' ? '🇹🇷' : '🇬🇧'}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ paddingTop: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingInline: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 10vw, 4.5rem)', color: '#10b981', fontWeight: '900', wordBreak: 'break-word' }}>
          {t.heroTitle}
        </h1>
        <p style={{ color: '#aaa', marginTop: '20px', maxWidth: '600px' }}>{t.heroSub}</p>
        <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '50px', fontWeight: 'bold', marginTop: '30px' }}>
          {t.btnAudit}
        </button>
      </main>

      {/* AI BOT BUTONU */}
      <button onClick={() => setIsChatOpen(!isChatOpen)} style={{ position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#10b981', border: 'none', color: 'white', fontSize: '24px', zIndex: 10001 }}>
        {isChatOpen ? '✕' : '🤖'}
      </button>
    </div>
  );
}
