"use client";

import { motion } from "framer-motion";
import { buildTimeline, projects } from "@/data/workspace";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Download, Play, Smartphone } from "lucide-react";

export function ProjectBuildPanel() {
  return (
    <section id="projects" className="grid gap-6 xl:grid-cols-[1fr_.9fr]">
      <GlassCard className="p-6">
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-neonCyan">Project Manager</p>
          <h2 className="text-3xl font-black md:text-5xl">Active execution targets</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-black/25 p-4"
            >
              <div className="flex items-center justify-between">
                <project.icon className="text-neonCyan" />
                <StatusBadge label={project.status} tone={project.status === "Live" ? "green" : "cyan"} />
              </div>
              <h3 className="mt-4 text-lg font-black">{project.name}</h3>
              <p className="text-sm text-muted">{project.type}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="h-full rounded-full bg-gradient-to-r from-neonRed to-neonCyan"
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">{project.progress}% complete</p>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <div className="flex items-center gap-3">
          <Smartphone className="text-neonCyan" />
          <div>
            <h2 className="text-2xl font-black">Android APK Builder</h2>
            <p className="text-sm text-muted">Frontend-ready build workflow shell.</p>
          </div>
        </div>
        <div className="mt-5 rounded-3xl border border-neonCyan/15 bg-neonCyan/8 p-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-neonCyan">Selected Target</p>
          <h3 className="mt-1 text-xl font-black">NotesPro Debug APK</h3>
          <p className="text-sm text-slate-300">Kotlin • Jetpack Compose • Material 3 • Room • Gradle</p>
        </div>

        <div className="mt-5 space-y-3">
          {buildTimeline.map((item, index) => (
            <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
              <span className="grid h-7 w-7 place-items-center rounded-full border border-neonCyan/20 bg-neonCyan/10 text-xs font-black text-neonCyan">
                {index + 1}
              </span>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="cyber-button inline-flex items-center justify-center gap-2 px-4 py-3 text-sm">
            <Play size={16} /> Build
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-black">
            <Download size={16} /> Artifact
          </button>
        </div>
      </GlassCard>
    </section>
  );
}
