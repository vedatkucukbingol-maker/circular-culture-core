import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../lib/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Circular Culture",
  description: "Sustainability and Circular Economy Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

