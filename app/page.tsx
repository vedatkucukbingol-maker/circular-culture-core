import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          CIRCULARCULTURE
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400">
          Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link href="/" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-full font-bold transition-all">
            Denetime Başla
          </Link>
          <Link href="/" className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-full font-bold transition-all">
            Daha Fazla Bilgi
          </Link>
        </div>
      </div>
    </main>
  );
}
