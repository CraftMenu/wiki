# 在 CraftMenu 中创建菜单

## 目录
1. [通过命令创建](#通过命令创建)
2. [YAML 结构](#yaml-结构)
3. [可用控件](#可用控件)
4. [Transform（定位）](#transform定位)
5. [碰撞](#碰撞)
6. [事件和操作](#事件和操作)
7. [实用示例](#实用示例)

---

## 通过命令创建

### 推荐方法

1. **进入游戏**并前往您想要菜单的位置
2. **面向**玩家打开菜单时应该面对的方向
3. **运行**:
   ```
   /cm create menu_name
   ```

菜单将使用您当前的位置和旋转创建！

### 生成的结构

```
/plugins/CraftMenu/menus/menu_name.yml
```

**默认模板包含**:
- FOV 警告控件（可以删除）
- 已配置的光标
- 优化的设置
- 边界反馈
- **光标默认使用 TEXT** - 添加纹理后切换为 IMAGE

---

## YAML 结构

### 主要部分

```yaml
menu:
  name: String              # 菜单名称
  title: String             # 标题（支持 &codes）
  main: boolean             # 主菜单？（未来功能）
  location:                 # 世界位置
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # 设置
    # ...（见下文）
  widgets:                  # 菜单控件
    widget_name:
      # ...（见下文）
```

### 详细设置

```yaml
settings:
  # 音频
  background-music: "template/background.ogg"  # 背景音乐（可选）

  # 光标移动
  cursor-sensitivity: 1.0          # 灵敏度 (0.1 - 5.0)
  max-yaw-offset: 61.0             # 水平限制（度）
  max-pitch-offset: 36.0           # 垂直限制（度）
  mount-time: 100                  # 挂载时间（tick）

  # 菜单定位
  distance-multiplier: -0.01       # 距离乘数
  menu-distance: 0.3               # 菜单距离

  # 性能
  debug-mode: false                # 调试模式
  update-rate: 1                   # 更新频率
  collision-detection: true        # 激活碰撞检测

  # 相机
  camera-lock-enabled: true        # 锁定相机
  camera-lock-strength: 0.4        # 锁定强度 (0.0-1.0)

  # 边界反馈
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&l已达到光标限制！"
```

---

## 可用控件

### BUTTON

带悬停和点击的交互按钮。

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
      value: "▶ 播放"
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

静态图片（可以有悬停效果）。

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # 可选
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # 无交互
```

### TEXT

格式化文本。

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&l欢迎
        &7来到服务器
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # 文字大小
  shadow: true              # 阴影
  background-color: '#000000'  # 背景颜色（十六进制）
```

### CURSOR

鼠标控制的光标（**每个菜单只能有1个**）。

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
    position: {x: 0, y: 0, z: 1.0}  # 高 z = 在前面
    size: {x: 0.005, y: 0.005, z: 0.005}

  # 光标设置
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # 动画
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # 毫秒
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # 碰撞区域
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform（定位）

### Position

相对于菜单生成点的 3D 空间位置。

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: 左 (-) / 右 (+)
- **y**: 下 (-) / 上 (+)
- **z**: 远 (-) / 近 (+)

**提示**: z=0.1 适合背景，z=1.0 适合光标（始终可见）

### Size

控件大小。

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**典型比例**:
- 小按钮: `0.015`
- 中按钮: `0.02`
- 大按钮: `0.03`
- Logo: `0.04-0.05`
- 光标: `0.005`

### Rotation（可选）

旋转角度。

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**注意**: 通常不需要（ViewFrame 已经调整）

---

## 碰撞

### 基本配置

```yaml
collision:
  enabled: true                     # 启用碰撞
  position: {x: 0, y: 0, z: 0.1}   # 可选: 位置覆盖
  size: {x: 0.08, y: 0.04, z: 0.02} # 盒子大小
  rotation: {pitch: 0, yaw: 0, roll: 0}  # 可选
```

### 可视化调试

```yaml
collision:
  debug:
    enabled: true     # 显示粒子
    color: GREEN      # RED, BLUE, YELLOW, PURPLE 等
    size: 0.005       # 粒子大小
```

**全局启用**:
```
/cm debug particles toggle
/cm debug particles collision
```

### 碰撞提示

1. **视觉大小 ≠ 碰撞大小**
   - 碰撞可以更大以便于点击
   - 示例: 视觉 0.02，碰撞 0.08x0.04

2. **碰撞位置**
   - 如果未指定，使用 transform.position
   - 如果您想要不同的区域，请指定

3. **Collision-area（光标）**
   - 光标使用 `collision-area` 而不是 `collision`
   - 原因: 光标有特殊行为

---

## 事件和操作

### 可用事件

| 事件 | 触发时机 | 控件 |
|-------|------------|---------|
| `on_menu_open` | 菜单打开 | 全部 |
| `on_cursor_hover` | 光标进入 | Button, Image, Text |
| `on_cursor_hover_exit` | 光标离开 | Button, Image, Text |
| `on_cursor_click` | 控件被点击 | Button |
| `on_click_any` | 任何点击 | Cursor |

### 可用操作

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled 等
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
  file: "minecraft:ui.button.click"  # 或 "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # 毫秒
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
  delay: 1000  # 可选，毫秒
```

**特殊命令**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] 带有 &colors 的文本`
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

## 实用示例

### 带声音的简单按钮

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
      command: '[MESSAGE] &a按钮已点击！'
```

### 带传送的按钮

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
      command: '[MESSAGE] &e正在传送...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### 开关按钮（开/关）

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
      command: '[MESSAGE] &c已禁用！'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &a已启用！'
```

### 可点击的文本控件

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&l警告
        &7点击关闭
    hover:
      type: text
      value: |-
        &c&l警告
        &e&o点击关闭
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

## 最佳实践

1. **按层组织 (z)**:
   - z=0.05: 背景
   - z=0.1: 按钮
   - z=0.15: 覆盖层
   - z=1.0: 光标

2. **控件命名要描述性**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **始终包含 fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "文本"}
   ```

4. **碰撞区域大于视觉区域**:
   - 视觉: 0.02
   - 碰撞: 0.08x0.04（更容易点击）

5. **尽可能使用 Minecraft 声音**:
   - 不需要资源包
   - 无需额外配置即可使用

6. **增量测试**:
   - 一次添加 1 个控件
   - 频繁使用 `/cm reload`
   - 测试每个交互

---

最后更新: 2026-02-02
