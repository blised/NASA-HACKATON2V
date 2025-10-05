import { HeroSection } from "@/components/hero-section"
import { LiveTrackingMap } from "@/components/live-tracking-map"
import { SharkInfo } from "@/components/shark-info"
import { SharkGallery } from "@/components/shark-gallery"
import { SharkChart } from "@/components/shark-charts"
import { SharkDataSection } from "@/components/shark-data-section"
import { SharkChartsSecondary } from "@/components/shark-charts-secondary"
import { References } from "@/components/references"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SharkChartsSecondary />
      <SharkChart />
      <SharkGallery />
      <LiveTrackingMap />
      <SharkDataSection />
      <SharkInfo />
      <References />
      <Footer />
    </main>
  )
}
