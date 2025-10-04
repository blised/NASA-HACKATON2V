// app/api/sharks/route.ts
import { NextResponse } from "next/server"

const OCEARCH_BASE = "https://www.ocearch.org/tracker/detail/"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get("slug")?.trim()
  if (!slug) {
    return NextResponse.json({ error: "Falta slug" }, { status: 400 })
  }

  const url = OCEARCH_BASE + slug
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Next.js server)" },
      // cache de 60s
      next: { revalidate: 60 },
    })
    if (!r.ok) {
      return NextResponse.json({ error: `Upstream ${r.status}` }, { status: r.status })
    }

    const html = await r.text()
    // texto plano para buscar los labels
    const text = html.replace(/\s+/g, " ")

    const pingMatch = text.match(/LATEST PING:\s*([A-Za-z]{3}\s\d{1,2},\s\d{4},\s[\d:APMapm\. ]+)/)
    const zPingMatch = text.match(/LATEST Z-PING:\s*([A-Za-z]{3}\s\d{1,2},\s\d{4},\s[\d:APMapm\. ]+)/)

    // título como nombre aproximado
    const titleMatch = html.match(/<title>(.*?)<\/title>/i)
    const name = titleMatch?.[1]?.split("–")[0].trim() || slug

    return NextResponse.json(
      {
        slug,
        name,
        latest_ping_text: pingMatch?.[1] || null,
        latest_z_ping_text: zPingMatch?.[1] || null,
        source: url,
      },
      {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
        },
      }
    )
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "server error" }, { status: 500 })
  }
}

