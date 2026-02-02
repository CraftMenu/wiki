# Система событий

CraftMenu использует систему событий для обработки взаимодействий пользователя с виджетами.

## Типы событий

| Событие | Триггер | Доступно для |
|---------|---------|--------------|
| `on_menu_open` | Меню открывается | Все виджеты |
| `on_cursor_hover` | Курсор входит в виджет | IMAGE, TEXT |
| `on_cursor_hover_exit` | Курсор покидает виджет | IMAGE, TEXT |
| `on_cursor_click` | Клик по виджету | IMAGE, TEXT |
| `on_click_any` | Любой клик | Только CURSOR |

## Базовая структура события

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal: {type: image, value: template/button.png}
    events:
      on_cursor_hover:
        - action: sound
          file: minecraft:ui.button.click
          volume: 0.5
          pitch: 1.2
      on_cursor_click:
        - action: command
          command: "[MESSAGE] &aВы кликнули!"
```

## Типы действий

### Действие звука

Воспроизводит звуковой эффект:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Звук Minecraft
  volume: 1.0                       # 0.0 до 1.0
  pitch: 1.0                        # 0.5 до 2.0
```

Пользовательские звуки:
```yaml
- action: sound
  file: template/click.ogg         # Пользовательский звуковой файл
```

### Действие анимации

Запускает анимацию:

```yaml
- action: animation
  effect: scale                    # Тип анимации
  duration: 200                    # Длительность в мс
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Целевой масштаб
  easing_style: ease_out           # Функция сглаживания
  priority: false                  # Блокировать другие действия?
```

### Действие команды

Выполняет команды:

```yaml
- action: command
  command: "[MESSAGE] Привет!"     # Специальная команда
  delay: 0                         # Задержка в мс
```

**Специальные команды:**
- `[MESSAGE] текст` - Отправить сообщение игроку
- `[TELEPORT] world x y z yaw pitch` - Телепортировать игрока
- `[CLOSE]` - Закрыть меню
- `[PLAY_MUSIC] path/file.ogg` - Воспроизвести фоновую музыку
- `[STOP_MUSIC]` - Остановить музыку
- `[OPEN_URL] https://...` - Открыть URL (кликабельный)
- `[PLAYER] /command` - Выполнить команду от имени игрока
- `[CONSOLE] /command` - Выполнить команду от имени консоли

### Действия состояний

Изменение состояний виджета:

```yaml
# Переключение между состояниями
- action: toggle_state
  states: [normal, disabled]

# Установка конкретного состояния
- action: set_state
  state: disabled
```

### Действие изменения визуала

Изменение внешнего вида виджета:

```yaml
- action: visual_change
  to: hover

# Условное изменение
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Действие скрытия виджета

Удаление виджета из поля зрения:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### Действие остановки анимации

Остановка запущенных анимаций:

```yaml
- action: stop_animation
  animation_type: rotate          # Анимация для остановки
```

## Порядок выполнения событий

Действия выполняются в порядке перечисления. Для лучших результатов:

1. Звуковые эффекты (немедленная обратная связь)
2. Изменения состояний
3. Команды
4. Анимации (могут иметь задержки)

## Приоритетные анимации

Используйте `priority: true` для блокировки других действий до завершения анимации:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Блокирует последующие действия
    - action: command
      command: "[MESSAGE] Готово!"  # Выполнится после анимации
```
