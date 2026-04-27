"use client";

import { useEffect } from "react";

export default function ConsoleGreeting() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only log once per page load
    if ((window as unknown as { __praxor_hello?: boolean }).__praxor_hello) return;
    (window as unknown as { __praxor_hello?: boolean }).__praxor_hello = true;

    const head = [
      "%c  PRAXOR / LAB  ",
      "background: #1a1814; color: #f0b850; font-weight: 600; font-family: ui-monospace, monospace; padding: 4px 8px; border: 1px solid #f0b850;",
    ];
    const body = [
      "%cA new lab studying the internals of large language models. Opening the console?" +
        "\nWe read résumés: research@praxor.lab" +
        "\nTracks: interpretability · reasoning · efficient adaptation · open practice." +
        "\nYear one. Two papers currently in draft. First fellows wanted.",
      "color: #b8b3a4; font-family: ui-monospace, monospace; line-height: 1.6;",
    ];

    // eslint-disable-next-line no-console
    console.log(...head);
    // eslint-disable-next-line no-console
    console.log(...body);
  }, []);

  return null;
}
