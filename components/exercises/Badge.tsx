import { Difficulty, Category } from "@/lib/exercises/types";

const difficultyConfig: Record<Difficulty, { label: string; className: string }> = {
  facil: {
    label: "Fácil",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  medio: {
    label: "Medio",
    className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  dificil: {
    label: "Difícil",
    className: "bg-red-500/10 text-red-400 border-red-500/20",
  },
};

const categoryConfig: Record<Category, { label: string; className: string }> = {
  fundamentos: {
    label: "Fundamentos",
    className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  cadenas: {
    label: "Cadenas",
    className: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  arreglos: {
    label: "Arreglos",
    className: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  objetos: {
    label: "Objetos",
    className: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  },
  logica: {
    label: "Lógica",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const config = difficultyConfig[difficulty];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}

export function CategoryBadge({ category }: { category: Category }) {
  const config = categoryConfig[category];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}
