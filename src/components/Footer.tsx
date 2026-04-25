import { Bird } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-8 py-12 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Bird className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-bold tracking-tighter text-zinc-950 dark:text-zinc-50 uppercase">HERONS</span>
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} HERONS. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <a href="#" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Twitter</a>
          <a href="#" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">GitHub</a>
          <a href="#" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
