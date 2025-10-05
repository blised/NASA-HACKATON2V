/**
 * AI-Assisted: Text translated to English by GPT-5 on 2025-10-05 (requested by Jose).
 * Structure supported by Vercel platform.
 */

"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SharkChart() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-20 px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-primary">
              Understanding the Ocean Through Sharks
            </h2>

            <div className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed space-y-6 text-pretty">
              <p>
                The study combines different satellite variables —such as phytoplankton presence, sea depth, surface temperature, and ocean currents— to identify patterns in shark behavior. 
                These ocean conditions directly influence food distribution, body temperature, and the migratory routes of each species, allowing us to understand why they concentrate in certain areas and how they react to environmental changes.
              </p>

              <p>
                However, this model is not limited to sharks. By integrating multiple data sources, we can apply the same methodology to study other marine species and even detect early signs of natural phenomena, such as cyclones or current disturbances. 
                In fact, it has been observed that many animals —including sharks— change their behavior before a storm, moving away from high-risk areas. 
                Understanding these patterns not only expands our knowledge of marine life but also helps improve environmental monitoring and prediction systems.
              </p>
            </div>
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
                  src="/gallery/gallery-2.jpg"
                  alt="Estimated population graph of whale and white sharks (2010–2024)"
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
                  src="/gallery/gallery-11.jpg"
                  alt="Average monthly migration distance graph of sharks"
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
