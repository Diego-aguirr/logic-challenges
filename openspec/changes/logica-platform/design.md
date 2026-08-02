# Design: Logica Next.js Platform Migration

## Technical Approach

Greenfield Next.js 15 App Router project with TypeScript. Exercises are defined as typed JSON objects loaded at build time (static generation) and runtime (dynamic filters). Code execution uses a Web Worker for isolation + an iframe sandbox as secondary containment. Monaco Editor is dynamically imported only on exercise pages. All user-facing text in Spanish. Dark theme via CSS variables + shadcn/ui.

## Architecture Decisions

| Decision | Option A | Option B | Option C | Tradeoff | Choice |
|----------|----------|----------|----------|----------|--------|
| Code execution | `eval()` inline | Web Worker only | Web Worker + iframe | A is insecure; B lacks DOM isolation for future expansion; C is most robust | Worker + iframe |
| Editor | Monaco | CodeMirror 6 | Plain textarea | Monaco is heavier (~2MB) but best DX; CM6 lighter but less familiar; textarea too basic | Monaco (lazy) |
| Exercise data | JSON files in `public/` | TypeScript constants | Supabase table | JSON is simplest for static exercises; TS gives type safety; Supabase adds runtime dependency | TS constants + JSON fallback |
| Styling | Tailwind v4 + shadcn | CSS Modules | Styled-components | Tailwind+shadcn matches spec, dark theme built-in, fastest to build | Tailwind v4 + shadcn |
| Auth/DB | Supabase | Firebase | Custom | Supabase has free tier, good DX, SQL familiar | Supabase |
| State mgmt | React context + hooks | Zustand | Redux | Context is sufficient for exercise state; Zustand if complexity grows | React context (start) |

## Data Flow

```
                    ┌─────────────┐
                    │ Exercise DB │ (TS constants in lib/exercises/data.ts)
                    └──────┬──────┘
                           │ static import
                    ┌──────▼──────┐
                    │  Next.js    │ SSR/SSG → React components
                    │  App Router │
                    └──────┬──────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   ┌──────────┐     ┌──────────┐     ┌──────────┐
   │ Exercise │     │  Code    │     │  User    │
   │ Browser  │     │  Editor  │     │ Progress │
   │ (list)   │     │ (Monaco) │     │(Supabase)│
   └──────────┘     └────┬─────┘     └──────────┘
                         │ Ctrl+Enter
                   ┌─────▼─────┐
                   │  Web      │ postMessage
                   │  Worker   │──────────┐
                   └─────┬─────┘          │
                         │ eval sandbox   │
                   ┌─────▼─────┐    ┌─────▼─────┐
                   │  iframe   │    │  Results  │
                   │  sandbox  │    │  Panel    │
                   └───────────┘    └───────────┘
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `app/layout.tsx` | Create | Root layout: dark theme, Header, Footer, metadata |
| `app/page.tsx` | Create | Landing page with hero + CTA |
| `app/ejercicios/page.tsx` | Create | Exercise browser with filters |
| `app/ejercicios/[id]/page.tsx` | Create | Exercise view (editor + validation) |
| `app/progreso/page.tsx` | Create | User progress dashboard |
| `components/layout/Header.tsx` | Create | Sticky header with nav, mobile menu |
| `components/layout/Footer.tsx` | Create | Footer with links, copyright |
| `components/exercises/ExerciseCard.tsx` | Create | Card with title, badges, completion |
| `components/exercises/ExerciseList.tsx` | Create | Grid + filter controls |
| `components/exercises/DifficultyBadge.tsx` | Create | Color-coded difficulty label |
| `components/editor/CodeEditor.tsx` | Create | Monaco wrapper, lazy-loaded |
| `components/editor/OutputPanel.tsx` | Create | Test results display |
| `components/editor/RunButton.tsx` | Create | Execute button with loading state |
| `components/validation/TestResults.tsx` | Create | Pass/fail results with expected/actual |
| `components/validation/HintsSystem.tsx` | Create | Progressive hints |
| `components/ads/AdBanner.tsx` | Create | AdSense slot with placeholder |
| `lib/exercises/types.ts` | Create | Exercise, TestCase, Difficulty, Category types |
| `lib/exercises/data.ts` | Create | Exercise definitions (TS constants) |
| `lib/validation/sandbox.ts` | Create | iframe sandbox creation + communication |
| `lib/validation/runner.ts` | Create | Test case runner, comparison logic |
| `lib/supabase/client.ts` | Create | Browser Supabase client |
| `lib/supabase/server.ts` | Create | Server-side Supabase client |
| `workers/sandbox.worker.ts` | Create | Web Worker for code isolation |
| `styles/globals.css` | Create | Tailwind imports, CSS variables, dark theme |

## Interfaces / Contracts

```typescript
// lib/exercises/types.ts
type Category = 'cadenas' | 'arreglos' | 'objetos' | 'logica' | 'fundamentos'
type Difficulty = 'facil' | 'medio' | 'dificil'

interface TestCase {
  input: unknown[]
  expected: unknown
  description: string
}

interface Exercise {
  id: string
  title: string
  category: Category
  difficulty: Difficulty
  description: string    // markdown
  example: { input: string; output: string }
  solution: string
  hints: string[]
  starterCode: string
  testCases: TestCase[]
}

// lib/validation/runner.ts
interface TestResult {
  testName: string
  pass: boolean
  expected?: unknown
  actual?: unknown
  error?: string
}

interface ExecutionResult {
  results: TestResult[]
  passed: number
  total: number
  timedOut: boolean
  executionTime: number
}
```

## Styling Strategy

- **Theme tokens**: CSS variables in `globals.css` — `--bg`, `--surface`, `--primary`, `--text`, `--border`
- **Dark palette**: `#0f172a` bg, `#1e293b` surface, `#3b82f6` primary, `#f8fafc` text (WCAG AA on dark)
- **Category colors**: Cadenas=`#22d3ee`, Arreglos=`#a78bfa`, Objetos=`#f472b6`, Lógica=`#34d399`, Fundamentos=`#fbbf24`
- **Spacing**: 4px base scale via Tailwind
- **Typography**: Inter for UI, JetBrains Mono for code blocks
- **Responsive**: `sm` (640), `md` (768), `lg` (1024) breakpoints

## Accessibility Checklist

- Semantic HTML: `<main>`, `<nav>`, `<header>`, `<footer>`, `<article>` for cards
- ARIA: `aria-label` on buttons, `aria-live="polite"` on test results, `role="alert"` on errors
- Keyboard: Tab navigation, Enter to activate, Escape to close mobile menu, Ctrl+Enter to run
- Focus management: focus ring on all interactive elements, focus trap in mobile menu
- Contrast: all text meets 4.5:1 ratio on dark backgrounds
- Screen reader: announce pass/fail counts, exercise titles, category badges

## Performance Strategy

| Technique | Target | How |
|-----------|--------|-----|
| Monaco dynamic import | < 100KB initial | `next/dynamic` with `ssr: false` |
| ISR for exercises | Static generation | `generateStaticParams` for exercise pages |
| Bundle size | < 250KB first load | Analyze with `@next/bundle-analyzer` |
| Image optimization | N/A | No exercise images in MVP |
| Font loading | < 50KB | Inter + JetBrains Mono via `next/font` |

## Testing Strategy

| Layer | What | Approach |
|-------|------|----------|
| Unit | Validation runner, test comparison | Vitest with pure functions |
| Unit | Exercise data model | Vitest type guards |
| Integration | Editor → Worker → results | React Testing Library + mock worker |
| Integration | Auth flow | Supabase test client |
| E2E | Full exercise flow | Playwright: browse → code → run → pass |
| E2E | Accessibility | Playwright + axe-core |
| Lighthouse | Performance, A11y, BP | CI gate at ≥ 90 |

## Migration / Rollout

1. Scaffold Next.js alongside existing HTML (no changes to `index.html`)
2. Deploy to Vercel preview URL for testing
3. Migrate exercises in 3 batches: Fundamentos → Cadenas/Arreglos → Objetos/Lógica
4. Once all exercises pass validation, switch DNS to Next.js app
5. Keep HTML files in repo as reference archive
6. Database: create `user_progress` table in Supabase (single migration)

## Open Questions

- [ ] AdSense account status — approval needed before Phase 7
- [ ] Supabase project — create free tier project, or use existing?
- [ ] Vercel deployment — personal account or team?
