# ⚡ Lógica

Plataforma interactiva para practicar lógica de programación en español. **46 ejercicios progresivos** con editor en línea, validación en tiempo real y pistas guiadas. Todo gratis, sin login, sin base de datos.

## Demo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000)

## Cómo funciona

1. Elegí un ejercicio del catálogo
2. Leé el contexto y el objetivo (cada ejercicio usa escenarios de e-commerce)
3. Escribí tu solución en el editor
4. Presioná **Ctrl+Enter** o el botón **Ejecutar**
5. Verificá si pasaste todos los tests

## Módulos

5 módulos, 46 ejercicios, 43 patrones, 3 niveles de dificultad.

| Módulo | Nombre | Ejercicios | Dificultad | Restricción clave |
|--------|--------|------------|------------|-------------------|
| 🟢 1 | Arrays y Bucles | 9 | 4 fáciles, 5 medios | Solo `for`, `if`, variables — nada de métodos de array |
| 🔵 2 | Métodos de JS | 8 | 4 fáciles, 4 medios | Reemplazá los bucles con `map`, `filter`, `reduce` |
| 🟣 3 | Objetos | 7 | 3 fáciles, 3 medios, 1 difícil | Desestructuración, spread, objetos anidados |
| 🟠 4 | Funciones | 7 | 3 fáciles, 2 medios, 2 difíciles | Closures, callbacks, funciones de orden superior |
| 🔴 5 | JS Moderno | 15 | 4 fáciles, 7 medios, 4 difíciles | `async/await`, optional chaining, nullish, try/catch |

### Ejercicios por módulo

<details>
<summary>🟢 Módulo 1 — Arrays y Bucles</summary>

- `recorrer-mostrar-productos` — Recorrer un array y mostrar cada elemento
- `contar-con-stock` — Contar elementos que cumplen una condición
- `precio-mas-alto` — Encontrar el valor máximo sin `Math.max`
- `producto-existe` — Buscar si un elemento existe en un array
- `aplicar-descuento` — Transformar cada elemento según una regla
- `filtrar-por-categoria` — Filtrar elementos por condición
- `productos-caros` — Combinar filtrado y transformación
- `total-carrito` — Acumular valores en un recorrido
- `precio-mas-bajo` — Encontrar el valor mínimo sin `Math.min`

</details>

<details>
<summary>🔵 Módulo 2 — Métodos de JS</summary>

- `descuento-con-map` — Transformar arrays con `map`
- `disponibles-filter` — Filtrar con `filter`
- `buscar-producto-find` — Buscar con `find`
- `esta-en-catalogo` — Verificar existencia con `includes`
- `hay-agotados-some` — Evaluar condición con `some`
- `todos-disponibles-every` — Verificar todos con `every`
- `total-con-reduce` — Acumular con `reduce`
- `ordenar-por-precio` — Ordenar con `sort`

</details>

<details>
<summary>🟣 Módulo 3 — Objetos</summary>

- `info-producto` — Acceder a propiedades de un objeto
- `actualizar-stock` — Modificar propiedades existentes
- `agregar-descuento` — Agregar nuevas propiedades
- `extraer-datos` — Desestructuración de objetos
- `fusionar-catalogos` — Spread para combinar objetos
- `carrito-caro` — Objetos anidados y arrays de objetos
- `direccion-cliente` — Desestructuración anidada

</details>

<details>
<summary>🟠 Módulo 4 — Funciones</summary>

- `saludo-personalizado` — Funciones con parámetros
- `calcular-iva` — Return y valores de retorno
- `doble-del-precio` — Funciones que transforman datos
- `crear-contador` — Closures y estado privado
- `procesar-productos` — Funciones de orden superior
- `obtener-operacion` — Funciones que devuelven funciones
- `aplicar-a-todos` — Composición de funciones

</details>

<details>
<summary>🔴 Módulo 5 — JS Moderno</summary>

- `rest-params-sumar` — Parámetros rest
- `spread-combinar-carritos` — Spread para arrays
- `optional-chaining-direccion` — Optional chaining (`?.`)
- `nullish-precio-defecto` — Nullish coalescing (`??`)
- `spread-actualizar-producto` — Spread + desestructuración
- `optional-nullish-combo` — Combinando `?.` y `??`
- `filter-map-chain` — Encadenamiento de métodos
- `flatmap-inventario` — `flatMap` para arrays anidados
- `spread-destructuring-config` — Spread + desestructuración avanzada
- `try-catch-seguro` — Manejo de errores con try/catch
- `try-catch-json` — Parsing seguro de JSON
- `reduce-agrupar` — `reduce` para agrupar datos
- `async-await-fetch` — Async/await con fetch
- `async-retry` — Reintentos con async/await
- `validacion-formulario` — Validación completa con async

</details>

## Pedagogía

Cada ejercicio tiene **restricciones** que te obligan a pensar la lógica antes de usar atajos:

- **Módulo 1**: Solo `for`, `if`, variables. Sin métodos de array.
- **Módulo 2**: Reemplazá los bucles con `map`, `filter`, `reduce`.
- **Módulo 3**: Trabajá con objetos, desestructuración, spread.
- **Módulo 4**: Funciones de orden superior, closures, callbacks.
- **Módulo 5**: Async/await, optional chaining, nullish coalescing, try/catch.

Cada ejercicio incluye:
- **Contexto** — Escenario de e-commerce que le da sentido al problema
- **Objetivo** — Qué tenés que lograr
- **Restricciones** — Qué podés y qué no usar
- **Ejemplo** — Caso de uso con entrada y salida esperada
- **Pistas** — 3 hints progresivos que aparecen de a uno
- **Solución** — Toggle para ver la respuesta completa
- **Tests** — 3-5 casos que validan tu solución

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript (strict mode) |
| UI | React 19 |
| Styling | Tailwind CSS v4 + shadcn/ui (base-nova) |
| Iconos | Lucide React |
| Editor | Textarea con números de línea y soporte Tab |
| Validación | Iframe sandbox con timeout de 5s |
| Estado | localStorage (sin backend) |
| Fuentes | Inter (sans) + JetBrains Mono (mono) |

## Estructura

```
app/
├── layout.tsx              # Root layout (Inter + JetBrains Mono)
├── page.tsx                # Landing page
├── globals.css             # Tailwind v4 + shadcn/ui theme
└── ejercicios/
    ├── page.tsx            # Browser de ejercicios con filtros
    ├── [id]/page.tsx       # Vista de ejercicio individual
    └── modulo/
        └── [module]/page.tsx # Vista por módulo con progreso
components/
├── layout/                 # Header, Footer
├── exercises/              # ExerciseCard, ExerciseList, Badge
├── editor/                 # CodeEditor, RunButton, OutputPanel
├── validation/             # HintsSystem, SolutionToggle
└── ui/                     # shadcn/ui (Button, Card, Badge)
lib/
├── exercises/
│   ├── types.ts            # Tipos: Exercise, Module, Pattern, TestCase
│   ├── index.ts            # Agregación + helpers (getExerciseById, etc.)
│   └── modules/            # module1.ts — module5.ts (ejercicios por módulo)
├── hooks/
│   └── useProgress.ts      # Progreso en localStorage
├── validation/
│   └── sandbox.ts          # Test runner con iframe sandbox
└── utils.ts                # cn() utility (clsx + tailwind-merge)
```

## Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run start    # Servidor producción
npm run lint     # Linting
```

### Tests

```bash
npx tsx test-all.mjs       # Testea todos los ejercicios (46)
npx tsx test-module5.mjs   # Testea solo el módulo 5
npx tsx test-debug.mjs     # Debug de ejercicios específicos
```

## Deploy

El proyecto usa un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que:

- Hace **deploy automático a Vercel** en cada push a `main`
- **Borra ramas mergeadas** automáticamente después del deploy
- **Mantiene una rama `develop`** sincronizada con `main`

Para configurarlo, agregá estos secrets en GitHub → Settings → Secrets → Actions:

| Secret | Descripción |
|--------|-------------|
| `VERCEL_TOKEN` | Token de Vercel (vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Org ID del proyecto |
| `VERCEL_PROJECT_ID` | Project ID del proyecto |

## Contribuir

¡Las contribuciones son bienvenidas! Si querés:

- **Agregar ejercicios** — Creá un archivo en `lib/exercises/modules/` con el formato existente y registralo en `lib/exercises/index.ts`
- **Mejorar la UI** — Componentes en `components/`, usamos shadcn/ui + Tailwind
- **Corregir bugs** — Abrí un issue o mandá un PR
- **Agregar funcionalidades** — Editor mejorado, temas, modo oscuro/claro, etc.

### Guía rápida para agregar un ejercicio

1. Definí el ejercicio en `lib/exercises/modules/module{N}.ts` siguiendo la interfaz `Exercise`
2. Incluí: `id`, `title`, `module`, `pattern`, `difficulty`, `context`, `description`, `example`, `restrictions`, `hints`, `starterCode`, `solution`, `testCases`
3. Verificá que pase con `npx tsx test-all.mjs`

### Convenciones

- Todo el UI en español (voseo argentino)
- Escenarios de e-commerce para los ejercicios
- Dark theme por defecto
- Sin dependencias innecesarias — el proyecto es lo más liviano posible

## Roadmap Ideas

- [ ] Tema claro / oscuro toggle
- [ ] Editor con syntax highlighting (Monaco o CodeMirror)
- [ ] Ranking / leaderboard local
- [ ] Modo dificultad aleatoria
- [ ] Exportar progreso como JSON
- [ ] Ejercicios de algoritmos (Módulo 6)

## Licencia

MIT
