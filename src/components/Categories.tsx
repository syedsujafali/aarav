import { CATEGORIES } from "../data";
import SectionHeader from "./SectionHeader";

export default function Categories() {
  return (
    <section id="categories" className="relative py-24 md:py-32 bg-[#0a0a0b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,163,90,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Our Collection"
          title={<>Featured <span className="italic text-gold-gradient">Categories</span></>}
          subtitle="From chilled beers to aged whiskies, find everything you need for any occasion — all under one roof in Vashi."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((c, i) => (
            <article
              key={c.name}
              className="reveal group relative rounded-2xl overflow-hidden bg-[#111114] border border-white/5 hover:border-[#c9a35a]/40 transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full grid place-items-center bg-[#0a0a0b]/70 backdrop-blur-md border border-[#c9a35a]/30 text-xl">
                  {c.icon}
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a35a] mb-1">{c.tagline}</div>
                  <h3 className="font-serif text-3xl text-[#f5efe4]">{c.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#f5efe4]/65 leading-relaxed">{c.desc}</p>
                <div className="mt-5 flex items-center justify-between pt-5 border-t border-white/5">
                  <span className="text-xs text-[#f5efe4]/45">In Stock</span>
                  <span className="flex items-center gap-2 text-xs text-[#e6c98a] group-hover:gap-3 transition-all">
                    Explore
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Hover gold glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,163,90,0.18),transparent_60%)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
