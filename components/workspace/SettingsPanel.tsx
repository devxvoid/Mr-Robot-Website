import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function SettingsPanel() {
  return (
    <section id="settings">
      <GlassCard className="p-6">
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-neonCyan">Settings & Utility</p>
          <h2 className="text-3xl font-black md:text-5xl">Provider-ready shell</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
            The frontend is prepared for future connection with Node.js, Express, Supabase/Firebase,
            OpenRouter, OpenAI, Ollama, NVIDIA NIM and local AI model systems.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {["OpenRouter", "OpenAI", "Ollama", "NVIDIA NIM"].map((provider, index) => (
            <div key={provider} className="rounded-3xl border border-white/10 bg-black/25 p-4">
              <StatusBadge label={index < 2 ? "Ready" : "Planned"} tone={index < 2 ? "green" : "amber"} />
              <h3 className="mt-4 font-black">{provider}</h3>
              <p className="mt-1 text-xs leading-5 text-slate-400">Provider card prepared for backend integration.</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
