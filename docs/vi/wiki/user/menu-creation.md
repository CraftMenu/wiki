# Tao Menu

Huong dan nay huong dan cach tao cac menu tuy chinh trong CraftMenu.

## Cau Truc Menu

Menu duoc dinh nghia trong cac file YAML tai `plugins/CraftMenu/menus/`.

### Mau Menu Co Ban

```yaml
menu:
  name: menu_cua_toi
  title: "&b&lMenu Tuy Chinh"
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
    # Dinh nghia widget o day
```

## Thuoc Tinh Menu

### Thuoc Tinh Co Ban

| Thuoc Tinh | Kieu | Mo Ta |
|------------|------|-------|
| `name` | String | Dinh danh duy nhat cho menu |
| `title` | String | Tieu de hien thi (ho tro ma mau) |
| `main` | Boolean | Day co phai menu chinh khong? |
| `open-on-join` | Boolean | Tu dong mo khi nguoi choi vao the gioi |
| `open-on-teleport` | Boolean | Tu dong mo khi nguoi choi teleport den the gioi |

### Vi Tri

```yaml
location:
  world: world               # Ten the gioi
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Xoay ngang (-180 den 180)
    pitch: 0.0               # Xoay doc (-90 den 90)
```

### Cai Dat

```yaml
settings:
  cursor-sensitivity: 1.0    # Do nhay chuot (1.0 = binh thuong)
  max-yaw-offset: 61.0       # Gioi han ngang theo do
  max-pitch-offset: 36.0     # Gioi han doc theo do
  camera-lock-enabled: true  # Khoa camera nguoi choi khi menu mo
  camera-lock-strength: 0.4  # Do manh khoa (0.0-1.0)
```

### Cai Dat Hien Thi

```yaml
settings:
  visibility:
    hide_players: false      # An nguoi choi khac
    hide_mobs: false         # An mob
    hide_items: false        # An vat pham tren mat dat
    whitelist_players: []    # Nguoi choi van hien thi
```

## Them Widget

Widget la cac phan tu tuong tac cua menu.

### Widget Hinh Anh

```yaml
widgets:
  nut_cua_toi:
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

### Widget Van Ban

```yaml
widgets:
  tieu_de:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lChao Mung!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Tao Nhanh Bang Lenh

Su dung `/cm tao <ten>` de nhanh chong tao menu tai vi tri hien tai cua ban.

## Them Hinh Anh Tuy Chinh

1. Tao thu muc: `plugins/CraftMenu/images/menu_cua_toi/`
2. Them hinh anh PNG vao thu muc nay
3. Chay `/cm goi` de tao lai resource pack
4. Tham chieu hinh anh nhu `menu_cua_toi/ten_hinh.png`

## Kiem Tra Menu

1. Luu file YAML
2. Chay `/cm tailai`
3. Chay `/cm mo menu_cua_toi`

## Cac Phuong Phap Tot Nhat

- Su dung thu muc con de to chuc hinh anh theo menu
- Giu kich thuoc hinh anh hop ly (toi da 128x128 cho nut)
- Kiem tra menu ky luong truoc khi trien khai
- Su dung ten widget mo ta ro rang
- Them chu thich cho cac cau hinh phuc tap
