"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const areas = [
  {
    code: "R-01",
    title: "AI Agents",
    tone: "var(--cat-agents)",
    toneTint: "var(--cat-agents-tint)",
    description:
      "Autonomous systems that reason, plan, and act. We research multi-agent architectures, tool-using agents, agent-to-agent protocols, and emergent swarm behaviors that push far beyond simple chatbots.",
    tags: ["Multi-Agent Systems", "Tool Use", "Autonomy", "Swarm Intelligence"],
    glyph: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <circle cx="20" cy="20" r="2.5" />
        <circle cx="20" cy="7" r="1.5" />
        <circle cx="20" cy="33" r="1.5" />
        <circle cx="7" cy="20" r="1.5" />
        <circle cx="33" cy="20" r="1.5" />
        <line x1="20" y1="9" x2="20" y2="17.5" />
        <line x1="20" y1="22.5" x2="20" y2="31" />
        <line x1="9" y1="20" x2="17.5" y2="20" />
        <line x1="22.5" y1="20" x2="31" y2="20" />
        {/* orbit dot — travels the outer ring on hover */}
        <motion.g
          variants={{
            rest:  { opacity: 0 },
            hover: { opacity: 1, rotate: 360 },
          }}
          transition={{
            opacity: { duration: 0.2 },
            rotate:  { duration: 4, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: "20px 20px" }}
        >
          <circle cx="33" cy="20" r="1.4" fill="currentColor" />
        </motion.g>
      </svg>
    ),
  },
  {
    code: "R-02",
    title: "Alternative Neural Architectures",
    tone: "var(--cat-architectures)",
    toneTint: "var(--cat-architectures-tint)",
    description:
      "The transformer isn't the end of the story. We explore liquid neural networks, state-space models, spiking neural nets, neuromorphic computing, and entirely novel computational substrates for intelligence.",
    tags: ["Liquid Networks", "SSMs", "Neuromorphic", "Spiking NNs"],
    glyph: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <motion.path
          d="M4 20 C 10 6, 14 6, 20 20 S 30 34, 36 20"
          variants={{
            rest:  { pathLength: 1 },
            hover: { pathLength: [0, 1, 1], opacity: [0.4, 1, 1] },
          }}
          transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
        />
        <circle cx="4" cy="20" r="1.5" fill="currentColor" />
        <circle cx="20" cy="20" r="1.5" fill="currentColor" />
        <circle cx="36" cy="20" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    code: "R-03",
    title: "Quantum AI",
    tone: "var(--cat-quantum)",
    toneTint: "var(--cat-quantum-tint)",
    description:
      "Harnessing quantum computation for machine learning. We investigate quantum neural networks, variational quantum circuits, quantum advantage in optimization, and hybrid quantum-classical architectures.",
    tags: ["QML", "Variational Circuits", "Hybrid Systems", "Quantum Advantage"],
    glyph: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <circle cx="20" cy="20" r="4" />
        <motion.ellipse
          cx="20" cy="20" rx="14" ry="5"
          variants={{ rest: { rotate: 30 }, hover: { rotate: 30 + 360 } }}
          transition={{ duration: 7, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "20px 20px" }}
        />
        <motion.ellipse
          cx="20" cy="20" rx="14" ry="5"
          variants={{ rest: { rotate: -30 }, hover: { rotate: -30 - 360 } }}
          transition={{ duration: 9, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "20px 20px" }}
        />
      </svg>
    ),
  },
  {
    code: "R-04",
    title: "Experimental AI",
    tone: "var(--cat-experimental)",
    toneTint: "var(--cat-experimental-tint)",
    description:
      "The frontier of what nobody else is trying. Novel training paradigms, emergent capability research, cross-domain transfer, AI safety experiments, and unconventional approaches to artificial general intelligence.",
    tags: ["Emergence", "Novel Training", "AGI Research", "AI Safety"],
    glyph: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <rect x="10" y="10" width="20" height="20" />
        <motion.rect
          x="14" y="14" width="12" height="12"
          variants={{ rest: { rotate: 45 }, hover: { rotate: 45 + 360 } }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "20px 20px" }}
        />
      </svg>
    ),
  },
];

export default function ResearchAreas() {
  return (
    <section id="research" className="relative border-t border-rule-subtle overflow-hidden">
      <div className="mx-auto max-w-[min(1400px,94vw)] px-6 py-24 lg:px-10 lg:py-32">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="sig text-signal">§02</span>
            <span className="h-px flex-1 bg-rule-subtle" />
            <span className="label-mono">Research Areas</span>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-7" delay={0.08}>
            <h2 className="display text-[clamp(1.3rem,2.2vw,1.85rem)] text-ink">
              What we explore.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.75] text-ink-muted">
              Our research spans the most ambitious frontiers of AI — the
              spaces where conventional wisdom ends and real discovery
              begins. Each track is led by a working researcher and scoped
              to a publishable output.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-px bg-rule-subtle border border-rule-subtle md:grid-cols-2">
          {areas.map((area, i) => (
            <ScrollReveal key={area.code} delay={i * 0.08}>
              <motion.article
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative flex h-full flex-col gap-6 bg-bg p-8 transition-colors duration-300 lg:p-10"
                style={{ ["--tone" as string]: area.tone, ["--tone-tint" as string]: area.toneTint }}
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--tone-tint)" }}
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-between">
                  <span className="sig flex items-center gap-2 text-ink-dim">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--tone)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="transition-colors"
                      style={{ color: "var(--tone)" }}
                    >
                      {area.code}
                    </span>
                  </span>
                  <div
                    className="text-ink-muted transition-colors group-hover:[color:var(--tone)]"
                  >
                    {area.glyph}
                  </div>
                </div>

                <h3 className="relative text-[15px] font-medium tracking-[-0.01em] text-ink lg:text-[17px]">
                  {area.title}
                </h3>

                <p className="relative max-w-[54ch] text-[14px] leading-[1.75] text-ink-muted">
                  {area.description}
                </p>

                <div className="relative mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4 border-t border-rule-subtle">
                  {area.tags.map((tag) => (
                    <span key={tag} className="sig inline-flex items-center gap-2 text-ink-dim">
                      <span
                        className="inline-block h-[3px] w-[3px] rounded-full opacity-70"
                        style={{ background: "var(--tone)" }}
                        aria-hidden="true"
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
