"use client";

import { ExecutionResult } from "@/lib/exercises/types";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

interface OutputPanelProps {
  result: ExecutionResult | null;
  isRunning: boolean;
}

export function OutputPanel({ result, isRunning }: OutputPanelProps) {
  if (isRunning) {
    return (
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm">Ejecutando tests...</span>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="rounded-lg border border-border bg-card p-4">
        <p className="text-sm text-muted-foreground">
          Presioná <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">Ctrl+Enter</kbd> o hacé click en Ejecutar para ver los resultados.
        </p>
      </div>
    );
  }

  const allPassed = result.passed === result.total;

  return (
    <div className="rounded-lg border border-border bg-card">
      {/* Summary banner */}
      <div
        className={`flex items-center gap-3 px-4 py-3 ${
          allPassed
            ? "border-b border-emerald-500/20 bg-emerald-500/10"
            : "border-b border-border"
        }`}
      >
        {allPassed ? (
          <CheckCircle className="h-5 w-5 text-emerald-400" />
        ) : (
          <XCircle className="h-5 w-5 text-red-400" />
        )}
        <span className={`font-medium ${allPassed ? "text-emerald-400" : "text-foreground"}`}>
          {allPassed
            ? "¡Todos los tests pasaron! 🎉"
            : `${result.passed} de ${result.total} tests pasaron`}
        </span>
      </div>

      {/* Individual results */}
      <div className="divide-y divide-border">
        {result.results.map((test, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-3">
            {test.pass ? (
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            ) : (
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
            )}
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${test.pass ? "text-emerald-300" : "text-foreground"}`}>
                {test.testName}
              </p>
              {!test.pass && (
                <div className="mt-1 space-y-1">
                  {test.error ? (
                    <p className="text-xs text-red-400">{test.error}</p>
                  ) : (
                    <>
                      <p className="text-xs text-muted-foreground">
                        Esperado: <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">{JSON.stringify(test.expected)}</code>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Tu resultado: <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">{JSON.stringify(test.actual)}</code>
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Loader2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
