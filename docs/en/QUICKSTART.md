# CraftMenu - Quick Start

## 5-Minute Guide

This guide takes you from zero to a working menu in 5 minutes.

---

## 1. Installation (1 min)

1. **Download**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (dependency)

2. **Install**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Start server**

4. **Verify**:
   ```
   /cm info
   ```

---

## 2. Create Your First Menu (2 min)

1. **In game**, go to the desired location
2. Run:
   ```
   /cm create mymenu
   ```

3. **Menu created!** File generated at:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. Add Images (1 min)

1. **Create folder**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **Add PNG images** (64x64 or 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Generate resource pack**:
   ```
   /cm zip
   ```

---

## 4. Configure Menu (1 min)

Edit `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&lMy First Menu'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Where you created it
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Simple button (using IMAGE with hover/click events)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← YOUR IMAGE
        hover:
          type: image
          value: mymenu/button-hover.png # ← HOVER IMAGE
        fallback:
          type: text
          value: "CLICK ME"               # If image fails
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
          command: '[MESSAGE] &aYou clicked the button!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Cursor
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← YOUR IMAGE
        fallback:
          type: text
          value: "§f→"
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
          volume: 0.3
```

---

## 5. Test

1. **Reload**:
   ```
   /cm reload
   ```

2. **Open menu**:
   ```
   /cm open mymenu
   ```

3. **Move mouse** to control cursor
4. **Click** the button

---

## Checklist

- [ ] Plugin installed and working
- [ ] Menu created with `/cm create`
- [ ] Images added in `/images/mymenu/`
- [ ] Resource pack generated with `/cm zip`
- [ ] Menu configured in YAML
- [ ] Menu works with `/cm open mymenu`
- [ ] Resource pack applied on client

---

## Common Problems

### "Menu not loaded"

```bash
/cm reload
/cm list  # Check if menu appears
```

### Cursor not appearing

**Solution**: Check cursor is in YAML and has visual configured

### Images show "?"

```bash
/cm images scan    # Check if images were found
/cm zip            # Regenerate resource pack
/cm reload         # Reload
```

### Resource pack not downloading

Player needs to:
1. Install manually: copy `/plugins/CraftMenu/craftmenu.zip` to `.minecraft/resourcepacks/`
2. OR configure in `server.properties` (requires web hosting)

---

## Next Steps

1. [Complete Menu Documentation](MENU_CREATION.md)
2. [Advanced Features](FEATURES.md)

---

## Useful Resources

- **Example images**: Search "minecraft UI icons" or create your own
- **Recommended sizes**: 64x64, 128x128
- **Format**: PNG with transparency
- **Minecraft Sounds**: [Complete list](https://minecraft.fandom.com/wiki/Sounds.json)

---

Last updated: 2026-02-02
