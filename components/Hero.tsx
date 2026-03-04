"use client";

import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

const ease = [0.25, 0.1, 0.25, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle network */}
      <ParticleNetwork />

      {/* Gradient orbs behind everything */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-cyan w-[800px] h-[800px] -top-[300px] left-[10%] animate-float-slow opacity-40" />
        <div className="orb orb-purple w-[700px] h-[700px] top-[20%] -right-[200px] animate-float-slower opacity-30" />
        <div className="orb orb-blue w-[600px] h-[600px] -bottom-[200px] left-[40%] animate-float-slowest opacity-25" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,#000_80%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-sm text-zinc-400 font-mono tracking-wide">
            Applications Open — Cohort 7
          </span>
        </motion.div>

        {/* Main headline — ultra-light, massive */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="hero-headline text-[clamp(3rem,8vw,7.5rem)] font-extralight tracking-[-0.04em] leading-[0.9] mb-10"
        >
          <span className="block text-white/90">The Future of</span>
          <span className="block mt-1 hero-gradient-text">AI Research</span>
          <span className="block mt-1 text-white/90">Starts Here</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-500 font-light leading-[1.8] mb-14 tracking-wide"
        >
          Praxor Lab is where experimental AI meets rigorous research. Join our
          fellowship to explore{" "}
          <span className="text-zinc-300">autonomous agents</span>,{" "}
          <span className="text-zinc-300">alternative neural architectures</span>,
          and <span className="text-zinc-300">quantum AI</span> — and publish
          groundbreaking papers with world-class mentors.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#apply"
            className="glow-button px-10 py-4 text-[15px] font-semibold tracking-wide"
          >
            Apply for Fellowship
          </a>
          <a
            href="#research"
            className="outline-button px-10 py-4 text-[15px] font-medium tracking-wide"
          >
            Explore Research
          </a>
        </motion.div>

        {/* Bottom fade line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5, ease }}
          className="mt-32 mb-0 section-divider"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-zinc-600 tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
