# Layout & Navigation Specification

## Purpose

Provide consistent, modern layout with header, navigation, mobile menu, footer, and dark theme across the entire platform.

## Requirements

### Requirement: Header

The system SHALL render a fixed header with: logo (left), category navigation links (center), auth buttons or user avatar (right). Header MUST be sticky on scroll.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Desktop header | Screen >= 1024px | Page renders | Full nav links visible |
| Scroll | User scrolls down | Scroll event | Header remains fixed at top |
| Logo click | User clicks logo | Navigation | Redirects to / (home/exercises) |

### Requirement: Mobile Navigation

The system SHALL provide a hamburger menu on screens < 1024px. Menu MUST slide in from right with overlay. MUST trap focus inside menu when open.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Open menu | User taps hamburger | Tap | Menu slides in, overlay behind |
| Close menu | User taps X or overlay | Tap | Menu slides out |
| Keyboard | Menu open, user presses Escape | Key | Menu closes, focus returns to hamburger |
| Focus trap | Tab within open menu | Tab | Focus stays inside menu |

### Requirement: Category Navigation

The system SHALL provide navigation links for exercise categories: Inicio, Cadenas, Arreglos, Objetos, Lógica. Active category MUST be visually highlighted.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Active state | User on /ejercicios/cadenas | Page renders | "Cadenas" link highlighted |
| Hover | User hovers nav link | Hover | Subtle background change |

### Requirement: Footer

The system SHALL render a footer with: copyright, links (About, Contact, GitHub), and language note ("Hecho con ❤️ en español"). Footer MUST be visible on all pages.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Footer render | Any page | Page renders | Footer visible at bottom |
| Mobile footer | Screen < 768px | Page renders | Links stack vertically |

### Requirement: Dark Theme

The system SHALL use a consistent dark theme with: background #0f172a, surface #1e293b, primary #3b82f6, text #f8fafc. All components MUST respect theme tokens.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Theme applied | Any page | Page renders | Dark palette applied via CSS variables |
| Contrast | Any text on background | WCAG check | Contrast ratio >= 4.5:1 (AA) |

### Requirement: Spanish UI

All user-facing text MUST be in Spanish. No English strings in UI labels, buttons, messages, or navigation. Technical terms (Monaco, Supabase) MAY remain in English.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| All labels | Any page | Audit | Zero English user-facing strings |
| Error messages | Any error | Displayed | Spanish text |
