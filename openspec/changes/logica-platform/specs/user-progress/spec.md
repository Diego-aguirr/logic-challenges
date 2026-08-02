# User Progress Specification

## Purpose

Track user authentication and exercise completion via Supabase, providing visual progress feedback and personal stats.

## Requirements

### Requirement: Authentication

The system SHALL support three auth modes: (1) email/password signup+login, (2) Google OAuth, (3) guest mode (no persistence). Auth MUST use Supabase client.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Sign up | User submits email+password | Auth request | Account created, session started, redirect to exercises |
| Login | User has account | Auth request | Session started, progress loaded |
| Guest mode | User clicks "Continuar como invitado" | No auth | Exercise access granted, no progress saved |
| Auth error | Wrong password | Auth request | "Email o contraseña incorrectos" shown |

### Requirement: Progress Tracking

The system SHALL persist completed exercise IDs per user in Supabase. A user-marked "completed" state MUST be stored. Progress MUST sync on login.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Mark complete | Logged-in user completes exercise | Action | Exercise ID saved to `user_progress` table |
| Login sync | User logs in on new device | Auth success | Completed exercises loaded from Supabase |
| Guest completes | Guest user completes exercise | Action | No persistence, local state only |

### Requirement: Progress Display

The system SHALL show a progress bar on the exercise list page. Progress = completed / total exercises in current view. Logged-in users see global progress.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Logged-in progress | User completed 12/37 exercises | List page | Progress bar shows 32%, text "12 de 37 completados" |
| Filtered progress | Filter "Arrays", completed 3/8 | List page | Progress bar shows 37% for filtered view |
| Guest | Not logged in | List page | No progress bar shown |

### Requirement: Personal Stats

The system SHALL provide a simple stats view: total completed, streak (consecutive days), and favorite category. Stats MUST be accessible from user profile/avatar menu.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Stats view | Logged-in user clicks profile | Menu opens | Stats dropdown shows completed, streak, top category |
| No activity | New user | Stats view | "0 completados, 0 días de racha" |
