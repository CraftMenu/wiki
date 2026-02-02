# Створення меню

Цей посібник охоплює створення кастомних меню в CraftMenu.

## Структура меню

Меню визначаються у YAML-файлах у `plugins/CraftMenu/menus/`.

### Базовий шаблон меню

```yaml
menu:
  name: my_menu
  title: "&b&lМоє кастомне меню"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # Визначення віджетів тут
```

## Властивості меню

### Базові властивості

| Властивість | Тип | Опис |
|-------------|-----|------|
| `name` | String | Унікальний ідентифікатор меню |
| `title` | String | Відображуваний заголовок (підтримує кольорові коди) |
| `main` | Boolean | Чи це головне меню? |
| `open-on-join` | Boolean | Автовідкриття при вході гравця у світ |
| `open-on-teleport` | Boolean | Автовідкриття при телепортації гравця у світ |

### Локація

```yaml
location:
  world: world               # Назва світу
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Горизонтальний поворот (-180 до 180)
    pitch: 0.0               # Вертикальний поворот (-90 до 90)
```

### Налаштування

```yaml
settings:
  cursor-sensitivity: 1.0    # Чутливість миші (1.0 = нормальна)
  max-yaw-offset: 61.0       # Горизонтальний ліміт у градусах
  max-pitch-offset: 36.0     # Вертикальний ліміт у градусах
  camera-lock-enabled: true  # Блокування камери гравця коли меню відкрите
  camera-lock-strength: 0.4  # Сила блокування (0.0-1.0)
```

### Налаштування видимості

```yaml
settings:
  visibility:
    hide_players: false      # Приховати інших гравців
    hide_mobs: false         # Приховати мобів
    hide_items: false        # Приховати випущені предмети
    whitelist_players: []    # Гравці які залишаються видимими
```

## Додавання віджетів

Віджети - це інтерактивні елементи вашого меню.

### Віджет зображення

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### Текстовий віджет

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lЛаскаво просимо!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Швидке створення командою

Використовуйте `/cm create <name>` для швидкого створення меню у вашій поточній локації.

## Додавання кастомних зображень

1. Створіть папку: `plugins/CraftMenu/images/my_menu/`
2. Додайте ваші PNG зображення в цю папку
3. Виконайте `/cm zip` для перегенерації ресурс-паку
4. Посилайтеся на зображення як `my_menu/image_name.png`

## Тестування вашого меню

1. Збережіть ваш YAML-файл
2. Виконайте `/cm reload`
3. Виконайте `/cm open my_menu`

## Найкращі практики

- Використовуйте підпапки для організації зображень за меню
- Тримайте розміри зображень розумними (макс 128x128 для кнопок)
- Ретельно тестуйте меню перед деплоєм
- Використовуйте описові назви віджетів
- Коментуйте складні конфігурації
