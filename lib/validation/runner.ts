import { ExecutionResult, TestResult } from "@/lib/exercises/types";

export function runTests(
  userCode: string,
  functionName: string,
  testCases: { args: unknown[]; expected: unknown; description: string }[]
): ExecutionResult {
  const results: TestResult[] = [];

  try {
    // Execute user code to define the function
    const fn = new Function(userCode + `\n return typeof ${functionName} === 'function' ? ${functionName} : null;`)();

    if (!fn) {
      return {
        results: [
          {
            testName: "Sintaxis",
            pass: false,
            error: `No se encontró la función '${functionName}'. Asegurate de declararla con 'function ${functionName}(...)'.`,
          },
        ],
        passed: 0,
        total: testCases.length,
        timedOut: false,
      };
    }

    // Run each test case
    for (const tc of testCases) {
      try {
        const result = fn(...tc.args);
        const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
        results.push({
          testName: tc.description,
          pass,
          expected: tc.expected,
          actual: result,
        });
      } catch (e: unknown) {
        results.push({
          testName: tc.description,
          pass: false,
          expected: tc.expected,
          error: e instanceof Error ? e.message : "Error desconocido",
        });
      }
    }
  } catch (e: unknown) {
    return {
      results: [
        {
          testName: "Sintaxis",
          pass: false,
          error: e instanceof Error ? e.message : "Error de sintaxis",
        },
      ],
      passed: 0,
      total: testCases.length,
      timedOut: false,
    };
  }

  const passed = results.filter((r) => r.pass).length;
  return {
    results,
    passed,
    total: testCases.length,
    timedOut: false,
  };
}
