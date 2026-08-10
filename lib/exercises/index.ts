import type { Exercise, Module, Pattern, Category, Difficulty } from "./types";
import { module1 } from "./modules/module1";
import { module2 } from "./modules/module2";
import { module3 } from "./modules/module3";
import { module4 } from "./modules/module4";
import { module5 } from "./modules/module5";

export const exercises: Exercise[] = [
  ...module1,
  ...module2,
  ...module3,
  ...module4,
  ...module5,
];

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((exercise) => exercise.id === id);
}

export function getExercisesByModule(module: Module): Exercise[] {
  return exercises.filter((exercise) => exercise.module === module);
}

export function getExercisesByDifficulty(difficulty: Difficulty): Exercise[] {
  return exercises.filter((exercise) => exercise.difficulty === difficulty);
}

export type { Module, Pattern, Category, Difficulty };
