"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-rule-subtle bg-bg">
      <div className="mx-auto max-w-[min(1400px,94vw)] px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <a
              href="#"
              className="flex items-center gap-3 text-ink"
              aria-label="Praxor Lab home"
            >
              <span className="text-signal"><Logo size={20} /></span>
              <span className="text-[13.5px] font-medium tracking-[-0.01em]">
                Praxor
                <span className="ml-1 text-ink-muted font-normal">Lab</span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-[13px] leading-[1.75] text-ink-muted">
              An independent research lab studying the internals of large
              language models. How they reason, how they adapt, and how
              reinforcement learning rewires them.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <span className="sig text-ink-muted">Lab active · Loop in alpha</span>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-5">
            <h4 className="label-mono mb-5">Research</h4>
            <ul className="flex flex-col gap-3">
              {["Interpretability", "Reasoning & CoT", "Efficient Adaptation", "Open Practice", "Drafts in Progress"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#research"
                      className="text-[13px] text-ink-2 transition-colors hover:text-ink"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="label-mono mb-5">Loop · Product</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Training API", href: "#loop" },
                { label: "Datasets", href: "#loop" },
                { label: "Environments", href: "#loop" },
                { label: "Interp on by default", href: "#loop" },
                { label: "Request alpha access", href: "#apply" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-ink-2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="label-mono mb-5">Programs</h4>
            <ul className="flex flex-col gap-3">
              {["Fellowship", "Visiting Collaborator", "Reading Group", "Apply", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#programs"
                      className="text-[13px] text-ink-2 transition-colors hover:text-ink"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="label-mono mb-5">Connect</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Twitter / X", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "Discord", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-ink-2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-rule-subtle pt-6 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <p className="sig text-ink-dim">
              © {new Date().getFullYear()} Praxor Lab
            </p>
            <p className="sig hidden text-ink-dim sm:block">
              Independent research · Open code
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="sig text-ink-dim transition-colors hover:text-ink-2"
            >
              Privacy
            </a>
            <a
              href="#"
              className="sig text-ink-dim transition-colors hover:text-ink-2"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
