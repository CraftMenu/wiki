# Sistema de Eventos

CraftMenu fornece um sistema de eventos poderoso para lidar com interações do utilizador.

## Tipos de Evento

| Evento | Descrição | Widgets Aplicáveis |
|--------|-----------|-------------------|
| `on_menu_open` | Dispara quando menu abre | Todos |
| `on_cursor_hover` | Cursor entra no widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Cursor sai do widget | IMAGE, TEXT |
| `on_cursor_click` | Widget é clicado | IMAGE, TEXT |
| `on_click_any` | Qualquer clique (mesmo fora de widgets) | CURSOR apenas |

## Tipos de Ação

### visual_change

Muda o estado visual do widget.

```yaml
- action: visual_change
  to: hover
```

### visual_change_conditional

Muda o visual apenas se estiver em estado específico.

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### sound

Reproduz um som.

```yaml
- action: sound
  file: "minecraft:ui.button.click"
  volume: 1.0
  pitch: 1.0
```

### animation

Inicia uma animação.

```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
  easing_style: ease_out
```

### command

Executa um comando ou comando especial.

```yaml
- action: command
  command: "[MESSAGE] &aOlá, mundo!"
  delay: 0
```

### toggle_state

Alterna entre estados.

```yaml
- action: toggle_state
  states: [normal, disabled]
```

### set_state

Define um estado específico.

```yaml
- action: set_state
  state: disabled
```

### hide_widget

Esconde um widget.

```yaml
- action: hide_widget
  widget: nome_do_widget
```

### stop_animation

Para uma animação em execução.

```yaml
- action: stop_animation
  animation_type: rotate
```

## Comandos Especiais

Comandos especiais são prefixados com colchetes:

| Comando | Descrição |
|---------|-----------|
| `[TELEPORT] world x y z yaw pitch` | Teleporta o jogador |
| `[MESSAGE] texto` | Envia mensagem ao jogador |
| `[CLOSE]` | Fecha o menu |
| `[PLAY_MUSIC] caminho/som.ogg` | Reproduz música de fundo |
| `[STOP_MUSIC]` | Para a música atual |
| `[OPEN_URL] https://...` | Abre URL no navegador |
| `[KICK] motivo` | Expulsa o jogador |
| `[PLAYER] /comando` | Executa comando como jogador |
| `[CONSOLE] /comando` | Executa comando como consola |

## Exemplo de Uso

```yaml
meu_botao:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
  events:
    on_cursor_hover:
      - action: visual_change
        to: hover
      - action: sound
        file: "minecraft:ui.button.click"
        volume: 0.5
        pitch: 1.2
      - action: animation
        effect: scale
        duration: 150
        scale: {x: 1.1, y: 1.1, z: 1.1}

    on_cursor_hover_exit:
      - action: visual_change
        to: normal
      - action: animation
        effect: scale
        duration: 150
        scale: {x: 1.0, y: 1.0, z: 1.0}

    on_cursor_click:
      - action: sound
        file: "minecraft:ui.button.click"
      - action: command
        command: "[MESSAGE] &aClicaste no botão!"
      - action: command
        command: "[CLOSE]"
        delay: 500
```

## Ordem de Execução

As ações são executadas na ordem em que são listadas. Use o parâmetro `delay` para controlar o tempo:

```yaml
on_cursor_click:
  - action: sound
    file: "minecraft:ui.button.click"
  - action: command
    command: "[MESSAGE] &aA teleportar..."
  - action: command
    command: "[TELEPORT] world 100 64 100 0 0"
    delay: 1000
  - action: command
    command: "[CLOSE]"
    delay: 1200
```

## Boas Práticas

1. **Feedback visual** - Sempre forneça feedback visual nas interações
2. **Feedback sonoro** - Use sons para confirmar cliques
3. **Delays** - Use delays para criar experiências polidas
4. **Estados** - Use estados para criar widgets toggle
