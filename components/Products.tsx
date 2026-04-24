"use client";

import ScrollReveal from "./ScrollReveal";

const products = [
  {
    code: "PX-01",
    tone: "var(--cat-agents)",
    name: "Custom Agent Training",
    tagline:
      "Bespoke autonomous agents for your domain, tools, and workflows.",
    bullets: [
      "Tool-use, planning, and long-horizon reasoning",
      "Integration with your data and internal APIs",
      "Evaluation harness tailored to your KPIs",
    ],
    meta: "6–12 wks",
  },
  {
    code: "PX-02",
    tone: "var(--cat-architectures)",
    name: "RLHF & Instruction Tuning",
    tagline:
      "Preference alignment and instruction following at production scale.",
    bullets: [
      "Reward modeling from human or AI preference",
      "DPO, IPO, and KTO pipelines; PPO when it earns its place",
      "Safety and refusal calibration",
    ],
    meta: "8–16 wks",
  },
  {
    code: "PX-03",
    tone: "var(--cat-experimental)",
    name: "Evaluation & Red-team",
    tagline:
      "Rigorous evals, behavioral testing, and adversarial review.",
    bullets: [
      "Domain-specific benchmarks and eval suites",
      "Red-team for jailbreaks, exfiltration, and data leakage",
      "Regression-testable reports, not demos",
    ],
    meta: "4–8 wks",
  },
  {
    code: "PX-04",
    tone: "var(--cat-quantum)",
    name: "Synthetic Data Pipelines",
    tagline:
      "High-quality synthetic datasets for scarce or sensitive domains.",
    bullets: [
      "Task-specific generation with verification loops",
      "Deduplication, difficulty curricula, and provenance",
      "Governance reports and data cards",
    ],
    meta: "6–10 wks",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative border-t border-rule-subtle overflow-hidden"
    >
      <div className="mx-auto max-w-[min(1400px,94vw)] px-6 py-20 lg:px-10 lg:py-28">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="sig text-signal">§03</span>
            <span className="h-px flex-1 bg-rule-subtle" />
            <span className="label-mono">Products & Services</span>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="display text-[clamp(1.3rem,2.2vw,1.85rem)] text-ink">
              Applied work, from the same lab.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06} className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-[58ch] text-[15px] leading-[1.75] text-ink-muted">
              The fellowship is our upstream research track. For teams that
              need production-grade AI delivered on a timeline, we offer a
              small set of engagements drawn directly from the lab&apos;s
              methods.
            </p>
          </ScrollReveal>
        </div>

        {/* Ledger — stacked rows, not a card grid */}
        <div className="mt-14 border-t border-rule-subtle">
          {products.map((p, i) => (
            <ScrollReveal key={p.code} delay={i * 0.06}>
              <article
                className="group grid grid-cols-[auto,1fr] items-start gap-x-6 gap-y-4 border-b border-rule-subtle py-8 transition-colors hover:bg-surface/40 lg:grid-cols-12 lg:gap-x-10 lg:py-12"
                style={{ ["--tone" as string]: p.tone }}
              >
                <div className="flex flex-col gap-2 lg:col-span-2">
                  <span className="sig inline-flex items-center gap-2 tabular-nums">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--tone)" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--tone)" }}>{p.code}</span>
                  </span>
                  <span className="sig text-ink-dim">{p.meta}</span>
                </div>

                <div className="col-span-full lg:col-span-5">
                  <h3 className="text-[15px] font-medium tracking-[-0.01em] text-ink lg:text-[17px]">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-[48ch] text-[14px] leading-[1.7] text-ink-muted">
                    {p.tagline}
                  </p>
                </div>

                <ul className="col-span-full flex flex-col gap-2 lg:col-span-4">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="grid grid-cols-[auto,1fr] items-start gap-3 text-[13px] leading-[1.55] text-ink-2"
                    >
                      <span
                        className="mt-[7px] inline-block h-[3px] w-[3px] rounded-full"
                        style={{ background: "var(--tone)" }}
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="col-span-full flex lg:col-span-1 lg:justify-end">
                  <a
                    href="#apply"
                    className="inline-flex items-center gap-2 self-start py-1 text-[13px] text-ink-dim transition-colors hover:text-ink"
                    aria-label={`Discuss ${p.name}`}
                  >
                    <span className="hidden lg:inline">Discuss</span>
                    <span className="lg:hidden">Discuss an engagement</span>
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
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
