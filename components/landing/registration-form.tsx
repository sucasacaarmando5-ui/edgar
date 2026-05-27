"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

interface RegistrationFormProps {
  trigger?: React.ReactNode
}

export function RegistrationForm({ trigger }: RegistrationFormProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    plan: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset after showing success
    setTimeout(() => {
      setOpen(false)
      setIsSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        plan: "",
      })
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="gap-2 px-8">
            Iniciar Desafio
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4 rounded-full bg-accent/20 p-3">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Registro Exitoso</h3>
            <p className="text-center text-muted-foreground">
              Te contactaremos pronto con los siguientes pasos.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Comienza tu Desafio</DialogTitle>
              <DialogDescription>
                Completa el formulario y un asesor te contactara para iniciar tu proceso de fondeo.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  placeholder="Juan Perez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo electronico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefono (WhatsApp)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+52 55 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium">
                  Experiencia en trading
                </label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona tu nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Principiante (0-1 ano)</SelectItem>
                    <SelectItem value="intermediate">Intermedio (1-3 anos)</SelectItem>
                    <SelectItem value="advanced">Avanzado (3-5 anos)</SelectItem>
                    <SelectItem value="expert">Experto (5+ anos)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="plan" className="text-sm font-medium">
                  Plan de interes
                </label>
                <Select
                  value={formData.plan}
                  onValueChange={(value) => setFormData({ ...formData, plan: value })}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k">Starter - $10,000 USD ($99)</SelectItem>
                    <SelectItem value="50k">Pro - $50,000 USD ($249)</SelectItem>
                    <SelectItem value="100k">Elite - $100,000 USD ($449)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Solicitar Informacion
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
              
              <p className="text-center text-xs text-muted-foreground">
                Al enviar aceptas nuestros terminos y condiciones y politica de privacidad.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
