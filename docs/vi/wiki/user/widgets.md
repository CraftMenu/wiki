# Cac Loai Widget

CraftMenu ho tro ba loai widget de xay dung menu.

## Tong Quan Cac Loai Widget

| Loai | Mo Ta | Tuong Tac |
|------|-------|-----------|
| IMAGE | Hien thi hinh anh | Co |
| TEXT | Hien thi van ban dinh dang | Co |
| CURSOR | Con tro chuot | Dac biet |

## Widget IMAGE

Dung cho cac nut, nen va cac yeu to trang tri.

### Hinh Anh Co Ban

```yaml
hinh_cua_toi:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Hinh Anh Voi Cac Trang Thai

```yaml
nut_cua_toi:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### Ghi De Trang Thai

Moi trang thai co the co cac ghi de transform va collision:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Lon hon mot chut khi hover
```

## Widget TEXT

Hien thi van ban dinh dang voi ho tro PlaceholderAPI.

### Van Ban Co Ban

```yaml
van_ban_chao_mung:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bChao mung den server!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Van Ban Voi Placeholder

```yaml
thong_tin_nguoi_choi:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Nguoi choi: &f%player_name%\n&7Cap do: &a%player_level%"
      text-size: 0.8
```

### Van Ban Nhieu Dong

Su dung `\n` de xuong dong:

```yaml
mo_ta:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Dong 1\nDong 2\nDong 3"
```

## Widget CURSOR

Con tro di chuyen theo chuot cua nguoi choi.

### Con Tro Co Ban

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## Thuoc Tinh Transform

Tat ca widget ho tro cac thuoc tinh transform:

```yaml
transform:
  position:
    x: 0.0    # Do lech ngang
    y: 0.0    # Do lech doc
    z: 0.0    # Do lech sau
  size:
    x: 0.1    # Ti le rong
    y: 0.1    # Ti le cao
    z: 0.1    # Ti le sau
  rotation:
    pitch: 0  # Xoay theo truc X
    yaw: 0    # Xoay theo truc Y
    roll: 0   # Xoay theo truc Z
```

## Thuoc Tinh Collision

Bat hoac tuy chinh phat hien va cham:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Thu Tu Widget

Widget duoc render theo thu tu xuat hien trong file YAML. Widget sau se hien thi phia truoc widget truoc.
