# He Thong Animation

CraftMenu cung cap he thong animation manh me voi 19 loai animation va 6 ham easing.

## Cac Loai Animation

### Animation Chuyen Dong

| Loai | Mo Ta |
|------|-------|
| `translate` | Di chuyen vi tri widget |
| `bounce` | Hieu ung nay |
| `float` | Troi nhe len xuong |
| `orbit` | Chuyen dong quy dao tron |

### Animation Xoay

| Loai | Mo Ta |
|------|-------|
| `rotate` | Xoay lien tuc |
| `swing` | Dung dua nhu con lac |
| `flip` | Lat 180 do |
| `wobble` | Xoay lung lay |
| `spiral` | Chuyen dong xoan oc |

### Animation Kich Thuoc

| Loai | Mo Ta |
|------|-------|
| `scale` | Thay doi kich thuoc |
| `pulse` | Dap theo nhip |
| `squeeze` | Nen/keo |
| `zoom_in` | Hieu ung zoom |

### Animation Hieu Ung

| Loai | Mo Ta |
|------|-------|
| `fade` | Mo dan opacity |
| `glow` | Hieu ung phat sang |
| `shake` | Chuyen dong rung |
| `jiggle` | Chuyen dong lung lay |
| `wave` | Chuyen dong song |

## Su Dung Animation Co Ban

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Thuoc Tinh Animation

### Thuoc Tinh Chung

```yaml
- action: animation
  effect: pulse           # Loai animation (bat buoc)
  duration: 1000          # Thoi luong tinh bang mili giay
  easing_style: ease_out  # Ham easing
  intensity: 1.0          # Cuong do hieu ung
  priority: false         # Chan cac hanh dong khac?
```

### Thuoc Tinh Theo Hieu Ung

**Xoay:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Do
```

**Kich Thuoc:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Mo Dan:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = mo dan ra, false = mo dan vao
```

## Cac Ham Easing

| Easing | Mo Ta |
|--------|-------|
| `linear` | Toc do khong doi |
| `ease_in` | Bat dau cham |
| `ease_out` | Ket thuc cham |
| `ease_in_out` | Bat dau va ket thuc cham |
| `bounce` | Hieu ung nay |
| `elastic` | Hieu ung lo xo |

### Vi Du Easing

```yaml
# Hieu ung hover muot ma
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Phan hoi click nay
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Uu Tien Animation

Su dung `priority: true` de dam bao animation hoan thanh truoc cac hanh dong khac:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Chan hanh dong tiep theo

    - action: command
      command: "[CLOSE]"      # Cho animation xong
```

## Dung Animation

```yaml
- action: stop_animation
  animation_type: rotate      # Dung loai cu the
  # hoac
  type: all                   # Dung tat ca animation
```

## Animation Lien Tuc

Dinh nghia animation chay lien tuc trong cau hinh widget:

```yaml
widgets:
  bieu_tuong_quay:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## Cac Phuong Phap Tot Nhat

1. Giu thoi luong duoi 500ms de phan hoi nhanh
2. Su dung `ease_out` cho hieu ung hover
3. Su dung `bounce` cho phan hoi click
4. Tranh nhieu animation dong thoi tren mot widget
5. Kiem tra animation tren cac cau hinh phan cung khac nhau
