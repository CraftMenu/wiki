# Tipi di Widget

CraftMenu supporta tre tipi di widget per costruire menu.

## Panoramica Tipi di Widget

| Tipo | Descrizione | Interattivo |
|------|-------------|-------------|
| IMAGE | Visualizza immagini | Si |
| TEXT | Visualizza testo formattato | Si |
| CURSOR | Il cursore del mouse | Speciale |

## Widget IMAGE

Usato per pulsanti, sfondi ed elementi decorativi.

### Immagine Base

```yaml
mia_immagine:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Immagine con Stati

```yaml
mio_pulsante:
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

### Override per Stato

Ogni stato puo avere override di transform e collision:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Leggermente piu grande su hover
```

## Widget TEXT

Visualizza testo formattato con supporto PlaceholderAPI.

### Testo Base

```yaml
testo_benvenuto:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bBenvenuto sul server!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Testo con Placeholder

```yaml
info_giocatore:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Giocatore: &f%player_name%\n&7Livello: &a%player_level%"
      text-size: 0.8
```

### Testo Multi-Linea

Usa `\n` per le interruzioni di linea:

```yaml
descrizione:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Linea 1\nLinea 2\nLinea 3"
```

## Widget CURSOR

Il cursore segue il movimento del mouse del giocatore.

### Cursore Base

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

## Proprieta Transform

Tutti i widget supportano proprieta transform:

```yaml
transform:
  position:
    x: 0.0    # Offset orizzontale
    y: 0.0    # Offset verticale
    z: 0.0    # Offset profondita
  size:
    x: 0.1    # Scala larghezza
    y: 0.1    # Scala altezza
    z: 0.1    # Scala profondita
  rotation:
    pitch: 0  # Rotazione asse X
    yaw: 0    # Rotazione asse Y
    roll: 0   # Rotazione asse Z
```

## Proprieta Collision

Abilita o personalizza il rilevamento collisioni:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Ordine dei Widget

I widget sono renderizzati nell'ordine in cui appaiono nel file YAML. I widget successivi appaiono davanti a quelli precedenti.
