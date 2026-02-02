# CraftMenu Features

## Table of Contents
1. [Unified Sound System](#unified-sound-system)
2. [Widget Events](#widget-events)
3. [State System](#state-system)
4. [Configurable Boundary Feedback](#configurable-boundary-feedback)
5. [Special Commands](#special-commands)

---

## Unified Sound System

All sound fields now support two types:

### Minecraft Sounds

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Native Minecraft sound
  volume: 0.8
  pitch: 1.0
```

**Minecraft sound examples**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Custom Sounds (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Automatically resolved
  # OR
  file: "craftmenu:template/click"   # Explicitly with namespace
  volume: 1.0
  pitch: 1.2
```

**Steps for custom sounds**:
1. Add `.ogg` in `/plugins/CraftMenu/sounds/template/click.ogg`
2. Run `/cm zip`
3. Resource pack includes the sound automatically

---

## Widget Events

### on_menu_open

Fires automatically when the menu opens. Useful for background music.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

When cursor enters the widget area.

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

When cursor leaves the widget area.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

When widget is clicked.

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

### on_click_any (Cursor only)

Fires on ANY click, even outside widgets.

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

## State System

Allows widgets with multiple behaviors (e.g., toggle button on/off).

### Default States

- `normal`: Initial state
- `hover`: Mouse over widget
- `pressed`: Widget clicked
- `disabled`: Widget disabled
- `fallback`: When visual doesn't load

### Custom States

You can create your own states:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Sound on
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Sound off (custom state)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover when off (custom state)
      type: image
      value: template/sound-mute-hover.png
```

### State Actions

#### toggle_state

Toggles between a list of states.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Cycles between states
```

#### visual_change_conditional

Changes visual only if current state is X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # If state is "normal"
  to: hover                      # Change to "hover"
- action: visual_change_conditional
  if_state: disabled            # If state is "disabled"
  to: disabled_hover             # Change to "disabled_hover"
```

#### command_conditional

Executes command only if state is X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # If became "disabled"
  command: '[STOP_MUSIC]'        # Stop music
- action: command_conditional
  if_state: normal              # If became "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Play music
```

### Complete Example: Toggle Button

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## Configurable Boundary Feedback

Customizes feedback when cursor reaches movement limits.

### Configuration

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Sound when reaching limit
      volume: 0.5                          # Volume 0.0-1.0
      pitch: 0.6                           # Pitch 0.5-2.0
      message: "&c&lCursor limit reached!" # Message in action bar
```

### Recommended Sounds

- `minecraft:ui.button.click` - Soft click
- `minecraft:block.note_block.bass` - Low tone
- `craftmenu:template/warning.ogg` - Custom sound

---

## Special Commands

Used with `action: command`.

### [TELEPORT]

Teleports player.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

Sends message to player.

```yaml
- action: command
  command: '[MESSAGE] &aWelcome to the game!'
  delay: 500  # Wait 500ms before sending
```

### [CLOSE]

Closes the menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Close after 1 second
```

### [PLAY_MUSIC]

Plays music for the widget (only one sound per widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Supports namespaces**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Stops the currently playing sound for this widget.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Important**: `[STOP_MUSIC]` stops only this widget's sound, does not affect other widgets or global sounds.

### [OPEN_URL]

Opens URL in player's browser (requires confirmation).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## Automatic Sound Stop

**When the menu closes**, ALL sounds are automatically stopped for the player. This includes:

- Background music played via `[PLAY_MUSIC]`
- Widget hover/click sounds
- Any sound active at the time of closing

**Why This Happens**: Due to a Minecraft limitation, the game doesn't support stopping individual custom sounds from resource packs. Therefore, ALL sounds must be stopped when the menu closes to prevent sounds from continuing after the menu is gone.

### Alternative: Manual Control

If you prefer not to stop sounds automatically, use a toggle button in the menu:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Stop music manually
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Visual Actions

### visual_change

Changes visual state unconditionally.

```yaml
- action: visual_change
  to: hover
```

### scale

Animates widget scale temporarily.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% of size
  duration: 300                     # Duration in ms
```

### scale_reset

Resets scale to original size.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Removes widget completely (visual, collision, sounds).

```yaml
- action: hide_widget
  widget: fov_warning  # Widget name to hide
```

**Note**: Hidden widget cannot be recovered without reopening the menu.

---

## Complete Example: Menu with All Features

```yaml
menu:
  name: complete_example
  title: '&b&lComplete Menu Example'
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
      message: "&e⚠ &cCursor reached edge!"

  widgets:
    # Button with background music
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

    # Action button with complete feedback
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
          command: '[MESSAGE] &aStarting game...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Cursor with sound feedback
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

Last updated: 2026-02-02
Plugin Version: 1.0.0
