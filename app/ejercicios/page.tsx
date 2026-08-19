import { Suspense } from "react";
import { ExerciseList } from "@/components/exercises/ExerciseList";
import { BookOpen } from "lucide-react";

export default function EjerciciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
          <BookOpen className="h-4 w-4" />
          5 módulos — 46 ejercicios
        </div>
        <h1 className="text-3xl font-bold text-foreground">Ejercicios</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Aprendé paso a paso: primero con{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            for
          </code>{" "}
          y{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            if
          </code>
          , después con los métodos de JavaScript. Cada ejercicio tiene
          restricciones para que aprendas la lógica antes de la abreviatura.
        </p>
      </div>

      {/* Exercise list with filters */}
      <Suspense fallback={<div className="text-center py-8 text-muted-foreground">Cargando ejercicios...</div>}>
        <ExerciseList />
      </Suspense>
    </div>
  );
}
