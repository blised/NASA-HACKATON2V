/**
 * AI-Assisted: Text translated to English by GPT-5 on 2025-10-05 (requested by Jose).
 * Structure supported by Vercel platform.
 */

"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Activity, Info, Construction } from "lucide-react"
import Link from "next/link"

// Simulated real-time shark data
const liveSharkData = [
  { id: 1, name: "Luna", species: "Whale Shark", lat: 20.5, lng: -87.3, status: "pending" },
  { id: 2, name: "Neptune", species: "Great White", lat: -34.5, lng: 18.8, status: "pending" },
  { id: 3, name: "Coral", species: "Whale Shark", lat: 8.2, lng: 77.5, status: "pending" },
  { id: 4, name: "Atlas", species: "Great White", lat: 37.8, lng: -122.4, status: "pending" },
  { id: 5, name: "Marina", species: "Whale Shark", lat: -12.0, lng: 96.8, status: "pending" },
]

export function LiveTrackingMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedShark, setSelectedShark] = useState<number | null>(null)

  useEffect(() => {
    // Leaflet or Mapbox integration for a real map would go here
    // For now, a simulated visualization is used
  }, [])

  return (
    <section id="live-tracking" className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <Activity className="mr-2 h-4 w-4" />
            Real-Time
          </Badge>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Live Tracking</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Follow the movement of tagged sharks around the world
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2 overflow-hidden p-0 relative">
            {/* In-progress overlay */}
            <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
              <Construction className="h-16 w-16 text-accent animate-pulse" />
              <div className="text-center px-4">
                <h3 className="text-2xl font-bold mb-2">System in Development</h3>
                <p className="text-muted-foreground mb-4">Real-time tracking will be available soon</p>
                <Link href="/tracking-device">
                  <Button className="gap-2">
                    <Info className="h-4 w-4" />
                    Learn About the Tracking Device
                  </Button>
                </Link>
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>

            <div
              ref={mapRef}
              className="relative h-[500px] w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
            >
              {/* Simulated map with markers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/world-map-ocean-blue-topographic.jpg"
                  alt="World map"
                  className="h-full w-full object-cover opacity-30"
                />
              </div>
              {/* Simulated markers */}
              {liveSharkData.map((shark, index) => (
                <div
                  key={shark.id}
                  className="absolute opacity-30"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 3) * 20}%`,
                  }}
                >
                  <MapPin className="h-8 w-8 text-destructive drop-shadow-lg" fill="currentColor" />
                </div>
              ))}
            </div>
          </Card>

          {/* Shark list */}
          <Card className="p-6">
            <h3 className="mb-4 text-xl font-semibold">Tracked Sharks</h3>
            <div className="space-y-3">
              {liveSharkData.map((shark) => (
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
                    </div>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">
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
