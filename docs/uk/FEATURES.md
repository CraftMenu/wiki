# Функції CraftMenu

## Зміст
1. [Уніфікована система звуків](#уніфікована-система-звуків)
2. [Події віджетів](#події-віджетів)
3. [Система станів](#система-станів)
4. [Налаштовуваний зворотний зв'язок меж](#налаштовуваний-зворотний-звязок-меж)
5. [Спеціальні команди](#спеціальні-команди)

---

## Уніфікована система звуків

Усі поля звуків тепер підтримують два типи:

### Звуки Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Стандартний звук Minecraft
  volume: 0.8
  pitch: 1.0
```

**Приклади звуків Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Користувацькі звуки (ресурспак)

```yaml
- action: sound
  file: "template/click.ogg"         # Автоматично визначається
  # АБО
  file: "craftmenu:template/click"   # Явно з простором імен
  volume: 1.0
  pitch: 1.2
```

**Кроки для користувацьких звуків**:
1. Додайте `.ogg` в `/plugins/CraftMenu/sounds/template/click.ogg`
2. Виконайте `/cm zip`
3. Ресурспак автоматично включить звук

---

## Події віджетів

### on_menu_open

Спрацьовує автоматично при відкритті меню. Корисно для фонової музики.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Коли курсор входить в область віджета.

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

Коли курсор залишає область віджета.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Коли віджет натиснуто.

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

### on_click_any (тільки для курсора)

Спрацьовує при БУДЬ-ЯКОМУ натисканні, навіть поза віджетами.

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

## Система станів

Дозволяє віджетам мати кілька варіантів поведінки (наприклад, кнопка перемикання вкл/викл).

### Стандартні стани

- `normal`: Початковий стан
- `hover`: Миша над віджетом
- `pressed`: Віджет натиснуто
- `disabled`: Віджет вимкнено
- `fallback`: Коли візуал не завантажується

### Користувацькі стани

Ви можете створювати власні стани:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Звук увімкнено
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Звук вимкнено (користувацький стан)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Наведення при вимкненому (користувацький стан)
      type: image
      value: template/sound-mute-hover.png
```

### Дії зі станами

#### toggle_state

Перемикає між списком станів.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Циклічно перемикається між станами
```

#### visual_change_conditional

Змінює візуал тільки якщо поточний стан X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Якщо стан "normal"
  to: hover                      # Змінити на "hover"
- action: visual_change_conditional
  if_state: disabled            # Якщо стан "disabled"
  to: disabled_hover             # Змінити на "disabled_hover"
```

#### command_conditional

Виконує команду тільки якщо стан X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Якщо став "disabled"
  command: '[STOP_MUSIC]'        # Зупинити музику
- action: command_conditional
  if_state: normal              # Якщо став "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Відтворити музику
```

### Повний приклад: Кнопка перемикання

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

## Налаштовуваний зворотний зв'язок меж

Налаштовує зворотний зв'язок, коли курсор досягає меж руху.

### Конфігурація

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Звук при досягненні межі
      volume: 0.5                          # Гучність 0.0-1.0
      pitch: 0.6                           # Висота 0.5-2.0
      message: "&c&lДосягнуто межу курсора!" # Повідомлення в action bar
```

### Рекомендовані звуки

- `minecraft:ui.button.click` - М'який клік
- `minecraft:block.note_block.bass` - Низький тон
- `craftmenu:template/warning.ogg` - Користувацький звук

---

## Спеціальні команди

Використовуються з `action: command`.

### [TELEPORT]

Телепортує гравця.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

Надсилає повідомлення гравцю.

```yaml
- action: command
  command: '[MESSAGE] &aЛаскаво просимо до гри!'
  delay: 500  # Почекати 500мс перед надсиланням
```

### [CLOSE]

Закриває меню.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Закрити через 1 секунду
```

### [PLAY_MUSIC]

Відтворює музику для віджета (тільки один звук на віджет).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Підтримує простори імен**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Зупиняє поточний звук для цього віджета.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Важливо**: `[STOP_MUSIC]` зупиняє тільки звук цього віджета, не впливає на інші віджети або глобальні звуки.

**Технічна примітка**: Команда використовує `player.stopAllSounds()` внутрішньо, тому що `player.stopSound(key)` не працює з користувацькими звуками ресурспаку. Однак вона викликається тільки конкретним віджетом.

### [OPEN_URL]

Відкриває URL у браузері гравця (потрібне підтвердження).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## Автоматична зупинка звуків

**При закритті меню** ВСІ звуки автоматично зупиняються для гравця. Це включає:

- Фонову музику, відтворену через `[PLAY_MUSIC]`
- Звуки наведення/натискання віджетів
- Будь-який звук, активний на момент закриття

### Як це працює

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← Викликається ПЕРЕД close()
}
menuInstance.close();
```

### Технічне обмеження

Система використовує `player.stopAllSounds()` тому що:
- `player.stopSound(key)` **не працює** з користувацькими звуками ресурспаку
- `player.stopSound(key, category)` **також не працює**
- `stopAllSounds()` - **єдине надійне рішення**

Це означає, що **всі** звуки гравця зупиняються при закритті меню, не тільки звуки меню. Це обмеження Minecraft/Bukkit, а не CraftMenu.

### Альтернатива: Ручне керування

Якщо ви не хочете автоматично зупиняти звуки, використовуйте кнопку перемикання в меню:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Зупинити музику вручну
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Візуальні дії

### visual_change

Змінює візуальний стан безумовно.

```yaml
- action: visual_change
  to: hover
```

### scale

Анімує масштаб віджета тимчасово.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% розміру
  duration: 300                     # Тривалість в мс
```

### scale_reset

Скидає масштаб до початкового розміру.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Повністю видаляє віджет (візуал, колізію, звуки).

```yaml
- action: hide_widget
  widget: fov_warning  # Назва віджета для приховування
```

**Примітка**: Прихований віджет не можна відновити без повторного відкриття меню.

---

## Повний приклад: Меню з усіма функціями

```yaml
menu:
  name: complete_example
  title: '&b&lПовний приклад меню'
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
      message: "&e⚠ &cКурсор досяг краю!"

  widgets:
    # Кнопка з фоновою музикою
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

    # Кнопка дії з повним зворотним зв'язком
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
          command: '[MESSAGE] &aЗапуск гри...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Курсор зі звуковим зворотним зв'язком
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

Останнє оновлення: 2026-02-02
Версія плагіна: 2.0
