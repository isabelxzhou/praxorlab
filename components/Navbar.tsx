"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Loop", href: "#loop" },
  { label: "Applied Work", href: "#products" },
  { label: "Join the Lab", href: "#programs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#apply"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-sm focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-signal-ink"
      >
        Skip to application
      </a>

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-rule-subtle bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-[min(1400px,94vw)] px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <a
              href="#"
              className="group flex items-center gap-3 text-ink"
              aria-label="Praxor Lab home"
            >
              <span className="text-signal"><Logo size={22} /></span>
              <span className="text-[13.5px] font-medium tracking-[-0.01em]">
                Praxor
                <span className="ml-1 text-ink-muted font-normal">Lab</span>
              </span>
              <span className="sig ml-3 hidden border-l border-rule-subtle pl-3 text-ink-dim lg:inline">
                Est. 2026
              </span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative px-3 py-3 text-[13px] text-ink-2 transition-colors hover:text-ink"
                >
                  <span>{link.label}</span>
                  <span className="pointer-events-none absolute bottom-2 left-3 right-3 h-px origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#apply" className="btn-solid px-4 py-2 text-[13px]">
                Apply
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7m0 0L6.5 3m3 3L6.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`h-px w-5 bg-ink transition-transform duration-300 ${
                  mobileOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-ink transition-all duration-300 ${
                  mobileOpen ? "scale-0 opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-ink transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-bg/98 pt-24 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="mx-auto w-full max-w-[min(1400px,94vw)] flex-1 px-6">
              <div className="flex items-center gap-3 border-b border-rule-subtle pb-4">
                <span className="sig text-signal">Menu</span>
                <span className="h-px flex-1 bg-rule-subtle" />
              </div>

              <div className="flex flex-col divide-y divide-rule-subtle">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-baseline justify-between py-6"
                  >
                    <span className="display text-[clamp(1.6rem,6vw,2.25rem)] text-ink">
                      {link.label}
                    </span>
                    <span className="sig text-ink-dim tabular-nums">
                      0{i + 1}
                    </span>
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="btn-solid mt-8 w-full py-4 text-[15px]"
              >
                Apply to join
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
