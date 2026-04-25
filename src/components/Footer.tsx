export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} StrideVault. Built for better movement.</p>
        <div className="flex items-center gap-5">
          <a href="#featured" className="transition hover:text-zinc-900">
            Shop
          </a>
          <a href="#benefits" className="transition hover:text-zinc-900">
            Benefits
          </a>
          <a href="#contact" className="transition hover:text-zinc-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
