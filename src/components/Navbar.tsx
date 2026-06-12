import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logoo.png";
import { NAV_LINKS, STORE } from "../data";

export default function Navbar() {
  const { pathname } = useLocation();
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
          ? "bg-[#120d0a]/95 backdrop-blur-xl border-b border-[#c78f45]/15 py-2"
          : "bg-[#120d0a]/95 backdrop-blur-md py-2"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="/" className="flex items-center group ">
          <img
            src={logo}
            alt="Aarav Beer & Wine Shop logo"
            className="h-25 w-64 sm:h-20 sm:w-50 object-contain rounded-none shadow-none p-0 bg-transparent opacity-90"
          />
        </a>

        <nav className="hidden xl:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[#c78f45] after:transition-all hover:after:w-full ${
                pathname === l.href ? "text-[#e2c78a] after:w-full" : "text-[#e8d3b6]/80 hover:text-[#e2c78a]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href={`tel:${STORE.phoneRaw}`}
            className="text-sm text-[#e8d3b6]/80 hover:text-[#e2c78a] transition-colors"
          >
            {STORE.phone}
          </a>
          <a
            href="/contact"
            className="relative overflow-hidden shimmer px-5 py-2.5 rounded-full text-sm bg-gradient-to-r from-[#c78f45] to-[#8c6a2b] text-[#120d0a] font-medium hover:shadow-[0_8px_30px_-6px_rgba(201,163,90,0.55)] transition-shadow"
          >
            Visit Store
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden w-11 h-11 grid place-items-center rounded-full border border-[#c78f45]/25 bg-[#120d0a]/90 text-[#e2c78a] shadow-lg shadow-black/30"
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
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-4 bg-[#120d0a]/98 border-t border-[#c78f45]/15 shadow-2xl shadow-black/30">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-[#e8d3b6]/85 border-b border-white/5 hover:text-[#e2c78a]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 mt-5">
            <a href={`tel:${STORE.phoneRaw}`} className="flex-1 text-center py-3 rounded-full border border-[#c78f45]/40 text-[#e2c78a]">Call</a>
            <a href="/contact" onClick={() => setOpen(false)} className="flex-1 text-center py-3 rounded-full bg-gradient-to-r from-[#c78f45] to-[#8c6a2b] text-[#120d0a] font-medium">Visit</a>
          </div>
        </div>
      </div>
    </header>
  );
}
