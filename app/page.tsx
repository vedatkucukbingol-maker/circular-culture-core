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
      backgroundColor: 'black',
      color: 'white',
      margin: 0
    }}>
      <h1 style={{ fontSize: '4rem', color: '#10b981' }}>CIRCULARCULTURE</h1>
      <p style={{ fontSize: '1.2rem', color: '#888' }}>Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.</p>
    </main>
  );
}
