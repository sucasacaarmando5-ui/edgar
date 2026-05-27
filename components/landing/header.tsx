"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">F</span>
          </div>
          <span className="text-xl font-bold tracking-tight">FundingEays</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#como-funciona" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Como Funciona
          </Link>
          <Link href="#planes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Planes
          </Link>
          <Link href="#beneficios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Beneficios
          </Link>
          <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/login">Iniciar Sesion</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/sign-up">Comenzar Ahora</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="#como-funciona"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link
              href="#planes"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Planes
            </Link>
            <Link
              href="#beneficios"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/auth/login">Iniciar Sesion</Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href="/auth/sign-up">Comenzar Ahora</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
