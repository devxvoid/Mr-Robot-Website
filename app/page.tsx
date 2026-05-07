"use client";

import { WorkspaceShell } from "@/components/layout/WorkspaceShell";
import { HeroDashboard } from "@/components/workspace/HeroDashboard";
import { ChatPanel } from "@/components/workspace/ChatPanel";
import { AgentGrid } from "@/components/workspace/AgentGrid";
import { TerminalPanel } from "@/components/workspace/TerminalPanel";
import { WorkflowPanel } from "@/components/workspace/WorkflowPanel";
import { ProjectBuildPanel } from "@/components/workspace/ProjectBuildPanel";
import { SettingsPanel } from "@/components/workspace/SettingsPanel";

export default function Page() {
  return (
    <WorkspaceShell>
      <HeroDashboard />
      <div className="grid gap-6 xl:grid-cols-[.92fr_1.08fr]">
        <ChatPanel />
        <TerminalPanel />
      </div>
      <AgentGrid />
      <WorkflowPanel />
      <ProjectBuildPanel />
      <SettingsPanel />
    </WorkspaceShell>
  );
}
