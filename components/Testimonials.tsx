"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Praxor Lab completely transformed my understanding of what AI research could be. My mentor pushed me to think beyond transformers, and we ended up publishing a paper on hybrid spiking-neural architectures that got accepted at NeurIPS.",
    name: "Dr. Maya Chen",
    role: "Fellow, Cohort 3",
    focus: "Alternative Neural Architectures",
  },
  {
    quote:
      "I came in as a software engineer with zero research experience. Six months later, I had a first-author paper on multi-agent coordination. The structured mentorship and rigorous peer review made all the difference.",
    name: "James Okafor",
    role: "Fellow, Cohort 5",
    focus: "AI Agents",
  },
  {
    quote:
      "The quantum AI track is unlike anything else out there. Real quantum hardware access, a brilliant mentor, and an incredibly supportive cohort. This is where the future of computation is being shaped.",
    name: "Priya Sharma",
    role: "Fellow, Cohort 4",
    focus: "Quantum AI",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="orb orb-blue w-[500px] h-[500px] top-[30%] left-[50%] animate-float-slowest opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <p className="text-xs font-mono text-cyan-400/80 tracking-[0.25em] uppercase mb-6">
              From Our Fellows
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.05]">
              Stories from the{" "}
              <span className="gradient-text font-light">frontier</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card rounded-2xl p-8 lg:p-9 h-full flex flex-col group"
              >
                {/* Quote mark */}
                <svg
                  className="w-8 h-8 text-cyan-400/20 mb-6 group-hover:text-cyan-400/40 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>

                <p className="text-[13px] text-zinc-400 leading-[1.9] flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="border-t border-white/[0.04] pt-5">
                  <div className="text-sm font-medium text-zinc-200">
                    {t.name}
                  </div>
                  <div className="text-xs text-zinc-600 mt-1">{t.role}</div>
                  <div className="text-[11px] text-cyan-400/50 font-mono mt-1.5 tracking-wider">
                    {t.focus}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
