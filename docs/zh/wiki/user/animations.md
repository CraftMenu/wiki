# 动画系统

CraftMenu 提供了强大的动画系统，具有 19 种动画类型和 6 种缓动函数。

## 动画类型

### 移动动画

| 类型 | 描述 |
|------|-------------|
| `translate` | 移动控件位置 |
| `bounce` | 弹跳效果 |
| `float` | 轻柔的上下漂浮 |
| `orbit` | 圆形轨道运动 |

### 旋转动画

| 类型 | 描述 |
|------|-------------|
| `rotate` | 持续旋转 |
| `swing` | 钟摆摆动 |
| `flip` | 180 度翻转 |
| `wobble` | 摇摆旋转 |
| `spiral` | 螺旋运动 |

### 缩放动画

| 类型 | 描述 |
|------|-------------|
| `scale` | 改变大小 |
| `pulse` | 有节奏的脉动 |
| `squeeze` | 压缩/拉伸 |
| `zoom_in` | 缩放效果 |

### 视觉动画

| 类型 | 描述 |
|------|-------------|
| `fade` | 不透明度淡入淡出 |
| `glow` | 发光效果 |
| `shake` | 震动 |
| `jiggle` | 抖动 |
| `wave` | 波浪运动 |

## 基本动画用法

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## 动画属性

### 通用属性

```yaml
- action: animation
  effect: pulse           # 动画类型（必需）
  duration: 1000          # 持续时间（毫秒）
  easing_style: ease_out  # 缓动函数
  intensity: 1.0          # 效果强度
  priority: false         # 是否阻止其他操作？
```

### 特定效果属性

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # 度数
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = 淡出, false = 淡入
```

## 缓动函数

| 缓动 | 描述 |
|--------|-------------|
| `linear` | 恒定速度 |
| `ease_in` | 缓慢开始 |
| `ease_out` | 缓慢结束 |
| `ease_in_out` | 缓慢开始和结束 |
| `bounce` | 弹跳效果 |
| `elastic` | 弹性效果 |

### 缓动示例

```yaml
# 平滑悬停效果
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# 弹跳点击反馈
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## 动画优先级

使用 `priority: true` 确保动画在其他操作之前完成:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # 阻止下一个操作

    - action: command
      command: "[CLOSE]"      # 等待动画完成
```

## 停止动画

```yaml
- action: stop_animation
  animation_type: rotate      # 停止特定类型
  # 或
  type: all                   # 停止所有动画
```

## 持续动画

在控件配置中定义持续运行的动画:

```yaml
widgets:
  spinning_icon:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## 最佳实践

1. 保持持续时间在 500ms 以下以获得响应式反馈
2. 悬停效果使用 `ease_out`
3. 点击反馈使用 `bounce`
4. 避免在一个控件上同时运行多个动画
5. 在不同硬件上测试动画
