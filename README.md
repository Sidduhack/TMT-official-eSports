# TMT OFFICIAL — Free Fire eSports

> My fans is my backbone.

TMT OFFICIAL is an India-focused Free Fire tournament platform. The project is being built as a production application, with public tournament discovery, player accounts, team management, match operations, and an administrator workspace.

## Project status

**Foundation stage — application features are not implemented yet.**

This repository currently contains the project rules and the initial frontend scaffold. Authentication, tournament registration, payments, match rooms, and admin operations must not be represented as working until their real implementations and tests exist.

## Technology direction

- React + TypeScript + Vite
- Tailwind CSS for styling (to be added with the design system)
- Supabase for PostgreSQL, Auth, Storage, Row Level Security, and Edge Functions
- Cloudflare Pages and Workers for deployment and server-side endpoints
- GSAP, Framer Motion, and React Three Fiber only where they add measurable value

Infrastructure must remain free-tier-first. Do not introduce paid services, usage-based services, or hidden costs without documenting the cost and obtaining approval.

## Local development

Requirements: Node.js 20.19+ or 22.12+, and npm.

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Product boundaries

- India-only Free Fire tournament operations.
- Planned formats: solo, duo, and squad; free and paid formats are separate capabilities.
- Paid-entry, payment collection, prize payouts, and related workflows stay disabled until applicable legal requirements, platform policies, and a suitable payment provider are verified.
- Team size is capped at six members. A player may belong to only one team. Team leadership controls must be enforced server-side.
- Sponsor placements appear only when valid sponsor content exists.
- Admins must be able to manage ordinary site content without editing source code.
- Every visible control must perform its stated action. Do not ship decorative or fake buttons.

## Security requirements

- Never commit API keys, access tokens, passwords, private keys, or production environment files.
- Never expose Supabase service-role credentials or other privileged secrets in browser code.
- Enforce authorization on the server and with Supabase Row Level Security. Client-side checks are not security boundaries.
- Validate all untrusted input on the server.
- Use least-privilege roles and auditable admin actions.
- Keep `.env.example` limited to placeholder variable names and safe example values.

## Project documentation

- [AGENTS.md](./AGENTS.md) — non-negotiable engineering and product rules.
- [agentinstructions.md](./agentinstructions.md) — agent roles, coordination, and verification workflow.

## Contribution rule

Work in small, reviewable increments. For each feature, define acceptance criteria, implement the real behavior, add tests, run checks, and report what is still incomplete. Never claim a deployment, integration, or test succeeded unless it was actually verified.
