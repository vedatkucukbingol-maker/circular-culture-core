'use client';

import React, { useState, useRef, useEffect } from 'react';

const translations: any = {
  TR: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aboutTitle: "Hakkımızda",
    aboutText: "Circular Culture, döngüsel ekonomi prensiplerini iş modellerine entegre eden küresel bir danışmanlık platformudur.",
    aiTitle: "CC Yapay Zeka",
    aiPlaceholder: "Sürdürülebilirlik hakkında bir şey sor...",
    aiWelcome: "Merhaba! Ben CC Asistanı. Şirketinizi nasıl daha döngüsel hale getirebiliriz?",
    aiThinking: "Düşünüyor...",
    btnAudit: "Denetime Başla",
    s1Title: "Döngüsel Denetim",
    s1Desc: "Süreçlerinizi analiz ediyor ve atıklarınızı kaynağa dönüştürüyoruz.",
    footerText: "Geleceği döngüsel ekonomi ile şekillendiriyoruz."
  },
  EN: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
    aboutTitle: "About Us",
    aboutText: "Circular Culture is a global consultancy platform integrating circular economy principles into business models.",
    aiTitle: "CC AI Assistant",
    aiPlaceholder: "Ask something about sustainability...",
    aiWelcome: "Hello! I am CC Assistant. How can we make your company more circular?",
    aiThinking: "Thinking...",
    btnAudit: "Start Audit",
    s1Title: "Circular Audit",
    s1Desc: "We analyze your processes and turn your waste into resources.",
    footerText: "Shaping the future with circular economy."
  }
};

export default function Home() {
  const [lang, setLang] = useState('TR');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  const t = translations[lang] || translations.TR;

  // Otomatik aşağı kaydır
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsThinking(true);

    // AI Cevap Mantığı
    setTimeout(() => {
      let response = lang === 'TR' 
        ? "Harika bir soru! Döngüsel ekonomi stratejileri kapsamında size özel bir atık azaltma planı hazırlayabilirim." 
        : "Great question! I can prepare a customized waste reduction plan for you within circular economy strategies.";
      
      if (userMsg.toLowerCase().includes('karbon') || userMsg.toLowerCase().includes('carbon')) {
        response = lang === 'TR' 
          ? "Karbon ayak izinizi ölçmek için 'Denetime Başla' butonunu kullanabilirsiniz. Emisyonları %30 azaltmak mümkün."
          : "You can use the 'Start Audit' button to measure your carbon footprint. It is possible to reduce emissions by 30%.";
      }

      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)', zIndex: 10000
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>CC</div>
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '5px 10px', borderRadius: '50px' }}>
          {[{ id: 'TR', f: '🇹🇷' }, { id: 'EN', f: '🇬🇧' }].map((l) => (
            <button key={l.id} onClick={() => setLang(l.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', opacity: lang === l.id ? '1' : '0.2' }}>{l.f}</button>
          ))}
        </div>
      </nav>

      <main style={{ paddingTop: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)', minHeight: '100vh' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', color: '#10b981', textAlign: 'center', fontWeight: '900' }}>{t.heroTitle}</h1>
        <p style={{ color: '#aaa', textAlign: 'center', maxWidth: '600px', margin: '20px', fontSize: '1.1rem' }}>{t.heroSub}</p>
        
        <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '16px 40px', borderRadius: '100px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}>
          {t.btnAudit}
        </button>

        {/* AI CHAT BUTTON */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          style={{
            position: 'fixed', bottom: '30px', right: '30px',
            width: '60px', height: '60px', borderRadius: '30px',
            backgroundColor: '#10b981', border: 'none', color: 'white',
            fontSize: '24px', cursor: 'pointer', boxShadow: '0 0 20px rgba(16,185,129,0.5)',
            zIndex: 10001, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          {isChatOpen ? '✕' : '🤖'}
        </button>

        {/* AI CHAT WINDOW */}
        {isChatOpen && (
          <div style={{
            position: 'fixed', bottom: '100px', right: '30px',
            width: 'min(350px, 90vw)', height: '500px', backgroundColor: '#0a0a0a',
            borderRadius: '24px', border: '1px solid rgba(16,185,129,0.3)',
            display: 'flex', flexDirection: 'column', zIndex: 10001,
            overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
          }}>
            <div style={{ background: '#10b981', padding: '18px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
              <span>{t.aiTitle}</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Online</span>
            </div>
            
            <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ alignSelf: 'flex-start', background: '#1a1a1a', padding: '10px 14px', borderRadius: '15px 15px 15px 0', border: '1px solid #333', fontSize: '0.9rem', color: '#10b981' }}>
                {t.aiWelcome}
              </div>
              {messages.map((m, i) => (
                <div key={i} style={{ 
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  background: m.role === 'user' ? '#10b981' : '#1a1a1a',
                  color: m.role === 'user' ? 'white' : 'white',
                  padding: '10px 14px', borderRadius: m.role === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0',
                  fontSize: '0.9rem', maxWidth: '80%'
                }}>
                  {m.text}
                </div>
              ))}
              {isThinking && <div style={{ fontSize: '0.8rem', color: '#666' }}>{t.aiThinking}</div>}
              <div ref={chatEndRef} />
            </div>

            <div style={{ padding: '15px', background: '#0f0f0f', display: 'flex', gap: '8px' }}>
              <input 
                value={input} onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.aiPlaceholder}
                style={{ flex: 1, background: '#1a1a1a', border: '1px solid #333', color: 'white', padding: '12px', borderRadius: '12px', outline: 'none' }}
              />
              <button onClick={handleSend} style={{ background: '#10b981', border: 'none', color: 'white', padding: '12px', borderRadius: '12px', cursor: 'pointer' }}>
                OK
              </button>
            </div>
          </div>
        )}

        {/* SERVICES PREVIEW */}
        <section style={{ width: '100%', maxWidth: '1000px', padding: '80px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '30px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(16,185,129,0.1)' }}>
            <h3 style={{ color: '#10b981' }}>{t.s1Title}</h3>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>{t.s1Desc}</p>
          </div>
        </section>
      </main>

      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #111' }}>
        <p style={{ color: '#10b981', fontSize: '0.9rem' }}>© 2026 Circular Culture</p>
      </footer>
    </div>
  );
}
