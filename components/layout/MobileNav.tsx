"use client";

import { navItems } from "@/data/workspace";

type MobileNavProps = {
  active: string;
  setActive: (id: string) => void;
};

export function MobileNav({ active, setActive }: MobileNavProps) {
  return (
    <nav className="safe-bottom fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-void/90 px-2 py-2 backdrop-blur-2xl lg:hidden">
      <div className="grid grid-cols-5 gap-1">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const selected = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id);
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[10px] font-bold ${
                selected ? "bg-neonCyan/12 text-neonCyan" : "text-slate-400"
              }`}
            >
              <Icon size={18} />
              {item.label.split(" ")[0]}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
