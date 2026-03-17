'use client';

import React, { useState, useRef, useEffect } from 'react';

// Çeviri Sözlüğü
const translations: any = {
  TR: {
    heroTitle1: "CIRCULAR",
    heroTitle2: "CULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aiTitle: "CC Asistan",
    aiPlaceholder: "Bir soru sorun...",
    aiWelcome: "Merhaba! Döngüsel ekonomi hakkında size nasıl yardımcı olabilirim?",
    btnAudit: "Denetime Başla",
    footer: "© 2026 Circular Culture. Tüm hakları saklıdır."
  },
  EN: {
    heroTitle1: "CIRCULAR",
    heroTitle2: "CULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
    aiTitle: "CC Assistant",
    aiPlaceholder: "Ask a question...",
    aiWelcome: "Hello! How can I help you with circular economy?",
    btnAudit: "Start Audit",
    footer: "© 2026 Circular Culture. All rights reserved."
  }
};

export default function Home() {
  const [lang, setLang] = useState('TR');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  
  const t = translations[lang] || translations.TR;
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  // Otomatik Chat Kaydırma
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Basit AI Simülasyonu
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: lang === 'TR' ? "Stratejilerimizle karbon ayak izinizi optimize edebiliriz." : "We can optimize your carbon footprint with our strategies." 
      }]);
    }, 800);
  };

  return (
    <div style={{ 
      backgroundColor: 'black', 
      minHeight: '100vh', 
      color: 'white', 
      overflowX: 'hidden', 
      width: '100%', 
      fontFamily: 'sans-serif' 
    }}>
      
      {/* 1. NAVBAR (Yeni Logo ve Dil Sembolleri) */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        zIndex: 10000, borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* LOGO: Mavi Halka, Beyaz Zemin, ♻️ */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ 
            width: '32px', height: '32px', borderRadius: '50%', 
            border: '2px solid #00BFFF', backgroundColor: 'white', 
            display: 'flex', alignItems: 'center', justifyContent: 'center' 
          }}>
            <span style={{ fontSize: '18px', lineHeight: 1 }}>♻️</span>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>CC</span>
        </div>
        
        {/* DİL SEÇİCİ (Minimalist TR/EN) */}
        <div style={{ display: 'flex', gap: '5px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '50px' }}>
          {['TR', 'EN'].map((l) => (
            <button 
              key={l} 
              onClick={() => setLang(l)} 
              style={{ 
                background: lang === l ? '#10b981' : 'transparent', 
                border: 'none', color: lang === l ? 'white' : '#777',
                fontSize: '11px', fontWeight: 'bold', cursor: 'pointer',
                width: '32px', height: '32px', borderRadius: '50%', transition: '0.3s'
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* 2. HERO SECTION (Mobil Uyumlu Başlık) */}
      <main style={{ 
        paddingTop: '160px', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', paddingInline: '20px', textAlign: 'center' 
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2.8rem, 15vw, 6rem)', 
          lineHeight: '0.85', 
          color: '#10b981', 
          fontWeight: '900', 
          margin: 0,
          letterSpacing: '-2px'
        }}>
          {t.heroTitle1}<br />
          <span style={{ color: '#059669' }}>{t.heroTitle2}</span>
        </h1>
        
        <p style={{ color: '#aaa', marginTop: '25px', maxWidth: '300px', fontSize: '1.1rem', lineHeight: '1.4' }}>
          {t.heroSub}
        </p>
        
        <button style={{ 
          backgroundColor: '#10b981', color: 'white', border: 'none', 
          padding: '18px 45px', borderRadius: '50px', fontWeight: 'bold', 
          marginTop: '40px', fontSize: '1rem', cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(16,185,129,0.3)'
        }}>
          {t.btnAudit}
        </button>
      </main>

      {/* 3. AI ASİSTAN (Bot Panel) */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)} 
        style={{ 
          position: 'fixed', bottom: '25px', right: '25px', 
          width: '60px', height: '60px', borderRadius: '50%', 
          backgroundColor: '#10b981', border: 'none', color: 'white', 
          fontSize: '26px', zIndex: 10001, cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
        }}
      >
        {isChatOpen ? '✕' : '🤖'}
      </button>

      {isChatOpen && (
        <div style={{ 
          position: 'fixed', bottom: '95px', right: '25px', 
          width: 'min(340px, 90vw)', height: '420px', backgroundColor: '#111', 
          borderRadius: '24px', border: '1px solid #222', zIndex: 10001, 
          display: 'flex', flexDirection: 'column', overflow: 'hidden'
        }}>
          <div style={{ background: '#10b981', padding: '15px', fontWeight: 'bold' }}>{t.aiTitle}</div>
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: '#222', padding: '10px', borderRadius: '10px', fontSize: '0.85rem' }}>{t.aiWelcome}</div>
            {messages.map((m, i) => (
              <div key={i} style={{ 
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', 
                background: m.role === 'user' ? '#10b981' : '#333', 
                padding: '10px', borderRadius: '10px', fontSize: '0.85rem' 
              }}>{m.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{ padding: '12px', display: 'flex', gap: '5px', borderTop: '1px solid #222' }}>
            <input 
              value={input} onChange={(e) => setInput(e.target.value)} 
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.aiPlaceholder} 
              style={{ flex: 1, background: '#222', border: 'none', color: 'white', padding: '10px', borderRadius: '8px', outline: 'none' }} 
            />
            <button onClick={handleSend} style={{ background: '#10b981', border: 'none', color: 'white', padding: '10px', borderRadius: '8px' }}>OK</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ marginTop: '100px', padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #111', opacity: 0.4, fontSize: '0.8rem' }}>
        {t.footer}
      </footer>
    </div>
  );
}
