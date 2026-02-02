# Recursos do CraftMenu

## 📋 Índice
1. [Sistema de Sons Unificado](#sistema-de-sons-unificado)
2. [Eventos de Widget](#eventos-de-widget)
3. [Sistema de Estados](#sistema-de-estados)
4. [Boundary Feedback Configurável](#boundary-feedback-configurável)
5. [Comandos Especiais](#comandos-especiais)

---

## 🔊 Sistema de Sons Unificado

Todos os campos de som agora suportam dois tipos:

### Minecraft Sounds

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Som nativo do Minecraft
  volume: 0.8
  pitch: 1.0
```

**Exemplos de sons Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Custom Sounds (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Automaticamente resolvido
  # OU
  file: "craftmenu:template/click"   # Explicitamente com namespace
  volume: 1.0
  pitch: 1.2
```

**Passos para sons customizados**:
1. Adicionar `.ogg` em `/plugins/CraftMenu/sounds/template/click.ogg`
2. Executar `/cm pacote`
3. Resource pack inclui o som automaticamente

---

## 🎯 Eventos de Widget

### on_menu_open

Dispara automaticamente quando o menu abre. Útil para música de fundo.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Quando cursor entra na área do widget.

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

Quando cursor sai da área do widget.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Quando widget é clicado.

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

### on_click_any (Cursor apenas)

Dispara em QUALQUER clique, mesmo fora de widgets.

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

## 🔄 Sistema de Estados

Permite widgets com múltiplos comportamentos (ex: botão liga/desliga).

### Estados Padrão

- `normal`: Estado inicial
- `hover`: Mouse sobre widget
- `pressed`: Widget clicado
- `disabled`: Widget desabilitado
- `fallback`: Quando visual não carrega

### Estados Customizados

Você pode criar seus próprios estados:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Som ligado
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Som desligado (estado custom)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover quando desligado (estado custom)
      type: image
      value: template/sound-mute-hover.png
```

### Ações de Estado

#### toggle_state

Alterna entre lista de estados.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Cicla entre estados
```

#### visual_change_conditional

Muda visual apenas se estado atual for X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Se estado for "normal"
  to: hover                      # Mudar para "hover"
- action: visual_change_conditional
  if_state: disabled            # Se estado for "disabled"
  to: disabled_hover             # Mudar para "disabled_hover"
```

#### command_conditional

Executa comando apenas se estado for X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Se virou "disabled"
  command: '[STOP_MUSIC]'        # Para música
- action: command_conditional
  if_state: normal              # Se virou "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Toca música
```

### Exemplo Completo: Botão Toggle

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

## 🎚️ Boundary Feedback Configurável

Customiza o feedback quando cursor atinge limites de movimento.

### Configuração

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Som ao atingir limite
      volume: 0.5                          # Volume 0.0-1.0
      pitch: 0.6                           # Pitch 0.5-2.0
      message: "&c&lCursor limit reached!" # Mensagem na action bar
```

### Sons Recomendados

- `minecraft:ui.button.click` - Clique suave
- `minecraft:block.note_block.bass` - Tom grave
- `craftmenu:template/warning.ogg` - Som customizado

---

## ⚡ Comandos Especiais

Usados com `action: command`.

### [TELEPORT]

Teleporta jogador.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

Envia mensagem ao jogador.

```yaml
- action: command
  command: '[MESSAGE] &aWelcome to the game!'
  delay: 500  # Espera 500ms antes de enviar
```

### [CLOSE]

Fecha o menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Fecha após 1 segundo
```

### [PLAY_MUSIC]

Toca música para o widget (apenas um som por widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Suporta namespaces**:
- `[PLAY_MUSIC] template/music.ogg` ✅
- `[PLAY_MUSIC] craftmenu:template/music` ✅
- `[PLAY_MUSIC] minecraft:music.menu` ✅

### [STOP_MUSIC]

Para o som atualmente tocando para este widget.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Importante**: `[STOP_MUSIC]` para apenas o som deste widget, não afeta outros widgets ou sons globais.

### [OPEN_URL]

Abre URL no navegador do jogador (requer confirmação).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## 🔇 Parada Automática de Sons

**Quando o menu fecha**, TODOS os sons são automaticamente parados para o jogador. Isso inclui:

- Música de fundo tocada via `[PLAY_MUSIC]`
- Sons de hover/click de widgets
- Qualquer som ativo no momento do fechamento

**Por Que Isso Acontece**: Devido a uma limitação do Minecraft, o jogo não suporta parar sons customizados individuais de resource packs. Portanto, TODOS os sons devem ser parados quando o menu fecha para evitar que sons continuem após o menu ser fechado.

### Alternativa: Controle Manual

Se preferir não parar sons automaticamente, use o botão de toggle no menu:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Para música manualmente
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## 🎨 Ações Visuais

### visual_change

Muda estado visual incondicional.

```yaml
- action: visual_change
  to: hover
```

### scale

Anima escala do widget temporariamente.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% do tamanho
  duration: 300                     # Duração em ms
```

### scale_reset

Reseta escala para tamanho original.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Remove widget completamente (visual, colisão, sons).

```yaml
- action: hide_widget
  widget: fov_warning  # Nome do widget a esconder
```

**Nota**: Widget escondido não pode ser recuperado sem reabrir o menu.

---

## 🎯 Exemplo Completo: Menu com Todos os Recursos

```yaml
menu:
  name: complete_example
  title: '&b&lComplete Menu Example'
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
      message: "&e⚠ &cCursor reached edge!"

  widgets:
    # Botão com música de fundo
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

    # Botão de ação com feedback completo
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
          command: '[MESSAGE] &aStarting game...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Cursor com feedback sonoro
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

Última atualização: 2026-02-02
Versão do Plugin: 1.0.0
