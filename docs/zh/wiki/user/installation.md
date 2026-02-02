# 安装指南

本指南介绍如何在您的 Minecraft 服务器上安装和配置 CraftMenu。

## 前提条件

在安装 CraftMenu 之前，请确保您具备:

- 运行 Paper、Spigot 或 Purpur 1.20.4+ 的 Minecraft 服务器
- 已安装 Java 17 或更高版本
- 已安装 PacketEvents 插件

## 安装步骤

### 1. 下载 CraftMenu

从发布页面下载最新的 CraftMenu JAR 文件。

### 2. 安装依赖

确保在 CraftMenu 之前将 PacketEvents 安装到 `plugins/` 文件夹。

### 3. 安装 CraftMenu

将 `CraftMenu.jar` 放入服务器的 `plugins/` 文件夹。

### 4. 启动服务器

启动服务器。CraftMenu 将创建其配置文件:

```
plugins/CraftMenu/
├── config.yml           # 全局配置
├── menus/              # 菜单模板
│   └── template.yml    # 默认示例菜单
├── images/             # 自定义图片
│   └── template/       # 模板菜单的图片
├── sounds/             # 自定义声音
│   └── template/       # 模板菜单的声音
└── language/           # 语言文件
```

### 5. 生成资源包

运行 `/cm zip` 生成资源包。这将创建:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. 配置资源包分发

您有几个选项:

**选项 A: 服务器资源包**
```properties
# 在 server.properties 中
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**选项 B: 手动分发**
将 ZIP 文件分享给玩家，让他们手动安装。

**选项 C: 使用资源包插件**
使用 ItemsAdder 或 Oraxen 等插件进行自动分发。

## 配置

### 基本设置

编辑 `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "zh_CN"          # zh_CN, en_US 或 pt_BR
    debug: false               # 启用以进行故障排除

  resourcepack:
    auto-generate: true        # 启动时自动生成
    compression: true          # 压缩 ZIP 文件
```

### 性能设置

```yaml
craftmenu:
  performance:
    async-loading: true        # 异步加载菜单
    cache-enabled: true        # 缓存菜单模板
    update-interval: 1         # 更新间隔 tick 数
```

## 验证安装

1. 运行 `/cm help` 查看可用命令
2. 运行 `/cm list` 查看已加载的菜单
3. 运行 `/cm open template` 测试默认菜单

## 下一步

- [创建您的第一个菜单](menu-creation.md)
- [了解控件](widgets.md)
- [配置事件](events.md)
