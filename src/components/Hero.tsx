import heroImg from "../assets/hero6.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Aarav Beer & Wine Shop hero image"
          className="w-full h-full object-cover slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120d0a]/35 via-[#120d0a]/18 to-[#120d0a]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(201,163,90,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(90,26,35,0.10),transparent_60%)]" />
        <div className="absolute inset-0 grain opacity-40" />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[#c78f45]/10 blur-3xl float-soft" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#7a231f]/30 blur-3xl float-soft" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-48 sm:pt-52 md:pt-56 lg:pt-64 pb-28 sm:pb-32 md:pb-36">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 reveal">

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] leading-[1.02] tracking-tight text-white sm:text-[#f0c46a] pt-12 sm:pt-14 md:pt-16 lg:pt-18 max-w-5xl overflow-visible">
              Your Trusted Beer & Wine
                 Shop in <span className="relative inline-block">
                Vashi
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c78f45] to-transparent" />
              </span>
            </h1>

            <p className="mt-10 sm:mt-12 md:mt-14 text-lg md:text-xl text-white/95 sm:text-[#e7bf67]/95 max-w-2xl leading-relaxed font-light">
              Explore a thoughtfully stocked range of beer, wine, whisky, rum, vodka and premium spirits — handpicked for your neighbourhood, served with a smile.
            </p>

            <div className="mt-14 sm:mt-16 md:mt-18 flex flex-wrap gap-4">
              <a
                href="#categories"
                className="group relative overflow-hidden shimmer px-8 py-4 rounded-full bg-gradient-to-r from-[#c78f45] via-[#e2c78a] to-[#c78f45] text-[#120d0a] font-medium tracking-wide hover:shadow-[0_15px_45px_-10px_rgba(201,163,90,0.6)] transition-all"
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
                className="group px-8 py-4 rounded-full border border-[#c78f45]/40 text-[#e8d3b6] hover:bg-[#c78f45]/10 hover:border-[#c78f45] transition-all backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c78f45] group-hover:scale-150 transition-transform" />
                </span>
              </a>
            </div>

            {/* Trust strip */}
            
          </div>
        </div>
      </div>

      
    </section>
  );
}
