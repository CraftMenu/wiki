# Guia Completo de Animações - CraftMenu

Este documento apresenta todos os tipos de animações disponíveis no CraftMenu, com exemplos práticos de uso em YAML.

---

## 📋 Índice

1. [Animações Básicas](#animações-básicas)
2. [Animações de Movimento](#animações-de-movimento)
3. [Animações Avançadas](#animações-avançadas)
4. [Combinando Animações](#combinando-animações)
5. [Propriedades Comuns](#propriedades-comuns)

---

## 🎬 Animações Básicas

### SCALE - Mudança de escala

Altera o tamanho do widget nos eixos X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% do tamanho original
    easing_style: out
```

**Properties**:
- `scaleX`: Escala no eixo X (padrão: intensity)
- `scaleY`: Escala no eixo Y (padrão: intensity)
- `scaleZ`: Escala no eixo Z (padrão: intensity)

---

### ROTATE - Rotação

Rotaciona o widget em torno dos eixos X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Rotação completa no eixo Y
    easing_style: in_out
```

**Properties**:
- `rotationX`: Rotação no eixo X em graus
- `rotationY`: Rotação no eixo Y em graus
- `rotationZ`: Rotação no eixo Z em graus

---

### TRANSLATE - Translação

Move o widget para uma nova posição.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Deslocamento em blocos
    easing_style: out
```

**Properties**:
- `offsetX`: Deslocamento no eixo X
- `offsetY`: Deslocamento no eixo Y
- `offsetZ`: Deslocamento no eixo Z

---

### FADE - Fade in/out

Controla a opacidade/visibilidade do widget.

```yaml
# Fade out (desaparecer)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = fade out, false = fade in
    easing_style: in

# Fade in (aparecer)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Properties**:
- `fadeOut`: true para desaparecer, false para aparecer

---

## 🏃 Animações de Movimento

### PULSE - Pulsação

Efeito de respiração/batimento cardíaco com escala rítmica.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Animação contínua
    easing_style: in_out
```

---

### BOUNCE - Quicar

Simula física de bola quicando verticalmente.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Altura do pulo
    easing_style: out
```

---

### SWING - Balanço pendular

Movimento de pêndulo/balanço.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Amplitude do balanço
    loop: true
    easing_style: in_out
```

---

### FLOAT - Flutuação

Movimento suave vertical para cima e para baixo.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Altura da flutuação
    loop: true
    easing_style: in_out
```

---

### SHAKE - Tremor

Vibração rápida e aleatória.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Intensidade da vibração
    easing_style: linear
```

---

### JIGGLE - Tremor elástico

Shake mais suave e controlado com efeito elástico.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Amplitude do tremor
    easing_style: out
```

---

## 🌀 Animações Avançadas

### SLIDE - Deslizar de fora da tela

Widget entra deslizando de fora da tela.

```yaml
# Deslizar da esquerda
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Distância em blocos
    easing_style: out

# Deslizar de cima
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Properties**:
- `direction`: Direção da entrada (left, right, top, bottom, front, back)
- `distance`: Distância inicial em blocos (padrão: intensity * 2.0)

**Uso Comum**: Ideal para animações `on_menu_open` com prioridade CRITICAL.

---

### ZOOM_IN - Entrada com overshoot

Escala de 0 a 1 com "overshoot" (ultrapassa e volta).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Escala máxima antes de voltar a 1.0
    easing_style: out
```

**Properties**:
- `overshoot`: Escala máxima antes de estabilizar em 1.0 (padrão: 1.2)

**Uso Comum**: Animação de entrada dramática em `on_menu_open`.

---

### SQUEEZE - Efeito de compressão

Achata um eixo enquanto expande os outros.

```yaml
# Squeeze horizontal
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Intensidade da compressão
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Squeeze vertical
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Properties**:
- `axis`: Eixo a ser comprimido (x, y, z)
- `intensity`: Intensidade da compressão

---

### FLIP - Girar 180°

Rotação de 180 graus em eixo específico.

```yaml
# Flip vertical (como carta virando)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Flip horizontal
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Properties**:
- `axis`: Eixo de rotação (x, y, z)

**Uso Comum**: Transições de estado, revelar conteúdo alternativo.

---

### WOBBLE - Balanço gelatinoso

Balanço lateral estilo "jelly".

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Intensidade do balanço
    loop: true
    easing_style: in_out
```

**Uso Comum**: Animações de atenção, feedback de hover.

---

### ORBIT - Movimento orbital

Widget orbita em círculo ao redor de um ponto central.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Raio da órbita em blocos
    speed: 1.0  # Multiplicador de velocidade
    loop: true
    easing_style: linear
```

**Properties**:
- `radius`: Raio da órbita (padrão: intensity * 0.5)
- `speed`: Velocidade da rotação (padrão: 1.0)

**Uso Comum**: Animações de fundo decorativas.

---

### SPIRAL - Movimento espiral

Combina rotação com movimento circular.

```yaml
# Espiral horária
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Raio da espiral
    clockwise: true  # Sentido horário
    loop: true
    easing_style: linear

# Espiral anti-horária
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Properties**:
- `radius`: Raio da espiral (padrão: intensity * 0.3)
- `clockwise`: Sentido do movimento (true/false)

---

### WAVE - Movimento ondulatório

Ondulação suave usando função seno.

```yaml
# Wave horizontal
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Amplitude da onda
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Wave vertical
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Properties**:
- `axis`: Direção da onda (horizontal, vertical)

---

### GLOW - Brilho pulsante

Combina pulse sutil com mudanças de opacidade.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Intensidade do brilho
    loop: true
    easing_style: in_out
```

**Uso Comum**: Destacar elementos importantes, indicadores de atenção.

---

## 🎨 Combinando Animações

Você pode combinar múltiplas animações sequencialmente ou simultaneamente.

### Exemplo 1: Entrada Dramática

```yaml
on_menu_open:
  # 1. Slide da esquerda
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - bloqueia ações seguintes
      easing_style: out

  # 2. Zoom com overshoot (executa APÓS slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Float contínuo (começa após zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Exemplo 2: Botão Interativo Complexo

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Som de hover
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Visual change
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Pulse sutil
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Restaurar visual
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Som de click
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Sequência de animações
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # Comando (executa APÓS animações)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Exemplo 3: Widget Decorativo com Múltiplas Animações

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Orbit circular
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Rotate enquanto orbita
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Glow pulsante
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## ⚙️ Propriedades Comuns

Todas as animações suportam estas propriedades:

### type
Tipo de ação (sempre `animation`).

### effect
Nome da animação (scale, rotate, pulse, etc.).

### duration
Duração em milissegundos.

```yaml
duration: 1000  # 1 segundo
```

### intensity
Intensidade geral da animação (significado varia por tipo).

```yaml
intensity: 0.5  # Metade da intensidade padrão
```

### loop
Se a animação deve repetir infinitamente.

```yaml
loop: true  # Animação contínua
loop: false # Animação única (padrão)
```

### delay
Atraso antes da animação começar (em ms).

```yaml
delay: 500  # Espera 500ms antes de começar
```

### easing_style
Tipo de easing para suavização da animação.

```yaml
easing_style: linear      # Velocidade constante
easing_style: in          # Acelera no início
easing_style: out         # Desacelera no final
easing_style: in_out      # Acelera e desacelera
```

### priority
Prioridade da animação (afeta interrupção).

```yaml
priority: true   # CRITICAL - nunca interrompida, bloqueia ações seguintes
priority: false  # INTERRUPTIBLE - pode ser interrompida (padrão)
```

**Nota**: Animações contínuas (`loop: true`) são sempre BACKGROUND priority.

---

## 🎯 Guia de Uso por Contexto

### Animações para on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Entrada deslizante
  - effect: zoom_in     # Entrada com overshoot
  - effect: fade        # Fade in suave
```

### Animações para on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Aumentar tamanho
  - effect: pulse       # Pulsar suavemente
  - effect: glow        # Brilho de destaque
  - effect: wobble      # Balanço de atenção
```

### Animações para on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Feedback de pressão
  - effect: bounce      # Pulo de confirmação
  - effect: shake       # Tremor de impacto
  - effect: flip        # Virar/revelar
```

### Animações Contínuas (Decorativas)

```yaml
continuous-animations:
  - effect: float       # Flutuação suave
  - effect: rotate      # Rotação constante
  - effect: orbit       # Movimento orbital
  - effect: spiral      # Espiral decorativa
  - effect: wave        # Ondulação
  - effect: glow        # Brilho pulsante
```

---

## 📊 Tabela de Referência Rápida

| Animação | Tipo | Uso Principal | Loop? | Priority Padrão |
|----------|------|---------------|-------|-----------------|
| SCALE | Transformação | Hover, Click | Não | INTERRUPTIBLE |
| ROTATE | Transformação | Decorativo | Sim | BACKGROUND |
| TRANSLATE | Transformação | Movimento | Não | CRITICAL |
| PULSE | Movimento | Contínuo | Sim | BACKGROUND |
| BOUNCE | Movimento | Click | Não | INTERRUPTIBLE |
| SWING | Movimento | Hover | Sim | INTERRUPTIBLE |
| FLOAT | Movimento | Contínuo | Sim | BACKGROUND |
| SHAKE | Movimento | Click | Não | INTERRUPTIBLE |
| FADE | Visual | Entrada/Saída | Não | CRITICAL |
| SLIDE | Avançado | Entrada | Não | CRITICAL |
| ZOOM_IN | Avançado | Entrada | Não | CRITICAL |
| SQUEEZE | Avançado | Click | Não/Sim | INTERRUPTIBLE |
| FLIP | Avançado | Estado | Não | CRITICAL |
| WOBBLE | Avançado | Hover | Sim | BACKGROUND |
| ORBIT | Avançado | Decorativo | Sim | BACKGROUND |
| SPIRAL | Avançado | Decorativo | Sim | BACKGROUND |
| WAVE | Avançado | Decorativo | Sim | BACKGROUND |
| JIGGLE | Avançado | Hover | Não | INTERRUPTIBLE |
| GLOW | Avançado | Destaque | Sim | BACKGROUND |

---

**Última Atualização**: 2025-10-15
**Versão do Plugin**: 2.0
**Autor**: Zodunix
