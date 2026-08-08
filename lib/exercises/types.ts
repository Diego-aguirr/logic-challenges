export type Module = 1 | 2 | 3 | 4;

export type Pattern =
  // Módulo 1 — Arrays y Bucles
  | "recorrer"
  | "contar"
  | "maximo"
  | "buscar"
  | "transformar"
  | "filtrar"
  | "combinar"
  | "acumular"
  | "minimo"
  // Módulo 2 — Métodos de JS
  | "map"
  | "filter"
  | "find"
  | "some"
  | "every"
  | "reduce"
  | "sort"
  | "includes"
  // Módulo 3 — Objetos
  | "propiedades"
  | "modificar"
  | "agregar"
  | "desestructuracion"
  | "spread"
  | "objetos-array"
  | "objetos-anidados"
  // Módulo 4 — Funciones
  | "parametros"
  | "return"
  | "scope"
  | "arrow"
  | "callbacks"
  | "funciones-valor"
  | "funciones-reciben";

export type Category = Module; // alias for backward compat

export type Difficulty = "facil" | "medio" | "dificil";

export interface Restrictions {
  can: string[];
  cant: string[];
}

export interface TestCase {
  args: unknown[];
  expected: unknown;
  description: string;
}

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

export interface TestResult {
  testName: string;
  pass: boolean;
  expected?: unknown;
  actual?: unknown;
  error?: string;
}

export interface ExecutionResult {
  results: TestResult[];
  passed: number;
  total: number;
  timedOut: boolean;
}
