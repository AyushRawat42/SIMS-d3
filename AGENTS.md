# AGENTS.md

## Cursor Cloud specific instructions

This is a pnpm workspace monorepo (Node.js 24). Standard commands live in `replit.md`,
root `package.json` scripts, and each artifact's `.replit-artifact/artifact.toml`. Notes
below are the non-obvious gotchas for running it in the cloud environment.

### Services

- `@workspace/sims-homepage` (`artifacts/sims-homepage`) — primary product, a React 19 + Vite
  marketing homepage for Sushila Institute of Medical Sciences. The "Apply Now" admission
  form is currently a client-side mock (simulated submit, no backend call).
- `@workspace/api-server` (`artifacts/api-server`) — Express 5 API scaffold; only exposes
  `GET /api/healthz` today. Homepage does not call it.
- `@workspace/mockup-sandbox` (`artifacts/mockup-sandbox`) — Replit design-preview dev tool.
- `lib/*` — shared libs (`db` Drizzle/Postgres with empty schema, `api-spec` OpenAPI, generated
  `api-client-react` / `api-zod`). No long-running processes; built as dependencies.

### Node version gotcha

The exec-daemon injects its own Node 22 (`/exec-daemon/node`) at the front of `PATH`, which
shadows nvm. Login shells (`bash -l`) prepend nvm's Node 24 so `node` resolves to v24; the
tmux sessions used to run services start with `bash -l`. If you spawn a service and see the
wrong Node, run it from a login shell.

### Frontends require PORT and BASE_PATH env vars

`artifacts/sims-homepage/vite.config.ts` and `artifacts/mockup-sandbox/vite.config.ts` throw
if `PORT` or `BASE_PATH` is unset — this applies to BOTH `dev` and `build`. Because of this,
plain `pnpm run build` at the repo root fails on the Vite artifacts. Build/run them with the
env vars set (values come from each artifact's `.replit-artifact/artifact.toml`):

- Homepage dev: `PORT=20982 BASE_PATH=/ pnpm --filter @workspace/sims-homepage run dev`
- Homepage build: `PORT=20982 BASE_PATH=/ pnpm --filter @workspace/sims-homepage run build`
- API dev (builds then starts, `/api/healthz`): `PORT=8080 pnpm --filter @workspace/api-server run dev`
- Mockup dev: `PORT=8081 BASE_PATH=/__mockup pnpm --filter @workspace/mockup-sandbox run dev`

### Lint / test / build

There are no `lint` or `test` scripts anywhere. Verification is `pnpm run typecheck` (works at
root, no env vars needed) plus building/running the relevant artifact with the env vars above.

### Database

`DATABASE_URL` (Postgres) is only needed for `@workspace/db` / `drizzle-kit push`. The schema
is an empty placeholder and no running service depends on Postgres today, so it is not required
to run or test the homepage or API.
