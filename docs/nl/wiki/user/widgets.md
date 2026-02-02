# Widget Types

CraftMenu ondersteunt drie types widgets voor het bouwen van menu's.

## Widget Types Overzicht

| Type | Beschrijving | Interactief |
|------|--------------|-------------|
| IMAGE | Toont afbeeldingen | Ja |
| TEXT | Toont geformatteerde tekst | Ja |
| CURSOR | De muiscursor | Speciaal |

## IMAGE Widget

Gebruikt voor knoppen, achtergronden en decoratieve elementen.

### Basis Afbeelding

```yaml
mijn_afbeelding:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Afbeelding met Staten

```yaml
mijn_knop:
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

### State Overrides

Elke state kan transform en collision overrides hebben:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Iets groter bij hover
```

## TEXT Widget

Toont geformatteerde tekst met ondersteuning voor PlaceholderAPI.

### Basis Tekst

```yaml
welkom_tekst:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bWelkom op de server!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Tekst met Placeholders

```yaml
speler_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Speler: &f%player_name%\n&7Level: &a%player_level%"
      text-size: 0.8
```

### Meerdere Regels Tekst

Gebruik `\n` voor regeleindes:

```yaml
beschrijving:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Regel 1\nRegel 2\nRegel 3"
```

## CURSOR Widget

De cursor volgt de muisbeweging van de speler.

### Basis Cursor

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

## Transform Eigenschappen

Alle widgets ondersteunen transform eigenschappen:

```yaml
transform:
  position:
    x: 0.0    # Horizontale offset
    y: 0.0    # Verticale offset
    z: 0.0    # Diepte offset
  size:
    x: 0.1    # Breedte schaal
    y: 0.1    # Hoogte schaal
    z: 0.1    # Diepte schaal
  rotation:
    pitch: 0  # X-as rotatie
    yaw: 0    # Y-as rotatie
    roll: 0   # Z-as rotatie
```

## Collision Eigenschappen

Schakel collision detectie in of pas deze aan:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Widget Volgorde

Widgets worden gerenderd in de volgorde waarin ze in het YAML-bestand verschijnen. Latere widgets verschijnen voor eerdere widgets.
