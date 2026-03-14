export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#10b981', margin: '0' }}>CIRCULARCULTURE</h1>
      <p style={{ fontSize: '1.5rem', color: '#888' }}>Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.</p>
      <div style={{ marginTop: '30px' }}>
        <button style={{ 
          backgroundColor: '#059669', 
          color: 'white', 
          border: 'none', 
          padding: '15px 30px', 
          borderRadius: '50px', 
          fontSize: '1rem', 
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Denetime Başla
        </button>
      </div>
    </main>
  );
}
