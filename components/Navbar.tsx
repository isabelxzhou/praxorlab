"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Programs", href: "#programs" },
  { label: "Process", href: "#process" },
  { label: "Community", href: "#stats" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#apply"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-black focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to application
      </a>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "nav-glass" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group" aria-label="Praxor Lab home">
              <Logo size={28} />
              <span className="text-base font-medium tracking-[-0.02em]">
                PRAXOR
                <span className="text-zinc-600 font-light ml-0.5">LAB</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors duration-300 group tracking-wide"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#apply"
                className="glow-button px-5 py-2 text-[13px] font-medium tracking-wide"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`w-5 h-[1px] bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[1px] bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[1px] bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-2xl font-extralight text-zinc-400 hover:text-white transition-colors tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="glow-button px-8 py-3.5 text-[15px] font-medium mt-4 tracking-wide"
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
