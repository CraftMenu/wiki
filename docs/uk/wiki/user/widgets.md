# Типи віджетів

CraftMenu підтримує три типи віджетів для побудови меню.

## Огляд типів віджетів

| Тип | Опис | Інтерактивний |
|-----|------|---------------|
| IMAGE | Відображає зображення | Так |
| TEXT | Відображає форматований текст | Так |
| CURSOR | Курсор миші | Спеціальний |

## Віджет IMAGE

Використовується для кнопок, фонів та декоративних елементів.

### Базове зображення

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

### Зображення зі станами

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

### Перевизначення станів

Кожен стан може мати перевизначення transform та collision:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Трохи більше при наведенні
```

## Віджет TEXT

Відображає форматований текст з підтримкою PlaceholderAPI.

### Базовий текст

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bЛаскаво просимо на сервер!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Текст з плейсхолдерами

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Гравець: &f%player_name%\n&7Рівень: &a%player_level%"
      text-size: 0.8
```

### Багаторядковий текст

Використовуйте `\n` для розривів рядків:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Рядок 1\nРядок 2\nРядок 3"
```

## Віджет CURSOR

Курсор слідує за рухом миші гравця.

### Базовий курсор

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

## Властивості Transform

Всі віджети підтримують властивості transform:

```yaml
transform:
  position:
    x: 0.0    # Горизонтальне зміщення
    y: 0.0    # Вертикальне зміщення
    z: 0.0    # Зміщення глибини
  size:
    x: 0.1    # Масштаб ширини
    y: 0.1    # Масштаб висоти
    z: 0.1    # Масштаб глибини
  rotation:
    pitch: 0  # Поворот по осі X
    yaw: 0    # Поворот по осі Y
    roll: 0   # Поворот по осі Z
```

## Властивості Collision

Увімкнення або налаштування визначення колізій:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Порядок віджетів

Віджети рендеряться в порядку їх появи в YAML-файлі. Пізніші віджети з'являються перед ранішими.
