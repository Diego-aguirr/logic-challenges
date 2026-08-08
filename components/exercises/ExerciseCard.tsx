import Link from "next/link";
import { Exercise } from "@/lib/exercises/types";
import { DifficultyBadge, ModuleBadge, PatternBadge } from "./Badge";
import { CheckCircle, Code2 } from "lucide-react";

export function ExerciseCard({
  exercise,
  completed = false,
}: {
  exercise: Exercise;
  completed?: boolean;
}) {
  return (
    <Link
      href={`/ejercicios/${exercise.id}`}
      className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
          {exercise.title}
        </h3>
        {completed ? (
          <CheckCircle className="h-5 w-5 shrink-0 text-emerald-400" />
        ) : (
          <Code2 className="h-5 w-5 shrink-0 text-muted-foreground" />
        )}
      </div>

      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
        {exercise.context.slice(0, 100)}...
      </p>

      <div className="flex flex-wrap gap-2">
        <ModuleBadge module={exercise.module} />
        <PatternBadge pattern={exercise.pattern} />
        <DifficultyBadge difficulty={exercise.difficulty} />
      </div>

      {completed && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400">
          <CheckCircle className="h-3.5 w-3.5" />
          Completado
        </div>
      )}
    </Link>
  );
}
