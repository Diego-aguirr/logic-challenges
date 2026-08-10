// Test ALL exercises across all modules
// Run with: npx tsx test-all.mjs

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
        // Handle special cases where we need to call returned functions
        if (tc.fnArgs) {
          const returnedFn = fn(...tc.args);
          if (typeof returnedFn === 'function') {
            const result = returnedFn(...tc.fnArgs);
            const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
            results.push({ testName: tc.description, pass, expected: tc.expected, actual: result });
          } else {
            results.push({ testName: tc.description, pass: false, expected: tc.expected, actual: returnedFn, error: "Function did not return a function" });
          }
        } else if (tc.methodCalls) {
          // Handle closure exercises that return objects with methods
          const obj = fn(...tc.args);
          let result;
          if (tc.methodCalls.length === 0) {
            // If no methods are called, we need to get the initial value
            // This is a special case for the contador exercise
            result = obj.getCount ? obj.getCount() : undefined;
          } else {
            for (const call of tc.methodCalls) {
              result = obj[call.method](...call.args);
            }
          }
          const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
          results.push({ testName: tc.description, pass, expected: tc.expected, actual: result });
        } else {
          const result = fn(...tc.args);
          if (result && typeof result.then === 'function') {
            const res = await result;
            const pass = JSON.stringify(res) === JSON.stringify(tc.expected);
            results.push({ testName: tc.description, pass, expected: tc.expected, actual: res });
          } else {
            const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
            results.push({ testName: tc.description, pass, expected: tc.expected, actual: result });
          }
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
  console.log("🧪 Testing ALL exercises\n");
  console.log("=".repeat(50));
  
  let totalPassed = 0;
  let totalTests = 0;
  const failedExercises = [];
  const moduleStats = {};
  
  for (const exercise of exercises) {
    const mod = exercise.module;
    if (!moduleStats[mod]) moduleStats[mod] = { passed: 0, total: 0, failed: [] };
    
    const result = await runInSandbox(exercise.solution, exercise.functionName, exercise.testCases);
    totalPassed += result.passed;
    totalTests += result.total;
    moduleStats[mod].passed += result.passed;
    moduleStats[mod].total += result.total;
    
    if (result.passed < result.total) {
      failedExercises.push({ id: exercise.id, module: mod, failed: result.total - result.passed });
      moduleStats[mod].failed.push(exercise.id);
    }
  }
  
  // Module breakdown
  console.log("\n📊 Module Breakdown:");
  for (const [mod, stats] of Object.entries(moduleStats).sort((a, b) => a[0] - b[0])) {
    const emoji = { 1: "🟢", 2: "🔵", 3: "🟣", 4: "🟠", 5: "🔴" }[mod] || "⚪";
    const status = stats.failed.length === 0 ? "✅" : "❌";
    console.log(`   ${status} ${emoji} Module ${mod}: ${stats.passed}/${stats.total} passed`);
    if (stats.failed.length > 0) {
      for (const id of stats.failed) {
        console.log(`      ❌ ${id}`);
      }
    }
  }
  
  console.log("\n" + "=".repeat(50));
  console.log(`\n📊 Total: ${exercises.length} exercises, ${totalTests} tests`);
  console.log(`   ✅ Passed: ${totalPassed}`);
  console.log(`   ❌ Failed: ${totalTests - totalPassed}`);
  
  if (failedExercises.length > 0) {
    console.log(`\n❌ Failed exercises:`);
    for (const f of failedExercises) {
      console.log(`   - [M${f.module}] ${f.id} (${f.failed} tests failed)`);
    }
    process.exit(1);
  } else {
    console.log(`\n🎉 ALL ${exercises.length} EXERCISES PASSED!`);
  }
}

main().catch(console.error);
