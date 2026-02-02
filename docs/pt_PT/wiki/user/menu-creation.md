# Criar Menus

Este guia cobre a criação de menus personalizados no CraftMenu.

## Estrutura do Menu

Menus são definidos em ficheiros YAML em `plugins/CraftMenu/menus/`.

### Template Básico de Menu

```yaml
menu:
  name: meu_menu
  title: "&b&lO Meu Menu Personalizado"
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
    # Definições de widget aqui
```

## Propriedades do Menu

### Propriedades Básicas

| Propriedade | Tipo | Descrição |
|-------------|------|-----------|
| `name` | String | Identificador único do menu |
| `title` | String | Título exibido (suporta códigos de cor) |
| `main` | Boolean | Este é o menu principal? |
| `open-on-join` | Boolean | Abrir automaticamente quando jogador entrar no mundo |
| `open-on-teleport` | Boolean | Abrir automaticamente quando jogador teleportar para o mundo |

### Localização

```yaml
location:
  world: world               # Nome do mundo
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Rotação horizontal (-180 a 180)
    pitch: 0.0               # Rotação vertical (-90 a 90)
```

### Configurações

```yaml
settings:
  cursor-sensitivity: 1.0    # Sensibilidade do rato (1.0 = normal)
  max-yaw-offset: 61.0       # Limite horizontal em graus
  max-pitch-offset: 36.0     # Limite vertical em graus
  camera-lock-enabled: true  # Bloquear câmara do jogador quando menu estiver aberto
  camera-lock-strength: 0.4  # Força do bloqueio (0.0-1.0)
```

### Configurações de Visibilidade

```yaml
settings:
  visibility:
    hide_players: false      # Ocultar outros jogadores
    hide_mobs: false         # Ocultar mobs
    hide_items: false        # Ocultar itens largados
    whitelist_players: []    # Jogadores que permanecem visíveis
```

## Adicionar Widgets

Widgets são os elementos interativos do seu menu.

### Widget de Imagem

```yaml
widgets:
  meu_botao:
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

### Widget de Texto

```yaml
widgets:
  texto_titulo:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lBem-vindo!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Criação Rápida por Comando

Use `/cm criar <nome>` para criar rapidamente um menu na sua localização atual.

## Adicionar Imagens Personalizadas

1. Crie uma pasta: `plugins/CraftMenu/images/meu_menu/`
2. Adicione as suas imagens PNG nesta pasta
3. Execute `/cm pacote` para regenerar o resource pack
4. Referencie as imagens como `meu_menu/nome_imagem.png`

## Testar o Seu Menu

1. Guarde o seu ficheiro YAML
2. Execute `/cm recarregar`
3. Execute `/cm abrir meu_menu`

## Boas Práticas

- Use subpastas para organizar imagens por menu
- Mantenha tamanhos de imagem razoáveis (máximo 128x128 para botões)
- Teste menus completamente antes de implementar
- Use nomes descritivos para widgets
- Comente configurações complexas
