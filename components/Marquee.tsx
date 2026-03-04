"use client";

const items = [
  "AI Agents",
  "Liquid Neural Networks",
  "Quantum Machine Learning",
  "Spiking Neural Nets",
  "Neuromorphic Computing",
  "Multi-Agent Systems",
  "State Space Models",
  "Emergent Capabilities",
  "Hybrid Quantum-Classical",
  "Bio-Inspired AI",
  "Autonomous Reasoning",
  "Novel Architectures",
];

export default function Marquee() {
  return (
    <section
      className="relative py-8 overflow-hidden border-y border-white/[0.03]"
      aria-hidden="true"
    >
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap scrolling-text">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-10 text-sm sm:text-base font-light text-zinc-700 flex items-center gap-10 tracking-wide"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-cyan-400/20" />
          </span>
        ))}
      </div>
    </section>
  );
}
