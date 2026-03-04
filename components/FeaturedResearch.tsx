"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const papers = [
  {
    tag: "AI Agents",
    title: "Emergent Communication Protocols in Multi-Agent Reinforcement Learning",
    authors: "Chen, M. · Rodriguez, A. · Praxor Lab",
    venue: "NeurIPS 2025",
    description:
      "We demonstrate that autonomous agents can develop novel communication protocols that outperform hand-designed messaging schemas in complex coordination tasks.",
  },
  {
    tag: "Neural Architectures",
    title: "Liquid Attention: Continuous-Time Transformers for Temporal Reasoning",
    authors: "Okafor, J. · Wei, L. · Praxor Lab",
    venue: "ICML 2025",
    description:
      "A new attention mechanism inspired by liquid neural networks that enables continuous-time processing, dramatically improving performance on temporal sequence tasks.",
  },
  {
    tag: "Quantum AI",
    title: "Variational Quantum Kernels for Non-Euclidean Feature Spaces",
    authors: "Sharma, P. · Nakamura, K. · Praxor Lab",
    venue: "Nature Machine Intelligence",
    description:
      "We show that variational quantum circuits can learn kernel functions in non-Euclidean spaces that are exponentially hard for classical methods, demonstrating quantum advantage.",
  },
  {
    tag: "Experimental AI",
    title: "Phase Transitions in Emergent Capabilities of Scaled Neural Systems",
    authors: "Kim, S. · Patel, R. · Praxor Lab",
    venue: "ICLR 2025",
    description:
      "A theoretical framework for predicting when and how new capabilities emerge in neural networks during scaling, with experimental validation across architectures.",
  },
  {
    tag: "AI Agents",
    title: "Self-Improving Code Agents via Recursive Abstraction Refinement",
    authors: "Thompson, E. · Liu, Z. · Praxor Lab",
    venue: "ACL 2025",
    description:
      "Agents that recursively refine their own reasoning abstractions achieve state-of-the-art on complex programming benchmarks without additional training data.",
  },
];

export default function FeaturedResearch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-30%"]);

  return (
    <section className="relative py-40 overflow-hidden" ref={containerRef}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-mono text-cyan-400/80 tracking-[0.25em] uppercase mb-6">
                Featured Research
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.05]">
                Recent <span className="gradient-text font-light">publications</span>
              </h2>
            </div>
            <a
              href="#research"
              className="hidden md:flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 transition-colors duration-300 flex-shrink-0"
            >
              View all
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10m-4-4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll cards */}
      <motion.div style={{ x }} className="flex gap-5 pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {papers.map((paper, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-card rounded-2xl p-8 min-w-[340px] max-w-[400px] flex-shrink-0 group cursor-default"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="px-2.5 py-1 text-[10px] font-mono text-cyan-400/70 border border-cyan-400/10 rounded-full tracking-wider">
                {paper.tag}
              </span>
              <span className="text-[11px] font-mono text-zinc-600 tracking-wide">
                {paper.venue}
              </span>
            </div>

            <h3 className="text-[15px] font-medium text-zinc-200 leading-[1.5] mb-3 group-hover:text-white transition-colors duration-300">
              {paper.title}
            </h3>

            <p className="text-[13px] text-zinc-500 leading-[1.8] mb-5">
              {paper.description}
            </p>

            <p className="text-[11px] text-zinc-600 font-mono tracking-wide">
              {paper.authors}
            </p>
          </motion.article>
        ))}
        {/* Fade spacer */}
        <div className="min-w-[100px] flex-shrink-0" />
      </motion.div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
}
