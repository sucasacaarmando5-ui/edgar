import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, AlertCircle } from "lucide-react"

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-background p-6 md:p-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">FundingEays</span>
          </Link>

          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/20">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">Error de Autenticacion</CardTitle>
              <CardDescription className="text-base">
                Hubo un problema al verificar tu cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-secondary/50 p-4 text-sm text-muted-foreground">
                <p>Esto puede ocurrir por:</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>El enlace ha expirado</li>
                  <li>El enlace ya fue utilizado</li>
                  <li>Hubo un error en el servidor</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Button asChild className="w-full">
                  <Link href="/auth/login">Intentar Iniciar Sesion</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/auth/sign-up">Crear Nueva Cuenta</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/">Volver al Inicio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
