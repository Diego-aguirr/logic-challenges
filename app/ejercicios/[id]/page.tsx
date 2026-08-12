"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { exercises, getExerciseById } from "@/lib/exercises";
import { runTests } from "@/lib/validation/runner";
import { CodeEditor } from "@/components/editor/CodeEditor";
import { RunButton } from "@/components/editor/RunButton";
import { OutputPanel } from "@/components/editor/OutputPanel";
import { HintsSystem } from "@/components/validation/HintsSystem";
import { SolutionToggle } from "@/components/validation/SolutionToggle";
import {
  DifficultyBadge,
  PatternBadge,
  ModuleLabel,
} from "@/components/exercises/Badge";
import { useProgress } from "@/lib/hooks/useProgress";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  BookOpen,
  Lightbulb,
  Code2,
  Target,
} from "lucide-react";

export default function ExercisePage() {
  const params = useParams();
  const id = params.id as string;
  const { markCompleted, isCompleted, loaded } = useProgress();

  const exercise = getExerciseById(id);
  const [code, setCode] = useState(exercise?.starterCode || "");
  const [result, setResult] = useState<ReturnType<typeof runTests> | null>(
    null
  );
  const [isRunning, setIsRunning] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [showContext, setShowContext] = useState(true);

  // Find prev/next
  const currentIndex = exercises.findIndex((e) => e.id === id);
  const prevExercise = currentIndex > 0 ? exercises[currentIndex - 1] : null;
  const nextExercise =
    currentIndex < exercises.length - 1 ? exercises[currentIndex + 1] : null;

  const handleRun = useCallback(() => {
    if (!exercise || !code.trim()) return;

    setIsRunning(true);
    setTimeout(() => {
      const res = runTests(code, exercise.functionName, exercise.testCases);
      setResult(res);
      setIsRunning(false);

      // Mark as completed if all tests pass
      if (res.passed === res.total && res.total > 0) {
        markCompleted(exercise.id);
      }
    }, 100);
  }, [exercise, code, markCompleted]);

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
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          Ejercicio no encontrado
        </h1>
        <p className="mb-6 text-muted-foreground">
          El ejercicio que buscás no existe.
        </p>
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

  const exerciseCompleted = loaded && isCompleted(exercise.id);

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
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <ModuleLabel module={exercise.module} />
          {exerciseCompleted && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              <CheckCircle className="h-3.5 w-3.5" />
              Completado
            </span>
          )}
        </div>
        <h1 className="mt-2 mb-3 text-2xl font-bold text-foreground">
          {exercise.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          <PatternBadge pattern={exercise.pattern} />
          <DifficultyBadge difficulty={exercise.difficulty} />
        </div>
      </div>

      {/* Main content - two columns on larger screens */}
      <div className="grid gap-8 lg:grid-cols-[1fr,1fr]">
        {/* Left column - Problem description */}
        <div className="space-y-6">
          {/* Context */}
          <div className="rounded-xl border border-border bg-card">
            <button
              onClick={() => setShowContext(!showContext)}
              className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent rounded-t-xl"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                Contexto
              </span>
              {showContext ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            {showContext && (
              <div className="border-t border-border px-4 py-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exercise.context}
                </p>
              </div>
            )}
          </div>

          {/* Objective */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
              <Target className="h-4 w-4" />
              Objetivo
            </h3>
            <p className="text-sm leading-relaxed text-foreground">
              {exercise.description}
            </p>
          </div>

          {/* Restrictions */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <h4 className="mb-2 text-sm font-semibold text-emerald-400">
                Podés usar
              </h4>
              <ul className="space-y-1.5">
                {exercise.restrictions.can.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <h4 className="mb-2 text-sm font-semibold text-red-400">
                No podés usar
              </h4>
              <ul className="space-y-1.5">
                {exercise.restrictions.cant.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Example */}
          <div className="rounded-xl border border-border bg-card">
            <button
              onClick={() => setShowExample(!showExample)}
              className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent rounded-t-xl"
            >
              <span className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-muted-foreground" />
                Ejemplo
              </span>
              {showExample ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            {showExample && (
              <div className="border-t border-border bg-[#1a1b26] rounded-b-xl p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Entrada:</span>
                  <code className="font-mono text-cyan-400">
                    {exercise.example.input}
                  </code>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Salida:</span>
                  <code className="font-mono text-emerald-400">
                    {exercise.example.output}
                  </code>
                </div>
              </div>
            )}
          </div>

          {/* Learning Objective */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-lg">🎯</span>
              <span>
                <strong className="text-foreground">Objetivo de aprendizaje:</strong>{" "}
                {exercise.learningObjective}
              </span>
            </div>
          </div>
        </div>

        {/* Right column - Code editor and results */}
        <div className="space-y-6">
          {/* Editor */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">
                {exercise.functionName}.js
              </span>
            </div>
            <CodeEditor value={code} onChange={setCode} onKeyDown={handleKeyDown} />
          </div>

          {/* Run button */}
          <RunButton
            onClick={handleRun}
            isRunning={isRunning}
            disabled={!code.trim()}
          />

          {/* Results */}
          <OutputPanel result={result} isRunning={isRunning} />

          {/* Hints */}
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-4 py-3">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Lightbulb className="h-4 w-4 text-yellow-400" />
                Pistas
              </h3>
            </div>
            <div className="p-4">
              <HintsSystem hints={exercise.hints} />
            </div>
          </div>

          {/* Solution */}
          <SolutionToggle solution={exercise.solution} />
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
        {prevExercise ? (
          <Link
            href={`/ejercicios/${prevExercise.id}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
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
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
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
