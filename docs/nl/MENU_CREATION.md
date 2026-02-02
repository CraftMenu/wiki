# Menu's Maken in CraftMenu

## Inhoudsopgave
1. [Aanmaken via Commando](#aanmaken-via-commando)
2. [YAML Structuur](#yaml-structuur)
3. [Beschikbare Widgets](#beschikbare-widgets)
4. [Transform (Positionering)](#transform-positionering)
5. [Collision](#collision)
6. [Events en Acties](#events-en-acties)
7. [Praktische Voorbeelden](#praktische-voorbeelden)

---

## Aanmaken via Commando

### Aanbevolen Methode

1. **Ga in het spel** en ga naar de locatie waar je het menu wilt
2. **Kijk in de richting** waarin spelers moeten kijken bij het openen van het menu
3. **Voer uit**:
   ```
   /cm create menu_naam
   ```

Het menu wordt aangemaakt met je huidige locatie en rotatie!

### Gegenereerde Structuur

```
/plugins/CraftMenu/menus/menu_naam.yml
```

**Standaard template bevat**:
- FOV waarschuwingswidget (kan worden verwijderd)
- Geconfigureerde cursor
- Geoptimaliseerde instellingen
- Grensfeedback
- **Cursor gebruikt standaard TEXT** - schakel naar IMAGE na toevoegen van textures

---

## YAML Structuur

### Hoofdsecties

```yaml
menu:
  name: String              # Menu naam
  title: String             # Titel (ondersteunt &codes)
  main: boolean             # Hoofdmenu? (toekomst)
  location:                 # Wereld locatie
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Instellingen
    # ... (zie hieronder)
  widgets:                  # Menu widgets
    widget_naam:
      # ... (zie hieronder)
```

### Gedetailleerde Instellingen

```yaml
settings:
  # Audio
  background-music: "template/background.ogg"  # Achtergrondmuziek (optioneel)

  # Cursor beweging
  cursor-sensitivity: 1.0          # Gevoeligheid (0.1 - 5.0)
  max-yaw-offset: 61.0             # Horizontale limiet in graden
  max-pitch-offset: 36.0           # Verticale limiet in graden
  mount-time: 100                  # Mount tijd in ticks

  # Menu positionering
  distance-multiplier: -0.01       # Afstand vermenigvuldiger
  menu-distance: 0.3               # Menu afstand

  # Prestaties
  debug-mode: false                # Debug modus
  update-rate: 1                   # Update snelheid
  collision-detection: true        # Actieve collision detectie

  # Camera
  camera-lock-enabled: true        # Camera vergrendelen
  camera-lock-strength: 0.4        # Vergrendeling sterkte (0.0-1.0)

  # Grensfeedback
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lCursor limiet bereikt!"
```

---

## Beschikbare Widgets

### BUTTON

Interactieve knop met hover en click.

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
      value: "▶ SPELEN"
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

Statische afbeelding (kan hover hebben).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Optioneel
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Geen interactie
```

### TEXT

Geformatteerde tekst.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lWELKOM
        &7op de server
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Tekst grootte
  shadow: true              # Schaduw
  background-color: '#000000'  # Achtergrondkleur (hex)
```

### CURSOR

Muis-gestuurde cursor (**slechts 1 per menu**).

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
    position: {x: 0, y: 0, z: 1.0}  # hoge z = vooraan
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Cursor instellingen
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animatie
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Collision gebied
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Positionering)

### Positie

Positie in 3D-ruimte relatief aan menu spawn punt.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Links (-) / Rechts (+)
- **y**: Beneden (-) / Boven (+)
- **z**: Ver (-) / Dichtbij (+)

**Tip**: z=0.1 is goed voor achtergrond, z=1.0 voor cursor (altijd zichtbaar)

### Grootte

Widget grootte.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Typische schalen**:
- Kleine knop: `0.015`
- Medium knop: `0.02`
- Grote knop: `0.03`
- Logo: `0.04-0.05`
- Cursor: `0.005`

### Rotatie (Optioneel)

Rotatie in graden.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Opmerking**: Meestal niet nodig (ViewFrame past al aan)

---

## Collision

### Basis Configuratie

```yaml
collision:
  enabled: true                     # Collision inschakelen
  position: {x: 0, y: 0, z: 0.1}   # Optioneel: positie override
  size: {x: 0.08, y: 0.04, z: 0.02} # Box grootte
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Optioneel
```

### Visuele Debug

```yaml
collision:
  debug:
    enabled: true     # Toon partikels
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, etc
    size: 0.005       # Partikel grootte
```

**Globaal inschakelen**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Collision Tips

1. **Visuele grootte ≠ collision grootte**
   - Collision kan groter zijn voor makkelijker klikken
   - Voorbeeld: visual 0.02, collision 0.08x0.04

2. **Collision positie**
   - Indien niet gespecificeerd, gebruikt transform.position
   - Specificeer als je een ander gebied wilt

3. **Collision-area (Cursor)**
   - Cursor gebruikt `collision-area` in plaats van `collision`
   - Reden: Cursor heeft speciaal gedrag

---

## Events en Acties

### Beschikbare Events

| Event | Wanneer Geactiveerd | Widgets |
|-------|---------------------|---------|
| `on_menu_open` | Menu opent | Alle |
| `on_cursor_hover` | Cursor komt binnen | Button, Image, Text |
| `on_cursor_hover_exit` | Cursor verlaat | Button, Image, Text |
| `on_cursor_click` | Widget aangeklikt | Button |
| `on_click_any` | Elke klik | Cursor |

### Beschikbare Acties

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
  file: "minecraft:ui.button.click"  # OF "mymenu/click.ogg"
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
  delay: 1000  # Optioneel, in ms
```

**Speciale commando's**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] tekst met &kleuren`
- `[CLOSE]`
- `[PLAY_MUSIC] pad/geluid.ogg`
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
  widget: widget_naam
```

---

## Praktische Voorbeelden

### Simpele Knop met Geluid

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
      command: '[MESSAGE] &aKnop aangeklikt!'
```

### Knop met Teleport

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
      command: '[MESSAGE] &eTeleporteren...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Schakelknop (Aan/Uit)

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
      command: '[MESSAGE] &cUitgeschakeld!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aIngeschakeld!'
```

### Klikbare Tekst Widget

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lWAARSCHUWING
        &7Klik om te sluiten
    hover:
      type: text
      value: |-
        &c&lWAARSCHUWING
        &e&oKlik om te sluiten
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

1. **Organiseer per laag (z)**:
   - z=0.05: Achtergrond
   - z=0.1: Knoppen
   - z=0.15: Overlays
   - z=1.0: Cursor

2. **Benoem widgets beschrijvend**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Voeg altijd fallback toe**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEKST"}
   ```

4. **Collision groter dan visual**:
   - Visual: 0.02
   - Collision: 0.08x0.04 (makkelijker te klikken)

5. **Gebruik Minecraft geluiden waar mogelijk**:
   - Geen resource pack nodig
   - Werkt zonder extra configuratie

6. **Test incrementeel**:
   - Voeg 1 widget tegelijk toe
   - Gebruik `/cm reload` regelmatig
   - Test elke interactie

---

Laatst bijgewerkt: 2026-02-02
