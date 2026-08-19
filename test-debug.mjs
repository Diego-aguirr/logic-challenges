// Debug specific failing exercises
// Run with: npx tsx test-debug.mjs

import { exercises } from "./lib/exercises/index.ts";

async function runInSandbox(userCode, functionName, testCases) {
  const results = [];
  
  try {
    const fn = new Function(userCode + `\n return typeof ${functionName} === 'function' ? ${functionName} : null;`)();
    
    if (!fn) {
      return {
        results: [{ testName: "Sintaxis", pass: false, error: `No function '${functionName}'` }],
        passed: 0,
        total: testCases.length,
      };
    }
    
    for (const tc of testCases) {
      try {
        const result = fn(...tc.args);
        if (result && typeof result.then === 'function') {
          const res = await result;
          const pass = JSON.stringify(res) === JSON.stringify(tc.expected);
          results.push({ testName: tc.description, pass, expected: tc.expected, actual: res });
        } else {
          const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
          results.push({ testName: tc.description, pass, expected: tc.expected, actual: result });
        }
      } catch (e) {
        results.push({ testName: tc.description, pass: false, expected: tc.expected, error: e.message });
      }
    }
  } catch (e) {
    return {
      results: [{ testName: "Sintaxis", pass: false, error: e.message }],
      passed: 0,
      total: testCases.length,
    };
  }
  
  const passed = results.filter((r) => r.pass).length;
  return { results, passed, total: testCases.length };
}

async function main() {
  const failingIds = ["disponibles-filter", "hay-agotados-some", "todos-disponibles-every", "ordenar-por-precio", "carrito-caro", "crear-contador", "obtener-operacion"];
  
  for (const id of failingIds) {
    const exercise = exercises.find(e => e.id === id);
    if (!exercise) {
      console.log(`❌ Exercise ${id} not found`);
      continue;
    }
    
    console.log(`\n📝 ${exercise.id} (Module ${exercise.module})`);
    console.log(`   Solution: ${exercise.solution.substring(0, 100)}...`);
    
    const result = await runInSandbox(exercise.solution, exercise.functionName, exercise.testCases);
    
    for (const r of result.results) {
      if (!r.pass) {
        console.log(`   ❌ ${r.testName}`);
        console.log(`      Expected: ${JSON.stringify(r.expected)}`);
        console.log(`      Got: ${JSON.stringify(r.actual)}`);
        if (r.error) console.log(`      Error: ${r.error}`);
      }
    }
  }
}

main().catch(console.error);
