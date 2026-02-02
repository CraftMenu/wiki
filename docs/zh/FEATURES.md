# CraftMenu 功能

## 目录
1. [统一声音系统](#统一声音系统)
2. [控件事件](#控件事件)
3. [状态系统](#状态系统)
4. [可配置的边界反馈](#可配置的边界反馈)
5. [特殊命令](#特殊命令)

---

## 统一声音系统

所有声音字段现在支持两种类型:

### Minecraft 声音

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # 原生 Minecraft 声音
  volume: 0.8
  pitch: 1.0
```

**Minecraft 声音示例**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### 自定义声音 (资源包)

```yaml
- action: sound
  file: "template/click.ogg"         # 自动解析
  # 或
  file: "craftmenu:template/click"   # 显式使用命名空间
  volume: 1.0
  pitch: 1.2
```

**自定义声音步骤**:
1. 将 `.ogg` 文件添加到 `/plugins/CraftMenu/sounds/template/click.ogg`
2. 运行 `/cm zip`
3. 资源包将自动包含该声音

---

## 控件事件

### on_menu_open

菜单打开时自动触发。适用于背景音乐。

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

当光标进入控件区域时触发。

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

当光标离开控件区域时触发。

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

当控件被点击时触发。

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

### on_click_any (仅限光标)

任何点击时触发，即使在控件外部。

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

## 状态系统

允许控件具有多种行为（例如，开关按钮）。

### 默认状态

- `normal`: 初始状态
- `hover`: 鼠标悬停在控件上
- `pressed`: 控件被点击
- `disabled`: 控件已禁用
- `fallback`: 当视觉效果无法加载时

### 自定义状态

您可以创建自己的状态:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # 声音开启
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # 声音关闭 (自定义状态)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # 关闭时悬停 (自定义状态)
      type: image
      value: template/sound-mute-hover.png
```

### 状态操作

#### toggle_state

在状态列表之间切换。

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # 在状态之间循环
```

#### visual_change_conditional

仅当当前状态为 X 时更改视觉效果。

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # 如果状态是 "normal"
  to: hover                      # 更改为 "hover"
- action: visual_change_conditional
  if_state: disabled            # 如果状态是 "disabled"
  to: disabled_hover             # 更改为 "disabled_hover"
```

#### command_conditional

仅当状态为 X 时执行命令。

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # 如果变为 "disabled"
  command: '[STOP_MUSIC]'        # 停止音乐
- action: command_conditional
  if_state: normal              # 如果变为 "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # 播放音乐
```

### 完整示例: 开关按钮

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

## 可配置的边界反馈

自定义光标到达移动限制时的反馈。

### 配置

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # 到达限制时的声音
      volume: 0.5                          # 音量 0.0-1.0
      pitch: 0.6                           # 音调 0.5-2.0
      message: "&c&l已达到光标限制！" # 动作栏中的消息
```

### 推荐声音

- `minecraft:ui.button.click` - 轻柔点击
- `minecraft:block.note_block.bass` - 低音
- `craftmenu:template/warning.ogg` - 自定义声音

---

## 特殊命令

与 `action: command` 一起使用。

### [TELEPORT]

传送玩家。

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    世界  x   y   z yaw pitch
```

### [MESSAGE]

向玩家发送消息。

```yaml
- action: command
  command: '[MESSAGE] &a欢迎来到游戏！'
  delay: 500  # 发送前等待 500ms
```

### [CLOSE]

关闭菜单。

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # 1秒后关闭
```

### [PLAY_MUSIC]

为控件播放音乐（每个控件只能播放一个声音）。

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**支持命名空间**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

停止该控件当前播放的声音。

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**重要**: `[STOP_MUSIC]` 仅停止该控件的声音，不影响其他控件或全局声音。

**技术说明**: 该命令内部使用 `player.stopAllSounds()`，因为 `player.stopSound(key)` 对自定义资源包声音无效。但是，它仅由特定控件触发。

### [OPEN_URL]

在玩家的浏览器中打开 URL（需要确认）。

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## 自动停止声音

**当菜单关闭时**，玩家的所有声音会自动停止。包括:

- 通过 `[PLAY_MUSIC]` 播放的背景音乐
- 控件悬停/点击声音
- 关闭时活跃的任何声音

### 工作原理

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← 在 close() 之前调用
}
menuInstance.close();
```

### 技术限制

系统使用 `player.stopAllSounds()` 是因为:
- `player.stopSound(key)` **对自定义资源包声音无效**
- `player.stopSound(key, category)` **同样无效**
- `stopAllSounds()` 是**唯一可靠的解决方案**

这意味着关闭菜单时会停止玩家的**所有**声音，而不仅仅是菜单声音。这是 Minecraft/Bukkit 的限制，不是 CraftMenu 的问题。

### 替代方案: 手动控制

如果您不希望自动停止声音，请在菜单中使用开关按钮:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # 手动停止音乐
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## 视觉操作

### visual_change

无条件更改视觉状态。

```yaml
- action: visual_change
  to: hover
```

### scale

临时动画化控件缩放。

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 原始大小的 120%
  duration: 300                     # 持续时间（毫秒）
```

### scale_reset

将缩放重置为原始大小。

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

完全移除控件（视觉效果、碰撞、声音）。

```yaml
- action: hide_widget
  widget: fov_warning  # 要隐藏的控件名称
```

**注意**: 隐藏的控件在重新打开菜单前无法恢复。

---

## 完整示例: 具有所有功能的菜单

```yaml
menu:
  name: complete_example
  title: '&b&l完整菜单示例'
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
      message: "&e⚠ &c光标已到达边缘！"

  widgets:
    # 带背景音乐的按钮
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

    # 带完整反馈的操作按钮
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
          command: '[MESSAGE] &a正在开始游戏...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # 带声音反馈的光标
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

最后更新: 2026-02-02
插件版本: 2.0
