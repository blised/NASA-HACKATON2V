import { HeroSection } from "@/components/hero-section"
import { LiveTrackingMap } from "@/components/live-tracking-map"
import { ProbabilityMap } from "@/components/probability-map"
import { SharkInfo } from "@/components/shark-info"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LiveTrackingMap />
      <ProbabilityMap />
      <SharkInfo />
      <Footer />
    </main>
  )
}
