import { CATEGORIES } from "../data";
import SectionHeader from "./SectionHeader";

export default function Categories() {
  return (
    <section id="categories" className="relative py-24 md:py-32 bg-[#120d0a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,163,90,0.06),transparent_60%)]" />
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Collection"
          title={<>Featured <span className="italic text-gold-gradient">Categories</span></>}
          subtitle="From chilled beers to aged whiskies, find everything you need for any occasion — all under one roof in Vashi."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((c, i) => {
            const images = c.images ?? [c.img];

            return (
              <article
                key={c.name}
                className="reveal group relative rounded-2xl overflow-hidden bg-[#1a140f] border border-white/5 hover:border-[#c78f45]/40 transition-all duration-500"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="relative h-72 overflow-hidden bg-[#080808]">
                  <div
                    className={`grid h-full gap-1.5 p-1.5 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03] ${
                      images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                    }`}
                  >
                    {images.map((src, imageIndex) => (
                      <div
                        key={src}
                        className={`relative overflow-hidden bg-[#12100e] ${
                          images.length === 2 && imageIndex === 0 ? "row-span-2" : ""
                        }`}
                      >
                        <img
                          src={src}
                          alt={`${c.name} product ${imageIndex + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent,rgba(0,0,0,0.28)_72%)]" />
                      </div>
                    ))}
                  </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a] via-[#120d0a]/40 to-transparent" />
                
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#c78f45] mb-1">{c.tagline}</div>
                  <h3 className="font-serif text-3xl text-[#e8d3b6]">{c.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#e8d3b6]/65 leading-relaxed">{c.desc}</p>
                <div className="mt-5 flex items-center justify-between pt-5 border-t border-white/5">
                  <span className="text-xs text-[#e8d3b6]/45">In Stock</span>
                  <span className="flex items-center gap-2 text-xs text-[#e2c78a] group-hover:gap-3 transition-all">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
