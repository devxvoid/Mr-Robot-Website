"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Hammer, Play, Rocket, Workflow, Zap } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function HeroDashboard() {
  const stats = [
    { label: "Active Agents", value: "06", icon: Bot },
    { label: "Workflow Nodes", value: "18", icon: Workflow },
    { label: "Build Queue", value: "03", icon: Hammer },
    { label: "AI Providers", value: "04", icon: Cpu }
  ];

  return (
    <section id="dashboard" className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
      <GlassCard className="p-6 md:p-8">
        <StatusBadge label="Professional AI Workspace" />
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
          Build apps, agents, workflows and automations from one cyber command center.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          TeleClaw brings AI chat, multi-agent control, live terminal output, Android build tooling,
          project execution and workflow orchestration into one Telegram-ready workspace frontend.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button className="cyber-button inline-flex items-center justify-center gap-2 px-6 py-4">
            <Play size={18} /> Start Building
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-black">
            <Rocket size={18} /> Deploy Ready
          </button>
        </div>
      </GlassCard>

      <GlassCard className="relative overflow-hidden p-6">
        <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-neonCyan/20 blur-3xl" />
        <div className="relative mx-auto mt-4 grid h-72 w-72 place-items-center rounded-full border border-neonCyan/25 bg-black/30 shadow-neon">
          <div className="absolute inset-8 rounded-full border border-neonRed/25 animate-pulseSlow" />
          <motion.div
            animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="grid h-44 w-44 place-items-center rounded-[2.2rem] bg-gradient-to-br from-neonRed to-red-950 shadow-redglow"
          >
            <div className="grid h-24 w-32 place-items-center rounded-3xl bg-black text-5xl font-black text-neonCyan neon-text">
              &gt;_
            </div>
          </motion.div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {["Agents", "Builds", "Flows"].map((x) => (
            <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-muted">{x}</p>
              <p className="font-black text-neonCyan">Active</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-2 xl:col-span-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <GlassCard key={stat.label} delay={0.08 * index} className="p-5">
            <stat.icon className="mb-4 text-neonCyan" />
            <p className="text-sm text-muted">{stat.label}</p>
            <p className="text-4xl font-black">{stat.value}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
