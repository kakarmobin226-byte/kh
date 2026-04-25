import { Footprints, Globe, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-6 py-10 text-zinc-300 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-xl bg-orange-500 p-2 text-white">
              <Footprints className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-white">STRIDEX</span>
          </div>
          <p className="mt-3 text-sm text-zinc-400">
            Premium performance shoes for running, lifestyle, and trail.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="rounded-lg border border-white/15 p-2 transition hover:bg-white/10">
            <Globe className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-lg border border-white/15 p-2 transition hover:bg-white/10">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-lg border border-white/15 p-2 transition hover:bg-white/10">
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-white/10 pt-5 text-xs text-zinc-500">
        © {new Date().getFullYear()} STRIDEX. All rights reserved.
      </div>
    </footer>
  );
}
