export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-6xl font-bold text-emerald-500 mb-4">CIRCULARCULTURE</h1>
      <p className="text-xl text-gray-400">Sürdürülebilir bir gelecek için çalışıyoruz.</p>
      <div className="mt-8 flex gap-4">
        <button className="bg-emerald-600 px-6 py-3 rounded-full font-bold">Denetime Başla</button>
      </div>
    </main>
  );
}
