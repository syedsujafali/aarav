import { useState } from "react";
import { CATEGORIES } from "../data";
import SectionHeader from "./SectionHeader";

export default function Categories() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="categories" className="relative py-24 md:py-32 bg-[#120d0a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,163,90,0.06),transparent_60%)]" />
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Collection"
          title={<>Featured <span className="italic text-gold-gradient">Categories.</span></>}
          subtitle="From chilled beers to fine wines, find everything you need for any occasion — all under one roof in Vashi."
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
                <div className="relative aspect-square overflow-hidden bg-[#080808]">
                  <div
                    className={`grid h-full gap-1.5 p-1.5 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03] ${
                      images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                    }`}
                  >
                    {images.map((src, imageIndex) => (
                      <div
                        key={src}
                        className={`relative flex items-center justify-center overflow-hidden bg-[#12100e] ${
                          images.length === 2 && imageIndex === 0 ? "row-span-2" : ""
                        }`}
                      >
                        <img
                          src={src}
                          alt={`${c.name} product ${imageIndex + 1}`}
                          loading="lazy"
                          className="min-h-full min-w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setSelectedImage({ src, alt: `${c.name} product ${imageIndex + 1}` })}
                          className="absolute inset-0 z-20 sm:hidden"
                          aria-label={`Open ${c.name} image`}
                        />
                        <div className="absolute inset-0 pointer-events-none bg-transparent" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-[#120d0a]/90 border-t border-white/10">
                  <span className="inline-flex rounded-full border border-[#c78f45]/25 bg-[#120d0a]/80 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-[#c78f45]">
                    {c.tagline}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl text-[#e8d3b6] tracking-tight">{c.name}</h3>
                  <p className="mt-4 text-sm text-[#e8d3b6]/65 leading-relaxed">{c.desc}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-[#e2c78a]">
                    <span className="font-medium">In Stock</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>

              {/* Hover gold glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,163,90,0.18),transparent_60%)]" />
              </article>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#120d0a]/95 p-4 sm:p-8" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full max-w-3xl rounded-3xl border border-[#c78f45]/20 bg-[#170f0a] p-4 shadow-2xl shadow-black/60" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#c78f45]/30 bg-[#120d0a] text-[#e8d3b6] text-xl shadow-lg shadow-black/40"
              aria-label="Close image"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="h-[80vh] w-full rounded-3xl object-contain" />
            <p className="mt-4 text-sm text-[#e8d3b6]/80">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
