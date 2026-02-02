# Widget-Typen

CraftMenu unterstuetzt drei Arten von Widgets zum Erstellen von Menues.

## Widget-Typen Uebersicht

| Typ | Beschreibung | Interaktiv |
|-----|--------------|------------|
| IMAGE | Zeigt Bilder an | Ja |
| TEXT | Zeigt formatierten Text an | Ja |
| CURSOR | Der Mauszeiger | Speziell |

## IMAGE Widget

Wird fuer Buttons, Hintergruende und dekorative Elemente verwendet.

### Einfaches Bild

```yaml
mein_bild:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Bild mit Zustaenden

```yaml
mein_button:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### Zustandsueberschreibungen

Jeder Zustand kann Transform- und Kollisionsueberschreibungen haben:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Etwas groesser bei Hover
```

## TEXT Widget

Zeigt formatierten Text mit Unterstuetzung fuer PlaceholderAPI an.

### Einfacher Text

```yaml
willkommen_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bWillkommen auf dem Server!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Text mit Platzhaltern

```yaml
spieler_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Spieler: &f%player_name%\n&7Level: &a%player_level%"
      text-size: 0.8
```

### Mehrzeiliger Text

Verwenden Sie `\n` fuer Zeilenumbrueche:

```yaml
beschreibung:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Zeile 1\nZeile 2\nZeile 3"
```

## CURSOR Widget

Der Cursor folgt der Mausbewegung des Spielers.

### Einfacher Cursor

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## Transform-Eigenschaften

Alle Widgets unterstuetzen Transform-Eigenschaften:

```yaml
transform:
  position:
    x: 0.0    # Horizontaler Versatz
    y: 0.0    # Vertikaler Versatz
    z: 0.0    # Tiefenversatz
  size:
    x: 0.1    # Breitenskalierung
    y: 0.1    # Hoehenskalierung
    z: 0.1    # Tiefenskalierung
  rotation:
    pitch: 0  # X-Achsen-Rotation
    yaw: 0    # Y-Achsen-Rotation
    roll: 0   # Z-Achsen-Rotation
```

## Kollisionseigenschaften

Aktivieren oder anpassen der Kollisionserkennung:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Widget-Reihenfolge

Widgets werden in der Reihenfolge gerendert, wie sie in der YAML-Datei erscheinen. Spaetere Widgets erscheinen vor frueheren.
