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
    btnMore: "Daha Fazla Bilgi",
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
    btnMore: "Learn More",
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
        ? "Döngüsel stratejilerimizle karbon ayak izinizi %30 azaltabiliriz." 
        : "We can reduce your carbon footprint by 30% with our circular strategies.";
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    }, 1000);
  };

  return (
    <div style={{ 
      backgroundColor: 'black', 
      minHeight: '100vh', 
      color: 'white', 
      fontFamily: 'sans-serif',
      overflowX: 'hidden', // YATAY TAŞMAYI ENGELLER
      width: '100vw'
    }}>
      
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)', zIndex: 10000
      }}>
