# Schul-Dashboard – Starter

Minimalistischer iPad-Web-App-Prototyp (Light, Apple-Blau).
Englisch ist gelb. Die Tagesansicht zeigt im Prototyp alle Beispielstunden bis zur letzten Stunde.

## Lokal testen
Im Projektordner:
```bash
python -m http.server 8080
```
Dann im Browser `http://localhost:8080` öffnen.

## Stand
- UI-Prototyp: vorhanden
- Fachfarben: Beispielpalette angelegt (Englisch gelb)
- Tages-/Wochen-/Aufgaben-Navigation: Grundgerüst vorhanden
- WebUntis: noch NICHT angebunden
- Apple Erinnerungen: noch NICHT angebunden
- Hosting/Server: noch NICHT eingerichtet

## Nächste technische Schritte
1. Öffentliche WebUntis-Seite und ihre Netzwerkanfragen untersuchen.
2. Prüfen, ob Stundenplan und Vertretungsdaten ohne Login abrufbar sind.
3. Datenmodell und API implementieren; keine Zugangsdaten im Frontend speichern.
4. Kurzbefehle-/Erinnerungen-Integration mit ausdrücklicher Nutzerfreigabe entwerfen.
5. Deployment und HTTPS einrichten.
