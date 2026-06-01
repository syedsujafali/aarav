import { NAV_LINKS, STORE } from "../data";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0b] border-t border-[#c9a35a]/15 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,163,90,0.06),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative w-12 h-12 rounded-full grid place-items-center bg-gradient-to-br from-[#c9a35a] via-[#8c6a2b] to-[#5a1a23]">
                <span className="absolute inset-[2px] rounded-full bg-[#0a0a0b] grid place-items-center">
                  <span className="font-serif text-[#e6c98a] text-xl">A</span>
                </span>
              </span>
              <div>
                <div className="font-serif text-xl text-[#f5efe4]">Aarav Beer & Wine</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a35a]">Vashi · Navi Mumbai</div>
              </div>
            </div>
            <p className="mt-5 text-[#f5efe4]/60 leading-relaxed max-w-md">
              Your trusted neighbourhood beer, wine and premium spirits shop in Sector 19C, Vashi.
              Wide selection, genuine products, friendly service — since years.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              {[
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.148 0-3.522.012-4.764.069-.978.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.299.879-.344 1.857-.057 1.242-.069 1.616-.069 4.764s.012 3.522.069 4.764c.045.978.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.879.299 1.857.344 1.242.057 1.616.069 4.764.069s3.522-.012 4.764-.069c.978-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.299-.879.344-1.857.057-1.242.069-1.616.069-4.764s-.012-3.522-.069-4.764c-.045-.978-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.879-.299-1.857-.344C15.522 4.013 15.148 4.001 12 4.001zm0 3.131a4.868 4.868 0 110 9.736 4.868 4.868 0 010-9.736zm0 8.027a3.16 3.16 0 100-6.319 3.16 3.16 0 000 6.319zm6.188-8.187a1.137 1.137 0 11-2.273 0 1.137 1.137 0 012.273 0z" },
                { label: "Facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                { label: "WhatsApp", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full grid place-items-center border border-[#c9a35a]/25 text-[#e6c98a] hover:bg-[#c9a35a] hover:text-[#0a0a0b] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a35a] mb-5">Navigate</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#f5efe4]/70 hover:text-[#e6c98a] transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a35a] mb-5">Contact</div>
            <div className="space-y-4 text-sm">
              <p className="text-[#f5efe4]/70 leading-relaxed">
                {STORE.address1},<br />
                {STORE.address2}
              </p>
              <div>
                <div className="text-xs text-[#f5efe4]/55 mb-2">Phone</div>
                <a href="tel:02265131498" className="block text-[#f5efe4] hover:text-[#e6c98a] transition-colors">
                  022-65131498
                </a>
              </div>
              <div>
                <div className="text-xs text-[#f5efe4]/55 mb-2">Mobile</div>
                <a href="tel:9930709979" className="block text-[#f5efe4] hover:text-[#e6c98a] transition-colors">
                  +91 9930709979
                </a>
                <a href="tel:9029999979" className="block text-[#f5efe4] hover:text-[#e6c98a] transition-colors">
                  +91 9029999979
                </a>
              </div>
              <a href={`mailto:${STORE.email}`} className="block text-[#f5efe4]/70 hover:text-[#e6c98a] transition-colors">
                {STORE.email}
              </a>
            </div>


          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#f5efe4]/45 text-center md:text-left">
            © {new Date().getFullYear()} Aarav Beer & Wine Shop. All rights reserved.
            Crafted with care in Navi Mumbai.
          </p>
          <p className="text-[10px] text-[#f5efe4]/40 tracking-wider uppercase text-center">
            Drink Responsibly · 21+ Only · Licensed Retailer
          </p>
        </div>
      </div>
    </footer>
  );
}
