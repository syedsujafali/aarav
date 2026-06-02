export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/14393728/pexels-photo-14393728.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000"
          alt="Interior of Aarav Beer & Wine Shop"
          className="w-full h-full object-cover slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/85 via-[#0a0a0b]/65 to-[#0a0a0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(201,163,90,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(90,26,35,0.35),transparent_60%)]" />
        <div className="absolute inset-0 grain opacity-40" />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[#c9a35a]/10 blur-3xl float-soft" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#5a1a23]/30 blur-3xl float-soft" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 reveal">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#c9a35a]/30 bg-white/[0.03] backdrop-blur-sm mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a35a] animate-pulse" />
              <span className="text-[11px] tracking-[0.32em] uppercase text-[#e6c98a]">Est. Vashi, Navi Mumbai</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-[#f5efe4]">
              Your Trusted{" "}
              <span className="text-gold-gradient italic">Beer & Wine</span>{" "}
              Shop in <span className="relative inline-block">
                Vashi
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a35a] to-transparent" />
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-[#f5efe4]/75 max-w-2xl leading-relaxed font-light">
              Explore a thoughtfully stocked range of beer, wine, whisky, rum, vodka and premium spirits — handpicked for your neighbourhood, served with a smile.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#categories"
                className="group relative overflow-hidden shimmer px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a35a] via-[#e6c98a] to-[#c9a35a] text-[#0a0a0b] font-medium tracking-wide hover:shadow-[0_15px_45px_-10px_rgba(201,163,90,0.6)] transition-all"
              >
                <span className="relative flex items-center gap-2">
                  View Collection
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 rounded-full border border-[#c9a35a]/40 text-[#f5efe4] hover:bg-[#c9a35a]/10 hover:border-[#c9a35a] transition-all backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a35a] group-hover:scale-150 transition-transform" />
                </span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: "500+", l: "Products in Stock" },
                { n: "15+", l: "Years Trusted" },
                { n: "4.8★", l: "Customer Rating" },
              ].map((s) => (
                <div key={s.l} className="border-l border-[#c9a35a]/30 pl-4">
                  <div className="font-serif text-3xl text-gold-gradient">{s.n}</div>
                  <div className="text-xs text-[#f5efe4]/55 mt-1 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#f5efe4]/40">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a35a] to-transparent" />
      </div>
    </section>
  );
}
