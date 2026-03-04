"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your application with your background, research interests, and what excites you about experimental AI. No prior publications required — we value curiosity and drive above all.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5">
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Match",
    description:
      "Our team pairs you with a mentor whose expertise aligns with your interests. You'll co-design your research trajectory and set milestones together.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Research",
    description:
      "Dive deep into your project with full lab resources, compute infrastructure, weekly seminars, and close mentorship. Collaborate with your cohort on breakthrough ideas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Publish",
    description:
      "Refine your work through peer review, prepare your paper for submission, and present your findings. Our team helps you target the right venues and conferences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <p className="text-xs font-mono text-cyan-400/80 tracking-[0.25em] uppercase mb-6">
              How It Works
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.05] mb-6">
              From curiosity to{" "}
              <span className="gradient-text font-light">publication</span>
            </h2>
            <p className="text-base text-zinc-500 leading-[1.9] max-w-2xl">
              A clear path from application to published research, with
              dedicated support at every step of the journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal timeline on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative glass-card rounded-2xl p-8 h-full group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-[11px] w-[22px] h-[1px] bg-gradient-to-r from-white/[0.06] to-white/[0.02]" />
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-cyan-400/60 group-hover:border-cyan-400/20 group-hover:text-cyan-400 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 tracking-wider">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-zinc-100 mb-3 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-[1.8]">
                  {step.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
