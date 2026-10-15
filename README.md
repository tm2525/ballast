# BALLAST
Concurrent strength for endurance athletes — single-file offline PWA (no dependencies, no account). Dark or light (white) theme in Setup. Runs on iOS 13+ Safari.

**Programme** · 26 weeks in 4-week waves (80/84/88% → deload). 2–3 strength (heavy squat/RDL lines + rotating secondaries + glute-led hypertrophy), 1–2 power/plyo (box-jump height auto-progresses), 1–2 compromised runs, burpee EMOM ladder (100-burpee time projected, never tested), Tabata and interval weight work, optional surgeon back & neck block, sauna heat-acclimation protocol. Athlete mode adds AMRAP peak sets and density finishers.

**Library** · 116 exercises, each with setup, execution, common faults, tempo, equipment, primary/secondary muscles, regression/progression ladder and substitutes; filter by muscle, equipment or favourites; per-exercise history and personal notes; one-tap swap in any session (equipment-matched); ▶ video on every exercise (YouTube search pinned to a trusted coach for key lifts, or paste your own link).

**In session** · Live mode: readiness check (autoregulates loads), one exercise per screen, per-set kg/reps logging, plate calculator, optional rest timer, Tabata/EMOM/AMRAP clocks, add-exercise on the fly, screen wake-lock, rest-over notifications when installed.

**Results** · e1RM/5RM trends, box and burpee projections, since-start bars, streaks, session RPE training load with acute:chronic ratio, sets-per-muscle volume, weekly tonnage, 26-week adherence grid.

## Deploy
Upload all files flat to a GitHub repo root → Settings → Pages → Deploy from a branch (main, /root). Open in Safari on iOS → Share → Add to Home Screen (required for notifications and wake-lock to behave).

Data lives in `localStorage` (key `ballast1`) on one device. **Back up to Files** from Setup — the app nudges after 7 days. Chat-app file previews sandbox storage: the app runs there but won't persist.
