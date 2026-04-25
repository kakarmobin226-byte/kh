import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1">
      <section className="px-8 py-24 md:py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-8">Get in Touch</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
              Have a project in mind? We'd love to hear from you. Reach out and let's build something extraordinary together.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-950 dark:text-zinc-50 uppercase tracking-widest">Email</div>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium">contact@herons.dev</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-950 dark:text-zinc-50 uppercase tracking-widest">Phone</div>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium">+1 (555) HERONS-01</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-950 dark:text-zinc-50 uppercase tracking-widest">Office</div>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium">Skyline Tower, Suite 400, San Francisco</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-zinc-50">Name</label>
                  <input type="text" id="name" className="w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-zinc-50">Email</label>
                  <input type="email" id="email" className="w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-zinc-50">Message</label>
                <textarea id="message" rows={4} className="w-full p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
