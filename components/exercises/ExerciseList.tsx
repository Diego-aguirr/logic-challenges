"use client";

import { useState } from "react";
import { exercises, Category, Difficulty } from "@/lib/exercises/data";
import { ExerciseCard } from "./ExerciseCard";

const categories: { value: Category | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "fundamentos", label: "Fundamentos" },
  { value: "cadenas", label: "Cadenas" },
  { value: "arreglos", label: "Arreglos" },
  { value: "objetos", label: "Objetos" },
  { value: "logica", label: "Lógica" },
];

const difficulties: { value: Difficulty | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "facil", label: "Fácil" },
  { value: "medio", label: "Medio" },
  { value: "dificil", label: "Difícil" },
];

export function ExerciseList() {
  const [category, setCategory] = useState<Category | "todas">("todas");
  const [difficulty, setDifficulty] = useState<Difficulty | "todas">("todas");

  const filtered = exercises.filter((ex) => {
    if (category !== "todas" && ex.category !== category) return false;
    if (difficulty !== "todas" && ex.difficulty !== difficulty) return false;
    return true;
  });

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                category === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
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
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length} ejercicio{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} />
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
