# Creating Menus in CraftMenu

## Table of Contents
1. [Creation via Command](#creation-via-command)
2. [YAML Structure](#yaml-structure)
3. [Available Widgets](#available-widgets)
4. [Transform (Positioning)](#transform-positioning)
5. [Collision](#collision)
6. [Events and Actions](#events-and-actions)
7. [Practical Examples](#practical-examples)

---

## Creation via Command

### Recommended Method

1. **Enter the game** and go to the location where you want the menu
2. **Look in the direction** players should face when opening the menu
3. **Run**:
   ```
   /cm create menu_name
   ```

The menu will be created with your current location and rotation!

### Generated Structure

```
/plugins/CraftMenu/menus/menu_name.yml
```

**Default template includes**:
- FOV warning widget (can be removed)
- Configured cursor
- Optimized settings
- Boundary feedback
- **Cursor uses TEXT by default** - switch to IMAGE after adding textures

---

## YAML Structure

### Main Sections

```yaml
menu:
  name: String              # Menu name
  title: String             # Title (supports &codes)
  main: boolean             # Main menu? (future)
  location:                 # World location
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Settings
    # ... (see below)
  widgets:                  # Menu widgets
    widget_name:
      # ... (see below)
```

### Detailed Settings

```yaml
settings:
  # Audio
  background-music: "template/background.ogg"  # Background music (optional)

  # Cursor movement
  cursor-sensitivity: 1.0          # Sensitivity (0.1 - 5.0)
  max-yaw-offset: 61.0             # Horizontal limit in degrees
  max-pitch-offset: 36.0           # Vertical limit in degrees
  mount-time: 100                  # Mount time in ticks

  # Menu positioning
  distance-multiplier: -0.01       # Distance multiplier
  menu-distance: 0.3               # Menu distance

  # Performance
  debug-mode: false                # Debug mode
  update-rate: 1                   # Update rate
  collision-detection: true        # Active collision detection

  # Camera
  camera-lock-enabled: true        # Lock camera
  camera-lock-strength: 0.4        # Lock strength (0.0-1.0)

  # Boundary feedback
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lCursor limit reached!"
```

---

## Available Widgets

### BUTTON

Interactive button with hover and click.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "▶ PLAY"
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

Static image (can have hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Optional
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # No interaction
```

### TEXT

Formatted text.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lWELCOME
        &7to the server
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Text size
  shadow: true              # Shadow
  background-color: '#000000'  # Background color (hex)
```

### CURSOR

Mouse-controlled cursor (**only 1 per menu**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # high z = in front
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Cursor settings
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animation
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Collision area
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Positioning)

### Position

Position in 3D space relative to menu spawn point.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Left (-) / Right (+)
- **y**: Down (-) / Up (+)
- **z**: Far (-) / Near (+)

**Tip**: z=0.1 is good for background, z=1.0 for cursor (always visible)

### Size

Widget size.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Typical scales**:
- Small button: `0.015`
- Medium button: `0.02`
- Large button: `0.03`
- Logo: `0.04-0.05`
- Cursor: `0.005`

### Rotation (Optional)

Rotation in degrees.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Note**: Usually not needed (ViewFrame already adjusts)

---

## Collision

### Basic Configuration

```yaml
collision:
  enabled: true                     # Enable collision
  position: {x: 0, y: 0, z: 0.1}   # Optional: position override
  size: {x: 0.08, y: 0.04, z: 0.02} # Box size
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Optional
```

### Visual Debug

```yaml
collision:
  debug:
    enabled: true     # Show particles
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, etc
    size: 0.005       # Particle size
```

**Enable globally**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Collision Tips

1. **Visual size ≠ collision size**
   - Collision can be larger for easier clicking
   - Example: visual 0.02, collision 0.08x0.04

2. **Collision position**
   - If not specified, uses transform.position
   - Specify if you want a different area

3. **Collision-area (Cursor)**
   - Cursor uses `collision-area` instead of `collision`
   - Reason: Cursor has special behavior

---

## Events and Actions

### Available Events

| Event | When Fires | Widgets |
|-------|------------|---------|
| `on_menu_open` | Menu opens | All |
| `on_cursor_hover` | Cursor enters | Button, Image, Text |
| `on_cursor_hover_exit` | Cursor leaves | Button, Image, Text |
| `on_cursor_click` | Widget clicked | Button |
| `on_click_any` | Any click | Cursor |

### Available Actions

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
  file: "minecraft:ui.button.click"  # OR "mymenu/click.ogg"
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
  delay: 1000  # Optional, in ms
```

**Special commands**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] text with &colors`
- `[CLOSE]`
- `[PLAY_MUSIC] path/sound.ogg`
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
  widget: widget_name
```

---

## Practical Examples

### Simple Button with Sound

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
      command: '[MESSAGE] &aButton clicked!'
```

### Button with Teleport

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
      command: '[MESSAGE] &eTeleporting...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Toggle Button (On/Off)

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
      command: '[MESSAGE] &cDisabled!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aEnabled!'
```

### Clickable Text Widget

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lWARNING
        &7Click to dismiss
    hover:
      type: text
      value: |-
        &c&lWARNING
        &e&oClick to dismiss
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

## Best Practices

1. **Organize by layers (z)**:
   - z=0.05: Background
   - z=0.1: Buttons
   - z=0.15: Overlays
   - z=1.0: Cursor

2. **Name widgets descriptively**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Always include fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEXT"}
   ```

4. **Collision larger than visual**:
   - Visual: 0.02
   - Collision: 0.08x0.04 (easier to click)

5. **Use Minecraft sounds when possible**:
   - No resource pack needed
   - Works without extra configuration

6. **Test incrementally**:
   - Add 1 widget at a time
   - Use `/cm reload` frequently
   - Test each interaction

---

Last updated: 2026-02-02
