import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>CC</div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span style={{ color: '#888', fontSize: '0.9rem', cursor: 'pointer' }}>Hakkımızda</span>
        <div style={{
          padding: '4px 8px',
          border: '1px solid #333',
          borderRadius: '4px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>TR</div>
      </div>
    </nav>
  );
}
