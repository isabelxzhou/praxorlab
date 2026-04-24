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
  serial?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 1.8,
  label,
  description,
  serial,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    let frame: number;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) frame = requestAnimationFrame(tick);
      else setCount(end);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-2 px-6 py-10 lg:py-12"
    >
      {serial && <span className="sig text-ink-dim">{serial}</span>}
      <div className="display text-[clamp(1.5rem,2.4vw,2rem)] tabular-nums text-ink">
        {prefix}
        {isInView ? count : 0}
        {suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-ink">{label}</div>
      <div className="text-[13px] leading-relaxed text-ink-muted">{description}</div>
    </motion.div>
  );
}
