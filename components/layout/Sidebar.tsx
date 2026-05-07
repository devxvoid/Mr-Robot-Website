"use client";

import { motion } from "framer-motion";
import { navItems } from "@/data/workspace";

type SidebarProps = {
  active: string;
  setActive: (id: string) => void;
};

export function Sidebar({ active, setActive }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-white/10 bg-black/30 p-5 backdrop-blur-2xl lg:block">
      <div className="mb-8 flex items-center gap-3">
        <motion.div
          animate={{ boxShadow: ["0 0 18px rgba(25,230,255,.25)", "0 0 34px rgba(255,38,56,.35)", "0 0 18px rgba(25,230,255,.25)"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neonRed to-neonCyan font-black shadow-neon"
        >
          &gt;_
        </motion.div>
        <div>
          <h1 className="text-xl font-black tracking-tight">TELE<span className="text-neonRed">CLAW</span></h1>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted">AI Workspace OS</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const selected = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id);
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                selected ? "bg-neonCyan/12 text-white shadow-neon" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} className={selected ? "text-neonCyan" : "text-slate-400 group-hover:text-neonCyan"} />
              <span className="font-semibold">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-neonCyan/20 bg-neonCyan/10 p-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-neonCyan">Mini App Ready</p>
        <p className="mt-1 text-sm leading-6 text-slate-300">Viewport-safe workspace shell for Telegram Web Apps.</p>
      </div>
    </aside>
  );
}
