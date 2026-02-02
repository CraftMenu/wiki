# 命令参考

CraftMenu 提供了一套全面的命令用于管理菜单。

## 基本命令

所有命令使用 `/craftmenu`（别名: `/cm`）。

## 通用命令

### 帮助
```
/cm bangzhu [command]
```
显示所有命令或特定命令的帮助信息。

### 列出菜单
```
/cm liebiao
```
列出所有已加载的菜单模板。

### 插件信息
```
/cm xinxi
```
显示插件版本和统计信息。

## 菜单命令

### 打开菜单
```
/cm dakai <menu_name> [player]
```
为自己或其他玩家打开菜单。

**示例:**
- `/cm dakai template` - 为自己打开 template 菜单
- `/cm dakai lobby Steve` - 为玩家 Steve 打开 lobby 菜单

### 关闭菜单
```
/cm guanbi [player]
```
关闭自己或其他玩家的活动菜单。

### 创建菜单
```
/cm chuangjian <menu_name>
```
在您当前位置创建新的菜单模板。

### 删除菜单
```
/cm shanchu <menu_name>
```
删除菜单模板。

## 资源包命令

### 生成资源包
```
/cm dabao
```
从 CraftMenu 文件夹中的图片和声音生成资源包。

### 图片命令
```
/cm tupian saomiao
/cm tupian xiufu [--backup]
/cm tupian resize <image_path> <target_size>
/cm tupian beifen
/cm tupian huifu <backup_name>
/cm tupian liebiao
/cm tupian beifenliebiao
```
- `saomiao` - 扫描超大图片
- `xiufu` - 自动优化超大图片
- `resize` - 将特定图片调整为目标大小（16-4096 像素）
- `beifen` - 创建图片备份
- `huifu` - 从备份恢复图片
- `liebiao` - 列出 images 文件夹中的所有图片
- `beifenliebiao` - 列出所有可用备份

## 配置命令

### 重载
```
/cm chongzai
```
重新加载所有配置和菜单模板。

### 语言
```
/cm yuyan <lang>
/cm yuyan liebiao
```
- `/cm yuyan <lang>` - 直接更改插件语言（无需 "set"）
- `/cm yuyan liebiao` - 列出所有可用语言

可用语言:
- `en_US` - 英语
- `pt_BR` - 葡萄牙语（巴西）
- `es_ES` - 西班牙语
- `fr_FR` - 法语
- `de_DE` - 德语
- `it_IT` - 意大利语
- `nl_NL` - 荷兰语
- `ru_RU` - 俄语
- `pl_PL` - 波兰语
- `tr_TR` - 土耳其语
- `uk_UA` - 乌克兰语
- `ar_SA` - 阿拉伯语
- `ja_JP` - 日语
- `ko_KR` - 韩语
- `zh_CN` - 中文（简体）
- `hi_IN` - 印地语
- `id_ID` - 印尼语
- `th_TH` - 泰语
- `vi_VN` - 越南语

## 调试命令

### 粒子调试
```
/cm tiaoshi lizi
/cm tiaoshi lizi daxiao <value>
```
- `/cm tiaoshi lizi` - 切换所有调试粒子（碰撞盒、光标轨迹、控件中心）
- `/cm tiaoshi lizi daxiao <value>` - 设置粒子大小（0.001 到 2.0）

### 网格调试
```
/cm tiaoshi wangge
/cm tiaoshi wangge shuzi
```
- `/cm tiaoshi wangge` - 切换网格可视化
- `/cm tiaoshi wangge shuzi` - 切换网格数字显示

### 健康检查
```
/cm jiankang
```
显示组件健康状态。

### 恢复
```
/cm huifu
```
尝试从错误中恢复。

## 编辑器命令

打开菜单和小部件的游戏内可视化编辑器。

### 打开编辑器
```
/cm bianji
/cm bianji <菜单名称>
```
- `/cm bianji` - 打开编辑器主页
- `/cm bianji <菜单名称>` - 打开特定菜单的编辑器

**所需权限:** `craftmenu.admin`

## 权限

| 权限 | 描述 |
|------------|-------------|
| `craftmenu.use` | 基本使用（打开菜单） |
| `craftmenu.admin` | 管理员命令 |
| `craftmenu.open` | 打开菜单 |
| `craftmenu.create` | 创建菜单 |
| `craftmenu.reload` | 重载插件 |
| `craftmenu.debug` | 调试命令 |
