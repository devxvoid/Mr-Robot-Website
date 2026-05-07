"use client";

import { ReactNode, useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { MobileNav } from "./MobileNav";

export function WorkspaceShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    const sections = ["dashboard", "chat", "agents", "terminal", "workflows", "projects", "settings"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: 0.22 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <section className="min-h-screen lg:pl-72">
        <TopBar />
        <div className="space-y-6 p-4 pb-28 md:p-8 lg:pb-8">
          {children}
        </div>
      </section>
      <MobileNav active={active} setActive={setActive} />
    </>
  );
}
