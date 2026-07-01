import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Play, Medal, Palette, Users, Building2, PhoneCall, LayoutGrid, Layers, Phone, Image as ImageIcon } from "lucide-react";
import aboutheader from "@/assets/aboutheader.png";
import aboutFooter from "@/assets/about footer.png";

import studio from "@/assets/studio.jpg";
import sketch from "@/assets/sketch.jpg";
import install from "@/assets/install.jpg";
import painting from "@/assets/painting.jpg";
import mural from "@/assets/mural.jpg";
import sculpture from "@/assets/sculpture.jpg";
import signage from "@/assets/signage.jpg";
import uiux from "@/assets/uiux.jpg";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Us | Nakshikar's Studio" }],
  }),
}).update({
  component: AboutPage,
});

/* ------------------------------ HERO ------------------------------ */

function AboutHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-white min-h-[85vh] flex items-start">
      <div className="absolute inset-0 z-0">
        <img 
          src={aboutheader} 
          alt="Paint brushes" 
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 relative z-10 grid md:grid-cols-2 mt-4 lg:mt-8">
        <div className="space-y-6 max-w-[650px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#cca651] flex items-center">
            <div className="flex flex-col gap-1.5 mr-3">
              <span className="w-10 h-[1.5px] bg-[#cca651]"></span>
              <span className="w-6 h-[1.5px] bg-[#cca651]"></span>
            </div>
            Art that speaks. Experience that delivers.
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[clamp(2.8rem,4.8vw,5.5rem)] leading-[1.02] tracking-tight text-[#16213e]">
            Crafted with<br />
            <span className="text-[color:var(--gold)]">Imagination.</span><br />
            <span className="whitespace-nowrap">Backed by <span className="text-[color:var(--gold)]">Experience.</span></span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#4a4a4a] text-[15px] leading-relaxed max-w-sm font-medium">
            We blend imagination, craftsmanship and innovation<br/>
            to create timeless artworks that inspire.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center gap-4 pt-6">
            <Link to="/contact" className="flex items-center justify-center gap-3 rounded-[4px] bg-[#1a224a] text-white px-7 py-3 text-sm font-medium hover:bg-opacity-90 transition-all shadow-md min-w-[145px]">
              <Phone className="h-4 w-4 text-white/80" /> Contact Us
            </Link>
            <Link to="/work" className="flex items-center justify-center gap-3 rounded-[4px] bg-[#cca651] text-white px-7 py-3 text-sm font-medium hover:bg-opacity-90 transition-all shadow-md min-w-[145px]">
              <ImageIcon className="h-4 w-4 text-white/80" /> Our Work
            </Link>
            <Link to="/services" className="flex items-center justify-center gap-3 rounded-[4px] bg-black/5 backdrop-blur-sm border border-[#cca651] text-[#1a224a] px-7 py-3 text-sm font-semibold hover:bg-white/50 transition-all shadow-sm min-w-[145px]">
              <Palette className="h-4 w-4 text-[#cca651]" /> Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ OUR JOURNEY ------------------------------ */

function OurJourney() {
  const stats = [
    { num: "12+", text: "Years of Experience", icon: Medal, active: false },
    { num: "250+", text: "Projects Completed", icon: Palette, active: true },
    { num: "100+", text: "Happy Clients", icon: Users, active: false },
    { num: "15+", text: "Sectors Served", icon: Building2, active: false },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[color:var(--cream)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" alt="Sketch" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--cream)] via-transparent to-[color:var(--cream)]" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-6">
          <SectionEyebrow text="Our Journey" />
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] tracking-tight text-[color:var(--royal-deep)]">
            From a Vision<br />To a Creative Legacy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2012, Nakshikar's Studio began with a simple belief – art has the power to transform spaces and touch lives.<br /><br />
            Today, we are a collective of thinkers, writers, designers and makers delivering meaningful artistic experiences across multiple disciplines.
          </p>
          <div className="font-signature text-4xl text-[color:var(--gold)] pt-2 pb-4">
            Nakshikar's Studio
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--royal-deep)] text-white px-8 py-3.5 text-sm font-medium hover:bg-[color:var(--gold)] transition-colors shadow-lg">
            Explore More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center border transition-all ${
                s.active 
                  ? "bg-[color:var(--royal-deep)] text-white border-transparent scale-105 shadow-2xl z-10 -translate-y-2" 
                  : "bg-white border-[color:var(--gold)]/20 text-[color:var(--charcoal)] shadow-soft"
              }`}
            >
              <s.icon className={`h-10 w-10 mb-5 ${s.active ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"}`} strokeWidth={1.5} />
              <div className="font-display text-4xl sm:text-5xl mb-3">{s.num}</div>
              <div className={`text-xs uppercase tracking-[0.2em] font-medium leading-relaxed ${s.active ? "text-white/80" : "text-muted-foreground"}`}>{s.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ EXISTING PRESERVED DATA ------------------------------ */

function ExistingAboutData() {
  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden h-full">
      <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 space-y-8 relative z-10">
          <SectionEyebrow text="About the Studio" />
          <h1 className="font-display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.02] tracking-tight text-[color:var(--charcoal)]">
            A house of artists,{" "}
            <span className="italic text-gradient-gold">designers</span> and{" "}
            <span className="italic text-[color:var(--royal-deep)]">craftspeople.</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Born from a love for Indian craft and modern design, Nakshikar's Studio is where heritage technique meets contemporary vision. We collaborate with homeowners, architects, hoteliers and brands to translate ideas into objects that endure.
          </p>
          <p className="font-devanagari text-xl text-[color:var(--royal-deep)] italic">
            जिथे नक्षी जन्मा येते. <span className="text-[color:var(--gold-deep)]">— Where art is born.</span>
          </p>

          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { n: "12+", l: "Years of craft" },
              { n: "500+", l: "Projects delivered" },
              { n: "120+", l: "Happy clients" },
            ].map((s) => (
              <div key={s.l} className="border-l border-[color:var(--gold)]/40 pl-4">
                <div className="font-display text-3xl sm:text-4xl text-[color:var(--royal-deep)]">{s.n}</div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="absolute top-0 right-0 w-[62%] h-[58%] rounded-3xl overflow-hidden shadow-luxe">
            <img src={studio} alt="Studio at work" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }} className="absolute bottom-0 left-0 w-[52%] h-[55%] rounded-3xl overflow-hidden shadow-luxe border-4 border-white">
            <img src={install} alt="Installation" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }} className="absolute top-[40%] right-[8%] w-[28%] aspect-square rounded-3xl overflow-hidden shadow-luxe border-4 border-white animate-float">
            <img src={sketch} alt="Sketch" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ MILESTONES ------------------------------ */

function Milestones() {
  const steps = [
    { year: "2012", desc: "Studio founded in Pune with a focus on identity design", img: sketch },
    { year: "2015", desc: "First major mural & sculpture installation", img: sculpture },
    { year: "2018", desc: "Collaborated with AMUL & Mahapeek", img: mural },
    { year: "2022", desc: "Expanded into interior + architectural branding", img: studio },
    { year: "2026", desc: "Revamped studio presence & digital identity", img: uiux },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[color:var(--cream)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-20 gap-6">
          <SectionEyebrow text="Our Milestones" />
          <Link to="/work" className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--royal-deep)] text-white px-7 py-3 text-sm font-medium shadow-soft hover:bg-[color:var(--gold)] transition-colors">
            Explore More
          </Link>
        </div>

        <div className="relative">
          <div className="absolute top-[70px] left-0 w-full h-[1px] bg-[color:var(--gold)]/40" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center flex flex-col items-center"
              >
                <div className="h-[140px] w-[140px] rounded-full border-[6px] border-white shadow-luxe overflow-hidden bg-[color:var(--cream)] relative z-10 mb-4 ring-1 ring-[color:var(--gold)]/20 ring-offset-4 ring-offset-[color:var(--cream)]">
                  <img src={s.img} alt={s.year} className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="font-display text-2xl text-[color:var(--charcoal)] mb-2 relative z-10">{s.year}</div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[180px] mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ INSIDE THE STUDIO ------------------------------ */

function InsideStudio() {
  const images = [install, painting, studio, sculpture, mural];
  
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow text="Inside the Studio" />
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft group cursor-pointer"
            >
              <img src={img} alt="Studio life" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              {i === images.length - 1 && (
                <div className="absolute inset-0 bg-black/50 flex items-end justify-center pb-8 backdrop-blur-[2px]">
                  <Link to="/work" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-[color:var(--royal-deep)] backdrop-blur-md border border-white/20 text-white px-6 py-2.5 text-xs tracking-wider uppercase font-medium transition-colors">
                    Explore More
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */

function FirstProjectCTA() {
  const cards = [
    { icon: PhoneCall, label: "Contact Us", sub: "Let's Talk", link: "/contact" },
    { icon: LayoutGrid, label: "Our Work", sub: "See Our Projects", link: "/work" },
    { icon: Layers, label: "Our Services", sub: "What We Do", link: "/services" },
  ];

  return (
    <section className="px-[25px] pb-[100px] pt-10 bg-background">
      <div className="relative py-16 sm:py-20 overflow-hidden bg-[color:var(--charcoal)] rounded-[35px]">
        <div className="absolute inset-0">
          <img src={aboutFooter} alt="Dark Paint Texture" className="w-full h-full object-cover" />
        </div>
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[color:var(--gold)] text-sm tracking-[0.2em] uppercase font-medium mb-6">Our First Project</div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.05] tracking-tight mb-8">
            Every Masterpiece<br />Starts with a Vision.
          </h2>
          <p className="text-white/80 text-xl font-light">Let's create something extraordinary together.</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4">
          {cards.map((c, i) => (
            <Link to={c.link} key={i} className="glass-dark border border-[color:var(--gold)]/30 rounded-2xl p-5 w-36 sm:w-40 flex flex-col items-center text-center hover:bg-white/10 hover:border-[color:var(--gold)] hover:-translate-y-2 transition-all duration-300">
              <c.icon className="h-7 w-7 text-[color:var(--gold)] mb-3 stroke-[1.5]" />
              <div className="text-white text-sm font-medium mb-1">{c.label}</div>
              <div className="text-white/60 text-[10px] uppercase tracking-[0.15em]">{c.sub}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <AboutHero />
      <OurJourney />
      <ExistingAboutData />
      <Milestones />
      <InsideStudio />
      <FirstProjectCTA />
    </main>
  );
}
