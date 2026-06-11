import SectionHeader from "./SectionHeader";
import { FEATURED_PRODUCTS } from "../data";

export default function FeaturedProducts() {
  return (
    <section id="featured" className="relative py-24 md:py-32 bg-[#1a140f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,143,69,0.08),transparent_55%)]" />
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Products"
          title={<>Premium Beer & Wine <span className="italic text-gold-gradient">Picks.</span></>}
          subtitle="Hand-selected beer and wine products with a modern presentation style and clean premium card layout."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((product, index) => (
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
                <a
                  href={product.img}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-20 sm:hidden"
                  aria-label={`Open ${product.name} image`}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#120d0a]/90 via-[#120d0a]/15 to-transparent" />
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
      </div>
    </section>
  );
}
