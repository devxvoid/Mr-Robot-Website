"use client";

import { motion } from "framer-motion";
import { workflowNodes } from "@/data/workspace";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function WorkflowPanel() {
  return (
    <section id="workflows">
      <GlassCard className="p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-neonCyan">Workflow Builder</p>
            <h2 className="text-3xl font-black md:text-5xl">Agent automation graph</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Visual pipeline preview for prompt intake, specialist routing, output generation and quality checks.
            </p>
          </div>
          <button className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-black">Create Workflow</button>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {workflowNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-3xl border border-white/10 bg-black/25 p-4"
              >
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-neonCyan/15 text-neonCyan">
                  <Icon size={20} />
                </div>
                <StatusBadge label={node.state} tone={node.state === "Complete" ? "green" : node.state === "Active" ? "cyan" : "amber"} />
                <h3 className="mt-3 font-black">{node.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">{node.description}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-neonRed to-neonCyan"
                    animate={{ width: node.state === "Complete" ? "100%" : node.state === "Active" ? ["35%", "86%", "55%"] : "18%" }}
                    transition={{ duration: 3 + index * 0.2, repeat: node.state === "Active" ? Infinity : 0 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </GlassCard>
    </section>
  );
}
