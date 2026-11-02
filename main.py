from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Schul-Dashboard API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Vor Veröffentlichung auf die eigene Domain begrenzen.
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/api/timetable")
def timetable(date: str):
    # TODO: öffentliche WebUntis-Seite technisch analysieren und Datenabruf
    # implementieren. Noch keine echten Stundenplandaten verfügbar.
    raise HTTPException(
        status_code=501,
        detail="WebUntis-Datenquelle ist noch nicht angebunden."
    )
