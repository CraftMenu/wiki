# Animation System

CraftMenu provides a powerful animation system with 19 animation types and 6 easing functions.

## Animation Types

### Movement Animations

| Type | Description |
|------|-------------|
| `translate` | Move widget position |
| `bounce` | Bouncing effect |
| `float` | Gentle up/down floating |
| `orbit` | Circular orbit motion |

### Rotation Animations

| Type | Description |
|------|-------------|
| `rotate` | Continuous rotation |
| `swing` | Pendulum swinging |
| `flip` | 180-degree flip |
| `wobble` | Wobbly rotation |
| `spiral` | Spiral motion |

### Scale Animations

| Type | Description |
|------|-------------|
| `scale` | Change size |
| `pulse` | Rhythmic pulsing |
| `squeeze` | Compress/stretch |
| `zoom_in` | Zoom effect |

### Visual Animations

| Type | Description |
|------|-------------|
| `fade` | Opacity fade |
| `glow` | Glowing effect |
| `shake` | Shaking motion |
| `jiggle` | Jiggling motion |
| `wave` | Wave motion |

## Basic Animation Usage

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Animation Properties

### Common Properties

```yaml
- action: animation
  effect: pulse           # Animation type (required)
  duration: 1000          # Duration in milliseconds
  easing_style: ease_out  # Easing function
  intensity: 1.0          # Effect intensity
  priority: false         # Block other actions?
```

### Effect-Specific Properties

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Degrees
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

## Easing Functions

| Easing | Description |
|--------|-------------|
| `linear` | Constant speed |
| `ease_in` | Starts slow |
| `ease_out` | Ends slow |
| `ease_in_out` | Slow start and end |
| `bounce` | Bouncy effect |
| `elastic` | Springy effect |

### Easing Examples

```yaml
# Smooth hover effect
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Bouncy click feedback
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Animation Priority

Use `priority: true` to ensure an animation completes before other actions:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Blocks next action

    - action: command
      command: "[CLOSE]"      # Waits for animation
```

## Stopping Animations

```yaml
- action: stop_animation
  animation_type: rotate      # Stop specific type
  # or
  type: all                   # Stop all animations
```

## Continuous Animations

Define animations that run continuously in the widget config:

```yaml
widgets:
  spinning_icon:
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

1. Keep durations under 500ms for responsive feedback
2. Use `ease_out` for hover effects
3. Use `bounce` for click feedback
4. Avoid multiple simultaneous animations on one widget
5. Test animations on different hardware
