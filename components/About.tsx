"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { end: 200, suffix: "+", label: "Research Papers", description: "Published in top-tier venues" },
  { end: 50, suffix: "+", label: "Expert Mentors", description: "From leading institutions" },
  { end: 15, suffix: "+", label: "Research Domains", description: "Across experimental AI" },
  { end: 95, suffix: "%", label: "Publication Rate", description: "Fellows who publish" },
];

export default function About() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 radial-fade" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top: Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-32 border-y border-white/[0.04]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${i > 0 ? "border-l border-white/[0.04]" : ""} ${i === 2 ? "max-lg:border-l-0 max-lg:border-t border-white/[0.04]" : ""} ${i === 3 ? "max-lg:border-t border-white/[0.04]" : ""}`}
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
            </div>
          ))}
        </div>

        {/* About text */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <ScrollReveal>
              <p className="text-xs font-mono text-cyan-400/80 tracking-[0.25em] uppercase mb-6">
                About the Lab
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.05] mb-8">
                Research beyond
                <br />
                <span className="gradient-text font-light">the ordinary</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base text-zinc-500 leading-[1.9] mb-6">
                Praxor Lab exists at the intersection of curiosity and rigor. We
                are a research collective dedicated to pushing the boundaries of
                what AI can become — not just refining what it already is.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base text-zinc-500 leading-[1.9]">
                Our researchers don&apos;t just study existing models. They
                architect new paradigms — from bio-inspired neural networks to
                quantum-enhanced learning systems. Every fellow leaves with a
                published paper and a transformed understanding of what&apos;s
                possible.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: visual element */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <p className="text-xs font-mono text-cyan-400/60 tracking-[0.2em] uppercase mb-6">
                  Our Focus
                </p>
                <ul className="space-y-5">
                  {[
                    { title: "Beyond LLMs", desc: "Exploring architectures the mainstream hasn't imagined yet" },
                    { title: "Agent-First", desc: "Building AI that reasons, plans, and acts autonomously" },
                    { title: "Quantum-Ready", desc: "Preparing for the quantum advantage in machine learning" },
                    { title: "Research Rigor", desc: "Every project is held to peer-review publication standards" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-cyan-400/20 transition-colors duration-300">
                        <span className="text-xs font-mono text-cyan-400/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-200 mb-1">
                          {item.title}
                        </div>
                        <div className="text-sm text-zinc-500 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/[0.03] to-purple-500/[0.03] rounded-3xl blur-xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
