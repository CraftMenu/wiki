# 创建菜单

本指南介绍如何在 CraftMenu 中创建自定义菜单。

## 菜单结构

菜单在 `plugins/CraftMenu/menus/` 中的 YAML 文件中定义。

### 基本菜单模板

```yaml
menu:
  name: my_menu
  title: "&b&l我的自定义菜单"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # 在此定义控件
```

## 菜单属性

### 基本属性

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `name` | String | 菜单的唯一标识符 |
| `title` | String | 显示标题（支持颜色代码） |
| `main` | Boolean | 是否为主菜单？ |
| `open-on-join` | Boolean | 玩家加入世界时自动打开 |
| `open-on-teleport` | Boolean | 玩家传送到世界时自动打开 |

### 位置

```yaml
location:
  world: world               # 世界名称
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # 水平旋转 (-180 到 180)
    pitch: 0.0               # 垂直旋转 (-90 到 90)
```

### 设置

```yaml
settings:
  cursor-sensitivity: 1.0    # 鼠标灵敏度（1.0 = 正常）
  max-yaw-offset: 61.0       # 水平限制（度）
  max-pitch-offset: 36.0     # 垂直限制（度）
  camera-lock-enabled: true  # 菜单打开时锁定玩家相机
  camera-lock-strength: 0.4  # 锁定强度 (0.0-1.0)
```

### 可见性设置

```yaml
settings:
  visibility:
    hide_players: false      # 隐藏其他玩家
    hide_mobs: false         # 隐藏生物
    hide_items: false        # 隐藏掉落物品
    whitelist_players: []    # 保持可见的玩家
```

## 添加控件

控件是菜单中的交互元素。

### 图片控件

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### 文本控件

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&l欢迎！"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## 使用命令快速创建

使用 `/cm create <name>` 在当前位置快速创建菜单。

## 添加自定义图片

1. 创建文件夹: `plugins/CraftMenu/images/my_menu/`
2. 将 PNG 图片添加到此文件夹
3. 运行 `/cm zip` 重新生成资源包
4. 引用图片为 `my_menu/image_name.png`

## 测试菜单

1. 保存 YAML 文件
2. 运行 `/cm reload`
3. 运行 `/cm open my_menu`

## 最佳实践

- 使用子文件夹按菜单组织图片
- 保持图片大小合理（按钮最大 128x128）
- 部署前彻底测试菜单
- 使用描述性的控件名称
- 为复杂配置添加注释
