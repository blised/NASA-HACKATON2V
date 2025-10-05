/**
 * AI-Assisted: Text translated to English by GPT-5 on 2025-10-05 (requested by Jose).
 * Structure supported by Vercel platform.
 */

import { Waves } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Waves className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold">Shark Tracker</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Data provided by marine conservation organizations. Help us protect these majestic species.
          </p>
          <p className="text-sm text-muted-foreground">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
