# Vollstandiger Animations-Leitfaden - CraftMenu

Dieses Dokument prasentiert alle in CraftMenu verfugbaren Animationstypen mit praktischen YAML-Verwendungsbeispielen.

---

## Inhaltsverzeichnis

1. [Basis-Animationen](#basis-animationen)
2. [Bewegungsanimationen](#bewegungsanimationen)
3. [Erweiterte Animationen](#erweiterte-animationen)
4. [Animationen kombinieren](#animationen-kombinieren)
5. [Allgemeine Eigenschaften](#allgemeine-eigenschaften)

---

## Basis-Animationen

### SCALE - Grosenanderung

Andert die Widget-Grose auf den X-, Y-, Z-Achsen.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% der Originalgrose
    easing_style: out
```

**Eigenschaften**:
- `scaleX`: Skalierung auf X-Achse (Standard: intensity)
- `scaleY`: Skalierung auf Y-Achse (Standard: intensity)
- `scaleZ`: Skalierung auf Z-Achse (Standard: intensity)

---

### ROTATE - Rotation

Rotiert das Widget um die X-, Y-, Z-Achsen.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Vollstandige Rotation auf Y-Achse
    easing_style: in_out
```

**Eigenschaften**:
- `rotationX`: Rotation auf X-Achse in Grad
- `rotationY`: Rotation auf Y-Achse in Grad
- `rotationZ`: Rotation auf Z-Achse in Grad

---

### TRANSLATE - Verschiebung

Verschiebt das Widget zu einer neuen Position.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Verschiebung in Blocken
    easing_style: out
```

**Eigenschaften**:
- `offsetX`: Verschiebung auf X-Achse
- `offsetY`: Verschiebung auf Y-Achse
- `offsetZ`: Verschiebung auf Z-Achse

---

### FADE - Ein-/Ausblenden

Steuert Widget-Deckkraft/Sichtbarkeit.

```yaml
# Ausblenden (verschwinden)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = ausblenden, false = einblenden
    easing_style: in

# Einblenden (erscheinen)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Eigenschaften**:
- `fadeOut`: true zum Verschwinden, false zum Erscheinen

---

## Bewegungsanimationen

### PULSE - Pulsieren

Atem-/Herzschlag-Effekt mit rhythmischer Skalierung.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Kontinuierliche Animation
    easing_style: in_out
```

---

### BOUNCE - Hupfen

Simuliert Ballphysik vertikal.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Sprunghohe
    easing_style: out
```

---

### SWING - Pendelschwingen

Pendel-/Schaukelbewegung.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Schwingungsamplitude
    loop: true
    easing_style: in_out
```

---

### FLOAT - Schweben

Sanfte vertikale Auf- und Abbewegung.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Schwebehohe
    loop: true
    easing_style: in_out
```

---

### SHAKE - Zittern

Schnelle und zufallige Vibration.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Vibrationsintensitat
    easing_style: linear
```

---

### JIGGLE - Elastisches Zittern

Sanfteres und kontrolliertes Schutteln mit elastischem Effekt.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Zitteramplitude
    easing_style: out
```

---

## Erweiterte Animationen

### SLIDE - Von auserhalb gleiten

Widget gleitet von auserhalb des Bildschirms herein.

```yaml
# Von links gleiten
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Distanz in Blocken
    easing_style: out

# Von oben gleiten
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Eigenschaften**:
- `direction`: Eintrittsrichtung (left, right, top, bottom, front, back)
- `distance`: Anfangsdistanz in Blocken (Standard: intensity * 2.0)

**Haufige Verwendung**: Ideal fur `on_menu_open`-Animationen mit CRITICAL-Prioritat.

---

### ZOOM_IN - Eintritt mit Uberschwingen

Skalierung von 0 auf 1 mit "Uberschwingen" (uberschreitet und kehrt zuruck).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Maximale Skalierung vor Ruckkehr zu 1.0
    easing_style: out
```

**Eigenschaften**:
- `overshoot`: Maximale Skalierung vor Stabilisierung bei 1.0 (Standard: 1.2)

**Haufige Verwendung**: Dramatische Eingangsanimation in `on_menu_open`.

---

### SQUEEZE - Kompressionseffekt

Flacht eine Achse ab wahrend andere erweitert werden.

```yaml
# Horizontale Kompression
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Kompressionsintensitat
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Vertikale Kompression
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Eigenschaften**:
- `axis`: Zu komprimierende Achse (x, y, z)
- `intensity`: Kompressionsintensitat

---

### FLIP - 180°-Drehung

180-Grad-Rotation auf einer bestimmten Achse.

```yaml
# Vertikales Umdrehen (wie Kartenumdrehen)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Horizontales Umdrehen
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Eigenschaften**:
- `axis`: Rotationsachse (x, y, z)

**Haufige Verwendung**: Zustandsubergange, Aufdecken alternativer Inhalte.

---

### WOBBLE - Wackel-Schwingen

Seitwarts-"Gelee"-Stil-Schwingen.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Schwingungsintensitat
    loop: true
    easing_style: in_out
```

**Haufige Verwendung**: Aufmerksamkeitsanimationen, Hover-Feedback.

---

### ORBIT - Orbitalbewegung

Widget umkreist einen zentralen Punkt.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Orbit-Radius in Blocken
    speed: 1.0  # Geschwindigkeitsmultiplikator
    loop: true
    easing_style: linear
```

**Eigenschaften**:
- `radius`: Orbit-Radius (Standard: intensity * 0.5)
- `speed`: Rotationsgeschwindigkeit (Standard: 1.0)

**Haufige Verwendung**: Dekorative Hintergrundanimationen.

---

### SPIRAL - Spiralbewegung

Kombiniert Rotation mit kreisformiger Bewegung.

```yaml
# Spirale im Uhrzeigersinn
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Spiral-Radius
    clockwise: true  # Uhrzeigerrichtung
    loop: true
    easing_style: linear

# Spirale gegen Uhrzeigersinn
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Eigenschaften**:
- `radius`: Spiral-Radius (Standard: intensity * 0.3)
- `clockwise`: Bewegungsrichtung (true/false)

---

### WAVE - Wellenbewegung

Sanfte Welle mit Sinusfunktion.

```yaml
# Horizontale Welle
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Wellenamplitude
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Vertikale Welle
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Eigenschaften**:
- `axis`: Wellenrichtung (horizontal, vertical)

---

### GLOW - Pulsierendes Leuchten

Kombiniert subtiles Pulsieren mit Deckkraftanderungen.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Leuchtintensitat
    loop: true
    easing_style: in_out
```

**Haufige Verwendung**: Wichtige Elemente hervorheben, Aufmerksamkeitsindikatoren.

---

## Animationen kombinieren

Sie konnen mehrere Animationen sequenziell oder gleichzeitig kombinieren.

### Beispiel 1: Dramatischer Eintritt

```yaml
on_menu_open:
  # 1. Von links gleiten
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - blockiert folgende Aktionen
      easing_style: out

  # 2. Zoom mit Uberschwingen (wird NACH slide ausgefuhrt)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Kontinuierliches Schweben (startet nach zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Beispiel 2: Komplexer interaktiver Button

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Hover-Sound
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Visuelle Anderung
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Subtiles Pulsieren
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Visual wiederherstellen
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Klick-Sound
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Animationssequenz
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # Befehl (wird NACH Animationen ausgefuhrt)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Beispiel 3: Dekoratives Widget mit mehreren Animationen

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Kreisformiger Orbit
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Wahrend des Orbits rotieren
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Pulsierendes Leuchten
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Allgemeine Eigenschaften

Alle Animationen unterstutzen diese Eigenschaften:

### type
Aktionstyp (immer `animation`).

### effect
Animationsname (scale, rotate, pulse, etc.).

### duration
Dauer in Millisekunden.

```yaml
duration: 1000  # 1 Sekunde
```

### intensity
Allgemeine Animationsintensitat (Bedeutung variiert je nach Typ).

```yaml
intensity: 0.5  # Halbe Standardintensitat
```

### loop
Ob die Animation unendlich wiederholt werden soll.

```yaml
loop: true  # Kontinuierliche Animation
loop: false # Einzelne Animation (Standard)
```

### delay
Verzogerung vor Animationsstart (in ms).

```yaml
delay: 500  # 500ms vor Start warten
```

### easing_style
Easing-Typ fur Animationsglattung.

```yaml
easing_style: linear      # Konstante Geschwindigkeit
easing_style: in          # Beschleunigt am Anfang
easing_style: out         # Verlangsamt am Ende
easing_style: in_out      # Beschleunigt und verlangsamt
```

### priority
Animationsprioritat (beeinflusst Unterbrechung).

```yaml
priority: true   # CRITICAL - nie unterbrochen, blockiert folgende Aktionen
priority: false  # INTERRUPTIBLE - kann unterbrochen werden (Standard)
```

**Hinweis**: Kontinuierliche Animationen (`loop: true`) haben immer BACKGROUND-Prioritat.

---

## Verwendungsleitfaden nach Kontext

### Animationen fur on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Gleitender Eintritt
  - effect: zoom_in     # Eintritt mit Uberschwingen
  - effect: fade        # Sanftes Einblenden
```

### Animationen fur on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Grose erhohen
  - effect: pulse       # Sanftes Pulsieren
  - effect: glow        # Hervorhebungs-Leuchten
  - effect: wobble      # Aufmerksamkeits-Schwingen
```

### Animationen fur on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Druck-Feedback
  - effect: bounce      # Bestatigungssprung
  - effect: shake       # Aufprall-Zittern
  - effect: flip        # Umdrehen/Aufdecken
```

### Kontinuierliche Animationen (Dekorativ)

```yaml
continuous-animations:
  - effect: float       # Sanftes Schweben
  - effect: rotate      # Konstante Rotation
  - effect: orbit       # Orbitalbewegung
  - effect: spiral      # Dekorative Spirale
  - effect: wave        # Wellenbewegung
  - effect: glow        # Pulsierendes Leuchten
```

---

## Schnellreferenz-Tabelle

| Animation | Typ | Hauptverwendung | Loop? | Standard-Prioritat |
|-----------|-----|-----------------|-------|-------------------|
| SCALE | Transformation | Hover, Klick | Nein | INTERRUPTIBLE |
| ROTATE | Transformation | Dekorativ | Ja | BACKGROUND |
| TRANSLATE | Transformation | Bewegung | Nein | CRITICAL |
| PULSE | Bewegung | Kontinuierlich | Ja | BACKGROUND |
| BOUNCE | Bewegung | Klick | Nein | INTERRUPTIBLE |
| SWING | Bewegung | Hover | Ja | INTERRUPTIBLE |
| FLOAT | Bewegung | Kontinuierlich | Ja | BACKGROUND |
| SHAKE | Bewegung | Klick | Nein | INTERRUPTIBLE |
| FADE | Visuell | Eintritt/Austritt | Nein | CRITICAL |
| SLIDE | Erweitert | Eintritt | Nein | CRITICAL |
| ZOOM_IN | Erweitert | Eintritt | Nein | CRITICAL |
| SQUEEZE | Erweitert | Klick | Nein/Ja | INTERRUPTIBLE |
| FLIP | Erweitert | Zustand | Nein | CRITICAL |
| WOBBLE | Erweitert | Hover | Ja | BACKGROUND |
| ORBIT | Erweitert | Dekorativ | Ja | BACKGROUND |
| SPIRAL | Erweitert | Dekorativ | Ja | BACKGROUND |
| WAVE | Erweitert | Dekorativ | Ja | BACKGROUND |
| JIGGLE | Erweitert | Hover | Nein | INTERRUPTIBLE |
| GLOW | Erweitert | Hervorhebung | Ja | BACKGROUND |

---

**Zuletzt aktualisiert**: 2025-10-15
**Plugin-Version**: 2.0
**Autor**: Zodunix
