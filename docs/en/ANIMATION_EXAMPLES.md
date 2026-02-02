# Complete Animation Guide - CraftMenu

This document presents all animation types available in CraftMenu, with practical YAML usage examples.

---

## Table of Contents

1. [Basic Animations](#basic-animations)
2. [Movement Animations](#movement-animations)
3. [Advanced Animations](#advanced-animations)
4. [Combining Animations](#combining-animations)
5. [Common Properties](#common-properties)

---

## Basic Animations

### SCALE - Size Change

Changes the widget size on X, Y, Z axes.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% of original size
    easing_style: out
```

**Properties**:
- `scaleX`: Scale on X axis (default: intensity)
- `scaleY`: Scale on Y axis (default: intensity)
- `scaleZ`: Scale on Z axis (default: intensity)

---

### ROTATE - Rotation

Rotates the widget around X, Y, Z axes.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Full rotation on Y axis
    easing_style: in_out
```

**Properties**:
- `rotationX`: Rotation on X axis in degrees
- `rotationY`: Rotation on Y axis in degrees
- `rotationZ`: Rotation on Z axis in degrees

---

### TRANSLATE - Translation

Moves the widget to a new position.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Displacement in blocks
    easing_style: out
```

**Properties**:
- `offsetX`: Displacement on X axis
- `offsetY`: Displacement on Y axis
- `offsetZ`: Displacement on Z axis

---

### FADE - Fade in/out

Controls widget opacity/visibility.

```yaml
# Fade out (disappear)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = fade out, false = fade in
    easing_style: in

# Fade in (appear)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Properties**:
- `fadeOut`: true to disappear, false to appear

---

## Movement Animations

### PULSE - Pulsation

Breathing/heartbeat effect with rhythmic scaling.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Continuous animation
    easing_style: in_out
```

---

### BOUNCE - Bouncing

Simulates ball bouncing physics vertically.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Jump height
    easing_style: out
```

---

### SWING - Pendulum Swing

Pendulum/swing motion.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Swing amplitude
    loop: true
    easing_style: in_out
```

---

### FLOAT - Floating

Smooth vertical up and down movement.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Float height
    loop: true
    easing_style: in_out
```

---

### SHAKE - Tremor

Fast and random vibration.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Vibration intensity
    easing_style: linear
```

---

### JIGGLE - Elastic Tremor

Softer and more controlled shake with elastic effect.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Tremor amplitude
    easing_style: out
```

---

## Advanced Animations

### SLIDE - Slide from Off-Screen

Widget enters sliding from off-screen.

```yaml
# Slide from left
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Distance in blocks
    easing_style: out

# Slide from top
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Properties**:
- `direction`: Entry direction (left, right, top, bottom, front, back)
- `distance`: Initial distance in blocks (default: intensity * 2.0)

**Common Use**: Ideal for `on_menu_open` animations with CRITICAL priority.

---

### ZOOM_IN - Entry with Overshoot

Scale from 0 to 1 with "overshoot" (overshoots and returns).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Maximum scale before returning to 1.0
    easing_style: out
```

**Properties**:
- `overshoot`: Maximum scale before stabilizing at 1.0 (default: 1.2)

**Common Use**: Dramatic entry animation in `on_menu_open`.

---

### SQUEEZE - Compression Effect

Flattens one axis while expanding others.

```yaml
# Horizontal squeeze
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Compression intensity
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Vertical squeeze
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Properties**:
- `axis`: Axis to compress (x, y, z)
- `intensity`: Compression intensity

---

### FLIP - Rotate 180°

180-degree rotation on a specific axis.

```yaml
# Vertical flip (like card flipping)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Horizontal flip
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Properties**:
- `axis`: Rotation axis (x, y, z)

**Common Use**: State transitions, revealing alternate content.

---

### WOBBLE - Jelly Swing

Side-to-side "jelly" style swing.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Swing intensity
    loop: true
    easing_style: in_out
```

**Common Use**: Attention animations, hover feedback.

---

### ORBIT - Orbital Motion

Widget orbits in a circle around a central point.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Orbit radius in blocks
    speed: 1.0  # Speed multiplier
    loop: true
    easing_style: linear
```

**Properties**:
- `radius`: Orbit radius (default: intensity * 0.5)
- `speed`: Rotation speed (default: 1.0)

**Common Use**: Decorative background animations.

---

### SPIRAL - Spiral Motion

Combines rotation with circular movement.

```yaml
# Clockwise spiral
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Spiral radius
    clockwise: true  # Clockwise direction
    loop: true
    easing_style: linear

# Counter-clockwise spiral
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Properties**:
- `radius`: Spiral radius (default: intensity * 0.3)
- `clockwise`: Movement direction (true/false)

---

### WAVE - Wave Motion

Smooth wave using sine function.

```yaml
# Horizontal wave
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Wave amplitude
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Vertical wave
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Properties**:
- `axis`: Wave direction (horizontal, vertical)

---

### GLOW - Pulsing Glow

Combines subtle pulse with opacity changes.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Glow intensity
    loop: true
    easing_style: in_out
```

**Common Use**: Highlight important elements, attention indicators.

---

## Combining Animations

You can combine multiple animations sequentially or simultaneously.

### Example 1: Dramatic Entry

```yaml
on_menu_open:
  # 1. Slide from left
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - blocks following actions
      easing_style: out

  # 2. Zoom with overshoot (executes AFTER slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Continuous float (starts after zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Example 2: Complex Interactive Button

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Hover sound
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Visual change
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Subtle pulse
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Restore visual
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Click sound
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Animation sequence
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

      # Command (executes AFTER animations)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Example 3: Decorative Widget with Multiple Animations

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Circular orbit
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Rotate while orbiting
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Pulsing glow
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Common Properties

All animations support these properties:

### type
Action type (always `animation`).

### effect
Animation name (scale, rotate, pulse, etc.).

### duration
Duration in milliseconds.

```yaml
duration: 1000  # 1 second
```

### intensity
General animation intensity (meaning varies by type).

```yaml
intensity: 0.5  # Half of default intensity
```

### loop
Whether the animation should repeat infinitely.

```yaml
loop: true  # Continuous animation
loop: false # Single animation (default)
```

### delay
Delay before animation starts (in ms).

```yaml
delay: 500  # Wait 500ms before starting
```

### easing_style
Easing type for animation smoothing.

```yaml
easing_style: linear      # Constant speed
easing_style: in          # Accelerates at start
easing_style: out         # Decelerates at end
easing_style: in_out      # Accelerates and decelerates
```

### priority
Animation priority (affects interruption).

```yaml
priority: true   # CRITICAL - never interrupted, blocks following actions
priority: false  # INTERRUPTIBLE - can be interrupted (default)
```

**Note**: Continuous animations (`loop: true`) are always BACKGROUND priority.

---

## Usage Guide by Context

### Animations for on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Sliding entry
  - effect: zoom_in     # Entry with overshoot
  - effect: fade        # Soft fade in
```

### Animations for on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Increase size
  - effect: pulse       # Pulse softly
  - effect: glow        # Highlight glow
  - effect: wobble      # Attention swing
```

### Animations for on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Pressure feedback
  - effect: bounce      # Confirmation jump
  - effect: shake       # Impact tremor
  - effect: flip        # Flip/reveal
```

### Continuous Animations (Decorative)

```yaml
continuous-animations:
  - effect: float       # Soft floating
  - effect: rotate      # Constant rotation
  - effect: orbit       # Orbital motion
  - effect: spiral      # Decorative spiral
  - effect: wave        # Wave motion
  - effect: glow        # Pulsing glow
```

---

## Quick Reference Table

| Animation | Type | Main Use | Loop? | Default Priority |
|-----------|------|----------|-------|------------------|
| SCALE | Transformation | Hover, Click | No | INTERRUPTIBLE |
| ROTATE | Transformation | Decorative | Yes | BACKGROUND |
| TRANSLATE | Transformation | Movement | No | CRITICAL |
| PULSE | Movement | Continuous | Yes | BACKGROUND |
| BOUNCE | Movement | Click | No | INTERRUPTIBLE |
| SWING | Movement | Hover | Yes | INTERRUPTIBLE |
| FLOAT | Movement | Continuous | Yes | BACKGROUND |
| SHAKE | Movement | Click | No | INTERRUPTIBLE |
| FADE | Visual | Entry/Exit | No | CRITICAL |
| SLIDE | Advanced | Entry | No | CRITICAL |
| ZOOM_IN | Advanced | Entry | No | CRITICAL |
| SQUEEZE | Advanced | Click | No/Yes | INTERRUPTIBLE |
| FLIP | Advanced | State | No | CRITICAL |
| WOBBLE | Advanced | Hover | Yes | BACKGROUND |
| ORBIT | Advanced | Decorative | Yes | BACKGROUND |
| SPIRAL | Advanced | Decorative | Yes | BACKGROUND |
| WAVE | Advanced | Decorative | Yes | BACKGROUND |
| JIGGLE | Advanced | Hover | No | INTERRUPTIBLE |
| GLOW | Advanced | Highlight | Yes | BACKGROUND |

---

**Last Updated**: 2025-10-15
**Plugin Version**: 2.0
**Author**: Zodunix
