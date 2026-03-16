'use client';

import React, { useState, useRef, useEffect } from 'react';

const translations: any = {
  TR: {
    heroTitle1: "CIRCULAR",
    heroTitle2: "CULTURE",
    heroSub: "Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.",
    aiTitle: "CC Asistan",
    aiPlaceholder: "Bir soru sorun...",
    aiWelcome: "Merhaba! Size nasıl yardımcı olabilirim?",
    btnAudit: "Denetime Başla",
  },
  EN: {
    heroTitle1: "CIRCULAR",
    heroTitle2: "CULTURE",
    heroSub: "Transforming organizations for a sustainable future.",
    aiTitle: "CC Assistant",
    aiPlaceholder: "Ask a question...",
    aiWelcome: "Hello! How can I help you?",
    btnAudit: "Start Audit",
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
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: lang === 'TR' ? "Döngüsel çözümlerimizle yanınızdayız." : "We are here with our circular solutions." 
      }]);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'hidden', width: '100%', fontFamily: 'sans-serif' }}>
      
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '75px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
        zIndex: 10000, borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* LOGO: Gök mavi halka, Beyaz zemin, ♻️ simgesi */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ 
            width: '35px', height: '35px', borderRadius: '50%', 
            border: '2px solid #00BFFF', backgroundColor: 'white', 
            display: 'flex', alignItems: 'center', justifyContent: 'center' 
          }}>
            <span style={{ fontSize: '18px' }}>♻️</span>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>CC</span>
        </div>
        
        {/* DİL SEMBOLLERİ (Minimalist TR/EN) */}
        <div style={{ 
          display: 'flex', gap: '5px', background: 'rgba(255,255,255,0.05)', 
          padding: '4px
