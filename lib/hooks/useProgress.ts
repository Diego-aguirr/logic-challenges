"use client";

import { useState, useCallback } from "react";
import { exercises } from "@/lib/exercises";

const STORAGE_KEY = "logica-progress";

function loadFromStorage(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return new Set(JSON.parse(stored) as string[]);
    }
  } catch {
    // Ignore parse errors
  }
  return new Set();
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(loadFromStorage);

  const saveToStorage = useCallback((next: Set<string>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
    } catch {
      // Ignore storage errors
    }
  }, []);

  const markCompleted = useCallback(
    (exerciseId: string) => {
      setCompleted((prev) => {
        const next = new Set(prev);
        next.add(exerciseId);
        saveToStorage(next);
        return next;
      });
    },
    [saveToStorage]
  );

  const isCompleted = useCallback(
    (exerciseId: string) => completed.has(exerciseId),
    [completed]
  );

  const getModuleProgress = useCallback(
    (moduleId: number) => {
      const moduleExercises = exercises.filter((ex) => ex.module === moduleId);
      const completedCount = moduleExercises.filter((ex) =>
        completed.has(ex.id)
      ).length;
      return { completed: completedCount, total: moduleExercises.length };
    },
    [completed]
  );

  const getStats = useCallback(() => {
    return {
      total: completed.size,
    };
  }, [completed]);

  return {
    completed,
    loaded: true,
    markCompleted,
    isCompleted,
    getModuleProgress,
    getStats,
  };
}
