import { WHY_US } from "../data";
import SectionHeader from "./SectionHeader";

export default function WhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-[#1a140f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(90,26,35,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,163,90,0.08),transparent_55%)]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>The Aarav <span className="italic text-gold-gradient">Difference</span></>}
          subtitle="Six simple reasons our regulars keep coming back — and why first-time visitors become regulars."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((w, i) => (
            <div
              key={w.title}
              className="reveal group relative p-8 rounded-2xl bg-[#120d0a]/70 border border-white/5 hover:border-[#c78f45]/40 transition-all duration-500 overflow-hidden"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c78f45] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-16 h-16 mb-6 rounded-2xl grid place-items-center bg-gradient-to-br from-[#c78f45]/20 to-[#7a231f]/30 border border-[#c78f45]/30 text-3xl text-[#e2c78a] group-hover:scale-110 transition-transform duration-500">
                {w.icon}
              </div>

              <h3 className="font-serif text-2xl text-[#e8d3b6] mb-3">{w.title}</h3>
              <p className="text-[#e8d3b6]/65 leading-relaxed">{w.desc}</p>

              <div className="absolute -bottom-1 right-5 text-[100px] font-serif text-[#c78f45]/5 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
