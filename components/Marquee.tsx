"use client";

// Each topic keyed to a research-category tone
const items: { label: string; tone: string }[] = [
  { label: "Mechanistic Interpretability", tone: "var(--cat-agents)" },
  { label: "Chain-of-Thought Faithfulness", tone: "var(--cat-architectures)" },
  { label: "Activation Patching",          tone: "var(--cat-agents)" },
  { label: "Low-Rank Adaptation",          tone: "var(--cat-quantum)" },
  { label: "RL-Trained Reasoners",         tone: "var(--cat-architectures)" },
  { label: "RL Post-Training",             tone: "var(--cat-architectures)" },
  { label: "Subspace Methods",             tone: "var(--cat-quantum)" },
  { label: "Causal Scrubbing",             tone: "var(--cat-agents)" },
  { label: "Spectral Analysis",            tone: "var(--cat-quantum)" },
  { label: "Step-Level Causality",         tone: "var(--cat-architectures)" },
  { label: "Open Code & Data",             tone: "var(--cat-experimental)" },
  { label: "Logit-Lens Decoding",          tone: "var(--cat-agents)" },
  { label: "Reproducible Ablations",       tone: "var(--cat-experimental)" },
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
