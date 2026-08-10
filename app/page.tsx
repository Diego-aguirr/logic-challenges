import Link from "next/link";
import { Code2, Zap, CheckCircle, ArrowRight, BookOpen, Target, TrendingUp, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-muted/30 px-4 py-24 sm:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-primary/3 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            Gratis y en español
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Practicá lógica de{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              programación
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Ejercicios interactivos para aprender a pensar como programador.
            Desde un simple{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              for
            </code>{" "}
            hasta async/await y patrones de React.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/ejercicios"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              Empezar a practicar
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-base font-medium text-foreground transition-all hover:border-primary/30 hover:bg-accent"
            >
              ¿Cómo funciona?
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-muted/30 px-4 py-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "46", label: "Ejercicios" },
            { value: "5", label: "Módulos" },
            { value: "43", label: "Patrones" },
            { value: "100%", label: "Gratis" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              ¿Cómo funciona?
            </h2>
            <p className="text-muted-foreground">
              Aprendé escribiendo código, no leyendo teoría
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                icon: BookOpen,
                title: "Leé el problema",
                description:
                  "Cada ejercicio tiene un contexto real, un objetivo claro y restricciones que te obligan a pensar.",
              },
              {
                step: "2",
                icon: Code2,
                title: "Escribí tu solución",
                description:
                  "Usá el editor en línea. Escribí la función que resuelve el problema. Sin copiar, sin atajos.",
              },
              {
                step: "3",
                icon: Zap,
                title: "Ejecutá y verificá",
                description:
                  "Corré tus tests al instante. Si pasa todo, ¡listo! Si no, revisá los errores y intentá de nuevo.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
              >
                <div className="absolute -top-3 left-6 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {item.step}
                </div>
                <item.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module roadmap */}
      <section className="border-t border-border bg-muted/20 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              El camino de aprendizaje
            </h2>
            <p className="text-muted-foreground">
              De los patrones básicos a las funciones avanzadas
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                emoji: "🟢",
                module: 1,
                title: "Arrays y Bucles",
                desc: "Los 9 patrones básicos con for y if",
                tag: "Arrancá acá",
                color: "emerald",
              },
              {
                emoji: "🔵",
                module: 2,
                title: "Métodos de JS",
                desc: "Reemplazá tus bucles con map, filter, reduce...",
                tag: "Después",
                color: "blue",
              },
              {
                emoji: "🟣",
                module: 3,
                title: "Objetos",
                desc: "Propiedades, desestructuración, anidados",
                tag: "Seguí practicando",
                color: "purple",
              },
              {
                emoji: "🟠",
                module: 4,
                title: "Funciones",
                desc: "Callbacks, closures, funciones de orden superior",
                tag: "Nivel avanzado",
                color: "orange",
              },
              {
                emoji: "🔴",
                module: 5,
                title: "JS Moderno",
                desc: "Optional chaining, async/await, try/catch",
                tag: "Preparación para React",
                color: "red",
              },
            ].map((m) => (
              <Link
                key={m.module}
                href={`/ejercicios?module=${m.module}`}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-3 text-2xl">{m.emoji}</div>
                <h3 className="mb-1 text-sm font-semibold text-foreground group-hover:text-primary">
                  Módulo {m.module} — {m.title}
                </h3>
                <p className="mb-3 text-xs text-muted-foreground">{m.desc}</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  {m.tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              ¿Por qué Lógica?
            </h2>
            <p className="text-muted-foreground">
              Diseñado para aprender de verdad, no para sentir que aprendés
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Restricciones reales",
                description:
                  "Cada ejercicio te obliga a usar solo ciertas herramientas. Así aprendés la lógica antes de la abreviatura.",
              },
              {
                icon: Zap,
                title: "Feedback instantáneo",
                description:
                  "Ejecutá tu código y conocé al toque si está bien. Sin compilar, sin esperas, sin excusas.",
              },
              {
                icon: TrendingUp,
                title: "Progresión gradual",
                description:
                  "Empezás con bucles simples y terminás con async/await. Cada módulo se construye sobre el anterior.",
              },
              {
                icon: Code2,
                title: "Contexto real",
                description:
                  "Cada ejercicio simula un problema real de desarrollo. No es 'sumá dos números', es 'filtrá productos de un e-commerce'.",
              },
              {
                icon: BookOpen,
                title: "Pistas progresivas",
                description:
                  "Si te trabás, dale a 'Ver pista'. Primero una pregunta, después más detalle. Sin darte la respuesta.",
              },
              {
                icon: CheckCircle,
                title: "Progreso guardado",
                description:
                  "Tu avance se guarda automáticamente. Volvé cuando quieras, seguí donde dejaste.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
              >
                <feature.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="border-t border-border bg-muted/20 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            ¿Listo para practicar?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Elegí un ejercicio y empezá a escribir código. No hay registro
            necesario. Tu progreso se guarda solo.
          </p>
          <Link
            href="/ejercicios"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            Ver ejercicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
