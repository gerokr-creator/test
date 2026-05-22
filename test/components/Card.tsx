type CardProps = {
  title: string;
  description: string;
};

export default function Card({
  title,
  description,
}: CardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-white/70">
        {description}
      </p>
    </div>
  );
}