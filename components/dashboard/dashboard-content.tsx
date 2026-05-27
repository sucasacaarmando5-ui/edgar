"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp, 
  LogOut, 
  DollarSign, 
  Target, 
  Calendar, 
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { User } from "@supabase/supabase-js"

interface DashboardContentProps {
  user: User
}

export function DashboardContent({ user }: DashboardContentProps) {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
  }

  // Mock data for the dashboard
  const stats = {
    balance: 50000,
    profit: 2450,
    profitPercentage: 4.9,
    dailyDrawdown: 2.1,
    maxDrawdown: 5.2,
    tradingDays: 12,
    winRate: 68,
    tradesTotal: 47,
    tradesWin: 32,
    tradesLoss: 15,
  }

  const progressToTarget = 49 // % towards profit target

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">FundingEays</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {user.user_metadata?.full_name || user.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Cerrar Sesion
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Panel de Control</h1>
          <p className="text-muted-foreground">Bienvenido a tu cuenta de trading fondeada</p>
        </div>

        {/* Status Banner */}
        <Card className="mb-8 border-accent/50 bg-accent/10">
          <CardContent className="flex items-center gap-4 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
              <CheckCircle className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-foreground">Cuenta Activa - Fase 1</p>
              <p className="text-sm text-muted-foreground">Plan $50K | Iniciado hace 12 dias</p>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Balance Actual</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${stats.balance.toLocaleString()}</div>
              <p className="flex items-center text-xs text-accent">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +${stats.profit.toLocaleString()} ({stats.profitPercentage}%)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Drawdown Diario</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.dailyDrawdown}%</div>
              <Progress value={stats.dailyDrawdown * 20} className="mt-2 h-2" />
              <p className="mt-1 text-xs text-muted-foreground">Limite: 5%</p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Drawdown Maximo</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.maxDrawdown}%</div>
              <Progress value={stats.maxDrawdown * 10} className="mt-2 h-2" />
              <p className="mt-1 text-xs text-muted-foreground">Limite: 10%</p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Dias de Trading</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.tradingDays}</div>
              <p className="text-xs text-muted-foreground">Minimo requerido: 5 dias</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress & Performance */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Progreso hacia Objetivo</CardTitle>
              <CardDescription>Meta de ganancia: 8% ($4,000)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Ganancia actual</span>
                  <span className="font-medium text-foreground">${stats.profit.toLocaleString()} / $4,000</span>
                </div>
                <Progress value={progressToTarget} className="h-3" />
                <p className="text-center text-sm text-muted-foreground">{progressToTarget}% completado</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <p className="text-sm text-muted-foreground">
                  Te faltan <strong className="text-foreground">${(4000 - stats.profit).toLocaleString()}</strong> para completar tu objetivo. 
                  Sigue asi!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Rendimiento de Trading</CardTitle>
              <CardDescription>Estadisticas de tus operaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stats.tradesTotal}</div>
                  <p className="text-xs text-muted-foreground">Total Trades</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-accent">
                    <ArrowUpRight className="h-5 w-5" />
                    {stats.tradesWin}
                  </div>
                  <p className="text-xs text-muted-foreground">Ganadas</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-destructive">
                    <ArrowDownRight className="h-5 w-5" />
                    {stats.tradesLoss}
                  </div>
                  <p className="text-xs text-muted-foreground">Perdidas</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="font-medium text-foreground">{stats.winRate}%</span>
                </div>
                <Progress value={stats.winRate} className="mt-2 h-3" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Acciones Rapidas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col gap-2 py-4">
              <DollarSign className="h-6 w-6" />
              <span>Solicitar Pago</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4">
              <Target className="h-6 w-6" />
              <span>Ver Reglas</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4">
              <Calendar className="h-6 w-6" />
              <span>Historial</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4">
              <TrendingUp className="h-6 w-6" />
              <span>Nuevo Desafio</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
