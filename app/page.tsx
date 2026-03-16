'use client';

import React, { useState, useRef, useEffect } from 'react';

const translations: any = {
  TR: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aboutTitle: "Hakkımızda",
    aboutText: "Circular Culture, döngüsel ekonomi prensiplerini iş modellerine entegre eden küresel bir danışmanlık platformudur.",
    aiTitle: "CC Asistan",
    aiPlaceholder: "Sürdürülebilirlik sor...",
    aiWelcome: "Merhaba! Ben CC Asistanı. Size nasıl yardımcı olabilirim?",
    btnAudit: "Denetime Başla",
    footerText: "Döngüsel ekonomi ile geleceği şekillendiriyoruz."
  },
  EN: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
    aboutTitle: "About Us",
    aboutText: "Circular Culture is a global consultancy platform integrating circular economy principles into business models.",
    aiTitle: "CC Assistant",
    aiPlaceholder: "Ask about sustainability...",
    aiWelcome: "Hello! I am CC Assistant. How can I help you?",
    btnAudit: "Start Audit",
    footerText: "Shaping the future with circular economy."
  }
};

export default function Home() {
  const [lang, setLang] = useState('TR');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  
  const t = translations[lang] || translations.TR;
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      const response = lang === 'TR' 
        ? "Döngüsel stratejilerimizle karbon ayak izinizi azaltabiliriz." 
        : "We can reduce your carbon footprint with our circular strategies.";
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden' }}>
      
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)', zIndex: 10000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #00BFFF', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '14px' }}>♻️</span>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>CC</span>
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          {[{ id: 'TR', f: '🇹🇷' }, { id: 'EN', f: '🇬🇧' }].map((l) => (
            <button key={l.id} onClick={() => setLang(l.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', opacity: lang === l.id ? 1 : 0.3 }}>
              {l.f}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ paddingTop: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px', width: '100%' }}>
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 8vw, 4.5rem)', 
          color: '#10b981', 
          fontWeight: '900', 
          textAlign: 'center',
          wordBreak: 'break-word',
          maxWidth: '100%'
        }}>
          {t.heroTitle}
        </h1>
        <p style={{ color: '#aaa', marginTop: '20px', textAlign: 'center', maxWidth: '600px' }}>{t.heroSub}</p>
        
        <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '15px 35px', borderRadius: '50px', fontWeight: 'bold', marginTop: '30px', cursor: 'pointer' }}>
          {t.btnAudit}
        </button>

        <section style={{ maxWidth: '800px', padding: '80px 0', textAlign: 'center' }}>
          <h2 style={{ color: '#10b981', marginBottom: '20px' }}>{t.aboutTitle}</h2>
          <p style={{ color: '#ccc', lineHeight: '1.8' }}>{t.aboutText}</p>
        </section>
      </main>

      {/* AI BOT */}
      <button onClick={() => setIsChatOpen(!isChatOpen)} style={{ position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#10b981', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer', zIndex: 10001 }}>
        {isChatOpen ? '✕' : '🤖'}
      </button>

      {isChatOpen && (
        <div style={{ position: 'fixed', bottom: '90px', right: '20px', width: 'min(330px, 85vw)', height: '400px', backgroundColor: '#111', borderRadius: '20px', border: '1px solid #222', zIndex: 10001, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ background: '#10b981', padding: '15px', fontWeight: 'bold' }}>{t.aiTitle}</div>
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? '#10b981' : '#333', padding: '10px', borderRadius: '10px', fontSize: '0.9rem' }}>{m.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{ padding: '10px', display: 'flex', gap: '5px' }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder={t.aiPlaceholder} style={{ flex: 1, background: '#222', border: 'none', color: 'white', padding: '10px', borderRadius: '8px' }} />
            <button onClick={handleSend} style={{ background: '#10b981', border: 'none', color: 'white', padding: '10px', borderRadius: '8px' }}>OK</button>
          </div>
        </div>
      )}

      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #111' }}>
        <p style={{ color: '#444', fontSize: '0.8rem' }}>© 2026 Circular Culture</p>
      </footer>
    </div>
  );
}
