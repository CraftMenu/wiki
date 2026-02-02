# Creazione Menu

Questa guida copre la creazione di menu personalizzati in CraftMenu.

## Struttura del Menu

I menu sono definiti in file YAML in `plugins/CraftMenu/menus/`.

### Template Menu Base

```yaml
menu:
  name: mio_menu
  title: "&b&lIl Mio Menu Personalizzato"
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
    # Definizioni widget qui
```

## Proprieta del Menu

### Proprieta Base

| Proprieta | Tipo | Descrizione |
|-----------|------|-------------|
| `name` | String | Identificatore unico per il menu |
| `title` | String | Titolo visualizzato (supporta codici colore) |
| `main` | Boolean | E il menu principale? |
| `open-on-join` | Boolean | Auto-apri quando il giocatore entra nel mondo |
| `open-on-teleport` | Boolean | Auto-apri quando il giocatore si teletrasporta nel mondo |

### Posizione

```yaml
location:
  world: world               # Nome del mondo
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Rotazione orizzontale (-180 a 180)
    pitch: 0.0               # Rotazione verticale (-90 a 90)
```

### Impostazioni

```yaml
settings:
  cursor-sensitivity: 1.0    # Sensibilita mouse (1.0 = normale)
  max-yaw-offset: 61.0       # Limite orizzontale in gradi
  max-pitch-offset: 36.0     # Limite verticale in gradi
  camera-lock-enabled: true  # Blocca la camera del giocatore quando il menu e aperto
  camera-lock-strength: 0.4  # Forza del blocco (0.0-1.0)
```

### Impostazioni Visibilita

```yaml
settings:
  visibility:
    hide_players: false      # Nascondi altri giocatori
    hide_mobs: false         # Nascondi mob
    hide_items: false        # Nascondi oggetti a terra
    whitelist_players: []    # Giocatori che rimangono visibili
```

## Aggiungere Widget

I widget sono gli elementi interattivi del tuo menu.

### Widget Immagine

```yaml
widgets:
  mio_pulsante:
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

### Widget Testo

```yaml
widgets:
  testo_titolo:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lBenvenuto!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Creazione Rapida con Comando

Usa `/cm crea <nome>` per creare rapidamente un menu alla tua posizione attuale.

## Aggiungere Immagini Personalizzate

1. Crea una cartella: `plugins/CraftMenu/images/mio_menu/`
2. Aggiungi le tue immagini PNG in questa cartella
3. Esegui `/cm pacchetto` per rigenerare il resource pack
4. Riferisci le immagini come `mio_menu/nome_immagine.png`

## Testare il Tuo Menu

1. Salva il tuo file YAML
2. Esegui `/cm ricarica`
3. Esegui `/cm apri mio_menu`

## Best Practice

- Usa sottocartelle per organizzare le immagini per menu
- Mantieni dimensioni immagini ragionevoli (max 128x128 per pulsanti)
- Testa i menu approfonditamente prima del deploy
- Usa nomi widget descrittivi
- Commenta le configurazioni complesse
