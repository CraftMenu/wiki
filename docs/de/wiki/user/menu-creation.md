# Menues erstellen

Diese Anleitung behandelt das Erstellen benutzerdefinierter Menues in CraftMenu.

## Menuestruktur

Menues werden in YAML-Dateien in `plugins/CraftMenu/menus/` definiert.

### Grundlegende Menuevorlage

```yaml
menu:
  name: mein_menue
  title: "&b&lMein benutzerdefiniertes Menue"
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
    # Widget-Definitionen hier
```

## Menue-Eigenschaften

### Grundeigenschaften

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `name` | String | Eindeutige Kennung fuer das Menue |
| `title` | String | Anzeigetitel (unterstuetzt Farbcodes) |
| `main` | Boolean | Ist dies das Hauptmenue? |
| `open-on-join` | Boolean | Auto-Oeffnen wenn Spieler der Welt beitritt |
| `open-on-teleport` | Boolean | Auto-Oeffnen wenn Spieler in die Welt teleportiert |

### Position

```yaml
location:
  world: world               # Weltname
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Horizontale Rotation (-180 bis 180)
    pitch: 0.0               # Vertikale Rotation (-90 bis 90)
```

### Einstellungen

```yaml
settings:
  cursor-sensitivity: 1.0    # Mausempfindlichkeit (1.0 = normal)
  max-yaw-offset: 61.0       # Horizontales Limit in Grad
  max-pitch-offset: 36.0     # Vertikales Limit in Grad
  camera-lock-enabled: true  # Spielerkamera sperren wenn Menue offen
  camera-lock-strength: 0.4  # Sperrstaerke (0.0-1.0)
```

### Sichtbarkeitseinstellungen

```yaml
settings:
  visibility:
    hide_players: false      # Andere Spieler verstecken
    hide_mobs: false         # Mobs verstecken
    hide_items: false        # Fallengelassene Items verstecken
    whitelist_players: []    # Spieler die sichtbar bleiben
```

## Widgets hinzufuegen

Widgets sind die interaktiven Elemente Ihres Menues.

### Bild-Widget

```yaml
widgets:
  mein_button:
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

### Text-Widget

```yaml
widgets:
  titel_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lWillkommen!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Schnelles Erstellen mit Befehl

Verwenden Sie `/cm erstellen <name>`, um schnell ein Menue an Ihrer aktuellen Position zu erstellen.

## Benutzerdefinierte Bilder hinzufuegen

1. Erstellen Sie einen Ordner: `plugins/CraftMenu/images/mein_menue/`
2. Fuegen Sie Ihre PNG-Bilder zu diesem Ordner hinzu
3. Fuehren Sie `/cm paket` aus, um das Ressourcenpaket neu zu generieren
4. Referenzieren Sie Bilder als `mein_menue/bild_name.png`

## Ihr Menue testen

1. Speichern Sie Ihre YAML-Datei
2. Fuehren Sie `/cm neuladen` aus
3. Fuehren Sie `/cm oeffnen mein_menue` aus

## Best Practices

- Verwenden Sie Unterordner, um Bilder nach Menue zu organisieren
- Halten Sie Bildgroessen angemessen (max 128x128 fuer Buttons)
- Testen Sie Menues gruendlich vor der Bereitstellung
- Verwenden Sie beschreibende Widget-Namen
- Kommentieren Sie komplexe Konfigurationen
