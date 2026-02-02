# 事件系统

CraftMenu 使用事件系统处理用户与控件的交互。

## 事件类型

| 事件 | 触发条件 | 可用于 |
|-------|---------|--------------|
| `on_menu_open` | 菜单打开 | 所有控件 |
| `on_cursor_hover` | 光标进入控件 | IMAGE, TEXT |
| `on_cursor_hover_exit` | 光标离开控件 | IMAGE, TEXT |
| `on_cursor_click` | 控件被点击 | IMAGE, TEXT |
| `on_click_any` | 任何点击 | 仅限 CURSOR |

## 基本事件结构

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
          command: "[MESSAGE] &a您点击了！"
```

## 操作类型

### Sound 操作

播放声音效果:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Minecraft 声音
  volume: 1.0                       # 0.0 到 1.0
  pitch: 1.0                        # 0.5 到 2.0
```

自定义声音:
```yaml
- action: sound
  file: template/click.ogg         # 自定义声音文件
```

### Animation 操作

触发动画:

```yaml
- action: animation
  effect: scale                    # 动画类型
  duration: 200                    # 持续时间（毫秒）
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 目标缩放
  easing_style: ease_out           # 缓动函数
  priority: false                  # 是否阻止其他操作？
```

### Command 操作

执行命令:

```yaml
- action: command
  command: "[MESSAGE] 你好！"      # 特殊命令
  delay: 0                         # 延迟（毫秒）
```

**特殊命令:**
- `[MESSAGE] text` - 向玩家发送消息
- `[TELEPORT] world x y z yaw pitch` - 传送玩家
- `[CLOSE]` - 关闭菜单
- `[PLAY_MUSIC] path/file.ogg` - 播放背景音乐
- `[STOP_MUSIC]` - 停止音乐
- `[OPEN_URL] https://...` - 打开 URL（可点击）
- `[PLAYER] /command` - 以玩家身份执行命令
- `[CONSOLE] /command` - 以控制台身份执行命令

### State 操作

更改控件状态:

```yaml
# 在状态之间切换
- action: toggle_state
  states: [normal, disabled]

# 设置特定状态
- action: set_state
  state: disabled
```

### Visual Change 操作

更改控件外观:

```yaml
- action: visual_change
  to: hover

# 条件更改
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Hide Widget 操作

从视图中移除控件:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### Stop Animation 操作

停止正在运行的动画:

```yaml
- action: stop_animation
  animation_type: rotate          # 要停止的动画
```

## 事件执行顺序

操作按列出的顺序执行。为获得最佳效果:

1. 声音效果（即时反馈）
2. 状态更改
3. 命令
4. 动画（可能有延迟）

## 优先级动画

使用 `priority: true` 阻止其他操作直到动画完成:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # 阻止后续操作
    - action: command
      command: "[MESSAGE] 完成！"  # 在动画之后执行
```
