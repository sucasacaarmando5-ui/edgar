"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Que es una empresa de fondeo?",
    answer:
      "Una empresa de fondeo proporciona capital a traders talentosos para que operen en los mercados financieros. Tu demuestras tus habilidades y nosotros te proporcionamos el capital necesario para operar, compartiendo las ganancias contigo.",
  },
  {
    question: "Cuanto puedo ganar como trader fondeado?",
    answer:
      "Tus ganancias dependen de tu rendimiento. Con nuestro profit split de hasta 90%, si generas $10,000 de ganancias en una cuenta de $100,000, te llevarias $9,000. No hay limite en cuanto puedes ganar.",
  },
  {
    question: "Que pasa si pierdo durante el desafio?",
    answer:
      "Si superas el drawdown maximo permitido, el desafio termina. Sin embargo, puedes intentarlo nuevamente adquiriendo un nuevo plan. Ofrecemos descuentos para traders que desean reintentar.",
  },
  {
    question: "Cuanto tiempo tengo para completar el desafio?",
    answer:
      "No hay limite de tiempo. Puedes tomarte el tiempo que necesites para alcanzar el objetivo de ganancias, siempre que respetes las reglas de gestion de riesgo.",
  },
  {
    question: "Que mercados puedo operar?",
    answer:
      "Puedes operar Forex (pares de divisas), Indices (S&P 500, Nasdaq, DAX), Commodities (Oro, Petroleo) y Criptomonedas principales. Todo desde una sola cuenta.",
  },
  {
    question: "Como y cuando recibo mis ganancias?",
    answer:
      "Una vez que solicites un retiro, procesamos el pago en menos de 24 horas. Aceptamos transferencia bancaria, PayPal, cripto y otros metodos de pago populares.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas sobre nuestros programas de fondeo
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-5 pb-5 text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
