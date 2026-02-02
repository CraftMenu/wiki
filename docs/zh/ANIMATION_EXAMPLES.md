# 完整动画指南 - CraftMenu

本文档介绍 CraftMenu 中所有可用的动画类型，以及实用的 YAML 使用示例。

---

## 目录

1. [基础动画](#基础动画)
2. [移动动画](#移动动画)
3. [高级动画](#高级动画)
4. [组合动画](#组合动画)
5. [通用属性](#通用属性)

---

## 基础动画

### SCALE - 大小变化

更改控件在 X、Y、Z 轴上的大小。

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 原始大小的 120%
    easing_style: out
```

**属性**:
- `scaleX`: X 轴缩放（默认: intensity）
- `scaleY`: Y 轴缩放（默认: intensity）
- `scaleZ`: Z 轴缩放（默认: intensity）

---

### ROTATE - 旋转

绕 X、Y、Z 轴旋转控件。

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Y 轴完整旋转
    easing_style: in_out
```

**属性**:
- `rotationX`: X 轴旋转角度
- `rotationY`: Y 轴旋转角度
- `rotationZ`: Z 轴旋转角度

---

### TRANSLATE - 平移

将控件移动到新位置。

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # 以方块为单位的位移
    easing_style: out
```

**属性**:
- `offsetX`: X 轴位移
- `offsetY`: Y 轴位移
- `offsetZ`: Z 轴位移

---

### FADE - 淡入/淡出

控制控件的不透明度/可见性。

```yaml
# 淡出（消失）
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = 淡出, false = 淡入
    easing_style: in

# 淡入（出现）
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**属性**:
- `fadeOut`: true 消失，false 出现

---

## 移动动画

### PULSE - 脉动

具有节奏缩放的呼吸/心跳效果。

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # 持续动画
    easing_style: in_out
```

---

### BOUNCE - 弹跳

模拟球体垂直弹跳物理效果。

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # 跳跃高度
    easing_style: out
```

---

### SWING - 摆动

钟摆/秋千运动。

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # 摆动幅度
    loop: true
    easing_style: in_out
```

---

### FLOAT - 漂浮

平滑的垂直上下移动。

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # 漂浮高度
    loop: true
    easing_style: in_out
```

---

### SHAKE - 震动

快速随机振动。

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # 振动强度
    easing_style: linear
```

---

### JIGGLE - 弹性抖动

更柔和、更可控的带弹性效果的抖动。

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # 抖动幅度
    easing_style: out
```

---

## 高级动画

### SLIDE - 从屏幕外滑入

控件从屏幕外滑入。

```yaml
# 从左侧滑入
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # 以方块为单位的距离
    easing_style: out

# 从顶部滑入
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**属性**:
- `direction`: 进入方向 (left, right, top, bottom, front, back)
- `distance`: 以方块为单位的初始距离（默认: intensity * 2.0）

**常见用途**: 适用于带有 CRITICAL 优先级的 `on_menu_open` 动画。

---

### ZOOM_IN - 带过冲的进入

从 0 缩放到 1 并带有"过冲"效果（超过后返回）。

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # 返回到 1.0 前的最大缩放
    easing_style: out
```

**属性**:
- `overshoot`: 稳定在 1.0 前的最大缩放（默认: 1.2）

**常见用途**: `on_menu_open` 中的戏剧性进入动画。

---

### SQUEEZE - 压缩效果

压扁一个轴同时扩展其他轴。

```yaml
# 水平压缩
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # 压缩强度
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# 垂直压缩
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**属性**:
- `axis`: 要压缩的轴 (x, y, z)
- `intensity`: 压缩强度

---

### FLIP - 旋转 180°

在特定轴上旋转 180 度。

```yaml
# 垂直翻转（像翻牌）
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# 水平翻转
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**属性**:
- `axis`: 旋转轴 (x, y, z)

**常见用途**: 状态转换，显示替代内容。

---

### WOBBLE - 果冻摆动

左右"果冻"风格的摆动。

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # 摆动强度
    loop: true
    easing_style: in_out
```

**常见用途**: 注意动画，悬停反馈。

---

### ORBIT - 轨道运动

控件绕中心点进行圆周运动。

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # 以方块为单位的轨道半径
    speed: 1.0  # 速度倍数
    loop: true
    easing_style: linear
```

**属性**:
- `radius`: 轨道半径（默认: intensity * 0.5）
- `speed`: 旋转速度（默认: 1.0）

**常见用途**: 装饰性背景动画。

---

### SPIRAL - 螺旋运动

结合旋转和圆周运动。

```yaml
# 顺时针螺旋
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # 螺旋半径
    clockwise: true  # 顺时针方向
    loop: true
    easing_style: linear

# 逆时针螺旋
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**属性**:
- `radius`: 螺旋半径（默认: intensity * 0.3）
- `clockwise`: 运动方向 (true/false)

---

### WAVE - 波浪运动

使用正弦函数的平滑波浪。

```yaml
# 水平波浪
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # 波浪幅度
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# 垂直波浪
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**属性**:
- `axis`: 波浪方向 (horizontal, vertical)

---

### GLOW - 脉动发光

结合微妙的脉动和不透明度变化。

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # 发光强度
    loop: true
    easing_style: in_out
```

**常见用途**: 高亮重要元素，注意指示器。

---

## 组合动画

您可以按顺序或同时组合多个动画。

### 示例 1: 戏剧性进入

```yaml
on_menu_open:
  # 1. 从左侧滑入
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - 阻止后续操作
      easing_style: out

  # 2. 带过冲的缩放（在滑动之后执行）
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. 持续漂浮（在缩放之后开始）
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### 示例 2: 复杂的交互按钮

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # 悬停声音
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # 视觉变化
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # 微妙脉动
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # 恢复视觉
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # 点击声音
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # 动画序列
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # 命令（在动画之后执行）
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### 示例 3: 带多个动画的装饰控件

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # 圆形轨道
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # 轨道时旋转
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # 脉动发光
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## 通用属性

所有动画都支持这些属性:

### type
操作类型（始终为 `animation`）。

### effect
动画名称（scale, rotate, pulse 等）。

### duration
持续时间（毫秒）。

```yaml
duration: 1000  # 1 秒
```

### intensity
通用动画强度（含义因类型而异）。

```yaml
intensity: 0.5  # 默认强度的一半
```

### loop
动画是否应该无限重复。

```yaml
loop: true  # 持续动画
loop: false # 单次动画（默认）
```

### delay
动画开始前的延迟（毫秒）。

```yaml
delay: 500  # 开始前等待 500ms
```

### easing_style
用于动画平滑的缓动类型。

```yaml
easing_style: linear      # 恒定速度
easing_style: in          # 开始时加速
easing_style: out         # 结束时减速
easing_style: in_out      # 加速和减速
```

### priority
动画优先级（影响中断）。

```yaml
priority: true   # CRITICAL - 永不中断，阻止后续操作
priority: false  # INTERRUPTIBLE - 可以中断（默认）
```

**注意**: 持续动画（`loop: true`）始终为 BACKGROUND 优先级。

---

## 按上下文的使用指南

### on_menu_open 的动画

```yaml
on_menu_open:
  - effect: slide       # 滑入进入
  - effect: zoom_in     # 带过冲的进入
  - effect: fade        # 柔和淡入
```

### on_cursor_hover 的动画

```yaml
on_cursor_hover:
  - effect: scale       # 增大尺寸
  - effect: pulse       # 轻柔脉动
  - effect: glow        # 高亮发光
  - effect: wobble      # 注意摆动
```

### on_cursor_click 的动画

```yaml
on_cursor_click:
  - effect: squeeze     # 压力反馈
  - effect: bounce      # 确认跳跃
  - effect: shake       # 冲击震动
  - effect: flip        # 翻转/显示
```

### 持续动画（装饰性）

```yaml
continuous-animations:
  - effect: float       # 轻柔漂浮
  - effect: rotate      # 持续旋转
  - effect: orbit       # 轨道运动
  - effect: spiral      # 装饰性螺旋
  - effect: wave        # 波浪运动
  - effect: glow        # 脉动发光
```

---

## 快速参考表

| 动画 | 类型 | 主要用途 | 循环? | 默认优先级 |
|-----------|------|----------|-------|------------------|
| SCALE | 变换 | 悬停, 点击 | 否 | INTERRUPTIBLE |
| ROTATE | 变换 | 装饰性 | 是 | BACKGROUND |
| TRANSLATE | 变换 | 移动 | 否 | CRITICAL |
| PULSE | 移动 | 持续 | 是 | BACKGROUND |
| BOUNCE | 移动 | 点击 | 否 | INTERRUPTIBLE |
| SWING | 移动 | 悬停 | 是 | INTERRUPTIBLE |
| FLOAT | 移动 | 持续 | 是 | BACKGROUND |
| SHAKE | 移动 | 点击 | 否 | INTERRUPTIBLE |
| FADE | 视觉 | 进入/退出 | 否 | CRITICAL |
| SLIDE | 高级 | 进入 | 否 | CRITICAL |
| ZOOM_IN | 高级 | 进入 | 否 | CRITICAL |
| SQUEEZE | 高级 | 点击 | 否/是 | INTERRUPTIBLE |
| FLIP | 高级 | 状态 | 否 | CRITICAL |
| WOBBLE | 高级 | 悬停 | 是 | BACKGROUND |
| ORBIT | 高级 | 装饰性 | 是 | BACKGROUND |
| SPIRAL | 高级 | 装饰性 | 是 | BACKGROUND |
| WAVE | 高级 | 装饰性 | 是 | BACKGROUND |
| JIGGLE | 高级 | 悬停 | 否 | INTERRUPTIBLE |
| GLOW | 高级 | 高亮 | 是 | BACKGROUND |

---

**最后更新**: 2025-10-15
**插件版本**: 2.0
**作者**: Zodunix
