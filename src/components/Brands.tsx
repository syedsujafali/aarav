import { BRANDS } from "../data";
import SectionHeader from "./SectionHeader";

export default function Brands() {
  return (
    <section id="brands" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a0b] via-[#111114] to-[#0a0a0b] overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#5a1a23]/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Popular Brands"
          title={<>Brands You <span className="italic text-gold-gradient">Know & Love</span></>}
          subtitle="We stock the most loved brands across beer, wine and spirits — fresh, authentic and ready when you are."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {BRANDS.map((b, i) => (
            <div
              key={b.name}
              className="reveal group relative p-6 rounded-xl bg-[#111114]/80 border border-white/5 hover:border-[#c9a35a]/50 transition-all duration-500 backdrop-blur-sm hover:-translate-y-1"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a35a]/70 mb-2">{b.type}</div>
              <div className="font-serif text-xl md:text-2xl text-[#f5efe4] group-hover:text-gold-gradient transition-colors">
                {b.name}
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} className="w-1 h-1 rounded-full bg-[#c9a35a]/40 group-hover:bg-[#c9a35a] transition-colors" style={{ transitionDelay: `${k * 50}ms` }} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl bg-gradient-to-br from-[#c9a35a]/8 to-transparent" />
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-[#f5efe4]/50">
          …and many more. Call us to check availability before you visit.
        </p>
      </div>
    </section>
  );
}
