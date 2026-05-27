"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { RegistrationForm } from "./registration-form"

const plans = [
  {
    name: "Starter",
    price: "$99",
    accountSize: "$10,000",
    description: "Perfecto para comenzar tu carrera de trader fondeado",
    features: [
      "Cuenta de $10,000 USD",
      "Objetivo de ganancia: 8%",
      "Drawdown maximo: 10%",
      "Sin limite de tiempo",
      "Profit split: 80%",
      "Pago quincenal",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$249",
    accountSize: "$50,000",
    description: "Ideal para traders con experiencia comprobada",
    features: [
      "Cuenta de $50,000 USD",
      "Objetivo de ganancia: 8%",
      "Drawdown maximo: 10%",
      "Sin limite de tiempo",
      "Profit split: 85%",
      "Pago semanal",
      "Soporte prioritario",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$449",
    accountSize: "$100,000",
    description: "Para traders profesionales que buscan maximo capital",
    features: [
      "Cuenta de $100,000 USD",
      "Objetivo de ganancia: 8%",
      "Drawdown maximo: 10%",
      "Sin limite de tiempo",
      "Profit split: 90%",
      "Pago semanal",
      "Soporte VIP 24/7",
      "Acceso a comunidad privada",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="planes" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Elige tu Plan de Fondeo
          </h2>
          <p className="text-lg text-muted-foreground">
            Selecciona el tamano de cuenta ideal para tu estilo de trading
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col",
                plan.popular && "border-primary shadow-lg shadow-primary/20"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Mas Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> / unico pago</span>
                </div>
                <div className="mt-2 inline-flex items-center justify-center rounded-full bg-accent/20 px-3 py-1">
                  <span className="text-sm font-medium text-accent">
                    Cuenta de {plan.accountSize}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <RegistrationForm
                  trigger={
                    <Button
                      className="w-full gap-2"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Comenzar Desafio
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  }
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
