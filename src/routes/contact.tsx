import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

import studio from "@/assets/studio.jpg";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Contact | Nakshikar's Studio" }],
  }),
}).update({
  component: Contact,
});

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--royal-deep)] font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-white border border-[color:var(--gold)]/30 px-5 py-4 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-4 focus:ring-[color:var(--gold)]/15 transition-all"
      />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-24">
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-28 bg-white relative overflow-hidden min-h-[calc(100vh-6rem)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-8">
            <SectionEyebrow text="Get in touch" />
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-tight">
              Let's create something{" "}
              <span className="italic text-gradient-gold">unforgettable.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Tell us about your space, your idea, or your brand. We'll respond within one working day.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "studio@nakshikars.com" },
                { icon: Phone, label: "+91 98765 43210" },
                { icon: MapPin, label: "Nakshikar's Studio, Pune, Maharashtra, India" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-[color:var(--gold)]/30 p-4 bg-[color:var(--cream)]">
                  <div className="h-11 w-11 rounded-full bg-royal-gradient flex items-center justify-center text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden border border-[color:var(--gold)]/30 h-56">
              <img src={studio} alt="Studio" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="lg:col-span-7 rounded-3xl bg-[color:var(--cream)] p-7 sm:p-10 border border-[color:var(--gold)]/25 space-y-5 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" placeholder="Full name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone" placeholder="+91 ..." />
              <Field label="Service of interest" placeholder="Mural, Sculpture, Branding..." />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--royal-deep)] font-medium">Project details</label>
              <textarea
                rows={5}
                placeholder="Tell us about your space and vision..."
                className="mt-2 w-full rounded-2xl bg-white border border-[color:var(--gold)]/30 px-5 py-4 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-4 focus:ring-[color:var(--gold)]/15 transition-all"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium shadow-luxe hover:scale-[1.02] transition-transform"
            >
              Send Enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
