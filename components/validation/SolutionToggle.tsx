"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface SolutionToggleProps {
  solution: string;
}

export function SolutionToggle({ solution }: SolutionToggleProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-card">
      <button
        onClick={() => setVisible(!visible)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
      >
        <span className="flex items-center gap-2">
          {visible ? (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Eye className="h-4 w-4 text-muted-foreground" />
          )}
          {visible ? "Ocultar solución" : "Ver solución"}
        </span>
      </button>

      {visible && (
        <div className="border-t border-border">
          <pre className="overflow-x-auto p-4 font-mono text-sm text-foreground">
            <code>{solution}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
