import { ExerciseList } from "@/components/exercises/ExerciseList";
import { BookOpen, Target, TrendingUp } from "lucide-react";

export default function EjerciciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
          <BookOpen className="h-4 w-4" />
          4 módulos — 31 ejercicios
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

      {/* Learning path info */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">
              Restricciones
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Cada ejercicio te dice qué podés y qué no podés usar. Así aprendés
            la lógica antes de los atajos.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">
              Progresión
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Los módulos se construyen uno sobre otro. Arrancá con el 1 y andá
            subiendo.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Pistas</h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Si te trabás, usá las pistas. Primero una pregunta, después más
            detalle. Sin darte la respuesta.
          </p>
        </div>
      </div>

      {/* Exercise list with filters */}
      <ExerciseList />
    </div>
  );
}
