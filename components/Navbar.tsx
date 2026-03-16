<nav style={{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // Logo sol, Bayraklar sağ
  padding: '0 5%', // Kenarlardan güvenli boşluk
  background: 'rgba(0, 0, 0, 0.85)',
  backdropFilter: 'blur(12px)', // Modern buzlu cam efekti
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  zIndex: 10000,
  width: '100%',
  boxSizing: 'border-box' // Padding'in genişliği etkilemesini engeller
}}>
  
  {/* LOGO ALANI */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <div style={{ 
      width: '35px', 
      height: '35px', 
      borderRadius: '50%', 
      border: '2px solid #00BFFF', // Gök mavi halka
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white' // Zemin beyaz
    }}>
      <span style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold' }}>♻️</span>
    </div>
    <span style={{ 
      fontSize: '1.2rem', 
      fontWeight: 'bold', 
      color: '#10b981',
      display: 'inline-block' 
    }}>
      CC
    </span>
  </div>

  {/* DİL SEÇİCİ (Taşmayı önleyen esnek yapı) */}
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '6px 12px',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  }}>
    {[
      { id: 'TR', f: '🇹🇷' }, 
      { id: 'EN', f: '🇬🇧' }
    ].map((l) => (
      <button 
        key={l.id} 
        onClick={() => setLang(l.id)} 
        style={{ 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: '18px', // İdeal bayrak boyutu
          padding: '0 4px',
          opacity: lang === l.id ? 1 : 0.25,
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {l.f}
      </button>
    ))}
  </div>
</nav>
