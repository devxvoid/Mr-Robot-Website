type StatusBadgeProps = {
  label: string;
  tone?: "cyan" | "green" | "red" | "amber" | "violet";
};

const tones = {
  cyan: "border-neonCyan/25 bg-neonCyan/10 text-neonCyan",
  green: "border-neonGreen/25 bg-neonGreen/10 text-neonGreen",
  red: "border-neonRed/25 bg-neonRed/10 text-neonRed",
  amber: "border-neonAmber/25 bg-neonAmber/10 text-neonAmber",
  violet: "border-violetPulse/25 bg-violetPulse/10 text-violetPulse"
};

export function StatusBadge({ label, tone = "cyan" }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] ${tones[tone]}`}>
      <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
      {label}
    </span>
  );
}
