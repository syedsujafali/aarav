import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { FEATURED_PRODUCTS } from "../data";

type FeaturedProductsProps = {
  showToggle?: boolean;
};

export default function FeaturedProducts({ showToggle = true }: FeaturedProductsProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [showAll, setShowAll] = useState(false);
  const beerProducts = FEATURED_PRODUCTS.filter((product) => product.category.toLowerCase().includes("beer"));
  const wineProducts = FEATURED_PRODUCTS.filter((product) => !product.category.toLowerCase().includes("beer"));
  const firstRowProducts = [...beerProducts.slice(0, 2), ...wineProducts.slice(0, 2)];
  const remainingProducts = FEATURED_PRODUCTS.filter(
    (product) => !firstRowProducts.some((rowProduct) => rowProduct.name === product.name)
  );
  const effectiveShowAll = showToggle ? showAll : true;
  const visibleProducts = effectiveShowAll ? [...firstRowProducts, ...remainingProducts] : firstRowProducts;

  return (
    <section id="featured" className="relative py-24 md:py-32 bg-[#1a140f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,143,69,0.08),transparent_55%)]" />
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Products"
          title={<>Premium Beer & Wine <span className="italic text-gold-gradient">Picks.</span></>}
          subtitle="Hand-selected beer and wine products with a modern presentation style and clean premium card layout."
        />

        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <article
              key={product.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#120d0a]/80 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c78f45]/40"
              style={{ animationDelay: `${index * 35}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-[#0f0906]">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: product.img, alt: product.name })}
                  className="absolute inset-0 z-20 sm:hidden"
                  aria-label={`Open ${product.name} image`}
                />
                <div className="absolute inset-0 pointer-events-none bg-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex rounded-full border border-[#c78f45]/25 bg-[#120d0a]/80 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-[#c78f45]">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-[#e8d3b6] tracking-tight">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#e8d3b6]/65">
                  A premium selection from our beer and wine collection, styled for customers who want the best.
                </p>
                <div className="mt-6 flex items-center justify-between text-sm text-[#e2c78a]">
                  <span className="font-medium">View details</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showToggle && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center rounded-full border border-[#c78f45]/40 bg-[#120d0a]/90 px-6 py-3 text-sm font-semibold text-[#e8d3b6] transition hover:border-[#c78f45] hover:bg-[#1b140d]"
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
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
