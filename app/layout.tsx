import type { Metadata, Viewport } from 'next'

// SEO ve Sosyal Medya Görünümü İçin
export const metadata: Metadata = {
  title: 'Circular Culture | Döngüsel Ekonomi Platformu',
  description: 'Organizasyonları sürdürülebilir bir gelecek için dönüştürüyoruz.',
  icons: {
    icon: '/favicon.ico', // Varsa logonuzu buraya ekleyin
  },
}

// Mobil Taşmaları ve Zoom Hatalarını Önlemek İçin
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: 'black', // Sayfa yüklenirken beyaz parlamayı önler
        minHeight: '100vh',
        overflowX: 'hidden' // Yatay kaydırmayı global olarak engeller
      }}>
        {children}
      </body>
    </html>
  )
}
