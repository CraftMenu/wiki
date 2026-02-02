# CraftMenu Funktionen

## Inhaltsverzeichnis
1. [Einheitliches Sound-System](#einheitliches-sound-system)
2. [Widget-Events](#widget-events)
3. [Zustandssystem](#zustandssystem)
4. [Konfigurierbares Grenz-Feedback](#konfigurierbares-grenz-feedback)
5. [Spezielle Befehle](#spezielle-befehle)

---

## Einheitliches Sound-System

Alle Sound-Felder unterstutzen jetzt zwei Typen:

### Minecraft-Sounds

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Nativer Minecraft-Sound
  volume: 0.8
  pitch: 1.0
```

**Minecraft-Sound-Beispiele**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Benutzerdefinierte Sounds (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Automatisch aufgelost
  # ODER
  file: "craftmenu:template/click"   # Explizit mit Namespace
  volume: 1.0
  pitch: 1.2
```

**Schritte fur benutzerdefinierte Sounds**:
1. Fugen Sie `.ogg` hinzu in `/plugins/CraftMenu/sounds/template/click.ogg`
2. Fuhren Sie `/cm zip` aus
3. Resource Pack enthalt den Sound automatisch

---

## Widget-Events

### on_menu_open

Wird automatisch ausgelost wenn das Menu offnet. Nutzlich fur Hintergrundmusik.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Wenn der Cursor den Widget-Bereich betritt.

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

Wenn der Cursor den Widget-Bereich verlasst.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Wenn das Widget geklickt wird.

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

### on_click_any (Nur Cursor)

Wird bei JEDEM Klick ausgelost, auch auserhalb von Widgets.

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

## Zustandssystem

Ermoglicht Widgets mit mehreren Verhaltensweisen (z.B. Umschaltbutton ein/aus).

### Standardzustande

- `normal`: Anfangszustand
- `hover`: Maus uber Widget
- `pressed`: Widget geklickt
- `disabled`: Widget deaktiviert
- `fallback`: Wenn Visual nicht ladt

### Benutzerdefinierte Zustande

Sie konnen eigene Zustande erstellen:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Sound an
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Sound aus (benutzerdefinierter Zustand)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover wenn aus (benutzerdefinierter Zustand)
      type: image
      value: template/sound-mute-hover.png
```

### Zustandsaktionen

#### toggle_state

Wechselt zwischen einer Liste von Zustanden.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Wechselt zwischen Zustanden
```

#### visual_change_conditional

Andert Visual nur wenn aktueller Zustand X ist.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Wenn Zustand "normal" ist
  to: hover                      # Wechsle zu "hover"
- action: visual_change_conditional
  if_state: disabled            # Wenn Zustand "disabled" ist
  to: disabled_hover             # Wechsle zu "disabled_hover"
```

#### command_conditional

Fuhrt Befehl nur aus wenn Zustand X ist.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Wenn "disabled" wurde
  command: '[STOP_MUSIC]'        # Musik stoppen
- action: command_conditional
  if_state: normal              # Wenn "normal" wurde
  command: '[PLAY_MUSIC] template/background.ogg'  # Musik abspielen
```

### Vollstandiges Beispiel: Umschaltbutton

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

## Konfigurierbares Grenz-Feedback

Passt das Feedback an wenn der Cursor die Bewegungsgrenzen erreicht.

### Konfiguration

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Sound beim Erreichen des Limits
      volume: 0.5                          # Lautstarke 0.0-1.0
      pitch: 0.6                           # Tonhohe 0.5-2.0
      message: "&c&lCursor-Limit erreicht!" # Nachricht in Aktionsleiste
```

### Empfohlene Sounds

- `minecraft:ui.button.click` - Sanfter Klick
- `minecraft:block.note_block.bass` - Tiefer Ton
- `craftmenu:template/warning.ogg` - Benutzerdefinierter Sound

---

## Spezielle Befehle

Verwendet mit `action: command`.

### [TELEPORT]

Teleportiert Spieler.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    welt  x   y   z yaw pitch
```

### [MESSAGE]

Sendet Nachricht an Spieler.

```yaml
- action: command
  command: '[MESSAGE] &aWillkommen im Spiel!'
  delay: 500  # 500ms warten vor dem Senden
```

### [CLOSE]

Schliest das Menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Nach 1 Sekunde schliesen
```

### [PLAY_MUSIC]

Spielt Musik fur das Widget (nur ein Sound pro Widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Unterstutzt Namespaces**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Stoppt den aktuell spielenden Sound fur dieses Widget.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Wichtig**: `[STOP_MUSIC]` stoppt nur den Sound dieses Widgets, beeinflusst nicht andere Widgets oder globale Sounds.

### [OPEN_URL]

Offnet URL im Browser des Spielers (benotigt Bestatigung).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## Automatisches Sound-Stoppen

**Wenn das Menu schliest**, werden ALLE Sounds automatisch fur den Spieler gestoppt. Dies umfasst:

- Hintergrundmusik gespielt uber `[PLAY_MUSIC]`
- Widget-Hover/Click-Sounds
- Alle aktiven Sounds zum Zeitpunkt des Schliesens

**Warum Dies Passiert**: Aufgrund einer Minecraft-Einschränkung unterstützt das Spiel das Stoppen einzelner benutzerdefinierter Sounds aus Resource Packs nicht. Daher müssen ALLE Sounds gestoppt werden, wenn das Menü geschlossen wird, um zu verhindern, dass Sounds nach dem Schließen des Menüs weiterlaufen.

### Alternative: Manuelle Steuerung

Wenn Sie Sounds nicht automatisch stoppen mochten, verwenden Sie einen Umschaltbutton im Menu:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Musik manuell stoppen
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Visuelle Aktionen

### visual_change

Andert visuellen Zustand bedingungslos.

```yaml
- action: visual_change
  to: hover
```

### scale

Animiert Widget-Grose temporar.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% der Grose
  duration: 300                     # Dauer in ms
```

### scale_reset

Setzt Grose auf Originalgrose zuruck.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Entfernt Widget vollstandig (Visual, Kollision, Sounds).

```yaml
- action: hide_widget
  widget: fov_warning  # Widget-Name zum Verstecken
```

**Hinweis**: Verstecktes Widget kann nicht wiederhergestellt werden ohne das Menu neu zu offnen.

---

## Vollstandiges Beispiel: Menu mit allen Funktionen

```yaml
menu:
  name: complete_example
  title: '&b&lVollstandiges Menu-Beispiel'
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
      message: "&e⚠ &cCursor hat Rand erreicht!"

  widgets:
    # Button mit Hintergrundmusik
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

    # Aktionsbutton mit vollstandigem Feedback
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
          command: '[MESSAGE] &aSpiel wird gestartet...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Cursor mit Sound-Feedback
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

Zuletzt aktualisiert: 2026-02-02
Plugin-Version: 1.0.0
