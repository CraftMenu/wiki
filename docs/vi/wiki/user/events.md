# He Thong Su Kien

CraftMenu su dung he thong su kien de xu ly tuong tac cua nguoi dung voi widget.

## Cac Loai Su Kien

| Su Kien | Khi Nao | Kha Dung Tren |
|---------|---------|---------------|
| `on_menu_open` | Menu mo | Tat ca widget |
| `on_cursor_hover` | Con tro vao widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Con tro roi widget | IMAGE, TEXT |
| `on_cursor_click` | Widget duoc click | IMAGE, TEXT |
| `on_click_any` | Bat ky click nao | Chi CURSOR |

## Cau Truc Su Kien Co Ban

```yaml
widgets:
  nut_cua_toi:
    type: IMAGE
    visual:
      normal: {type: image, value: template/button.png}
    events:
      on_cursor_hover:
        - action: sound
          file: minecraft:ui.button.click
          volume: 0.5
          pitch: 1.2
      on_cursor_click:
        - action: command
          command: "[MESSAGE] &aBan da click!"
```

## Cac Loai Hanh Dong

### Hanh Dong Am Thanh

Phat hieu ung am thanh:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Am thanh Minecraft
  volume: 1.0                       # 0.0 den 1.0
  pitch: 1.0                        # 0.5 den 2.0
```

Am thanh tuy chinh:
```yaml
- action: sound
  file: template/click.ogg         # File am thanh tuy chinh
```

### Hanh Dong Animation

Kich hoat animation:

```yaml
- action: animation
  effect: scale                    # Loai animation
  duration: 200                    # Thoi luong tinh bang ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Kich thuoc muc tieu
  easing_style: ease_out           # Ham easing
  priority: false                  # Chan cac hanh dong khac?
```

### Hanh Dong Lenh

Thuc thi cac lenh:

```yaml
- action: command
  command: "[MESSAGE] Xin chao!"   # Lenh dac biet
  delay: 0                         # Tre tinh bang ms
```

**Cac Lenh Dac Biet:**
- `[MESSAGE] van_ban` - Gui tin nhan cho nguoi choi
- `[TELEPORT] world x y z yaw pitch` - Teleport nguoi choi
- `[CLOSE]` - Dong menu
- `[PLAY_MUSIC] duong_dan/file.ogg` - Phat nhac nen
- `[STOP_MUSIC]` - Dung nhac
- `[OPEN_URL] https://...` - Mo URL (co the click)
- `[PLAYER] /lenh` - Chay lenh nhu nguoi choi
- `[CONSOLE] /lenh` - Chay lenh nhu console

### Hanh Dong Trang Thai

Thay doi trang thai widget:

```yaml
# Chuyen doi giua cac trang thai
- action: toggle_state
  states: [normal, disabled]

# Dat trang thai cu the
- action: set_state
  state: disabled
```

### Hanh Dong Thay Doi Giao Dien

Thay doi giao dien widget:

```yaml
- action: visual_change
  to: hover

# Thay doi co dieu kien
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Hanh Dong An Widget

Xoa widget khoi giao dien:

```yaml
- action: hide_widget
  widget: ten_widget_cua_toi
```

### Hanh Dong Dung Animation

Dung animation dang chay:

```yaml
- action: stop_animation
  animation_type: rotate          # Animation can dung
```

## Thu Tu Thuc Thi Su Kien

Cac hanh dong thuc thi theo thu tu duoc liet ke. De co ket qua tot nhat:

1. Hieu ung am thanh (phan hoi ngay lap tuc)
2. Thay doi trang thai
3. Cac lenh
4. Animation (co the co do tre)

## Animation Uu Tien

Su dung `priority: true` de chan cac hanh dong khac cho den khi animation hoan thanh:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Chan cac hanh dong tiep theo
    - action: command
      command: "[MESSAGE] Hoan thanh!"  # Thuc thi sau animation
```
