# Criando Menus no CraftMenu

## 📋 Índice
1. [Criação via Comando](#criação-via-comando)
2. [Estrutura do YAML](#estrutura-do-yaml)
3. [Widgets Disponíveis](#widgets-disponíveis)
4. [Transform (Posicionamento)](#transform-posicionamento)
5. [Colisão](#colisão)
6. [Eventos e Ações](#eventos-e-ações)
7. [Exemplos Práticos](#exemplos-práticos)

---

## 🎯 Criação via Comando

### Método Recomendado

1. **Entre no jogo** e vá para o local onde deseja o menu
2. **Olhe na direção** que os jogadores devem estar ao abrir o menu
3. **Execute**:
   ```
   /cm criar nome_do_menu
   ```

O menu será criado com sua localização e rotação atuais!

### Estrutura Gerada

```
/plugins/CraftMenu/menus/nome_do_menu.yml
```

**Template padrão inclui**:
- ✅ FOV warning widget (pode ser removido)
- ✅ Cursor configurado
- ✅ Configurações otimizadas
- ✅ Boundary feedback
- ⚠️ **Cursor usa TEXT por padrão** - troque por IMAGE após adicionar texturas

---

## 📝 Estrutura do YAML

### Seções Principais

```yaml
menu:
  name: String              # Nome do menu
  title: String             # Título (suporta &códigos)
  main: boolean             # Menu principal? (futuro)
  location:                 # Localização no mundo
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Configurações
    # ... (ver abaixo)
  widgets:                  # Widgets do menu
    widget_name:
      # ... (ver abaixo)
```

### Settings Detalhados

```yaml
settings:
  # Áudio
  background-music: "template/background.ogg"  # Música de fundo (opcional)

  # Movimento do cursor
  cursor-sensitivity: 1.0          # Sensibilidade (0.1 - 5.0)
  max-yaw-offset: 61.0             # Limite horizontal em graus
  max-pitch-offset: 36.0           # Limite vertical em graus
  mount-time: 100                  # Tempo de montagem em ticks

  # Posicionamento do menu
  distance-multiplier: -0.01       # Multiplicador de distância
  menu-distance: 0.3               # Distância do menu

  # Performance
  debug-mode: false                # Modo debug
  update-rate: 1                   # Taxa de atualização
  collision-detection: true        # Detecção de colisão ativa

  # Câmera
  camera-lock-enabled: true        # Travar câmera
  camera-lock-strength: 0.4        # Força do travamento (0.0-1.0)

  # Feedback de limites
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lCursor limit reached!"
```

---

## 🧩 Widgets Disponíveis

### BUTTON

Botão interativo com hover e click.

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
      value: "▶ PLAY"
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

Imagem estática (pode ter hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Opcional
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Sem interação
```

### TEXT

Texto formatado.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lWELCOME
        &7to the server
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Tamanho do texto
  shadow: true              # Sombra
  background-color: '#000000'  # Cor de fundo (hex)
```

### CURSOR

Cursor controlado pelo mouse (**apenas 1 por menu**).

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
    position: {x: 0, y: 0, z: 1.0}  # z alto = na frente
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Configurações do cursor
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animação
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Área de colisão
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## 📐 Transform (Posicionamento)

### Position

Posição no espaço 3D relativa ao ponto de spawn do menu.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Esquerda (-) / Direita (+)
- **y**: Baixo (-) / Cima (+)
- **z**: Longe (-) / Perto (+)

**Dica**: z=0.1 é bom para fundo, z=1.0 para cursor (sempre visível)

### Size

Tamanho do widget.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Escalas típicas**:
- Botão pequeno: `0.015`
- Botão médio: `0.02`
- Botão grande: `0.03`
- Logo: `0.04-0.05`
- Cursor: `0.005`

### Rotation (Opcional)

Rotação em graus.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Nota**: Normalmente não precisa (ViewFrame já ajusta)

---

## 🎯 Colisão

### Configuração Básica

```yaml
collision:
  enabled: true                     # Ativar colisão
  position: {x: 0, y: 0, z: 0.1}   # Opcional: override de posição
  size: {x: 0.08, y: 0.04, z: 0.02} # Tamanho da caixa
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Opcional
```

### Debug Visual

```yaml
collision:
  debug:
    enabled: true     # Mostrar partículas
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, etc
    size: 0.005       # Tamanho das partículas
```

**Ativar globalmente**:
```
/cm depurar particulas alternar
/cm depurar particulas colisao
```

### Dicas de Colisão

1. **Tamanho visual ≠ tamanho de colisão**
   - Colisão pode ser maior para facilitar clique
   - Exemplo: visual 0.02, colisão 0.08x0.04

2. **Collision position**
   - Se não especificado, usa transform.position
   - Especifique se quiser área diferente

3. **Collision-area (Cursor)**
   - Cursor usa `collision-area` em vez de `collision`
   - Razão: Cursor tem comportamento especial

---

## ⚡ Eventos e Ações

### Eventos Disponíveis

| Evento | Quando Dispara | Widgets |
|--------|----------------|---------|
| `on_menu_open` | Menu abre | Todos |
| `on_cursor_hover` | Cursor entra | Button, Image, Text |
| `on_cursor_hover_exit` | Cursor sai | Button, Image, Text |
| `on_cursor_click` | Widget clicado | Button |
| `on_click_any` | Qualquer clique | Cursor |

### Ações Disponíveis

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, etc
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
  file: "minecraft:ui.button.click"  # OU "mymenu/click.ogg"
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
  delay: 1000  # Opcional, em ms
```

**Comandos especiais**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] texto com &cores`
- `[CLOSE]`
- `[PLAY_MUSIC] path/sound.ogg`
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
  widget: widget_name
```

---

## 📚 Exemplos Práticos

### Botão Simples com Som

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
      command: '[MESSAGE] &aButton clicked!'
```

### Botão com Teleporte

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
      command: '[MESSAGE] &eTeleporting...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Botão Toggle (Liga/Desliga)

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
      command: '[MESSAGE] &cDisabled!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aEnabled!'
```

### Widget de Texto Clicável

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lWARNING
        &7Click to dismiss
    hover:
      type: text
      value: |-
        &c&lWARNING
        &e&oClick to dismiss
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

## 💡 Boas Práticas

1. **Organize por layers (z)**:
   - z=0.05: Fundo
   - z=0.1: Botões
   - z=0.15: Overlays
   - z=1.0: Cursor

2. **Nomeie widgets descritivamente**:
   - ✅ `play_button`, `settings_menu`, `warning_banner`
   - ❌ `widget1`, `button2`, `img`

3. **Sempre inclua fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEXTO"}
   ```

4. **Colisão maior que visual**:
   - Visual: 0.02
   - Colisão: 0.08x0.04 (mais fácil de clicar)

5. **Use sons do Minecraft quando possível**:
   - Não precisa de resource pack
   - Funcionam sem configuração extra

6. **Teste incrementalmente**:
   - Adicione 1 widget por vez
   - Use `/cm recarregar` frequentemente
   - Teste cada interação

---

Última atualização: 2026-02-02
