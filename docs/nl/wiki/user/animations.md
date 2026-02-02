# Animatie Systeem

CraftMenu biedt een krachtig animatiesysteem met 19 animatietypes en 6 easing-functies.

## Animatie Types

### Bewegingsanimaties

| Type | Beschrijving |
|------|--------------|
| `translate` | Verplaats widget positie |
| `bounce` | Stuitend effect |
| `float` | Zacht op/neer zweven |
| `orbit` | Cirkelvormige baanbeweging |

### Rotatie Animaties

| Type | Beschrijving |
|------|--------------|
| `rotate` | Continue rotatie |
| `swing` | Slingerbeweging |
| `flip` | 180-graden draai |
| `wobble` | Wiebelige rotatie |
| `spiral` | Spiraalbeweging |

### Schaal Animaties

| Type | Beschrijving |
|------|--------------|
| `scale` | Grootte veranderen |
| `pulse` | Ritmisch pulseren |
| `squeeze` | Samenpersen/uitrekken |
| `zoom_in` | Zoom effect |

### Visuele Animaties

| Type | Beschrijving |
|------|--------------|
| `fade` | Doorzichtigheid fade |
| `glow` | Gloeiend effect |
| `shake` | Schuddende beweging |
| `jiggle` | Trillende beweging |
| `wave` | Golfbeweging |

## Basis Animatie Gebruik

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Animatie Eigenschappen

### Algemene Eigenschappen

```yaml
- action: animation
  effect: pulse           # Animatie type (vereist)
  duration: 1000          # Duur in milliseconden
  easing_style: ease_out  # Easing functie
  intensity: 1.0          # Effect intensiteit
  priority: false         # Andere acties blokkeren?
```

### Effect-Specifieke Eigenschappen

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Graden
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
  fade: true  # true = fade out, false = fade in
```

## Easing Functies

| Easing | Beschrijving |
|--------|--------------|
| `linear` | Constante snelheid |
| `ease_in` | Start langzaam |
| `ease_out` | Eindigt langzaam |
| `ease_in_out` | Langzame start en einde |
| `bounce` | Stuitend effect |
| `elastic` | Veerkrachtig effect |

### Easing Voorbeelden

```yaml
# Vloeiend hover effect
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Stuitende klik feedback
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Animatie Prioriteit

Gebruik `priority: true` om ervoor te zorgen dat een animatie voltooid wordt voor andere acties:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Blokkeert volgende actie

    - action: command
      command: "[CLOSE]"      # Wacht op animatie
```

## Animaties Stoppen

```yaml
- action: stop_animation
  animation_type: rotate      # Stop specifiek type
  # of
  type: all                   # Stop alle animaties
```

## Continue Animaties

Definieer animaties die continu draaien in de widget config:

```yaml
widgets:
  draaiend_icoon:
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

1. Houd duur onder 500ms voor responsieve feedback
2. Gebruik `ease_out` voor hover effecten
3. Gebruik `bounce` voor klik feedback
4. Vermijd meerdere gelijktijdige animaties op een widget
5. Test animaties op verschillende hardware
