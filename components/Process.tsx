"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your application with your background, research interests, and what excites you about experimental AI. No prior publications required — we value curiosity and drive above all.",
  },
  {
    number: "02",
    title: "Match",
    description:
      "Our team pairs you with a mentor whose expertise aligns with your interests. You'll co-design your research trajectory and set milestones together.",
  },
  {
    number: "03",
    title: "Research",
    description:
      "Dive deep into your project with full lab resources, compute infrastructure, weekly seminars, and close mentorship. Collaborate with your cohort on breakthrough ideas.",
  },
  {
    number: "04",
    title: "Publish",
    description:
      "Refine your work through peer review, prepare your paper for submission, and present your findings. Our team helps you target the right venues and conferences.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative border-t border-rule-subtle overflow-hidden">
      <div className="mx-auto max-w-[min(1400px,94vw)] px-6 py-20 lg:px-10 lg:py-28">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="sig text-signal">§05</span>
            <span className="h-px flex-1 bg-rule-subtle" />
            <span className="label-mono">Process</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="display text-[clamp(1.3rem,2.2vw,1.85rem)] text-ink">
                From curiosity to publication.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 max-w-[52ch] text-[15px] leading-[1.75] text-ink-muted">
              A clear path from application to published research, with
              dedicated support at every step of the journey. Four phases,
              roughly six months.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 border-t border-rule-subtle">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <div className="group grid grid-cols-[auto,1fr] gap-8 border-b border-rule-subtle py-10 transition-colors hover:bg-surface/40 md:grid-cols-[auto,1fr,1fr] md:gap-12">
                <div className="flex flex-col gap-3">
                  <span className="sig text-ink-dim group-hover:text-signal transition-colors">
                    Phase {step.number}
                  </span>
                  <span className="display text-[clamp(1.4rem,2.2vw,1.75rem)] tabular-nums text-ink-dim group-hover:text-ink transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-[15px] font-medium tracking-[-0.01em] text-ink md:self-center lg:text-[17px]">
                  {step.title}
                </h3>

                <p className="col-start-2 max-w-[58ch] text-[14.5px] leading-[1.7] text-ink-muted md:col-start-3 md:self-center">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
