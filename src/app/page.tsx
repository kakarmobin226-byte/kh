import { ArrowRight, Bird, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 flex flex-col items-center text-center bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
          <Zap className="w-3 h-3" />
          <span>Next Generation</span>
        </div>
        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-950 dark:text-zinc-50 mb-8">
          Precision Engineering for the <span className="text-blue-600">Modern Web</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10">
          HERONS provides cutting-edge solutions for businesses that demand elegance, performance, and scalability. Elevate your digital presence today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-white font-medium transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex h-12 items-center justify-center px-8 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-zinc-50 font-medium transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 active:scale-95">
            View Solutions
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">Why Choose HERONS?</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Our core values drive every pixel and line of code we create.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Bird className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">Elegance</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Clean, intuitive designs that prioritize user experience without compromising on aesthetic beauty.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-950 dark:text-zinc-50">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">Precision</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Every component is meticulously crafted to ensure maximum performance and bulletproof reliability.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-950 dark:text-zinc-50">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">Global Reach</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Scale your vision globally with infrastructure designed to handle the demands of the modern internet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
