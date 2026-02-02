# CraftMenu 用户指南

欢迎阅读 CraftMenu 用户指南！CraftMenu 是一个先进的 Minecraft 3D 菜单系统，允许您创建在游戏世界中渲染的沉浸式交互菜单。

## 什么是 CraftMenu？

CraftMenu 改变了玩家与 Minecraft 菜单的交互方式。与传统的基于物品栏的菜单不同，CraftMenu 使用漂浮在游戏世界中的 TextDisplay 实体渲染精美的 3D 菜单。

## 主要功能

- **3D 菜单渲染** - 使用 TextDisplay 实体在游戏世界中渲染菜单
- **基于鼠标的交互** - 完整的光标控制，具有悬停和点击检测
- **自定义资源包生成** - 自动生成用于自定义图片和声音的资源包
- **动画系统** - 19 种动画类型和 6 种缓动函数
- **多语言支持** - 内置支持 20 种语言（英语、巴西葡萄牙语、欧洲葡萄牙语、西班牙语、法语、德语、意大利语、荷兰语、俄语、波兰语、土耳其语、乌克兰语、阿拉伯语、日语、韩语、中文、印地语、印尼语、泰语、越南语）
- **PlaceholderAPI 集成** - 在菜单中显示动态玩家数据
- **自动打开菜单** - 玩家加入或传送时自动打开菜单

## 快速开始

1. **安装插件** - 将 JAR 文件放入 `plugins/` 文件夹
2. **启动服务器** - CraftMenu 将生成默认配置
3. **生成资源包** - 运行 `/cm zip` 生成资源包
4. **打开菜单** - 使用 `/cm open template` 测试默认菜单

## Wiki 内容

- [安装指南](installation.md) - 设置和配置
- [命令参考](commands.md) - 所有可用命令
- [游戏内编辑器](editor.md) - 菜单和控件的可视化编辑器
- [创建菜单](menu-creation.md) - 如何创建自定义菜单
- [控件类型](widgets.md) - 可用的控件类型
- [事件系统](events.md) - 处理交互
- [动画](animations.md) - 动画类型和缓动
- [故障排除](troubleshooting.md) - 常见问题和解决方案

## 系统要求

- Minecraft 服务器 1.20.4+
- Paper、Spigot 或 Purpur
- Java 17 或更高版本
- PacketEvents 插件

## 支持

如需报告错误和功能请求，请访问我们的 GitHub Issues 页面。
