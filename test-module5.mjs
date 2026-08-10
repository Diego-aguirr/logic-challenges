// Test script to verify Module 5 exercises work in sandbox
// Run with: npx tsx test-module5.mjs

import { module5 } from "./lib/exercises/modules/module5.ts";

async function runInSandbox(userCode, functionName, testCases) {
  const results = [];
  
  try {
    // Execute user code to define the function
    const fn = new Function(userCode + `\n return typeof ${functionName} === 'function' ? ${functionName} : null;`)();
    
    if (!fn) {
      return {
        results: [{ testName: "Sintaxis", pass: false, error: `No se encontró la función '${functionName}'` }],
        passed: 0,
        total: testCases.length,
      };
    }
    
    // Run each test case
    for (const tc of testCases) {
      try {
        const result = fn(...tc.args);
        // Handle async functions
        if (result && typeof result.then === 'function') {
          const res = await result;
          const pass = JSON.stringify(res) === JSON.stringify(tc.expected);
          results.push({
            testName: tc.description,
            pass,
            expected: tc.expected,
            actual: res,
          });
        } else {
          const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
          results.push({
            testName: tc.description,
            pass,
            expected: tc.expected,
            actual: result,
          });
        }
      } catch (e) {
        results.push({
          testName: tc.description,
          pass: false,
          expected: tc.expected,
          error: e.message,
        });
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
  return {
    results,
    passed,
    total: testCases.length,
  };
}

async function testExercise(exercise) {
  console.log(`\n📝 Testing: ${exercise.title} (${exercise.id})`);
  console.log(`   Function: ${exercise.functionName}`);
  
  const result = await runInSandbox(
    exercise.solution,
    exercise.functionName,
    exercise.testCases
  );
  
  const status = result.passed === result.total ? "✅ PASS" : "❌ FAIL";
  console.log(`   ${status} ${result.passed}/${result.total} tests passed`);
  
  if (result.passed < result.total) {
    const failed = result.results.filter((r) => !r.pass);
    for (const f of failed) {
      console.log(`   ❌ ${f.testName}: expected ${JSON.stringify(f.expected)}, got ${JSON.stringify(f.actual)}`);
      if (f.error) console.log(`      Error: ${f.error}`);
    }
  }
  
  return result;
}

async function main() {
  console.log("🧪 Testing Module 5 - JavaScript Moderno\n");
  console.log("=".repeat(50));
  
  let totalPassed = 0;
  let totalTests = 0;
  const failedExercises = [];
  
  for (const exercise of module5) {
    const result = await testExercise(exercise);
    totalPassed += result.passed;
    totalTests += result.total;
    
    if (result.passed < result.total) {
      failedExercises.push(exercise.id);
    }
  }
  
  console.log("\n" + "=".repeat(50));
  console.log(`\n📊 Summary:`);
  console.log(`   Total exercises: ${module5.length}`);
  console.log(`   Total tests: ${totalTests}`);
  console.log(`   Passed: ${totalPassed}`);
  console.log(`   Failed: ${totalTests - totalPassed}`);
  
  if (failedExercises.length > 0) {
    console.log(`\n❌ Failed exercises:`);
    for (const id of failedExercises) {
      console.log(`   - ${id}`);
    }
  } else {
    console.log(`\n✅ All exercises passed!`);
  }
}

main().catch(console.error);
