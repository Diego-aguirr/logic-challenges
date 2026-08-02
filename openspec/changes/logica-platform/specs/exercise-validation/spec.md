# Exercise Validation Specification

## Purpose

Execute user code in a sandboxed environment, compare output against test cases, and return structured pass/fail results with clear feedback.

## Requirements

### Requirement: Sandboxed Execution

The system MUST execute user code inside a Web Worker + iframe sandbox. User code MUST NOT access the main window, DOM, network, or local storage.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Normal run | User submits valid code | Worker executes | Result returned to main thread |
| DOM access attempt | Code references `document` | Worker executes | Error: "No se puede acceder al DOM desde el sandbox" |
| Network attempt | Code calls `fetch()` | Worker executes | Error: "No se permite acceso a la red" |

### Requirement: Test Case Comparison

The system SHALL compare function return values against expected outputs for each test case. Comparison MUST handle primitives, arrays, and objects (deep equality).

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Pass | Return matches expected | Comparison runs | `{ pass: true, testName: "..." }` |
| Fail | Return mismatches | Comparison runs | `{ pass: false, expected: [1,2], actual: [1,3] }` |
| thrown error | Function throws | Comparison runs | `{ pass: false, error: "ReferenceError: x is not defined" }` |

### Requirement: Timeout Protection

The system MUST terminate execution after 5 seconds. The worker SHALL be killed and an error returned to the user.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Infinite loop | Code contains `while(true){}` | Execution reaches 5s | Worker killed, timeout message shown |
| Slow code | Code takes 4.9s | Execution completes | Results shown normally |

### Requirement: Spanish Error Messages

All user-facing error messages MUST be in Spanish. Technical error details (stack traces) MAY remain in English.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Syntax error | Invalid JS syntax | Execution fails | "Hay un error de sintaxis en tu código" |
| Reference error | Undefined variable | Execution fails | "La variable 'x' no está definida" |
