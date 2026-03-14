export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-black text-emerald-500 tracking-tighter uppercase">
        CIRCULARCULTURE
      </h1>
      <p className="mt-4 text-xl text-gray-400 max-w-2xl">
        Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button className="rounded-full bg-emerald-600 px-10 py-4 font-bold text-white transition-colors hover:bg-emerald-700">
          Denetime Başla
        </button>
        <button className="rounded-full border border-white/20 px-10 py-4 font-bold text-white hover:bg-white/10">
          Daha Fazla Bilgi
        </button>
      </div>
    </main>
  );
}
