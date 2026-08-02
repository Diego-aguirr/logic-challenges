# Exercise View Specification

## Purpose

The core exercise page: title, description, example, editor, execution, solution, hints, and navigation — all in one focused flow.

## Requirements

### Requirement: Page Layout

The system SHALL render exercise view as a single scrollable page with sections in this order: (1) title + description, (2) example, (3) editor + execute, (4) results, (5) solution toggle, (6) hints, (7) prev/next navigation.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Page load | User opens exercise | Page renders | All sections visible in order |
| Mobile scroll | User scrolls on mobile | Sections flow | Single column, sections stack vertically |

### Requirement: Exercise Header

The system SHALL display exercise title (h1), category badge, difficulty badge, and description text. Description MUST support markdown for code snippets.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Markdown desc | Description has `backticks` | Rendered | Inline code styled with monospace |
| Long title | Title > 50 chars | Rendered | Truncated with ellipsis on mobile |

### Requirement: Example Section

The system SHALL show a collapsible "Ejemplo" section with input/output demonstration. Section MUST be expanded by default.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Expand/collapse | User clicks example header | Toggle | Section collapses/expands |
| Default state | Page loads | Section visible | Expanded showing example code and output |

### Requirement: Solution Toggle

The system SHALL provide a "Ver solución" button that reveals the solution code. Solution MUST be hidden by default. Solution MUST show in a read-only editor block.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Reveal | User clicks "Ver solución" | Toggle | Solution code appears, button text changes to "Ocultar solución" |
| Hide | User clicks "Ocultar solución" | Toggle | Solution hidden |

### Requirement: Hints System

The system SHALL provide progressive hints. First hint visible by default. Additional hints reveal one at a time via "Ver siguiente pista" button. All hints MUST be in Spanish.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| First hint | Page loads | Section visible | Hint 1 shown |
| Next hint | User clicks "Ver siguiente pista" | Click | Next hint revealed, button moves below it |
| All shown | All hints revealed | Button state | "Ver siguiente pista" button hidden |

### Requirement: Exercise Navigation

The system SHALL provide "Anterior" and "Siguiente" buttons at the bottom. Navigation MUST respect current filter/category. "Siguiente" on last exercise wraps to first; "Anterior" on first wraps to last.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Next exercise | User on exercise 3 of 10 | Click "Siguiente" | Exercise 4 loads |
| Previous | User on exercise 3 | Click "Anterior" | Exercise 2 loads |
| Wrap-around | User on last exercise | Click "Siguiente" | First exercise loads |
