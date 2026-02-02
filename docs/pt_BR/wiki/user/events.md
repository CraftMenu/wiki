# Sistema de Eventos

CraftMenu usa um sistema de eventos para manipular interações do usuário com widgets.

## Tipos de Evento

| Evento | Gatilho | Disponível Em |
|--------|---------|---------------|
| `on_menu_open` | Menu abre | Todos os widgets |
| `on_cursor_hover` | Cursor entra no widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Cursor sai do widget | IMAGE, TEXT |
| `on_cursor_click` | Widget é clicado | IMAGE, TEXT |
| `on_click_any` | Qualquer clique | Apenas CURSOR |

## Estrutura Básica de Evento

```yaml
widgets:
  meu_botao:
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
          command: "[MESSAGE] &aVocê clicou!"
```

## Tipos de Ação

### Ação de Som

Toca um efeito sonoro:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Som do Minecraft
  volume: 1.0                       # 0.0 a 1.0
  pitch: 1.0                        # 0.5 a 2.0
```

Sons customizados:
```yaml
- action: sound
  file: template/click.ogg         # Arquivo de som customizado
```

### Ação de Animação

Dispara uma animação:

```yaml
- action: animation
  effect: scale                    # Tipo de animação
  duration: 200                    # Duração em ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Escala alvo
  easing_style: ease_out           # Função de easing
  priority: false                  # Bloquear outras ações?
```

### Ação de Comando

Executa comandos:

```yaml
- action: command
  command: "[MESSAGE] Olá!"      # Comando especial
  delay: 0                         # Atraso em ms
```

**Comandos Especiais:**
- `[MESSAGE] texto` - Envia mensagem ao jogador
- `[TELEPORT] mundo x y z yaw pitch` - Teleporta o jogador
- `[CLOSE]` - Fecha o menu
- `[PLAY_MUSIC] caminho/arquivo.ogg` - Toca música de fundo
- `[STOP_MUSIC]` - Para a música
- `[OPEN_URL] https://...` - Abre URL (clicável)
- `[PLAYER] /comando` - Executa comando como jogador
- `[CONSOLE] /comando` - Executa comando como console

### Ações de Estado

Altera estados do widget:

```yaml
# Alternar entre estados
- action: toggle_state
  states: [normal, disabled]

# Definir estado específico
- action: set_state
  state: disabled
```

### Ação de Mudança Visual

Altera a aparência do widget:

```yaml
- action: visual_change
  to: hover

# Mudança condicional
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Ação de Ocultar Widget

Remove um widget da visualização:

```yaml
- action: hide_widget
  widget: nome_do_meu_widget
```

### Ação de Parar Animação

Para animações em execução:

```yaml
- action: stop_animation
  animation_type: rotate          # Animação a parar
```

## Ordem de Execução de Eventos

Ações executam na ordem listada. Para melhores resultados:

1. Efeitos sonoros (feedback imediato)
2. Mudanças de estado
3. Comandos
4. Animações (podem ter atrasos)

## Animações Prioritárias

Use `priority: true` para bloquear outras ações até a animação completar:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Bloqueia ações subsequentes
    - action: command
      command: "[MESSAGE] Pronto!"  # Executa após a animação
```
