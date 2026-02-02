# Sistema de Animaciones

CraftMenu proporciona un poderoso sistema de animaciones con 19 tipos de animación y 6 funciones de suavizado.

## Tipos de Animación

### Animaciones de Movimiento

| Tipo | Descripción |
|------|-------------|
| `translate` | Mover posición del widget |
| `bounce` | Efecto de rebote |
| `float` | Flotación suave arriba/abajo |
| `orbit` | Movimiento de órbita circular |

### Animaciones de Rotación

| Tipo | Descripción |
|------|-------------|
| `rotate` | Rotación continua |
| `swing` | Balanceo de péndulo |
| `flip` | Volteo de 180 grados |
| `wobble` | Rotación tambaleante |
| `spiral` | Movimiento en espiral |

### Animaciones de Escala

| Tipo | Descripción |
|------|-------------|
| `scale` | Cambiar tamaño |
| `pulse` | Pulsación rítmica |
| `squeeze` | Comprimir/estirar |
| `zoom_in` | Efecto de zoom |

### Animaciones Visuales

| Tipo | Descripción |
|------|-------------|
| `fade` | Desvanecimiento de opacidad |
| `glow` | Efecto de brillo |
| `shake` | Movimiento de temblor |
| `jiggle` | Movimiento de agitación |
| `wave` | Movimiento de onda |

## Uso Básico de Animaciones

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Propiedades de Animación

### Propiedades Comunes

```yaml
- action: animation
  effect: pulse           # Tipo de animación (requerido)
  duration: 1000          # Duración en milisegundos
  easing_style: ease_out  # Función de suavizado
  intensity: 1.0          # Intensidad del efecto
  priority: false         # ¿Bloquear otras acciones?
```

### Propiedades Específicas del Efecto

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Grados
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

## Funciones de Suavizado

| Suavizado | Descripción |
|-----------|-------------|
| `linear` | Velocidad constante |
| `ease_in` | Comienza lento |
| `ease_out` | Termina lento |
| `ease_in_out` | Comienzo y final lentos |
| `bounce` | Efecto de rebote |
| `elastic` | Efecto elástico |

### Ejemplos de Suavizado

```yaml
# Efecto de hover suave
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Retroalimentación de clic con rebote
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Prioridad de Animación

Usa `priority: true` para asegurar que una animación se complete antes de otras acciones:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Bloquea siguiente acción

    - action: command
      command: "[CLOSE]"      # Espera la animación
```

## Detener Animaciones

```yaml
- action: stop_animation
  animation_type: rotate      # Detener tipo específico
  # o
  type: all                   # Detener todas las animaciones
```

## Animaciones Continuas

Define animaciones que se ejecutan continuamente en la configuración del widget:

```yaml
widgets:
  icono_giratorio:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## Mejores Prácticas

1. Mantén duraciones bajo 500ms para retroalimentación responsiva
2. Usa `ease_out` para efectos de hover
3. Usa `bounce` para retroalimentación de clic
4. Evita múltiples animaciones simultáneas en un widget
5. Prueba animaciones en diferentes hardware
