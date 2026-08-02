# Exercise Browser Specification

## Purpose

Browse, filter, and navigate logic exercises by category and difficulty with a modern, accessible card-based UI.

## Requirements

### Requirement: Exercise Listing

The system SHALL display all exercises as cards with title, category badge, difficulty badge, and completion status.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Default view | User visits /ejercicios | Page loads | All exercises shown as cards sorted by category |
| Category filter | User clicks "Arrays" tab | Filter applied | Only array exercises shown |
| Difficulty filter | User selects "Difícil" | Filter applied | Only difficult exercises shown |
| Empty results | No exercises match filters | Filter applied | "No se encontraron ejercicios" message shown |

### Requirement: Accessibility

The system MUST support keyboard navigation (Tab/Enter/Arrow keys) and provide ARIA labels on all interactive elements. Screen readers MUST announce exercise title, category, and difficulty on focus.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Keyboard nav | User presses Tab | Focus moves | Focus indicator visible, aria-label announced |
| Enter activates | Exercise card focused | User presses Enter | Exercise page opens |

### Requirement: Progress Indicators

The system SHALL show a visual indicator (checkmark) on completed exercises and a progress bar at the top of the list showing overall completion percentage.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Completed shown | User completed 3/10 exercises | Exercise list loads | 3 cards show checkmark, progress bar at 30% |
| Guest user | User not logged in | Exercise list loads | No progress indicators shown |

### Requirement: Responsive Layout

The system SHALL use a single-column layout on mobile (< 768px), two columns on tablet, and three columns on desktop. Cards MUST remain tappable targets (min 44x44px).

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Mobile view | Screen width < 768px | Page renders | Single column, cards full-width |
| Desktop view | Screen width >= 1024px | Page renders | Three-column grid |
