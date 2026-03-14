import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Circular Culture",
  description: "Sürdürülebilir Dönüşüm Platformu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
