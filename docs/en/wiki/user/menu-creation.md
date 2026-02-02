# Creating Menus

This guide covers creating custom menus in CraftMenu.

## Menu Structure

Menus are defined in YAML files in `plugins/CraftMenu/menus/`.

### Basic Menu Template

```yaml
menu:
  name: my_menu
  title: "&b&lMy Custom Menu"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # Widget definitions here
```

## Menu Properties

### Basic Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | String | Unique identifier for the menu |
| `title` | String | Display title (supports color codes) |
| `main` | Boolean | Is this the main menu? |
| `open-on-join` | Boolean | Auto-open when player joins world |
| `open-on-teleport` | Boolean | Auto-open when player teleports to world |

### Location

```yaml
location:
  world: world               # World name
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Horizontal rotation (-180 to 180)
    pitch: 0.0               # Vertical rotation (-90 to 90)
```

### Settings

```yaml
settings:
  cursor-sensitivity: 1.0    # Mouse sensitivity (1.0 = normal)
  max-yaw-offset: 61.0       # Horizontal limit in degrees
  max-pitch-offset: 36.0     # Vertical limit in degrees
  camera-lock-enabled: true  # Lock player camera when menu is open
  camera-lock-strength: 0.4  # Lock strength (0.0-1.0)
```

### Visibility Settings

```yaml
settings:
  visibility:
    hide_players: false      # Hide other players
    hide_mobs: false         # Hide mobs
    hide_items: false        # Hide dropped items
    whitelist_players: []    # Players who remain visible
```

## Adding Widgets

Widgets are the interactive elements of your menu.

### Image Widget

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### Text Widget

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lWelcome!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Quick Create with Command

Use `/cm create <name>` to quickly create a menu at your current location.

## Adding Custom Images

1. Create a folder: `plugins/CraftMenu/images/my_menu/`
2. Add your PNG images to this folder
3. Run `/cm zip` to regenerate the resource pack
4. Reference images as `my_menu/image_name.png`

## Testing Your Menu

1. Save your YAML file
2. Run `/cm reload`
3. Run `/cm open my_menu`

## Best Practices

- Use subfolders to organize images by menu
- Keep image sizes reasonable (max 128x128 for buttons)
- Test menus thoroughly before deploying
- Use descriptive widget names
- Comment complex configurations
