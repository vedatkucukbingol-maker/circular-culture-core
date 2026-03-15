export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      backgroundColor: 'black'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#10b981', fontWeight: 'bold' }}>CIRCULARCULTURE</h1>
      <p style={{ fontSize: '1.2rem', color: '#888' }}>Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.</p>
      <button style={{ 
        marginTop: '20px',
        backgroundColor: '#059669', 
        color: 'white', 
        border: 'none', 
        padding: '12px 24px', 
        borderRadius: '30px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Denetime Başla
      </button>
    </main>
  );
}
