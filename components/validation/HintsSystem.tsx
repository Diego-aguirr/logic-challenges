"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

interface HintsSystemProps {
  hints: string[];
}

export function HintsSystem({ hints }: HintsSystemProps) {
  const [visibleCount, setVisibleCount] = useState(1);

  if (hints.length === 0) return null;

  return (
    <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
      <div className="mb-3 flex items-center gap-2 text-yellow-400">
        <Lightbulb className="h-4 w-4" />
        <span className="text-sm font-medium">Pistas</span>
      </div>

      <ul className="mb-3 space-y-2">
        {hints.slice(0, visibleCount).map((hint, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
            <span className="shrink-0 text-yellow-500/70">{i + 1}.</span>
            <span>{hint}</span>
          </li>
        ))}
      </ul>

      {visibleCount < hints.length && (
        <button
          onClick={() => setVisibleCount((c) => c + 1)}
          className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          Ver siguiente pista ({visibleCount}/{hints.length})
        </button>
      )}
    </div>
  );
}
