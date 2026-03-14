"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold tracking-tighter italic text-white">
        CC
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/" className="text-sm text-gray-300 hover:text-white transition">Hakkımızda</Link>
        <div className="text-xs font-bold border border-white/20 rounded px-2 py-1 text-white">TR</div>
      </div>
    </nav>
  );
}
