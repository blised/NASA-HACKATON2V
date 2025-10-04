// app/api/sharks/route.ts
import { NextResponse } from "next/server"
import * as cheerio from "cheerio"

const OCEARCH_BASE = "https://www.ocearch.org/tracker/detail/"

/**
 * GET /api/sharks?slug=cayo
 * Optional: ?name=... (si decides mapear por nombre)
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get("slug")?.trim()
  const name = searchParams.get("name")?.trim()

  if (!slug && !name) {
    return NextResponse.json({ error: "Falta slug o name" }, { status: 400 })
  }

  // Por ahora usamos slug (recomendado)
  const url = OCEARCH_BASE + (slug || name)
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Next.js server)" },
      // Cachea 60s para no martillar la fuente
      next: { revalidate: 60 },
    })
    if (!r.ok) {
      return NextResponse.json({ error: `Upstream ${r.status}` }, { status: r.status })
    }

    const html = await r.text()
    const $ = cheerio.load(html)

    // 1) Nombre (por si lo quieres mostrar)
    const title = $("title").text().split("–")[0].trim() || slug

    // 2) Extraer "LATEST PING" y "LATEST Z-PING" del texto plano (robusto)
    const text = $.root().text().replace(/\s+/g, " ")
    const pingMatch = text.match(/LATEST PING:\s*([A-Za-z]{3}\s\d{1,2},\s\d{4},\s[\d:APMapm\. ]+)/)
    const zPingMatch = text.match(/LATEST Z-PING:\s*([A-Za-z]{3}\s\d{1,2},\s\d{4},\s[\d:APMapm\. ]+)/)

    // 3) (Opcional) si en tu flujo también vas a guardar coords, puedes parsearlas de otro origen.
    // El detalle/DOM de OCEARCH no expone lat/lng directas confiables;
    // normalmente combinarás esto con otra fuente (wrapper/API) o con tu propio dataset.

    return NextResponse.json(
      {
        slug: slug || name,
        name: title,
        latest_ping_text: pingMatch?.[1] || null,
        latest_z_ping_text: zPingMatch?.[1] || null,
        source: url,
      },
      {
        headers: { "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=120" },
      }
    )
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "server error" }, { status: 500 })
  }
}
