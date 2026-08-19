import Link from "next/link";
import { Exercise } from "@/lib/exercises/types";
import { DifficultyBadge, PatternBadge } from "./Badge";
import { CheckCircle, Circle } from "lucide-react";

export function ExerciseCard({
  exercise,
  completed = false,
  index,
}: {
  exercise: Exercise;
  completed?: boolean;
  index?: number;
}) {
  return (
    <Link
      href={`/ejercicios/${exercise.id}`}
      className={`group block rounded-xl border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        completed ? "border-emerald-500/30" : "border-border"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          {index !== undefined && (
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
              {index}
            </span>
          )}
          <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary truncate">
            {exercise.title}
          </h3>
        </div>
        {completed ? (
          <CheckCircle className="h-5 w-5 shrink-0 text-emerald-400" />
        ) : (
          <Circle className="h-5 w-5 shrink-0 text-muted-foreground/40" />
        )}
      </div>

      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
        {exercise.context}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <PatternBadge pattern={exercise.pattern} />
        <DifficultyBadge difficulty={exercise.difficulty} />
      </div>

      {completed && (
        <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-400">
          <CheckCircle className="h-3.5 w-3.5" />
          Completado
        </div>
      )}
    </Link>
  );
}
