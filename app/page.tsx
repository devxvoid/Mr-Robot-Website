"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  Cpu,
  GitBranch,
  Hammer,
  LayoutDashboard,
  MessageSquare,
  Play,
  Rocket,
  Send,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  Workflow,
  Zap
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const agents = [
  { name: "Master Operator", role: "Plans tasks and coordinates all agents.", status: "Online", icon: Bot },
  { name: "Android Architect", role: "Kotlin, Compose, Gradle and APK-ready architecture.", status: "Ready", icon: Smartphone },
  { name: "UI/UX Designer", role: "Premium cyberpunk interfaces and product polish.", status: "Designing", icon: LayoutDashboard },
  { name: "Debugging Agent", role: "Reads logs, finds root causes and generates fixes.", status: "Scanning", icon: ShieldCheck },
  { name: "GitHub Actions Agent", role: "CI/CD, APK artifacts, logs and self-healing builds.", status: "Ready", icon: GitBranch },
  { name: "Docs Agent", role: "README, prompts, changelog and release notes.", status: "Online", icon: Code2 }
];

const workflows = [
  "Prompt → Architecture",
  "UI Design → Code Generation",
  "Gradle Fix → APK Build",
  "Debug Logs → Auto Patch",
  "README → Release Notes"
];

const terminalLines = [
  "> teleclaw workspace boot sequence started",
  "> loading Mr. Robot agent kernel ............. OK",
  "> syncing Android build pipeline ............. OK",
  "> connecting workflow graph .................. OK",
  "> preparing terminal runtime ................. OK",
  "> mini app compatibility layer ............... OK",
  "> status: ready to build"
];

export default function Home() {
  const [typed, setTyped] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [chatInput, setChatInput] = useState("");

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

  const stats = useMemo(
    () => [
      { label: "Active Agents", value: "06", icon: Bot },
      { label: "Workflow Nodes", value: "18", icon: Workflow },
      { label: "Build Queue", value: "03", icon: Hammer },
      { label: "AI Providers", value: "04", icon: Cpu }
    ],
    []
  );

  return (
    <main className="min-h-screen">
      <div className="pointer-events-none fixed -left-32 top-36 h-80 w-80 rounded-full bg-neonRed/35 blur-[95px]" />
      <div className="pointer-events-none fixed -right-32 bottom-20 h-80 w-80 rounded-full bg-neonCyan/30 blur-[95px]" />

      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-72 border-r border-white/10 bg-black/30 p-5 backdrop-blur-2xl lg:block">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-neonRed to-neonCyan font-black shadow-neon">
            &gt;_
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight">TELE<span className="text-neonRed">CLAW</span></h1>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">AI Workspace</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            ["Dashboard", LayoutDashboard],
            ["AI Chat", MessageSquare],
            ["Agents", Bot],
            ["Terminal", TerminalSquare],
            ["Workflows", Workflow],
            ["Android Builder", Smartphone]
          ].map(([label, Icon]) => {
            const IconComponent = Icon as typeof LayoutDashboard;
            return (
              <a key={String(label)} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white" href={`#${String(label).toLowerCase().replaceAll(" ", "-")}`}>
                <IconComponent size={18} />
                {String(label)}
              </a>
            );
          })}
        </nav>

        <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-neonCyan/20 bg-neonCyan/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-neonCyan">System</p>
          <p className="mt-1 text-sm text-slate-300">Telegram Mini App compatible interface.</p>
        </div>
      </aside>

      <section className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-void/70 px-4 py-4 backdrop-blur-2xl md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neonCyan">Mr. Robot AI Agents</p>
              <h2 className="text-xl font-black md:text-2xl">Workspace Command Center</h2>
            </div>
            <button className="rounded-full bg-gradient-to-r from-neonRed to-neonCyan px-5 py-3 text-sm font-black shadow-neon transition hover:scale-105">
              Launch Workspace
            </button>
          </div>
        </header>

        <div className="space-y-6 p-4 md:p-8">
          <motion.section
            id="dashboard"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]"
          >
            <div className="glass rounded-[2rem] p-6 shadow-neon md:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neonCyan/25 bg-neonCyan/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-neonCyan">
                <Zap size={14} /> Professional AI Workspace
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Build apps, agents, workflows and automations from one cyber command center.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                TeleClaw combines AI chat, multi-agent control, live terminal output, workflow orchestration and Android build tooling into a Telegram-ready workspace UI.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neonRed to-neonCyan px-6 py-4 font-black shadow-neon">
                  <Play size={18} /> Start Building
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-black">
                  <Rocket size={18} /> Deploy Ready
                </button>
              </div>
            </div>

            <div className="glass relative overflow-hidden rounded-[2rem] p-6 shadow-redglow">
              <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-neonCyan/20 blur-3xl" />
              <div className="relative mx-auto mt-4 grid h-72 w-72 place-items-center rounded-full border border-neonCyan/25 bg-black/30 shadow-neon">
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
            </div>
          </motion.section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-5"
              >
                <stat.icon className="mb-4 text-neonCyan" />
                <p className="text-sm text-muted">{stat.label}</p>
                <p className="text-4xl font-black">{stat.value}</p>
              </motion.div>
            ))}
          </section>

          <section id="ai-chat" className="grid gap-6 xl:grid-cols-[.95fr_1.05fr]">
            <div className="glass rounded-[2rem] p-5">
              <div className="mb-4 flex items-center gap-3">
                <MessageSquare className="text-neonCyan" />
                <h2 className="text-2xl font-black">AI Chat Workspace</h2>
              </div>
              <div className="space-y-4">
                <div className="ml-auto max-w-[86%] rounded-3xl border border-neonRed/25 bg-neonRed/15 p-4">
                  Build a complete premium Android Notes app.
                </div>
                <div className="max-w-[92%] rounded-3xl border border-neonCyan/25 bg-neonCyan/10 p-4 text-slate-200">
                  Master Operator assigned Android Architect, UI/UX Designer, Code Generator, GitHub Actions Agent and Debugging Agent.
                </div>
                <div className="max-w-[92%] rounded-3xl border border-neonCyan/25 bg-neonCyan/10 p-4 text-slate-200">
                  Output plan ready: Room database, Compose screens, Material 3 theme, Gradle build and APK workflow.
                </div>
              </div>
              <div className="mt-5 flex gap-3 rounded-full border border-white/10 bg-black/25 p-2">
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask TeleClaw to build, debug, automate..."
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-slate-500"
                />
                <button className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-r from-neonRed to-neonCyan">
                  <Send size={18} />
                </button>
              </div>
            </div>

            <div id="terminal" className="glass rounded-[2rem] p-5">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-neonRed" />
                <span className="h-3 w-3 rounded-full bg-orange-400" />
                <span className="h-3 w-3 rounded-full bg-neonGreen" />
                <p className="ml-3 text-xs uppercase tracking-[0.2em] text-muted">teleclaw-terminal</p>
              </div>
              <pre className="min-h-[310px] whitespace-pre-wrap text-sm leading-7 text-[#7fffee]">{typed}</pre>
              <span className="inline-block h-5 w-2 animate-pulse bg-neonCyan" />
            </div>
          </section>

          <section id="agents">
            <div className="mb-5">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-neonCyan">Multi-Agent Dashboard</p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">Specialized execution agents</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {agents.map((agent) => (
                <motion.div
                  key={agent.name}
                  whileHover={{ y: -6 }}
                  className="glass rounded-3xl p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <agent.icon className="text-neonCyan" />
                    <span className="rounded-full border border-neonGreen/20 bg-neonGreen/10 px-3 py-1 text-xs font-bold text-neonGreen">
                      {agent.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-black">{agent.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{agent.role}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="workflows" className="glass rounded-[2rem] p-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-neonCyan">Workflow Builder</p>
                <h2 className="text-3xl font-black md:text-5xl">Automation graph</h2>
              </div>
              <button className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-black">Create Workflow</button>
            </div>
            <div className="grid gap-3 md:grid-cols-5">
              {workflows.map((flow, index) => (
                <div key={flow} className="relative rounded-3xl border border-white/10 bg-black/25 p-4">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-neonCyan/15 font-black text-neonCyan">
                    {index + 1}
                  </div>
                  <p className="text-sm font-bold">{flow}</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-neonRed to-neonCyan"
                      animate={{ width: ["35%", "92%", "55%"] }}
                      transition={{ duration: 3 + index * 0.2, repeat: Infinity }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
