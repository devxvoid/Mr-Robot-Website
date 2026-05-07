"use client";

import { terminalLines } from "@/data/workspace";
import { TerminalSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

export function TerminalPanel() {
  const [typed, setTyped] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = terminalLines[lineIndex] ?? "";

    if (lineIndex >= terminalLines.length) {
      const reset = setTimeout(() => {
        setTyped("");
        setLineIndex(0);
        setCharIndex(0);
      }, 2600);
      return () => clearTimeout(reset);
    }

    const timer = setTimeout(() => {
      if (charIndex < current.length) {
        setTyped((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTyped((prev) => prev + "\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, charIndex === 0 ? 320 : 22);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);

  return (
    <section id="terminal">
      <GlassCard className="overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div className="flex items-center gap-3">
            <TerminalSquare className="text-neonCyan" />
            <div>
              <h2 className="text-2xl font-black">Live Terminal</h2>
              <p className="text-sm text-muted">Streaming runtime, build and agent activity.</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="h-3 w-3 rounded-full bg-neonRed" />
            <span className="h-3 w-3 rounded-full bg-neonAmber" />
            <span className="h-3 w-3 rounded-full bg-neonGreen" />
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden bg-black/40 p-5">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-neonCyan/10 to-transparent" />
          <pre className="whitespace-pre-wrap text-sm leading-7 text-[#7fffee]">{typed}</pre>
          <span className="inline-block h-5 w-2 animate-pulse bg-neonCyan" />
        </div>
      </GlassCard>
    </section>
  );
}
