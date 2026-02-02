# Sistema de Animações

CraftMenu inclui um sistema de animações poderoso com 19 tipos de animação e 6 funções de easing.

## Tipos de Animação

### Animações de Transformação

| Tipo | Descrição |
|------|-----------|
| `translate` | Move o widget para uma nova posição |
| `rotate` | Roda o widget em torno dos eixos |
| `scale` | Altera o tamanho do widget |

### Animações de Movimento

| Tipo | Descrição |
|------|-----------|
| `bounce` | Efeito de salto |
| `float` | Flutuação suave para cima e para baixo |
| `swing` | Movimento de balanço pendular |
| `shake` | Efeito de vibração |
| `jiggle` | Tremor suave tipo mola |

### Animações Avançadas

| Tipo | Descrição |
|------|-----------|
| `pulse` | Efeito de pulsação rítmica |
| `fade` | Fade in/out |
| `flip` | Rotação de 180 graus |
| `wobble` | Balanço gelatinoso |
| `squeeze` | Efeito de compressão |
| `slide` | Desliza de uma direção |
| `spiral` | Movimento em espiral |
| `orbit` | Movimento orbital circular |
| `wave` | Movimento ondulante |
| `glow` | Efeito de brilho pulsante |
| `zoom_in` | Escala de 0 a 1 com overshoot |

## Funções de Easing

| Easing | Descrição |
|--------|-----------|
| `linear` | Velocidade constante |
| `ease_in` | Começa devagar, acelera |
| `ease_out` | Começa rápido, desacelera |
| `ease_in_out` | Devagar no início e fim |
| `bounce` | Efeito de ressalto |
| `elastic` | Efeito elástico |

## Uso Básico

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      easing_style: ease_out
```

## Parâmetros de Animação

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `effect` | String | Tipo de animação |
| `duration` | Integer | Duração em milissegundos |
| `intensity` | Float | Intensidade do efeito (0.0-1.0) |
| `easing_style` | String | Função de easing |
| `loop` | Boolean | Repetir infinitamente |
| `delay` | Integer | Atraso antes de começar (ms) |
| `priority` | Boolean | true = CRITICAL (bloqueia), false = INTERRUPTIBLE |

## Parâmetros Específicos

### Scale
```yaml
- action: animation
  effect: scale
  scale: {x: 1.5, y: 1.5, z: 1.5}
```

### Rotate
```yaml
- action: animation
  effect: rotate
  rotate: {x: 0, y: 360, z: 0}  # Graus
```

### Translate
```yaml
- action: animation
  effect: translate
  translate: {x: 0.5, y: 0.2, z: 0}  # Blocos
```

### Slide
```yaml
- action: animation
  effect: slide
  direction: left  # left, right, top, bottom, front, back
  distance: 2.0    # Blocos
```

### Flip
```yaml
- action: animation
  effect: flip
  axis: y  # x, y, z
```

## Animações Contínuas

Para animações de fundo que correm continuamente:

```yaml
meu_widget:
  continuous-animations:
    - effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: ease_in_out

    - effect: glow
      duration: 1500
      intensity: 0.3
      loop: true
```

## Prioridades de Animação

| Prioridade | Descrição |
|------------|-----------|
| `BACKGROUND` | Nunca bloqueia interações (animações contínuas) |
| `INTERRUPTIBLE` | Pode ser interrompida por nova interação |
| `CRITICAL` | Deve completar, bloqueia novas ações |

Use `priority: true` para animações críticas:

```yaml
- action: animation
  effect: slide
  direction: left
  duration: 800
  priority: true  # CRITICAL
```

## Exemplos Práticos

### Efeito de Hover

```yaml
on_cursor_hover:
  - action: animation
    effect: scale
    duration: 150
    scale: {x: 1.1, y: 1.1, z: 1.1}
    easing_style: ease_out
```

### Efeito de Clique

```yaml
on_cursor_click:
  - action: animation
    effect: squeeze
    duration: 100
    intensity: 0.2
  - action: animation
    effect: bounce
    duration: 300
    intensity: 0.5
```

### Entrada de Menu

```yaml
on_menu_open:
  - action: animation
    effect: slide
    direction: left
    duration: 500
    priority: true
  - action: animation
    effect: zoom_in
    duration: 300
    overshoot: 1.2
```

## Boas Práticas

1. **Mantenha durações curtas** - 100-300ms para feedback, 500-1000ms para transições
2. **Use easing apropriado** - `ease_out` para hover, `ease_in_out` para movimentos
3. **Combine animações** - Use múltiplas animações para efeitos ricos
4. **Prioridades** - Use CRITICAL para animações de entrada/saída
