# Creazione Menu in CraftMenu

## Indice
1. [Creazione tramite Comando](#creazione-tramite-comando)
2. [Struttura YAML](#struttura-yaml)
3. [Widget Disponibili](#widget-disponibili)
4. [Transform (Posizionamento)](#transform-posizionamento)
5. [Collisione](#collisione)
6. [Eventi e Azioni](#eventi-e-azioni)
7. [Esempi Pratici](#esempi-pratici)

---

## Creazione tramite Comando

### Metodo Consigliato

1. **Entra nel gioco** e vai alla posizione dove vuoi il menu
2. **Guarda nella direzione** che i giocatori dovrebbero avere quando aprono il menu
3. **Esegui**:
   ```
   /cm create nome_menu
   ```

Il menu verra creato con la tua posizione e rotazione attuali!

### Struttura Generata

```
/plugins/CraftMenu/menus/nome_menu.yml
```

**Il template predefinito include**:
- Widget di avviso FOV (puo essere rimosso)
- Cursore configurato
- Impostazioni ottimizzate
- Feedback limiti
- **Il cursore usa TEXT di default** - passa a IMAGE dopo aver aggiunto le texture

---

## Struttura YAML

### Sezioni Principali

```yaml
menu:
  name: String              # Nome del menu
  title: String             # Titolo (supporta &codici)
  main: boolean             # Menu principale? (futuro)
  location:                 # Posizione nel mondo
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Impostazioni
    # ... (vedi sotto)
  widgets:                  # Widget del menu
    nome_widget:
      # ... (vedi sotto)
```

### Impostazioni Dettagliate

```yaml
settings:
  # Audio
  background-music: "template/background.ogg"  # Musica di sottofondo (opzionale)

  # Movimento cursore
  cursor-sensitivity: 1.0          # Sensibilita (0.1 - 5.0)
  max-yaw-offset: 61.0             # Limite orizzontale in gradi
  max-pitch-offset: 36.0           # Limite verticale in gradi
  mount-time: 100                  # Tempo di mount in tick

  # Posizionamento menu
  distance-multiplier: -0.01       # Moltiplicatore distanza
  menu-distance: 0.3               # Distanza menu

  # Prestazioni
  debug-mode: false                # Modalita debug
  update-rate: 1                   # Frequenza aggiornamento
  collision-detection: true        # Rilevamento collisioni attivo

  # Camera
  camera-lock-enabled: true        # Blocca camera
  camera-lock-strength: 0.4        # Forza blocco (0.0-1.0)

  # Feedback limiti
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lLimite cursore raggiunto!"
```

---

## Widget Disponibili

### BUTTON

Pulsante interattivo con hover e click.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "▶ GIOCA"
  transform:
    position: {x: 0, y: 0.1, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover: [...]
    on_cursor_click: [...]
```

### IMAGE

Immagine statica (puo avere hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Opzionale
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Nessuna interazione
```

### TEXT

Testo formattato.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lBENVENUTO
        &7sul server
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Dimensione testo
  shadow: true              # Ombra
  background-color: '#000000'  # Colore sfondo (hex)
```

### CURSOR

Cursore controllato dal mouse (**solo 1 per menu**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # z alto = davanti
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Impostazioni cursore
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animazione
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Area collisione
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Posizionamento)

### Posizione

Posizione nello spazio 3D relativa al punto di spawn del menu.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Sinistra (-) / Destra (+)
- **y**: Basso (-) / Alto (+)
- **z**: Lontano (-) / Vicino (+)

**Suggerimento**: z=0.1 va bene per lo sfondo, z=1.0 per il cursore (sempre visibile)

### Dimensione

Dimensione del widget.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Scale tipiche**:
- Pulsante piccolo: `0.015`
- Pulsante medio: `0.02`
- Pulsante grande: `0.03`
- Logo: `0.04-0.05`
- Cursore: `0.005`

### Rotazione (Opzionale)

Rotazione in gradi.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Nota**: Di solito non necessaria (ViewFrame gia regola)

---

## Collisione

### Configurazione Base

```yaml
collision:
  enabled: true                     # Abilita collisione
  position: {x: 0, y: 0, z: 0.1}   # Opzionale: override posizione
  size: {x: 0.08, y: 0.04, z: 0.02} # Dimensione box
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Opzionale
```

### Debug Visivo

```yaml
collision:
  debug:
    enabled: true     # Mostra particelle
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, ecc.
    size: 0.005       # Dimensione particella
```

**Abilita globalmente**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Suggerimenti Collisione

1. **Dimensione visiva ≠ dimensione collisione**
   - La collisione puo essere piu grande per click piu facili
   - Esempio: visual 0.02, collision 0.08x0.04

2. **Posizione collisione**
   - Se non specificata, usa transform.position
   - Specifica se vuoi un'area diversa

3. **Collision-area (Cursore)**
   - Il cursore usa `collision-area` invece di `collision`
   - Motivo: il cursore ha comportamento speciale

---

## Eventi e Azioni

### Eventi Disponibili

| Evento | Quando Si Attiva | Widget |
|--------|------------------|--------|
| `on_menu_open` | Menu si apre | Tutti |
| `on_cursor_hover` | Cursore entra | Button, Image, Text |
| `on_cursor_hover_exit` | Cursore esce | Button, Image, Text |
| `on_cursor_click` | Widget cliccato | Button |
| `on_click_any` | Qualsiasi click | Cursor |

### Azioni Disponibili

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, ecc.
```

#### visual_change_conditional

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

#### sound

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # OPPURE "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ms
```

#### scale_reset

```yaml
- action: scale_reset
  duration: 200
```

#### command

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  delay: 1000  # Opzionale, in ms
```

**Comandi speciali**:
- `[TELEPORT] mondo x y z yaw pitch`
- `[MESSAGE] testo con &colori`
- `[CLOSE]`
- `[PLAY_MUSIC] percorso/suono.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`

#### toggle_state

```yaml
- action: toggle_state
  states: [normal, disabled]
```

#### hide_widget

```yaml
- action: hide_widget
  widget: nome_widget
```

---

## Esempi Pratici

### Pulsante Semplice con Suono

```yaml
simple_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/button.png}
    hover: {type: image, value: menu/button-hover.png}
  transform:
    position: {x: 0, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.2
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: command
      command: '[MESSAGE] &aPulsante cliccato!'
```

### Pulsante con Teletrasporto

```yaml
spawn_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/spawn.png}
    hover: {type: image, value: menu/spawn-hover.png}
  transform:
    position: {x: -0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_click:
    - action: sound
      file: "minecraft:entity.enderman.teleport"
    - action: command
      command: '[MESSAGE] &eTeletrasporto...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Pulsante Toggle (On/Off)

```yaml
toggle_button:
  type: BUTTON
  initial-state: normal
  visual:
    normal: {type: image, value: menu/on.png}
    hover: {type: image, value: menu/on-hover.png}
    disabled: {type: image, value: menu/off.png}
    disabled_hover: {type: image, value: menu/off-hover.png}
  transform:
    position: {x: 0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
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
      command: '[MESSAGE] &cDisabilitato!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aAbilitato!'
```

### Widget Testo Cliccabile

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lATTENZIONE
        &7Clicca per chiudere
    hover:
      type: text
      value: |-
        &c&lATTENZIONE
        &e&oClicca per chiudere
  transform:
    position: {x: 0, y: -0.1, z: 0.1}
    size: {x: 0.4, y: 0.2, z: 0.01}
  text-size: 0.12
  shadow: true
  background-color: '#8B0000'
  collision:
    enabled: true
    size: {x: 0.15, y: 0.03, z: 0.01}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: hide_widget
      widget: warning_text
```

---

## Buone Pratiche

1. **Organizza per livelli (z)**:
   - z=0.05: Sfondo
   - z=0.1: Pulsanti
   - z=0.15: Overlay
   - z=1.0: Cursore

2. **Nomina i widget descrittivamente**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Includi sempre il fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TESTO"}
   ```

4. **Collisione piu grande del visual**:
   - Visual: 0.02
   - Collision: 0.08x0.04 (piu facile da cliccare)

5. **Usa suoni Minecraft quando possibile**:
   - Nessun resource pack necessario
   - Funziona senza configurazione extra

6. **Testa incrementalmente**:
   - Aggiungi 1 widget alla volta
   - Usa `/cm reload` frequentemente
   - Testa ogni interazione

---

Ultimo aggiornamento: 2026-02-02
