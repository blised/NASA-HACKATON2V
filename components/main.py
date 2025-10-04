# main.py
import re, requests
from bs4 import BeautifulSoup
from datetime import datetime, timezone
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Habilita CORS para tu dominio/puerto (ajústalo)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Next.js local
        "https://tu-dominio.com", # Producción
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE = "https://www.ocearch.org/tracker/detail/"

def scrape_latest_ping(slug: str):
    url = BASE + slug.strip("/")
    r = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=20)
    r.raise_for_status()

    soup = BeautifulSoup(r.text, "html.parser")
    text = soup.get_text(" ", strip=True)

    # LATEST PING
    m = re.search(r"LATEST PING:\s*([A-Za-z]{3}\s\d{1,2},\s\d{4},\s[\d:APMapm\. ]+)", text)
    latest_ping_text = m.group(1) if m else None

    # LATEST Z-PING (opcional)
    z = re.search(r"LATEST Z-PING:\s*([A-Za-z]{3}\s\d{1,2},\s\d{4},\s[\d:APMapm\. ]+)", text)
    z_ping_text = z.group(1) if z else None

    latest_ping_iso = None
    if latest_ping_text:
        try:
            latest_dt = datetime.strptime(latest_ping_text, "%b %d, %Y, %I:%M:%S %p")
            latest_ping_iso = latest_dt.replace(tzinfo=timezone.utc).isoformat()
        except Exception:
            pass

    return {
        "slug": slug,
        "latest_ping_text": latest_ping_text,
        "latest_ping_iso": latest_ping_iso,
        "z_ping_text": z_ping_text,
        "source": url,
    }

@app.get("/ping/{slug}")
def ping(slug: str):
    return scrape_latest_ping(slug)
