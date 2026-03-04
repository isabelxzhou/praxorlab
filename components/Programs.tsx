"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const programs = [
  {
    featured: true,
    name: "Research Fellowship",
    duration: "6 Months",
    description:
      "Our flagship program. Full immersion into experimental AI research with dedicated mentorship, lab resources, and publication support.",
    features: [
      "1-on-1 mentor matching with domain experts",
      "Full access to compute resources & infrastructure",
      "Weekly research seminars & peer review",
      "Publication support & conference prep",
      "Stipend for full-time fellows",
      "Alumni network & ongoing collaboration",
    ],
    cta: "Apply for Fellowship",
    href: "#apply",
  },
  {
    featured: false,
    name: "Research Lab",
    duration: "Ongoing",
    description:
      "Our in-house research arm. Praxor Lab conducts original research across experimental AI, publishing papers and open-sourcing tools for the broader community.",
    features: [
      "Original research in agents, quantum AI & beyond",
      "Open-source frameworks & tooling",
      "Collaborative projects with fellows & mentors",
      "Regular paper submissions to top venues",
      "Internal seminars & knowledge sharing",
      "Partnerships with academic institutions",
    ],
    cta: "View Research",
    href: "#research",
  },
  {
    featured: false,
    name: "Open Labs",
    duration: "Ongoing",
    description:
      "Community-driven workshops, reading groups, and experimental sessions. Open to anyone passionate about the frontier.",
    features: [
      "Weekly workshops on emerging topics",
      "Guest lectures from leading researchers",
      "Paper reading groups & discussions",
      "Open-source collaboration projects",
      "Community Discord & resource library",
      "No prerequisites — just curiosity",
    ],
    cta: "Join Community",
    href: "#apply",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="orb orb-cyan w-[500px] h-[500px] bottom-[10%] -left-[200px] animate-float-slower opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <p className="text-xs font-mono text-cyan-400/80 tracking-[0.25em] uppercase mb-6">
              Programs
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.05] mb-6">
              Your path into{" "}
              <span className="gradient-text font-light">AI research</span>
            </h2>
            <p className="text-base text-zinc-500 leading-[1.9] max-w-2xl">
              Whether you&apos;re diving deep into a 6-month fellowship or
              exploring through our open labs, there&apos;s a program for your ambition.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className={`relative rounded-2xl p-8 lg:p-9 h-full flex flex-col group ${
                  program.featured
                    ? "glass-card animated-border"
                    : "glass-card"
                }`}
              >
                {program.featured && (
                  <div className="absolute -top-3 left-8">
                    <span className="px-3 py-1 text-[10px] font-mono font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full tracking-wider">
                      FLAGSHIP
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-zinc-100">
                      {program.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400/70 tracking-wider">
                      {program.duration}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-[1.8]">
                    {program.description}
                  </p>
                </div>

                <ul className="space-y-3.5 mb-10 flex-1">
                  {program.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[13px] text-zinc-400"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-cyan-400/50 mt-[3px] flex-shrink-0"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={program.href}
                  className={`block text-center py-3.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    program.featured ? "glow-button" : "outline-button"
                  }`}
                >
                  {program.cta}
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
