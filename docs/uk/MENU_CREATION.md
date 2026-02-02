# Створення меню в CraftMenu

## Зміст
1. [Створення через команду](#створення-через-команду)
2. [Структура YAML](#структура-yaml)
3. [Доступні віджети](#доступні-віджети)
4. [Transform (Позиціонування)](#transform-позиціонування)
5. [Колізія](#колізія)
6. [Події та дії](#події-та-дії)
7. [Практичні приклади](#практичні-приклади)

---

## Створення через команду

### Рекомендований метод

1. **Увійдіть у гру** та перейдіть до місця, де хочете розмістити меню
2. **Подивіться в напрямку**, в якому гравці повинні дивитися при відкритті меню
3. **Виконайте**:
   ```
   /cm create menu_name
   ```

Меню буде створено з вашим поточним місцезнаходженням та обертанням!

### Згенерована структура

```
/plugins/CraftMenu/menus/menu_name.yml
```

**Шаблон за замовчуванням включає**:
- Віджет попередження FOV (можна видалити)
- Налаштований курсор
- Оптимізовані налаштування
- Зворотний зв'язок меж
- **Курсор використовує TEXT за замовчуванням** - перемкніть на IMAGE після додавання текстур

---

## Структура YAML

### Основні розділи

```yaml
menu:
  name: String              # Назва меню
  title: String             # Заголовок (підтримує &коди)
  main: boolean             # Головне меню? (майбутнє)
  location:                 # Розташування у світі
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Налаштування
    # ... (див. нижче)
  widgets:                  # Віджети меню
    widget_name:
      # ... (див. нижче)
```

### Детальні налаштування

```yaml
settings:
  # Аудіо
  background-music: "template/background.ogg"  # Фонова музика (опціонально)

  # Рух курсора
  cursor-sensitivity: 1.0          # Чутливість (0.1 - 5.0)
  max-yaw-offset: 61.0             # Горизонтальна межа в градусах
  max-pitch-offset: 36.0           # Вертикальна межа в градусах
  mount-time: 100                  # Час монтування в тіках

  # Позиціонування меню
  distance-multiplier: -0.01       # Множник відстані
  menu-distance: 0.3               # Відстань меню

  # Продуктивність
  debug-mode: false                # Режим налагодження
  update-rate: 1                   # Частота оновлення
  collision-detection: true        # Активне виявлення колізій

  # Камера
  camera-lock-enabled: true        # Блокування камери
  camera-lock-strength: 0.4        # Сила блокування (0.0-1.0)

  # Зворотний зв'язок меж
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lДосягнуто межу курсора!"
```

---

## Доступні віджети

### BUTTON

Інтерактивна кнопка з наведенням та натисканням.

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
      value: "▶ ГРАТИ"
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

Статичне зображення (може мати наведення).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Опціонально
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Без взаємодії
```

### TEXT

Форматований текст.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lЛАСКАВО ПРОСИМО
        &7на сервер
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Розмір тексту
  shadow: true              # Тінь
  background-color: '#000000'  # Колір фону (hex)
```

### CURSOR

Курсор, керований мишею (**тільки 1 на меню**).

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
    position: {x: 0, y: 0, z: 1.0}  # високий z = попереду
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Налаштування курсора
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Анімація
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # мс
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Область колізії
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Позиціонування)

### Position

Позиція в 3D просторі відносно точки появи меню.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Ліворуч (-) / Праворуч (+)
- **y**: Вниз (-) / Вгору (+)
- **z**: Далеко (-) / Близько (+)

**Порада**: z=0.1 добре для фону, z=1.0 для курсора (завжди видимий)

### Size

Розмір віджета.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Типові масштаби**:
- Маленька кнопка: `0.015`
- Середня кнопка: `0.02`
- Велика кнопка: `0.03`
- Логотип: `0.04-0.05`
- Курсор: `0.005`

### Rotation (Опціонально)

Обертання в градусах.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Примітка**: Зазвичай не потрібно (ViewFrame вже налаштовує)

---

## Колізія

### Базова конфігурація

```yaml
collision:
  enabled: true                     # Увімкнути колізію
  position: {x: 0, y: 0, z: 0.1}   # Опціонально: перевизначення позиції
  size: {x: 0.08, y: 0.04, z: 0.02} # Розмір коробки
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Опціонально
```

### Візуальне налагодження

```yaml
collision:
  debug:
    enabled: true     # Показувати частинки
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, тощо
    size: 0.005       # Розмір частинок
```

**Увімкнути глобально**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Поради щодо колізії

1. **Візуальний розмір ≠ розмір колізії**
   - Колізія може бути більшою для легшого натискання
   - Приклад: візуал 0.02, колізія 0.08x0.04

2. **Позиція колізії**
   - Якщо не вказано, використовується transform.position
   - Вкажіть, якщо хочете іншу область

3. **Collision-area (Курсор)**
   - Курсор використовує `collision-area` замість `collision`
   - Причина: Курсор має особливу поведінку

---

## Події та дії

### Доступні події

| Подія | Коли спрацьовує | Віджети |
|-------|-----------------|---------|
| `on_menu_open` | Меню відкривається | Всі |
| `on_cursor_hover` | Курсор входить | Button, Image, Text |
| `on_cursor_hover_exit` | Курсор виходить | Button, Image, Text |
| `on_cursor_click` | Віджет натиснуто | Button |
| `on_click_any` | Будь-яке натискання | Cursor |

### Доступні дії

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, тощо
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
  file: "minecraft:ui.button.click"  # АБО "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # мс
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
  delay: 1000  # Опціонально, в мс
```

**Спеціальні команди**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] текст з &кольорами`
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

## Практичні приклади

### Проста кнопка зі звуком

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
      command: '[MESSAGE] &aКнопку натиснуто!'
```

### Кнопка з телепортацією

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
      command: '[MESSAGE] &eТелепортація...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Кнопка перемикання (Вкл/Викл)

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
      command: '[MESSAGE] &cВимкнено!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aУвімкнено!'
```

### Текстовий віджет з можливістю натискання

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lПОПЕРЕДЖЕННЯ
        &7Натисніть, щоб закрити
    hover:
      type: text
      value: |-
        &c&lПОПЕРЕДЖЕННЯ
        &e&oНатисніть, щоб закрити
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

## Найкращі практики

1. **Організуйте за шарами (z)**:
   - z=0.05: Фон
   - z=0.1: Кнопки
   - z=0.15: Накладки
   - z=1.0: Курсор

2. **Називайте віджети описово**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Завжди включайте fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "ТЕКСТ"}
   ```

4. **Колізія більша за візуал**:
   - Візуал: 0.02
   - Колізія: 0.08x0.04 (легше натискати)

5. **Використовуйте звуки Minecraft коли можливо**:
   - Не потрібен ресурспак
   - Працює без додаткового налаштування

6. **Тестуйте поступово**:
   - Додавайте по 1 віджету за раз
   - Часто використовуйте `/cm reload`
   - Тестуйте кожну взаємодію

---

Останнє оновлення: 2026-02-02
