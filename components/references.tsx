/**
 * AI-Assisted: Text translated to English by GPT-5 on 2025-10-05 (requested by Jose).
 * Structure supported by Vercel platform.
 */

"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, ExternalLink, BookOpen } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function References() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          References and Technology
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Data collected using advanced satellite technology and supported by scientific research.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Satellites */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Satellite className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Satellites Used</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">PACE</Badge>
                  <span className="text-sm text-muted-foreground">NASA Earth Science Mission</span>
                </div>
                <p className="text-sm text-foreground">
                  <a
                    href="https://pace.gsfc.nasa.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    PACE Satellite
                  </a>{" "}
                  monitors ocean color and chlorophyll concentration, enabling detection of phytoplankton
                  and its relationship with marine ecosystems.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">SWOT</Badge>
                  <span className="text-sm text-muted-foreground">Ocean Topography</span>
                </div>
                <p className="text-sm text-foreground">
                  <a
                    href="https://podaac.jpl.nasa.gov/swot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    SWOT (Surface Water and Ocean Topography)
                  </a>{" "}
                  measures the height and motion of the ocean surface, helping analyze currents and
                  zones of high oceanic productivity.
                </p>
              </div>
            </div>
          </Card>

          {/* Studies */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Referenced Studies</h3>
            </div>
            <div className="space-y-4">
              <a
                href="https://www.nature.com/articles/s41586-019-1444-4"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-4 border-accent pl-4 hover:bg-accent/5 transition-colors p-2 -ml-2 rounded-r"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Nature</Badge>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Global patterns of shark movements and behavior
                </p>
                <p className="text-xs text-muted-foreground">
                  Study on global shark migration and behavioral patterns using satellite data.
                </p>
              </a>
              <a
                href="https://www.science.org/doi/10.1126/science.aav9898"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-4 border-accent pl-4 hover:bg-accent/5 transition-colors p-2 -ml-2 rounded-r"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Science</Badge>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Spatial ecology of sharks in the Anthropocene
                </p>
                <p className="text-xs text-muted-foreground">
                  Research on how human activities alter the spatial behavior of sharks.
                </p>
              </a>
              <a
                href="https://www.pnas.org/doi/abs/10.1073/pnas.1903067116"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-4 border-accent pl-4 hover:bg-accent/5 transition-colors p-2 -ml-2 rounded-r"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">PNAS</Badge>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Predicting predator distributions with satellite ocean data
                </p>
                <p className="text-xs text-muted-foreground">
                  Relationship between the distribution of marine predators and satellite variables
                  such as temperature and chlorophyll concentration.
                </p>
              </a>
            </div>
          </Card>
        </div>

        {/* Code Repository */}
        <div className="grid md:grid-cols-1 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Available Code</h3>
              </div>
              <Badge variant="secondary">GitHub</Badge>
            </div>

            <p className="text-sm text-foreground mb-4">
              All project code is available in the public repository. Here you’ll find data processing
              scripts, notebooks, and the site’s frontend.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Danpix/NASA-HACKATON.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline hover:text-primary flex items-center gap-2"
              >
                https://github.com/Danpix/NASA-HACKATON.git
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </div>

        {/* Final Note */}
        <Card className="p-6 bg-muted/50">
          <p className="text-sm text-center text-muted-foreground">
            <strong className="text-foreground">Note:</strong> The data presented on this platform come from
            satellite observations from NASA missions (PACE, MODIS, SWOT) and are supported by
            scientific research published in high-impact journals. The live tracking system is currently under development.
          </p>
        </Card>
      </div>
    </section>
  )
}
