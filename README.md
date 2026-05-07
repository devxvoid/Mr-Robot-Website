# TeleClaw Production Workspace

Production-grade Next.js + TailwindCSS + Framer Motion frontend for TeleClaw / Mr. Robot AI Agents.

## Includes

- Workspace shell
- Sidebar and mobile navigation
- AI chat console
- Multi-agent dashboard
- Live terminal simulation
- Workflow builder preview
- Project manager
- Android APK builder UI
- Provider-ready settings panel
- Telegram Mini App compatible viewport
- Static GitHub Pages export workflow

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is generated in:

```text
out/
```

## Deploy

The included workflow deploys automatically to GitHub Pages after pushing to `main`.

Go to:

```text
Settings → Pages → Source → GitHub Actions
```

Then run or push to trigger:

```text
.github/workflows/deploy-pages.yml
```
