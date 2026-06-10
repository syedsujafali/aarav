import { NAV_LINKS, STORE } from "../data";
import logo from "../assets/logoo.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#120d0a] border-t border-[#c78f45]/15 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,163,90,0.06),transparent_55%)]" />
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Aarav Beer & Wine Shop logo"
                className="h-14 w-32 object-contain rounded-none bg-transparent"
              />
              
            </div>
            <p className="mt-5 text-[#e8d3b6]/60 leading-relaxed max-w-md">
              Your trusted neighbourhood beer, wine and premium spirits shop in Sector 19C, Vashi.
              Wide selection, genuine products, friendly service — since years.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              {[
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.148 0-3.522.012-4.764.069-.978.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.299.879-.344 1.857-.057 1.242-.069 1.616-.069 4.764s.012 3.522.069 4.764c.045.978.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.879.299 1.857.344 1.242.057 1.616.069 4.764.069s3.522-.012 4.764-.069c.978-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.299-.879.344-1.857.057-1.242.069-1.616.069-4.764s-.012-3.522-.069-4.764c-.045-.978-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.879-.299-1.857-.344C15.522 4.013 15.148 4.001 12 4.001zm0 3.131a4.868 4.868 0 110 9.736 4.868 4.868 0 010-9.736zm0 8.027a3.16 3.16 0 100-6.319 3.16 3.16 0 000 6.319zm6.188-8.187a1.137 1.137 0 11-2.273 0 1.137 1.137 0 012.273 0z" },
                { label: "Facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full grid place-items-center border border-[#c78f45]/25 text-[#e2c78a] hover:bg-[#c78f45] hover:text-[#120d0a] transition-colors"
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
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c78f45] mb-5">Navigate</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#e8d3b6]/70 hover:text-[#e2c78a] transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c78f45] mb-5">Contact</div>
            <div className="space-y-4 text-sm">
              <p className="text-[#e8d3b6]/70 leading-relaxed">
                {STORE.address1},<br />
                {STORE.address2}
              </p>
              <div>
                <div className="text-xs text-[#e8d3b6]/55 mb-2">Phone</div>
                <a href="tel:+912262511844" className="block text-[#e8d3b6] hover:text-[#e2c78a] transition-colors">
                  +912262511844
                </a>
              </div>
              <div>
                <div className="text-xs text-[#e8d3b6]/55 mb-2">Mobile</div>
                <a href="tel:+917208559666" className="block text-[#e8d3b6] hover:text-[#e2c78a] transition-colors">
                  +91 7208559666
                </a>
                
              </div>
              <a href={`mailto:${STORE.email}`} className="block text-[#e8d3b6]/70 hover:text-[#e2c78a] transition-colors">
                {STORE.email}
              </a>
            </div>


          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e8d3b6]/45 text-center md:text-left">
            © {new Date().getFullYear()} Aarav Beer & Wine Shop. All rights reserved.
          </p>
          <p className="text-[10px] text-[#e8d3b6]/40 tracking-wider uppercase text-center">
            Drink Responsibly · 21+ Only · Licensed Retailer
          </p>
        </div>
      </div>
    </footer>
  );
}
