"use client";

export default function Logo({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <line x1="3.5" y1="12" x2="20.5" y2="12" stroke="currentColor" strokeWidth="1.25" />
      <line x1="12" y1="3.5" x2="12" y2="20.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}
