"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl px-8 py-5 flex justify-between items-center">
      <Link href="/" className="text-2xl font-black tracking-tighter italic hover:text-emerald-500 transition-colors">
        CC
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
          Hakkımızda
        </Link>
        <div className="h-4 w-[1px] bg-white/20"></div>
        <select className="bg-transparent text-sm font-bold cursor-pointer outline-none focus:text-emerald-500">
          <option value="tr" className="bg-black text-white">TR</option>
          <option value="en" className="bg-black text-white">EN</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
