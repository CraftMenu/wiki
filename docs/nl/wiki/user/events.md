# Event Systeem

CraftMenu gebruikt een event systeem om gebruikersinteracties met widgets af te handelen.

## Event Types

| Event | Trigger | Beschikbaar Op |
|-------|---------|----------------|
| `on_menu_open` | Menu opent | Alle widgets |
| `on_cursor_hover` | Cursor komt widget binnen | IMAGE, TEXT |
| `on_cursor_hover_exit` | Cursor verlaat widget | IMAGE, TEXT |
| `on_cursor_click` | Widget wordt geklikt | IMAGE, TEXT |
| `on_click_any` | Elke klik | Alleen CURSOR |

## Basis Event Structuur

```yaml
widgets:
  mijn_knop:
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
          command: "[MESSAGE] &aJe hebt geklikt!"
```

## Actie Types

### Sound Actie

Speelt een geluidseffect af:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Minecraft geluid
  volume: 1.0                       # 0.0 tot 1.0
  pitch: 1.0                        # 0.5 tot 2.0
```

Aangepaste geluiden:
```yaml
- action: sound
  file: template/click.ogg         # Aangepast geluidsbestand
```

### Animation Actie

Start een animatie:

```yaml
- action: animation
  effect: scale                    # Animatie type
  duration: 200                    # Duur in ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Doelschaal
  easing_style: ease_out           # Easing functie
  priority: false                  # Andere acties blokkeren?
```

### Command Actie

Voert commando's uit:

```yaml
- action: command
  command: "[MESSAGE] Hallo!"      # Speciaal commando
  delay: 0                         # Vertraging in ms
```

**Speciale Commando's:**
- `[MESSAGE] tekst` - Stuur bericht naar speler
- `[TELEPORT] wereld x y z yaw pitch` - Teleporteer speler
- `[CLOSE]` - Sluit het menu
- `[PLAY_MUSIC] pad/bestand.ogg` - Speel achtergrondmuziek
- `[STOP_MUSIC]` - Stop muziek
- `[OPEN_URL] https://...` - Open URL (klikbaar)
- `[PLAYER] /commando` - Voer commando uit als speler
- `[CONSOLE] /commando` - Voer commando uit als console

### State Acties

Verander widget staten:

```yaml
# Wissel tussen staten
- action: toggle_state
  states: [normal, disabled]

# Stel specifieke state in
- action: set_state
  state: disabled
```

### Visual Change Actie

Verander widget uiterlijk:

```yaml
- action: visual_change
  to: hover

# Conditionele verandering
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Hide Widget Actie

Verwijder een widget uit beeld:

```yaml
- action: hide_widget
  widget: mijn_widget_naam
```

### Stop Animation Actie

Stop lopende animaties:

```yaml
- action: stop_animation
  animation_type: rotate          # Te stoppen animatie
```

## Event Uitvoeringsvolgorde

Acties worden uitgevoerd in de volgorde waarin ze staan. Voor beste resultaten:

1. Geluidseffecten (directe feedback)
2. State wijzigingen
3. Commando's
4. Animaties (kunnen vertragingen hebben)

## Priority Animaties

Gebruik `priority: true` om andere acties te blokkeren totdat de animatie voltooid is:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Blokkeert volgende acties
    - action: command
      command: "[MESSAGE] Klaar!"  # Wordt uitgevoerd na animatie
```
