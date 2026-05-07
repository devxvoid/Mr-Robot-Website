"use client";

import { Bell, Rocket, Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-void/72 px-4 py-4 backdrop-blur-2xl md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-neonCyan">Mr. Robot AI Agents</p>
          <h2 className="truncate text-xl font-black md:text-2xl">TeleClaw Workspace Command Center</h2>
        </div>
        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-3">
            <Search size={16} className="text-muted" />
            <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500" placeholder="Search agents, projects, prompts..." />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300">
            <Bell size={18} />
          </button>
          <button className="cyber-button hidden px-5 py-3 text-sm md:inline-flex">
            <Rocket size={17} className="mr-2 inline" /> Launch
          </button>
        </div>
      </div>
    </header>
  );
}
