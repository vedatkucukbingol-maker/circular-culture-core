import type { Metadata } from "next";
import Navbar from "../components/Navbar"; // Navbar'ı buradan çağırıyoruz

export const metadata: Metadata = {
  title: "Circular Culture",
  description: "Döngüsel Dönüşüm Platformu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={{ backgroundColor: 'black', color: 'white', margin: 0, fontFamily: 'sans-serif' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
