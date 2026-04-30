"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function generateReceiptId() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `F-01-${n}`;
}

function formatFiledUTC(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getUTCFullYear()}.${pad(d.getUTCMonth() + 1)}.${pad(
    d.getUTCDate()
  )} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())} UTC`;
}

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState<{ id: string; filed: string } | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReceipt({ id: generateReceiptId(), filed: formatFiledUTC(new Date()) });
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="apply"
      className="relative border-t border-rule-subtle overflow-hidden"
    >
      <div className="mx-auto max-w-[min(1400px,94vw)] px-6 py-28 lg:px-10 lg:py-40">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="sig text-signal">§07</span>
            <span className="h-px flex-1 bg-rule-subtle" />
            <span className="label-mono">Application</span>
          </div>
        </ScrollReveal>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left column — intent */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <h2 className="display text-[clamp(1.3rem,2.2vw,1.85rem)] text-ink">
                Want to join the lab?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="mt-8 max-w-[48ch] text-[15px] leading-[1.75] text-ink-2">
                We&apos;re looking for fellows and collaborators. Students,
                engineers, and self-directed researchers are all welcome. What
                we need most is people who care about getting the empirical
                work right.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-rule-subtle pt-8">
                <div>
                  <dt className="sig text-ink-dim">Deadline</dt>
                  <dd className="mt-2 text-[15px] text-ink">Rolling</dd>
                </div>
                <div>
                  <dt className="sig text-ink-dim">Decision</dt>
                  <dd className="mt-2 text-[15px] text-ink">≤ 2 weeks</dd>
                </div>
                <div>
                  <dt className="sig text-ink-dim">Start</dt>
                  <dd className="mt-2 text-[15px] text-ink">Q3 2026</dd>
                </div>
                <div>
                  <dt className="sig text-ink-dim">Duration</dt>
                  <dd className="mt-2 text-[15px] text-ink">6 months</dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.12} direction="right">
              <div className="relative">
                <div className="flex items-center justify-between border-b border-rule-subtle pb-3">
                  <span className="sig text-ink-dim">Form F-01</span>
                  <span className="sig text-ink-dim">Praxor Lab · Cohort 01</span>
                </div>

                <div className="relative">
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 z-20 flex flex-col items-start justify-center bg-bg/95 backdrop-blur-sm p-2"
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex h-10 w-10 items-center justify-center border border-signal"
                          >
                            <svg
                              className="h-4 w-4 text-signal"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M3 8.5l3.5 3.5L13 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                          <span className="sig text-signal">Status · Received</span>
                        </div>
                        <h3 className="display mt-6 text-[clamp(1.25rem,2vw,1.75rem)] text-ink">
                          Application received.
                        </h3>
                        <p className="mt-4 max-w-md text-[14.5px] leading-[1.7] text-ink-muted">
                          Thank you for your interest in Praxor Lab. You&apos;ll
                          hear from our team within two weeks.
                        </p>

                        {receipt && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 w-full max-w-md border border-rule-subtle bg-surface/60 p-4"
                          >
                            <div className="flex items-center justify-between border-b border-rule-subtle pb-2">
                              <span className="sig text-ink-dim">Intake Receipt</span>
                              <span className="sig text-signal">Filed</span>
                            </div>
                            <dl className="mt-3 grid grid-cols-[auto,1fr] gap-x-6 gap-y-2">
                              <dt className="sig text-ink-dim">Ref.</dt>
                              <dd className="font-mono text-[13px] text-ink tabular-nums">
                                {receipt.id}
                              </dd>
                              <dt className="sig text-ink-dim">Filed</dt>
                              <dd className="font-mono text-[13px] text-ink-2 tabular-nums">
                                {receipt.filed}
                              </dd>
                              <dt className="sig text-ink-dim">Cohort</dt>
                              <dd className="font-mono text-[13px] text-ink-2">
                                01 · Spring 2026
                              </dd>
                            </dl>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form
                    onSubmit={handleSubmit}
                    className="divide-y divide-rule-subtle"
                  >
                    <div className="grid gap-5 py-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="label-mono block mb-3"
                        >
                          <span className="mr-2 text-ink-dim">01</span>
                          Full name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Jane Doe"
                          className="field"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="label-mono block mb-3"
                        >
                          <span className="mr-2 text-ink-dim">02</span>
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="jane@example.com"
                          className="field"
                        />
                      </div>
                    </div>

                    <div className="py-6">
                      <label htmlFor="program" className="label-mono block mb-3">
                        <span className="mr-2 text-ink-dim">03</span>
                        Program interest
                      </label>
                      <select id="program" name="program" required className="field">
                        <option value="">Select a program</option>
                        <option value="fellowship">Research Fellowship (6 months)</option>
                        <option value="lab">Research Lab (ongoing)</option>
                        <option value="openlabs">Open Labs (ongoing)</option>
                      </select>
                    </div>

                    <div className="py-6">
                      <label htmlFor="focus" className="label-mono block mb-3">
                        <span className="mr-2 text-ink-dim">04</span>
                        Research interest
                      </label>
                      <select id="focus" name="focus" required className="field">
                        <option value="">Select your focus area</option>
                        <option value="interpretability">Mechanistic Interpretability</option>
                        <option value="reasoning">Reasoning &amp; Chain-of-Thought</option>
                        <option value="adaptation">Parameter-Efficient Adaptation</option>
                        <option value="open">Open Empirical Practice</option>
                      </select>
                    </div>

                    <div className="py-6">
                      <label htmlFor="about" className="label-mono block mb-3">
                        <span className="mr-2 text-ink-dim">05</span>
                        Tell us about yourself
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        rows={4}
                        required
                        placeholder="Your background, what excites you about AI research, and what you hope to explore…"
                        className="field resize-none"
                      />
                    </div>


                    <div className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
                      <p className="sig text-ink-dim">
                        Reviewed on a rolling basis. Decision within two weeks.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-solid px-6 py-3 text-[14px]"
                      >
                        {loading ? (
                          <>
                            <svg
                              className="h-3.5 w-3.5 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                className="opacity-20"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                              />
                              <path
                                className="opacity-90"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
                              />
                            </svg>
                            Submitting
                          </>
                        ) : (
                          <>
                            Submit application
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
