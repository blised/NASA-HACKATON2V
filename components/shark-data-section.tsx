/**
 * AI-Assisted: Text translated to English by GPT-5 on 2025-10-05 (requested by Jose).
 * Structure supported by Vercel platform.
 */

"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Waves, TrendingUp, Globe, Shield } from "lucide-react"

export function SharkDataSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-ocean-deep/5 to-background">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Key Shark Facts</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Sharks are essential for the health of our oceans. As apex predators, they regulate marine species
                  populations and maintain ecosystem balance. However, they face unprecedented threats that demand our
                  immediate attention.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-ocean-light/10 border-ocean-medium/20">
                  <Waves className="h-10 w-10 text-ocean-medium mb-3" />
                  <h3 className="font-bold text-xl mb-2">450+ Million</h3>
                  <p className="text-sm text-muted-foreground">Years of evolution in the oceans</p>
                </Card>

                <Card className="p-6 bg-ocean-light/10 border-ocean-medium/20">
                  <TrendingUp className="h-10 w-10 text-ocean-accent mb-3" />
                  <h3 className="font-bold text-xl mb-2">500+ Species</h3>
                  <p className="text-sm text-muted-foreground">Different types of sharks</p>
                </Card>

                <Card className="p-6 bg-ocean-light/10 border-ocean-medium/20">
                  <Globe className="h-10 w-10 text-ocean-medium mb-3" />
                  <h3 className="font-bold text-xl mb-2">All Oceans</h3>
                  <p className="text-sm text-muted-foreground">Present in waters around the world</p>
                </Card>

                <Card className="p-6 bg-ocean-light/10 border-ocean-medium/20">
                  <Shield className="h-10 w-10 text-ocean-accent mb-3" />
                  <h3 className="font-bold text-xl mb-2">25% Threatened</h3>
                  <p className="text-sm text-muted-foreground">Species at risk of extinction</p>
                </Card>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img src="/shark-ecosystem.jpg" alt="Shark in its ecosystem" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-ocean-deep text-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-bold text-2xl mb-1">100 Million</p>
                <p className="text-sm opacity-90">Sharks die annually due to human activity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
