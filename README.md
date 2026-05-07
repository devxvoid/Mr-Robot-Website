# TeleClaw Next Workspace

Professional Next.js + TailwindCSS + Framer Motion frontend for TeleClaw / Mr. Robot AI Agents.

## Features

- Responsive cyberpunk workspace UI
- Sidebar navigation
- AI chat workspace
- Multi-agent dashboard
- Live terminal simulation
- Workflow builder preview
- Telegram Mini App friendly viewport
- Static export compatible for GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Because `next.config.mjs` uses `output: "export"`, the static site is generated in:

```text
out/
```

## Deploy to GitHub Pages

Upload the exported `out/` contents to GitHub Pages, or use a GitHub Actions workflow to deploy automatically.
