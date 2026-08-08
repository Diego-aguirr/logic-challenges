"use client";

import { Play, Loader2 } from "lucide-react";

interface RunButtonProps {
  onClick: () => void;
  isRunning: boolean;
  disabled?: boolean;
}

export function RunButton({ onClick, isRunning, disabled }: RunButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isRunning || disabled}
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isRunning ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Ejecutando...
        </>
      ) : (
        <>
          <Play className="h-4 w-4" />
          Ejecutar
        </>
      )}
    </button>
  );
}
