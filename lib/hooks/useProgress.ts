"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "logica-progress";

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as string[];
        setCompleted(new Set(parsed));
      }
    } catch {
      // Ignore parse errors
    }
    setLoaded(true);
  }, []);

  // Save to localStorage when completed changes
  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
      } catch {
        // Ignore storage errors
      }
    }
  }, [completed, loaded]);

  const markCompleted = useCallback((exerciseId: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(exerciseId);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (exerciseId: string) => completed.has(exerciseId),
    [completed]
  );

  const getModuleProgress = useCallback(
    (moduleId: number, total: number) => {
      const moduleExercises = [...completed].filter((id) => {
        // Extract module from exercise id pattern or count
        return true; // We'll compute this differently
      });
      return { completed: 0, total };
    },
    [completed]
  );

  const getStats = useCallback(() => {
    return {
      total: completed.size,
      // We'll compute per-module stats in the component
    };
  }, [completed]);

  return {
    completed,
    loaded,
    markCompleted,
    isCompleted,
    getModuleProgress,
    getStats,
  };
}
