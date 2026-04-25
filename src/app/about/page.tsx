export default function About() {
  return (
    <div className="flex flex-col flex-1">
      <section className="px-8 py-24 md:py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-8">Our Mission</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
            At HERONS, we believe that the web should be a place of beauty, efficiency, and purpose. Founded in 2024, our team has been dedicated to pushing the boundaries of what's possible in digital engineering.
          </p>
          <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden flex items-center justify-center text-zinc-400">
            [Mission Video Placeholder]
          </div>
        </div>
      </section>

      <section className="px-8 py-24 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-6">Our Vision</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              We envision a world where technology is invisible yet indispensable. By focusing on precision and elegance, we help our partners build experiences that resonate with their audiences.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our approach is rooted in the philosophy of the Heron — patient, focused, and precise in every action.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center font-bold text-blue-600">Innovation</div>
            <div className="h-40 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center font-bold text-blue-600 mt-8">Quality</div>
            <div className="h-40 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center font-bold text-blue-600">Integrity</div>
            <div className="h-40 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center font-bold text-blue-600 mt-8">Focus</div>
          </div>
        </div>
      </section>
    </div>
  );
}
