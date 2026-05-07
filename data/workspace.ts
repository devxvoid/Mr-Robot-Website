import {
  Bot,
  Bug,
  Code2,
  Database,
  FileText,
  GitBranch,
  Hammer,
  LayoutDashboard,
  Palette,
  Rocket,
  Settings,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  Workflow,
  Zap
} from "lucide-react";

export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "chat", label: "AI Chat", icon: Bot },
  { id: "agents", label: "Agents", icon: Zap },
  { id: "terminal", label: "Terminal", icon: TerminalSquare },
  { id: "workflows", label: "Workflows", icon: Workflow },
  { id: "projects", label: "Projects", icon: Rocket },
  { id: "settings", label: "Settings", icon: Settings }
];

export const agents = [
  {
    name: "Master Operator",
    role: "Plans tasks, routes agents, merges outputs and returns final production-ready results.",
    status: "Online",
    health: 98,
    task: "Coordinating workspace launch",
    icon: Bot,
    accent: "cyan"
  },
  {
    name: "Android Engineer",
    role: "Builds Kotlin, Compose, Material 3, Room, Gradle and GitHub Actions APK pipelines.",
    status: "Ready",
    health: 94,
    task: "Preparing APK build panel",
    icon: Smartphone,
    accent: "green"
  },
  {
    name: "UI/UX Designer",
    role: "Creates premium cyberpunk dashboards, responsive layouts and motion-rich product screens.",
    status: "Designing",
    health: 91,
    task: "Polishing workspace panels",
    icon: Palette,
    accent: "violet"
  },
  {
    name: "Debugging Agent",
    role: "Reads logs, screenshots, terminal output and Gradle failures to identify root cause fixes.",
    status: "Scanning",
    health: 88,
    task: "Monitoring runtime logs",
    icon: Bug,
    accent: "amber"
  },
  {
    name: "GitHub Actions Agent",
    role: "Creates CI/CD workflows, artifacts, logs, static exports and deployment pipelines.",
    status: "Ready",
    health: 96,
    task: "Pages deployment workflow",
    icon: GitBranch,
    accent: "cyan"
  },
  {
    name: "Docs Agent",
    role: "Generates README.md, prompts, release notes, changelogs and architecture documentation.",
    status: "Online",
    health: 90,
    task: "Documenting workspace modules",
    icon: FileText,
    accent: "green"
  }
];

export const terminalLines = [
  "> teleclaw workspace boot sequence started",
  "> loading mr.robot agent kernel ............. OK",
  "> connecting telegram mini app bridge ....... OK",
  "> syncing android build pipeline ............ OK",
  "> mounting workflow graph ................... OK",
  "> preparing terminal runtime ................ OK",
  "> checking provider layer: openrouter ....... READY",
  "> checking provider layer: ollama ........... READY",
  "> checking provider layer: nvidia nim ....... READY",
  "> status: workspace ready"
];

export const workflowNodes = [
  { title: "Prompt Intake", description: "User request is normalized and scoped.", state: "Complete", icon: Code2 },
  { title: "Agent Routing", description: "Master Operator selects specialist agents.", state: "Active", icon: Bot },
  { title: "Build Plan", description: "Architecture and implementation plan is created.", state: "Active", icon: Workflow },
  { title: "Code Output", description: "Full files, configs and workflows are generated.", state: "Queued", icon: FileText },
  { title: "Quality Gate", description: "Debugging and safety checks validate the output.", state: "Queued", icon: ShieldCheck }
];

export const projects = [
  { name: "NotesPro Android", type: "Android APK", progress: 78, status: "Building", icon: Smartphone },
  { name: "TeleClaw Mini App", type: "Telegram Web App", progress: 92, status: "Live", icon: Rocket },
  { name: "Agent Runtime", type: "AI Orchestration", progress: 64, status: "Design", icon: Database },
  { name: "CI/CD Workflows", type: "GitHub Actions", progress: 83, status: "Ready", icon: Hammer }
];

export const buildTimeline = [
  "Project selected: NotesPro",
  "Gradle wrapper detected",
  "Compose compiler configured",
  "Room schema validated",
  "assembleDebug queued",
  "APK artifact target prepared"
];
