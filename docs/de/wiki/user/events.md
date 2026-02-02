# Event-System

CraftMenu verwendet ein Event-System zur Behandlung von Benutzerinteraktionen mit Widgets.

## Event-Typen

| Event | Ausloeser | Verfuegbar fuer |
|-------|-----------|-----------------|
| `on_menu_open` | Menue oeffnet sich | Alle Widgets |
| `on_cursor_hover` | Cursor betritt Widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Cursor verlaesst Widget | IMAGE, TEXT |
| `on_cursor_click` | Widget wird geklickt | IMAGE, TEXT |
| `on_click_any` | Beliebiger Klick | Nur CURSOR |

## Grundlegende Event-Struktur

```yaml
widgets:
  mein_button:
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
          command: "[MESSAGE] &aSie haben geklickt!"
```

## Aktionstypen

### Sound-Aktion

Spielt einen Soundeffekt ab:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Minecraft-Sound
  volume: 1.0                       # 0.0 bis 1.0
  pitch: 1.0                        # 0.5 bis 2.0
```

Benutzerdefinierte Sounds:
```yaml
- action: sound
  file: template/click.ogg         # Benutzerdefinierte Sound-Datei
```

### Animations-Aktion

Loest eine Animation aus:

```yaml
- action: animation
  effect: scale                    # Animationstyp
  duration: 200                    # Dauer in ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Zielgroesse
  easing_style: ease_out           # Easing-Funktion
  priority: false                  # Andere Aktionen blockieren?
```

### Befehls-Aktion

Fuehrt Befehle aus:

```yaml
- action: command
  command: "[MESSAGE] Hallo!"      # Spezieller Befehl
  delay: 0                         # Verzoegerung in ms
```

**Spezielle Befehle:**
- `[MESSAGE] text` - Nachricht an Spieler senden
- `[TELEPORT] welt x y z yaw pitch` - Spieler teleportieren
- `[CLOSE]` - Das Menue schliessen
- `[PLAY_MUSIC] pfad/datei.ogg` - Hintergrundmusik abspielen
- `[STOP_MUSIC]` - Musik stoppen
- `[OPEN_URL] https://...` - URL oeffnen (klickbar)
- `[PLAYER] /befehl` - Befehl als Spieler ausfuehren
- `[CONSOLE] /befehl` - Befehl als Konsole ausfuehren

### Zustands-Aktionen

Widget-Zustaende aendern:

```yaml
# Zwischen Zustaenden wechseln
- action: toggle_state
  states: [normal, disabled]

# Bestimmten Zustand setzen
- action: set_state
  state: disabled
```

### Visuelle Aenderungs-Aktion

Widget-Erscheinung aendern:

```yaml
- action: visual_change
  to: hover

# Bedingte Aenderung
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Widget-Verstecken-Aktion

Ein Widget aus der Ansicht entfernen:

```yaml
- action: hide_widget
  widget: mein_widget_name
```

### Animation-Stoppen-Aktion

Laufende Animationen stoppen:

```yaml
- action: stop_animation
  animation_type: rotate          # Animation zum Stoppen
```

## Event-Ausfuehrungsreihenfolge

Aktionen werden in der aufgelisteten Reihenfolge ausgefuehrt. Fuer beste Ergebnisse:

1. Soundeffekte (sofortiges Feedback)
2. Zustandsaenderungen
3. Befehle
4. Animationen (koennen Verzoegerungen haben)

## Prioritaets-Animationen

Verwenden Sie `priority: true`, um andere Aktionen zu blockieren, bis die Animation abgeschlossen ist:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Blockiert nachfolgende Aktionen
    - action: command
      command: "[MESSAGE] Fertig!"  # Wird nach der Animation ausgefuehrt
```
