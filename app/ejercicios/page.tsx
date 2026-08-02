import { ExerciseList } from "@/components/exercises/ExerciseList";
import { Code2 } from "lucide-react";

export default function EjerciciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
          <Code2 className="h-4 w-4" />
          {25} ejercicios
        </div>
        <h1 className="text-3xl font-bold text-foreground">Ejercicios</h1>
        <p className="mt-2 text-muted-foreground">
          Elegí un ejercicio, escribí tu solución y ejecutá para ver si está bien.
        </p>
      </div>

      {/* Exercise list with filters */}
      <ExerciseList />
    </div>
  );
}
