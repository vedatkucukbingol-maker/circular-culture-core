import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from "@/lib/language-context";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Circular Culture | Sustainability Consultancy',
  description: 'Leading the Circular Revolution. Circular Culture helps organizations transition to sustainable, circular business models through expert consultancy and AI-powered tools.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#064e3b',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`}>
        <LanguageProvider>
        {children}
          </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
