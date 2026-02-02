# Полное руководство по анимациям - CraftMenu

Этот документ представляет все типы анимаций, доступных в CraftMenu, с практическими примерами использования в YAML.

---

## Содержание

1. [Базовые анимации](#базовые-анимации)
2. [Анимации движения](#анимации-движения)
3. [Продвинутые анимации](#продвинутые-анимации)
4. [Комбинирование анимаций](#комбинирование-анимаций)
5. [Общие свойства](#общие-свойства)

---

## Базовые анимации

### SCALE - Изменение размера

Изменяет размер виджета по осям X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% от исходного размера
    easing_style: out
```

**Свойства**:
- `scaleX`: Масштаб по оси X (по умолчанию: intensity)
- `scaleY`: Масштаб по оси Y (по умолчанию: intensity)
- `scaleZ`: Масштаб по оси Z (по умолчанию: intensity)

---

### ROTATE - Вращение

Вращает виджет вокруг осей X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Полный оборот по оси Y
    easing_style: in_out
```

**Свойства**:
- `rotationX`: Вращение по оси X в градусах
- `rotationY`: Вращение по оси Y в градусах
- `rotationZ`: Вращение по оси Z в градусах

---

### TRANSLATE - Перемещение

Перемещает виджет в новую позицию.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Смещение в блоках
    easing_style: out
```

**Свойства**:
- `offsetX`: Смещение по оси X
- `offsetY`: Смещение по оси Y
- `offsetZ`: Смещение по оси Z

---

### FADE - Появление/исчезновение

Управляет непрозрачностью/видимостью виджета.

```yaml
# Исчезновение
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = исчезновение, false = появление
    easing_style: in

# Появление
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Свойства**:
- `fadeOut`: true для исчезновения, false для появления

---

## Анимации движения

### PULSE - Пульсация

Эффект дыхания/сердцебиения с ритмичным масштабированием.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Непрерывная анимация
    easing_style: in_out
```

---

### BOUNCE - Отскок

Симулирует физику отскока мяча по вертикали.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Высота прыжка
    easing_style: out
```

---

### SWING - Маятниковое качание

Движение маятника/качелей.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Амплитуда качания
    loop: true
    easing_style: in_out
```

---

### FLOAT - Парение

Плавное вертикальное движение вверх и вниз.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Высота парения
    loop: true
    easing_style: in_out
```

---

### SHAKE - Тряска

Быстрая и случайная вибрация.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Интенсивность вибрации
    easing_style: linear
```

---

### JIGGLE - Упругая тряска

Более мягкая и контролируемая тряска с упругим эффектом.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Амплитуда тряски
    easing_style: out
```

---

## Продвинутые анимации

### SLIDE - Появление со стороны

Виджет появляется, выезжая из-за пределов экрана.

```yaml
# Появление слева
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Расстояние в блоках
    easing_style: out

# Появление сверху
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Свойства**:
- `direction`: Направление появления (left, right, top, bottom, front, back)
- `distance`: Начальное расстояние в блоках (по умолчанию: intensity * 2.0)

**Частое использование**: Идеально для анимаций `on_menu_open` с приоритетом CRITICAL.

---

### ZOOM_IN - Появление с перелётом

Масштабирование от 0 до 1 с "перелётом" (перескакивает и возвращается).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Максимальный масштаб перед возвратом к 1.0
    easing_style: out
```

**Свойства**:
- `overshoot`: Максимальный масштаб перед стабилизацией на 1.0 (по умолчанию: 1.2)

**Частое использование**: Драматичная анимация появления в `on_menu_open`.

---

### SQUEEZE - Эффект сжатия

Сжимает одну ось, расширяя другие.

```yaml
# Горизонтальное сжатие
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Интенсивность сжатия
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Вертикальное сжатие
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Свойства**:
- `axis`: Ось для сжатия (x, y, z)
- `intensity`: Интенсивность сжатия

---

### FLIP - Поворот на 180°

180-градусный поворот по определённой оси.

```yaml
# Вертикальный переворот (как переворот карты)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Горизонтальный переворот
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Свойства**:
- `axis`: Ось вращения (x, y, z)

**Частое использование**: Переходы состояний, показ альтернативного контента.

---

### WOBBLE - Желейное качание

Качание из стороны в сторону в стиле "желе".

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Интенсивность качания
    loop: true
    easing_style: in_out
```

**Частое использование**: Анимации привлечения внимания, обратная связь при наведении.

---

### ORBIT - Орбитальное движение

Виджет движется по кругу вокруг центральной точки.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Радиус орбиты в блоках
    speed: 1.0  # Множитель скорости
    loop: true
    easing_style: linear
```

**Свойства**:
- `radius`: Радиус орбиты (по умолчанию: intensity * 0.5)
- `speed`: Скорость вращения (по умолчанию: 1.0)

**Частое использование**: Декоративные фоновые анимации.

---

### SPIRAL - Спиральное движение

Сочетает вращение с круговым движением.

```yaml
# Спираль по часовой стрелке
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Радиус спирали
    clockwise: true  # По часовой стрелке
    loop: true
    easing_style: linear

# Спираль против часовой стрелки
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Свойства**:
- `radius`: Радиус спирали (по умолчанию: intensity * 0.3)
- `clockwise`: Направление движения (true/false)

---

### WAVE - Волновое движение

Плавная волна с использованием функции синуса.

```yaml
# Горизонтальная волна
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Амплитуда волны
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Вертикальная волна
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Свойства**:
- `axis`: Направление волны (horizontal, vertical)

---

### GLOW - Пульсирующее свечение

Сочетает лёгкую пульсацию с изменениями прозрачности.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Интенсивность свечения
    loop: true
    easing_style: in_out
```

**Частое использование**: Подсветка важных элементов, индикаторы внимания.

---

## Комбинирование анимаций

Вы можете комбинировать несколько анимаций последовательно или одновременно.

### Пример 1: Драматичное появление

```yaml
on_menu_open:
  # 1. Выезд слева
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - блокирует последующие действия
      easing_style: out

  # 2. Зум с перелётом (выполняется ПОСЛЕ slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Непрерывное парение (начинается после zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Пример 2: Сложная интерактивная кнопка

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Звук наведения
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Изменение визуала
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Лёгкая пульсация
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Восстановление визуала
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Звук клика
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Последовательность анимаций
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

      # Команда (выполняется ПОСЛЕ анимаций)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Пример 3: Декоративный виджет с несколькими анимациями

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Круговая орбита
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Вращение во время орбиты
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Пульсирующее свечение
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Общие свойства

Все анимации поддерживают эти свойства:

### type
Тип действия (всегда `animation`).

### effect
Название анимации (scale, rotate, pulse, и т.д.).

### duration
Длительность в миллисекундах.

```yaml
duration: 1000  # 1 секунда
```

### intensity
Общая интенсивность анимации (значение зависит от типа).

```yaml
intensity: 0.5  # Половина стандартной интенсивности
```

### loop
Должна ли анимация повторяться бесконечно.

```yaml
loop: true  # Непрерывная анимация
loop: false # Одиночная анимация (по умолчанию)
```

### delay
Задержка перед началом анимации (в мс).

```yaml
delay: 500  # Подождать 500мс перед началом
```

### easing_style
Тип сглаживания для плавности анимации.

```yaml
easing_style: linear      # Постоянная скорость
easing_style: in          # Ускорение в начале
easing_style: out         # Замедление в конце
easing_style: in_out      # Ускорение и замедление
```

### priority
Приоритет анимации (влияет на прерывание).

```yaml
priority: true   # CRITICAL - никогда не прерывается, блокирует последующие действия
priority: false  # INTERRUPTIBLE - может быть прервана (по умолчанию)
```

**Примечание**: Непрерывные анимации (`loop: true`) всегда имеют приоритет BACKGROUND.

---

## Руководство по использованию по контексту

### Анимации для on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Выезжающее появление
  - effect: zoom_in     # Появление с перелётом
  - effect: fade        # Мягкое появление
```

### Анимации для on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Увеличение размера
  - effect: pulse       # Мягкая пульсация
  - effect: glow        # Подсветка свечением
  - effect: wobble      # Качание для привлечения внимания
```

### Анимации для on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Обратная связь нажатия
  - effect: bounce      # Подтверждающий прыжок
  - effect: shake       # Тряска от удара
  - effect: flip        # Переворот/раскрытие
```

### Непрерывные анимации (Декоративные)

```yaml
continuous-animations:
  - effect: float       # Мягкое парение
  - effect: rotate      # Постоянное вращение
  - effect: orbit       # Орбитальное движение
  - effect: spiral      # Декоративная спираль
  - effect: wave        # Волновое движение
  - effect: glow        # Пульсирующее свечение
```

---

## Краткая справочная таблица

| Анимация | Тип | Основное использование | Цикл? | Приоритет по умолчанию |
|----------|-----|------------------------|-------|------------------------|
| SCALE | Трансформация | Наведение, Клик | Нет | INTERRUPTIBLE |
| ROTATE | Трансформация | Декоративно | Да | BACKGROUND |
| TRANSLATE | Трансформация | Движение | Нет | CRITICAL |
| PULSE | Движение | Непрерывно | Да | BACKGROUND |
| BOUNCE | Движение | Клик | Нет | INTERRUPTIBLE |
| SWING | Движение | Наведение | Да | INTERRUPTIBLE |
| FLOAT | Движение | Непрерывно | Да | BACKGROUND |
| SHAKE | Движение | Клик | Нет | INTERRUPTIBLE |
| FADE | Визуальная | Появление/Уход | Нет | CRITICAL |
| SLIDE | Продвинутая | Появление | Нет | CRITICAL |
| ZOOM_IN | Продвинутая | Появление | Нет | CRITICAL |
| SQUEEZE | Продвинутая | Клик | Нет/Да | INTERRUPTIBLE |
| FLIP | Продвинутая | Состояние | Нет | CRITICAL |
| WOBBLE | Продвинутая | Наведение | Да | BACKGROUND |
| ORBIT | Продвинутая | Декоративно | Да | BACKGROUND |
| SPIRAL | Продвинутая | Декоративно | Да | BACKGROUND |
| WAVE | Продвинутая | Декоративно | Да | BACKGROUND |
| JIGGLE | Продвинутая | Наведение | Нет | INTERRUPTIBLE |
| GLOW | Продвинутая | Подсветка | Да | BACKGROUND |

---

**Последнее обновление**: 2025-10-15
**Версия плагина**: 2.0
**Автор**: Zodunix
