"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.03] bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-5" aria-label="Praxor Lab home">
              <Logo size={22} />
              <span className="text-sm font-medium tracking-[-0.02em]">
                PRAXOR
                <span className="text-zinc-600 font-light ml-0.5">LAB</span>
              </span>
            </a>
            <p className="text-[13px] text-zinc-600 leading-[1.8] max-w-xs">
              Pioneering the frontier of experimental AI research through
              mentorship, community, and rigorous exploration.
            </p>
          </div>

          {/* Research */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-mono text-zinc-400 tracking-[0.15em] uppercase mb-5">
              Research
            </h4>
            <ul className="space-y-3">
              {["AI Agents", "Neural Architectures", "Quantum AI", "Experimental AI", "Publications"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#research"
                      className="text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-zinc-400 tracking-[0.15em] uppercase mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {["Fellowship", "Accelerator", "Open Labs", "Mentorship", "Apply"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#programs"
                      className="text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-zinc-400 tracking-[0.15em] uppercase mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Twitter / X", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "Discord", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.03] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-700 tracking-wide">
            &copy; {new Date().getFullYear()} Praxor Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-zinc-700 hover:text-zinc-400 transition-colors tracking-wide">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-zinc-700 hover:text-zinc-400 transition-colors tracking-wide">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
