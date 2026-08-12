import { ExecutionResult, TestResult } from "@/lib/exercises/types";

const TIMEOUT_MS = 5000;

export function runInSandbox(
  userCode: string,
  functionName: string,
  testCases: { args: unknown[]; expected: unknown; description: string }[]
): Promise<ExecutionResult> {
  return new Promise((resolve) => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.sandbox = "allow-scripts";

    const results: TestResult[] = [];

    const timeout = setTimeout(() => {
      cleanup();
      resolve({
        results: testCases.map((tc) => ({
          testName: tc.description,
          pass: false,
          expected: tc.expected,
          error: "Tu código tardó demasiado (más de 5 segundos)",
        })),
        passed: 0,
        total: testCases.length,
        timedOut: true,
      });
    }, TIMEOUT_MS);

    function cleanup() {
      clearTimeout(timeout);
      window.removeEventListener("message", handler);
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }

    function handler(event: MessageEvent) {
      if (event.data?.type === "sandbox-result") {
        cleanup();

        for (const tc of testCases) {
          const testResult = event.data.results.find(
            (r: { testName: string }) => r.testName === tc.description
          );
          if (testResult) {
            results.push(testResult);
          } else {
            results.push({
              testName: tc.description,
              pass: false,
              expected: tc.expected,
              error: "Test no encontrado en resultados",
            });
          }
        }

        const passed = results.filter((r) => r.pass).length;
        resolve({
          results,
          passed,
          total: testCases.length,
          timedOut: false,
        });
      }
    }

    window.addEventListener("message", handler);

    const testCasesCode = testCases
      .map(
        (tc) => `
      try {
        const result = ${functionName}(${JSON.stringify(tc.args).slice(1, -1)});
        // Handle async functions
        if (result && typeof result.then === 'function') {
          const p = result.then(res => {
            const pass = JSON.stringify(res) === JSON.stringify(${JSON.stringify(tc.expected)});
            testResults.push({
              testName: ${JSON.stringify(tc.description)},
              pass,
              expected: ${JSON.stringify(tc.expected)},
              actual: res
            });
          }).catch(e => {
            testResults.push({
              testName: ${JSON.stringify(tc.description)},
              pass: false,
              expected: ${JSON.stringify(tc.expected)},
              error: e.message
            });
          });
          promises.push(p);
        } else {
          const pass = JSON.stringify(result) === JSON.stringify(${JSON.stringify(tc.expected)});
          testResults.push({
            testName: ${JSON.stringify(tc.description)},
            pass,
            expected: ${JSON.stringify(tc.expected)},
            actual: result
          });
        }
      } catch (e) {
        testResults.push({
          testName: ${JSON.stringify(tc.description)},
          pass: false,
          expected: ${JSON.stringify(tc.expected)},
          error: e.message
        });
      }
    `
      )
      .join("\n");

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script>
  const testResults = [];
  const promises = [];
  
  function postResults() {
    postMessage({ type: 'sandbox-result', results: testResults });
  }
  
  try {
    ${userCode}

    const fn = typeof ${functionName} === 'function' ? ${functionName} : null;
    if (!fn) {
      postMessage({
        type: 'sandbox-result',
        results: [{ testName: 'Sintaxis', pass: false, error: 'No se encontró la función ${functionName}' }]
      });
    } else {
      ${testCasesCode}
      // Wait for all promises to resolve before posting results
      if (promises.length > 0) {
        Promise.all(promises).then(() => postResults()).catch(() => postResults());
      } else {
        postResults();
      }
    }
  } catch (e) {
    postMessage({
      type: 'sandbox-result',
      results: [{ testName: 'Sintaxis', pass: false, error: e.message }]
    });
  }
</script>
</body>
</html>`;

    iframe.srcdoc = html;
    document.body.appendChild(iframe);
  });
}
