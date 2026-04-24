"use client";

// Each topic keyed to a research-category tone
const items: { label: string; tone: string }[] = [
  { label: "AI Agents",                tone: "var(--cat-agents)" },
  { label: "Liquid Neural Networks",   tone: "var(--cat-architectures)" },
  { label: "Quantum Machine Learning", tone: "var(--cat-quantum)" },
  { label: "Spiking Neural Nets",      tone: "var(--cat-architectures)" },
  { label: "Neuromorphic Computing",   tone: "var(--cat-architectures)" },
  { label: "Multi-Agent Systems",      tone: "var(--cat-agents)" },
  { label: "State Space Models",       tone: "var(--cat-architectures)" },
  { label: "Emergent Capabilities",    tone: "var(--cat-experimental)" },
  { label: "Hybrid Quantum-Classical", tone: "var(--cat-quantum)" },
  { label: "Bio-Inspired AI",          tone: "var(--cat-architectures)" },
  { label: "Autonomous Reasoning",     tone: "var(--cat-agents)" },
  { label: "Novel Architectures",      tone: "var(--cat-experimental)" },
];

export default function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-rule-subtle py-6"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-bg to-transparent" />

      <div className="flex whitespace-nowrap scrolling-text">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="sig mx-8 inline-flex items-center gap-5 text-ink-muted"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: item.tone }}
              aria-hidden="true"
            />
            <span className="tabular-nums text-ink-dim">
              {String((i % items.length) + 1).padStart(2, "0")}
            </span>
            <span className="tracking-[0.02em]">{item.label}</span>
            <span className="inline-block h-px w-8 bg-rule" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
