"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="apply" className="relative py-40 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="orb orb-cyan w-[800px] h-[800px] top-[-200px] left-[50%] -translate-x-1/2 animate-float-slow opacity-15" />
      <div className="orb orb-purple w-[500px] h-[500px] bottom-[-150px] left-[30%] animate-float-slower opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-xs font-mono text-cyan-400/80 tracking-[0.25em] uppercase mb-6">
            Join Praxor Lab
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.05] mb-8">
            Ready to push the
            <br />
            <span className="gradient-text font-light">boundaries of AI?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-base text-zinc-500 max-w-xl mx-auto mb-16 leading-[1.9]">
            Applications for Cohort 7 are now open. Whether you&apos;re a
            student, engineer, or researcher — if you&apos;re driven by
            curiosity, we want to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto relative overflow-hidden">
            {/* Success overlay */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-black/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6"
                  >
                    <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-medium mb-2">Application Received</h3>
                  <p className="text-sm text-zinc-400 max-w-sm">
                    Thank you for your interest in Praxor Lab. We&apos;ll review your
                    application and get back to you within 2 weeks.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-zinc-500 mb-2 text-left font-mono tracking-wider uppercase"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-zinc-500 mb-2 text-left font-mono tracking-wider uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="program"
                  className="block text-xs text-zinc-500 mb-2 text-left font-mono tracking-wider uppercase"
                >
                  Program Interest
                </label>
                <select id="program" required className="input-field">
                  <option value="">Select a program</option>
                  <option value="fellowship">Research Fellowship (6 months)</option>
                  <option value="lab">Research Lab (ongoing)</option>
                  <option value="openlabs">Open Labs (ongoing)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="focus"
                  className="block text-xs text-zinc-500 mb-2 text-left font-mono tracking-wider uppercase"
                >
                  Research Interest
                </label>
                <select id="focus" required className="input-field">
                  <option value="">Select your focus area</option>
                  <option value="agents">AI Agents</option>
                  <option value="architectures">Alternative Neural Architectures</option>
                  <option value="quantum">Quantum AI</option>
                  <option value="experimental">Experimental AI</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-xs text-zinc-500 mb-2 text-left font-mono tracking-wider uppercase"
                >
                  Tell us about yourself
                </label>
                <textarea
                  id="about"
                  rows={4}
                  required
                  placeholder="Your background, what excites you about AI research, and what you hope to explore..."
                  className="input-field resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full glow-button py-4 text-[15px] font-semibold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </motion.button>

              <p className="text-[11px] text-zinc-600 text-center tracking-wide">
                Applications are reviewed on a rolling basis. You&apos;ll hear back
                within 2 weeks.
              </p>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
