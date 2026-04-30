"use client";

import ScrollReveal from "./ScrollReveal";

const painPoints = [
  {
    label: "Broken SDKs",
    body: "Thirty minutes SSH'd into a fresh GPU box before you find out the driver is wrong, the CUDA version is wrong, or the trainer hangs at step zero.",
  },
  {
    label: "Unmanaged data",
    body: "Terabytes of trajectories on object storage with no dedup, no eval index, no version. Someone writes a new ETL every time you want to rerun an ablation.",
  },
  {
    label: "Black-box runs",
    body: "Loss goes down, eval goes up, and you have no idea which circuits the reward moved. Reward hacking only shows up later, in deployment.",
  },
];

const pillars = [
  {
    n: "01",
    title: "Training API",
    body:
      "PPO, GRPO, DPO, and RLHF behind one SDK. Reward shaping, KL control, and checkpoint-level interpretability turned on by default. Not a library you bolt on.",
    surface: [
      "loop.train(recipe='grpo', base='llama-3.1-70b')",
      "loop.reward(fn=my_scorer, kl_target=0.05)",
      "loop.checkpoint(every=200, with_circuits=True)",
    ],
  },
  {
    n: "02",
    title: "Managed Datasets",
    body:
      "Versioned trajectory storage at terabyte scale. Dedup, filter, mix, and slice without writing a new pipeline. Eval sets and rollouts share one index.",
    surface: [
      "loop.dataset.attach('trajectories.parquet')",
      "loop.dataset.dedup(by='prompt_hash')",
      "loop.dataset.mix(weights={...})",
    ],
  },
  {
    n: "03",
    title: "Research Environments",
    body:
      "Pre-warmed GPU pools with research-native images. Notebooks, training, and eval share one environment. Every node is preflighted before it reaches you.",
    surface: [
      "loop env launch --gpus 8xH100",
      "loop env attach --notebook",
      "loop env preflight   # ✓ all nodes healthy",
    ],
  },
];

const interpBullets = [
  "Activation drift maps relative to the base model, per checkpoint.",
  "Reward-hacking probes on held-out adversarial sets, scored continuously.",
  "Step-level causal attribution for chain-of-thought rollouts.",
  "Circuit deltas: which attention heads and MLP features the reward actually moved.",
];

const terminalLines: { kind: "cmd" | "out" | "ok" | "warn"; text: string }[] = [
  { kind: "cmd", text: "$ loop init my-rl-run --base llama-3.1-70b" },
  { kind: "out", text: "→ env: 8×H100 ready (preflight passed in 11s)" },
  { kind: "out", text: "→ base: llama-3.1-70b · spectrum cached" },
  { kind: "cmd", text: "$ loop dataset attach trajectories.parquet" },
  { kind: "out", text: "→ ingested 14.2M rollouts · deduped to 9.8M" },
  { kind: "cmd", text: "$ loop train --recipe grpo --steps 4000" },
  { kind: "out", text: "→ step 0400  loss 1.84 → 1.62  kl 0.04" },
  { kind: "out", text: "→ step 2000  eval pass@1: 0.412 → 0.491" },
  { kind: "out", text: "→ step 4000  eval pass@1: 0.491 → 0.508" },
  { kind: "ok",  text: "✓ circuits moved: 14 attention heads in L23–L28" },
  { kind: "ok",  text: "✓ reward-hacking probe: clean (held-out, n=2k)" },
  { kind: "warn", text: "! drift on L31.MLP: flagged for review" },
  { kind: "out", text: "→ checkpoint: loop://runs/my-rl-run/ckpt-final" },
];

export default function Loop() {
  return (
    <section
      id="loop"
      className="relative border-t border-rule-subtle overflow-hidden"
    >
      <div className="mx-auto max-w-[min(1400px,94vw)] px-6 py-20 lg:px-10 lg:py-28">
        {/* ─── Section header ─── */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="sig text-signal">§03</span>
            <span className="h-px flex-1 bg-rule-subtle" />
            <span className="label-mono">Praxor / Loop · Product</span>
          </div>
        </ScrollReveal>

        {/* ─── Status pill ─── */}
        <ScrollReveal>
          <div className="mb-8 inline-flex items-center gap-2.5 border border-rule-subtle px-3 py-1.5">
            <span className="status-dot" aria-hidden="true" />
            <span className="sig text-ink-2">Private alpha</span>
            <span className="sig text-ink-dim">·</span>
            <span className="sig text-ink-dim">Q3 2026 · onboarding 4 teams</span>
          </div>
        </ScrollReveal>

        {/* ─── Headline + lede ─── */}
        <div className="grid gap-10 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="display text-[clamp(1.65rem,3vw,2.6rem)] text-ink">
              RL training infrastructure,
              <br />
              with the model interior on by default.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-[52ch] text-[15px] leading-[1.75] text-ink-muted">
              An opinionated stack for post-training and model specialization.
              Training APIs, managed datasets, and research-native environments,
              with circuit-level traces of what your reward signal is doing to
              the model on every checkpoint.
            </p>
            <p className="mt-5 max-w-[52ch] text-[14px] leading-[1.7] text-ink-dim">
              Built by interpretability researchers, for teams who care which
              circuits their reward is actually moving.
            </p>
          </ScrollReveal>
        </div>

        {/* ─── 03.1  The problem ─── */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="sig text-ink-dim tabular-nums">03.1</span>
              <span className="label-mono">The problem we're solving</span>
              <span className="h-px flex-1 bg-rule-subtle" />
            </div>
          </ScrollReveal>

          <div className="grid gap-px bg-rule-subtle border border-rule-subtle md:grid-cols-3">
            {painPoints.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 0.06}>
                <div className="h-full bg-bg p-7 transition-colors hover:bg-surface/50">
                  <div className="flex items-center gap-2.5">
                    <span className="sig text-ink-dim tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="label-mono text-ink-2">{p.label}</span>
                  </div>
                  <p className="mt-5 text-[14px] leading-[1.7] text-ink-muted">
                    {p.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ─── 03.2  The product — three pillars ─── */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="sig text-ink-dim tabular-nums">03.2</span>
              <span className="label-mono">The product · three pillars</span>
              <span className="h-px flex-1 bg-rule-subtle" />
            </div>
          </ScrollReveal>

          <div className="grid gap-px bg-rule-subtle border border-rule-subtle lg:grid-cols-3">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 0.06}>
                <article className="group relative h-full bg-bg p-8 transition-colors hover:bg-surface/40 lg:p-9">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="flex items-baseline gap-3">
                    <span className="sig text-signal tabular-nums">{p.n}</span>
                    <h3 className="text-[16px] font-medium tracking-[-0.01em] text-ink lg:text-[18px]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-[42ch] text-[14px] leading-[1.7] text-ink-muted">
                    {p.body}
                  </p>

                  <div className="mt-7 border-t border-rule-subtle pt-5">
                    <span className="sig text-ink-dim">Surface</span>
                    <pre className="mt-3 overflow-x-auto text-[12px] leading-[1.85] text-ink-2">
                      <code className="font-mono">
                        {p.surface.join("\n")}
                      </code>
                    </pre>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ─── 03.3  Interp on by default ─── */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="sig text-ink-dim tabular-nums">03.3</span>
              <span className="label-mono">What's different · interp on by default</span>
              <span className="h-px flex-1 bg-rule-subtle" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative grid gap-10 border border-rule-subtle bg-bg-raised/40 p-8 lg:grid-cols-12 lg:gap-14 lg:p-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-signal/70"
              />
              <div className="lg:col-span-5">
                <h3 className="display text-[clamp(1.25rem,1.9vw,1.6rem)] text-ink">
                  Every checkpoint comes with a circuit diff.
                </h3>
                <p className="mt-5 max-w-[44ch] text-[14px] leading-[1.7] text-ink-muted">
                  Your reward shaped a circuit. Loop tells you which one,
                  every run, as a default artifact. Interpretability is in the
                  CI loop, not an opt-in plugin.
                </p>
              </div>

              <ul className="flex flex-col gap-4 lg:col-span-7 lg:col-start-6">
                {interpBullets.map((b, i) => (
                  <li
                    key={b}
                    className="grid grid-cols-[auto,auto,1fr] items-start gap-x-4 border-b border-rule-subtle/70 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="sig text-ink-dim tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="mt-[7px] inline-block h-[3px] w-[3px] rounded-full bg-signal"
                      aria-hidden="true"
                    />
                    <span className="text-[14px] leading-[1.65] text-ink-2">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* ─── 03.4  Terminal mockup ─── */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="sig text-ink-dim tabular-nums">03.4</span>
              <span className="label-mono">In practice</span>
              <span className="h-px flex-1 bg-rule-subtle" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border border-rule-subtle bg-bg-raised/60">
              <div className="flex items-center justify-between border-b border-rule-subtle px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rule" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full bg-rule" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full bg-rule" aria-hidden="true" />
                </div>
                <span className="sig text-ink-dim">~/loop · my-rl-run</span>
                <span className="sig text-ink-dim tabular-nums">v0.4.1-alpha</span>
              </div>
              <pre className="overflow-x-auto p-6 text-[12.5px] leading-[1.85] lg:p-8">
                <code className="font-mono">
                  {terminalLines.map((line, i) => {
                    const color =
                      line.kind === "cmd"
                        ? "text-ink"
                        : line.kind === "ok"
                        ? "text-signal"
                        : line.kind === "warn"
                        ? "text-ink-2"
                        : "text-ink-muted";
                    return (
                      <span key={i} className={`block ${color}`}>
                        {line.text}
                      </span>
                    );
                  })}
                </code>
              </pre>
            </div>
          </ScrollReveal>
        </div>

        {/* ─── 03.5  Status + CTA ─── */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="sig text-ink-dim tabular-nums">03.5</span>
              <span className="label-mono">Access</span>
              <span className="h-px flex-1 bg-rule-subtle" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-8 border-t border-rule-subtle pt-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="display text-[clamp(1.15rem,1.7vw,1.4rem)] text-ink">
                  Private alpha. Onboarding four teams this quarter.
                </p>
                <p className="mt-4 max-w-[58ch] text-[14px] leading-[1.7] text-ink-muted">
                  For teams running serious post-training. Tell us what
                  you&apos;re training and where the tooling is breaking, and
                  we&apos;ll set you up against your real workload.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 max-w-md text-[13px]">
                  <dt className="sig text-ink-dim">Pricing</dt>
                  <dd className="text-ink-2">Custom, scoped to your workload</dd>
                  <dt className="sig text-ink-dim">Compute</dt>
                  <dd className="text-ink-2">Bring your own, or use ours</dd>
                  <dt className="sig text-ink-dim">Support</dt>
                  <dd className="text-ink-2">Direct line to the engineers</dd>
                </dl>
              </div>

              <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:justify-end">
                <a
                  href="#apply"
                  className="btn-solid w-full px-5 py-3 text-[14px] lg:w-auto"
                >
                  Request alpha access
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 6h7m0 0L6.5 3m3 3L6.5 9"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:loop@praxorlab.com"
                  className="sig text-ink-dim transition-colors hover:text-ink"
                >
                  or email loop@praxorlab.com →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
