import Link from 'next/link';
import { Bird } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <Link href="/" className="flex items-center gap-2">
        <Bird className="w-8 h-8 text-blue-600" />
        <span className="text-xl font-bold tracking-tighter text-zinc-950 dark:text-zinc-50 uppercase">HERONS</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
