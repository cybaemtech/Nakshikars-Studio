import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import heroMural from "@/assets/hero-mural.jpg";
import sculpture from "@/assets/sculpture.jpg";
import signage from "@/assets/signage.jpg";
import portrait from "@/assets/portrait.jpg";
import mural from "@/assets/mural.jpg";
import wallart from "@/assets/wallart.jpg";
import install from "@/assets/install.jpg";
import stone from "@/assets/stone.jpg";
import graphic from "@/assets/graphic.jpg";
import print from "@/assets/print.jpg";
import uiux from "@/assets/uiux.jpg";
import abstract from "@/assets/abstract.jpg";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [{ title: "Our Work | Nakshikar's Studio" }],
  }),
}).update({
  component: Work,
});

const FILTERS = ["All", "Murals", "Paintings", "Sculptures", "Signages", "Branding", "Digital"];

const WORKS = [
  { src: heroMural, cat: "Murals", title: "Royal Peacock Mural", place: "Pune Residence" },
  { src: sculpture, cat: "Sculptures", title: "Golden Dancer", place: "Mumbai Gallery" },
  { src: signage, cat: "Signages", title: "Boutique Facade", place: "Bandra" },
  { src: portrait, cat: "Paintings", title: "Heritage Portrait", place: "Private Collection" },
  { src: mural, cat: "Murals", title: "Hotel Lobby Mural", place: "Goa Resort" },
  { src: wallart, cat: "Paintings", title: "Geometry in Gold", place: "Lounge, Pune" },
  { src: install, cat: "Murals", title: "Ceiling Fresco", place: "Heritage Hotel" },
  { src: stone, cat: "Sculptures", title: "Ganesha Stone", place: "Courtyard Install" },
  { src: graphic, cat: "Branding", title: "Identity System", place: "Luxe Hospitality" },
  { src: print, cat: "Branding", title: "Brand Collateral", place: "Boutique Studio" },
  { src: uiux, cat: "Digital", title: "Website Design", place: "Art Marketplace" },
  { src: abstract, cat: "Paintings", title: "Indigo & Gold", place: "Corporate HQ" },
];

function Work() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof WORKS[0] | null>(null);
  const filtered = WORKS.filter((w) => filter === "All" || w.cat === filter);

  return (
    <div className="bg-background text-foreground min-h-screen pt-24">
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-28 bg-[color:var(--cream)] relative overflow-hidden min-h-[calc(100vh-6rem)]">
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-royal-gradient opacity-15 blur-3xl" />
        <div className="mx-auto max-w-[1500px] px-[8%] relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <SectionEyebrow text="Our Portfolio" />
              <h1 className="font-display text-[clamp(2.2rem,5.4vw,4.6rem)] leading-[1] tracking-tight">
                A gallery of{" "}
                <span className="italic text-gradient-gold">our finest</span>{" "}
                work.
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-[11px] tracking-[0.22em] uppercase font-medium transition-all ${
                    filter === f
                      ? "bg-royal-gradient text-white shadow-soft"
                      : "bg-white border border-[color:var(--gold)]/30 text-[color:var(--royal-deep)] hover:border-[color:var(--gold)]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((w, i) => (
              <motion.figure
                key={`${filter}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.07 }}
                onClick={() => setSelectedImage(w)}
                className="group relative mb-5 break-inside-avoid rounded-3xl overflow-hidden bg-white shadow-soft cursor-zoom-in"
              >
                <div className="relative">
                  <img src={w.src} alt={w.title} loading="lazy" className="w-full h-auto object-cover transition-transform duration-[1400ms] group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/85 via-[color:var(--charcoal)]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-gold-gradient text-[10px] tracking-[0.22em] uppercase font-semibold mb-3">
                      {w.cat}
                    </span>
                    <h3 className="font-display text-2xl leading-tight">{w.title}</h3>
                    <p className="text-xs tracking-[0.18em] uppercase opacity-80 mt-1">{w.place}</p>
                  </div>
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-4 w-4 text-[color:var(--charcoal)]" />
                  </div>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 h-12 w-12 rounded-full glass bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[90vh] max-w-full rounded-xl object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white cursor-default pointer-events-none"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gold-gradient text-[10px] tracking-[0.22em] uppercase font-semibold mb-3">
                {selectedImage.cat}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl leading-tight drop-shadow-lg">{selectedImage.title}</h3>
              <p className="text-sm tracking-[0.18em] uppercase opacity-90 mt-1 drop-shadow-md">{selectedImage.place}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
