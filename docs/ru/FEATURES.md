# Возможности CraftMenu

## Содержание
1. [Унифицированная система звуков](#унифицированная-система-звуков)
2. [События виджетов](#события-виджетов)
3. [Система состояний](#система-состояний)
4. [Настраиваемая обратная связь границ](#настраиваемая-обратная-связь-границ)
5. [Специальные команды](#специальные-команды)

---

## Унифицированная система звуков

Все звуковые поля теперь поддерживают два типа:

### Звуки Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Встроенный звук Minecraft
  volume: 0.8
  pitch: 1.0
```

**Примеры звуков Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Пользовательские звуки (Ресурс-пак)

```yaml
- action: sound
  file: "template/click.ogg"         # Автоматически разрешается
  # ИЛИ
  file: "craftmenu:template/click"   # Явно с namespace
  volume: 1.0
  pitch: 1.2
```

**Шаги для пользовательских звуков**:
1. Добавьте `.ogg` в `/plugins/CraftMenu/sounds/template/click.ogg`
2. Выполните `/cm zip`
3. Ресурс-пак автоматически включит звук

---

## События виджетов

### on_menu_open

Срабатывает автоматически при открытии меню. Полезно для фоновой музыки.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Когда курсор входит в область виджета.

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

Когда курсор покидает область виджета.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Когда виджет нажат.

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (только для курсора)

Срабатывает при ЛЮБОМ клике, даже вне виджетов.

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## Система состояний

Позволяет виджетам иметь несколько поведений (например, кнопка переключения вкл/выкл).

### Стандартные состояния

- `normal`: Начальное состояние
- `hover`: Мышь над виджетом
- `pressed`: Виджет нажат
- `disabled`: Виджет отключён
- `fallback`: Когда визуал не загружается

### Пользовательские состояния

Вы можете создавать свои собственные состояния:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Звук включён
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Звук выключен (пользовательское состояние)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Наведение когда выключен (пользовательское состояние)
      type: image
      value: template/sound-mute-hover.png
```

### Действия состояний

#### toggle_state

Переключает между списком состояний.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Циклически переключает между состояниями
```

#### visual_change_conditional

Изменяет визуал только если текущее состояние равно X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Если состояние "normal"
  to: hover                      # Изменить на "hover"
- action: visual_change_conditional
  if_state: disabled            # Если состояние "disabled"
  to: disabled_hover             # Изменить на "disabled_hover"
```

#### command_conditional

Выполняет команду только если состояние равно X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Если стало "disabled"
  command: '[STOP_MUSIC]'        # Остановить музыку
- action: command_conditional
  if_state: normal              # Если стало "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Воспроизвести музыку
```

### Полный пример: Кнопка переключения

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## Настраиваемая обратная связь границ

Настраивает обратную связь когда курсор достигает пределов движения.

### Конфигурация

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Звук при достижении предела
      volume: 0.5                          # Громкость 0.0-1.0
      pitch: 0.6                           # Высота тона 0.5-2.0
      message: "&c&lДостигнут предел курсора!" # Сообщение в action bar
```

### Рекомендуемые звуки

- `minecraft:ui.button.click` - Мягкий клик
- `minecraft:block.note_block.bass` - Низкий тон
- `craftmenu:template/warning.ogg` - Пользовательский звук

---

## Специальные команды

Используются с `action: command`.

### [TELEPORT]

Телепортирует игрока.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    мир    x   y   z yaw pitch
```

### [MESSAGE]

Отправляет сообщение игроку.

```yaml
- action: command
  command: '[MESSAGE] &aДобро пожаловать в игру!'
  delay: 500  # Подождать 500мс перед отправкой
```

### [CLOSE]

Закрывает меню.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Закрыть через 1 секунду
```

### [PLAY_MUSIC]

Воспроизводит музыку для виджета (только один звук на виджет).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Поддерживает namespace**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Останавливает текущий воспроизводимый звук для этого виджета.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Важно**: `[STOP_MUSIC]` останавливает только звук этого виджета, не затрагивает другие виджеты или глобальные звуки.

**Техническое примечание**: Команда использует `player.stopAllSounds()` внутренне, потому что `player.stopSound(key)` не работает с пользовательскими звуками ресурс-пака. Однако она срабатывает только для конкретного виджета.

### [OPEN_URL]

Открывает URL в браузере игрока (требуется подтверждение).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## Автоматическая остановка звуков

**Когда меню закрывается**, ВСЕ звуки автоматически останавливаются для игрока. Это включает:

- Фоновую музыку воспроизводимую через `[PLAY_MUSIC]`
- Звуки наведения/клика виджетов
- Любой активный звук на момент закрытия

### Как это работает

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← Вызывается ДО close()
}
menuInstance.close();
```

### Техническое ограничение

Система использует `player.stopAllSounds()` потому что:
- `player.stopSound(key)` **не работает** с пользовательскими звуками ресурс-пака
- `player.stopSound(key, category)` **тоже не работает**
- `stopAllSounds()` - **единственное надёжное решение**

Это означает, что **все** звуки игрока останавливаются при закрытии меню, не только звуки меню. Это ограничение Minecraft/Bukkit, а не CraftMenu.

### Альтернатива: Ручное управление

Если вы предпочитаете не останавливать звуки автоматически, используйте кнопку переключения в меню:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Остановить музыку вручную
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Визуальные действия

### visual_change

Безусловно изменяет визуальное состояние.

```yaml
- action: visual_change
  to: hover
```

### scale

Временно анимирует масштаб виджета.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% от размера
  duration: 300                     # Длительность в мс
```

### scale_reset

Сбрасывает масштаб к исходному размеру.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Полностью удаляет виджет (визуал, коллизию, звуки).

```yaml
- action: hide_widget
  widget: fov_warning  # Имя виджета для скрытия
```

**Примечание**: Скрытый виджет нельзя восстановить без переоткрытия меню.

---

## Полный пример: Меню со всеми функциями

```yaml
menu:
  name: complete_example
  title: '&b&lПолный пример меню'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &cКурсор достиг края!"

  widgets:
    # Кнопка с фоновой музыкой
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # Кнопка действия с полной обратной связью
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aЗапуск игры...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Курсор со звуковой обратной связью
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
      transform:
        position: {x: 0, y: 0, z: 1.0}
        size: {x: 0.005, y: 0.005, z: 0.005}
      collision-area:
        enabled: true
        size: {x: 0.01, y: 0.01, z: 0.01}
      events:
        on_click_any:
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.4
          pitch: 1.0
```

---

Последнее обновление: 2026-02-02
Версия плагина: 2.0
