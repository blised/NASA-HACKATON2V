/**
 * AI-Assisted: Text translated to English by GPT-5 on 2025-10-05 (requested by Jose).
 * Structure supported by Vercel platform.
 */

"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SharkChartsSecondary() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-ocean-deep/5">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">How the Model Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Thanks to the data obtained from NASA’s PACE satellite (Plankton, Aerosol, Cloud, ocean Ecosystem),
              we were able to analyze how the presence of phytoplankton —the tiny organisms floating in the ocean
              that form the base of the food chain— relates to shark behavior and movement.
              We used ocean color and chlorophyll concentration measurements to detect areas where phytoplankton
              is most abundant, as those regions often attract small fish… and, consequently, large predators.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card
              className={`p-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Satellite Image</h3>
              <div className="w-full h-[300px] flex items-center justify-center">
                <img
                  src="/gallery/gallery-1.jpg"
                  alt="Satellite image showing shark threat evolution: overfishing, climate change, and pollution"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </Card>

            <Card
              className={`p-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Spectral Filter Image</h3>
              <div className="w-full h-[300px] flex items-center justify-center">
                <img
                  src="/gallery/gallery-10.jpg"
                  alt="Filtered spectral image showing shark habitat distribution"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
