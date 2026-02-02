# Повний посібник з анімацій - CraftMenu

Цей документ представляє всі типи анімацій, доступні в CraftMenu, з практичними прикладами використання YAML.

---

## Зміст

1. [Базові анімації](#базові-анімації)
2. [Анімації руху](#анімації-руху)
3. [Розширені анімації](#розширені-анімації)
4. [Комбінування анімацій](#комбінування-анімацій)
5. [Загальні властивості](#загальні-властивості)

---

## Базові анімації

### SCALE - Зміна розміру

Змінює розмір віджета по осях X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% від початкового розміру
    easing_style: out
```

**Властивості**:
- `scaleX`: Масштаб по осі X (за замовчуванням: intensity)
- `scaleY`: Масштаб по осі Y (за замовчуванням: intensity)
- `scaleZ`: Масштаб по осі Z (за замовчуванням: intensity)

---

### ROTATE - Обертання

Обертає віджет навколо осей X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Повне обертання по осі Y
    easing_style: in_out
```

**Властивості**:
- `rotationX`: Обертання по осі X в градусах
- `rotationY`: Обертання по осі Y в градусах
- `rotationZ`: Обертання по осі Z в градусах

---

### TRANSLATE - Переміщення

Переміщує віджет на нову позицію.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Зсув в блоках
    easing_style: out
```

**Властивості**:
- `offsetX`: Зсув по осі X
- `offsetY`: Зсув по осі Y
- `offsetZ`: Зсув по осі Z

---

### FADE - Поява/зникнення

Керує прозорістю/видимістю віджета.

```yaml
# Зникнення (fade out)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = зникнення, false = поява
    easing_style: in

# Поява (fade in)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Властивості**:
- `fadeOut`: true для зникнення, false для появи

---

## Анімації руху

### PULSE - Пульсація

Ефект дихання/серцебиття з ритмічним масштабуванням.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Безперервна анімація
    easing_style: in_out
```

---

### BOUNCE - Підстрибування

Імітує фізику підстрибування м'яча вертикально.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Висота стрибка
    easing_style: out
```

---

### SWING - Хитання маятника

Рух маятника/гойдалки.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Амплітуда хитання
    loop: true
    easing_style: in_out
```

---

### FLOAT - Плавання

Плавний вертикальний рух вгору та вниз.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Висота плавання
    loop: true
    easing_style: in_out
```

---

### SHAKE - Тремтіння

Швидка та випадкова вібрація.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Інтенсивність вібрації
    easing_style: linear
```

---

### JIGGLE - Еластичне тремтіння

М'якше та більш контрольоване тремтіння з еластичним ефектом.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Амплітуда тремтіння
    easing_style: out
```

---

## Розширені анімації

### SLIDE - Ковзання з-за меж екрану

Віджет з'являється, ковзаючи з-за меж екрану.

```yaml
# Ковзання зліва
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Відстань в блоках
    easing_style: out

# Ковзання зверху
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Властивості**:
- `direction`: Напрямок входу (left, right, top, bottom, front, back)
- `distance`: Початкова відстань в блоках (за замовчуванням: intensity * 2.0)

**Типове використання**: Ідеально для анімацій `on_menu_open` з пріоритетом CRITICAL.

---

### ZOOM_IN - Вхід з перевищенням

Масштаб від 0 до 1 з "overshoot" (перевищує та повертається).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Максимальний масштаб перед поверненням до 1.0
    easing_style: out
```

**Властивості**:
- `overshoot`: Максимальний масштаб перед стабілізацією на 1.0 (за замовчуванням: 1.2)

**Типове використання**: Драматична анімація входу в `on_menu_open`.

---

### SQUEEZE - Ефект стиснення

Стискає одну вісь, розширюючи інші.

```yaml
# Горизонтальне стиснення
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Інтенсивність стиснення
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Вертикальне стиснення
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Властивості**:
- `axis`: Вісь для стиснення (x, y, z)
- `intensity`: Інтенсивність стиснення

---

### FLIP - Поворот на 180°

Поворот на 180 градусів по певній осі.

```yaml
# Вертикальний переворот (як перегортання картки)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Горизонтальний переворот
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Властивості**:
- `axis`: Вісь обертання (x, y, z)

**Типове використання**: Переходи станів, розкриття альтернативного вмісту.

---

### WOBBLE - Желеподібне хитання

Хитання зі сторони в сторону в стилі "желе".

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Інтенсивність хитання
    loop: true
    easing_style: in_out
```

**Типове використання**: Анімації привернення уваги, зворотний зв'язок при наведенні.

---

### ORBIT - Орбітальний рух

Віджет рухається по колу навколо центральної точки.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Радіус орбіти в блоках
    speed: 1.0  # Множник швидкості
    loop: true
    easing_style: linear
```

**Властивості**:
- `radius`: Радіус орбіти (за замовчуванням: intensity * 0.5)
- `speed`: Швидкість обертання (за замовчуванням: 1.0)

**Типове використання**: Декоративні фонові анімації.

---

### SPIRAL - Спіральний рух

Поєднує обертання з круговим рухом.

```yaml
# Спіраль за годинниковою стрілкою
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Радіус спіралі
    clockwise: true  # Напрямок за годинниковою стрілкою
    loop: true
    easing_style: linear

# Спіраль проти годинникової стрілки
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Властивості**:
- `radius`: Радіус спіралі (за замовчуванням: intensity * 0.3)
- `clockwise`: Напрямок руху (true/false)

---

### WAVE - Хвильовий рух

Плавна хвиля з використанням функції синуса.

```yaml
# Горизонтальна хвиля
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Амплітуда хвилі
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Вертикальна хвиля
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Властивості**:
- `axis`: Напрямок хвилі (horizontal, vertical)

---

### GLOW - Пульсуюче сяйво

Поєднує легку пульсацію зі змінами прозорості.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Інтенсивність сяйва
    loop: true
    easing_style: in_out
```

**Типове використання**: Виділення важливих елементів, індикатори уваги.

---

## Комбінування анімацій

Ви можете комбінувати кілька анімацій послідовно або одночасно.

### Приклад 1: Драматичний вхід

```yaml
on_menu_open:
  # 1. Ковзання зліва
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - блокує наступні дії
      easing_style: out

  # 2. Збільшення з перевищенням (виконується ПІСЛЯ slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Безперервне плавання (починається після zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Приклад 2: Складна інтерактивна кнопка

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Звук наведення
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Зміна візуалу
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Легка пульсація
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Відновлення візуалу
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Звук кліку
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Послідовність анімацій
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

      # Команда (виконується ПІСЛЯ анімацій)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Приклад 3: Декоративний віджет з кількома анімаціями

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Кругова орбіта
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Обертання під час орбіти
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Пульсуюче сяйво
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Загальні властивості

Усі анімації підтримують ці властивості:

### type
Тип дії (завжди `animation`).

### effect
Назва анімації (scale, rotate, pulse, тощо).

### duration
Тривалість у мілісекундах.

```yaml
duration: 1000  # 1 секунда
```

### intensity
Загальна інтенсивність анімації (значення залежить від типу).

```yaml
intensity: 0.5  # Половина стандартної інтенсивності
```

### loop
Чи повинна анімація повторюватися нескінченно.

```yaml
loop: true  # Безперервна анімація
loop: false # Одноразова анімація (за замовчуванням)
```

### delay
Затримка перед початком анімації (у мс).

```yaml
delay: 500  # Почекати 500мс перед стартом
```

### easing_style
Тип згладжування для плавності анімації.

```yaml
easing_style: linear      # Постійна швидкість
easing_style: in          # Прискорення на початку
easing_style: out         # Сповільнення в кінці
easing_style: in_out      # Прискорення та сповільнення
```

### priority
Пріоритет анімації (впливає на переривання).

```yaml
priority: true   # CRITICAL - ніколи не переривається, блокує наступні дії
priority: false  # INTERRUPTIBLE - може бути перервана (за замовчуванням)
```

**Примітка**: Безперервні анімації (`loop: true`) завжди мають пріоритет BACKGROUND.

---

## Посібник з використання за контекстом

### Анімації для on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Ковзаючий вхід
  - effect: zoom_in     # Вхід з перевищенням
  - effect: fade        # М'яка поява
```

### Анімації для on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Збільшення розміру
  - effect: pulse       # М'яка пульсація
  - effect: glow        # Сяйво виділення
  - effect: wobble      # Хитання для привернення уваги
```

### Анімації для on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Зворотний зв'язок натискання
  - effect: bounce      # Стрибок підтвердження
  - effect: shake       # Тремтіння удару
  - effect: flip        # Переворот/розкриття
```

### Безперервні анімації (Декоративні)

```yaml
continuous-animations:
  - effect: float       # М'яке плавання
  - effect: rotate      # Постійне обертання
  - effect: orbit       # Орбітальний рух
  - effect: spiral      # Декоративна спіраль
  - effect: wave        # Хвильовий рух
  - effect: glow        # Пульсуюче сяйво
```

---

## Швидка довідкова таблиця

| Анімація | Тип | Основне використання | Цикл? | Стандартний пріоритет |
|----------|-----|---------------------|-------|----------------------|
| SCALE | Трансформація | Наведення, Клік | Ні | INTERRUPTIBLE |
| ROTATE | Трансформація | Декоративний | Так | BACKGROUND |
| TRANSLATE | Трансформація | Рух | Ні | CRITICAL |
| PULSE | Рух | Безперервний | Так | BACKGROUND |
| BOUNCE | Рух | Клік | Ні | INTERRUPTIBLE |
| SWING | Рух | Наведення | Так | INTERRUPTIBLE |
| FLOAT | Рух | Безперервний | Так | BACKGROUND |
| SHAKE | Рух | Клік | Ні | INTERRUPTIBLE |
| FADE | Візуальний | Вхід/Вихід | Ні | CRITICAL |
| SLIDE | Розширений | Вхід | Ні | CRITICAL |
| ZOOM_IN | Розширений | Вхід | Ні | CRITICAL |
| SQUEEZE | Розширений | Клік | Ні/Так | INTERRUPTIBLE |
| FLIP | Розширений | Стан | Ні | CRITICAL |
| WOBBLE | Розширений | Наведення | Так | BACKGROUND |
| ORBIT | Розширений | Декоративний | Так | BACKGROUND |
| SPIRAL | Розширений | Декоративний | Так | BACKGROUND |
| WAVE | Розширений | Декоративний | Так | BACKGROUND |
| JIGGLE | Розширений | Наведення | Ні | INTERRUPTIBLE |
| GLOW | Розширений | Виділення | Так | BACKGROUND |

---

**Останнє оновлення**: 2025-10-15
**Версія плагіна**: 2.0
**Автор**: Zodunix
