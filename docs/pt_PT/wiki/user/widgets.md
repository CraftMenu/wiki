# Tipos de Widget

CraftMenu suporta três tipos principais de widget para construir os seus menus.

## Tipos de Widget

### IMAGE

Exibe uma imagem do resource pack.

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
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### TEXT

Exibe texto formatado com suporte a códigos de cor e PlaceholderAPI.

```yaml
mensagem_boas_vindas:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&b&lBem-vindo, %player_name%!"
      text-size: 1.5
      shadow: true
      background-color: "#000000"
  transform:
    position: {x: 0, y: 0.2, z: 0}
    size: {x: 0.05, y: 0.05, z: 0.05}
```

### CURSOR

O cursor controlado pelo rato do jogador. Cada menu deve ter exatamente um widget cursor.

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
    fallback:
      type: text
      value: ">"
  transform:
    position: {x: 0, y: 0, z: 1.0}
    size: {x: 0.01, y: 0.01, z: 0.01}
```

## Estados Visuais

Widgets suportam múltiplos estados visuais:

| Estado | Descrição |
|--------|-----------|
| `normal` | Estado padrão |
| `hover` | Quando cursor está sobre o widget |
| `pressed` | Quando widget está a ser clicado |
| `disabled` | Quando widget está desativado |
| `fallback` | Usado quando imagem não carrega |

## Propriedades de Transform

Todos os widgets suportam propriedades de transform:

```yaml
transform:
  position:
    x: 0.0    # Posição horizontal
    y: 0.0    # Posição vertical
    z: 0.0    # Profundidade (maior = mais à frente)
  size:
    x: 0.1    # Largura
    y: 0.1    # Altura
    z: 0.1    # Profundidade
  rotation:
    pitch: 0  # Rotação X
    yaw: 0    # Rotação Y
    roll: 0   # Rotação Z
```

## Configuração de Colisão

Configure áreas clicáveis para widgets:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.15, y: 0.08, z: 0.02}
  offset: {x: 0, y: 0, z: 0}
```

## Propriedades de Texto

Para widgets TEXT, propriedades adicionais:

```yaml
visual:
  normal:
    type: text
    value: "&b&lO Meu Texto"
    text-size: 1.0           # Fator de escala do texto
    shadow: true             # Ativar sombra do texto
    background-color: "#000000"  # Cor de fundo (hex)
```

## Overrides de Estado

Cada estado visual pode ter os seus próprios overrides de transform e colisão:

```yaml
visual:
  normal:
    type: image
    value: template/button.png
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.12, y: 0.12, z: 0.12}  # Maior no hover
      collision:
        size: {x: 0.18, y: 0.1, z: 0.02}   # Área de colisão maior
```

## Boas Práticas

1. **Use fallbacks** - Sempre forneça um texto de fallback para widgets de imagem
2. **Tamanhos de colisão** - Faça áreas de colisão ligeiramente maiores que o visual para facilitar cliques
3. **Profundidade do cursor** - Mantenha o cursor no valor z mais alto para garantir que fique sempre visível
4. **Nomes de estado** - Use nomes de estado descritivos para estados personalizados
