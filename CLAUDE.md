# CLAUDE.md — kpauner Dev-as-a-Service Platform

Guidance for AI assistants working on this codebase. Read this before making changes.

## What we're building

**kpauner** is a dev-as-a-service business: clients pay a **monthly subscription** for ongoing product development. This repo is the unified platform — public marketing site plus a **client dashboard** where subscribers track their work.

| Surface | Audience | Purpose | Route prefix |
|---------|----------|---------|--------------|
| **Marketing site** | Public | Portfolio, credibility, lead gen | `/[locale]/` |
| **Client dashboard** | Subscription clients | See their projects, tasks, and progress | `/[locale]/dashboard/` |
| **Docs** | Reference | Tech stack used when building *client deliverables* | `/[locale]/docs/` |

The dashboard is **for clients**. Each logged-in client sees only their own projects and tasks. Your team manages content and delivery via PocketBase (and eventually admin tooling) — clients interact through the dashboard.

### Business model (how decisions should be judged)

Clients pay monthly for ongoing development. The dashboard should make that relationship feel **transparent and professional** — they can see what's in progress without chasing updates by email.

When choosing between implementations, prefer:

1. **Client clarity** — clients understand project status, what's done, and what's next at a glance.
2. **Scoped access** — clients only see their own data; never another subscriber's projects or tasks.
3. **Low friction** — simple project/task views, not enterprise PM software.
4. **Incremental delivery** — ship working slices (tasks page → PocketBase → auth → tenancy) rather than big-bang features.

### Dashboard nav (confirmed vs TBD)

The sidebar in `src/hooks/use-dashboard-nav.ts` is a **shadcn template starting point**. Don't treat every item as a committed feature.

**Confirmed (build these):**

| Item | Why (client perspective) |
|------|---------------------------|
| **Projects** | The products/repos they're paying you to build and maintain. Hub entity everything else hangs off. |
| **Tasks** | Work in flight on their projects — status, priority, due dates. Already started (`src/features/tasks/`). |

**Maybe later (don't build unless asked):**

| Item | Notes |
|------|-------|
| Timeline | Milestones/delivery schedule — only if tasks alone aren't enough |
| Team | Who is working on their account (you + your team) |
| Capture / Proposals / Prompts | Template leftovers; revisit if clients need intake or scoping views |

When adding nav items, ask: **would a paying subscriber find this useful?**

**Suggested data model:**

```
Client (subscriber, auth user)
  └── Project(s)
        └── Task(s)
```

A client can have multiple projects if their subscription covers more than one product. All dashboard queries must be scoped to the authenticated client's records.

---

## Tech stack

### This project (kpauner platform)

**PocketBase is the backend for everything** — marketing content, dashboard entities, and auth. Do not introduce a second database for this repo.

- Next.js 15 (App Router), React 19, TypeScript
- PocketBase — all data storage, API, and authentication
- TanStack Query — client-side data fetching
- Zod — validation at feature boundaries
- shadcn/ui + Tailwind — UI
- next-intl — i18n (`en`, `da` default, `ja`)
- Resend — contact form email
- Fumadocs — `/docs` pages

### Client deliverables (what you build for subscribers)

`content/docs/stack.mdx` documents the stack you **ship to clients** (Drizzle, Hono, Auth.js, etc.). That is reference material for deliverables — not a migration roadmap for this platform. Don't conflate the two.

---

## Current state (be honest about this)

### Done or in progress

- Marketing pages: home, posts, projects, contact sheet
- PocketBase integration for posts, categories, portfolio projects (`src/data-access/`)
- Dashboard shell: sidebar, header, layout
- Tasks feature with drag-and-drop table, Zod schema, faceted filters
- Fumadocs for `/docs`
- shadcn/ui component library

### Not built yet (don't assume they exist)

- **Authentication** — dashboard is currently open; must be PocketBase auth before production
- **Client data scoping** — no tenancy; clients would see all data today
- **Live PocketBase collections for tasks/projects** — tasks still use `tasks-data.json`; main dashboard uses `data.json`
- **Billing UI** — subscriptions are managed outside the app for now

---

## Repository layout

```
src/
├── app/[locale]/
│   ├── dashboard/         # Client portal (authenticated subscribers)
│   ├── docs/              # Client-project stack reference
│   ├── posts/             # Blog
│   └── projects/          # Portfolio case studies (public)
├── components/            # Shared UI (ui/ = shadcn primitives)
├── features/              # Domain modules (preferred for new work)
│   └── <domain>/
│       ├── api/           # PocketBase fetchers / query keys
│       ├── components/
│       ├── hooks/
│       └── types/
├── data-access/           # Server-side PocketBase queries
├── hooks/                 # App-wide hooks (e.g. use-dashboard-nav)
├── i18n/                  # messages/*.json, routing
├── lib/                   # env, pocketbase, providers, utils
└── types/
content/docs/              # MDX — stack reference for client deliverables
```

### Conventions

- **New dashboard features** → `src/features/<name>/` with colocated components, hooks, and Zod schemas.
- **All data** → PocketBase collections. Server reads in `src/data-access/`; client reads in `src/features/<name>/api/` with TanStack Query.
- **Tenancy** → every dashboard query filters by the authenticated client's ID. Enforce in PocketBase collection rules, not just the UI.
- **UI primitives** → `src/components/ui/` (shadcn). Don't duplicate.
- **Translations** → add keys to all three locale files: `src/i18n/messages/{en,da,ja}.json`.
- **Env vars** → `src/lib/env.ts` via `@t3-oss/env-nextjs`. Never read `process.env` directly elsewhere.
- **Paths** → use `@/` alias imports.

### Dashboard page pattern

Dashboard routes render their own `AppSidebar` + `SidebarInset`. Layout only provides `SidebarProvider`. New pages should follow `dashboard/tasks/page.tsx`.

### Data validation

Define Zod schemas at the feature boundary. Tasks example in `src/features/tasks/components/tasks-table.tsx`:

```ts
export const schema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.enum(["todo", "in-progress", "done", "blocked"]),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  // ...
});
```

Mirror PocketBase collection fields in these schemas.

---

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint
```

Requires `.env`:

- `NEXT_PUBLIC_API_URL` — PocketBase instance URL
- `RESEND_API_KEY` — contact form email

---

## How to extend the platform

### Priority order

1. **Auth** — PocketBase auth on `/dashboard/*`; clients log in, team uses admin/PocketBase UI
2. **Projects** — PocketBase collection + dashboard page, scoped to authenticated client
3. **Tasks → PocketBase** — replace `tasks-data.json`, link tasks to projects, scoped to client
4. **PocketBase collection rules** — server-side enforcement so clients can't access other subscribers' data
5. Everything else only when explicitly requested

### Adding a dashboard section

1. Add route: `src/app/[locale]/dashboard/<name>/page.tsx`
2. Create feature module: `src/features/<name>/`
3. Define PocketBase collection + access rules (client can only read their own records)
4. Wire nav URL in `use-dashboard-nav.ts` (real path, e.g. `/dashboard/projects`)
5. Add i18n keys under `dashboard.nav.*`

### PocketBase collections (suggested starting schema)

```
clients        — name, contactEmail, status (active/paused/churned), logo?
projects       — client (relation), name, slug, status, description
tasks          — project (relation), title, status, priority, dueDate
users          — PocketBase auth; linked to a client record
```

- **Clients** see projects and tasks for their account only.
- **Team** creates/updates records via PocketBase admin (or future internal admin UI).
- Set PocketBase API rules to enforce `client = @request.auth.client` (or equivalent).

### Adding auth

- Use **PocketBase auth** — it's already your backend
- Gate `/dashboard/*` behind login; redirect unauthenticated users
- Marketing site stays public
- Each auth user maps to one client (subscriber) account
- Don't ship dashboard to production without auth + collection rules

---

## UI & UX standards

- **Design system**: shadcn + Tailwind. Match existing dashboard patterns.
- **Client-facing tone**: clear, calm, professional — no internal jargon in labels or statuses.
- **Dark mode**: supported via `next-themes`; test both modes.
- **Mobile**: use `useIsMobile` for responsive tables/drawers.
- **Animations**: GSAP on marketing pages only; dashboard stays utilitarian.
- **Toasts**: `sonner` for feedback.
- **Forms**: `react-hook-form` + `@hookform/resolvers/zod`.

---

## i18n rules

- Default locale is **Danish (`da`)**.
- Dashboard strings via `useTranslations("dashboard")` or server `getTranslations`.
- Add all three locales when introducing new copy.

---

## What NOT to do

- Don't expose cross-client data — tenancy is non-negotiable.
- Don't add nav items from the template unless they'd help a subscriber.
- Don't introduce Drizzle/Postgres/Hono into *this* repo — that's for client deliverables.
- Don't expand into full billing/CRM unless asked.
- Don't commit `.env`, API keys, or `.next/`.
- Don't create markdown docs the user didn't ask for.
- Don't use `href="#"` for nav items you're actively building.
- Don't break locale routing: all pages live under `[locale]/`.

---

## Operational context

| Client question | Dashboard answer |
|----------------|------------------|
| "What's happening on my project?" | Project view → task list with statuses |
| "What's done vs in progress?" | Tasks filtered by status |
| "I have multiple products with you" | Projects list, each with its own tasks |
| "Who's working on this?" | Team page (if built) or task assignee field |

**Onboarding a new subscriber:** create client record in PocketBase → create auth user linked to client → create project(s) → seed initial tasks → send login credentials.

---

## Open questions (update as decisions are made)

- [ ] PocketBase auth flow (email/password? magic link?)
- [ ] Can clients create tasks, or view-only?
- [ ] Per-client branding in dashboard (logo, name) vs generic kpauner branding
- [ ] Exact fields for clients / projects / tasks collections
- [ ] Trim sidebar nav to Projects + Tasks — remove template clutter?
- [ ] GitHub/GitLab linking (task ↔ PR) visible to clients?

When implementing something that depends on an open question, ask the user or pick the smallest reversible option.

---

## Brand

- Site title: **kpauner**
- Dashboard brand string is placeholder **"Acme Inc."** in i18n — should become the **client's company name** once per-tenant branding lands.
- Tone: marketing is personal/UX-forward; dashboard is clear, calm, and client-appropriate.
