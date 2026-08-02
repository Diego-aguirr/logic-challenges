import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-primary" />
          <span>&copy; {new Date().getFullYear()} Lógica</span>
        </div>
        <p>Hecho con ❤️ en español</p>
      </div>
    </footer>
  );
}
