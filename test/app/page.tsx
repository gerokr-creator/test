export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-6">
          Digital World 🚀
        </h1>

        <p className="text-xl text-white/70 mb-8">
          My first Next.js app is LIVE.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
          LETS GO
        </button>
      </div>
    </main>
  );
}