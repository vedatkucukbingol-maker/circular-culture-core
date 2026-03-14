export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-24">
      <h1 className="text-6xl font-black text-emerald-500 tracking-tighter">
        CIRCULARCULTURE
      </h1>
      <p className="mt-4 text-xl text-gray-400">
        Sürdürülebilir bir gelecek için organizasyonları dönüştürüyoruz.
      </p>
      <div className="mt-10">
        <button className="rounded-full bg-emerald-600 px-8 py-3 font-bold text-white transition-hover hover:bg-emerald-700">
          Yakında Sizlerle
        </button>
      </div>
    </main>
  );
}
