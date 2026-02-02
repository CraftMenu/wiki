# Huong Dan Cai Dat

Huong dan nay bao gom viec cai dat va cau hinh CraftMenu tren server Minecraft cua ban.

## Yeu Cau Truoc

Truoc khi cai dat CraftMenu, dam bao ban co:

- Server Minecraft chay Paper, Spigot, hoac Purpur 1.20.4+
- Java 17 hoac cao hon da cai dat
- Plugin PacketEvents da cai dat

## Cac Buoc Cai Dat

### 1. Tai CraftMenu

Tai file JAR CraftMenu moi nhat tu trang releases.

### 2. Cai Dat Dependencies

Dam bao PacketEvents duoc cai dat trong thu muc `plugins/` truoc CraftMenu.

### 3. Cai Dat CraftMenu

Dat file `CraftMenu.jar` vao thu muc `plugins/` cua server.

### 4. Khoi Dong Server

Khoi dong server cua ban. CraftMenu se tao cac file cau hinh:

```
plugins/CraftMenu/
+-- config.yml           # Cau hinh toan cuc
+-- menus/              # Cac template menu
|   +-- template.yml    # Menu vi du mac dinh
+-- images/             # Hinh anh tuy chinh
|   +-- template/       # Hinh anh cho menu template
+-- sounds/             # Am thanh tuy chinh
|   +-- template/       # Am thanh cho menu template
+-- language/           # Cac file ngon ngu
```

### 5. Tao Resource Pack

Chay `/cm goi` de tao resource pack. Dieu nay tao:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Cau Hinh Phan Phoi Resource Pack

Ban co nhieu tuy chon:

**Tuy Chon A: Server Resource Pack**
```properties
# Trong server.properties
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Tuy Chon B: Phan Phoi Thu Cong**
Chia se file ZIP voi nguoi choi va de ho cai dat thu cong.

**Tuy Chon C: Su Dung Plugin Resource Pack**
Su dung cac plugin nhu ItemsAdder hoac Oraxen de phan phoi tu dong.

## Cau Hinh

### Cai Dat Co Ban

Chinh sua `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "vi_VN"          # en_US, pt_BR, hoac vi_VN
    debug: false               # Bat de xu ly su co

  resourcepack:
    auto-generate: true        # Tu dong tao khi khoi dong
    compression: true          # Nen file ZIP
```

### Cai Dat Hieu Suat

```yaml
craftmenu:
  performance:
    async-loading: true        # Tai menu khong dong bo
    cache-enabled: true        # Cache cac template menu
    update-interval: 1         # Tick giua cac lan cap nhat
```

## Xac Minh Cai Dat

1. Chay `/cm trogiup` de xem cac lenh kha dung
2. Chay `/cm danhsach` de xem cac menu da tai
3. Chay `/cm mo template` de kiem tra menu mac dinh

## Cac Buoc Tiep Theo

- [Tao menu dau tien cua ban](menu-creation.md)
- [Tim hieu ve widget](widgets.md)
- [Cau hinh su kien](events.md)
