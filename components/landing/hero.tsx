"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, DollarSign } from "lucide-react"
import { RegistrationForm } from "./registration-form"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Fondeo desde $10,000 USD</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-7xl">
            Opera con{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nuestro Capital
            </span>
            <br />
            Queda con las Ganancias
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl">
            Demuestra tus habilidades de trading y obten acceso a cuentas fondeadas de hasta $100,000 USD. Sin arriesgar tu capital personal.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RegistrationForm />
            <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
              <a href="#planes">Ver Planes</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">$2.5M+</span>
              </div>
              <span className="text-sm text-muted-foreground">Pagado a Traders</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-3xl font-bold">5,000+</span>
              </div>
              <span className="text-sm text-muted-foreground">Traders Activos</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">90%</span>
              </div>
              <span className="text-sm text-muted-foreground">Profit Split</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
