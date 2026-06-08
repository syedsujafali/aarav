import { STORE } from "../data";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const mapsQuery = encodeURIComponent("Sector 19C Vashi Navi Mumbai 400706");
  const embed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#120d0a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(90,26,35,0.3),transparent_60%)]" />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title={<>Visit, Call or <span className="italic text-gold-gradient">WhatsApp Us</span></>}
          subtitle="Drop by the shop, or reach out to check stock before you visit. We're always happy to help."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Info column */}
          <div className="lg:col-span-2 reveal space-y-5">
            {/* Address card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#c78f45]/20 bg-gradient-to-br from-[#1a140f] to-[#120d0a] p-7">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#c78f45]/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full grid place-items-center bg-[#c78f45]/15 border border-[#c78f45]/30 text-[#e2c78a]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div className="text-[11px] tracking-[0.3em] uppercase text-[#c78f45]">Visit Us</div>
                </div>
                <div className="font-serif text-2xl text-[#e8d3b6] mb-2">{STORE.name}</div>
                <p className="text-[#e8d3b6]/70 leading-relaxed">
                  {STORE.address1}<br />
                  {STORE.address2}
                </p>
                <a
                  href={`https://maps.google.com/?q=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm text-[#e2c78a] hover:gap-3 transition-all"
                >
                  Get Directions
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div className="rounded-2xl border border-[#c78f45]/20 bg-gradient-to-br from-[#1a140f] to-[#120d0a] p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full grid place-items-center bg-[#c78f45]/15 border border-[#c78f45]/30 text-[#e2c78a]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div className="text-[11px] tracking-[0.3em] uppercase text-[#c78f45]">Store Hours</div>
              </div>
              <ul className="space-y-3">
                {STORE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0">
                    <span className="text-[#e8d3b6]/80 text-sm">{h.day}</span>
                    <span className="text-[#e2c78a] text-sm font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${STORE.phoneRaw}`}
                className="group relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#c78f45] to-[#8c6a2b] text-[#120d0a] hover:shadow-[0_15px_40px_-10px_rgba(201,163,90,0.55)] transition-all"
              >
                <svg className="w-6 h-6 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="font-medium">Call Now</div>
                <div className="text-xs opacity-80 mt-0.5">{STORE.phone}</div>
              </a>
              <a
                href={`https://wa.me/${STORE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl p-5 bg-[#1a140f] border border-[#c78f45]/30 text-[#e8d3b6] hover:border-[#c78f45] hover:bg-[#c78f45]/5 transition-all"
              >
                <svg className="w-6 h-6 mb-3 text-[#e2c78a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div className="font-medium">WhatsApp</div>
                <div className="text-xs opacity-70 mt-0.5">Quick reply</div>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 reveal">
            <div className="relative rounded-2xl overflow-hidden border border-[#c78f45]/20 h-full min-h-[480px] bg-[#1a140f]">
              <iframe
                title="Aarav Beer & Wine Shop Location"
                src={embed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 480, filter: "grayscale(0.4) contrast(1.1) brightness(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#c78f45]/10 rounded-2xl" />
              {/* Floating pin label */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
