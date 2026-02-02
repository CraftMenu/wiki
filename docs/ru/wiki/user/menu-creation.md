# Создание меню

Это руководство охватывает создание пользовательских меню в CraftMenu.

## Структура меню

Меню определяются в YAML-файлах в `plugins/CraftMenu/menus/`.

### Базовый шаблон меню

```yaml
menu:
  name: my_menu
  title: "&b&lМое меню"
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
    # Определения виджетов здесь
```

## Свойства меню

### Базовые свойства

| Свойство | Тип | Описание |
|----------|-----|----------|
| `name` | String | Уникальный идентификатор меню |
| `title` | String | Отображаемый заголовок (поддерживает цветовые коды) |
| `main` | Boolean | Является ли это главным меню? |
| `open-on-join` | Boolean | Автооткрытие при входе игрока в мир |
| `open-on-teleport` | Boolean | Автооткрытие при телепортации игрока в мир |

### Местоположение

```yaml
location:
  world: world               # Название мира
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Горизонтальное вращение (-180 до 180)
    pitch: 0.0               # Вертикальное вращение (-90 до 90)
```

### Настройки

```yaml
settings:
  cursor-sensitivity: 1.0    # Чувствительность мыши (1.0 = нормальная)
  max-yaw-offset: 61.0       # Горизонтальный лимит в градусах
  max-pitch-offset: 36.0     # Вертикальный лимит в градусах
  camera-lock-enabled: true  # Блокировка камеры игрока при открытом меню
  camera-lock-strength: 0.4  # Сила блокировки (0.0-1.0)
```

### Настройки видимости

```yaml
settings:
  visibility:
    hide_players: false      # Скрыть других игроков
    hide_mobs: false         # Скрыть мобов
    hide_items: false        # Скрыть выброшенные предметы
    whitelist_players: []    # Игроки, которые остаются видимыми
```

## Добавление виджетов

Виджеты - это интерактивные элементы вашего меню.

### Виджет изображения

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

### Текстовый виджет

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lДобро пожаловать!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Быстрое создание командой

Используйте `/cm create <name>` для быстрого создания меню в вашем текущем местоположении.

## Добавление пользовательских изображений

1. Создайте папку: `plugins/CraftMenu/images/my_menu/`
2. Добавьте PNG-изображения в эту папку
3. Выполните `/cm zip` для перегенерации ресурспака
4. Ссылайтесь на изображения как `my_menu/image_name.png`

## Тестирование меню

1. Сохраните ваш YAML-файл
2. Выполните `/cm reload`
3. Выполните `/cm open my_menu`

## Лучшие практики

- Используйте подпапки для организации изображений по меню
- Сохраняйте разумные размеры изображений (макс. 128x128 для кнопок)
- Тщательно тестируйте меню перед развертыванием
- Используйте описательные имена виджетов
- Комментируйте сложные конфигурации
