'use client';

import React, { useState, useEffect } from 'react';

const translations: any = {
  TR: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aboutTitle: "Hakkımızda",
    aboutText: "Circular Culture, döngüsel ekonomi prensiplerini iş modellerine entegre eden küresel bir danışmanlık platformudur.",
    aiTitle: "CC Yapay Zeka",
    aiPlaceholder: "Sürdürülebilirlik hakkında bir şey sor...",
    aiWelcome: "Merhaba! Ben CC Asistanı. Şirketinizi nasıl daha döngüsel hale getirebiliriz?",
    btnAudit: "Denetime Başla",
    s1Title: "Döngüsel Denetim",
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
    btnAudit: "Start Audit",
    s1Title: "Circular Audit",
    footerText: "Shaping the future with circular economy."
  },
  DE: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transformation von Organisationen für eine nachhaltige Zukunft.",
    aboutTitle: "Über Uns",
    aboutText: "Circular Culture ist eine globale Beratungsplattform, die Prinzipien der Kreislaufwirtschaft integriert.",
    aiTitle: "CC KI-Assistent",
    aiPlaceholder: "Fragen Sie etwas zur Nachhaltigkeit...",
    aiWelcome: "Hallo! Ich bin der CC-Assistent. Wie können wir Ihr Unternehmen zirkulärer machen?",
    btnAudit: "Audit Starten",
    s1Title: "Zirkuläres Audit",
    footerText: "Die Zukunft kreislauffähig gestalten."
  },
  ES: {
    heroTitle: "CIRCULARCULTURE",
    heroSub: "Transformando organizaciones para un futuro sostenible.",
    aboutTitle: "Nosotros",
    aboutText: "Circular Culture es una plataforma de consultoría global que integra principios de economía circular.",
    aiTitle: "CC Asistente IA",
    aiPlaceholder: "Pregunta algo sobre sostenibilidad...",
    aiWelcome: "¡Hola! Soy el Asistente CC. ¿Cómo podemos hacer que su empresa sea más circular?",
    btnAudit: "Iniciar Auditoría",
    s1Title: "Auditoría Circular",
    footerText: "Definiendo el futuro circular."
  }
};

export default function Home() {
  const [lang, setLang] = useState('TR');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const t = translations[lang] || translations.TR;

  // AI Mesaj Gönderme Simülasyonu
  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Yapay zeka cevap veriyormuş gibi yapalım
    setTimeout(() => {
      setMessages([...newMessages, { role: 'ai', text: "Analiz ediyorum... Döngüsel stratejileriniz için karbon ayak izinizi %20 azaltacak bir yol haritası hazırlayabilirim." }]);
    }, 1000);
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
          {[{ id: 'TR', f: '🇹🇷' }, { id: 'EN', f: '🇬🇧' }, { id: 'DE', f: '🇩🇪' }, { id: 'ES', f: '🇪🇸' }].map((l) => (
            <button key={l.id} onClick={() => setLang(l.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', opacity: lang === l.id ? '1' : '0.2' }}>{l.f}</button>
          ))}
        </div>
      </nav>

      <main style={{ paddingTop: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', color: '#10b981', textAlign: 'center' }}>{t.heroTitle}</h1>
        <p style={{ color: '#aaa', textAlign: 'center', maxWidth: '600px', margin: '20px' }}>{t.heroSub}</p>
        
        {/* YAPAY ZEKA BUTONU */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          style={{
            position: 'fixed', bottom: '30px', right: '30px',
            width: '60px', height: '60px', borderRadius: '50%',
            backgroundColor: '#10b981', border: 'none', color: 'white',
            fontSize: '24px', cursor: 'pointer', boxShadow: '0 0 20px #10b981',
            zIndex: 10001, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          🤖
        </button>

        {/* AI CHAT PENCERESİ */}
        {isChatOpen && (
          <div style={{
            position: 'fixed', bottom: '100px', right: '30px',
            width: '320px', height: '450px', backgroundColor: '#111',
            borderRadius: '20px', border: '1px solid #10b981',
            display: 'flex', flexDirection: 'column', zIndex: 10001,
            overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <div style={{ background: '#10b981', padding: '15px', fontWeight: 'bold' }}>{t.aiTitle}</div>
            <div style={{ flex: 1, padding: '15px', overflowY: 'auto', fontSize: '0.9rem' }}>
              <div style={{ marginBottom: '10px', color: '#10b981' }}>{t.aiWelcome}</div>
              {messages.map((m, i) => (
                <div key={i} style={{ textAlign: m.role === 'user' ? 'right' : 'left', marginBottom: '10px' }}>
                  <span style={{ background: m.role === 'user' ? '#333' : '#052c1e', padding: '8px 12px', borderRadius: '12px', display: 'inline-block' }}>
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ padding: '10px', display: 'flex', gap: '5px', borderTop: '1px solid #222' }}>
              <input 
                value={input} onChange={(e) => setInput(e.target.value)}
                placeholder={t.aiPlaceholder}
                style={{ flex: 1, background: '#222', border: 'none', color: 'white', padding: '10px', borderRadius: '10px' }}
              />
              <button onClick={handleSend} style={{ background: '#10b981', border: 'none', color: 'white', padding: '10px', borderRadius: '10px' }}>✈️</button>
            </div>
          </div>
        )}

        {/* HAKKIMIZDA BÖLÜMÜ */}
        <section style={{ maxWidth: '800px', padding: '80px 20px', textAlign: 'center' }}>
          <h2 style={{ color: '#10b981' }}>{t.aboutTitle}</h2>
          <p style={{ color: '#ccc', lineHeight: '1.8' }}>{t.aboutText}</p>
        </section>
      </main>
    </div>
  );
}
