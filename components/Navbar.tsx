"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold tracking-tighter italic">CC</Link>
      <div className="flex items-center gap-6">
        <Link href="/about" className="text-sm hover:text-emerald-400 transition">Hakkımızda</Link>
        <select className="bg-transparent border border-white/20 rounded px-2 py-1 text-sm outline-none">
          <option value="tr" className="bg-black">TR</option>
          <option value="en" className="bg-black">EN</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
