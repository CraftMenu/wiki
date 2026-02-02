# Создание меню в CraftMenu

## Содержание
1. [Создание через команду](#создание-через-команду)
2. [Структура YAML](#структура-yaml)
3. [Доступные виджеты](#доступные-виджеты)
4. [Transform (Позиционирование)](#transform-позиционирование)
5. [Коллизия](#коллизия)
6. [События и действия](#события-и-действия)
7. [Практические примеры](#практические-примеры)

---

## Создание через команду

### Рекомендуемый метод

1. **Войдите в игру** и перейдите в место, где хотите разместить меню
2. **Посмотрите в направлении**, которым должны смотреть игроки при открытии меню
3. **Выполните**:
   ```
   /cm create menu_name
   ```

Меню будет создано с вашей текущей позицией и направлением!

### Созданная структура

```
/plugins/CraftMenu/menus/menu_name.yml
```

**Шаблон по умолчанию включает**:
- Виджет предупреждения о FOV (можно удалить)
- Настроенный курсор
- Оптимизированные настройки
- Обратная связь границ
- **Курсор использует TEXT по умолчанию** - переключитесь на IMAGE после добавления текстур

---

## Структура YAML

### Основные разделы

```yaml
menu:
  name: String              # Имя меню
  title: String             # Заголовок (поддерживает &codes)
  main: boolean             # Главное меню? (будущее)
  location:                 # Местоположение в мире
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Настройки
    # ... (см. ниже)
  widgets:                  # Виджеты меню
    widget_name:
      # ... (см. ниже)
```

### Подробные настройки

```yaml
settings:
  # Аудио
  background-music: "template/background.ogg"  # Фоновая музыка (опционально)

  # Движение курсора
  cursor-sensitivity: 1.0          # Чувствительность (0.1 - 5.0)
  max-yaw-offset: 61.0             # Горизонтальный предел в градусах
  max-pitch-offset: 36.0           # Вертикальный предел в градусах
  mount-time: 100                  # Время монтирования в тиках

  # Позиционирование меню
  distance-multiplier: -0.01       # Множитель расстояния
  menu-distance: 0.3               # Расстояние меню

  # Производительность
  debug-mode: false                # Режим отладки
  update-rate: 1                   # Частота обновления
  collision-detection: true        # Активное обнаружение коллизий

  # Камера
  camera-lock-enabled: true        # Блокировка камеры
  camera-lock-strength: 0.4        # Сила блокировки (0.0-1.0)

  # Обратная связь границ
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lДостигнут предел курсора!"
```

---

## Доступные виджеты

### BUTTON

Интерактивная кнопка с наведением и кликом.

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
      value: "▶ ИГРАТЬ"
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

Статическое изображение (может иметь hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Опционально
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Без взаимодействия
```

### TEXT

Форматированный текст.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lДОБРО ПОЖАЛОВАТЬ
        &7на сервер
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Размер текста
  shadow: true              # Тень
  background-color: '#000000'  # Цвет фона (hex)
```

### CURSOR

Курсор, управляемый мышью (**только 1 на меню**).

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
    position: {x: 0, y: 0, z: 1.0}  # высокий z = на переднем плане
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Настройки курсора
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Анимация
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # мс
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Область коллизии
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Позиционирование)

### Position

Позиция в 3D пространстве относительно точки появления меню.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Влево (-) / Вправо (+)
- **y**: Вниз (-) / Вверх (+)
- **z**: Далеко (-) / Близко (+)

**Совет**: z=0.1 хорошо для фона, z=1.0 для курсора (всегда виден)

### Size

Размер виджета.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Типичные масштабы**:
- Маленькая кнопка: `0.015`
- Средняя кнопка: `0.02`
- Большая кнопка: `0.03`
- Логотип: `0.04-0.05`
- Курсор: `0.005`

### Rotation (Опционально)

Вращение в градусах.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Примечание**: Обычно не требуется (ViewFrame уже регулирует)

---

## Коллизия

### Базовая конфигурация

```yaml
collision:
  enabled: true                     # Включить коллизию
  position: {x: 0, y: 0, z: 0.1}   # Опционально: переопределение позиции
  size: {x: 0.08, y: 0.04, z: 0.02} # Размер коробки
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Опционально
```

### Визуальная отладка

```yaml
collision:
  debug:
    enabled: true     # Показать частицы
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, и т.д.
    size: 0.005       # Размер частиц
```

**Включить глобально**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Советы по коллизии

1. **Визуальный размер ≠ размер коллизии**
   - Коллизия может быть больше для удобства клика
   - Пример: визуал 0.02, коллизия 0.08x0.04

2. **Позиция коллизии**
   - Если не указана, использует transform.position
   - Укажите, если хотите другую область

3. **Collision-area (Курсор)**
   - Курсор использует `collision-area` вместо `collision`
   - Причина: Курсор имеет особое поведение

---

## События и действия

### Доступные события

| Событие | Когда срабатывает | Виджеты |
|---------|-------------------|---------|
| `on_menu_open` | Меню открывается | Все |
| `on_cursor_hover` | Курсор входит | Button, Image, Text |
| `on_cursor_hover_exit` | Курсор выходит | Button, Image, Text |
| `on_cursor_click` | Виджет нажат | Button |
| `on_click_any` | Любой клик | Cursor |

### Доступные действия

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, и т.д.
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
  file: "minecraft:ui.button.click"  # ИЛИ "mymenu/click.ogg"
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
  delay: 1000  # Опционально, в мс
```

**Специальные команды**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] текст с &цветами`
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

## Практические примеры

### Простая кнопка со звуком

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
      command: '[MESSAGE] &aКнопка нажата!'
```

### Кнопка с телепортом

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
      command: '[MESSAGE] &eТелепортация...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Кнопка переключения (Вкл/Выкл)

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
      command: '[MESSAGE] &cОтключено!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aВключено!'
```

### Кликабельный текстовый виджет

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lПРЕДУПРЕЖДЕНИЕ
        &7Нажмите чтобы закрыть
    hover:
      type: text
      value: |-
        &c&lПРЕДУПРЕЖДЕНИЕ
        &e&oНажмите чтобы закрыть
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

## Лучшие практики

1. **Организуйте по слоям (z)**:
   - z=0.05: Фон
   - z=0.1: Кнопки
   - z=0.15: Оверлеи
   - z=1.0: Курсор

2. **Называйте виджеты описательно**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Всегда включайте fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "ТЕКСТ"}
   ```

4. **Коллизия больше чем визуал**:
   - Визуал: 0.02
   - Коллизия: 0.08x0.04 (легче кликать)

5. **Используйте звуки Minecraft когда возможно**:
   - Не требуется ресурс-пак
   - Работает без дополнительной настройки

6. **Тестируйте постепенно**:
   - Добавляйте по 1 виджету за раз
   - Часто используйте `/cm reload`
   - Тестируйте каждое взаимодействие

---

Последнее обновление: 2026-02-02
