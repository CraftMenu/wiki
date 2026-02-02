# CraftMenu - 快速入门

## 5分钟指南

本指南将帮助您在5分钟内从零开始创建一个可用的菜单。

---

## 1. 安装 (1分钟)

1. **下载**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (依赖项)

2. **安装**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **启动服务器**

4. **验证**:
   ```
   /cm info
   ```

---

## 2. 创建您的第一个菜单 (2分钟)

1. **在游戏中**，前往所需位置
2. 运行:
   ```
   /cm create mymenu
   ```

3. **菜单已创建！** 文件生成于:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. 添加图片 (1分钟)

1. **创建文件夹**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **添加 PNG 图片** (64x64 或 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **生成资源包**:
   ```
   /cm zip
   ```

---

## 4. 配置菜单 (1分钟)

编辑 `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&l我的第一个菜单'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # 您创建菜单的位置
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # 简单按钮 (使用带有悬停/点击事件的 IMAGE)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← 您的图片
        hover:
          type: image
          value: mymenu/button-hover.png # ← 悬停图片
        fallback:
          type: text
          value: "点击我"               # 如果图片加载失败
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
          command: '[MESSAGE] &a您点击了按钮！'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # 光标
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← 您的图片
        fallback:
          type: text
          value: "§f→"
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
          volume: 0.3
```

---

## 5. 测试

1. **重载**:
   ```
   /cm reload
   ```

2. **打开菜单**:
   ```
   /cm open mymenu
   ```

3. **移动鼠标** 控制光标
4. **点击** 按钮

---

## 检查清单

- [ ] 插件已安装并正常运行
- [ ] 使用 `/cm create` 创建菜单
- [ ] 图片已添加到 `/images/mymenu/`
- [ ] 使用 `/cm zip` 生成资源包
- [ ] 在 YAML 中配置菜单
- [ ] 使用 `/cm open mymenu` 测试菜单
- [ ] 客户端已应用资源包

---

## 常见问题

### "菜单未加载"

```bash
/cm reload
/cm list  # 检查菜单是否出现
```

### 光标不显示

**解决方案**: 检查光标是否在 YAML 中配置并设置了视觉效果

### 图片显示 "?"

```bash
/cm images scan    # 检查图片是否被找到
/cm zip            # 重新生成资源包
/cm reload         # 重载
```

### 资源包未下载

玩家需要:
1. 手动安装: 复制 `/plugins/CraftMenu/craftmenu.zip` 到 `.minecraft/resourcepacks/`
2. 或在 `server.properties` 中配置 (需要网络托管)

---

## 下一步

1. [完整菜单文档](MENU_CREATION.md)
3. [高级功能](FEATURES.md)

---

## 实用资源

- **示例图片**: 搜索 "minecraft UI icons" 或自己创建
- **推荐尺寸**: 64x64, 128x128
- **格式**: 带透明度的 PNG
- **Minecraft 声音**: [完整列表](https://minecraft.fandom.com/wiki/Sounds.json)

---

最后更新: 2026-02-02
