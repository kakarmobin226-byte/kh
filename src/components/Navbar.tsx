import { Footprints } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#featured", label: "Featured" },
  { href: "#benefits", label: "Benefits" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#shop", label: "Shop" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className="rounded-xl bg-orange-500 p-2 text-white">
            <Footprints className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-zinc-950">
            STRIDEX
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#shop"
          className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-black"
        >
          Buy Now
        </a>
      </nav>
    </header>
  );
}
