# Tipos de Widget

CraftMenu suporta três tipos de widgets para construir menus.

## Visão Geral dos Tipos de Widget

| Tipo | Descrição | Interativo |
|------|-----------|------------|
| IMAGE | Exibe imagens | Sim |
| TEXT | Exibe texto formatado | Sim |
| CURSOR | O cursor do mouse | Especial |

## Widget IMAGE

Usado para botões, fundos e elementos decorativos.

### Imagem Básica

```yaml
minha_imagem:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Imagem com Estados

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
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### Sobrescritas de Estado

Cada estado pode ter sobrescritas de transform e colisão:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Ligeiramente maior no hover
```

## Widget TEXT

Exibe texto formatado com suporte a PlaceholderAPI.

### Texto Básico

```yaml
texto_boas_vindas:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bBem-vindo ao servidor!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Texto com Placeholders

```yaml
info_jogador:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Jogador: &f%player_name%\n&7Nível: &a%player_level%"
      text-size: 0.8
```

### Texto Multilinha

Use `\n` para quebras de linha:

```yaml
descricao:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Linha 1\nLinha 2\nLinha 3"
```

## Widget CURSOR

O cursor segue o movimento do mouse do jogador.

### Cursor Básico

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

## Propriedades de Transform

Todos os widgets suportam propriedades de transform:

```yaml
transform:
  position:
    x: 0.0    # Deslocamento horizontal
    y: 0.0    # Deslocamento vertical
    z: 0.0    # Deslocamento de profundidade
  size:
    x: 0.1    # Escala de largura
    y: 0.1    # Escala de altura
    z: 0.1    # Escala de profundidade
  rotation:
    pitch: 0  # Rotação no eixo X
    yaw: 0    # Rotação no eixo Y
    roll: 0   # Rotação no eixo Z
```

## Propriedades de Colisão

Ative ou personalize a detecção de colisão:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Ordenação de Widgets

Widgets são renderizados na ordem em que aparecem no arquivo YAML. Widgets posteriores aparecem na frente dos anteriores.
