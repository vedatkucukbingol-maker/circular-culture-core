import React from 'react';

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', // İçeriğin yukarıdan başlaması için
      textAlign: 'center',
      padding: '120px 20px 60px 20px', // Üstten Navbar payı bırakıldı
      backgroundColor: 'black',
      background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)'
    }}>
      {/* HERO BÖLÜMÜ */}
      <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
          color: '#10b981', 
          margin: '0', 
          fontWeight: '900',
          letterSpacing: '-2px',
          textTransform: 'uppercase'
        }}>
          CIRCULARCULTURE
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#a1a1aa', 
          lineHeight: '1.6',
          marginTop: '20px',
          fontWeight: '300'
        }}>
          Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.
        </p>

        <div style={{ marginTop: '40px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '16px 36px', borderRadius: '100px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Denetime Başla
          </button>
          <button style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 36px', borderRadius: '100px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Daha Fazla Bilgi
          </button>
        </div>
      </div>

      {/* HİZMETLER BÖLÜMÜ (Şu anki işlemimiz) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px', 
        width: '100%', 
        maxWidth: '1100px'
      }}>
        {[
          { title: 'Döngüsel Denetim', desc: 'Süreçlerinizi analiz ediyor ve atıklarınızı kaynağa dönüştürüyoruz.', icon: '♻️' },
          { title: 'Sürdürülebilirlik Raporu', desc: 'Uluslararası standartlarda çevresel etki raporlaması sunuyoruz.', icon: '📊' },
          { title: 'Yeşil Dönüşüm', desc: 'Karbon ayak izinizi azaltacak stratejik yol haritaları çiziyoruz.', icon: '🌱' }
        ].map((service, index) => (
          <div key={index} style={{
            padding: '40px 30px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(16,185,129,0.15)',
            textAlign: 'left',
            backdropFilter: 'blur(5px)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{service.icon}</div>
            <h3 style={{ color: '#10b981', marginBottom: '12px', fontSize: '1.4rem' }}>{service.title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
