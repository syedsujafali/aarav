const ITEMS = [
  "Beer", "Wine", "Whisky", "Rum", "Vodka", "Gin", "Brandy", "Champagne", "Tequila", "Cocktails",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-[#c9a35a]/15 bg-[#111114] py-6 overflow-hidden">
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-serif italic text-3xl md:text-4xl text-[#f5efe4]/80">{it}</span>
            <span className="text-[#c9a35a] text-2xl">✦</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111114] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111114] to-transparent" />
    </div>
  );
}
