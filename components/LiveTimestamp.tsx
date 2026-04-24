"use client";

import { useEffect, useState } from "react";

function formatUTC(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const y = d.getUTCFullYear();
  const m = pad(d.getUTCMonth() + 1);
  const day = pad(d.getUTCDate());
  const hh = pad(d.getUTCHours());
  const mm = pad(d.getUTCMinutes());
  const ss = pad(d.getUTCSeconds());
  return `${y}.${m}.${day} ${hh}:${mm}:${ss} UTC`;
}

export default function LiveTimestamp({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={`sig tabular-nums ${className}`}
      suppressHydrationWarning
      aria-label="Current UTC time"
    >
      {now ? formatUTC(now) : "————.——.—— ——:——:—— UTC"}
    </span>
  );
}
