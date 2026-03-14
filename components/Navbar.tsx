"use client";

import React from 'react';
import Link from 'next/link';
// Import yollarını göreceli (relative) hale getirerek riski azaltıyoruz
import { useLanguage } from '../lib/language-context';
import { translations } from '../lib/translations';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex gap-4">
        <Link href="/">{t.home}</Link>
        <Link href="/about">{t.about}</Link>
      </div>
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        className="border p-1 rounded"
      >
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
    </nav>
  );
};

export default Navbar;
