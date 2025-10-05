/**
 * AI-Assisted: Text translated to English by GPT-5 on 2025-10-05 (requested by Jose).
 * Structure supported by Vercel platform.
 */

"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

const probabilityZones = [
  { region: "Mexican Caribbean", probability: 85, species: "Whale Shark", season: "Jun - Sep" },
  { region: "South Africa", probability: 90, species: "Great White", season: "Apr - Sep" },
  { region: "Maldives", probability: 80, species: "Whale Shark", season: "May - Nov" },
  { region: "California", probability: 75, species: "Great White", season: "Aug - Oct" },
  { region: "Western Australia", probability: 88, species: "Whale Shark", season: "Mar - Jul" },
]

export function ProbabilityMap() {
  return (
    <section className="w-full bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            <TrendingUp className="mr-2 h-4 w-4" />
            Predictive Analysis
          </Badge>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Probability Zones
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Discover where sharks are most likely to be found depending on the season
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Heat Map */}
          <Card className="overflow-hidden p-0">
            <div className="relative h-[400px] w-full">
              <img
                src="/world-map-heat-map-ocean-migration-routes.jpg"
                alt="Probability map"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-card-foreground">Low probability</span>
                  <div className="h-2 w-48 rounded-full bg-gradient-to-r from-blue-300 via-yellow-300 to-red-500" />
                  <span className="text-card-foreground">High probability</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Zone List */}
          <div className="space-y-4">
            {probabilityZones.map((zone, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{zone.region}</h3>
                    <p className="text-sm text-muted-foreground">{zone.species}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Season: {zone.season}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-accent">{zone.probability}%</div>
                    <p className="text-xs text-muted-foreground">probability</p>
                  </div>
                </div>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-accent transition-all" style={{ width: `${zone.probability}%` }} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
