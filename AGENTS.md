# AGENTS.md

Project conventions and architecture notes for AI coding assistants live in **[CLAUDE.md](CLAUDE.md)** — read it first.

The repo has two parts: the front-end app in [`web/`](web) and the tutorials in [`tutor/`](tutor). The browser loads the exported model at `web/public/models/me.glb`; Blender source files are not included or required at runtime. **All front-end code paths are relative to `web/`**, and npm commands run inside `web/`.

Quick start:

```bash
cd web
npm install
npm run dev   # http://localhost:5173
```
