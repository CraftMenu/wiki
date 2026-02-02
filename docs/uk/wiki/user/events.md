# Система подій

CraftMenu використовує систему подій для обробки взаємодій користувача з віджетами.

## Типи подій

| Подія | Тригер | Доступно для |
|-------|--------|--------------|
| `on_menu_open` | Меню відкривається | Всі віджети |
| `on_cursor_hover` | Курсор входить у віджет | IMAGE, TEXT |
| `on_cursor_hover_exit` | Курсор виходить з віджета | IMAGE, TEXT |
| `on_cursor_click` | Клік по віджету | IMAGE, TEXT |
| `on_click_any` | Будь-який клік | Тільки CURSOR |

## Базова структура події

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
          command: "[MESSAGE] &aВи клікнули!"
```

## Типи дій

### Дія Sound

Відтворює звуковий ефект:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Звук Minecraft
  volume: 1.0                       # 0.0 до 1.0
  pitch: 1.0                        # 0.5 до 2.0
```

Кастомні звуки:
```yaml
- action: sound
  file: template/click.ogg         # Кастомний звуковий файл
```

### Дія Animation

Запускає анімацію:

```yaml
- action: animation
  effect: scale                    # Тип анімації
  duration: 200                    # Тривалість в мс
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Цільовий масштаб
  easing_style: ease_out           # Функція згладжування
  priority: false                  # Блокувати інші дії?
```

### Дія Command

Виконує команди:

```yaml
- action: command
  command: "[MESSAGE] Привіт!"     # Спеціальна команда
  delay: 0                         # Затримка в мс
```

**Спеціальні команди:**
- `[MESSAGE] текст` - Надіслати повідомлення гравцю
- `[TELEPORT] world x y z yaw pitch` - Телепортувати гравця
- `[CLOSE]` - Закрити меню
- `[PLAY_MUSIC] path/file.ogg` - Відтворити фонову музику
- `[STOP_MUSIC]` - Зупинити музику
- `[OPEN_URL] https://...` - Відкрити URL (клікабельне)
- `[PLAYER] /command` - Виконати команду як гравець
- `[CONSOLE] /command` - Виконати команду як консоль

### Дії State

Зміна станів віджета:

```yaml
# Перемикання між станами
- action: toggle_state
  states: [normal, disabled]

# Встановлення конкретного стану
- action: set_state
  state: disabled
```

### Дія Visual Change

Зміна зовнішнього вигляду віджета:

```yaml
- action: visual_change
  to: hover

# Умовна зміна
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Дія Hide Widget

Видалення віджета з огляду:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### Дія Stop Animation

Зупинка запущених анімацій:

```yaml
- action: stop_animation
  animation_type: rotate          # Анімація для зупинки
```

## Порядок виконання подій

Дії виконуються в порядку переліку. Для найкращих результатів:

1. Звукові ефекти (негайний зворотний зв'язок)
2. Зміни стану
3. Команди
4. Анімації (можуть мати затримки)

## Пріоритетні анімації

Використовуйте `priority: true` для блокування інших дій до завершення анімації:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Блокує наступні дії
    - action: command
      command: "[MESSAGE] Готово!"  # Виконується після анімації
```
