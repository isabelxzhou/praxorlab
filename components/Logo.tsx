"use client";

import { motion } from "framer-motion";

export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className="group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.4)] transition-[filter] duration-500"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="logo-grad2" x1="40" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>

      {/* Outer hexagon-ish shape */}
      <motion.path
        d="M20 2L35 10V30L20 38L5 30V10L20 2Z"
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Inner structure - neural network nodes */}
      {/* Center node */}
      <circle cx="20" cy="20" r="2.5" fill="url(#logo-grad)" />

      {/* Orbital nodes */}
      <motion.circle
        cx="20" cy="10" r="1.5" fill="url(#logo-grad2)"
        animate={{ cy: [10, 11, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="28" cy="25" r="1.5" fill="url(#logo-grad2)"
        animate={{ cx: [28, 27, 28] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.circle
        cx="12" cy="25" r="1.5" fill="url(#logo-grad2)"
        animate={{ cx: [12, 13, 12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Connection lines from center */}
      <motion.line
        x1="20" y1="17.5" x2="20" y2="11.5"
        stroke="url(#logo-grad)" strokeWidth="0.8" opacity="0.6"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="22" y1="21.5" x2="26.5" y2="24"
        stroke="url(#logo-grad)" strokeWidth="0.8" opacity="0.6"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      <motion.line
        x1="18" y1="21.5" x2="13.5" y2="24"
        stroke="url(#logo-grad)" strokeWidth="0.8" opacity="0.6"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />

      {/* Cross connections between orbital nodes */}
      <line x1="20" y1="11.5" x2="26.5" y2="24" stroke="url(#logo-grad)" strokeWidth="0.4" opacity="0.2" />
      <line x1="20" y1="11.5" x2="13.5" y2="24" stroke="url(#logo-grad)" strokeWidth="0.4" opacity="0.2" />
      <line x1="13.5" y1="24" x2="26.5" y2="24" stroke="url(#logo-grad)" strokeWidth="0.4" opacity="0.2" />
    </motion.svg>
  );
}
