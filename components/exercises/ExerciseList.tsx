"use client";

import { useState } from "react";
import { exercises, Module, Difficulty } from "@/lib/exercises/data";
import { ExerciseCard } from "./ExerciseCard";
import { useProgress } from "@/lib/hooks/useProgress";

const modules: { value: Module | 0; label: string; emoji: string }[] = [
  { value: 0, label: "Todos", emoji: "📚" },
  { value: 1, label: "Arrays y Bucles", emoji: "🟢" },
  { value: 2, label: "Métodos de JS", emoji: "🔵" },
  { value: 3, label: "Objetos", emoji: "🟣" },
  { value: 4, label: "Funciones", emoji: "🟠" },
  { value: 5, label: "JS Moderno", emoji: "🔴" },
];

const difficulties: { value: Difficulty | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "facil", label: "Fácil" },
  { value: "medio", label: "Medio" },
  { value: "dificil", label: "Difícil" },
];

export function ExerciseList() {
  const [module, setModule] = useState<Module | 0>(0);
  const [difficulty, setDifficulty] = useState<Difficulty | "todas">("todas");
  const { isCompleted, loaded } = useProgress();

  const filtered = exercises.filter((ex) => {
    if (module !== 0 && ex.module !== module) return false;
    if (difficulty !== "todas" && ex.difficulty !== difficulty) return false;
    return true;
  });

  // Group by module when showing all
  const grouped =
    module === 0
      ? ([1, 2, 3, 4, 5].map((m) => ({
          module: m as Module,
          exercises: filtered.filter((ex) => ex.module === m),
        })).filter((g) => g.exercises.length > 0))
      : null;

  // Count completed per module
  const moduleStats = [1, 2, 3, 4, 5].map((m) => {
    const moduleExercises = exercises.filter((ex) => ex.module === m);
    const completedCount = loaded
      ? moduleExercises.filter((ex) => isCompleted(ex.id)).length
      : 0;
    return {
      module: m,
      total: moduleExercises.length,
      completed: completedCount,
    };
  });

  return (
    <div>
      {/* Progress summary */}
      {loaded && (
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {moduleStats.map((stat) => (
            <div
              key={stat.module}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  Módulo {stat.module}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.completed}/{stat.total}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{
                    width: `${stat.total > 0 ? (stat.completed / stat.total) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Module tabs */}
        <div className="flex flex-wrap gap-2">
          {modules.map((m) => (
            <button
              key={m.value}
              onClick={() => setModule(m.value)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                module === m.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="mr-1">{m.emoji}</span>
              {m.label}
            </button>
          ))}
        </div>

        {/* Difficulty dropdown */}
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty | "todas")}
          className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          {difficulties.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-muted-foreground">
        {filtered.length} ejercicio{filtered.length !== 1 ? "s" : ""}
        {loaded && (
          <span className="ml-2 text-emerald-400">
            ({filtered.filter((ex) => isCompleted(ex.id)).length} completados)
          </span>
        )}
      </p>

      {/* Grouped view (all modules) */}
      {grouped ? (
        <div className="space-y-10">
          {grouped.map((group) => (
            <section key={group.module}>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {group.module === 1 && "🟢 Módulo 1 — Arrays y Bucles"}
                {group.module === 2 && "🔵 Módulo 2 — Métodos de JavaScript"}
                {group.module === 3 && "🟣 Módulo 3 — Objetos"}
                {group.module === 4 && "🟠 Módulo 4 — Funciones"}
                {group.module === 5 && "🔴 Módulo 5 — JavaScript Moderno"}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.exercises.map((ex) => (
                  <ExerciseCard
                    key={ex.id}
                    exercise={ex}
                    completed={loaded && isCompleted(ex.id)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : filtered.length > 0 ? (
        /* Flat view (single module selected) */
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ex) => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              completed={loaded && isCompleted(ex.id)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">
            No se encontraron ejercicios con esos filtros.
          </p>
        </div>
      )}
    </div>
  );
}
