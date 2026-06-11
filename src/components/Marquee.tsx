const ITEMS = [
  "Chilled Beer", "Normal Beer", "Flavoured Beer", "Wine",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-[#c78f45]/15 bg-[#1a140f] py-6 overflow-hidden">
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-serif italic text-3xl md:text-4xl text-[#e8d3b6]/80">{it}</span>
            <span className="text-[#c78f45] text-2xl">✦</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a140f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1a140f] to-transparent" />
    </div>
  );
}
