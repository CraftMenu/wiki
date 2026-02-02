# Sistema de Animações

CraftMenu fornece um poderoso sistema de animações com 19 tipos de animação e 6 funções de easing.

## Tipos de Animação

### Animações de Movimento

| Tipo | Descrição |
|------|-----------|
| `translate` | Move a posição do widget |
| `bounce` | Efeito de quique |
| `float` | Flutuação suave para cima/baixo |
| `orbit` | Movimento orbital circular |

### Animações de Rotação

| Tipo | Descrição |
|------|-----------|
| `rotate` | Rotação contínua |
| `swing` | Balanço de pêndulo |
| `flip` | Virada de 180 graus |
| `wobble` | Rotação trêmula |
| `spiral` | Movimento espiral |

### Animações de Escala

| Tipo | Descrição |
|------|-----------|
| `scale` | Muda o tamanho |
| `pulse` | Pulsação rítmica |
| `squeeze` | Compressão/estiramento |
| `zoom_in` | Efeito de zoom |

### Animações Visuais

| Tipo | Descrição |
|------|-----------|
| `fade` | Fade de opacidade |
| `glow` | Efeito de brilho |
| `shake` | Movimento de tremor |
| `jiggle` | Movimento de agitação |
| `wave` | Movimento de onda |

## Uso Básico de Animação

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Propriedades de Animação

### Propriedades Comuns

```yaml
- action: animation
  effect: pulse           # Tipo de animação (obrigatório)
  duration: 1000          # Duração em milissegundos
  easing_style: ease_out  # Função de easing
  intensity: 1.0          # Intensidade do efeito
  priority: false         # Bloquear outras ações?
```

### Propriedades Específicas por Efeito

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Graus
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = fade out, false = fade in
```

## Funções de Easing

| Easing | Descrição |
|--------|-----------|
| `linear` | Velocidade constante |
| `ease_in` | Começa devagar |
| `ease_out` | Termina devagar |
| `ease_in_out` | Começo e fim devagar |
| `bounce` | Efeito de quique |
| `elastic` | Efeito elástico |

### Exemplos de Easing

```yaml
# Efeito suave de hover
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Feedback de clique com quique
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Prioridade de Animação

Use `priority: true` para garantir que uma animação complete antes de outras ações:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Bloqueia próxima ação

    - action: command
      command: "[CLOSE]"      # Aguarda a animação
```

## Parando Animações

```yaml
- action: stop_animation
  animation_type: rotate      # Para tipo específico
  # ou
  type: all                   # Para todas as animações
```

## Animações Contínuas

Defina animações que executam continuamente na configuração do widget:

```yaml
widgets:
  icone_girando:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## Boas Práticas

1. Mantenha durações abaixo de 500ms para feedback responsivo
2. Use `ease_out` para efeitos de hover
3. Use `bounce` para feedback de clique
4. Evite múltiplas animações simultâneas no mesmo widget
5. Teste animações em diferentes hardwares
