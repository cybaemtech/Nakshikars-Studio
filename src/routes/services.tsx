import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Brush, Palette, Frame, Hammer, Printer, Sparkles, Monitor, ArrowUpRight } from "lucide-react";

import portrait from "@/assets/portrait.jpg";
import mural from "@/assets/mural.jpg";
import signage from "@/assets/signage.jpg";
import stone from "@/assets/stone.jpg";
import print from "@/assets/print.jpg";
import graphic from "@/assets/graphic.jpg";
import uiux from "@/assets/uiux.jpg";
import abstract from "@/assets/abstract.jpg";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: "Services | Nakshikar's Studio" }],
  }),
}).update({
  component: Services,
});

const SERVICES = [
  {
    icon: Brush,
    title: "Paintings",
    img: portrait,
    items: ["Realistic Portraits", "Abstract Canvas", "Wall Art", "Custom Commissions"],
  },
  {
    icon: Palette,
    title: "Artworks & Murals",
    img: mural,
    items: ["Hand-painted Murals", "Nameplates", "Gift Articles", "Interior Artwork"],
  },
  {
    icon: Frame,
    title: "Signages",
    img: signage,
    items: ["LED Signage", "3D Branding", "Informative Boards", "Building Names"],
  },
  {
    icon: Hammer,
    title: "Sculptures",
    img: stone,
    items: ["Fiber", "Metal", "Stone", "Statues"],
  },
  {
    icon: Printer,
    title: "Print Solutions",
    img: print,
    items: ["UV Printing", "Eco-Solvent", "One Way Vision", "Custom Wallpapers"],
  },
  {
    icon: Sparkles,
    title: "Graphic Design",
    img: graphic,
    items: ["Logo & Identity", "Brochures & Profiles", "Packaging", "Posters & Menus"],
  },
  {
    icon: Monitor,
    title: "Digital Design",
    img: uiux,
    items: ["UI / UX Design", "Website Design", "Social Media", "Brand Systems"],
  },
  {
    icon: Sparkles,
    title: "Custom Artwork",
    img: abstract,
    items: ["One-of-a-kind", "Commissioned", "Corporate Gifting", "Limited Editions"],
  },
];

function Services() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-24">
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-28 bg-white min-h-[calc(100vh-6rem)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center"><SectionEyebrow text="Our Services" /></div>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] tracking-tight max-w-4xl mx-auto">
              From sketch to{" "}
              <span className="italic text-gradient-gold">installation</span> —
              <br />
              a complete creative solution.
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
                  className="group relative rounded-3xl overflow-hidden bg-[color:var(--cream)] border border-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60 transition-colors"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/80 to-transparent" />
                    <div className="absolute top-4 left-4 h-11 w-11 rounded-full bg-gold-gradient flex items-center justify-center shadow-soft">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl mb-3 text-[color:var(--charcoal)]">{s.title}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" /> {it}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[color:var(--royal-deep)] font-medium">
                      Discover
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
