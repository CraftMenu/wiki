# Volledige Animatie Gids - CraftMenu

Dit document presenteert alle animatietypes beschikbaar in CraftMenu, met praktische YAML gebruiksvoorbeelden.

---

## Inhoudsopgave

1. [Basis Animaties](#basis-animaties)
2. [Bewegingsanimaties](#bewegingsanimaties)
3. [Geavanceerde Animaties](#geavanceerde-animaties)
4. [Animaties Combineren](#animaties-combineren)
5. [Gemeenschappelijke Eigenschappen](#gemeenschappelijke-eigenschappen)

---

## Basis Animaties

### SCALE - Grootte Verandering

Verandert de widget grootte op X, Y, Z assen.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% van originele grootte
    easing_style: out
```

**Eigenschappen**:
- `scaleX`: Schaal op X-as (standaard: intensity)
- `scaleY`: Schaal op Y-as (standaard: intensity)
- `scaleZ`: Schaal op Z-as (standaard: intensity)

---

### ROTATE - Rotatie

Roteert de widget rond X, Y, Z assen.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Volledige rotatie op Y-as
    easing_style: in_out
```

**Eigenschappen**:
- `rotationX`: Rotatie op X-as in graden
- `rotationY`: Rotatie op Y-as in graden
- `rotationZ`: Rotatie op Z-as in graden

---

### TRANSLATE - Verplaatsing

Verplaatst de widget naar een nieuwe positie.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Verplaatsing in blokken
    easing_style: out
```

**Eigenschappen**:
- `offsetX`: Verplaatsing op X-as
- `offsetY`: Verplaatsing op Y-as
- `offsetZ`: Verplaatsing op Z-as

---

### FADE - Fade in/out

Bestuurt widget doorschijnendheid/zichtbaarheid.

```yaml
# Fade out (verdwijnen)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = fade out, false = fade in
    easing_style: in

# Fade in (verschijnen)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Eigenschappen**:
- `fadeOut`: true om te verdwijnen, false om te verschijnen

---

## Bewegingsanimaties

### PULSE - Pulsering

Ademhaling/hartslag effect met ritmische schaling.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Continue animatie
    easing_style: in_out
```

---

### BOUNCE - Stuiteren

Simuleert bal stuiterende fysica verticaal.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Springhoogte
    easing_style: out
```

---

### SWING - Pendulum Zwaai

Pendulum/schommel beweging.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Zwaai amplitude
    loop: true
    easing_style: in_out
```

---

### FLOAT - Zweven

Soepele verticale op en neer beweging.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Zweef hoogte
    loop: true
    easing_style: in_out
```

---

### SHAKE - Trilling

Snelle en willekeurige vibratie.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Vibratie intensiteit
    easing_style: linear
```

---

### JIGGLE - Elastische Trilling

Zachtere en meer gecontroleerde shake met elastisch effect.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Trilling amplitude
    easing_style: out
```

---

## Geavanceerde Animaties

### SLIDE - Inschuiven van Buiten Scherm

Widget komt inschuiven van buiten het scherm.

```yaml
# Inschuiven van links
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Afstand in blokken
    easing_style: out

# Inschuiven van boven
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Eigenschappen**:
- `direction`: Binnenkomst richting (left, right, top, bottom, front, back)
- `distance`: Initiële afstand in blokken (standaard: intensity * 2.0)

**Algemeen Gebruik**: Ideaal voor `on_menu_open` animaties met CRITICAL prioriteit.

---

### ZOOM_IN - Binnenkomst met Overshoot

Schaal van 0 naar 1 met "overshoot" (schiet over en keert terug).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Maximale schaal voor terugkeer naar 1.0
    easing_style: out
```

**Eigenschappen**:
- `overshoot`: Maximale schaal voor stabilisatie op 1.0 (standaard: 1.2)

**Algemeen Gebruik**: Dramatische binnenkomst animatie in `on_menu_open`.

---

### SQUEEZE - Compressie Effect

Plat een as terwijl anderen uitbreiden.

```yaml
# Horizontale squeeze
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Compressie intensiteit
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Verticale squeeze
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Eigenschappen**:
- `axis`: As om te comprimeren (x, y, z)
- `intensity`: Compressie intensiteit

---

### FLIP - Roteer 180°

180-graden rotatie op een specifieke as.

```yaml
# Verticale flip (zoals kaart omdraaien)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Horizontale flip
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Eigenschappen**:
- `axis`: Rotatie as (x, y, z)

**Algemeen Gebruik**: State overgangen, alternatieve content onthullen.

---

### WOBBLE - Gelei Zwaai

Zij-naar-zij "gelei" stijl zwaai.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Zwaai intensiteit
    loop: true
    easing_style: in_out
```

**Algemeen Gebruik**: Aandacht animaties, hover feedback.

---

### ORBIT - Orbitale Beweging

Widget draait in een cirkel rond een centraal punt.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Orbit straal in blokken
    speed: 1.0  # Snelheid vermenigvuldiger
    loop: true
    easing_style: linear
```

**Eigenschappen**:
- `radius`: Orbit straal (standaard: intensity * 0.5)
- `speed`: Rotatie snelheid (standaard: 1.0)

**Algemeen Gebruik**: Decoratieve achtergrond animaties.

---

### SPIRAL - Spiraal Beweging

Combineert rotatie met circulaire beweging.

```yaml
# Spiraal met de klok mee
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Spiraal straal
    clockwise: true  # Richting met de klok mee
    loop: true
    easing_style: linear

# Spiraal tegen de klok in
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Eigenschappen**:
- `radius`: Spiraal straal (standaard: intensity * 0.3)
- `clockwise`: Bewegingsrichting (true/false)

---

### WAVE - Golf Beweging

Soepele golf met sinus functie.

```yaml
# Horizontale golf
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Golf amplitude
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Verticale golf
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Eigenschappen**:
- `axis`: Golf richting (horizontal, vertical)

---

### GLOW - Pulserende Gloed

Combineert subtiele puls met doorschijnendheid veranderingen.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Gloed intensiteit
    loop: true
    easing_style: in_out
```

**Algemeen Gebruik**: Belangrijke elementen benadrukken, aandacht indicatoren.

---

## Animaties Combineren

Je kunt meerdere animaties sequentieel of gelijktijdig combineren.

### Voorbeeld 1: Dramatische Binnenkomst

```yaml
on_menu_open:
  # 1. Inschuiven van links
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - blokkeert volgende acties
      easing_style: out

  # 2. Zoom met overshoot (voert uit NA slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Continue zweef (start na zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Voorbeeld 2: Complexe Interactieve Knop

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Hover geluid
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Visuele verandering
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Subtiele puls
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Herstel visual
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Klik geluid
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Animatie sequentie
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

      # Commando (voert uit NA animaties)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Voorbeeld 3: Decoratieve Widget met Meerdere Animaties

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Circulaire orbit
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Roteren tijdens orbiten
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Pulserende gloed
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Gemeenschappelijke Eigenschappen

Alle animaties ondersteunen deze eigenschappen:

### type
Actie type (altijd `animation`).

### effect
Animatie naam (scale, rotate, pulse, etc.).

### duration
Duur in milliseconden.

```yaml
duration: 1000  # 1 seconde
```

### intensity
Algemene animatie intensiteit (betekenis varieert per type).

```yaml
intensity: 0.5  # Helft van standaard intensiteit
```

### loop
Of de animatie oneindig moet herhalen.

```yaml
loop: true  # Continue animatie
loop: false # Enkele animatie (standaard)
```

### delay
Vertraging voor animatie start (in ms).

```yaml
delay: 500  # Wacht 500ms voor starten
```

### easing_style
Easing type voor animatie afvlakking.

```yaml
easing_style: linear      # Constante snelheid
easing_style: in          # Versnelt bij start
easing_style: out         # Vertraagt bij einde
easing_style: in_out      # Versnelt en vertraagt
```

### priority
Animatie prioriteit (beinvloedt onderbreking).

```yaml
priority: true   # CRITICAL - nooit onderbroken, blokkeert volgende acties
priority: false  # INTERRUPTIBLE - kan worden onderbroken (standaard)
```

**Opmerking**: Continue animaties (`loop: true`) hebben altijd BACKGROUND prioriteit.

---

## Gebruiksgids per Context

### Animaties voor on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Inschuiven binnenkomst
  - effect: zoom_in     # Binnenkomst met overshoot
  - effect: fade        # Zachte fade in
```

### Animaties voor on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Grootte vergroten
  - effect: pulse       # Zachte puls
  - effect: glow        # Highlight gloed
  - effect: wobble      # Aandacht zwaai
```

### Animaties voor on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Druk feedback
  - effect: bounce      # Bevestiging sprong
  - effect: shake       # Impact trilling
  - effect: flip        # Omdraaien/onthullen
```

### Continue Animaties (Decoratief)

```yaml
continuous-animations:
  - effect: float       # Zachte zweef
  - effect: rotate      # Constante rotatie
  - effect: orbit       # Orbitale beweging
  - effect: spiral      # Decoratieve spiraal
  - effect: wave        # Golf beweging
  - effect: glow        # Pulserende gloed
```

---

## Snelle Referentietabel

| Animatie | Type | Hoofd Gebruik | Loop? | Standaard Prioriteit |
|----------|------|---------------|-------|---------------------|
| SCALE | Transformatie | Hover, Click | Nee | INTERRUPTIBLE |
| ROTATE | Transformatie | Decoratief | Ja | BACKGROUND |
| TRANSLATE | Transformatie | Beweging | Nee | CRITICAL |
| PULSE | Beweging | Continue | Ja | BACKGROUND |
| BOUNCE | Beweging | Click | Nee | INTERRUPTIBLE |
| SWING | Beweging | Hover | Ja | INTERRUPTIBLE |
| FLOAT | Beweging | Continue | Ja | BACKGROUND |
| SHAKE | Beweging | Click | Nee | INTERRUPTIBLE |
| FADE | Visueel | Binnenkomst/Exit | Nee | CRITICAL |
| SLIDE | Geavanceerd | Binnenkomst | Nee | CRITICAL |
| ZOOM_IN | Geavanceerd | Binnenkomst | Nee | CRITICAL |
| SQUEEZE | Geavanceerd | Click | Nee/Ja | INTERRUPTIBLE |
| FLIP | Geavanceerd | State | Nee | CRITICAL |
| WOBBLE | Geavanceerd | Hover | Ja | BACKGROUND |
| ORBIT | Geavanceerd | Decoratief | Ja | BACKGROUND |
| SPIRAL | Geavanceerd | Decoratief | Ja | BACKGROUND |
| WAVE | Geavanceerd | Decoratief | Ja | BACKGROUND |
| JIGGLE | Geavanceerd | Hover | Nee | INTERRUPTIBLE |
| GLOW | Geavanceerd | Highlight | Ja | BACKGROUND |

---

**Laatst Bijgewerkt**: 2025-10-15
**Plugin Versie**: 2.0
**Auteur**: Zodunix
