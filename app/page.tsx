'use client';

import React, { useState, useRef, useEffect } from 'react';

const translations: any = {
  TR: {
    heroTitle1: "CIRCULAR",
    heroTitle2: "CULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aiTitle: "CC Asistan",
    btnAudit: "Denetime Başla",
  },
  EN: {
    heroTitle1: "CIRCULAR",
    heroTitle2: "CULTURE",
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
      
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        zIndex: 10000, borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* LOGO: Gök mavi halka, Beyaz zemin, ♻️ simgesi */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ 
            width: '32px', height: '32px', borderRadius: '50%', 
            border: '2px solid #00BFFF', backgroundColor: 'white', 
            display: 'flex', alignItems: 'center', justifyContent: 'center' 
          }}>
            <span style={{ fontSize: '18px', lineHeight: '1' }}>♻️</span>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>CC</span>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          {['TR', 'EN'].map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', opacity: lang === l ? 1 : 0.3 }}>
              {l === 'TR' ? '🇹🇷' : '🇬🇧'}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ 
        paddingTop: '160px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        paddingInline: '20px', 
        textAlign: 'center' 
      }}>
        {/* BAŞLIK: İki satıra bölerek estetik görünüm sağladık */}
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 12vw, 5rem)', 
          lineHeight: '0.9',
          color: '#10b981', 
          fontWeight: '900',
          margin: 0
        }}>
          {t.heroTitle1}<br />
          <span style={{ color: '#059669' }}>{t.heroTitle2}</span>
        </h1>
        
        <p style={{ color: '#aaa', marginTop: '30px', maxWidth: '320px', fontSize: '1.1rem', lineHeight: '1.5' }}>
          {t.heroSub}
        </p>
        
        <button style={{ 
          backgroundColor: '#10b981', color: 'white', border: 'none', 
          padding: '18px 40px', borderRadius: '50px', fontWeight: 'bold', 
          marginTop: '40px', fontSize: '1rem', cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(16,185,129,0.2)'
        }}>
          {t.btnAudit}
        </button>
      </main>

      {/* AI BOT BUTONU */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)} 
        style={{ 
          position: 'fixed', bottom: '25px', right: '25px', 
          width: '65px', height: '65px', borderRadius: '50%', 
          backgroundColor: '#10b981', border: 'none', color: 'white', 
          fontSize: '28px', zIndex: 10001, boxShadow: '0 5px 15px rgba(0,0,0,0.5)' 
        }}
      >
        {isChatOpen ? '✕' : '🤖'}
      </button>
    </div>
  );
}
