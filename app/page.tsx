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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const t = translations[lang] || translations.TR;

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', width: '100%' }}>
      
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
        zIndex: 10000, borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px' }}>
          
          {/* LOGO & MENU TETİKLEYİCİ */}
          <div 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          >
            <div style={{ 
              width: '35px', height: '35px', borderRadius: '50%', 
              border: '2px solid #00BFFF', backgroundColor: 'white', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'transform 0.3s'
            }}>
              <span style={{ fontSize: '18px' }}>♻️</span>
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>CC</span>
            <span style={{ color: '#00BFFF', fontSize: '12px', marginLeft: '5px' }}>{isMenuOpen ? '▲' : '▼'}</span>
          </div>
          
          {/* DİL SEÇİCİ */}
          <div style={{ display: 'flex', gap: '5px', background: 'rgba(255,255,255,0.1)', padding: '3px', borderRadius: '50px' }}>
            {['TR', 'EN'].map((l) => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                style={{ 
                  background: lang === l ? '#10b981' : 'transparent', 
                  border: 'none', color: 'white', fontSize: '10px', 
                  fontWeight: 'bold', width: '30px', height: '30px', 
                  borderRadius: '50%', cursor: 'pointer', transition: '0.3s'
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* AŞAĞI AÇILAN MENÜ (DROPDOWN) */}
        {isMenuOpen && (
          <div style={{ 
            background: 'rgba(10, 10, 10, 0.95)', 
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', 
            flexDirection: 'column',
            padding: '10px 0',
            animation: 'slideDown 0.3s ease-out'
          }}>
            {[
              { label: t.menu.vision, icon: '🎯' },
              { label: t.menu.mission, icon: '🚀' },
              { label: t.menu.legal, icon: '⚖️' },
              { label: t.menu.contact, icon: '📞' }
            ].map((item, idx) => (
              <a 
                key={idx}
                href="#" 
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  padding: '15px 25px', 
                  color: '#ccc', 
                  textDecoration: 'none', 
                  fontSize: '0.95rem',
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  gap:
