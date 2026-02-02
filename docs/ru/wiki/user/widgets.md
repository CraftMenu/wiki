# Типы виджетов

CraftMenu поддерживает три типа виджетов для построения меню.

## Обзор типов виджетов

| Тип | Описание | Интерактивный |
|-----|----------|---------------|
| IMAGE | Отображает изображения | Да |
| TEXT | Отображает форматированный текст | Да |
| CURSOR | Курсор мыши | Особый |

## Виджет IMAGE

Используется для кнопок, фонов и декоративных элементов.

### Базовое изображение

```yaml
my_image:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Изображение с состояниями

```yaml
my_button:
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

### Переопределения состояний

Каждое состояние может иметь переопределения трансформации и столкновений:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Немного больше при наведении
```

## Виджет TEXT

Отображает форматированный текст с поддержкой PlaceholderAPI.

### Базовый текст

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bДобро пожаловать на сервер!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Текст с плейсхолдерами

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Игрок: &f%player_name%\n&7Уровень: &a%player_level%"
      text-size: 0.8
```

### Многострочный текст

Используйте `\n` для переноса строки:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Строка 1\nСтрока 2\nСтрока 3"
```

## Виджет CURSOR

Курсор следует за движением мыши игрока.

### Базовый курсор

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

## Свойства трансформации

Все виджеты поддерживают свойства трансформации:

```yaml
transform:
  position:
    x: 0.0    # Горизонтальное смещение
    y: 0.0    # Вертикальное смещение
    z: 0.0    # Смещение по глубине
  size:
    x: 0.1    # Масштаб ширины
    y: 0.1    # Масштаб высоты
    z: 0.1    # Масштаб глубины
  rotation:
    pitch: 0  # Вращение по оси X
    yaw: 0    # Вращение по оси Y
    roll: 0   # Вращение по оси Z
```

## Свойства столкновений

Включение или настройка обнаружения столкновений:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Порядок виджетов

Виджеты рендерятся в порядке их появления в YAML-файле. Более поздние виджеты отображаются поверх более ранних.
