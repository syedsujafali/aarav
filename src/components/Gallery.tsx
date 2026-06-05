import { GALLERY } from "../data";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#120d0a]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Store Gallery"
          title={<>A Peek <span className="italic text-gold-gradient">Inside the Shop</span></>}
          subtitle="A glimpse of our shelves, refrigerators and warmly-lit aisles in Vashi."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl border border-white/5 hover:border-[#c78f45]/40 transition-all ${g.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a]/90 via-[#120d0a]/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <figcaption className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#c78f45]">Aarav · Vashi</div>
                <div className="text-sm text-[#e8d3b6] mt-1">{g.alt}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
