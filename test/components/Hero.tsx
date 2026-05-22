export default function Hero() {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-6">
          Modern Web App 🚀
        </h1>

        <p className="text-white/70 text-xl mb-8">
          Build with Next.js + Tailwind
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}