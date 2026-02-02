# Sistema Eventi

CraftMenu usa un sistema di eventi per gestire le interazioni degli utenti con i widget.

## Tipi di Eventi

| Evento | Trigger | Disponibile Su |
|--------|---------|----------------|
| `on_menu_open` | Il menu si apre | Tutti i widget |
| `on_cursor_hover` | Il cursore entra nel widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Il cursore esce dal widget | IMAGE, TEXT |
| `on_cursor_click` | Widget cliccato | IMAGE, TEXT |
| `on_click_any` | Qualsiasi click | Solo CURSOR |

## Struttura Evento Base

```yaml
widgets:
  mio_pulsante:
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
          command: "[MESSAGE] &aHai cliccato!"
```

## Tipi di Azione

### Azione Suono

Riproduce un effetto sonoro:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Suono Minecraft
  volume: 1.0                       # 0.0 a 1.0
  pitch: 1.0                        # 0.5 a 2.0
```

Suoni personalizzati:
```yaml
- action: sound
  file: template/click.ogg         # File suono personalizzato
```

### Azione Animazione

Avvia un'animazione:

```yaml
- action: animation
  effect: scale                    # Tipo animazione
  duration: 200                    # Durata in ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Scala target
  easing_style: ease_out           # Funzione easing
  priority: false                  # Blocca altre azioni?
```

### Azione Comando

Esegue comandi:

```yaml
- action: command
  command: "[MESSAGE] Ciao!"       # Comando speciale
  delay: 0                         # Ritardo in ms
```

**Comandi Speciali:**
- `[MESSAGE] testo` - Invia messaggio al giocatore
- `[TELEPORT] mondo x y z yaw pitch` - Teletrasporta il giocatore
- `[CLOSE]` - Chiude il menu
- `[PLAY_MUSIC] percorso/file.ogg` - Riproduce musica di sottofondo
- `[STOP_MUSIC]` - Ferma la musica
- `[OPEN_URL] https://...` - Apre URL (cliccabile)
- `[PLAYER] /comando` - Esegue comando come giocatore
- `[CONSOLE] /comando` - Esegue comando come console

### Azioni Stato

Cambia stati del widget:

```yaml
# Alterna tra stati
- action: toggle_state
  states: [normal, disabled]

# Imposta stato specifico
- action: set_state
  state: disabled
```

### Azione Cambio Visivo

Cambia l'aspetto del widget:

```yaml
- action: visual_change
  to: hover

# Cambio condizionale
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Azione Nascondi Widget

Rimuove un widget dalla vista:

```yaml
- action: hide_widget
  widget: nome_mio_widget
```

### Azione Ferma Animazione

Ferma le animazioni in esecuzione:

```yaml
- action: stop_animation
  animation_type: rotate          # Animazione da fermare
```

## Ordine di Esecuzione Eventi

Le azioni vengono eseguite nell'ordine elencato. Per risultati ottimali:

1. Effetti sonori (feedback immediato)
2. Cambi di stato
3. Comandi
4. Animazioni (potrebbero avere ritardi)

## Animazioni con Priorita

Usa `priority: true` per bloccare altre azioni fino al completamento dell'animazione:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Blocca azioni successive
    - action: command
      command: "[MESSAGE] Fatto!" # Eseguito dopo l'animazione
```
