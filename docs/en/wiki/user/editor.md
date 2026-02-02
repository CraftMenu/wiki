# In-Game Editor

CraftMenu includes a powerful visual editor that allows you to configure menus directly through an inventory GUI, without editing YAML files manually.

## Getting Started

### Opening the Editor

```
/cm edit              # Open the main editor hub
/cm edit <menu>       # Edit a specific menu directly
```

**Permission Required:** `craftmenu.admin` or `craftmenu.edit`

### Editor Navigation

The editor uses a **stack-based navigation** system:
- **Left-click** on items to enter sub-menus or edit values
- **Right-click** for secondary actions (preview, test)
- **Shift + Left-click** to delete items (with confirmation)
- **Arrow item** (back button) to return to the previous menu
- **Close inventory** or click outside to exit

---

## Editor Main Menu

When you run `/cm edit`, you'll see the main editor hub with these options:

| Item | Description |
|------|-------------|
| **Menu List** | Browse and edit all loaded menus |
| **Image Browser** | View all available images |
| **Sound Browser** | View all available sounds |
| **Config** | Global plugin configuration |

---

## Menu Editing

### Menu List

Shows all menus in your `menus/` folder. Click a menu to open its editor.

- **Left-click**: Edit menu
- **Shift + Left-click**: Delete menu (with confirmation)
- **Create New**: Add a new menu at your current location

### Menu Actions Hub

After selecting a menu, you'll see the main menu editor with these sections:

| Section | Description |
|---------|-------------|
| **Properties** | Basic settings (name, title, main menu, auto-open) |
| **Location** | World position and rotation |
| **Layout** | Grid layout configuration |
| **Keybinds** | Keyboard shortcuts |
| **Visibility** | Hide players/mobs/items settings |
| **Advanced** | Cursor sensitivity, camera lock, boundaries |
| **Widgets** | Edit widgets in this menu |

---

## Menu Properties

Edit basic menu information:

| Property | Description |
|----------|-------------|
| **Name** | Menu identifier (used in commands) |
| **Title** | Display title (supports & color codes) |
| **Description** | Optional description |
| **Main Menu** | Mark as the primary menu |
| **Open on Join** | Auto-open when player joins server |
| **Open on Teleport** | Auto-open when player teleports to this world |
| **World** | World where the menu exists |

### Editing Text Values

When you click on a text property:
1. The inventory closes
2. A prompt appears in chat
3. Type your new value in chat
4. Press Enter to confirm (or type `cancel` to abort)

---

## Menu Location

Configure where the menu appears in the world:

| Property | Description |
|----------|-------------|
| **World** | Select from available worlds |
| **X / Y / Z** | Coordinates (click to edit via chat) |
| **Yaw** | Horizontal rotation (-180 to 180) |
| **Pitch** | Vertical rotation (-90 to 90) |
| **Set to Current** | Use your current position/rotation |

---

## Menu Layout (Grid)

Configure grid-based widget positioning:

| Property | Description |
|----------|-------------|
| **Enabled** | Toggle grid layout on/off |
| **Columns** | Number of grid columns |
| **Rows** | Number of grid rows |
| **Gap X / Y / Z** | Spacing between cells |
| **Alignment** | Grid alignment (CENTER, TOP_LEFT, etc.) |

When grid layout is enabled, widgets use `grid-position: {row: X, col: Y}` instead of manual coordinates.

---

## Menu Keybinds

Configure keyboard shortcuts:

| Action | Description |
|--------|-------------|
| **Add Keybind** | Create a new keyboard shortcut |
| **Edit Keybind** | Modify existing keybind |
| **Delete Keybind** | Remove a keybind |

### Keybind Properties

- **Key**: The key or combination (e.g., `SHIFT`, `CTRL+E`, `F`)
- **Action**: `activate`, `toggle`, or `close`
- **Widget**: Target widget name (for activate/toggle)

---

## Menu Visibility

Control what's visible while the menu is open:

| Property | Description |
|----------|-------------|
| **Hide Players** | Hide other players from view |
| **Hide Mobs** | Hide all mobs |
| **Hide Items** | Hide items on the ground |
| **Whitelist** | Players who remain visible (edit list) |

---

## Advanced Settings

Fine-tune menu behavior:

| Property | Description |
|----------|-------------|
| **Cursor Sensitivity** | Mouse movement speed (0.1 - 5.0) |
| **Max Yaw Offset** | Horizontal cursor boundary (degrees) |
| **Max Pitch Offset** | Vertical cursor boundary (degrees) |
| **Camera Lock Enabled** | Lock player's camera while menu is open |
| **Camera Lock Strength** | How strongly the camera is locked (0.0 - 1.0) |
| **Boundary Sound** | Sound when cursor hits boundary |
| **Boundary Volume/Pitch** | Sound properties |
| **Boundary Message** | Message shown at boundary |

---

## Widget Editing

### Widget List

Shows all widgets in the current menu:

- **Left-click**: Edit widget
- **Shift + Left-click**: Delete widget
- **Create New**: Add a new widget

### Widget Editor Hub

Each widget has these editable sections:

| Section | Description |
|---------|-------------|
| **Type** | IMAGE, TEXT, or CURSOR |
| **Transform** | Position, size, rotation |
| **Visual States** | Normal, hover, pressed, disabled appearances |
| **Collision** | Collision box configuration |
| **Events** | Interaction events and actions |
| **[Type-specific]** | Additional options based on widget type |

---

## Transform Editor

Configure widget positioning and sizing:

### Position
- **X**: Horizontal position
- **Y**: Vertical position
- **Z**: Depth position

### Size
- **X**: Width scale
- **Y**: Height scale
- **Z**: Depth scale

### Rotation
- **Pitch**: Up/down rotation
- **Yaw**: Left/right rotation
- **Roll**: Tilt rotation

**Tip**: Click any value to edit it via chat input.

---

## Visual States

Widgets can have different appearances for different states:

| State | When Applied |
|-------|--------------|
| **normal** | Default state |
| **hover** | Cursor is over the widget |
| **pressed** | Widget is being clicked |
| **disabled** | Widget is inactive |
| **Custom** | Any custom state name |

### Visual State Editor

Each state has:

| Property | Description |
|----------|-------------|
| **Type** | `image`, `text`, or `unicode` |
| **Value** | Image path, text content, or unicode character |
| **Overrides** | Optional transform/collision/text-size overrides |

---

## Collision Editor

Configure the widget's clickable area:

| Property | Description |
|----------|-------------|
| **Enabled** | Toggle collision detection |
| **Position X/Y/Z** | Collision box center offset |
| **Size X/Y/Z** | Collision box dimensions |
| **Offset X/Y/Z** | Additional offset |

**Tip**: Use `/cm debug particles` to visualize collision boxes in-game.

---

## Events Editor

### Event Types

| Event | Trigger |
|-------|---------|
| **on_menu_open** | When the menu opens |
| **on_cursor_hover** | When cursor enters the widget |
| **on_cursor_hover_exit** | When cursor leaves the widget |
| **on_cursor_click** | When the widget is clicked |

### Action List

Each event contains a list of actions that execute in order:

- **Left-click**: Edit action
- **Shift + Left-click**: Delete action
- **Add Action**: Create new action
- **Reorder**: Drag to change execution order

---

## Action Editors

Each action type has a specialized editor:

### Animation Action

| Property | Description |
|----------|-------------|
| **Effect** | Animation type (rotate, scale, bounce, etc.) |
| **Duration** | Animation length in milliseconds |
| **Scale X/Y/Z** | Scale multipliers (for scale animations) |
| **Intensity** | Effect strength (0.1 - 5.0) |
| **Easing** | Timing function (linear, ease_in, ease_out, etc.) |
| **Priority** | Block interactions during animation |

### Sound Action

| Property | Description |
|----------|-------------|
| **File** | Sound path (minecraft:... or custom path) |
| **Volume** | Sound volume (0.0 - 1.0) |
| **Pitch** | Sound pitch (0.5 - 2.0) |

**Browse**: Click to open the sound browser and select a sound.

### Command Action

| Property | Description |
|----------|-------------|
| **Command** | Command to execute (with special commands) |
| **Delay** | Delay in milliseconds before execution |

**Special Commands:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aYour message here`
- `[CLOSE]`
- `[PLAY_MUSIC] path/file.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /command`
- `[CONSOLE] /command`

### State Action

| Property | Description |
|----------|-------------|
| **Action Type** | `toggle_state` or `set_state` |
| **States** | List of states to toggle between (toggle_state) |
| **State** | Target state name (set_state) |

### Visual Change Action

| Property | Description |
|----------|-------------|
| **To** | Target visual state name |

### Widget Action

| Property | Description |
|----------|-------------|
| **Action** | `hide_widget`, `show_widget`, etc. |
| **Widget** | Target widget name |

### Effect Action

| Property | Description |
|----------|-------------|
| **Effect** | Effect type to apply |
| **Parameters** | Effect-specific parameters |

### Stop Animation Action

| Property | Description |
|----------|-------------|
| **Animation Type** | Which animation to stop |

### Stop Effect Action

| Property | Description |
|----------|-------------|
| **Effect Type** | Which effect to stop |

### Set Base State Action

| Property | Description |
|----------|-------------|
| **State** | New base state for the widget |

---

## Asset Browsers

### Image Browser

Browse all images in your `images/` folder:

- **Pagination**: Navigate through pages of images
- **Preview**: See image path and details
- **Select**: Click to use in current context

Images are organized by folder (e.g., `template/button.png`).

### Sound Browser

Browse all sounds in your `sounds/` folder plus Minecraft built-in sounds:

- **Custom Sounds**: Your .ogg files from `sounds/`
- **Minecraft Sounds**: Built-in sounds (minecraft:ui.button.click, etc.)
- **Select**: Click to use in current context

---

## Tips & Best Practices

### Workflow Tips

1. **Start with Properties**: Set up name, title, and location first
2. **Add Widgets**: Create your widgets with basic transforms
3. **Configure Visuals**: Set up normal and hover states
4. **Add Collision**: Enable and size collision boxes
5. **Add Events**: Configure hover sounds and click actions
6. **Test Frequently**: Use `/cm open <menu>` to test changes

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Escape** | Close editor |
| **Number keys (1-9)** | Quick slot selection |

### Common Issues

**Changes not appearing:**
- Run `/cm reload` after making changes
- Ensure you clicked "Save" in the editor

**Collision not detecting:**
- Check collision is enabled
- Verify collision size is large enough
- Use `/cm debug particles` to visualize

**Images not showing:**
- Run `/cm zip` to regenerate resource pack
- Ensure image is in a subfolder (e.g., `images/mymenu/`)
- Apply resource pack to client

---

## See Also

- [Commands Reference](commands.md)
- [Creating Menus](menu-creation.md)
- [Widget Types](widgets.md)
- [Event System](events.md)
- [Animations](animations.md)
