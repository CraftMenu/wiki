# Funciones de CraftMenu

## Índice
1. [Sistema de Sonido Unificado](#sistema-de-sonido-unificado)
2. [Eventos de Widget](#eventos-de-widget)
3. [Sistema de Estados](#sistema-de-estados)
4. [Retroalimentación de Límites Configurable](#retroalimentación-de-límites-configurable)
5. [Comandos Especiales](#comandos-especiales)

---

## Sistema de Sonido Unificado

Todos los campos de sonido ahora soportan dos tipos:

### Sonidos de Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Sonido nativo de Minecraft
  volume: 0.8
  pitch: 1.0
```

**Ejemplos de sonidos de Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Sonidos Personalizados (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Resuelto automáticamente
  # O
  file: "craftmenu:template/click"   # Explícitamente con namespace
  volume: 1.0
  pitch: 1.2
```

**Pasos para sonidos personalizados**:
1. Agregar `.ogg` en `/plugins/CraftMenu/sounds/template/click.ogg`
2. Ejecutar `/cm paquete`
3. El resource pack incluye el sonido automáticamente

---

## Eventos de Widget

### on_menu_open

Se dispara automáticamente cuando el menú se abre. Útil para música de fondo.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Cuando el cursor entra en el área del widget.

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

Cuando el cursor sale del área del widget.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Cuando el widget es clicado.

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (Solo Cursor)

Se dispara en CUALQUIER clic, incluso fuera de los widgets.

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## Sistema de Estados

Permite widgets con múltiples comportamientos (ej: botón toggle on/off).

### Estados Predeterminados

- `normal`: Estado inicial
- `hover`: Ratón sobre el widget
- `pressed`: Widget clicado
- `disabled`: Widget deshabilitado
- `fallback`: Cuando el visual no carga

### Estados Personalizados

Puedes crear tus propios estados:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Sonido encendido
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Sonido apagado (estado personalizado)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover cuando está apagado (estado personalizado)
      type: image
      value: template/sound-mute-hover.png
```

### Acciones de Estado

#### toggle_state

Alterna entre una lista de estados.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Cicla entre estados
```

#### visual_change_conditional

Cambia el visual solo si el estado actual es X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Si el estado es "normal"
  to: hover                      # Cambiar a "hover"
- action: visual_change_conditional
  if_state: disabled            # Si el estado es "disabled"
  to: disabled_hover             # Cambiar a "disabled_hover"
```

#### command_conditional

Ejecuta comando solo si el estado es X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Si se convirtió en "disabled"
  command: '[STOP_MUSIC]'        # Detener música
- action: command_conditional
  if_state: normal              # Si se convirtió en "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Reproducir música
```

### Ejemplo Completo: Botón Toggle

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mimenu/sound-on.png
    hover:
      type: image
      value: mimenu/sound-on-hover.png
    disabled:
      type: image
      value: mimenu/sound-off.png
    disabled_hover:
      type: image
      value: mimenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mimenu/background.ogg'
```

---

## Retroalimentación de Límites Configurable

Personaliza la retroalimentación cuando el cursor alcanza los límites de movimiento.

### Configuración

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Sonido al alcanzar límite
      volume: 0.5                          # Volumen 0.0-1.0
      pitch: 0.6                           # Tono 0.5-2.0
      message: "&c&l¡Límite del cursor alcanzado!" # Mensaje en barra de acción
```

### Sonidos Recomendados

- `minecraft:ui.button.click` - Clic suave
- `minecraft:block.note_block.bass` - Tono bajo
- `craftmenu:template/warning.ogg` - Sonido personalizado

---

## Comandos Especiales

Usados con `action: command`.

### [TELEPORT]

Teletransporta al jugador.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    mundo  x   y   z yaw pitch
```

### [MESSAGE]

Envía mensaje al jugador.

```yaml
- action: command
  command: '[MESSAGE] &a¡Bienvenido al juego!'
  delay: 500  # Esperar 500ms antes de enviar
```

### [CLOSE]

Cierra el menú.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Cerrar después de 1 segundo
```

### [PLAY_MUSIC]

Reproduce música para el widget (solo un sonido por widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Soporta namespaces**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Detiene el sonido que está reproduciéndose para este widget.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Importante**: `[STOP_MUSIC]` detiene solo el sonido de este widget, no afecta otros widgets o sonidos globales.

### [OPEN_URL]

Abre URL en el navegador del jugador (requiere confirmación).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/tu-servidor'
```

---

## Parada Automática de Sonido

**Cuando el menú se cierra**, TODOS los sonidos se detienen automáticamente para el jugador. Esto incluye:

- Música de fondo reproducida vía `[PLAY_MUSIC]`
- Sonidos de hover/click de widgets
- Cualquier sonido activo al momento de cerrar

**Por Qué Sucede Esto**: Debido a una limitación de Minecraft, el juego no soporta detener sonidos personalizados individuales de resource packs. Por lo tanto, TODOS los sonidos deben detenerse cuando el menú se cierra para evitar que los sonidos continúen después de que el menú se haya cerrado.

### Alternativa: Control Manual

Si prefieres no detener sonidos automáticamente, usa un botón toggle en el menú:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Detener música manualmente
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Acciones Visuales

### visual_change

Cambia el estado visual incondicionalmente.

```yaml
- action: visual_change
  to: hover
```

### scale

Anima la escala del widget temporalmente.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% del tamaño
  duration: 300                     # Duración en ms
```

### scale_reset

Resetea la escala al tamaño original.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Elimina el widget completamente (visual, colisión, sonidos).

```yaml
- action: hide_widget
  widget: fov_warning  # Nombre del widget a ocultar
```

**Nota**: El widget oculto no puede ser recuperado sin reabrir el menú.

---

## Ejemplo Completo: Menú con Todas las Funciones

```yaml
menu:
  name: ejemplo_completo
  title: '&b&lEjemplo de Menú Completo'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &c¡El cursor alcanzó el borde!"

  widgets:
    # Botón con música de fondo
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # Botón de acción con retroalimentación completa
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aIniciando juego...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Cursor con retroalimentación de sonido
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
      transform:
        position: {x: 0, y: 0, z: 1.0}
        size: {x: 0.005, y: 0.005, z: 0.005}
      collision-area:
        enabled: true
        size: {x: 0.01, y: 0.01, z: 0.01}
      events:
        on_click_any:
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.4
          pitch: 1.0
```

---

Última actualización: 2026-02-02
Versión del Plugin: 2.0
