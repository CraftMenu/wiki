# Sistema di Animazioni

CraftMenu fornisce un potente sistema di animazioni con 19 tipi di animazione e 6 funzioni di easing.

## Tipi di Animazione

### Animazioni di Movimento

| Tipo | Descrizione |
|------|-------------|
| `translate` | Sposta la posizione del widget |
| `bounce` | Effetto rimbalzo |
| `float` | Fluttuamento dolce su/giu |
| `orbit` | Movimento orbitale circolare |

### Animazioni di Rotazione

| Tipo | Descrizione |
|------|-------------|
| `rotate` | Rotazione continua |
| `swing` | Oscillazione a pendolo |
| `flip` | Rotazione di 180 gradi |
| `wobble` | Rotazione traballante |
| `spiral` | Movimento a spirale |

### Animazioni di Scala

| Tipo | Descrizione |
|------|-------------|
| `scale` | Cambia dimensione |
| `pulse` | Pulsazione ritmica |
| `squeeze` | Compressione/estensione |
| `zoom_in` | Effetto zoom |

### Animazioni Visive

| Tipo | Descrizione |
|------|-------------|
| `fade` | Dissolvenza opacita |
| `glow` | Effetto luminoso |
| `shake` | Movimento di scuotimento |
| `jiggle` | Movimento tremolante |
| `wave` | Movimento ondulatorio |

## Uso Base delle Animazioni

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Proprieta delle Animazioni

### Proprieta Comuni

```yaml
- action: animation
  effect: pulse           # Tipo animazione (obbligatorio)
  duration: 1000          # Durata in millisecondi
  easing_style: ease_out  # Funzione easing
  intensity: 1.0          # Intensita effetto
  priority: false         # Blocca altre azioni?
```

### Proprieta Specifiche per Effetto

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Gradi
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

## Funzioni di Easing

| Easing | Descrizione |
|--------|-------------|
| `linear` | Velocita costante |
| `ease_in` | Inizia lento |
| `ease_out` | Finisce lento |
| `ease_in_out` | Lento all'inizio e alla fine |
| `bounce` | Effetto rimbalzo |
| `elastic` | Effetto elastico |

### Esempi di Easing

```yaml
# Effetto hover fluido
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Feedback click rimbalzante
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Priorita delle Animazioni

Usa `priority: true` per assicurare che un'animazione si completi prima di altre azioni:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Blocca prossima azione

    - action: command
      command: "[CLOSE]"      # Aspetta l'animazione
```

## Fermare le Animazioni

```yaml
- action: stop_animation
  animation_type: rotate      # Ferma tipo specifico
  # oppure
  type: all                   # Ferma tutte le animazioni
```

## Animazioni Continue

Definisci animazioni che vengono eseguite continuamente nella configurazione del widget:

```yaml
widgets:
  icona_rotante:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## Best Practice

1. Mantieni le durate sotto i 500ms per feedback reattivo
2. Usa `ease_out` per effetti hover
3. Usa `bounce` per feedback click
4. Evita animazioni simultanee multiple su un widget
5. Testa le animazioni su hardware diversi
