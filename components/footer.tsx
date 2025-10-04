import { Waves } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Waves className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold">Rastreador de Tiburones</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Datos proporcionados por organizaciones de conservación marina. Ayúdanos a proteger estas especies
            majestuosas.
          </p>
          <p className="text-sm text-muted-foreground">© 2025 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
