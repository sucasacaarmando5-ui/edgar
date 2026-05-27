import { Zap, Clock, Users, HeadphonesIcon, LineChart, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Pagos Rapidos",
    description: "Recibe tus ganancias en menos de 24 horas despues de solicitar el retiro.",
  },
  {
    icon: Clock,
    title: "Sin Limite de Tiempo",
    description: "Opera a tu propio ritmo. No hay presion ni fechas limite para completar el desafio.",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Unete a miles de traders que comparten estrategias y experiencias.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte 24/7",
    description: "Nuestro equipo esta disponible en cualquier momento para ayudarte.",
  },
  {
    icon: LineChart,
    title: "Multiples Mercados",
    description: "Opera Forex, Indices, Commodities y Criptomonedas desde una sola cuenta.",
  },
  {
    icon: ShieldCheck,
    title: "Reglas Claras",
    description: "Sin reglas ocultas. Todo es transparente desde el primer dia.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="bg-card/50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Por que Elegirnos
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos enfocamos en el exito de nuestros traders con las mejores condiciones del mercado
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
