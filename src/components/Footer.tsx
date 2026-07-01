import { Instagram, Facebook } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

import painting from "@/assets/painting.jpg";
import mural from "@/assets/mural.jpg";
import sculpture from "@/assets/sculpture.jpg";
import signage from "@/assets/signage.jpg";
import print from "@/assets/print.jpg";
import graphic from "@/assets/graphic.jpg";
import uiux from "@/assets/uiux.jpg";
import wallart from "@/assets/wallart.jpg";
import { NAV } from "./Nav";

export function Footer() {
  const gallery = [painting, mural, sculpture, signage, print, graphic, uiux, wallart];
  return (
    <footer className="bg-[color:var(--charcoal)] text-white relative overflow-hidden mt-auto">
      <div className="absolute inset-0 bg-mesh opacity-15" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <img src={logo} alt="Nakshikar's Studio" className="h-12 w-auto bg-white rounded-xl p-2" />
            <p className="text-white/70 leading-relaxed max-w-md">
              A premium art & design studio crafting heirloom paintings, murals, sculptures, signages, branding and digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="h-11 w-11 rounded-full bg-white/5 border border-white/10 hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]/15 flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--gold)] mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-white/80">
              {NAV.map((n) => (
                <li key={n.href}><Link to={n.href} className="hover:text-[color:var(--gold-light)] transition-colors">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--gold)] mb-5">From the studio</div>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {gallery.map((g, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <img src={g} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 rounded-full glass-dark p-1.5">
              <input placeholder="Subscribe to our journal" className="bg-transparent px-4 py-2 text-sm outline-none flex-1 text-white placeholder:text-white/40" />
              <button className="rounded-full bg-gold-gradient text-white px-4 py-2 text-[11px] tracking-[0.2em] uppercase">Join</button>
            </form>
          </div>
        </div>

        <div className="hairline-gold mt-14 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Nakshikar's Studio. All rights reserved.</div>
          <div className="font-devanagari text-[color:var(--gold-light)]">जिथे नक्षी जन्मा येते.</div>
        </div>
      </div>
    </footer>
  );
}
