# AGENTS.md — TMT OFFICIAL

These rules apply to every contributor and coding agent working in this repository. If a task conflicts with these rules, stop and explain the conflict before changing code.

## 1. Product truth

- Build a production-grade India-focused Free Fire tournament platform.
- Do not fabricate users, matches, tournament results, sponsors, payment confirmations, statistics, or testimonials.
- Do not use mock data in production flows. Clearly label fixtures and seeded development data.
- A feature is not complete merely because its screen exists. Its data flow, authorization, failure states, and tests must work.
- Every visible button, link, menu item, and form control must have a meaningful implemented action. Remove or explicitly disable unfinished controls.

## 2. Planned product areas

- Public home and tournament discovery: `/`, `/matches`, `/matches/:id`.
- Account and player area: authentication, `/dashboard`, `/my-matches`, `/profile`.
- Match operations: `/room` and related match lifecycle workflows.
- Administration: `/admin`, with role-based permissions and audit history.
- Tournament formats: solo, duo, and squad.
- Team rules: maximum six members, one team membership per player, and server-enforced leader permissions.
- Sponsor banners render only when an active, valid sponsor record is available.

These are product targets, not claims that the routes or capabilities already exist.

## 3. Payments and compliance gate

Paid-entry tournaments, payment collection, refunds, prize distribution, and payouts must remain unavailable by default. Do not implement or enable these flows until the project owner has verified applicable Indian legal requirements, game/platform rules, provider terms, KYC/settlement requirements, and operational controls. Record the verification and approval before enabling the capability. Never simulate a successful payment.

## 4. Architecture

- Keep UI, domain logic, data access, and server-side operations separated.
- Use TypeScript strict mode. Avoid `any`; if unavoidable, isolate it and explain why.
- Treat Supabase as the planned system of record: PostgreSQL, Auth, Storage, RLS, and Edge Functions.
- Put privileged operations in trusted server-side code or Edge Functions.
- Use database constraints and transactions for invariants such as unique player team membership and slot allocation.
- Keep authorization rules close to the data they protect. RLS is mandatory for exposed Supabase tables.
- Keep provider-specific code behind small adapters so infrastructure can be changed without rewriting domain logic.
- Avoid unnecessary dependencies, oversized abstractions, and premature microservices.

## 5. Security and privacy

- Never commit secrets or real user personal data.
- Never put Supabase service-role keys, private API credentials, or payment secrets in frontend bundles.
- Validate and authorize every mutation on the server; do not trust client-supplied roles, prices, slot counts, or payment status.
- Use least privilege, secure session handling, rate limits where appropriate, and audit logs for sensitive admin actions.
- Do not log passwords, access tokens, payment credentials, or unnecessary personal information.
- Provide safe error messages to users; keep sensitive diagnostic detail server-side.
- Review dependency and configuration changes for security impact.

## 6. UX and visual direction

- Visual direction: black/nocturne esports identity, Inter/Inter Tight typography, strong editorial scale, restrained grain/vignette, glass surfaces, and purposeful motion.
- Responsive behavior is required for mobile, tablet, and desktop.
- Motion and sound must respect reduced-motion and user preference settings. Sound must never autoplay unexpectedly.
- Maintain keyboard access, visible focus, semantic HTML, and sufficient contrast.
- 3D/WebGL is optional enhancement, never a blocker for core navigation or low-powered devices.
- Performance and accessibility take priority over decorative effects.

## 7. Engineering quality

- Add or update tests for changed behavior.
- Run lint, typecheck, tests, and production build when those scripts exist.
- Do not suppress errors or weaken tests just to obtain a green check.
- Handle loading, empty, success, validation, and failure states.
- Keep migrations versioned and reversible where practical.
- Update documentation and `.env.example` when configuration changes.
- Never report checks as passed unless they were run and passed.

## 8. Git discipline

- Make focused commits with descriptive messages.
- Do not force-push, rewrite history, or delete user work without explicit approval.
- Inspect the target branch before writing. Do not overwrite existing files blindly.
- Prefer feature branches and pull requests for substantial features; keep changes reviewable.
- Do not merge a pull request unless explicitly asked.

## 9. Definition of done

A task is done only when:
1. Acceptance criteria are met.
2. The real behavior is implemented; no fake success path remains.
3. Authorization, validation, and failure handling are covered.
4. Relevant tests and static checks pass, or the exact blocker is reported.
5. Documentation and configuration examples are current.
6. Remaining limitations and deferred work are stated plainly.
