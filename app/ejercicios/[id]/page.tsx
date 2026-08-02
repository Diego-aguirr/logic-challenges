"use client";

import { useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { exercises, getExerciseById } from "@/lib/exercises/data";
import { Exercise } from "@/lib/exercises/types";
import { runTests } from "@/lib/validation/runner";
import { CodeEditor } from "@/components/editor/CodeEditor";
import { RunButton } from "@/components/editor/RunButton";
import { OutputPanel } from "@/components/editor/OutputPanel";
import { HintsSystem } from "@/components/validation/HintsSystem";
import { SolutionToggle } from "@/components/validation/SolutionToggle";
import { DifficultyBadge, CategoryBadge } from "@/components/exercises/Badge";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

export default function ExercisePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const exercise = getExerciseById(id);
  const [code, setCode] = useState(exercise?.starterCode || "");
  const [result, setResult] = useState<ReturnType<typeof runTests> | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showExample, setShowExample] = useState(false);

  // Find prev/next
  const currentIndex = exercises.findIndex((e) => e.id === id);
  const prevExercise = currentIndex > 0 ? exercises[currentIndex - 1] : null;
  const nextExercise = currentIndex < exercises.length - 1 ? exercises[currentIndex + 1] : null;

  const handleRun = useCallback(() => {
    if (!exercise || !code.trim()) return;

    setIsRunning(true);
    // Small delay to show loading state
    setTimeout(() => {
      const res = runTests(code, exercise.functionName, exercise.testCases);
      setResult(res);
      setIsRunning(false);
    }, 100);
  }, [exercise, code]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleRun();
      }
    },
    [handleRun]
  );

  if (!exercise) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold text-foreground">Ejercicio no encontrado</h1>
        <p className="mb-6 text-muted-foreground">El ejercicio que buscás no existe.</p>
        <Link
          href="/ejercicios"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a ejercicios
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Back link */}
      <Link
        href="/ejercicios"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a ejercicios
      </Link>

      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-3 text-2xl font-bold text-foreground">{exercise.title}</h1>
        <div className="flex flex-wrap gap-2">
          <CategoryBadge category={exercise.category} />
          <DifficultyBadge difficulty={exercise.difficulty} />
        </div>
      </div>

      {/* Description */}
      <div className="mb-6 rounded-lg border border-border bg-card p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {exercise.description}
        </p>
      </div>

      {/* Example (collapsible) */}
      <button
        onClick={() => setShowExample(!showExample)}
        className="mb-6 flex w-full items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
      >
        <span>Ejemplo</span>
        {showExample ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      {showExample && (
        <div className="mb-6 rounded-lg border border-border bg-[#1a1b26] p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Entrada:</span>
            <code className="font-mono text-cyan-400">{exercise.example.input}</code>
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <span>Salida:</span>
            <code className="font-mono text-emerald-400">{exercise.example.output}</code>
          </div>
        </div>
      )}

      {/* Editor */}
      <div className="mb-4">
        <CodeEditor value={code} onChange={setCode} onKeyDown={handleKeyDown} />
      </div>

      {/* Run button */}
      <div className="mb-6">
        <RunButton onClick={handleRun} isRunning={isRunning} disabled={!code.trim()} />
      </div>

      {/* Results */}
      <div className="mb-6">
        <OutputPanel result={result} isRunning={isRunning} />
      </div>

      {/* Hints */}
      <div className="mb-6">
        <HintsSystem hints={exercise.hints} />
      </div>

      {/* Solution */}
      <div className="mb-8">
        <SolutionToggle solution={exercise.solution} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-border pt-6">
        {prevExercise ? (
          <Link
            href={`/ejercicios/${prevExercise.id}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {prevExercise.title}
          </Link>
        ) : (
          <div />
        )}

        {nextExercise ? (
          <Link
            href={`/ejercicios/${nextExercise.id}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {nextExercise.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

// Extract function name from exercise for validation
function getFunctionName(exercise: Exercise): string {
  // Try to extract from starterCode
  const match = exercise.starterCode.match(/function\s+(\w+)/);
  return match ? match[1] : "solution";
}

// Extend exercise with functionName getter
declare module "@/lib/exercises/types" {
  interface Exercise {
    functionName: string;
  }
}
