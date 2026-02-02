# Funzionalita di CraftMenu

## Indice
1. [Sistema Audio Unificato](#sistema-audio-unificato)
2. [Eventi dei Widget](#eventi-dei-widget)
3. [Sistema di Stati](#sistema-di-stati)
4. [Feedback Limiti Configurabile](#feedback-limiti-configurabile)
5. [Comandi Speciali](#comandi-speciali)

---

## Sistema Audio Unificato

Tutti i campi audio ora supportano due tipi:

### Suoni Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Suono nativo Minecraft
  volume: 0.8
  pitch: 1.0
```

**Esempi di suoni Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Suoni Personalizzati (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Risolto automaticamente
  # OPPURE
  file: "craftmenu:template/click"   # Esplicitamente con namespace
  volume: 1.0
  pitch: 1.2
```

**Passaggi per suoni personalizzati**:
1. Aggiungi `.ogg` in `/plugins/CraftMenu/sounds/template/click.ogg`
2. Esegui `/cm zip`
3. Il resource pack include automaticamente il suono

---

## Eventi dei Widget

### on_menu_open

Si attiva automaticamente quando il menu si apre. Utile per musica di sottofondo.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Quando il cursore entra nell'area del widget.

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

Quando il cursore lascia l'area del widget.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Quando il widget viene cliccato.

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

### on_click_any (Solo Cursore)

Si attiva su QUALSIASI click, anche fuori dai widget.

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

## Sistema di Stati

Permette widget con comportamenti multipli (es. pulsante toggle on/off).

### Stati Predefiniti

- `normal`: Stato iniziale
- `hover`: Mouse sopra il widget
- `pressed`: Widget cliccato
- `disabled`: Widget disabilitato
- `fallback`: Quando il visual non si carica

### Stati Personalizzati

Puoi creare i tuoi stati:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Audio attivo
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Audio disattivato (stato personalizzato)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover quando disattivato (stato personalizzato)
      type: image
      value: template/sound-mute-hover.png
```

### Azioni sugli Stati

#### toggle_state

Alterna tra una lista di stati.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Cicla tra gli stati
```

#### visual_change_conditional

Cambia il visual solo se lo stato corrente e X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Se lo stato e "normal"
  to: hover                      # Cambia a "hover"
- action: visual_change_conditional
  if_state: disabled            # Se lo stato e "disabled"
  to: disabled_hover             # Cambia a "disabled_hover"
```

#### command_conditional

Esegue il comando solo se lo stato e X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Se diventa "disabled"
  command: '[STOP_MUSIC]'        # Ferma la musica
- action: command_conditional
  if_state: normal              # Se diventa "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Avvia la musica
```

### Esempio Completo: Pulsante Toggle

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

## Feedback Limiti Configurabile

Personalizza il feedback quando il cursore raggiunge i limiti di movimento.

### Configurazione

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Suono al raggiungimento del limite
      volume: 0.5                          # Volume 0.0-1.0
      pitch: 0.6                           # Pitch 0.5-2.0
      message: "&c&lLimite cursore raggiunto!" # Messaggio nella action bar
```

### Suoni Consigliati

- `minecraft:ui.button.click` - Click morbido
- `minecraft:block.note_block.bass` - Tono basso
- `craftmenu:template/warning.ogg` - Suono personalizzato

---

## Comandi Speciali

Usati con `action: command`.

### [TELEPORT]

Teletrasporta il giocatore.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    mondo  x   y   z yaw pitch
```

### [MESSAGE]

Invia un messaggio al giocatore.

```yaml
- action: command
  command: '[MESSAGE] &aBenvenuto nel gioco!'
  delay: 500  # Attende 500ms prima di inviare
```

### [CLOSE]

Chiude il menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Chiude dopo 1 secondo
```

### [PLAY_MUSIC]

Riproduce musica per il widget (un solo suono per widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Supporta namespace**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Ferma il suono attualmente in riproduzione per questo widget.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Importante**: `[STOP_MUSIC]` ferma solo il suono di questo widget, non influisce su altri widget o suoni globali.

### [OPEN_URL]

Apre un URL nel browser del giocatore (richiede conferma).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/il-tuo-server'
```

---

## Arresto Automatico Suoni

**Quando il menu si chiude**, TUTTI i suoni vengono automaticamente fermati per il giocatore. Questo include:

- Musica di sottofondo riprodotta tramite `[PLAY_MUSIC]`
- Suoni hover/click dei widget
- Qualsiasi suono attivo al momento della chiusura

**Perché Succede Questo**: A causa di una limitazione di Minecraft, il gioco non supporta l'arresto di suoni personalizzati individuali dai resource pack. Pertanto, TUTTI i suoni devono essere fermati quando il menu si chiude per evitare che i suoni continuino dopo la chiusura del menu.

### Alternativa: Controllo Manuale

Se preferisci non fermare i suoni automaticamente, usa un pulsante toggle nel menu:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Ferma la musica manualmente
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Azioni Visive

### visual_change

Cambia lo stato visivo incondizionatamente.

```yaml
- action: visual_change
  to: hover
```

### scale

Anima temporaneamente la scala del widget.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% della dimensione
  duration: 300                     # Durata in ms
```

### scale_reset

Ripristina la scala alla dimensione originale.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Rimuove completamente il widget (visual, collisione, suoni).

```yaml
- action: hide_widget
  widget: fov_warning  # Nome del widget da nascondere
```

**Nota**: Il widget nascosto non puo essere recuperato senza riaprire il menu.

---

## Esempio Completo: Menu con Tutte le Funzionalita

```yaml
menu:
  name: complete_example
  title: '&b&lEsempio Menu Completo'
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
      message: "&e⚠ &cCursore al limite!"

  widgets:
    # Pulsante con musica di sottofondo
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

    # Pulsante azione con feedback completo
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
          command: '[MESSAGE] &aAvvio gioco...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Cursore con feedback sonoro
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

Ultimo aggiornamento: 2026-02-02
Versione Plugin: 2.0
