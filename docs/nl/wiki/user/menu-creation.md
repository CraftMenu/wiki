# Menu's Maken

Deze handleiding behandelt het maken van aangepaste menu's in CraftMenu.

## Menu Structuur

Menu's worden gedefinieerd in YAML-bestanden in `plugins/CraftMenu/menus/`.

### Basis Menu Template

```yaml
menu:
  name: mijn_menu
  title: "&b&lMijn Aangepaste Menu"
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
    # Widget definities hier
```

## Menu Eigenschappen

### Basiseigenschappen

| Eigenschap | Type | Beschrijving |
|------------|------|--------------|
| `name` | String | Unieke identificatie voor het menu |
| `title` | String | Weergavetitel (ondersteunt kleurcodes) |
| `main` | Boolean | Is dit het hoofdmenu? |
| `open-on-join` | Boolean | Automatisch openen wanneer speler bij wereld komt |
| `open-on-teleport` | Boolean | Automatisch openen wanneer speler naar wereld teleporteert |

### Locatie

```yaml
location:
  world: world               # Wereld naam
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Horizontale rotatie (-180 tot 180)
    pitch: 0.0               # Verticale rotatie (-90 tot 90)
```

### Instellingen

```yaml
settings:
  cursor-sensitivity: 1.0    # Muisgevoeligheid (1.0 = normaal)
  max-yaw-offset: 61.0       # Horizontale limiet in graden
  max-pitch-offset: 36.0     # Verticale limiet in graden
  camera-lock-enabled: true  # Camera van speler vergrendelen wanneer menu open is
  camera-lock-strength: 0.4  # Vergrendelingssterkte (0.0-1.0)
```

### Zichtbaarheidsinstellingen

```yaml
settings:
  visibility:
    hide_players: false      # Andere spelers verbergen
    hide_mobs: false         # Mobs verbergen
    hide_items: false        # Gevallen items verbergen
    whitelist_players: []    # Spelers die zichtbaar blijven
```

## Widgets Toevoegen

Widgets zijn de interactieve elementen van je menu.

### Image Widget

```yaml
widgets:
  mijn_knop:
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

### Text Widget

```yaml
widgets:
  titel_tekst:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lWelkom!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Snel Maken met Commando

Gebruik `/cm create <naam>` om snel een menu te maken op je huidige locatie.

## Aangepaste Afbeeldingen Toevoegen

1. Maak een map: `plugins/CraftMenu/images/mijn_menu/`
2. Voeg je PNG-afbeeldingen toe aan deze map
3. Voer `/cm zip` uit om het resource pack opnieuw te genereren
4. Verwijs naar afbeeldingen als `mijn_menu/afbeelding_naam.png`

## Je Menu Testen

1. Sla je YAML-bestand op
2. Voer `/cm reload` uit
3. Voer `/cm open mijn_menu` uit

## Best Practices

- Gebruik submappen om afbeeldingen per menu te organiseren
- Houd afbeeldingsgroottes redelijk (max 128x128 voor knoppen)
- Test menu's grondig voor implementatie
- Gebruik beschrijvende widget namen
- Voeg commentaar toe bij complexe configuraties
