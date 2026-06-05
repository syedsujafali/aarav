import { BRANDS } from "../data";
import SectionHeader from "./SectionHeader";

export default function Brands() {
  return (
    <section id="brands" className="relative py-24 md:py-32 bg-gradient-to-b from-[#120d0a] via-[#1a140f] to-[#120d0a] overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7a231f]/20 blur-[120px]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Popular Brands"
          title={<>Brands You <span className="italic text-gold-gradient">Know & Love</span></>}
          subtitle="We stock the most loved brands across beer, wine and spirits — fresh, authentic and ready when you are."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {BRANDS.map((b, i) => (
            <div
              key={b.name}
              className="reveal group relative p-6 rounded-xl bg-[#1a140f]/80 border border-white/5 hover:border-[#c78f45]/50 transition-all duration-500 backdrop-blur-sm hover:-translate-y-1"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#c78f45]/70 mb-2">{b.type}</div>
              <div className="font-serif text-xl md:text-2xl text-[#e8d3b6] group-hover:text-gold-gradient transition-colors">
                {b.name}
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} className="w-1 h-1 rounded-full bg-[#c78f45]/40 group-hover:bg-[#c78f45] transition-colors" style={{ transitionDelay: `${k * 50}ms` }} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl bg-gradient-to-br from-[#c78f45]/8 to-transparent" />
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-[#e8d3b6]/50">
          …and many more. Call us to check availability before you visit.
        </p>
      </div>
    </section>
  );
}
