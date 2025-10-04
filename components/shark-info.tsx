"use client"

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
            Conoce a los Gigantes del Océano
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Información fascinante sobre dos de las especies más impresionantes
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant={activeTab === "info" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("info")}
              className="gap-2"
            >
              <FileText className="h-5 w-5" />
              Información General
            </Button>
            <Button
              variant={activeTab === "data" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("data")}
              className="gap-2"
            >
              <BarChart3 className="h-5 w-5" />
              Datos Científicos
            </Button>
          </div>
        </div>

        {activeTab === "info" ? (
          <>
            {/* Tiburón Ballena */}
            <div className="mb-20">
              <div className="mb-8 flex items-center gap-4">
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">Tiburón Ballena</Badge>
                <span className="text-sm italic text-muted-foreground">Rhincodon typus</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="overflow-hidden p-0">
                  <img
                    src="/whale-shark-spotted-pattern-underwater-close-up-ma.jpg"
                    alt="Tiburón ballena"
                    className="h-full w-full object-cover"
                  />
                </Card>

                <div className="space-y-6">
                  <p className="text-pretty leading-relaxed text-foreground">
                    El tiburón ballena es el pez más grande del mundo, alcanzando longitudes de hasta 18 metros. A pesar
                    de su tamaño imponente, es completamente inofensivo para los humanos, alimentándose principalmente
                    de plancton y peces pequeños.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Ruler className="h-8 w-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Longitud</p>
                          <p className="text-xl font-semibold">Hasta 18m</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Weight className="h-8 w-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Peso</p>
                          <p className="text-xl font-semibold">Hasta 21 ton</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Waves className="h-8 w-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Velocidad</p>
                          <p className="text-xl font-semibold">5 km/h</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Heart className="h-8 w-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Longevidad</p>
                          <p className="text-xl font-semibold">70-100 años</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <Card className="border-accent/50 bg-accent/5 p-4">
                    <div className="flex gap-3">
                      <Globe className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-accent">Hábitat</p>
                        <p className="text-sm leading-relaxed text-foreground">
                          Aguas tropicales y templadas cálidas. Común en el Caribe, Maldivas, Filipinas y Australia
                          Occidental.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="border-destructive/50 bg-destructive/5 p-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive">Estado de Conservación</p>
                        <p className="text-sm leading-relaxed text-foreground">
                          En peligro de extinción. Amenazado por la pesca accidental, colisiones con embarcaciones y el
                          cambio climático.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Gran Tiburón Blanco */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">Gran Tiburón Blanco</Badge>
                <span className="text-sm italic text-muted-foreground">Carcharodon carcharias</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="order-2 space-y-6 lg:order-1">
                  <p className="text-pretty leading-relaxed text-foreground">
                    El gran tiburón blanco es uno de los depredadores más formidables del océano. Con sus poderosas
                    mandíbulas y sentidos agudos, es un cazador supremo que ha existido durante millones de años,
                    prácticamente sin cambios evolutivos.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Ruler className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Longitud</p>
                          <p className="text-xl font-semibold">4-6m</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Weight className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Peso</p>
                          <p className="text-xl font-semibold">680-1,100 kg</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Waves className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Velocidad</p>
                          <p className="text-xl font-semibold">56 km/h</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Heart className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Longevidad</p>
                          <p className="text-xl font-semibold">70+ años</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <Card className="border-secondary/50 bg-secondary/5 p-4">
                    <div className="flex gap-3">
                      <Globe className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-secondary">Hábitat</p>
                        <p className="text-sm leading-relaxed text-foreground">
                          Aguas costeras templadas de todos los océanos. Común en Sudáfrica, California, Australia y el
                          Mediterráneo.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="border-destructive/50 bg-destructive/5 p-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive">Estado de Conservación</p>
                        <p className="text-sm leading-relaxed text-foreground">
                          Vulnerable. Amenazado por la pesca deportiva, captura accidental y la demanda de aletas de
                          tiburón.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="order-1 overflow-hidden p-0 lg:order-2">
                  <img
                    src="/great-white-shark-breaching-water-dramatic-powerfu.jpg"
                    alt="Gran tiburón blanco"
                    className="h-full w-full object-cover"
                  />
                </Card>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-16">
            {/* Datos del Tiburón Ballena */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                  Tiburón Ballena - Datos Científicos
                </Badge>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-accent">Estudios de Población</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Población global estimada: 200,000 individuos</li>
                    <li>• Declive del 50% en los últimos 75 años</li>
                    <li>• Agregaciones conocidas en 20+ ubicaciones</li>
                    <li>• Madurez sexual: 25-30 años</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-accent">Comportamiento Migratorio</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Migraciones de hasta 12,000 km registradas</li>
                    <li>• Profundidad máxima: 1,928 metros</li>
                    <li>• Velocidad promedio: 3-5 km/h</li>
                    <li>• Patrones estacionales bien definidos</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-accent">Alimentación</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Filtra 6,000 litros de agua por hora</li>
                    <li>• Consume 21 kg de plancton diario</li>
                    <li>• 300-350 filas de dientes diminutos</li>
                    <li>• Alimentación por succión activa</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-accent">Reproducción</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Ovovivíparos (huevos eclosionan internamente)</li>
                    <li>• Hasta 300 crías por camada</li>
                    <li>• Crías nacen con 40-60 cm de longitud</li>
                    <li>• Ciclo reproductivo poco conocido</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-accent">Identificación</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Patrón de manchas único como huella digital</li>
                    <li>• Más de 7,000 individuos catalogados</li>
                    <li>• Tecnología de reconocimiento por IA</li>
                    <li>• Base de datos global compartida</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-accent">Amenazas Documentadas</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• 100+ colisiones con barcos anuales</li>
                    <li>• Captura en redes: causa principal de muerte</li>
                    <li>• Turismo no regulado: estrés crónico</li>
                    <li>• Cambio climático: alteración de rutas</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Datos del Gran Tiburón Blanco */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">
                  Gran Tiburón Blanco - Datos Científicos
                </Badge>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-secondary">Estudios de Población</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Población global: 3,000-5,000 individuos</li>
                    <li>• Declive del 70% en algunas regiones</li>
                    <li>• Hotspots: Sudáfrica, California, Australia</li>
                    <li>• Madurez sexual: 12-15 años (machos), 14-16 (hembras)</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-secondary">Comportamiento de Caza</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Fuerza de mordida: 1.8 toneladas</li>
                    <li>• 300 dientes serrados en 5 filas</li>
                    <li>• Ataque desde abajo a 40 km/h</li>
                    <li>• Detecta 1 gota de sangre en 100 litros</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-secondary">Migración y Territorio</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Migraciones transoceánicas de 20,000 km</li>
                    <li>• Profundidad de buceo: hasta 1,200 metros</li>
                    <li>• Territorios de caza de 100+ km²</li>
                    <li>• Retorno a sitios específicos anualmente</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-secondary">Reproducción</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Ovovivíparos con canibalismo intrauterino</li>
                    <li>• 2-10 crías por camada</li>
                    <li>• Gestación: 11-12 meses</li>
                    <li>• Crías nacen con 1.2-1.5 metros</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-secondary">Sentidos Extraordinarios</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Detecta campos eléctricos de 0.005 microvoltios</li>
                    <li>• Visión 10x mejor que humanos en agua</li>
                    <li>• Olfato detecta presas a 5 km de distancia</li>
                    <li>• Línea lateral detecta vibraciones mínimas</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-secondary">Interacción con Humanos</h3>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• 5-10 ataques fatales por año globalmente</li>
                    <li>• 80% de ataques son "mordidas exploratorias"</li>
                    <li>• Confusión con presas naturales (focas)</li>
                    <li>• Riesgo real: 1 en 3.7 millones</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Fuentes */}
            <Card className="border-primary/50 bg-primary/5 p-6">
              <h3 className="mb-4 text-xl font-semibold">Fuentes de Datos</h3>
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
