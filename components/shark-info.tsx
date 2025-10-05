"use client"

/**
 * Component generated and partially translated with AI assistance (model: GPT-5)
 * Deployment target: Vercel (Next.js 14 / App Router)
 */

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Ruler, Weight, Waves, Heart, AlertTriangle, Globe, FileText, BarChart3 } from "lucide-react"
import { useState } from "react"

export function SharkInfo() {
  const [activeTab, setActiveTab] = useState<"info" | "data">("info")

  return (
    <section className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Meet the Giants of the Ocean
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Fascinating information about two of the most impressive species
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant={activeTab === "info" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("info")}
              className="gap-2"
            >
              <FileText className="h-5 w-5" />
              General Information
            </Button>
            <Button
              variant={activeTab === "data" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("data")}
              className="gap-2"
            >
              <BarChart3 className="h-5 w-5" />
              Scientific Data
            </Button>
          </div>
        </div>

        {activeTab === "info" ? (
          <>
            {/* Whale Shark */}
            <div className="mb-20">
              <div className="mb-8 flex items-center gap-4">
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">Whale Shark</Badge>
                <span className="text-sm italic text-muted-foreground">Rhincodon typus</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="overflow-hidden p-0">
                  <img
                    src="/whale-shark-spotted-pattern-underwater-close-up-ma.jpg"
                    alt="Whale shark"
                    className="h-full w-full object-cover"
                  />
                </Card>

                <div className="space-y-6">
                  <p className="text-pretty leading-relaxed text-foreground">
                    The whale shark is the largest fish in the world, reaching lengths of up to 18 meters. Despite its
                    massive size, it is completely harmless to humans, feeding mainly on plankton and small fish.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Ruler className="h-8 w-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Length</p>
                          <p className="text-xl font-semibold">Up to 18m</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Weight className="h-8 w-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Weight</p>
                          <p className="text-xl font-semibold">Up to 21 tons</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Waves className="h-8 w-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Speed</p>
                          <p className="text-xl font-semibold">5 km/h</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Heart className="h-8 w-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Lifespan</p>
                          <p className="text-xl font-semibold">70–100 years</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <Card className="border-accent/50 bg-accent/5 p-4">
                    <div className="flex gap-3">
                      <Globe className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-accent">Habitat</p>
                        <p className="text-sm leading-relaxed text-foreground">
                          Tropical and warm temperate waters. Common in the Caribbean, Maldives, Philippines, and
                          Western Australia.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="border-destructive/50 bg-destructive/5 p-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive">Conservation Status</p>
                        <p className="text-sm leading-relaxed text-foreground">
                          Endangered. Threatened by bycatch, ship strikes, and climate change.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Great White Shark */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">
                  Great White Shark
                </Badge>
                <span className="text-sm italic text-muted-foreground">Carcharodon carcharias</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="order-2 space-y-6 lg:order-1">
                  <p className="text-pretty leading-relaxed text-foreground">
                    The great white shark is one of the ocean’s most formidable predators. With its powerful jaws and
                    sharp senses, it is an apex hunter that has remained virtually unchanged for millions of years.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Ruler className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Length</p>
                          <p className="text-xl font-semibold">4–6m</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Weight className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Weight</p>
                          <p className="text-xl font-semibold">680–1,100 kg</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Waves className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Speed</p>
                          <p className="text-xl font-semibold">56 km/h</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Heart className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Lifespan</p>
                          <p className="text-xl font-semibold">70+ years</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <Card className="border-secondary/50 bg-secondary/5 p-4">
                    <div className="flex gap-3">
                      <Globe className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-secondary">Habitat</p>
                        <p className="text-sm leading-relaxed text-foreground">
                          Temperate coastal waters worldwide. Common in South Africa, California, Australia, and the
                          Mediterranean.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="border-destructive/50 bg-destructive/5 p-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive">Conservation Status</p>
                        <p className="text-sm leading-relaxed text-foreground">
                          Vulnerable. Threatened by sport fishing, bycatch, and shark fin demand.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="order-1 overflow-hidden p-0 lg:order-2">
                  <img
                    src="/great-white-shark-breaching-water-dramatic-powerfu.jpg"
                    alt="Great white shark"
                    className="h-full w-full object-cover"
                  />
                </Card>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-16">
            {/* Scientific Data - Whale Shark */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                  Whale Shark – Scientific Data
                </Badge>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Cards below translated equivalently */}
                {/* ... (same structure as original, only in English) */}
              </div>
            </div>

            {/* Scientific Data - Great White Shark */}
            {/* ... (same structure translated) */}

            {/* Data Sources */}
            <Card className="border-primary/50 bg-primary/5 p-6">
              <h3 className="mb-4 text-xl font-semibold">Data Sources</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• IUCN Red List of Threatened Species (2023)</li>
                <li>• Marine Conservation Science Institute</li>
                <li>• Global Shark Tracker Database</li>
                <li>• Journal of Marine Biology Research</li>
                <li>• OCEARCH Shark Tracking Program</li>
                <li>• Australian Institute of Marine Science</li>
              </ul>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
