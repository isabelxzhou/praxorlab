"use client";

import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";
import LiveTimestamp from "./LiveTimestamp";

const ease = [0.16, 1, 0.3, 1] as const;

const index = [
  { n: "§02", label: "Research", href: "#research" },
  { n: "§03", label: "Products", href: "#products" },
  { n: "§04", label: "Programs", href: "#programs" },
  { n: "§06", label: "Apply", href: "#apply" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-24">
      {/* Cursor-reactive node network */}
      <ParticleNetwork />

      {/* Faint instrument grid, masked to center */}
      <div className="absolute inset-0 field-grid pointer-events-none opacity-40" aria-hidden="true" />

      {/* Editorial corner marks */}
      <div
        className="pointer-events-none absolute inset-x-0 top-24 mx-auto max-w-[min(1400px,94vw)] px-6 lg:px-10"
        aria-hidden="true"
      >
        <div className="relative h-full">
          <div className="absolute -left-2 -top-2 h-3 w-3 border-l border-t border-rule" />
          <div className="absolute -right-2 -top-2 h-3 w-3 border-r border-t border-rule" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[min(1400px,94vw)] flex-1 flex-col justify-between px-6 lg:px-10">
        {/* ─── Masthead row ─── */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="flex flex-wrap items-end justify-between gap-4 pt-10 pb-8 border-b border-rule-subtle"
        >
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="sig">Vol. VII</span>
            <span className="sig hidden sm:inline">N° 07 · Spring</span>
            <LiveTimestamp className="hidden lg:inline text-ink-dim" />
          </div>
          <div className="flex items-center gap-2.5">
            <span className="status-dot" aria-hidden="true" />
            <span className="label-mono text-[11px]">
              <span className="hidden sm:inline">Applications Open · </span>
              Cohort 07
            </span>
          </div>
        </motion.div>

        {/* ─── Display ─── */}
        <div className="flex-1 flex flex-col justify-center py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
            className="max-w-[26ch]"
          >
            <h1 className="hero-headline text-[clamp(1.75rem,3.6vw,3.25rem)] text-ink">
              Experimental AI research,{" "}
              <span className="text-ink-2">
                held to paper-grade rigor.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="mt-12 grid gap-10 md:grid-cols-12"
          >
            <p className="md:col-span-6 md:col-start-7 max-w-[62ch] text-[15px] leading-[1.7] text-ink-2">
              Praxor Lab is a residency for researchers working at the edge of
              what AI can become — autonomous agents, alternative neural
              architectures, and quantum machine learning. Every fellow leaves
              with a peer-reviewed paper and a transformed understanding of the
              field.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            <a href="#apply" className="btn-solid px-6 py-3 text-[14px]">
              Apply for Cohort 07
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#research" className="btn-ghost px-6 py-3 text-[14px]">
              Read the research
            </a>
          </motion.div>
        </div>

        {/* ─── Index foot ─── */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="border-t border-rule-subtle pt-6 pb-10"
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-4">
            {index.map((item) => (
              <a
                key={item.n}
                href={item.href}
                className="group flex items-baseline gap-3 text-[13px] text-ink-2 hover:text-ink transition-colors"
              >
                <span className="sig text-ink-dim group-hover:text-signal transition-colors">
                  {item.n}
                </span>
                <span className="flex-1 border-b border-dashed border-rule-subtle group-hover:border-rule pb-0.5">
                  {item.label}
                </span>
                <span className="text-ink-dim group-hover:text-ink transition-colors" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
