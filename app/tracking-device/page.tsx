"use client"

/**
 * TrackingDevicePage
 * Content translated and curated with AI assistance (model: GPT-5)
 * Deployment target: Vercel / Netlify (Next.js 14 / App Router)
 */

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Cpu,
  Radio,
  Battery,
  Satellite,
  Waves,
  Shield,
  Zap,
  BookOpen,
  ListChecks,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const PDF_URL = "/pdfs/project-aurora-segundo-reto.pdf"

export default function TrackingDevicePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          {/* Button: scroll to embedded PDF viewer */}
          <div className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => {
                const el = document.getElementById("aurora-pdf-viewer")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <BookOpen className="h-4 w-4" />
              View PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <Cpu className="mr-2 h-4 w-4" />
              Tracking Technology
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Satellite Tracking Device
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Advanced telemetry system for real-time monitoring of sharks in their natural habitat
            </p>
          </div>

          {/* Device Image */}
          <div className="mb-16 flex justify-center">
            <Card className="overflow-hidden max-w-2xl">
              <Image
                src="/Dispositivo.jpg"
                alt="Satellite tracking device for sharks"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </Card>
          </div>

          {/* Technical Specifications */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <Card className="p-6">
              <Satellite className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satellite Communication</h3>
              <p className="text-muted-foreground">
                Data transmission via Argos satellites with global coverage. Sends GPS location every 2–4 hours when the
                shark surfaces.
              </p>
            </Card>

            <Card className="p-6">
              <Battery className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Long-Life Battery</h3>
              <p className="text-muted-foreground">
                High-capacity lithium battery lasting 3–5 years. Intelligent power management system to maximize
                lifespan.
              </p>
            </Card>

            <Card className="p-6">
              <Waves className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Depth Sensors</h3>
              <p className="text-muted-foreground">
                Measures depth up to 2000 m, water temperature, and dive patterns. Crucial data for behavior studies.
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hydrodynamic Design</h3>
              <p className="text-muted-foreground">
                Titanium housing resistant to corrosion and pressure. Design minimizes drag and does not affect natural
                behavior.
              </p>
            </Card>

            <Card className="p-6">
              <Radio className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Anchoring System</h3>
              <p className="text-muted-foreground">
                Attachment via specialized dart to the dorsal fin. Quick and minimally invasive procedure performed by
                experts.
              </p>
            </Card>

            <Card className="p-6">
              <Zap className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatic Release</h3>
              <p className="text-muted-foreground">
                Programmable release mechanism. The device detaches automatically after the study period without harming
                the animal.
              </p>
            </Card>
          </div>

          {/* How It Works */}
          <Card className="p-8 bg-card">
            <h2 className="text-3xl font-bold mb-6 text-center">How Does It Work?</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Capture & Tagging</h3>
                  <p className="text-muted-foreground">
                    Scientists temporarily capture the shark and attach the device to the dorsal fin through a quick and
                    safe procedure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Data Collection</h3>
                  <p className="text-muted-foreground">
                    The device continuously records GPS location, depth, water temperature, and movement patterns of the
                    shark.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Satellite Transmission</h3>
                  <p className="text-muted-foreground">
                    When the shark surfaces, the device transmits the collected data to Argos satellites in orbit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Analysis & Visualization</h3>
                  <p className="text-muted-foreground">
                    The data is processed and visualized in real time on our platform, allowing researchers and the
                    public to follow the shark’s journey.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Conservation & Ops */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Conservation Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              This technology allows us to better understand migratory routes, feeding grounds, and reproduction areas
              of sharks. The collected data is essential to establish marine protected areas and develop effective
              conservation strategies.
            </p>
            <h2 className="text-3xl font-bold mb-4">Efficient Design & Operation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              This technology enables a deeper understanding of shark behavior while optimizing energy use and ensuring
              long-term, reliable operation for conservation outcomes.
            </p>
            <Link href="/">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Live Tracking
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================  EMBEDDED PDF VIEWER  ======================== */}
      <section id="aurora-pdf-viewer" className="py-16 border-t bg-card/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">PDF Document: AURORA Project</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            View the <strong>Project AURORA — Segundo reto</strong> file directly on the page.
          </p>
          <div className="w-full h-[80vh] border rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={PDF_URL}
              title="Project AURORA — Segundo reto"
              width="100%"
              height="100%"
              className="border-0"
            />
          </div>
          <div className="text-center mt-3">
            <a href={PDF_URL} target="_blank" className="underline text-sm">
              Open PDF in a new tab
            </a>
          </div>
        </div>
      </section>

      {/* ========================  SECTIONS ADDED FROM PDF  ======================== */}

      {/* TOC / Quick Index */}
      <section id="aurora-toc" className="py-10 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">
              <BookOpen className="h-4 w-4 mr-2" />
              AURORA — PDF Contents
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Section Overview</h2>
            <p className="text-muted-foreground mt-2">Key sections from the document for quick reference.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="#aurora-arquitectura">
              <Card className="p-4 hover:shadow-md transition">General Architecture</Card>
            </Link>
            <Link href="#aurora-stl">
              <Card className="p-4 hover:shadow-md transition">STL-ULTRA (Shark-Tag Live)</Card>
            </Link>
            <Link href="#aurora-stl-diseno">
              <Card className="p-4 hover:shadow-md transition">STL — Design & Form</Card>
            </Link>
            <Link href="#aurora-hnr">
              <Card className="p-4 hover:shadow-md transition">HNR-ULTRA (Hydro-Net Relay)</Card>
            </Link>
            <Link href="#aurora-operacion">
              <Card className="p-4 hover:shadow-md transition">Efficient Design & Operation</Card>
            </Link>
            <Link href="#aurora-referencias">
              <Card className="p-4 hover:shadow-md transition">References</Card>
            </Link>
          </div>
        </div>
      </section>

      {/* General Architecture (PDF) */}
      <section id="aurora-arquitectura" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">
              <Cpu className="h-4 w-4 mr-2" />
              AURORA Architecture
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">System General Architecture</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
              AURORA integrates an implantable unit <strong>STL-ULTRA</strong> and a relay buoy{" "}
              <strong>HNR-ULTRA</strong> for bioenergetic telemetry, sub-metric localization (TDOA), and secure
              satellite uplink (VSAT).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">STL-ULTRA (Shark-Tag Live)</h3>
              </div>
              <p className="text-muted-foreground">
                On-board unit for edge processing, encrypted storage, and acoustic/GPS transmission to HNR-ULTRA.
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground space-y-1">
                <li>Variables: ingestion (Pt1000 + Micro-NIR), location (GPS RTK), depth, temperature.</li>
                <li>Target autonomy: 3–5 years with BMS and duty-cycle.</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <Radio className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">HNR-ULTRA (Hydro-Net Relay)</h3>
              </div>
              <p className="text-muted-foreground">
                Reference/relay buoy: receives encrypted acoustic packets, validates signatures, and forwards via VSAT.
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground space-y-1">
                <li>Sub-metric TDOA localization with rubidium time base.</li>
                <li>Solar energy + battery for long-term operation.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* STL-ULTRA — Components & Functions */}
      <section id="aurora-stl" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <Badge className="mb-4">
            <Shield className="h-4 w-4 mr-2" />
            STL-ULTRA
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Main Components & Functions</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Ti-6Al-4V Housing</h3>
              <p className="text-muted-foreground text-sm">Pressure resistance and biocompatibility; anti-fouling coat.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Li-SOCl₂ Battery + Supercap</h3>
              <p className="text-muted-foreground text-sm">Primary source and current peaks; 3–5 years with BMS.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Pt1000 (internal)</h3>
              <p className="text-muted-foreground text-sm">Thermal drop detection → ingestion events.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Micro-NIR</h3>
              <p className="text-muted-foreground text-sm">Chemical classification of prey via reflectance spectroscopy.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">External Thermistor</h3>
              <p className="text-muted-foreground text-sm">Ambient temperature with anti-fouling grid.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">GPS RTK</h3>
              <p className="text-muted-foreground text-sm">Sub-metric positioning with low-profile dorsal antenna.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Acoustic Transducer</h3>
              <p className="text-muted-foreground text-sm">Short, robust packets for HNR link.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Pressure Sensor</h3>
              <p className="text-muted-foreground text-sm">Depth with protective anti-fouling membrane.</p>
            </Card>
            <Card className="p-5">
              <h3 className="font-semibold mb-1">Main Electronics (BMS + sensors)</h3>
              <p className="text-muted-foreground text-sm">Smart energy management and sensor multiplexing.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* STL — Design & Form */}
      <section id="aurora-stl-diseno" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">STL-ULTRA Design & Form</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Geometry & Hydrodynamics</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Oval/torpedo profile, rounded edges, slightly pointed bow.</li>
                <li>Smooth surface to reduce drag; orientation parallel to the animal’s axis.</li>
                <li>Dimensions: ~15–20 cm (length), 4–6 cm (max diameter).</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Placement & Anchoring</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Flush dorsal GPS; lateral/ventral transducer; ventral pressure and Micro-NIR.</li>
                <li>Dorsolateral implantation 10–15 cm behind the dorsal fin.</li>
                <li>Titanium subdermal fins for fixation and flow alignment.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* HNR-ULTRA — Components & Process */}
      <section id="aurora-hnr" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <Badge className="mb-4">
            <Satellite className="h-4 w-4 mr-2" />
            HNR-ULTRA
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Relay & Reference Buoy</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Main Components</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>5083-H116 floating structure (anti-corrosive).</li>
                <li>Solar panel + rechargeable battery (&gt;5 years).</li>
                <li>Rubidium oscillator (ultra-precise time base).</li>
                <li>Acoustic receiver (ATM-885 compatible).</li>
                <li>VSAT for uplink to remote servers.</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Reception & Transmission Process</h3>
              <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                <li>Reception of encrypted acoustic packets (≈ every 5 min).</li>
                <li>Security validation and digital signatures.</li>
                <li>Sub-metric localization via TDOA.</li>
                <li>Prioritized satellite transmission (VSAT) to servers.</li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* Efficient Design & Operation */}
      <section id="aurora-operacion" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <ListChecks className="h-5 w-5 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold">Efficient Design & Operation</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Minimizes behavioral impact, optimizes energy for 3–5 years, prioritizes critical data (ingestion, location,
            temperature), and ensures automatic retransmission when HNR-ULTRA coverage is regained.
          </p>
        </div>
      </section>

      {/* References */}
      <section id="aurora-referencias" className="py-16 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">References</h2>
          <Card className="p-6 space-y-2 text-sm text-muted-foreground">
            <p>
              Place the PDF links here (ACS Sensors, ScienceDirect, WHOI, NOAA, etc.) and group them by category:
              sensors, energy, anti-fouling, telemetry, and TDOA.
            </p>
            <div className="pt-2">
              <Link
                href="https://github.com/Danpix/NASA-HACKATON"
                target="_blank"
                className="inline-flex items-center gap-2 text-primary underline"
              >
                <ExternalLink className="h-4 w-4" /> Project code
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* ======================  END PDF SECTIONS  ====================== */}
    </main>
  )
}
