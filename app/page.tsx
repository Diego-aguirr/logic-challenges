import Link from "next/link";
import { Code2, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20">
      {/* Hero */}
      <section className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <Zap className="h-4 w-4" />
          Gratis y en español
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Practicá lógica de{" "}
          <span className="text-primary">programación</span>
        </h1>

        <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
          Ejercicios interactivos para aprender a pensar como programador.
          Desde un simple <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">for</code> hasta algoritmos avanzados.
        </p>

        <Link
          href="/ejercicios"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
        >
          Empezar a practicar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 grid max-w-4xl gap-8 sm:grid-cols-3">
        {[
          {
            icon: Code2,
            title: "Escribí código",
            description: "Editor en línea con syntax highlighting. Escribí tu solución directamente en el navegador.",
          },
          {
            icon: Zap,
            title: "Resultado al instante",
            description: "Ejecutá tu código y conocé al toque si está bien o no. Sin esperas.",
          },
          {
            icon: CheckCircle,
            title: "Aprendé a tu ritmo",
            description: "Ejercicios de básico a avanzado. Mirá la solución cuando necesites ayuda.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30"
          >
            <feature.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* CTA bottom */}
      <section className="mx-auto mt-24 max-w-2xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          ¿Listo para practicar?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Elegí un ejercicio y empezá a escribir código. No hay registro necesario.
        </p>
        <Link
          href="/ejercicios"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition-all hover:border-primary/30 hover:bg-accent"
        >
          Ver ejercicios
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
