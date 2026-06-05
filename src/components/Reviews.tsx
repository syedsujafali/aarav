import { useEffect, useState } from "react";
import { REVIEWS } from "../data";
import SectionHeader from "./SectionHeader";

export default function Reviews() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIdx((i) => (i + 1) % REVIEWS.length);
  const prev = () => setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-gradient-to-b from-[#120d0a] via-[#1a140f] to-[#120d0a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,163,90,0.08),transparent_55%)]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Reviews"
          title={<>What Our <span className="italic text-gold-gradient">Customers Say</span></>}
          subtitle="Real words from real people in our Vashi neighbourhood."
        />

        <div className="reveal mt-16 relative">
          <div className="relative rounded-3xl bg-[#120d0a]/70 border border-[#c78f45]/15 p-8 md:p-14 backdrop-blur-sm overflow-hidden">
            {/* Big quote */}
            <div className="absolute -top-8 left-6 text-[180px] font-serif text-[#c78f45]/10 leading-none select-none">"</div>

            <div className="relative min-h-[260px]">
              {REVIEWS.map((r, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ${
                    i === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none"
                  }`}
                >
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <span key={k} className="text-[#e2c78a] text-lg">★</span>
                    ))}
                  </div>
                  <p className="font-serif text-2xl md:text-3xl text-[#e8d3b6] leading-relaxed italic">
                    "{r.text}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c78f45] to-[#7a231f] grid place-items-center font-serif text-lg text-[#120d0a]">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-[#e8d3b6] font-medium">{r.name}</div>
                      <div className="text-xs text-[#c78f45] tracking-wider uppercase">{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-10 bg-[#c78f45]" : "w-1.5 bg-[#e8d3b6]/20 hover:bg-[#e8d3b6]/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-12 h-12 rounded-full border border-[#c78f45]/30 text-[#e2c78a] hover:bg-[#c78f45]/10 transition-colors grid place-items-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#c78f45] to-[#8c6a2b] text-[#120d0a] grid place-items-center hover:shadow-[0_10px_30px_-8px_rgba(201,163,90,0.6)] transition-shadow"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
