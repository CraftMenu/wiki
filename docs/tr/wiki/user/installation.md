# Kurulum Rehberi

Bu rehber CraftMenu'nun Minecraft sunucunuza kurulumunu ve yapilandirilmasini kapsar.

## On Kosullar

CraftMenu'yu kurmadan once asagidakilere sahip oldugunuzdan emin olun:

- Paper, Spigot veya Purpur 1.20.4+ calistiran Minecraft sunucusu
- Java 17 veya ustü yuklu
- PacketEvents eklentisi yuklu

## Kurulum Adimlari

### 1. CraftMenu'yu Indirin

Son CraftMenu JAR dosyasini releases sayfasindan indirin.

### 2. Bagimliliklari Yukleyin

CraftMenu'dan once PacketEvents'in `plugins/` klasorunuzde yuklu oldugundan emin olun.

### 3. CraftMenu'yu Yukleyin

`CraftMenu.jar` dosyasini sunucunuzun `plugins/` klasorune yerlestirin.

### 4. Sunucuyu Baslatin

Sunucunuzu baslatin. CraftMenu yapilandirma dosyalarini olusturacak:

```
plugins/CraftMenu/
+-- config.yml           # Global yapilandirma
+-- menus/              # Menu sablonlari
|   +-- template.yml    # Varsayilan ornek menu
+-- images/             # Ozel gorseller
|   +-- template/       # Template menu icin gorseller
+-- sounds/             # Ozel sesler
|   +-- template/       # Template menu icin sesler
+-- language/           # Dil dosyalari
```

### 5. Kaynak Paketi Olusturun

Kaynak paketini olusturmak icin `/cm zip` calistirin. Bu olusturur:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Kaynak Paketi Dagitimini Yapilandirin

Birkac secenek var:

**Secenek A: Sunucu Kaynak Paketi**
```properties
# server.properties icinde
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Secenek B: Manuel Dagitim**
ZIP dosyasini oyuncularla paylasin ve manuel yuklemelerini isteyin.

**Secenek C: Kaynak Paketi Eklentisi Kullanin**
Otomatik dagitim icin ItemsAdder veya Oraxen gibi eklentiler kullanin.

## Yapilandirma

### Temel Ayarlar

`plugins/CraftMenu/config.yml` dosyasini duzenleyin:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "tr_TR"          # tr_TR, en_US veya pt_BR
    debug: false               # Sorun giderme icin etkinlestirin

  resourcepack:
    auto-generate: true        # Baslatmada otomatik olustur
    compression: true          # ZIP dosyasini sikistir
```

### Performans Ayarlari

```yaml
craftmenu:
  performance:
    async-loading: true        # Menuleri asenkron yukle
    cache-enabled: true        # Menu sablonlarini onbellekle
    update-interval: 1         # Guncellemeler arasi tick
```

## Kurulumu Dogrulama

1. Mevcut komutlari gormek icin `/cm help` calistirin
2. Yuklu menuleri gormek icin `/cm list` calistirin
3. Varsayilan menuyu test etmek icin `/cm open template` calistirin

## Sonraki Adimlar

- [Ilk menunuzu olusturun](menu-creation.md)
- [Widget'lar hakkinda bilgi edinin](widgets.md)
- [Olaylari yapilandirin](events.md)
