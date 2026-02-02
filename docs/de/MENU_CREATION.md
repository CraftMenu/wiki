# Menus erstellen in CraftMenu

## Inhaltsverzeichnis
1. [Erstellung uber Befehl](#erstellung-uber-befehl)
2. [YAML-Struktur](#yaml-struktur)
3. [Verfugbare Widgets](#verfugbare-widgets)
4. [Transform (Positionierung)](#transform-positionierung)
5. [Kollision](#kollision)
6. [Events und Aktionen](#events-und-aktionen)
7. [Praktische Beispiele](#praktische-beispiele)

---

## Erstellung uber Befehl

### Empfohlene Methode

1. **Betrete das Spiel** und gehe zur Position, wo du das Menu haben mochtest
2. **Schaue in die Richtung**, in die Spieler schauen sollen wenn sie das Menu offnen
3. **Fuhre aus**:
   ```
   /cm create menu_name
   ```

Das Menu wird mit deiner aktuellen Position und Rotation erstellt!

### Generierte Struktur

```
/plugins/CraftMenu/menus/menu_name.yml
```

**Standard-Template enthalt**:
- FOV-Warnungs-Widget (kann entfernt werden)
- Konfigurierter Cursor
- Optimierte Einstellungen
- Grenz-Feedback
- **Cursor verwendet standardmasig TEXT** - wechsle zu IMAGE nach dem Hinzufugen von Texturen

---

## YAML-Struktur

### Hauptabschnitte

```yaml
menu:
  name: String              # Menu-Name
  title: String             # Titel (unterstutzt &codes)
  main: boolean             # Hauptmenu? (Zukunft)
  location:                 # Welt-Position
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Einstellungen
    # ... (siehe unten)
  widgets:                  # Menu-Widgets
    widget_name:
      # ... (siehe unten)
```

### Detaillierte Einstellungen

```yaml
settings:
  # Audio
  background-music: "template/background.ogg"  # Hintergrundmusik (optional)

  # Cursor-Bewegung
  cursor-sensitivity: 1.0          # Empfindlichkeit (0.1 - 5.0)
  max-yaw-offset: 61.0             # Horizontales Limit in Grad
  max-pitch-offset: 36.0           # Vertikales Limit in Grad
  mount-time: 100                  # Mount-Zeit in Ticks

  # Menu-Positionierung
  distance-multiplier: -0.01       # Distanz-Multiplikator
  menu-distance: 0.3               # Menu-Distanz

  # Leistung
  debug-mode: false                # Debug-Modus
  update-rate: 1                   # Aktualisierungsrate
  collision-detection: true        # Aktive Kollisionserkennung

  # Kamera
  camera-lock-enabled: true        # Kamera sperren
  camera-lock-strength: 0.4        # Sperrstarke (0.0-1.0)

  # Grenz-Feedback
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lCursor-Limit erreicht!"
```

---

## Verfugbare Widgets

### BUTTON

Interaktiver Button mit Hover und Klick.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "▶ SPIELEN"
  transform:
    position: {x: 0, y: 0.1, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover: [...]
    on_cursor_click: [...]
```

### IMAGE

Statisches Bild (kann Hover haben).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Optional
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Keine Interaktion
```

### TEXT

Formatierter Text.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lWILLKOMMEN
        &7auf dem Server
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Textgrose
  shadow: true              # Schatten
  background-color: '#000000'  # Hintergrundfarbe (hex)
```

### CURSOR

Mausgesteuerter Cursor (**nur 1 pro Menu**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # hoher z-Wert = vorne
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Cursor-Einstellungen
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animation
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Kollisionsbereich
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Positionierung)

### Position

Position im 3D-Raum relativ zum Menu-Spawnpunkt.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Links (-) / Rechts (+)
- **y**: Unten (-) / Oben (+)
- **z**: Fern (-) / Nah (+)

**Tipp**: z=0.1 ist gut fur Hintergrund, z=1.0 fur Cursor (immer sichtbar)

### Grose

Widget-Grose.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Typische Skalen**:
- Kleiner Button: `0.015`
- Mittlerer Button: `0.02`
- Groser Button: `0.03`
- Logo: `0.04-0.05`
- Cursor: `0.005`

### Rotation (Optional)

Rotation in Grad.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Hinweis**: Normalerweise nicht benotigt (ViewFrame passt bereits an)

---

## Kollision

### Grundkonfiguration

```yaml
collision:
  enabled: true                     # Kollision aktivieren
  position: {x: 0, y: 0, z: 0.1}   # Optional: Positions-Override
  size: {x: 0.08, y: 0.04, z: 0.02} # Box-Grose
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Optional
```

### Visuelles Debug

```yaml
collision:
  debug:
    enabled: true     # Partikel anzeigen
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, etc
    size: 0.005       # Partikelgrose
```

**Global aktivieren**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Kollisions-Tipps

1. **Visuelle Grose ≠ Kollisionsgrose**
   - Kollision kann groser sein fur einfacheres Klicken
   - Beispiel: Visual 0.02, Kollision 0.08x0.04

2. **Kollisionsposition**
   - Wenn nicht angegeben, verwendet transform.position
   - Angeben wenn anderer Bereich gewunscht

3. **Collision-area (Cursor)**
   - Cursor verwendet `collision-area` statt `collision`
   - Grund: Cursor hat spezielles Verhalten

---

## Events und Aktionen

### Verfugbare Events

| Event | Wann ausgelost | Widgets |
|-------|----------------|---------|
| `on_menu_open` | Menu offnet | Alle |
| `on_cursor_hover` | Cursor betritt | Button, Image, Text |
| `on_cursor_hover_exit` | Cursor verlasst | Button, Image, Text |
| `on_cursor_click` | Widget geklickt | Button |
| `on_click_any` | Jeder Klick | Cursor |

### Verfugbare Aktionen

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, etc
```

#### visual_change_conditional

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

#### sound

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # ODER "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ms
```

#### scale_reset

```yaml
- action: scale_reset
  duration: 200
```

#### command

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  delay: 1000  # Optional, in ms
```

**Spezielle Befehle**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] Text mit &Farben`
- `[CLOSE]`
- `[PLAY_MUSIC] pfad/sound.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`

#### toggle_state

```yaml
- action: toggle_state
  states: [normal, disabled]
```

#### hide_widget

```yaml
- action: hide_widget
  widget: widget_name
```

---

## Praktische Beispiele

### Einfacher Button mit Sound

```yaml
simple_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/button.png}
    hover: {type: image, value: menu/button-hover.png}
  transform:
    position: {x: 0, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.2
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: command
      command: '[MESSAGE] &aButton geklickt!'
```

### Button mit Teleport

```yaml
spawn_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/spawn.png}
    hover: {type: image, value: menu/spawn-hover.png}
  transform:
    position: {x: -0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_click:
    - action: sound
      file: "minecraft:entity.enderman.teleport"
    - action: command
      command: '[MESSAGE] &eTeleportiere...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Umschaltbutton (Ein/Aus)

```yaml
toggle_button:
  type: BUTTON
  initial-state: normal
  visual:
    normal: {type: image, value: menu/on.png}
    hover: {type: image, value: menu/on-hover.png}
    disabled: {type: image, value: menu/off.png}
    disabled_hover: {type: image, value: menu/off-hover.png}
  transform:
    position: {x: 0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change_conditional
      if_state: normal
      to: hover
    - action: visual_change_conditional
      if_state: disabled
      to: disabled_hover
    on_cursor_hover_exit:
    - action: visual_change_conditional
      if_state: normal
      to: normal
    - action: visual_change_conditional
      if_state: disabled
      to: disabled
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[MESSAGE] &cDeaktiviert!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aAktiviert!'
```

### Klickbares Text-Widget

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lWARNUNG
        &7Klicken zum Schliesen
    hover:
      type: text
      value: |-
        &c&lWARNUNG
        &e&oKlicken zum Schliesen
  transform:
    position: {x: 0, y: -0.1, z: 0.1}
    size: {x: 0.4, y: 0.2, z: 0.01}
  text-size: 0.12
  shadow: true
  background-color: '#8B0000'
  collision:
    enabled: true
    size: {x: 0.15, y: 0.03, z: 0.01}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: hide_widget
      widget: warning_text
```

---

## Best Practices

1. **Nach Ebenen organisieren (z)**:
   - z=0.05: Hintergrund
   - z=0.1: Buttons
   - z=0.15: Overlays
   - z=1.0: Cursor

2. **Widgets beschreibend benennen**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Immer Fallback einschliesen**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEXT"}
   ```

4. **Kollision groser als Visual**:
   - Visual: 0.02
   - Kollision: 0.08x0.04 (einfacher zu klicken)

5. **Minecraft-Sounds wenn moglich verwenden**:
   - Kein Resource Pack benotigt
   - Funktioniert ohne zusatzliche Konfiguration

6. **Schrittweise testen**:
   - 1 Widget nach dem anderen hinzufugen
   - `/cm reload` oft verwenden
   - Jede Interaktion testen

---

Zuletzt aktualisiert: 2026-02-02
