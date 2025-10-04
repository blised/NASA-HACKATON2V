"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Activity, Clock } from "lucide-react"

// Datos simulados de tiburones en tiempo real
type Shark = {
  id: number
  name: string
  species: string
  lat: number
  lng: number
  status: "activo" | "inactivo"
  latestPingText?: string
  latestPingISO?: string
}

const initialSharks: Shark[] = [
  { id: 1, name: "Luna", species: "Tiburón Ballena", lat: 20.5, lng: -87.3, status: "activo" },
  { id: 2, name: "Neptuno", species: "Gran Blanco",    lat: -34.5, lng: 18.8,  status: "activo" }, // ← mapeado a "cayo"
  { id: 3, name: "Coral", species: "Tiburón Ballena",   lat: 8.2,  lng: 77.5,  status: "activo" },
  { id: 4, name: "Atlas", species: "Gran Blanco",       lat: 37.8, lng: -122.4,status: "activo" },
  { id: 5, name: "Marina", species: "Tiburón Ballena",  lat: -12.0,lng: 96.8,  status: "activo" },
]

// Relación tiburón → slug OCEARCH que quieres consultar
const slugBySharkId: Record<number, string> = {
  2: "cayo", // Neptuno muestra el ping del tiburón "Cayo"
  // 3: "otro-slug",
  // 4: "otro-slug-2",
}

function isActive(pingISO?: string, hours = 48) {
  if (!pingISO) return false
  const ageH = (Date.now() - new Date(pingISO).getTime()) / (1000 * 60 * 60)
  return ageH <= hours
}

export function LiveTrackingMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedShark, setSelectedShark] = useState<number | null>(null)
  const [sharks, setSharks] = useState<Shark[]>(initialSharks)

  // Carga de pings desde tu API FastAPI
  // useEffect(() => {
  //   const controller = new AbortController()

  //   async function loadPings() {
  //     for (const s of sharks) {
  //       const slug = slugBySharkId[s.id]
  //       if (!slug) continue

  //       try {
  //         const res = await fetch(`http://localhost:8000/ping/${slug}`, { signal: controller.signal })
  //         const data = await res.json()
  //         setSharks((prev) =>
  //           prev.map((p) =>
  //             p.id === s.id
  //               ? {
  //                   ...p,
  //                   latestPingText: data.latest_ping_text ?? "N/D",
  //                   latestPingISO: data.latest_ping_iso,
  //                   status: isActive(data.latest_ping_iso) ? "activo" : "inactivo",
  //                 }
  //               : p
  //           )
  //         )
  //       } catch (err) {
  //         console.error("Error cargando ping", slug, err)
  //       }
  //     }
  //   }

  //   loadPings()
  //   return () => controller.abort()
  // }, []) // carga una sola vez
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/sharks?slug=cayo")
      const data = await res.json()
      // Adjunta el ping al tiburón que quieras
      setSharks(prev =>
        prev.map(s =>
          s.id === 2
            ? { ...s, latestPingText: data.latest_ping_text ?? "N/D" }
            : s
        )
      )
    }
    load()
  }, [])

  return (
    <section id="live-tracking" className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <Activity className="mr-2 h-4 w-4" />
            En Tiempo Real
          </Badge>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Rastreo en Vivo
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Sigue el movimiento de tiburones etiquetados alrededor del mundo
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Mapa */}
          <Card className="lg:col-span-2 overflow-hidden p-0">
            <div
              ref={mapRef}
              className="relative h-[500px] w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/world-map-ocean-blue-topographic.jpg"
                  alt="Mapa mundial"
                  className="h-full w-full object-cover opacity-60"
                />
              </div>
              {sharks.map((shark, index) => (
                <div
                  key={shark.id}
                  className="absolute animate-pulse cursor-pointer"
                  style={{ left: `${20 + index * 15}%`, top: `${30 + (index % 3) * 20}%` }}
                  onClick={() => setSelectedShark(shark.id)}
                >
                  <MapPin className="h-8 w-8 text-destructive drop-shadow-lg" fill="currentColor" />
                </div>
              ))}
            </div>
          </Card>

          {/* Lista */}
          <Card className="p-6">
            <h3 className="mb-4 text-xl font-semibold">Tiburones Rastreados</h3>
            <div className="space-y-3">
              {sharks.map((shark) => (
                <button
                  key={shark.id}
                  onClick={() => setSelectedShark(shark.id)}
                  className={`w-full rounded-lg border p-4 text-left transition-all hover:border-accent ${
                    selectedShark === shark.id ? "border-accent bg-accent/10" : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{shark.name}</p>
                      <p className="text-sm text-muted-foreground">{shark.species}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {shark.lat.toFixed(2)}°, {shark.lng.toFixed(2)}°
                      </p>
                      {/* NUEVO: último ping */}
                      {shark.latestPingText && (
                        <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          Último ping: {shark.latestPingText}
                        </p>
                      )}
                    </div>
                    <Badge variant="outline" className={shark.status === "activo" ? "border-green-500 text-green-500" : ""}>
                      {shark.status}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

