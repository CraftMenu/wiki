# Sistema de Eventos

CraftMenu usa un sistema de eventos para manejar las interacciones del usuario con los widgets.

## Tipos de Eventos

| Evento | Disparador | Disponible En |
|--------|------------|---------------|
| `on_menu_open` | El menú se abre | Todos los widgets |
| `on_cursor_hover` | El cursor entra en el widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | El cursor sale del widget | IMAGE, TEXT |
| `on_cursor_click` | Widget es clicado | IMAGE, TEXT |
| `on_click_any` | Cualquier clic | Solo CURSOR |

## Estructura Básica de Eventos

```yaml
widgets:
  mi_boton:
    type: IMAGE
    visual:
      normal: {type: image, value: template/button.png}
    events:
      on_cursor_hover:
        - action: sound
          file: minecraft:ui.button.click
          volume: 0.5
          pitch: 1.2
      on_cursor_click:
        - action: command
          command: "[MESSAGE] &a¡Hiciste clic!"
```

## Tipos de Acciones

### Acción de Sonido

Reproduce un efecto de sonido:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Sonido de Minecraft
  volume: 1.0                       # 0.0 a 1.0
  pitch: 1.0                        # 0.5 a 2.0
```

Sonidos personalizados:
```yaml
- action: sound
  file: template/click.ogg         # Archivo de sonido personalizado
```

### Acción de Animación

Dispara una animación:

```yaml
- action: animation
  effect: scale                    # Tipo de animación
  duration: 200                    # Duración en ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Escala objetivo
  easing_style: ease_out           # Función de suavizado
  priority: false                  # ¿Bloquear otras acciones?
```

### Acción de Comando

Ejecuta comandos:

```yaml
- action: command
  command: "[MESSAGE] ¡Hola!"      # Comando especial
  delay: 0                         # Retraso en ms
```

**Comandos Especiales:**
- `[MESSAGE] texto` - Enviar mensaje al jugador
- `[TELEPORT] mundo x y z yaw pitch` - Teletransportar jugador
- `[CLOSE]` - Cerrar el menú
- `[PLAY_MUSIC] ruta/archivo.ogg` - Reproducir música de fondo
- `[STOP_MUSIC]` - Detener música
- `[OPEN_URL] https://...` - Abrir URL (clicable)
- `[PLAYER] /comando` - Ejecutar comando como jugador
- `[CONSOLE] /comando` - Ejecutar comando como consola

### Acciones de Estado

Cambiar estados del widget:

```yaml
# Alternar entre estados
- action: toggle_state
  states: [normal, disabled]

# Establecer estado específico
- action: set_state
  state: disabled
```

### Acción de Cambio Visual

Cambiar apariencia del widget:

```yaml
- action: visual_change
  to: hover

# Cambio condicional
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Acción de Ocultar Widget

Eliminar un widget de la vista:

```yaml
- action: hide_widget
  widget: nombre_mi_widget
```

### Acción de Detener Animación

Detener animaciones en ejecución:

```yaml
- action: stop_animation
  animation_type: rotate          # Animación a detener
```

## Orden de Ejecución de Eventos

Las acciones se ejecutan en el orden listado. Para mejores resultados:

1. Efectos de sonido (retroalimentación inmediata)
2. Cambios de estado
3. Comandos
4. Animaciones (pueden tener retrasos)

## Animaciones con Prioridad

Usa `priority: true` para bloquear otras acciones hasta que la animación termine:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Bloquea acciones subsiguientes
    - action: command
      command: "[MESSAGE] ¡Listo!"  # Se ejecuta después de la animación
```
