"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type Program = {
  featured: boolean;
  code: string;
  name: string;
  duration: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
};

const flagship: Program = {
  featured: true,
  code: "P-01",
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
};

const satellites: Program[] = [
  {
    featured: false,
    code: "P-02",
    name: "Research Lab",
    duration: "Ongoing",
    description:
      "Our in-house research arm. Original research across experimental AI, published in peer-reviewed venues.",
    features: [
      "Original research in agents, quantum AI & beyond",
      "Open-source frameworks & tooling",
      "Regular submissions to top venues",
    ],
    cta: "View Research",
    href: "#research",
  },
  {
    featured: false,
    code: "P-03",
    name: "Open Labs",
    duration: "Ongoing",
    description:
      "Community-driven workshops, reading groups, and experimental sessions. Open to anyone curious.",
    features: [
      "Weekly workshops on emerging topics",
      "Guest lectures from leading researchers",
      "Community Discord & resource library",
    ],
    cta: "Join Community",
    href: "#apply",
  },
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((feature) => (
        <li
          key={feature}
          className="grid grid-cols-[auto,1fr] items-start gap-3 text-[13px] leading-[1.55] text-ink-2"
        >
          <svg
            className="mt-[3px] h-3 w-3 text-ink-dim"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 6l3 3 5-6"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative border-t border-rule-subtle overflow-hidden"
    >
      <div className="mx-auto max-w-[min(1400px,94vw)] px-6 py-24 lg:px-10 lg:py-32">
        <ScrollReveal>
          <div className="mb-10 flex items-center gap-3">
            <span className="sig text-signal">§04</span>
            <span className="h-px flex-1 bg-rule-subtle" />
            <span className="label-mono">Programs</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="display text-[clamp(1.3rem,2.2vw,1.85rem)] text-ink">
                Your path into AI research.
              </h2>
            </div>
            <p className="max-w-[52ch] text-[15px] leading-[1.75] text-ink-muted lg:col-span-6 lg:col-start-7">
              Whether you&apos;re diving deep into a six-month fellowship or
              exploring through our open labs, there&apos;s a program sized to
              your ambition. Every track is built around one premise: the work
              gets published.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric layout: flagship takes 8 cols, satellites stack in 4 */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* ── Flagship (P-01) ── */}
          <ScrollReveal className="lg:col-span-8" delay={0.1}>
            <motion.article
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group panel is-interactive relative flex h-full flex-col border-signal/40"
            >
              <div className="absolute left-8 top-0 -translate-y-1/2">
                <span className="inline-flex items-center gap-2 bg-bg px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="sig tracking-[0.12em] text-signal">
                    Flagship
                  </span>
                </span>
              </div>

              <header className="flex flex-col gap-6 border-b border-rule-subtle px-8 py-7 sm:flex-row sm:items-start sm:justify-between lg:px-10">
                <div>
                  <div className="sig text-ink-dim">{flagship.code}</div>
                  <h3 className="mt-2 text-[17px] font-medium text-ink lg:text-[19px]">
                    {flagship.name}
                  </h3>
                  <p className="mt-3 max-w-[48ch] text-[14px] leading-[1.7] text-ink-muted">
                    {flagship.description}
                  </p>
                </div>
                <dl className="flex gap-8 border-t border-rule-subtle pt-5 sm:flex-col sm:gap-4 sm:items-end sm:border-t-0 sm:pt-0 sm:text-right">
                  <div>
                    <dt className="sig text-ink-dim">Duration</dt>
                    <dd className="mt-1 text-[14px] text-ink">
                      {flagship.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="sig text-ink-dim">Cohort</dt>
                    <dd className="mt-1 text-[14px] text-ink">07 · 2026</dd>
                  </div>
                </dl>
              </header>

              {/* Two-column inside flagship card */}
              <div className="grid gap-10 px-8 py-8 lg:grid-cols-2 lg:px-10 lg:py-10">
                <FeatureList items={flagship.features.slice(0, 3)} />
                <FeatureList items={flagship.features.slice(3)} />
              </div>

              <div className="mt-auto flex flex-col gap-4 border-t border-rule-subtle px-8 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                <span className="sig text-ink-dim">
                  Rolling review · Decision ≤ 2 weeks
                </span>
                <a href={flagship.href} className="btn-solid w-full px-5 py-3 text-[13.5px] sm:w-auto">
                  {flagship.cta}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 6h7m0 0L6.5 3m3 3L6.5 9"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          </ScrollReveal>

          {/* ── Satellites (P-02, P-03) stacked ── */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            {satellites.map((program, i) => (
              <ScrollReveal key={program.code} delay={0.14 + i * 0.08}>
                <motion.article
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="panel is-interactive flex h-full flex-col"
                >
                  <header className="flex items-start justify-between gap-4 border-b border-rule-subtle px-6 py-5">
                    <div>
                      <div className="sig text-ink-dim">{program.code}</div>
                      <h3 className="mt-2 text-[15px] font-medium text-ink">
                        {program.name}
                      </h3>
                    </div>
                    <span className="sig text-ink-muted">{program.duration}</span>
                  </header>

                  <div className="flex flex-1 flex-col gap-5 px-6 py-6">
                    <p className="text-[13.5px] leading-[1.65] text-ink-muted">
                      {program.description}
                    </p>
                    <FeatureList items={program.features} />

                    <a
                      href={program.href}
                      className="mt-auto inline-flex items-center gap-2 self-start border-b border-rule pb-0.5 text-[13px] text-ink-2 transition-colors hover:border-ink hover:text-ink"
                    >
                      {program.cta}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 6h7m0 0L6.5 3m3 3L6.5 9"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
