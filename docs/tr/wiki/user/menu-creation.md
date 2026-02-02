# Menu Olusturma

Bu rehber CraftMenu'da ozel menu olusturmayi kapsar.

## Menu Yapisi

Menuler `plugins/CraftMenu/menus/` icinde YAML dosyalarinda tanimlanir.

### Temel Menu Sablonu

```yaml
menu:
  name: my_menu
  title: "&b&lOzel Menum"
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
    # Widget tanimlari buraya
```

## Menu Ozellikleri

### Temel Ozellikler

| Ozellik | Tur | Aciklama |
|---------|-----|----------|
| `name` | String | Menu icin benzersiz tanimlayici |
| `title` | String | Goruntulenen baslik (renk kodlarini destekler) |
| `main` | Boolean | Bu ana menu mu? |
| `open-on-join` | Boolean | Oyuncu dunyaya katildiginda otomatik ac |
| `open-on-teleport` | Boolean | Oyuncu dunyaya isinlandiginda otomatik ac |

### Konum

```yaml
location:
  world: world               # Dunya adi
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Yatay rotasyon (-180 ila 180)
    pitch: 0.0               # Dikey rotasyon (-90 ila 90)
```

### Ayarlar

```yaml
settings:
  cursor-sensitivity: 1.0    # Fare hassasiyeti (1.0 = normal)
  max-yaw-offset: 61.0       # Derece olarak yatay limit
  max-pitch-offset: 36.0     # Derece olarak dikey limit
  camera-lock-enabled: true  # Menu acikken oyuncu kamerasini kilitle
  camera-lock-strength: 0.4  # Kilit gucu (0.0-1.0)
```

### Gorunurluk Ayarlari

```yaml
settings:
  visibility:
    hide_players: false      # Diger oyunculari gizle
    hide_mobs: false         # Mob'lari gizle
    hide_items: false        # Yerdeki esyalari gizle
    whitelist_players: []    # Gorunur kalan oyuncular
```

## Widget Ekleme

Widget'lar menunuzun interaktif elemanlaridir.

### Image Widget

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

### Text Widget

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lHos Geldiniz!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Komut ile Hizli Olusturma

Mevcut konumunuzda hizlica menu olusturmak icin `/cm create <ad>` kullanin.

## Ozel Gorseller Ekleme

1. Bir klasor olusturun: `plugins/CraftMenu/images/my_menu/`
2. PNG gorsellerinizi bu klasore ekleyin
3. Kaynak paketini yeniden olusturmak icin `/cm zip` calistirin
4. Gorsellere `my_menu/gorsel_adi.png` olarak referans verin

## Menunuzu Test Etme

1. YAML dosyanizi kaydedin
2. `/cm reload` calistirin
3. `/cm open my_menu` calistirin

## En Iyi Uygulamalar

- Gorselleri menuye gore duzenlemek icin alt klasorler kullanin
- Gorsel boyutlarini makul tutun (butonlar icin maksimum 128x128)
- Dagitmadan once menuleri kapsamli test edin
- Aciklayici widget isimleri kullanin
- Karmasik yapilandirmalara yorum ekleyin
