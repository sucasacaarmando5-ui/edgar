import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, Mail, CheckCircle } from "lucide-react"

export default function SignUpSuccessPage() {
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
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">Registro Exitoso</CardTitle>
              <CardDescription className="text-base">
                Tu cuenta ha sido creada correctamente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4 rounded-lg bg-secondary/50 p-4">
                <Mail className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Revisa tu email</p>
                  <p className="text-sm text-muted-foreground">
                    Te enviamos un enlace de confirmacion. Por favor revisa tu bandeja de entrada y spam.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-foreground">Proximos pasos:</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">1</span>
                    Confirma tu email haciendo clic en el enlace
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">2</span>
                    Inicia sesion con tus credenciales
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">3</span>
                    Elige tu plan de fondeo y comienza tu desafio
                  </li>
                </ol>
              </div>

              <div className="flex flex-col gap-3">
                <Button asChild className="w-full">
                  <Link href="/auth/login">Ir a Iniciar Sesion</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
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
