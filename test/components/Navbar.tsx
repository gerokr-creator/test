import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">
          Digital World
        </h1>

        <div className="flex gap-6">
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}