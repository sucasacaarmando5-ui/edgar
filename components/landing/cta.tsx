"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { RegistrationForm } from "./registration-form"

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 p-8 sm:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Listo para Comenzar tu Carrera de Trader?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Unete a miles de traders que ya estan operando con nuestro capital. Tu exito es nuestro exito.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <RegistrationForm
                trigger={
                  <Button size="lg" className="gap-2 px-8">
                    Comenzar Desafio Ahora
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                }
              />
              <Button size="lg" variant="outline" className="px-8" asChild>
                <a href="#planes">Ver Planes</a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Sin tarjeta de credito requerida para ver los planes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
