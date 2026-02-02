# Guía Completa de Animaciones - CraftMenu

Este documento presenta todos los tipos de animación disponibles en CraftMenu, con ejemplos prácticos de uso en YAML.

---

## Índice

1. [Animaciones Básicas](#animaciones-básicas)
2. [Animaciones de Movimiento](#animaciones-de-movimiento)
3. [Animaciones Avanzadas](#animaciones-avanzadas)
4. [Combinando Animaciones](#combinando-animaciones)
5. [Propiedades Comunes](#propiedades-comunes)

---

## Animaciones Básicas

### SCALE - Cambio de Tamaño

Cambia el tamaño del widget en los ejes X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% del tamaño original
    easing_style: out
```

**Propiedades**:
- `scaleX`: Escala en eje X (predeterminado: intensity)
- `scaleY`: Escala en eje Y (predeterminado: intensity)
- `scaleZ`: Escala en eje Z (predeterminado: intensity)

---

### ROTATE - Rotación

Rota el widget alrededor de los ejes X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Rotación completa en eje Y
    easing_style: in_out
```

**Propiedades**:
- `rotationX`: Rotación en eje X en grados
- `rotationY`: Rotación en eje Y en grados
- `rotationZ`: Rotación en eje Z en grados

---

### TRANSLATE - Traslación

Mueve el widget a una nueva posición.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Desplazamiento en bloques
    easing_style: out
```

**Propiedades**:
- `offsetX`: Desplazamiento en eje X
- `offsetY`: Desplazamiento en eje Y
- `offsetZ`: Desplazamiento en eje Z

---

### FADE - Desvanecimiento

Controla la opacidad/visibilidad del widget.

```yaml
# Fade out (desaparecer)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = fade out, false = fade in
    easing_style: in

# Fade in (aparecer)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Propiedades**:
- `fadeOut`: true para desaparecer, false para aparecer

---

## Animaciones de Movimiento

### PULSE - Pulsación

Efecto de respiración/latido con escalado rítmico.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Animación continua
    easing_style: in_out
```

---

### BOUNCE - Rebote

Simula física de pelota rebotando verticalmente.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Altura del salto
    easing_style: out
```

---

### SWING - Balanceo de Péndulo

Movimiento de péndulo/columpio.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Amplitud del balanceo
    loop: true
    easing_style: in_out
```

---

### FLOAT - Flotación

Movimiento suave vertical arriba y abajo.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Altura de flotación
    loop: true
    easing_style: in_out
```

---

### SHAKE - Temblor

Vibración rápida y aleatoria.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Intensidad de vibración
    easing_style: linear
```

---

### JIGGLE - Temblor Elástico

Temblor más suave y controlado con efecto elástico.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Amplitud del temblor
    easing_style: out
```

---

## Animaciones Avanzadas

### SLIDE - Deslizamiento desde Fuera de Pantalla

El widget entra deslizándose desde fuera de pantalla.

```yaml
# Deslizar desde la izquierda
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Distancia en bloques
    easing_style: out

# Deslizar desde arriba
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Propiedades**:
- `direction`: Dirección de entrada (left, right, top, bottom, front, back)
- `distance`: Distancia inicial en bloques (predeterminado: intensity * 2.0)

**Uso Común**: Ideal para animaciones de `on_menu_open` con prioridad CRITICAL.

---

### ZOOM_IN - Entrada con Sobrepaso

Escala de 0 a 1 con "overshoot" (sobrepasa y regresa).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Escala máxima antes de volver a 1.0
    easing_style: out
```

**Propiedades**:
- `overshoot`: Escala máxima antes de estabilizarse en 1.0 (predeterminado: 1.2)

**Uso Común**: Animación dramática de entrada en `on_menu_open`.

---

### SQUEEZE - Efecto de Compresión

Aplana un eje mientras expande los otros.

```yaml
# Compresión horizontal
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Intensidad de compresión
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Compresión vertical
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Propiedades**:
- `axis`: Eje a comprimir (x, y, z)
- `intensity`: Intensidad de compresión

---

### FLIP - Rotar 180°

Rotación de 180 grados en un eje específico.

```yaml
# Volteo vertical (como voltear una carta)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Volteo horizontal
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Propiedades**:
- `axis`: Eje de rotación (x, y, z)

**Uso Común**: Transiciones de estado, revelar contenido alternativo.

---

### WOBBLE - Balanceo de Gelatina

Balanceo de lado a lado estilo "gelatina".

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Intensidad del balanceo
    loop: true
    easing_style: in_out
```

**Uso Común**: Animaciones de atención, retroalimentación de hover.

---

### ORBIT - Movimiento Orbital

El widget orbita en círculo alrededor de un punto central.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Radio de órbita en bloques
    speed: 1.0  # Multiplicador de velocidad
    loop: true
    easing_style: linear
```

**Propiedades**:
- `radius`: Radio de órbita (predeterminado: intensity * 0.5)
- `speed`: Velocidad de rotación (predeterminado: 1.0)

**Uso Común**: Animaciones decorativas de fondo.

---

### SPIRAL - Movimiento en Espiral

Combina rotación con movimiento circular.

```yaml
# Espiral en sentido horario
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Radio de la espiral
    clockwise: true  # Dirección en sentido horario
    loop: true
    easing_style: linear

# Espiral en sentido antihorario
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Propiedades**:
- `radius`: Radio de la espiral (predeterminado: intensity * 0.3)
- `clockwise`: Dirección del movimiento (true/false)

---

### WAVE - Movimiento de Onda

Onda suave usando función seno.

```yaml
# Onda horizontal
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Amplitud de la onda
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Onda vertical
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Propiedades**:
- `axis`: Dirección de la onda (horizontal, vertical)

---

### GLOW - Brillo Pulsante

Combina pulso sutil con cambios de opacidad.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Intensidad del brillo
    loop: true
    easing_style: in_out
```

**Uso Común**: Resaltar elementos importantes, indicadores de atención.

---

## Combinando Animaciones

Puedes combinar múltiples animaciones secuencialmente o simultáneamente.

### Ejemplo 1: Entrada Dramática

```yaml
on_menu_open:
  # 1. Deslizar desde la izquierda
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - bloquea acciones siguientes
      easing_style: out

  # 2. Zoom con sobrepaso (se ejecuta DESPUÉS del slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Flotación continua (comienza después del zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Ejemplo 2: Botón Interactivo Complejo

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Sonido de hover
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Cambio visual
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Pulso sutil
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Restaurar visual
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Sonido de clic
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Secuencia de animación
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

      # Comando (se ejecuta DESPUÉS de las animaciones)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/tu-servidor'
          delay: 1600
```

---

### Ejemplo 3: Widget Decorativo con Múltiples Animaciones

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Órbita circular
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Rotar mientras orbita
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Brillo pulsante
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Propiedades Comunes

Todas las animaciones soportan estas propiedades:

### type
Tipo de acción (siempre `animation`).

### effect
Nombre de la animación (scale, rotate, pulse, etc.).

### duration
Duración en milisegundos.

```yaml
duration: 1000  # 1 segundo
```

### intensity
Intensidad general de la animación (el significado varía según el tipo).

```yaml
intensity: 0.5  # Mitad de la intensidad predeterminada
```

### loop
Si la animación debe repetirse infinitamente.

```yaml
loop: true  # Animación continua
loop: false # Animación única (predeterminado)
```

### delay
Retraso antes de que comience la animación (en ms).

```yaml
delay: 500  # Esperar 500ms antes de comenzar
```

### easing_style
Tipo de suavizado para la animación.

```yaml
easing_style: linear      # Velocidad constante
easing_style: in          # Acelera al inicio
easing_style: out         # Desacelera al final
easing_style: in_out      # Acelera y desacelera
```

### priority
Prioridad de la animación (afecta la interrupción).

```yaml
priority: true   # CRITICAL - nunca se interrumpe, bloquea acciones siguientes
priority: false  # INTERRUPTIBLE - puede ser interrumpida (predeterminado)
```

**Nota**: Las animaciones continuas (`loop: true`) siempre son prioridad BACKGROUND.

---

## Guía de Uso por Contexto

### Animaciones para on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Entrada deslizante
  - effect: zoom_in     # Entrada con sobrepaso
  - effect: fade        # Fade in suave
```

### Animaciones para on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Aumentar tamaño
  - effect: pulse       # Pulsar suavemente
  - effect: glow        # Brillo resaltado
  - effect: wobble      # Balanceo de atención
```

### Animaciones para on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Retroalimentación de presión
  - effect: bounce      # Salto de confirmación
  - effect: shake       # Temblor de impacto
  - effect: flip        # Voltear/revelar
```

### Animaciones Continuas (Decorativas)

```yaml
continuous-animations:
  - effect: float       # Flotación suave
  - effect: rotate      # Rotación constante
  - effect: orbit       # Movimiento orbital
  - effect: spiral      # Espiral decorativa
  - effect: wave        # Movimiento de onda
  - effect: glow        # Brillo pulsante
```

---

## Tabla de Referencia Rápida

| Animación | Tipo | Uso Principal | ¿Loop? | Prioridad Predeterminada |
|-----------|------|---------------|--------|--------------------------|
| SCALE | Transformación | Hover, Click | No | INTERRUPTIBLE |
| ROTATE | Transformación | Decorativo | Sí | BACKGROUND |
| TRANSLATE | Transformación | Movimiento | No | CRITICAL |
| PULSE | Movimiento | Continuo | Sí | BACKGROUND |
| BOUNCE | Movimiento | Click | No | INTERRUPTIBLE |
| SWING | Movimiento | Hover | Sí | INTERRUPTIBLE |
| FLOAT | Movimiento | Continuo | Sí | BACKGROUND |
| SHAKE | Movimiento | Click | No | INTERRUPTIBLE |
| FADE | Visual | Entrada/Salida | No | CRITICAL |
| SLIDE | Avanzado | Entrada | No | CRITICAL |
| ZOOM_IN | Avanzado | Entrada | No | CRITICAL |
| SQUEEZE | Avanzado | Click | No/Sí | INTERRUPTIBLE |
| FLIP | Avanzado | Estado | No | CRITICAL |
| WOBBLE | Avanzado | Hover | Sí | BACKGROUND |
| ORBIT | Avanzado | Decorativo | Sí | BACKGROUND |
| SPIRAL | Avanzado | Decorativo | Sí | BACKGROUND |
| WAVE | Avanzado | Decorativo | Sí | BACKGROUND |
| JIGGLE | Avanzado | Hover | No | INTERRUPTIBLE |
| GLOW | Avanzado | Resaltado | Sí | BACKGROUND |

---

**Última Actualización**: 2025-10-15
**Versión del Plugin**: 2.0
**Autor**: Zodunix
