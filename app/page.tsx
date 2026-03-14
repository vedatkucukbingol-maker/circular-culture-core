import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
      <div className="max-w-4xl space-y-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          CIRCULARCULTURE
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
          Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.
        </p>

        <div className="py-4">
          <span className="text-emerald-500 font-mono tracking-[0.3em] uppercase text-sm border-y border-emerald-500/30 py-2">
            Döngüsel Devrime Öncülük Edin
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">
          <Link href="/denetim" className="px-10 py-4 bg-white text-black hover:bg-emerald-500 hover:text-white rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Denetime Başla
          </Link>
          <Link href="/bilgi" className="px-10 py-4 border border-white/20 hover:border-emerald-500/50 hover:bg-white/5 rounded-full font-bold transition-all duration-300">
            Daha Fazla Bilgi
          </Link>
        </div>
      </div>
      
      {/* Arka plan süslemesi */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full -z-10" />
    </main>
  );
}
