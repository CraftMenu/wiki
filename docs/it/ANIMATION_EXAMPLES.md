# Guida Completa alle Animazioni - CraftMenu

Questo documento presenta tutti i tipi di animazione disponibili in CraftMenu, con esempi pratici di utilizzo in YAML.

---

## Indice

1. [Animazioni Base](#animazioni-base)
2. [Animazioni di Movimento](#animazioni-di-movimento)
3. [Animazioni Avanzate](#animazioni-avanzate)
4. [Combinare Animazioni](#combinare-animazioni)
5. [Proprieta Comuni](#proprieta-comuni)

---

## Animazioni Base

### SCALE - Cambio Dimensione

Cambia la dimensione del widget sugli assi X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% della dimensione originale
    easing_style: out
```

**Proprieta**:
- `scaleX`: Scala sull'asse X (default: intensity)
- `scaleY`: Scala sull'asse Y (default: intensity)
- `scaleZ`: Scala sull'asse Z (default: intensity)

---

### ROTATE - Rotazione

Ruota il widget attorno agli assi X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Rotazione completa sull'asse Y
    easing_style: in_out
```

**Proprieta**:
- `rotationX`: Rotazione sull'asse X in gradi
- `rotationY`: Rotazione sull'asse Y in gradi
- `rotationZ`: Rotazione sull'asse Z in gradi

---

### TRANSLATE - Traslazione

Sposta il widget verso una nuova posizione.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Spostamento in blocchi
    easing_style: out
```

**Proprieta**:
- `offsetX`: Spostamento sull'asse X
- `offsetY`: Spostamento sull'asse Y
- `offsetZ`: Spostamento sull'asse Z

---

### FADE - Dissolvenza

Controlla l'opacita/visibilita del widget.

```yaml
# Fade out (scompare)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = fade out, false = fade in
    easing_style: in

# Fade in (appare)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Proprieta**:
- `fadeOut`: true per scomparire, false per apparire

---

## Animazioni di Movimento

### PULSE - Pulsazione

Effetto respiro/battito cardiaco con scala ritmica.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Animazione continua
    easing_style: in_out
```

---

### BOUNCE - Rimbalzo

Simula la fisica di una palla che rimbalza verticalmente.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Altezza del salto
    easing_style: out
```

---

### SWING - Oscillazione a Pendolo

Movimento a pendolo/oscillazione.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Ampiezza oscillazione
    loop: true
    easing_style: in_out
```

---

### FLOAT - Galleggiamento

Movimento verticale fluido su e giu.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Altezza galleggiamento
    loop: true
    easing_style: in_out
```

---

### SHAKE - Tremore

Vibrazione veloce e casuale.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Intensita vibrazione
    easing_style: linear
```

---

### JIGGLE - Tremore Elastico

Tremore piu morbido e controllato con effetto elastico.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Ampiezza tremore
    easing_style: out
```

---

## Animazioni Avanzate

### SLIDE - Scorrimento da Fuori Schermo

Il widget entra scorrendo da fuori schermo.

```yaml
# Scorrimento da sinistra
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Distanza in blocchi
    easing_style: out

# Scorrimento dall'alto
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Proprieta**:
- `direction`: Direzione di entrata (left, right, top, bottom, front, back)
- `distance`: Distanza iniziale in blocchi (default: intensity * 2.0)

**Uso Comune**: Ideale per animazioni `on_menu_open` con priorita CRITICAL.

---

### ZOOM_IN - Entrata con Overshoot

Scala da 0 a 1 con "overshoot" (supera e ritorna).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Scala massima prima di tornare a 1.0
    easing_style: out
```

**Proprieta**:
- `overshoot`: Scala massima prima di stabilizzarsi a 1.0 (default: 1.2)

**Uso Comune**: Animazione di entrata drammatica in `on_menu_open`.

---

### SQUEEZE - Effetto Compressione

Appiattisce un asse mentre espande gli altri.

```yaml
# Compressione orizzontale
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Intensita compressione
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Compressione verticale
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Proprieta**:
- `axis`: Asse da comprimere (x, y, z)
- `intensity`: Intensita della compressione

---

### FLIP - Rotazione 180°

Rotazione di 180 gradi su un asse specifico.

```yaml
# Flip verticale (come girare una carta)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Flip orizzontale
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Proprieta**:
- `axis`: Asse di rotazione (x, y, z)

**Uso Comune**: Transizioni di stato, rivelare contenuto alternativo.

---

### WOBBLE - Oscillazione Gelatinosa

Oscillazione laterale stile "gelatina".

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Intensita oscillazione
    loop: true
    easing_style: in_out
```

**Uso Comune**: Animazioni di attenzione, feedback hover.

---

### ORBIT - Movimento Orbitale

Il widget orbita in cerchio attorno a un punto centrale.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Raggio orbita in blocchi
    speed: 1.0  # Moltiplicatore velocita
    loop: true
    easing_style: linear
```

**Proprieta**:
- `radius`: Raggio dell'orbita (default: intensity * 0.5)
- `speed`: Velocita di rotazione (default: 1.0)

**Uso Comune**: Animazioni decorative di sfondo.

---

### SPIRAL - Movimento a Spirale

Combina rotazione con movimento circolare.

```yaml
# Spirale in senso orario
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Raggio spirale
    clockwise: true  # Direzione oraria
    loop: true
    easing_style: linear

# Spirale in senso antiorario
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Proprieta**:
- `radius`: Raggio della spirale (default: intensity * 0.3)
- `clockwise`: Direzione del movimento (true/false)

---

### WAVE - Movimento a Onda

Onda fluida usando la funzione seno.

```yaml
# Onda orizzontale
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Ampiezza onda
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Onda verticale
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Proprieta**:
- `axis`: Direzione dell'onda (horizontal, vertical)

---

### GLOW - Bagliore Pulsante

Combina pulsazione sottile con cambiamenti di opacita.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Intensita bagliore
    loop: true
    easing_style: in_out
```

**Uso Comune**: Evidenziare elementi importanti, indicatori di attenzione.

---

## Combinare Animazioni

Puoi combinare multiple animazioni in sequenza o simultaneamente.

### Esempio 1: Entrata Drammatica

```yaml
on_menu_open:
  # 1. Scorrimento da sinistra
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - blocca le azioni successive
      easing_style: out

  # 2. Zoom con overshoot (esegue DOPO lo slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Galleggiamento continuo (inizia dopo lo zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Esempio 2: Pulsante Interattivo Complesso

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Suono hover
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Cambio visivo
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Pulsazione sottile
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Ripristina visivo
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Suono click
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Sequenza animazioni
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

      # Comando (esegue DOPO le animazioni)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/tuo-server'
          delay: 1600
```

---

### Esempio 3: Widget Decorativo con Animazioni Multiple

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Orbita circolare
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Rotazione mentre orbita
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Bagliore pulsante
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Proprieta Comuni

Tutte le animazioni supportano queste proprieta:

### type
Tipo di azione (sempre `animation`).

### effect
Nome dell'animazione (scale, rotate, pulse, ecc.).

### duration
Durata in millisecondi.

```yaml
duration: 1000  # 1 secondo
```

### intensity
Intensita generale dell'animazione (il significato varia per tipo).

```yaml
intensity: 0.5  # Meta dell'intensita predefinita
```

### loop
Se l'animazione deve ripetersi all'infinito.

```yaml
loop: true  # Animazione continua
loop: false # Animazione singola (default)
```

### delay
Ritardo prima che l'animazione inizi (in ms).

```yaml
delay: 500  # Attende 500ms prima di iniziare
```

### easing_style
Tipo di easing per la fluidita dell'animazione.

```yaml
easing_style: linear      # Velocita costante
easing_style: in          # Accelera all'inizio
easing_style: out         # Decelera alla fine
easing_style: in_out      # Accelera e decelera
```

### priority
Priorita dell'animazione (influisce sull'interruzione).

```yaml
priority: true   # CRITICAL - mai interrotta, blocca le azioni successive
priority: false  # INTERRUPTIBLE - puo essere interrotta (default)
```

**Nota**: Le animazioni continue (`loop: true`) hanno sempre priorita BACKGROUND.

---

## Guida all'Uso per Contesto

### Animazioni per on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Entrata a scorrimento
  - effect: zoom_in     # Entrata con overshoot
  - effect: fade        # Dissolvenza morbida
```

### Animazioni per on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Aumenta dimensione
  - effect: pulse       # Pulsa dolcemente
  - effect: glow        # Bagliore evidenziato
  - effect: wobble      # Oscillazione attenzione
```

### Animazioni per on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Feedback pressione
  - effect: bounce      # Salto di conferma
  - effect: shake       # Tremore impatto
  - effect: flip        # Flip/rivelazione
```

### Animazioni Continue (Decorative)

```yaml
continuous-animations:
  - effect: float       # Galleggiamento morbido
  - effect: rotate      # Rotazione costante
  - effect: orbit       # Movimento orbitale
  - effect: spiral      # Spirale decorativa
  - effect: wave        # Movimento a onda
  - effect: glow        # Bagliore pulsante
```

---

## Tabella di Riferimento Rapido

| Animazione | Tipo | Uso Principale | Loop? | Priorita Default |
|------------|------|----------------|-------|------------------|
| SCALE | Trasformazione | Hover, Click | No | INTERRUPTIBLE |
| ROTATE | Trasformazione | Decorativo | Si | BACKGROUND |
| TRANSLATE | Trasformazione | Movimento | No | CRITICAL |
| PULSE | Movimento | Continuo | Si | BACKGROUND |
| BOUNCE | Movimento | Click | No | INTERRUPTIBLE |
| SWING | Movimento | Hover | Si | INTERRUPTIBLE |
| FLOAT | Movimento | Continuo | Si | BACKGROUND |
| SHAKE | Movimento | Click | No | INTERRUPTIBLE |
| FADE | Visuale | Entrata/Uscita | No | CRITICAL |
| SLIDE | Avanzato | Entrata | No | CRITICAL |
| ZOOM_IN | Avanzato | Entrata | No | CRITICAL |
| SQUEEZE | Avanzato | Click | No/Si | INTERRUPTIBLE |
| FLIP | Avanzato | Stato | No | CRITICAL |
| WOBBLE | Avanzato | Hover | Si | BACKGROUND |
| ORBIT | Avanzato | Decorativo | Si | BACKGROUND |
| SPIRAL | Avanzato | Decorativo | Si | BACKGROUND |
| WAVE | Avanzato | Decorativo | Si | BACKGROUND |
| JIGGLE | Avanzato | Hover | No | INTERRUPTIBLE |
| GLOW | Avanzato | Evidenziare | Si | BACKGROUND |

---

**Ultimo Aggiornamento**: 2025-10-15
**Versione Plugin**: 2.0
**Autore**: Zodunix
