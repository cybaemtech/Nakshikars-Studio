import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";
import { SectionEyebrow } from "@/components/SectionEyebrow";

const TESTIMONIALS = [
  {
    name: "Rohit & Sneha Patil",
    role: "Private Residence, Pune",
    img: client1,
    quote: "Our living room mural is the soul of the home. Every guest stops to admire it — the craftsmanship is impeccable.",
  },
  {
    name: "Aditya Sharma",
    role: "Founder, Aurum Hospitality",
    img: client2,
    quote: "From the lobby murals to our brand identity, Nakshikar's translated our vision into something timeless and unmistakably premium.",
  },
  {
    name: "Priya Deshmukh",
    role: "Principal Architect",
    img: client3,
    quote: "A rare studio that genuinely collaborates. Their attention to detail across mediums — paint, metal, print — is exceptional.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <section className="pt-8 pb-28 sm:pt-12 sm:pb-36 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <div className="flex justify-center"><SectionEyebrow text="Client Stories" /></div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] tracking-tight max-w-3xl mx-auto">
            Loved by{" "}
            <span className="italic text-gradient-gold">homeowners,</span> hotels & brands.
          </h1>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-3xl bg-[color:var(--cream)] border border-[color:var(--gold)]/30 p-8 sm:p-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative grid md:grid-cols-[180px_1fr] gap-8 items-center"
            >
              <div className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden border-4 border-white shadow-luxe">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-[color:var(--gold-deep)] font-display text-5xl leading-none mb-3">"</div>
                <p className="font-display text-xl sm:text-2xl leading-snug text-[color:var(--charcoal)] mb-6">
                  {t.quote}
                </p>
                <div>
                  <div className="font-display text-xl text-[color:var(--royal-deep)]">{t.name}</div>
                  <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-10 bg-royal-gradient" : "w-4 bg-[color:var(--gold)]/40"
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
