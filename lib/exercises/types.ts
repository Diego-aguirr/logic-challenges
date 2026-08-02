export type Category = "fundamentos" | "cadenas" | "arreglos" | "objetos" | "logica";
export type Difficulty = "facil" | "medio" | "dificil";

export interface TestCase {
  args: unknown[];
  expected: unknown;
  description: string;
}

export interface Exercise {
  id: string;
  title: string;
  category: Category;
  difficulty: Difficulty;
  description: string;
  example: { input: string; output: string };
  starterCode: string;
  solution: string;
  hints: string[];
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
