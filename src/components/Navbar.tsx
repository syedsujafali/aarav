import { useEffect, useState } from "react";
import logo from "../assets/logoo.png";
import { NAV_LINKS, STORE } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0b]/85 backdrop-blur-xl border-b border-[#c9a35a]/15 py-2"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start gap-30 lg: flex justify-between h-20">
        <a href="#home" className="flex items-center group ">
          <img
            src={logo}
            alt="Aarav Beer & Wine Shop logo"
            className="h-20 w-64 sm:h-28 sm:w-50 object-contain rounded-none shadow-none p-0 bg-transparent"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-[#f5efe4]/80 hover:text-[#e6c98a] transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[#c9a35a] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${STORE.phoneRaw}`}
            className="text-sm text-[#f5efe4]/80 hover:text-[#e6c98a] transition-colors"
          >
            {STORE.phone}
          </a>
          <a
            href="#contact"
            className="relative overflow-hidden shimmer px-5 py-2.5 rounded-full text-sm bg-gradient-to-r from-[#c9a35a] to-[#8c6a2b] text-[#0a0a0b] font-medium hover:shadow-[0_8px_30px_-6px_rgba(201,163,90,0.55)] transition-shadow"
          >
            Visit Store
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-11 h-11 grid place-items-center rounded-full text-[#e6c98a]"
        >
          <div className="relative w-5 h-3.5">
            <span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-px w-full bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-4 bg-[#0a0a0b]/95 backdrop-blur-xl border-t border-[#c9a35a]/15">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-[#f5efe4]/85 border-b border-white/5 hover:text-[#e6c98a]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 mt-5">
            <a href={`tel:${STORE.phoneRaw}`} className="flex-1 text-center py-3 rounded-full border border-[#c9a35a]/40 text-[#e6c98a]">Call</a>
            <a href="#contact" onClick={() => setOpen(false)} className="flex-1 text-center py-3 rounded-full bg-gradient-to-r from-[#c9a35a] to-[#8c6a2b] text-[#0a0a0b] font-medium">Visit</a>
          </div>
        </div>
      </div>
    </header>
  );
}
