import React from 'react';

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      padding: '20px',
      backgroundColor: 'black',
      background: 'radial-gradient(circle at center, #052c1e 0%, black 100%)'
    }}>
      <div style={{ maxWidth: '800px' }}>
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
          <button style={{ 
            backgroundColor: '#10b981', 
            color: 'white', 
            border: 'none', 
            padding: '16px 36px', 
            borderRadius: '100px', 
            fontSize: '1rem', 
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(16,185,129,0.3)',
            transition: 'transform 0.2s'
          }}>
            Denetime Başla
          </button>
          
          <button style={{ 
            backgroundColor: 'transparent', 
            color: 'white', 
            border: '1px solid rgba(255,255,255,0.2)', 
            padding: '16px 36px', 
            borderRadius: '100px', 
            fontSize: '1rem', 
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Daha Fazla Bilgi
          </button>
        </div>
      </div>

      {/* Arka plan süslemesi için basit bir efekt */}
      <div style={{
        position: 'fixed',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.1)',
        fontSize: '0.8rem',
        letterSpacing: '5px'
      }}>
        DÖNGÜSEL DÖNÜŞÜM
      </div>
    </main>
  );
}
