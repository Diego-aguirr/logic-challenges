# Proposal: Logica Next.js Platform Migration

## Intent

Transform the monolithic vanilla HTML/JS logic practice platform into a modern Next.js web application. The current architecture (inline eval, single-file HTML, no separation of concerns) blocks adding new exercises, monetization, and user progress tracking. The goal is a functional, simple platform where students follow: exercise → example → code → validate → see solution.

## Scope

### In Scope
- Next.js 15 App Router project setup with TypeScript
- Exercise data model (JSON/TS) for 37+ existing exercises
- Monaco editor integration with Web Worker + iframe sandbox execution
- Exercise flow: browse → select → code → run tests → view solution
- Tailwind v4 + shadcn/ui styling (Spanish UI)
- Google AdSense integration via `next/script`
- Supabase auth + progress tracking (basic: completed/pending per exercise)
- Incremental migration: keep HTML files working during transition

### Out of Scope
- Advanced analytics dashboard
- Payment/subscription system
- Multi-language UI (Spanish only)
- Real-time collaboration
- Mobile native app
- Exercise creation/editing interface (admin)

## Capabilities

### New Capabilities
- `exercise-browser`: List, filter, and navigate exercises by category/difficulty
- `code-editor`: Monaco-based editor with syntax highlighting and code execution
- `exercise-validation`: Sandboxed execution engine with test case comparison
- `user-progress`: Supabase-backed tracking of completed exercises per user
- `monetization`: Google AdSense ad placement in layout

### Modified Capabilities
None — this is a greenfield migration. No existing specs to modify.

## Approach

**Incremental migration** — scaffold Next.js app alongside existing HTML, migrate exercises in batches.

1. **Phase 1**: Project setup (Next.js, Tailwind, shadcn, TypeScript)
2. **Phase 2**: Exercise data model + JSON migration from HTML sources
3. **Phase 3**: Core components (Layout, ExerciseCard, ExerciseView)
4. **Phase 4**: Monaco editor + sandboxed execution engine
5. **Phase 5**: Exercise flow (browse → code → validate → solution)
6. **Phase 6**: Supabase auth + progress tracking
7. **Phase 7**: AdSense integration + final polish

Each phase is independently deployable. HTML version stays live until Phase 5 completes.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `app/` | New | Next.js App Router pages and layouts |
| `components/` | New | React components (ExerciseCard, Editor, Layout) |
| `lib/exercises/` | New | Exercise data model and JSON files |
| `lib/validation/` | New | Sandboxed code execution engine |
| `public/` | Modified | Static assets, ads placeholder |
| `index.html` | Kept | Remains working during migration |
| `guia-entrevista.html` | Kept | Source for exercise migration |
| `logica2/` | Kept | Source for exercise migration |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Monaco bundle size impacts performance | Medium | Dynamic import, lazy load per exercise page |
| eval() exercises hard to convert to test cases | Medium | Manual review per exercise, preserve original HTML fallback |
| AdSense approval delay | High | Implement ad placeholders early, submit for review in Phase 1 |
| Supabase vendor lock-in | Low | Abstract behind service interface, swap if needed |

## Rollback Plan

- Keep all original HTML files untouched — they serve as fallback
- Next.js app runs on separate port during development
- Deploy to separate Vercel preview URL before production cutover
- If critical issues: revert DNS to static HTML hosting (Netlify/GitHub Pages)
- Database migrations: Supabase supports rollback via dashboard

## Dependencies

- Node.js 18+ and npm
- Supabase account (free tier sufficient for MVP)
- Google AdSense account (approval required)
- Vercel account for deployment

## Success Criteria

- [ ] All 37+ exercises accessible and runnable in the new platform
- [ ] Code execution produces correct pass/fail for all test cases
- [ ] User can sign up, track progress, see completed exercises
- [ ] AdSense ads render without breaking layout or performance
- [ ] Lighthouse score ≥ 90 on performance, accessibility, best practices
- [ ] Spanish UI is complete — zero English strings in user-facing pages
- [ ] Original HTML files still accessible during and after migration
