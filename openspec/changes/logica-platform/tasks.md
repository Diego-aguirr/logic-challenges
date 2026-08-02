# Tasks: Logica Next.js Platform Migration

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 2400–3000 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | 6 work units |
| Delivery strategy | ask-on-risk |
| Chain strategy | feature-branch-chain |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Scaffold + layout + dark theme | PR 1 | Base: feature/logica-platform. Next.js init, Tailwind, shadcn, layout, Header, Footer, globals.css. ~350 lines |
| 2 | Exercise data model + browser | PR 2 | Base: PR 1 branch. Types, data.ts, ExerciseCard, ExerciseList, DifficultyBadge, page. ~400 lines |
| 3 | Monaco editor + sandbox | PR 3 | Base: PR 2 branch. CodeEditor, RunButton, OutputPanel, sandbox.ts, runner.ts, worker. ~500 lines |
| 4 | Exercise view + hints + results | PR 4 | Base: PR 3 branch. Exercise page, TestResults, HintsSystem. ~350 lines |
| 5 | Supabase auth + progress | PR 5 | Base: PR 4 branch. Supabase clients, auth, progress page, user_progress table. ~450 lines |
| 6 | AdSense + polish + a11y | PR 6 | Base: PR 5 branch. AdBanner, a11y fixes, metadata, final QA. ~250 lines |

---

## Phase 1: Project Setup

- [ ] 1.1 Init Next.js 15 project with TypeScript and App Router (`npx create-next-app@latest logica --ts --app --tailwind --eslint`)
- [ ] 1.2 Install and configure shadcn/ui (`npx shadcn@latest init`, set dark theme, add `button`, `card`, `badge` components)
- [ ] 1.3 Create `styles/globals.css` with CSS variables: `--bg:#0f172a`, `--surface:#1e293b`, `--primary:#3b82f6`, `--text:#f8fafc`, category colors
- [ ] 1.4 Create `app/layout.tsx`: root layout with Inter + JetBrains Mono fonts, dark body, metadata (title: "Lógica — Practicá programación", description in Spanish)
- [ ] 1.5 Create `components/layout/Header.tsx`: sticky header, logo left, category nav links center, placeholder auth area right. Mobile hamburger menu with focus trap
- [ ] 1.6 Create `components/layout/Footer.tsx`: copyright, links (GitHub, About), "Hecho con ❤️ en español"
- [ ] 1.7 Create `app/page.tsx`: landing page with hero ("Practicá lógica de programación"), CTA button → /ejercicios

## Phase 2: Exercise Data Model

- [ ] 2.1 Create `lib/exercises/types.ts`: `Category`, `Difficulty`, `TestCase`, `Exercise`, `TestResult`, `ExecutionResult` interfaces
- [ ] 2.2 Create `lib/exercises/data.ts`: define 37+ exercises as TS constants with id, title, category, difficulty, description (markdown), example, solution, hints, starterCode, testCases. Start with 3-5 "fundamentos" exercises to validate the model
- [ ] 2.3 Create `lib/exercises/data.ts`: add remaining exercises in batches (cadenas, arreglos, objetos, logica)
- [ ] 2.4 Create `components/exercises/DifficultyBadge.tsx`: color-coded badge (facil=green, medio=yellow, dificil=red)
- [ ] 2.5 Create `components/exercises/ExerciseCard.tsx`: card with title, category badge, difficulty badge, completion checkmark (optional), link to /ejercicios/[id]
- [ ] 2.6 Create `components/exercises/ExerciseList.tsx`: responsive grid (1-col mobile, 2-col tablet, 3-col desktop), category filter tabs, difficulty dropdown
- [ ] 2.7 Create `app/ejercicios/page.tsx`: exercise browser page using ExerciseList, loading state, empty state ("No se encontraron ejercicios")

## Phase 3: Monaco Editor + Sandbox

- [ ] 3.1 Create `lib/validation/sandbox.ts`: iframe sandbox creation with `srcdoc`, `postMessage` communication, 5s timeout, message handler for code execution
- [ ] 3.2 Create `workers/sandbox.worker.ts`: Web Worker that receives code via `postMessage`, evals in isolated scope, posts results back. Block DOM/network access
- [ ] 3.3 Create `lib/validation/runner.ts`: `runExercise(code, testCases)` — sends code to sandbox, collects results, compares outputs (deep equality), returns `ExecutionResult`
- [ ] 3.4 Create `components/editor/CodeEditor.tsx`: Monaco wrapper with `next/dynamic` (ssr: false), JS syntax highlighting, dark theme, Ctrl+Enter binding, textarea fallback for mobile
- [ ] 3.5 Create `components/editor/RunButton.tsx`: "Ejecutar" button, disabled during execution, loading spinner, empty code warning ("Escribí tu solución antes de ejecutar")
- [ ] 3.6 Create `components/editor/OutputPanel.tsx`: scrollable results area, green banner for all-pass, red banner for failures with expected/actual display

## Phase 4: Exercise Flow

- [ ] 4.1 Create `components/validation/TestResults.tsx`: per-test pass/fail rows, expected vs actual on failure, Spanish error messages ("Hay un error de sintaxis", "Tu código tardó demasiado")
- [ ] 4.2 Create `components/validation/HintsSystem.tsx`: first hint visible by default, "Ver siguiente pista" button reveals one at a time, all hints in Spanish
- [ ] 4.3 Create `app/ejercicios/[id]/page.tsx`: exercise view with sections in order — title+description (markdown), example (collapsible), editor+execute, results, solution toggle ("Ver solución"/"Ocultar solución"), hints, prev/next navigation
- [ ] 4.4 Add `generateStaticParams` to exercise page for static generation of all exercise IDs
- [ ] 4.5 Add prev/next navigation ("Anterior"/"Siguiente") with wrap-around, respecting current filter context

## Phase 5: Supabase Auth + Progress

- [ ] 5.1 Create Supabase project (free tier), create `user_progress` table: `user_id` UUID, `exercise_id` TEXT, `completed_at` TIMESTAMPTZ
- [ ] 5.2 Create `lib/supabase/client.ts`: browser Supabase client with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] 5.3 Create `lib/supabase/server.ts`: server-side Supabase client for SSR/auth
- [ ] 5.4 Create auth components: login form, signup form, Google OAuth button, guest mode button ("Continuar como invitado"). Error messages in Spanish
- [ ] 5.5 Wire auth into Header: show login/signup buttons for guests, avatar+menu for logged-in users
- [ ] 5.6 Implement progress tracking: "Marcar como completado" button on exercise page, saves to `user_progress` table. Load progress on login sync
- [ ] 5.7 Create `app/progreso/page.tsx`: progress dashboard with total completed, streak, favorite category, progress bar per category
- [ ] 5.8 Update `app/ejercicios/page.tsx`: show completion checkmarks on ExerciseCards, add progress bar at top for logged-in users

## Phase 6: AdSense + Polish

- [ ] 6.1 Create `components/ads/AdBanner.tsx`: AdSense slot with `next/script strategy="lazyOnload"`, fixed min-height for CLS prevention, "Publicidad" label, placeholder div when blocked
- [ ] 6.2 Add AdBanner to exercise view: sidebar on desktop (>=1024px), between description and editor on mobile
- [ ] 6.3 Add conditional ad-free flag: logged-in users see ads hidden if `adFree` true (default false)
- [ ] 6.4 Accessibility audit: verify semantic HTML, ARIA labels, keyboard nav, focus management, contrast ratios (4.5:1+), `aria-live="polite"` on test results
- [ ] 6.5 Performance check: run Lighthouse, verify ≥90 on performance/accessibility/best practices. Confirm Monaco lazy-loads, bundle < 250KB first load
- [ ] 6.6 Final QA: all 37+ exercises load and validate correctly, Spanish UI complete (zero English strings), prev/next navigation works, responsive layout verified on mobile/tablet/desktop
