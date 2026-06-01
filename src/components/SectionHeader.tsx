interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }: Props) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`reveal max-w-3xl ${a}`}>
      <div className={`inline-flex items-center gap-3 ${align === "center" ? "" : ""}`}>
        <span className="w-8 h-px bg-[#c9a35a]" />
        <span className="text-[11px] tracking-[0.4em] uppercase text-[#c9a35a]">{eyebrow}</span>
        <span className="w-8 h-px bg-[#c9a35a]" />
      </div>
      <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#f5efe4]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[#f5efe4]/65 text-base md:text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
