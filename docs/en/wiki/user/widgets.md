# Widget Types

CraftMenu supports three types of widgets for building menus.

## Widget Types Overview

| Type | Description | Interactive |
|------|-------------|-------------|
| IMAGE | Displays images | Yes |
| TEXT | Displays formatted text | Yes |
| CURSOR | The mouse cursor | Special |

## IMAGE Widget

Used for buttons, backgrounds, and decorative elements.

### Basic Image

```yaml
my_image:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Image with States

```yaml
my_button:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### State Overrides

Each state can have transform and collision overrides:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Slightly larger on hover
```

## TEXT Widget

Displays formatted text with support for PlaceholderAPI.

### Basic Text

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bWelcome to the server!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Text with Placeholders

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Player: &f%player_name%\n&7Level: &a%player_level%"
      text-size: 0.8
```

### Multi-line Text

Use `\n` for line breaks:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Line 1\nLine 2\nLine 3"
```

## CURSOR Widget

The cursor follows player mouse movement.

### Basic Cursor

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## Transform Properties

All widgets support transform properties:

```yaml
transform:
  position:
    x: 0.0    # Horizontal offset
    y: 0.0    # Vertical offset
    z: 0.0    # Depth offset
  size:
    x: 0.1    # Width scale
    y: 0.1    # Height scale
    z: 0.1    # Depth scale
  rotation:
    pitch: 0  # X-axis rotation
    yaw: 0    # Y-axis rotation
    roll: 0   # Z-axis rotation
```

## Collision Properties

Enable or customize collision detection:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Widget Ordering

Widgets are rendered in the order they appear in the YAML file. Later widgets appear in front of earlier ones.
