# Code Editor Specification

## Purpose

Provide a Monaco-based code editor with syntax highlighting, responsive layout, and clear code execution flow.

## Requirements

### Requirement: Editor Initialization

The system SHALL render a Monaco editor instance with JavaScript syntax highlighting and a dark theme matching the platform palette. Editor MUST be lazy-loaded to avoid impacting initial page load.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Desktop load | User opens exercise on desktop | Page renders | Monaco editor visible with JS highlighting |
| Mobile load | User opens exercise on mobile (<768px) | Page renders | Textarea fallback with monospace font |
| Slow connection | Monaco CDN delayed | Page renders | Skeleton placeholder shown until loaded |

### Requirement: Code Execution

The system SHALL provide an "Ejecutar" button that triggers code validation. Button MUST be disabled while execution is in progress and show loading state.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Run code | Code in editor | User clicks "Ejecutar" | Code sent to validation engine, results shown |
| Ctrl+Enter | Code in editor | User presses Ctrl+Enter | Same as clicking "Ejecutar" |
| Empty code | Editor empty | User clicks "Ejecutar" | Warning: "Escribí tu solución antes de ejecutar" |
| Executing state | Code running | User clicks "Ejecutar" again | Button disabled, spinner shown |

### Requirement: Output Panel

The system SHALL display test results below the editor. Each test case shows pass/fail status with expected vs actual values on failure. Results panel MUST be scrollable if content overflows.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| All pass | All tests pass | Execution completes | Green banner: "¡Todos los tests pasaron!" |
| Some fail | 2/5 tests fail | Execution completes | Red banner with fail count, each failure shows expected/actual |
| Timeout | Code runs > 5s | Execution completes | "Tu código tardó demasiado. Posible bucle infinito." |
