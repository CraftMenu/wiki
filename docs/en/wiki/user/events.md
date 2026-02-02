# Event System

CraftMenu uses an event system to handle user interactions with widgets.

## Event Types

| Event | Trigger | Available On |
|-------|---------|--------------|
| `on_menu_open` | Menu opens | All widgets |
| `on_cursor_hover` | Cursor enters widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Cursor leaves widget | IMAGE, TEXT |
| `on_cursor_click` | Widget clicked | IMAGE, TEXT |
| `on_click_any` | Any click | CURSOR only |

## Basic Event Structure

```yaml
widgets:
  my_button:
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
          command: "[MESSAGE] &aYou clicked!"
```

## Action Types

### Sound Action

Plays a sound effect:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Minecraft sound
  volume: 1.0                       # 0.0 to 1.0
  pitch: 1.0                        # 0.5 to 2.0
```

Custom sounds:
```yaml
- action: sound
  file: template/click.ogg         # Custom sound file
```

### Animation Action

Triggers an animation:

```yaml
- action: animation
  effect: scale                    # Animation type
  duration: 200                    # Duration in ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Target scale
  easing_style: ease_out           # Easing function
  priority: false                  # Block other actions?
```

### Command Action

Executes commands:

```yaml
- action: command
  command: "[MESSAGE] Hello!"      # Special command
  delay: 0                         # Delay in ms
```

**Special Commands:**
- `[MESSAGE] text` - Send message to player
- `[TELEPORT] world x y z yaw pitch` - Teleport player
- `[CLOSE]` - Close the menu
- `[PLAY_MUSIC] path/file.ogg` - Play background music
- `[STOP_MUSIC]` - Stop music
- `[OPEN_URL] https://...` - Open URL (clickable)
- `[PLAYER] /command` - Run command as player
- `[CONSOLE] /command` - Run command as console

### State Actions

Change widget states:

```yaml
# Toggle between states
- action: toggle_state
  states: [normal, disabled]

# Set specific state
- action: set_state
  state: disabled
```

### Visual Change Action

Change widget appearance:

```yaml
- action: visual_change
  to: hover

# Conditional change
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Hide Widget Action

Remove a widget from view:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### Stop Animation Action

Stop running animations:

```yaml
- action: stop_animation
  animation_type: rotate          # Animation to stop
```

## Event Execution Order

Actions execute in the order listed. For best results:

1. Sound effects (immediate feedback)
2. State changes
3. Commands
4. Animations (may have delays)

## Priority Animations

Use `priority: true` to block other actions until animation completes:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Blocks subsequent actions
    - action: command
      command: "[MESSAGE] Done!"  # Executes after animation
```
