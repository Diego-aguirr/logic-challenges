import Link from "next/link";
import { Exercise } from "@/lib/exercises/types";
import { DifficultyBadge, CategoryBadge } from "./Badge";
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
        {exercise.description.slice(0, 80)}...
      </p>

      <div className="flex flex-wrap gap-2">
        <CategoryBadge category={exercise.category} />
        <DifficultyBadge difficulty={exercise.difficulty} />
      </div>
    </Link>
  );
}
