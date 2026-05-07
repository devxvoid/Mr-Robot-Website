"use client";

import { motion } from "framer-motion";
import { agents } from "@/data/workspace";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const toneMap = {
  cyan: "cyan",
  green: "green",
  red: "red",
  amber: "amber",
  violet: "violet"
} as const;

export function AgentGrid() {
  return (
    <section id="agents">
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-neonCyan">Multi-Agent Dashboard</p>
        <h2 className="text-3xl font-black tracking-tight md:text-5xl">Specialized execution agents</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent, index) => (
          <motion.article
            key={agent.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass rounded-3xl p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <agent.icon className="text-neonCyan" />
              <StatusBadge label={agent.status} tone={toneMap[agent.accent as keyof typeof toneMap] || "cyan"} />
            </div>
            <h3 className="text-xl font-black">{agent.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{agent.role}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-3">
              <div className="flex justify-between text-xs text-muted">
                <span>Health</span><span>{agent.health}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${agent.health}%` }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-neonRed to-neonCyan"
                />
              </div>
              <p className="mt-3 text-xs text-slate-400">Current: {agent.task}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
