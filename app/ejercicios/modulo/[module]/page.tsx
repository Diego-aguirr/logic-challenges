"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getExercisesByModule } from "@/lib/exercises";
import { useProgress } from "@/lib/hooks/useProgress";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { ArrowLeft, BookOpen } from "lucide-react";

const moduleMeta: Record<
  string,
  { emoji: string; title: string; desc: string; color: string }
> = {
  "1": {
    emoji: "🟢",
    title: "Arrays y Bucles",
    desc: "Los 9 patrones básicos con for e if. Fundamentos de la iteración.",
    color: "emerald",
  },
  "2": {
    emoji: "🔵",
    title: "Métodos de JS",
    desc: "Reemplazá tus bucles con map, filter, reduce y compañía.",
    color: "blue",
  },
  "3": {
    emoji: "🟣",
    title: "Objetos",
    desc: "Propiedades, desestructuración, objetos anidados y arrays de objetos.",
    color: "purple",
  },
  "4": {
    emoji: "🟠",
    title: "Funciones",
    desc: "Callbacks, closures, funciones de orden superior y scope.",
    color: "orange",
  },
  "5": {
    emoji: "🔴",
    title: "JS Moderno",
    desc: "Optional chaining, async/await, try/catch, spread y rest.",
    color: "red",
  },
};

export default function ModuloPage() {
  const params = useParams();
  const moduleId = params.module as string;
  const meta = moduleMeta[moduleId];
  const exercises = meta ? getExercisesByModule(Number(moduleId) as 1 | 2 | 3 | 4 | 5) : [];
  const { isCompleted, loaded } = useProgress();

  if (!meta) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          Módulo no encontrado
        </h1>
        <p className="mb-6 text-muted-foreground">
          El módulo que buscás no existe.
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

  const completedCount = loaded
    ? exercises.filter((ex) => isCompleted(ex.id)).length
    : 0;
  const progress = exercises.length > 0 ? (completedCount / exercises.length) * 100 : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Back link */}
      <Link
        href="/ejercicios"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a todos los ejercicios
      </Link>

      {/* Module header */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
          <BookOpen className="h-4 w-4" />
          {exercises.length} ejercicios
        </div>
        <h1 className="text-3xl font-bold text-foreground">
          {meta.emoji} Módulo {moduleId} — {meta.title}
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">{meta.desc}</p>

        {/* Progress bar */}
        <div className="mt-6 max-w-md">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-foreground font-medium">Progreso</span>
            <span className="text-muted-foreground">
              {completedCount}/{exercises.length}
            </span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Exercise grid */}
      {exercises.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((ex, i) => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              completed={loaded && isCompleted(ex.id)}
              index={i + 1}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No hay ejercicios en este módulo.</p>
        </div>
      )}
    </div>
  );
}
