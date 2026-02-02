# Creación de Menús en CraftMenu

## Índice
1. [Creación vía Comando](#creación-vía-comando)
2. [Estructura YAML](#estructura-yaml)
3. [Widgets Disponibles](#widgets-disponibles)
4. [Transform (Posicionamiento)](#transform-posicionamiento)
5. [Colisión](#colisión)
6. [Eventos y Acciones](#eventos-y-acciones)
7. [Ejemplos Prácticos](#ejemplos-prácticos)

---

## Creación vía Comando

### Método Recomendado

1. **Entrar al juego** e ir a la ubicación donde quieres el menú
2. **Mirar en la dirección** que los jugadores deben ver al abrir el menú
3. **Ejecutar**:
   ```
   /cm crear nombre_menu
   ```

¡El menú será creado con tu ubicación y rotación actuales!

### Estructura Generada

```
/plugins/CraftMenu/menus/nombre_menu.yml
```

**La plantilla predeterminada incluye**:
- Widget de advertencia FOV (puede ser eliminado)
- Cursor configurado
- Configuraciones optimizadas
- Retroalimentación de límites
- **El cursor usa TEXT por defecto** - cambia a IMAGE después de agregar texturas

---

## Estructura YAML

### Secciones Principales

```yaml
menu:
  name: String              # Nombre del menú
  title: String             # Título (soporta &códigos)
  main: boolean             # ¿Menú principal? (futuro)
  location:                 # Ubicación en el mundo
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Configuraciones
    # ... (ver abajo)
  widgets:                  # Widgets del menú
    nombre_widget:
      # ... (ver abajo)
```

### Configuraciones Detalladas

```yaml
settings:
  # Audio
  background-music: "template/background.ogg"  # Música de fondo (opcional)

  # Movimiento del cursor
  cursor-sensitivity: 1.0          # Sensibilidad (0.1 - 5.0)
  max-yaw-offset: 61.0             # Límite horizontal en grados
  max-pitch-offset: 36.0           # Límite vertical en grados
  mount-time: 100                  # Tiempo de montaje en ticks

  # Posicionamiento del menú
  distance-multiplier: -0.01       # Multiplicador de distancia
  menu-distance: 0.3               # Distancia del menú

  # Rendimiento
  debug-mode: false                # Modo debug
  update-rate: 1                   # Tasa de actualización
  collision-detection: true        # Detección de colisión activa

  # Cámara
  camera-lock-enabled: true        # Bloquear cámara
  camera-lock-strength: 0.4        # Fuerza del bloqueo (0.0-1.0)

  # Retroalimentación de límites
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&l¡Límite del cursor alcanzado!"
```

---

## Widgets Disponibles

### BUTTON

Botón interactivo con hover y click.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mimenu/play.png
    hover:
      type: image
      value: mimenu/play-hover.png
    pressed:
      type: image
      value: mimenu/play-pressed.png
    fallback:
      type: text
      value: "▶ JUGAR"
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

Imagen estática (puede tener hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mimenu/logo.png
    hover:
      type: image
      value: mimenu/logo-glow.png  # Opcional
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Sin interacción
```

### TEXT

Texto formateado.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lBIENVENIDO
        &7al servidor
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Tamaño del texto
  shadow: true              # Sombra
  background-color: '#000000'  # Color de fondo (hex)
```

### CURSOR

Cursor controlado por el ratón (**solo 1 por menú**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mimenu/cursor.png
    hover:
      type: image
      value: mimenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # z alto = al frente
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Configuraciones del cursor
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animación
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Área de colisión
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Posicionamiento)

### Posición

Posición en espacio 3D relativa al punto de spawn del menú.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Izquierda (-) / Derecha (+)
- **y**: Abajo (-) / Arriba (+)
- **z**: Lejos (-) / Cerca (+)

**Consejo**: z=0.1 es bueno para fondo, z=1.0 para cursor (siempre visible)

### Tamaño

Tamaño del widget.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Escalas típicas**:
- Botón pequeño: `0.015`
- Botón mediano: `0.02`
- Botón grande: `0.03`
- Logo: `0.04-0.05`
- Cursor: `0.005`

### Rotación (Opcional)

Rotación en grados.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Nota**: Usualmente no es necesario (ViewFrame ya ajusta)

---

## Colisión

### Configuración Básica

```yaml
collision:
  enabled: true                     # Habilitar colisión
  position: {x: 0, y: 0, z: 0.1}   # Opcional: override de posición
  size: {x: 0.08, y: 0.04, z: 0.02} # Tamaño de la caja
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Opcional
```

### Debug Visual

```yaml
collision:
  debug:
    enabled: true     # Mostrar partículas
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, etc
    size: 0.005       # Tamaño de partículas
```

**Habilitar globalmente**:
```
/cm depurar alternar
/cm depurar colision
```

### Consejos de Colisión

1. **Tamaño visual ≠ tamaño de colisión**
   - La colisión puede ser más grande para facilitar el clic
   - Ejemplo: visual 0.02, colisión 0.08x0.04

2. **Posición de colisión**
   - Si no se especifica, usa transform.position
   - Especifica si quieres un área diferente

3. **Collision-area (Cursor)**
   - El cursor usa `collision-area` en lugar de `collision`
   - Razón: El cursor tiene comportamiento especial

---

## Eventos y Acciones

### Eventos Disponibles

| Evento | Cuándo se Dispara | Widgets |
|--------|-------------------|---------|
| `on_menu_open` | El menú se abre | Todos |
| `on_cursor_hover` | El cursor entra | Button, Image, Text |
| `on_cursor_hover_exit` | El cursor sale | Button, Image, Text |
| `on_cursor_click` | Widget es clicado | Button |
| `on_click_any` | Cualquier clic | Cursor |

### Acciones Disponibles

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
  file: "minecraft:ui.button.click"  # O "mimenu/click.ogg"
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
  delay: 1000  # Opcional, en ms
```

**Comandos especiales**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] texto con &colores`
- `[CLOSE]`
- `[PLAY_MUSIC] ruta/sonido.ogg`
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
  widget: nombre_widget
```

---

## Ejemplos Prácticos

### Botón Simple con Sonido

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
      command: '[MESSAGE] &a¡Botón clicado!'
```

### Botón con Teletransporte

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
      command: '[MESSAGE] &eTeletransportando...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Botón Toggle (On/Off)

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
      command: '[MESSAGE] &c¡Desactivado!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &a¡Activado!'
```

### Widget de Texto Clicable

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lADVERTENCIA
        &7Clic para descartar
    hover:
      type: text
      value: |-
        &c&lADVERTENCIA
        &e&oClic para descartar
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

## Mejores Prácticas

1. **Organizar por capas (z)**:
   - z=0.05: Fondo
   - z=0.1: Botones
   - z=0.15: Overlays
   - z=1.0: Cursor

2. **Nombrar widgets descriptivamente**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Siempre incluir fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEXTO"}
   ```

4. **Colisión más grande que visual**:
   - Visual: 0.02
   - Colisión: 0.08x0.04 (más fácil de clicar)

5. **Usar sonidos de Minecraft cuando sea posible**:
   - No requiere resource pack
   - Funciona sin configuración extra

6. **Probar incrementalmente**:
   - Agregar 1 widget a la vez
   - Usar `/cm recargar` frecuentemente
   - Probar cada interacción

---

Última actualización: 2026-02-02
