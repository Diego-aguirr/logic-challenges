import { Difficulty, Module, Pattern } from "@/lib/exercises/types";

const difficultyConfig: Record<Difficulty, { label: string; className: string }> = {
  facil: {
    label: "Fácil",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  medio: {
    label: "Medio",
    className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  dificil: {
    label: "Difícil",
    className: "bg-red-500/10 text-red-400 border-red-500/20",
  },
};

const moduleConfig: Record<Module, { label: string; emoji: string; className: string }> = {
  1: {
    label: "Arrays y Bucles",
    emoji: "🟢",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  2: {
    label: "Métodos de JS",
    emoji: "🔵",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  3: {
    label: "Objetos",
    emoji: "🟣",
    className: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  4: {
    label: "Funciones",
    emoji: "🟠",
    className: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
};

const patternLabels: Record<Pattern, string> = {
  // Módulo 1
  recorrer: "Recorrer",
  contar: "Contar",
  maximo: "Máximo",
  buscar: "Buscar",
  transformar: "Transformar",
  filtrar: "Filtrar",
  combinar: "Combinar",
  acumular: "Acumular",
  minimo: "Mínimo",
  // Módulo 2
  map: "map()",
  filter: "filter()",
  find: "find()",
  some: "some()",
  every: "every()",
  reduce: "reduce()",
  sort: "sort()",
  includes: "includes()",
  // Módulo 3
  propiedades: "Propiedades",
  modificar: "Modificar",
  agregar: "Agregar",
  desestructuracion: "Desestructuración",
  spread: "Spread",
  "objetos-array": "Array de Objetos",
  "objetos-anidados": "Objetos Anidados",
  // Módulo 4
  parametros: "Parámetros",
  return: "Return",
  scope: "Scope",
  arrow: "Arrow Function",
  callbacks: "Callbacks",
  "funciones-valor": "Funciones como Valor",
  "funciones-reciben": "Funciones de Orden Superior",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const config = difficultyConfig[difficulty];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}

export function ModuleBadge({ module }: { module: Module }) {
  const config = moduleConfig[module];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${config.className}`}
    >
      <span>{config.emoji}</span>
      <span>Módulo {module}</span>
    </span>
  );
}

export function PatternBadge({ pattern }: { pattern: Pattern }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
      {patternLabels[pattern] || pattern}
    </span>
  );
}

export function ModuleLabel({ module }: { module: Module }) {
  const config = moduleConfig[module];
  return (
    <span className="text-sm text-muted-foreground">
      {config.emoji} Módulo {module} — {config.label}
    </span>
  );
}
