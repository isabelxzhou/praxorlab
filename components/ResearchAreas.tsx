"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-4, 4]), { stiffness: 300, damping: 30 });
  const glowX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 300, damping: 30 });
  const glowY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={className}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(0, 212, 255, 0.06) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

const areas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI Agents",
    description:
      "Autonomous systems that reason, plan, and act. We research multi-agent architectures, tool-using agents, agent-to-agent communication protocols, and emergent swarm behaviors that push far beyond simple chatbots.",
    tags: ["Multi-Agent Systems", "Tool Use", "Autonomy", "Swarm Intelligence"],
    color: "from-cyan-400/20 to-cyan-400/0",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
    title: "Alternative Neural Architectures",
    description:
      "The transformer isn't the end of the story. We explore liquid neural networks, state-space models, spiking neural nets, neuromorphic computing, and entirely novel computational substrates for intelligence.",
    tags: ["Liquid Networks", "SSMs", "Neuromorphic", "Spiking NNs"],
    color: "from-purple-400/20 to-purple-400/0",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Quantum AI",
    description:
      "Harnessing quantum computation for machine learning. We investigate quantum neural networks, variational quantum circuits, quantum advantage in optimization, and hybrid quantum-classical architectures.",
    tags: ["QML", "Variational Circuits", "Hybrid Systems", "Quantum Advantage"],
    color: "from-blue-400/20 to-blue-400/0",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Experimental AI",
    description:
      "The frontier of what nobody else is trying. Novel training paradigms, emergent capability research, cross-domain transfer, AI safety experiments, and unconventional approaches to artificial general intelligence.",
    tags: ["Emergence", "Novel Training", "AGI Research", "AI Safety"],
    color: "from-emerald-400/20 to-emerald-400/0",
  },
];

export default function ResearchAreas() {
  return (
    <section id="research" className="relative py-40 overflow-hidden">
      <div className="orb orb-purple w-[600px] h-[600px] top-[20%] -right-[200px] animate-float-slow opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <p className="text-xs font-mono text-cyan-400/80 tracking-[0.25em] uppercase mb-6">
              Research Areas
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.05] mb-6">
              What we <span className="gradient-text font-light">explore</span>
            </h2>
            <p className="text-base text-zinc-500 leading-[1.9] max-w-2xl">
              Our research spans the most ambitious frontiers of AI — the spaces
              where conventional wisdom ends and real discovery begins.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          {areas.map((area, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TiltCard className="relative glass-card rounded-2xl p-8 lg:p-10 h-full group cursor-default">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="text-cyan-400/70 mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-3 text-zinc-100 group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-[1.8] mb-6">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-[11px] font-mono text-zinc-500 border border-white/[0.04] rounded-full bg-white/[0.01] group-hover:border-white/[0.08] transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
