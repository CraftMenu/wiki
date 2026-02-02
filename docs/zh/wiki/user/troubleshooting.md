# 故障排除

CraftMenu 的常见问题和解决方案。

## 图片不显示

**症状:** 图片显示为 "?" 或缺失字符。

**解决方案:**

1. **重新生成资源包:**
   ```
   /cm zip
   ```

2. **检查图片位置:**
   - 图片必须在子文件夹中: `plugins/CraftMenu/images/folder/image.png`
   - 不能在根目录: `plugins/CraftMenu/images/image.png`

3. **验证图片格式:**
   - 仅支持 PNG 文件
   - 确保文件扩展名正确（`.png`，不是 `.PNG`）

4. **检查资源包是否已加载:**
   - 必须配置服务器资源包
   - 玩家必须接受资源包

5. **重载插件:**
   ```
   /cm reload
   ```

## 菜单无法打开

**症状:** `/cm open` 命令没有反应。

**解决方案:**

1. **检查菜单是否存在:**
   ```
   /cm list
   ```

2. **运行命令后检查控制台错误**

3. **验证 YAML 语法:**
   - 使用 YAML 验证器
   - 检查缩进是否正确

4. **确保生成位置有效:**
   - 世界必须已加载
   - 位置必须可访问

## 碰撞不工作

**症状:** 光标无法检测到控件。

**解决方案:**

1. **启用调试粒子:**
   ```
   /debugcollision toggle
   ```

2. **检查碰撞配置:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **增大碰撞盒大小**（如果太小）

4. **检查控件位置** - 碰撞可能有偏移

## 声音不播放

**症状:** 声音操作没有效果。

**解决方案:**

1. **自定义声音:**
   - 将 `.ogg` 文件放在 `plugins/CraftMenu/sounds/folder/`
   - 重新生成资源包: `/cm zip`

2. **Minecraft 声音:**
   - 使用正确格式: `minecraft:ui.button.click`

3. **检查操作配置中的音量设置**

## 性能问题

**症状:** 使用菜单时有延迟。

**解决方案:**

1. **优化图片:**
   ```
   /cm images scan
   /cm images fix --backup
   ```

2. **减少复杂菜单中的动画频率**

3. **禁用调试模式:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **增加更新间隔:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## 插件无法加载

**症状:** 启动时插件显示错误。

**解决方案:**

1. **检查 Java 版本:**
   - 需要 Java 17 或更高版本

2. **验证依赖:**
   - 必须安装 PacketEvents

3. **检查服务器版本:**
   - 需要 Minecraft 1.20.4+

4. **查看启动日志**中的具体错误

5. **尝试恢复:**
   ```
   /cm recover
   ```

## YAML 错误

**症状:** 错误提到 YAML 解析问题。

**常见问题:**

1. **缩进错误:**
   ```yaml
   # 错误
   widgets:
   my_widget:
     type: IMAGE

   # 正确
   widgets:
     my_widget:
       type: IMAGE
   ```

2. **特殊值缺少引号:**
   ```yaml
   # 错误 - & 有特殊含义
   title: &b你好

   # 正确
   title: "&b你好"
   ```

3. **列表格式错误:**
   ```yaml
   # 错误
   events:
     on_cursor_click:
       action: sound

   # 正确
   events:
     on_cursor_click:
       - action: sound
   ```

## 获取帮助

如果您仍然遇到问题:

1. 启用调试模式并检查控制台输出
2. 检查 GitHub issues 中的已知问题
3. 创建新 issue 并提供:
   - 服务器版本
   - 插件版本
   - 控制台日志
   - 配置文件（删除敏感数据）
