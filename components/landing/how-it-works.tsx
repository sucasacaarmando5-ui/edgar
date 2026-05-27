import { ClipboardCheck, Target, Wallet, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    title: "Elige tu Plan",
    description: "Selecciona el tamano de cuenta que mejor se adapte a tu estilo de trading.",
  },
  {
    icon: Target,
    title: "Completa el Desafio",
    description: "Demuestra tus habilidades alcanzando el objetivo de ganancias sin superar el drawdown maximo.",
  },
  {
    icon: Wallet,
    title: "Obten tu Cuenta",
    description: "Una vez aprobado, recibe acceso a tu cuenta fondeada con capital real.",
  },
  {
    icon: TrendingUp,
    title: "Retira tus Ganancias",
    description: "Opera, genera ganancias y retira hasta el 90% de tus beneficios cada mes.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            En solo 4 simples pasos podras comenzar a operar con nuestro capital
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
