# CraftMenu Functies

## Inhoudsopgave
1. [Unified Geluidssysteem](#unified-geluidssysteem)
2. [Widget Events](#widget-events)
3. [State Systeem](#state-systeem)
4. [Configureerbare Grens Feedback](#configureerbare-grens-feedback)
5. [Speciale Commando's](#speciale-commandos)

---

## Unified Geluidssysteem

Alle geluidsvelden ondersteunen nu twee types:

### Minecraft Geluiden

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Eigen Minecraft geluid
  volume: 0.8
  pitch: 1.0
```

**Voorbeelden van Minecraft geluiden**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Aangepaste Geluiden (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Automatisch opgelost
  # OF
  file: "craftmenu:template/click"   # Expliciet met namespace
  volume: 1.0
  pitch: 1.2
```

**Stappen voor aangepaste geluiden**:
1. Voeg `.ogg` toe in `/plugins/CraftMenu/sounds/template/click.ogg`
2. Voer `/cm zip` uit
3. Resource pack bevat het geluid automatisch

---

## Widget Events

### on_menu_open

Wordt automatisch geactiveerd wanneer het menu opent. Handig voor achtergrondmuziek.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Wanneer de cursor het widgetgebied binnenkomt.

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

Wanneer de cursor het widgetgebied verlaat.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Wanneer op de widget wordt geklikt.

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

### on_click_any (Alleen Cursor)

Wordt geactiveerd bij ELKE klik, zelfs buiten widgets.

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

## State Systeem

Maakt widgets met meerdere gedragingen mogelijk (bijv. schakelknop aan/uit).

### Standaard States

- `normal`: Initiële state
- `hover`: Muis boven widget
- `pressed`: Widget aangeklikt
- `disabled`: Widget uitgeschakeld
- `fallback`: Wanneer visual niet laadt

### Aangepaste States

Je kunt je eigen states maken:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Geluid aan
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Geluid uit (aangepaste state)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover wanneer uit (aangepaste state)
      type: image
      value: template/sound-mute-hover.png
```

### State Acties

#### toggle_state

Wisselt tussen een lijst van states.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Cycled tussen states
```

#### visual_change_conditional

Wijzigt visual alleen als huidige state X is.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Als state "normal" is
  to: hover                      # Wijzig naar "hover"
- action: visual_change_conditional
  if_state: disabled            # Als state "disabled" is
  to: disabled_hover             # Wijzig naar "disabled_hover"
```

#### command_conditional

Voert commando alleen uit als state X is.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Als "disabled" werd
  command: '[STOP_MUSIC]'        # Stop muziek
- action: command_conditional
  if_state: normal              # Als "normal" werd
  command: '[PLAY_MUSIC] template/background.ogg'  # Speel muziek
```

### Volledig Voorbeeld: Schakelknop

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

## Configureerbare Grens Feedback

Past feedback aan wanneer de cursor bewegingslimieten bereikt.

### Configuratie

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Geluid bij bereiken limiet
      volume: 0.5                          # Volume 0.0-1.0
      pitch: 0.6                           # Pitch 0.5-2.0
      message: "&c&lCursor limiet bereikt!" # Bericht in actiebalk
```

### Aanbevolen Geluiden

- `minecraft:ui.button.click` - Zachte klik
- `minecraft:block.note_block.bass` - Lage toon
- `craftmenu:template/warning.ogg` - Aangepast geluid

---

## Speciale Commando's

Gebruikt met `action: command`.

### [TELEPORT]

Teleporteert speler.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    wereld  x   y   z yaw pitch
```

### [MESSAGE]

Stuurt bericht naar speler.

```yaml
- action: command
  command: '[MESSAGE] &aWelkom bij het spel!'
  delay: 500  # Wacht 500ms voor verzenden
```

### [CLOSE]

Sluit het menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Sluit na 1 seconde
```

### [PLAY_MUSIC]

Speelt muziek voor de widget (slechts een geluid per widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Ondersteunt namespaces**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Stopt het huidige geluid voor deze widget.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Belangrijk**: `[STOP_MUSIC]` stopt alleen het geluid van deze widget, beinvloedt geen andere widgets of globale geluiden.

**Technische Opmerking**: Het commando gebruikt intern `player.stopAllSounds()` omdat `player.stopSound(key)` niet werkt met aangepaste resource pack geluiden. Het wordt echter alleen geactiveerd door de specifieke widget.

### [OPEN_URL]

Opent URL in browser van speler (vereist bevestiging).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## Automatisch Stoppen van Geluid

**Wanneer het menu sluit**, worden ALLE geluiden automatisch gestopt voor de speler. Dit omvat:

- Achtergrondmuziek afgespeeld via `[PLAY_MUSIC]`
- Widget hover/click geluiden
- Elk geluid actief op het moment van sluiten

### Hoe Het Werkt

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← Aangeroepen VOOR close()
}
menuInstance.close();
```

### Technische Beperking

Het systeem gebruikt `player.stopAllSounds()` omdat:
- `player.stopSound(key)` **niet werkt** met aangepaste resource pack geluiden
- `player.stopSound(key, category)` **ook niet werkt**
- `stopAllSounds()` is de **enige betrouwbare oplossing**

Dit betekent dat **alle** geluiden van de speler worden gestopt bij het sluiten van het menu, niet alleen menugeluiden. Dit is een Minecraft/Bukkit beperking, niet CraftMenu.

### Alternatief: Handmatige Controle

Als je liever niet automatisch geluiden stopt, gebruik een schakelknop in het menu:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Stop muziek handmatig
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Visuele Acties

### visual_change

Wijzigt visuele state onvoorwaardelijk.

```yaml
- action: visual_change
  to: hover
```

### scale

Animeert widget schaal tijdelijk.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% van grootte
  duration: 300                     # Duur in ms
```

### scale_reset

Reset schaal naar originele grootte.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Verwijdert widget volledig (visual, collision, geluiden).

```yaml
- action: hide_widget
  widget: fov_warning  # Widget naam om te verbergen
```

**Opmerking**: Verborgen widget kan niet worden hersteld zonder het menu opnieuw te openen.

---

## Volledig Voorbeeld: Menu met Alle Functies

```yaml
menu:
  name: complete_example
  title: '&b&lVolledig Menu Voorbeeld'
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
      message: "&e⚠ &cCursor heeft rand bereikt!"

  widgets:
    # Knop met achtergrondmuziek
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

    # Actieknop met volledige feedback
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
          command: '[MESSAGE] &aSpel starten...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Cursor met geluidsfeedback
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

Laatst bijgewerkt: 2026-02-02
Plugin Versie: 2.0
