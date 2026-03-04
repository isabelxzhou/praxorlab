import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Praxor Lab — Experimental AI Research",
  description:
    "Pioneering the frontier of experimental AI research. Join our fellowship to work with world-class mentors, conduct cutting-edge research in AI agents, alternative neural architectures, and quantum AI, and publish high-impact papers.",
  keywords: [
    "AI research",
    "AI agents",
    "quantum AI",
    "neural architectures",
    "research fellowship",
    "AI mentorship",
    "experimental AI",
  ],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%2300d4ff'/><stop offset='100%' stop-color='%233b82f6'/></linearGradient></defs><rect x='6' y='6' width='20' height='20' rx='4' transform='rotate(45 16 16)' fill='url(%23g)'/><rect x='9' y='9' width='14' height='14' rx='3' transform='rotate(45 16 16)' fill='%23000'/><rect x='12' y='12' width='8' height='8' rx='2' transform='rotate(45 16 16)' fill='url(%23g)'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Praxor Lab — Experimental AI Research",
    description:
      "Join the frontier of experimental AI research. Fellowship programs, mentorship, and publication support.",
    type: "website",
    siteName: "Praxor Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praxor Lab — Experimental AI Research",
    description:
      "Join the frontier of experimental AI research. Fellowship programs, mentorship, and publication support.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="font-sans noise-overlay">{children}</body>
    </html>
  );
}
