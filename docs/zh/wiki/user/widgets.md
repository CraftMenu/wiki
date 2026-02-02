# 控件类型

CraftMenu 支持三种类型的控件用于构建菜单。

## 控件类型概述

| 类型 | 描述 | 可交互 |
|------|-------------|-------------|
| IMAGE | 显示图片 | 是 |
| TEXT | 显示格式化文本 | 是 |
| CURSOR | 鼠标光标 | 特殊 |

## IMAGE 控件

用于按钮、背景和装饰元素。

### 基本图片

```yaml
my_image:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### 带状态的图片

```yaml
my_button:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### 状态覆盖

每个状态可以有 transform 和 collision 覆盖:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # 悬停时稍大
```

## TEXT 控件

显示支持 PlaceholderAPI 的格式化文本。

### 基本文本

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&b欢迎来到服务器！"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### 带占位符的文本

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7玩家: &f%player_name%\n&7等级: &a%player_level%"
      text-size: 0.8
```

### 多行文本

使用 `\n` 换行:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "第一行\n第二行\n第三行"
```

## CURSOR 控件

光标跟随玩家鼠标移动。

### 基本光标

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## Transform 属性

所有控件都支持 transform 属性:

```yaml
transform:
  position:
    x: 0.0    # 水平偏移
    y: 0.0    # 垂直偏移
    z: 0.0    # 深度偏移
  size:
    x: 0.1    # 宽度缩放
    y: 0.1    # 高度缩放
    z: 0.1    # 深度缩放
  rotation:
    pitch: 0  # X 轴旋转
    yaw: 0    # Y 轴旋转
    roll: 0   # Z 轴旋转
```

## Collision 属性

启用或自定义碰撞检测:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## 控件排序

控件按照在 YAML 文件中出现的顺序渲染。后面的控件显示在前面的控件上方。
