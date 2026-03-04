"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  description: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  label,
  description,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = end / (duration * 60);
    let frame: number;

    const animate = () => {
      start += step;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.floor(start));
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center px-6 py-8"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight gradient-text tabular-nums">
        {prefix}
        {isInView ? count : 0}
        {suffix}
      </div>
      <div className="text-sm font-medium text-white mt-3 tracking-wide">
        {label}
      </div>
      <div className="text-xs text-zinc-500 mt-1">{description}</div>
    </motion.div>
  );
}
