# AGENTS.md — Lógica

> Cualquier IA o desarrollador que abra este proyecto debe leer este archivo primero.

## Qué es

**Lógica** es una plataforma interactiva para practicar lógica de programación en JavaScript, toda en español (voseo argentino). El usuario resuelve ejercicios en un editor del browser, y una suite de tests valida su solución al instante.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v4 · shadcn/ui

**Sin backend.** Todo el estado vive en `localStorage`. No hay API routes, no hay base de datos, no hay autenticación.

## Arquitectura

```
app/                        # Server Components por defecto
  layout.tsx                # Root layout (fonts, dark class, Header/Footer)
  page.tsx                  # Landing page (estática, server)
  globals.css               # Tailwind v4 + variables CSS (dark theme only)
  ejercicios/
    page.tsx                # Browser de ejercicios (server, wrapping ExerciseList)
    [id]/page.tsx           # Workspace del ejercicio ← CLIENT COMPONENT
    modulo/
      [module]/page.tsx     # Vista por módulo con progreso del módulo

components/
  editor/                   # CodeEditor, RunButton, OutputPanel
  exercises/                # ExerciseCard, ExerciseList, Badge
  validation/               # HintsSystem, SolutionToggle
  layout/                   # Header (client), Footer (server)
  ui/                       # shadcn primitives (NO editar a mano)

lib/
  exercises/
    types.ts                # Tipos — SOURCE OF TRUTH
    index.ts                # Barrel: agrega módulos + helpers (getExerciseById, etc.)
    modules/                # module1.ts — module5.ts (ejercicios por módulo)
  hooks/
    useProgress.ts          # Progreso en localStorage (getModuleProgress ya funciona)
  validation/
    sandbox.ts              # Test runner PRODUCCIÓN (iframe sandbox + timeout 5s)
  utils.ts                  # cn() = clsx + tailwind-merge

.github/
  workflows/
    deploy.yml              # CI/CD: deploy a Vercel + limpieza de ramas

test-all.mjs                # Test harness: valida TODOS los ejercicios con sus soluciones
test-debug.mjs              # Debug de ejercicios específicos
test-module5.mjs            # Tests del módulo 5
```

### Flujo de datos

```
moduleN.ts  →  index.ts (exercises[])  →  getExerciseById(id)  →  page.tsx
                                                                →  sandbox.ts (iframe sandbox)
                                                                →  OutputPanel
```

1. Cada módulo exporta `const moduleN: Exercise[]`
2. `index.ts` los concatena: `export const exercises = [...module1, ...module2, ...]`
3. `[id]/page.tsx` busca el ejercicio por URL param
4. El usuario escribe código en `CodeEditor`
5. Al ejecutar: `runInSandbox(code, exercise.functionName, exercise.testCases)`
6. Si pasa todo: `markCompleted(exercise.id)` → localStorage

## Convenciones de naming

| Qué | Convención | Ejemplo |
|-----|-----------|---------|
| Archivos | `kebab-case` | `CodeEditor.tsx`, `useProgress.ts` |
| Módulos de ejercicios | `module{N}.ts` | `module1.ts`, `module5.ts` |
| IDs de ejercicio | `{verbo}-{sustantivo}` kebab | `recorrer-mostrar-productos` |
| Funciones de usuario | `camelCase` | `mostrarProductos`, `descuentoConMap` |
| Componentes | `PascalCase` | `CodeEditor`, `RunButton` |
| Interfaces | `PascalCase` | `Exercise`, `TestCase`, `ExecutionResult` |
| Constantes reales | `UPPER_SNAKE_CASE` | `STORAGE_KEY = "logica-progress"` |
| CSS | Tailwind utility-first + tokens shadcn | `bg-card`, `text-foreground` |

## Patrones TypeScript

```typescript
// Union types para restricciones estrictas
export type Module = 1 | 2 | 3 | 4 | 5;
export type Difficulty = "facil" | "medio" | "dificil";

// Interfaces para formas de objetos
export interface Exercise {
  id: string;
  title: string;
  module: Module;
  pattern: Pattern;
  difficulty: Difficulty;
  functionName: string;
  context: string;
  description: string;
  example: { input: string; output: string };
  restrictions: Restrictions;
  hints: string[];
  learningObjective: string;
  starterCode: string;
  solution: string;
  testCases: TestCase[];
}

// unknown[] para args/expected (valores JS dinámicos)
export interface TestCase {
  args: unknown[];
  expected: unknown;
  description: string;
  methodCalls?: MethodCall[];  // Para closures que devuelven objetos
  fnArgs?: unknown[];          // Para funciones que devuelven funciones
}
```

**Reglas:**
- `interface` para formas de objetos, `type` para uniones y aliases
- Barrel re-exports en `index.ts`
- Named exports siempre (excepto pages que usan `export default`)

## Componentes

**Props:** Interface inline, NO archivo separado de props:

```typescript
interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}
export function CodeEditor({ value, onChange, onKeyDown }: CodeEditorProps) { ... }
```

**`"use client"`:** Solo en archivos que usan hooks o browser APIs. El resto es Server Component por defecto.

**shadcn components** (`components/ui/`): Generados por CLI. NO editar a mano. Usan `function` declarations, `cva` + `cn()`, named exports.

## Estyling

- **Dark theme hardcoded.** `<html className="dark">` permanente. No hay toggle.
- **CSS variables** en `globals.css` bajo `:root` (valores dark).
- **Paleta:** Background `#0f172a`, Card `#1e293b`, Primary `#3b82f6`, Border `#334155`
- **Fuentes:** Inter (sans) + JetBrains Mono (mono) via `next/font/google`
- **`cn()`** para clases condicionales: `cn("base", isActive && "active", className)`
- **Editor:** Colores hardcoded `bg-[#1a1b26]` (no theme tokens)

## Test runner — Sandbox seguro con iframe

### Producción (`sandbox.ts`)

```typescript
runInSandbox(userCode, functionName, testCases) → Promise<ExecutionResult>
```

1. Crea un `<iframe sandbox="allow-scripts">` en el DOM
2. Inyecta el código del usuario + test cases en el HTML del iframe
3. El código corre en un **origen opaco** (no puede acceder a `localStorage`, `document.cookie`, ni al DOM padre)
4. Escucha `postMessage` para recibir resultados
5. Tiene **timeout de 5 segundos** — si el código se cuelga, se destruye el iframe y se marca como `timedOut`
6. Maneja funciones async: detecta `.then` y hace `await` dentro del iframe

### Seguridad

| Amenaza | Protección |
|---------|-----------|
| Lectura de `localStorage` | ❌ Iframe sandbox corre en origen opaco |
| Exfiltración vía `fetch` | ❌ No puede acceder a cookies del padre |
| Manipulación del DOM | ❌ No puede tocar el DOM de la app |
| Loop infinito | ✅ Timeout de 5s destruye el iframe |
| `eval()` / `new Function()` en main thread | ❌ Eliminado. Solo corre en el iframe |

### Limitaciones actuales

| Limitación | Impacto |
|-----------|---------|
| **No maneja `methodCalls`** | Ejercicios de closures (`crear-contador`) NO se validan en el browser |
| **No maneja `fnArgs`** | Ejercicios que devuelven funciones (`obtener-operacion`) NO se validan en el browser |
| **`JSON.stringify` comparison** | Falla con `undefined` vs `null`, orden de propiedades, referencias a funciones |
| **`</script>` en args** | Escapado con `escapeScript()`, pero seguir siendo cauteloso |

### Test harness (`test-all.mjs`) — SÍ maneja todo

El script de testing tiene su propia función `runInSandbox` que:
- Maneja `methodCalls`: llama `fn()` → obtiene objeto → encadena `obj[method](...args)`
- Maneja `fnArgs`: llama `fn()` → obtiene función → llama `returnedFn(...fnArgs)`
- Maneja async: detecta `result.then` y hace await
- Tiene protección de timeout (5s)

**⚠️ Inconsistencia importante:** Lo que pasa en `test-all.mjs` NO necesariamente pasa en el browser. Si agregás un ejercicio que usa `methodCalls`, `fnArgs` o `async`, el test script lo validará pero el usuario NO podrá validarlo en la app.

### `runner.ts` — Eliminado

El runner anterior usaba `new Function()` sin sandbox. Fue eliminado por seguridad. `sandbox.ts` es el único runner activo.

## Cómo agregar un ejercicio

1. Crear archivo en `lib/exercises/modules/module{N}.ts` (o agregar al existente)
2. Seguir la interfaz `Exercise` de `types.ts`
3. Elegir variante de testCases según el comportamiento:
   - **Estándar:** función devuelve un valor directo
   - **`fnArgs`:** función devuelve otra función
   - **`methodCalls`:** función devuelve un objeto con métodos
4. Incluir `starterCode` con `// tu código acá` como placeholder
5. Incluir `solution` completa que pase todos los tests
6. Ejecutar `npx tsx test-all.mjs` para verificar
7. **Si usás `methodCalls`, `fnArgs` o `async`:** recordar que NO funcionará en el browser

## Agregar ejercicio — Template

```typescript
{
  id: "verbo-sustantivo",           // kebab-case único
  title: "Título descriptivo",      // Español
  module: N,                        // 1-5
  pattern: "patron",                // Debe existir en el type Pattern
  difficulty: "facil",              // "facil" | "medio" | "dificil"
  functionName: "nombreFuncion",    // camelCase
  context: "Escenario de e-commerce que da sentido al problema.",
  description: "Descripción técnica de qué hay que hacer.",
  example: {
    input: "nombreFuncion(arg1, arg2)",
    output: "resultado esperado"
  },
  restrictions: {
    can: ["✅ for", "✅ if", "✅ variables"],
    cant: ["❌ map()", "❌ filter()"]
  },
  hints: [
    "Pista 1 (pregunta que guía)",
    "Pista 2 (más específica)",
    "Pista 3 (casi la respuesta)"
  ],
  learningObjective: "Qué concepto enseña este ejercicio.",
  starterCode: `function nombreFuncion(args) {\n  // tu código acá\n\n}`,
  solution: `function nombreFuncion(args) {\n  // solución completa\n}`,
  testCases: [
    { args: [...], expected: ..., description: "Caso de prueba" }
  ]
}
```

## Estado de la app

| State | Dónde | Persistencia |
|-------|-------|-------------|
| `code` (editor) | `useState` en page.tsx | Se pierde al refrescar |
| `result` (tests) | `useState` en page.tsx | Se pierde al refrescar |
| `isRunning` | `useState` en page.tsx | Transitorio |
| `completed` (progreso) | `useProgress()` → localStorage | Persiste |
| Datos de ejercicios | Arrays en `modules/` | Bundle (permanente) |

**Key de storage:** `"logica-progress"` → `JSON.stringify([...Set<exerciseId>])`

## Bugs conocidos y deuda técnica

1. **`sandbox.ts` no maneja `methodCalls` / `fnArgs` / `async` closures** — Los ejercicios de módulo 4 y 5 que usan estas features solo pasan en `test-all.mjs`, no en la app. Es la limitación más grande.

2. **`data.ts` es código muerto** — Archivo monolítico de 2495 líneas que duplica todos los ejercicios. `index.ts` importa de `modules/`, no de `data.ts`.

3. **`workers/` vacío** — Placeholder sin implementar.

4. **No hay error boundary** — Si el iframe sandbox falla inesperadamente, no hay React error boundary que atrape el crash.

5. **No se persiste el código** — Refrescar la página pierde el código en progreso (solo se guarda el progreso de ejercicios completados).

6. **`async-retry` usa `eval()` en la solución** — Arreglado: la solución ya no usa `eval()`, pero el test harness aún necesita reconstruir funciones desde strings para ejercicios con funciones como argumentos.

## Comandos

```bash
npm run dev          # Desarrollo
npm run build        # Build producción (debe pasar sin errores)
npm run lint         # ESLint (debe pasar sin errores ni warnings)
npx tsx test-all.mjs # Validar TODOS los ejercicios con sus soluciones
```

## Reglas para IA

1. **Leer este archivo ANTES de modificar cualquier cosa.**
2. **NO editar `components/ui/`** — Son generados por shadcn CLI.
3. **NO agregar ejercicios que usen `methodCalls`, `fnArgs` o `async` sin considerar que no funcionarán en el browser.**
4. **NO usar `data.ts`** — Está deprecado. Usar `modules/moduleN.ts`.
5. **Validar con `npm run build && npm run lint && npx tsx test-all.mjs` antes de committing.**
6. **Todo el UI en español** (voseo argentino).
7. **Usar `cn()`** para clases condicionales, nunca concatenar strings de clases.
8. **Named exports** para componentes, `export default` solo para pages.
9. **`"use client"`** solo donde sea necesario (hooks, browser APIs).
10. **Tipos en `types.ts`** — Source of truth. No definir tipos duplicados en otros archivos.
