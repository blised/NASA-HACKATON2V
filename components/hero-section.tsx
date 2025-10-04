"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToTracking = () => {
    document.getElementById("live-tracking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Images Grid */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
        <div
          className={`relative h-full w-full transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <img
            src="/whale-shark-swimming-underwater-blue-ocean.jpg"
            alt="Tiburón ballena"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
        <div
          className={`relative h-full w-full transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <img
            src="/great-white-shark-ocean-surface-dramatic.jpg"
            alt="Gran tiburón blanco"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30" />
        </div>
        <div
          className={`relative hidden h-full w-full md:block transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <img
            src="/shark-silhouette-deep-blue-ocean-underwater.jpg"
            alt="Tiburón en el océano"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-balance font-sans text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Rastreador de Tiburones
          </h1>
          <p className="text-pretty text-xl text-white/90 md:text-2xl lg:text-3xl">
            Descubre la ubicación de tiburones en tiempo real y explora el fascinante mundo de estos majestuosos
            depredadores marinos
          </p>
          <Button
            onClick={scrollToTracking}
            size="lg"
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Explorar Ahora
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  )
}
