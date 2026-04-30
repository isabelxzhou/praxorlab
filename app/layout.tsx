import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#26241f",
};

export const metadata: Metadata = {
  title: "Praxor Lab — LLM Interpretability, Adaptation, and RL Training Infrastructure",
  description:
    "An independent research lab on the internals of large language models. Mechanistic interpretability, chain-of-thought faithfulness, parameter-efficient adaptation, and Loop: RL training infrastructure with mech interp on by default. Papers in the open. Loop in private alpha.",
  keywords: [
    "LLM research",
    "mechanistic interpretability",
    "chain-of-thought faithfulness",
    "parameter-efficient fine-tuning",
    "low-rank adaptation",
    "RL post-training",
    "RLHF infrastructure",
    "reasoning models",
    "AI research fellowship",
  ],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%2326241f'/><rect x='7' y='7' width='18' height='18' fill='none' stroke='%23f0b850' stroke-width='1.5'/><line x1='7' y1='16' x2='25' y2='16' stroke='%23f0b850' stroke-width='1.5'/><line x1='16' y1='7' x2='16' y2='25' stroke='%23f0b850' stroke-width='1.5'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Praxor Lab — LLM Interpretability, Adaptation, and RL Training Infrastructure",
    description:
      "Independent research on mechanistic interpretability, chain-of-thought faithfulness, parameter-efficient adaptation, and RL post-training. Loop in private alpha.",
    type: "website",
    siteName: "Praxor Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praxor Lab — LLM Interpretability, Adaptation, and RL Training Infrastructure",
    description:
      "Independent research on mechanistic interpretability, chain-of-thought faithfulness, parameter-efficient adaptation, and RL post-training. Loop in private alpha.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
