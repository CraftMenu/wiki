# Animationssystem

CraftMenu bietet ein leistungsstarkes Animationssystem mit 19 Animationstypen und 6 Easing-Funktionen.

## Animationstypen

### Bewegungsanimationen

| Typ | Beschreibung |
|-----|--------------|
| `translate` | Widget-Position verschieben |
| `bounce` | Huepfeffekt |
| `float` | Sanftes Auf-und-Ab-Schweben |
| `orbit` | Kreisfoermige Orbitbewegung |

### Rotationsanimationen

| Typ | Beschreibung |
|-----|--------------|
| `rotate` | Kontinuierliche Rotation |
| `swing` | Pendelschaukeln |
| `flip` | 180-Grad-Drehung |
| `wobble` | Wackelige Rotation |
| `spiral` | Spiralbewegung |

### Skalierungsanimationen

| Typ | Beschreibung |
|-----|--------------|
| `scale` | Groesse aendern |
| `pulse` | Rhythmisches Pulsieren |
| `squeeze` | Zusammendruecken/Strecken |
| `zoom_in` | Zoom-Effekt |

### Visuelle Animationen

| Typ | Beschreibung |
|-----|--------------|
| `fade` | Deckkraft-Ueberblendung |
| `glow` | Leuchteffekt |
| `shake` | Schuettelbewegung |
| `jiggle` | Zappelbewegung |
| `wave` | Wellenbewegung |

## Grundlegende Animationsverwendung

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Animationseigenschaften

### Allgemeine Eigenschaften

```yaml
- action: animation
  effect: pulse           # Animationstyp (erforderlich)
  duration: 1000          # Dauer in Millisekunden
  easing_style: ease_out  # Easing-Funktion
  intensity: 1.0          # Effektintensitaet
  priority: false         # Andere Aktionen blockieren?
```

### Effektspezifische Eigenschaften

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Grad
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = ausblenden, false = einblenden
```

## Easing-Funktionen

| Easing | Beschreibung |
|--------|--------------|
| `linear` | Konstante Geschwindigkeit |
| `ease_in` | Startet langsam |
| `ease_out` | Endet langsam |
| `ease_in_out` | Langsamer Start und Ende |
| `bounce` | Huepfeffekt |
| `elastic` | Federeffekt |

### Easing-Beispiele

```yaml
# Sanfter Hover-Effekt
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Huepfendes Klick-Feedback
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Animationsprioritaet

Verwenden Sie `priority: true`, um sicherzustellen, dass eine Animation abgeschlossen wird, bevor andere Aktionen ausgefuehrt werden:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Blockiert naechste Aktion

    - action: command
      command: "[CLOSE]"      # Wartet auf Animation
```

## Animationen stoppen

```yaml
- action: stop_animation
  animation_type: rotate      # Bestimmten Typ stoppen
  # oder
  type: all                   # Alle Animationen stoppen
```

## Kontinuierliche Animationen

Definieren Sie Animationen, die kontinuierlich in der Widget-Konfiguration laufen:

```yaml
widgets:
  drehendes_icon:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## Best Practices

1. Halten Sie Dauern unter 500ms fuer responsives Feedback
2. Verwenden Sie `ease_out` fuer Hover-Effekte
3. Verwenden Sie `bounce` fuer Klick-Feedback
4. Vermeiden Sie mehrere gleichzeitige Animationen auf einem Widget
5. Testen Sie Animationen auf verschiedener Hardware
