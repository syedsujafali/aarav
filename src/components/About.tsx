export default function About() {
  const highlights = [
    "Trusted neighbourhood store since years",
    "Wide product selection — beer to premium spirits",
    "Friendly, knowledgeable staff",
    "Convenient Sector 19C, Vashi location",
    "Fresh, well-stocked inventory updated daily",
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0a0a0b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image stack */}
          <div className="reveal relative">
            <div className="relative grid grid-cols-5 grid-rows-6 gap-4 h-[560px]">
              <div className="col-span-3 row-span-4 relative rounded-2xl overflow-hidden border border-[#c9a35a]/20 shadow-2xl shadow-black/50">
                <img
                  src="https://images.pexels.com/photos/7101917/pexels-photo-7101917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
                  alt="Rows of wine bottles on store shelves"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-3 col-start-4 relative rounded-2xl overflow-hidden border border-[#c9a35a]/20 shadow-2xl shadow-black/50">
                <img
                  src="https://images.pexels.com/photos/18062098/pexels-photo-18062098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500"
                  alt="Wine shelves in a shop interior"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-3 col-start-4 row-start-4 relative rounded-2xl overflow-hidden border border-[#c9a35a]/20 shadow-2xl shadow-black/50">
                <img
                  src="https://images.pexels.com/photos/16096977/pexels-photo-16096977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500"
                  alt="Whisky bottles on display in a shop"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-3 row-span-2 row-start-5 relative rounded-2xl overflow-hidden border border-[#c9a35a]/20 shadow-2xl shadow-black/50">
                <img
                  src="https://images.pexels.com/photos/4622280/pexels-photo-4622280.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700"
                  alt="Assorted wine bottles arranged on store shelves"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#c9a35a] to-[#5a1a23] grid place-items-center shadow-[0_20px_60px_-10px_rgba(201,163,90,0.5)] float-soft">
                <div className="w-[120px] h-[120px] rounded-full bg-[#0a0a0b] grid place-items-center text-center">
                  <div>
                    <div className="font-serif text-3xl text-gold-gradient leading-none">15+</div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-[#f5efe4]/60 mt-1">Years of<br/>Trust</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#c9a35a]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#c9a35a]">About the Shop</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#f5efe4]">
              A neighbourhood shop with a
              <span className="italic text-gold-gradient"> personal touch.</span>
            </h2>
            <p className="mt-6 text-[#f5efe4]/70 leading-relaxed text-lg font-light">
              Aarav Beer & Wine Shop has been a trusted name in Vashi, Navi Mumbai for years.
              We're more than a liquor store — we're the friendly local stop where you find exactly
              what you came for, every single time.
            </p>
            <p className="mt-4 text-[#f5efe4]/60 leading-relaxed">
              From the daily after-work beer to the bottle for a special celebration, our shelves
              are stocked with India's most loved brands. Walk in, ask anything, and our team
              will happily help you choose.
            </p>

            <ul className="mt-8 space-y-3.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-4 group">
                  <span className="mt-1 w-6 h-6 rounded-full grid place-items-center bg-[#c9a35a]/15 border border-[#c9a35a]/30 text-[#e6c98a] text-xs shrink-0 group-hover:bg-[#c9a35a] group-hover:text-[#0a0a0b] transition-colors">✓</span>
                  <span className="text-[#f5efe4]/80">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c9a35a] to-[#8c6a2b] text-[#0a0a0b] font-medium hover:shadow-[0_15px_45px_-10px_rgba(201,163,90,0.6)] transition-shadow"
              >
                Visit the Store
              </a>
              <a
                href="#gallery"
                className="px-7 py-3.5 rounded-full border border-[#c9a35a]/40 text-[#f5efe4] hover:bg-[#c9a35a]/10 transition-all"
              >
                See the Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
