# ⚡ Lógica

Plataforma interactiva para practicar lógica de programación en español. Ejercicios progresivos con editor en línea, validación en tiempo real y pistas guiadas.

## Demo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000)

## Cómo funciona

1. Elegí un ejercicio del catálogo
2. Leé el contexto y el objetivo
3. Escribí tu solución en el editor
4. Presioná **Ctrl+Enter** o el botón **Ejecutar**
5. Verificá si pasaste todos los tests

## Estructura

```
app/
├── layout.tsx              # Root layout (Inter + JetBrains Mono)
├── page.tsx                # Landing page
├── globals.css             # Tailwind v4 + shadcn/ui theme
├── ejercicios/
│   ├── page.tsx            # Browser de ejercicios
│   └── [id]/page.tsx       # Vista de ejercicio individual
components/
├── layout/                 # Header, Footer
├── exercises/              # ExerciseCard, ExerciseList, Badge
├── editor/                 # CodeEditor, RunButton, OutputPanel
└── validation/             # HintsSystem, SolutionToggle
lib/
├── exercises/              # types.ts, data.ts (31 ejercicios)
├── hooks/                  # useProgress (localStorage)
└── validation/             # runner.ts (ejecución de tests)
```

## Módulos

| Módulo | Nombre | Ejercicios | Patrones |
|--------|--------|------------|----------|
| 🟢 1 | Arrays y Bucles | 9 | recorrer, contar, maximo, buscar, transformar, filtrar, combinar, acumular, minimo |
| 🔵 2 | Métodos de JS | 8 | map, filter, find, some, every, reduce, sort, includes |
| 🟣 3 | Objetos | 7 | propiedades, modificar, agregar, desestructuracion, spread, objetos-array, objetos-anidados |
| 🟠 4 | Funciones | 7 | parametros, return, scope, arrow, callbacks, funciones-valor, funciones-reciben |

## Pedagogía

Cada ejercicio tiene **restricciones** que te obligan a pensar la lógica antes de usar atajos:

- **Módulo 1**: Solo `for`, `if`, variables. Sin métodos de array.
- **Módulo 2**: Reemplazá los bucles con `map`, `filter`, `reduce`.
- **Módulo 3**: Trabajá con objetos, desestructuración, spread.
- **Módulo 4**: Funciones de orden superior, closures, callbacks.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Editor**: Code textarea con syntax feedback
- **Validation**: Custom test runner (new Function)
- **State**: localStorage para progreso

## Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run start    # Servidor producción
npm run lint     # Linting
```

## Licencia

MIT
