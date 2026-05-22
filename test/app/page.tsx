import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Fast"
            description="Built with Next.js for blazing speed."
          />

          <Card
            title="Modern"
            description="Using Tailwind CSS and React."
          />

          <Card
            title="Scalable"
            description="Ready for real production apps."
          />
        </div>
      </section>
    </main>
  );
}