"use client";

import { motion } from "framer-motion";
import { Bot, Paperclip, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

const initialMessages = [
  { from: "user", text: "Build a complete premium Android Notes app." },
  { from: "assistant", text: "Master Operator assigned Android Architect, UI/UX Designer, Code Generator, GitHub Actions Agent and Debugging Agent." },
  { from: "assistant", text: "Output plan ready: Room database, Compose screens, Material 3 theme, Gradle build and APK workflow." }
];

export function ChatPanel() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages((current) => [
      ...current,
      { from: "user", text: input.trim() },
      { from: "assistant", text: "TeleClaw received the task. Routing it through Planner, Builder, Debugger and Docs agents." }
    ]);
    setInput("");
  }

  return (
    <section id="chat">
      <GlassCard className="overflow-hidden">
        <div className="border-b border-white/10 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-3">
                <Bot className="text-neonCyan" />
                <h2 className="text-2xl font-black">AI Chat Workspace</h2>
              </div>
              <p className="mt-1 text-sm text-muted">Central operator console for building, debugging and automating.</p>
            </div>
            <StatusBadge label="OpenRouter Ready" tone="green" />
          </div>
        </div>

        <div className="max-h-[520px] space-y-4 overflow-y-auto p-5">
          {messages.map((message, index) => (
            <motion.div
              key={`${message.text}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[92%] rounded-3xl p-4 ${
                message.from === "user"
                  ? "ml-auto border border-neonRed/25 bg-neonRed/15"
                  : "border border-neonCyan/25 bg-neonCyan/10 text-slate-200"
              }`}
            >
              {message.from === "assistant" && (
                <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-neonCyan">
                  <Sparkles size={14} /> TeleClaw
                </div>
              )}
              <p className="text-sm leading-6">{message.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 p-4">
          <div className="flex gap-3 rounded-full border border-white/10 bg-black/25 p-2">
            <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300">
              <Paperclip size={18} />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask TeleClaw to build, debug, automate..."
              className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-slate-500"
            />
            <button onClick={sendMessage} className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-r from-neonRed to-neonCyan">
              <Send size={18} />
            </button>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
