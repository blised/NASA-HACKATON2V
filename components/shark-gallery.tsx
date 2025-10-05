/** * AI-Assisted: Text translated to English by GPT-5 on 2025-10-05 (requested by Jose).
 * Structure supported by Vercel platform.
 */

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { RefreshCw, Github, FileText } from "lucide-react"

const GITHUB_URL = "https://github.com/blised/Clorofila"
const PDF_URL = "/pdfs/project-aurora-chlorophyll-mapping-model.pdf"
const PDF_HASH = "#aurora-pdf-viewer"

export function SharkGallery() {
  const [currentSet, setCurrentSet] = useState<"set1" | "set2">("set1")
  const { ref, isVisible } = useScrollAnimation()

  const gallerySet1 = [
    "/gallery/gallery-1.jpg",
    "/gallery/gallery-2.jpg",
    "/gallery/gallery-3.jpg",
    "/gallery/gallery-4.jpg",
    "/gallery/gallery-5.jpg",
    "/gallery/gallery-6.jpg",
    "/gallery/gallery-7.jpg",
    "/gallery/gallery-8.jpg",
    "/gallery/gallery-9.jpg",
  ]

  const gallerySet2 = [
    "/gallery/gallery-10.jpg",
    "/gallery/gallery-11.jpg",
    "/gallery/gallery-12.jpg",
    "/gallery/gallery-13.jpg",
    "/gallery/gallery-14.jpg",
    "/gallery/gallery-15.jpg",
    "/gallery/gallery-16.jpg",
    "/gallery/gallery-17.jpg",
    "/gallery/gallery-18.jpg",
  ]

  const currentImages = currentSet === "set1" ? gallerySet1 : gallerySet2

  const toggleSet = () => setCurrentSet(currentSet === "set1" ? "set2" : "set1")

  // Try to smooth-scroll to the PDF viewer if present; otherwise open PDF directly.
  const goToPdf = (e: React.MouseEvent) => {
    const el = document.getElementById("aurora-pdf-viewer")
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: "smooth" })
    }
    // if not found, the Link's href will handle navigation/opening
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-ocean-deep/5">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Examples of Processed Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Try clicking the button and you’ll see the magic! 😀
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {currentImages.map((image, index) => (
              <div
                key={`${currentSet}-${index}`}
                className={`relative aspect-square overflow-hidden rounded-lg bg-ocean-deep/10 transition-all duration-700 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Shark ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Toggle button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={toggleSet}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              {currentSet === "set1" ? "SEE FILTERED DATA!" : "GO BACK"}
            </Button>
          </div>

          {/* NEW: GitHub + PDF buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            {/* GitHub */}
            <Button asChild variant="outline" className="px-6">
              <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code on GitHub
              </Link>
            </Button>

            {/* PDF: try to scroll to viewer; fallback opens the PDF */}
            <Button asChild variant="secondary" className="px-6">
              <Link href={`${PDF_HASH}`} onClick={goToPdf} target="_self">
                <FileText className="mr-2 h-4 w-4" />
                View Documentation (PDF)
              </Link>
            </Button>
          </div>

          {/* Optional tiny helper link if user opened component in another route without the viewer */}
          <div className="text-center mt-2">
            <Link
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline"
            >
              Open PDF directly (fallback)
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
