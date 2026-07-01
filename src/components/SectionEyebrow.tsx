export function SectionEyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="h-px w-12 bg-gold-gradient" />
      <span className="text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold-deep)] font-semibold">{text}</span>
    </div>
  );
}
