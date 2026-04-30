"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

// One lead figure + three supporting — asymmetric, not the 4-equal metric grid
const leadStat = {
  end: 2,
  suffix: "",
  label: "Papers in Progress",
  description: "drafted in the open, with code and data released alongside",
  serial: "a.04",
};

const supportingStats = [
  { end: 4,   suffix: "",  label: "Research Tracks", description: "Interpretability, reasoning, adaptation, RL",  serial: "a.01" },
  { end: 100, suffix: "%", label: "Open Source",     description: "Code, data, and notebooks released",   serial: "a.02" },
  { end: 1,   suffix: "",  label: "Product in Alpha", description: "Loop · RL training infra with interp built in", serial: "a.03" },
];

const focus = [
  { title: "Mechanistic Interpretability", tone: "var(--cat-agents)",        desc: "Causal interventions, activation analysis, and circuit-level methods. We figure out what models actually do, not what they appear to do." },
  { title: "Reasoning & Chain-of-Thought", tone: "var(--cat-architectures)", desc: "Step-level analysis of how language models reason, and whether the trace they write is causally responsible for the answer they give." },
  { title: "Parameter-Efficient Adaptation", tone: "var(--cat-quantum)",     desc: "Low-rank methods, subspace adaptation, and principled rank allocation. Adapt large pretrained models without retraining from scratch." },
  { title: "Open by Default",              tone: "var(--cat-experimental)",  desc: "Code, datasets, and analysis notebooks released alongside the paper. Honest reporting of negative results, not just headlines." },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto max-w-[min(1400px,94vw)] px-6 lg:px-10">
        {/* ── Stats: 1 lead + 3 supporting (asymmetric) ── */}
        <div className="grid border-y border-rule-subtle lg:grid-cols-12">
          {/* Lead figure spans 6 cols with richer layout */}
          <div className="relative lg:col-span-6 lg:border-r lg:border-rule-subtle">
            <div className="flex items-start gap-5 px-6 py-10 lg:gap-8 lg:px-8 lg:py-14">
              <span className="sig text-ink-dim mt-2">{leadStat.serial}</span>
              <div className="flex-1">
                <div className="label-mono mb-4">Lead Metric</div>
                <div className="flex items-baseline gap-3">
                  <div className="display text-[clamp(2.5rem,4.4vw,3.75rem)] tabular-nums text-ink">
                    <AnimatedCounterInline
                      end={leadStat.end}
                      suffix={leadStat.suffix}
                    />
                  </div>
                  <span className="text-[15px] font-medium text-ink">
                    {leadStat.label}
                  </span>
                </div>
                <p className="mt-3 max-w-[40ch] text-[13.5px] leading-[1.6] text-ink-muted">
                  {leadStat.description}
                </p>
              </div>
            </div>
          </div>

          {/* 3 supporting figures stacked right */}
          <div className="grid grid-cols-1 divide-y divide-rule-subtle sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:col-span-6 lg:grid-cols-1 lg:divide-x-0 lg:divide-y border-t border-rule-subtle lg:border-t-0">
            {supportingStats.map((stat) => (
              <AnimatedCounter
                key={stat.serial}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                serial={stat.serial}
              />
            ))}
          </div>
        </div>

        {/* Essay */}
        <div className="grid gap-12 py-24 md:grid-cols-12 lg:gap-20 lg:py-32">
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="sig text-signal">§01</span>
                <span className="h-px flex-1 bg-rule-subtle" />
                <span className="label-mono">About the Lab</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="display text-[clamp(1.3rem,2.2vw,1.85rem)] text-ink">
                Independent research, in the open.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.75] text-ink-2">
                Praxor Lab studies the internals of large language models. How
                they reason, how they adapt, and how reinforcement learning
                rewires them. We write it up in the open.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.75] text-ink-muted">
                Two papers in draft. One product in alpha. The work runs on
                open code, careful interventions, and claims sized to evidence.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <ScrollReveal delay={0.12} direction="right">
              <div className="panel">
                <div className="flex items-center justify-between border-b border-rule-subtle px-6 py-4 lg:px-8">
                  <span className="label-mono">Fig. A — Areas of focus</span>
                  <span className="sig text-ink-dim">04 / 04</span>
                </div>
                <ol className="divide-y divide-rule-subtle">
                  {focus.map((item, i) => (
                    <li
                      key={item.title}
                      className="group grid grid-cols-[auto,1fr] items-baseline gap-6 px-6 py-5 lg:px-8 lg:py-6"
                    >
                      <span
                        className="sig inline-flex items-center gap-2 tabular-nums"
                        style={{ color: item.tone }}
                      >
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ background: item.tone }}
                          aria-hidden="true"
                        />
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="text-[15px] font-medium text-ink">
                          {item.title}
                        </div>
                        <div className="mt-2 max-w-[58ch] text-[14px] leading-[1.65] text-ink-muted">
                          {item.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// Lightweight inline counter for the lead stat (doesn't need the padded wrapper)
function AnimatedCounterInline({ end, suffix }: { end: number; suffix: string }) {
  return (
    <span>
      <InlineCount end={end} />
      {suffix}
    </span>
  );
}

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function InlineCount({ end, duration = 1.8 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) frame = requestAnimationFrame(tick);
      else setN(end);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return <span ref={ref}>{n}</span>;
}
