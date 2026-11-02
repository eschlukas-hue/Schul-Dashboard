
from datetime import date
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from webuntis_public import WebUntisPublicClient

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://schul-dashboard-ff1t.onrender.com"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = WebUntisPublicClient(
    "hh5842.webuntis.com",
    school="hh5842"
)

@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/api/classes")
def get_classes():
    classes = client.list_classes()
    return [
        {
            "id": c.id,
            "name": c.name,
            "long_name": c.long_name
        }
        for c in classes
    ]
    

@app.get("/api/timetable")
def timetable(date_value: date | None = None):
    selected_date = date_value or date.today()

    try:
        week = client.fetch_week(
            class_id=1669,
            date=selected_date
        )

        return {
            "periods": [
                {
                    "date": str(p.date),
                    "start": str(p.start_time),
                    "end": str(p.end_time),
                    "raw": str(p),
                }
                for p in week.periods
            ]
        }
    except Exception as error:
        raise HTTPException(status_code=502, detail=str(error))
