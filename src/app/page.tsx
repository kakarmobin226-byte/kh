import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const featuredShoes = [
  {
    name: "AeroStride Pro",
    price: "$149",
    badge: "Best Seller",
    description: "Ultra-light race-day trainer with responsive energy return.",
    accent: "from-orange-500 to-rose-500",
  },
  {
    name: "UrbanFlex Street",
    price: "$119",
    badge: "New",
    description: "Everyday comfort sneaker with cloud-soft cushioning.",
    accent: "from-sky-500 to-indigo-500",
  },
  {
    name: "TrailForge X",
    price: "$169",
    badge: "All-Terrain",
    description: "Rugged grip and weather-ready upper for trail adventures.",
    accent: "from-emerald-500 to-teal-500",
  },
];

const benefits = [
  {
    title: "Free 2-Day Shipping",
    text: "Fast delivery on every order over $75 across the U.S.",
    icon: Truck,
  },
  {
    title: "30-Day Comfort Trial",
    text: "Run, walk, and test your pair risk-free for 30 days.",
    icon: CheckCircle2,
  },
  {
    title: "Secure Checkout",
    text: "Encrypted payments and trusted order protection included.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    quote:
      "I shaved 47 seconds off my 10K in the AeroStride Pro. The bounce is unreal.",
    name: "Maya R.",
    title: "Marathon Runner",
  },
  {
    quote:
      "UrbanFlex became my daily go-to. Stylish enough for work, comfy enough for all day.",
    name: "Jordan K.",
    title: "Product Designer",
  },
  {
    quote:
      "TrailForge X handled wet rocks and muddy climbs with confidence. Great grip and support.",
    name: "Carlos T.",
    title: "Weekend Hiker",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.24),transparent_45%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
              <Sparkles className="h-3.5 w-3.5" />
              Spring 2026 Collection
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Run lighter.
              <br />
              Move faster.
              <br />
              <span className="text-orange-400">Look sharper.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Discover premium performance shoes engineered for speed, comfort,
              and everyday style. Built for athletes, commuters, and explorers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-7 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Shop Featured Shoes
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#testimonials"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Reviews
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 p-8 shadow-2xl shadow-orange-900/30">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-100">
                Signature Pair
              </p>
              <h2 className="mt-3 text-2xl font-bold">AeroStride Pro 2</h2>
              <p className="mt-2 text-sm text-orange-50/90">
                Carbon-infused plate, adaptive foam midsole, and breathable knit
                upper for peak performance.
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-6">
                <span className="text-2xl font-bold">$159</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Limited Drop
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-200">
              <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              Rated 4.9/5 by 2,100+ customers
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="bg-white px-6 py-18 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                Featured Shoes
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Top Picks This Season
              </h2>
            </div>
            <p className="max-w-xl text-sm text-zinc-600 sm:text-base">
              Built with advanced cushioning, durable traction, and sleek styling
              for your next run, walk, or weekend trip.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredShoes.map((shoe) => (
              <article
                key={shoe.name}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`h-44 rounded-2xl bg-gradient-to-br ${shoe.accent} p-5 text-white`}
                >
                  <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {shoe.badge}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight">
                    {shoe.name}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-zinc-600">
                  {shoe.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-zinc-950">{shoe.price}</span>
                  <button className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-zinc-100 px-6 py-18 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              More Than Just Great Shoes
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <div className="inline-flex rounded-xl bg-orange-100 p-2.5 text-orange-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="bg-zinc-950 px-6 py-18 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Runners and Everyday Movers
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm leading-relaxed text-zinc-200">“{item.quote}”</p>
                <footer className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs uppercase tracking-wider text-zinc-400">
                    {item.title}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="bg-orange-500 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-100">
              Ready to Upgrade Your Stride?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Get 15% off your first order today.
            </h2>
          </div>
          <a
            href="#home"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-semibold text-white transition hover:bg-black"
          >
            Claim Discount
          </a>
        </div>
      </section>
    </div>
  );
}
