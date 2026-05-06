import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Truck,
} from "lucide-react";
import Image from "next/image";

const featuredShoes = [
  {
    name: "AeroSprint Pro",
    type: "Road Running",
    price: "$149",
    description: "Feather-light race trainer with responsive foam and carbon support.",
    color: "from-sky-200 to-blue-500",
    image: "/images/aerosprint-pro.png",
  },
  {
    name: "Urban Drift X",
    type: "Lifestyle",
    price: "$129",
    description: "All-day comfort sneaker designed for city walks and casual style.",
    color: "from-zinc-200 to-zinc-700",
    image: "/images/urban-drift-x.png",
  },
  {
    name: "PeakTrail Grip",
    type: "Trail Running",
    price: "$159",
    description: "Rugged traction and weather-ready upper built for mixed terrain.",
    color: "from-emerald-200 to-emerald-600",
    image: "/images/peaktrail-grip.png",
  },
];

const benefits = [
  {
    title: "Performance First",
    text: "Engineered midsoles and precision fit deliver reliable energy return every step.",
    icon: Sparkles,
  },
  {
    title: "60-Day Comfort Trial",
    text: "Wear them in real life. If they are not your perfect pair, send them back.",
    icon: TimerReset,
  },
  {
    title: "Secure Checkout",
    text: "Protected payment options and transparent shipping with live order tracking.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    quote:
      "These became my daily trainers in a week. Lightweight, stable, and surprisingly durable.",
    name: "Maya R.",
    role: "Half-Marathon Runner",
  },
  {
    quote:
      "I bought the Urban Drift X for work and now own two colors. Comfort is unreal.",
    name: "Jordan L.",
    role: "Product Designer",
  },
  {
    quote:
      "PeakTrail Grip handled wet trails better than shoes I paid much more for.",
    name: "Eli T.",
    role: "Weekend Trail Hiker",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full bg-zinc-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700">
            New Season Collection
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Move Better in Shoes Built for Every Day Momentum.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            StrideVault blends athletic performance with modern street style. Discover premium
            shoes for running, commuting, and everything in between.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#featured"
              className="inline-flex items-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Shop Featured
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Get Size Help
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-600">
            <p className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-zinc-900" /> Free shipping over $75
            </p>
            <p className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-zinc-900" /> Easy 60-day returns
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 p-8 shadow-xl shadow-zinc-200/60">
            <div className="mb-5 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-zinc-500">
              <span>Limited Drop</span>
              <span>SS26</span>
            </div>
            <div className="relative flex min-h-[260px] items-center justify-center rounded-2xl bg-gradient-to-tr from-zinc-950 to-zinc-700 p-8 overflow-hidden">
              <Image src="/images/nimbus-flow-one.png" alt="Nimbus Flow One" fill className="object-cover" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">Featured Pair</p>
                <h3 className="text-xl font-semibold text-zinc-950">Nimbus Flow One</h3>
              </div>
              <p className="text-lg font-semibold text-zinc-950">$139</p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="border-y border-zinc-200 bg-zinc-50/60 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Featured Shoes</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">Top picks for comfort and speed</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredShoes.map((shoe) => (
              <article
                key={shoe.name}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`relative mb-5 flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br ${shoe.color} overflow-hidden`}>
                  <Image src={shoe.image} alt={shoe.name} fill className="object-cover" />
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">{shoe.type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-zinc-950">{shoe.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{shoe.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-zinc-950">{shoe.price}</span>
                  <button className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Why StrideVault</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
            Built with premium materials and practical guarantees
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <benefit.icon className="h-8 w-8 text-zinc-900" />
              <h3 className="mt-5 text-xl font-semibold text-zinc-950">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Loved by runners and everyday movers</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <blockquote className="text-sm leading-relaxed text-zinc-200">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-5">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-zinc-300">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
              Need fit advice or bulk orders for your team?
            </h2>
            <p className="mt-4 text-zinc-600">
              Share your shoe size, preferred use, and style goals. Our team will recommend your best
              match within one business day.
            </p>
          </div>

          <form className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:w-[460px]" aria-label="Contact form">
            <input
              type="text"
              placeholder="Full name"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-zinc-950/20 transition focus:ring"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-zinc-950/20 transition focus:ring"
            />
            <textarea
              placeholder="Tell us what you need"
              className="sm:col-span-2 min-h-28 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-zinc-950/20 transition focus:ring"
            />
            <button
              type="button"
              className="sm:col-span-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Send request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
