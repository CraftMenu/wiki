# Tao Menu Trong CraftMenu

## Muc Luc
1. [Tao Bang Lenh](#tao-bang-lenh)
2. [Cau Truc YAML](#cau-truc-yaml)
3. [Cac Loai Widget](#cac-loai-widget)
4. [Transform (Dinh Vi)](#transform-dinh-vi)
5. [Collision](#collision)
6. [Su Kien va Hanh Dong](#su-kien-va-hanh-dong)
7. [Vi Du Thuc Te](#vi-du-thuc-te)

---

## Tao Bang Lenh

### Phuong Phap Khuyen Nghi

1. **Vao game** va di den vi tri ban muon dat menu
2. **Nhin theo huong** nguoi choi se nhin khi mo menu
3. **Chay**:
   ```
   /cm create ten_menu
   ```

Menu se duoc tao voi vi tri va goc quay hien tai cua ban!

### Cau Truc Duoc Tao

```
/plugins/CraftMenu/menus/ten_menu.yml
```

**Mau mac dinh bao gom**:
- Widget canh bao FOV (co the xoa)
- Con tro da cau hinh
- Cai dat toi uu
- Phan hoi ranh gioi
- **Con tro su dung TEXT mac dinh** - chuyen sang IMAGE sau khi them texture

---

## Cau Truc YAML

### Cac Phan Chinh

```yaml
menu:
  name: String              # Ten menu
  title: String             # Tieu de (ho tro &codes)
  main: boolean             # Menu chinh? (tuong lai)
  location:                 # Vi tri trong the gioi
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Cai dat
    # ... (xem ben duoi)
  widgets:                  # Cac widget menu
    ten_widget:
      # ... (xem ben duoi)
```

### Cai Dat Chi Tiet

```yaml
settings:
  # Am thanh
  background-music: "template/background.ogg"  # Nhac nen (tuy chon)

  # Di chuyen con tro
  cursor-sensitivity: 1.0          # Do nhay (0.1 - 5.0)
  max-yaw-offset: 61.0             # Gioi han ngang tinh bang do
  max-pitch-offset: 36.0           # Gioi han doc tinh bang do
  mount-time: 100                  # Thoi gian mount tinh bang tick

  # Vi tri menu
  distance-multiplier: -0.01       # He so khoang cach
  menu-distance: 0.3               # Khoang cach menu

  # Hieu suat
  debug-mode: false                # Che do debug
  update-rate: 1                   # Tan suat cap nhat
  collision-detection: true        # Phat hien va cham

  # Camera
  camera-lock-enabled: true        # Khoa camera
  camera-lock-strength: 0.4        # Do manh khoa (0.0-1.0)

  # Phan hoi ranh gioi
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lDat gioi han con tro!"
```

---

## Cac Loai Widget

### BUTTON

Nut tuong tac voi hover va click.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "▶ PLAY"
  transform:
    position: {x: 0, y: 0.1, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover: [...]
    on_cursor_click: [...]
```

### IMAGE

Hinh anh tinh (co the co hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Tuy chon
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Khong tuong tac
```

### TEXT

Van ban dinh dang.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lCHAO MUNG
        &7den server
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Kich thuoc van ban
  shadow: true              # Bong
  background-color: '#000000'  # Mau nen (hex)
```

### CURSOR

Con tro dieu khien bang chuot (**chi 1 moi menu**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # z cao = o phia truoc
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Cai dat con tro
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Hoat hoa
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Vung va cham
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Dinh Vi)

### Vi Tri

Vi tri trong khong gian 3D tuong doi voi diem spawn menu.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Trai (-) / Phai (+)
- **y**: Duoi (-) / Tren (+)
- **z**: Xa (-) / Gan (+)

**Meo**: z=0.1 tot cho nen, z=1.0 cho con tro (luon hien thi)

### Kich Thuoc

Kich thuoc widget.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Ty le thuong gap**:
- Nut nho: `0.015`
- Nut trung binh: `0.02`
- Nut lon: `0.03`
- Logo: `0.04-0.05`
- Con tro: `0.005`

### Xoay (Tuy Chon)

Xoay tinh bang do.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Ghi chu**: Thuong khong can (ViewFrame da dieu chinh)

---

## Collision

### Cau Hinh Co Ban

```yaml
collision:
  enabled: true                     # Bat collision
  position: {x: 0, y: 0, z: 0.1}   # Tuy chon: ghi de vi tri
  size: {x: 0.08, y: 0.04, z: 0.02} # Kich thuoc hop
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Tuy chon
```

### Debug Truc Quan

```yaml
collision:
  debug:
    enabled: true     # Hien thi particle
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, v.v.
    size: 0.005       # Kich thuoc particle
```

**Bat toan cuc**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Meo Collision

1. **Kich thuoc visual ≠ kich thuoc collision**
   - Collision co the lon hon de de click
   - Vi du: visual 0.02, collision 0.08x0.04

2. **Vi tri collision**
   - Neu khong chi dinh, su dung transform.position
   - Chi dinh neu ban muon vung khac

3. **Collision-area (Con tro)**
   - Con tro su dung `collision-area` thay vi `collision`
   - Ly do: Con tro co hanh vi dac biet

---

## Su Kien va Hanh Dong

### Su Kien Co San

| Su Kien | Khi Nao Kich Hoat | Widget |
|---------|-------------------|--------|
| `on_menu_open` | Menu mo | Tat ca |
| `on_cursor_hover` | Con tro di vao | Button, Image, Text |
| `on_cursor_hover_exit` | Con tro roi di | Button, Image, Text |
| `on_cursor_click` | Widget duoc click | Button |
| `on_click_any` | Bat ky click nao | Cursor |

### Hanh Dong Co San

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, v.v.
```

#### visual_change_conditional

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

#### sound

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # HOAC "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ms
```

#### scale_reset

```yaml
- action: scale_reset
  duration: 200
```

#### command

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  delay: 1000  # Tuy chon, tinh bang ms
```

**Lenh dac biet**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] van ban voi &colors`
- `[CLOSE]`
- `[PLAY_MUSIC] path/sound.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`

#### toggle_state

```yaml
- action: toggle_state
  states: [normal, disabled]
```

#### hide_widget

```yaml
- action: hide_widget
  widget: ten_widget
```

---

## Vi Du Thuc Te

### Nut Don Gian Voi Am Thanh

```yaml
simple_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/button.png}
    hover: {type: image, value: menu/button-hover.png}
  transform:
    position: {x: 0, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.2
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: command
      command: '[MESSAGE] &aDa click nut!'
```

### Nut Voi Teleport

```yaml
spawn_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/spawn.png}
    hover: {type: image, value: menu/spawn-hover.png}
  transform:
    position: {x: -0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_click:
    - action: sound
      file: "minecraft:entity.enderman.teleport"
    - action: command
      command: '[MESSAGE] &eDang dich chuyen...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Nut Chuyen Doi (Bat/Tat)

```yaml
toggle_button:
  type: BUTTON
  initial-state: normal
  visual:
    normal: {type: image, value: menu/on.png}
    hover: {type: image, value: menu/on-hover.png}
    disabled: {type: image, value: menu/off.png}
    disabled_hover: {type: image, value: menu/off-hover.png}
  transform:
    position: {x: 0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change_conditional
      if_state: normal
      to: hover
    - action: visual_change_conditional
      if_state: disabled
      to: disabled_hover
    on_cursor_hover_exit:
    - action: visual_change_conditional
      if_state: normal
      to: normal
    - action: visual_change_conditional
      if_state: disabled
      to: disabled
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[MESSAGE] &cDa tat!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aDa bat!'
```

### Widget Van Ban Click Duoc

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lCANH BAO
        &7Click de bo qua
    hover:
      type: text
      value: |-
        &c&lCANH BAO
        &e&oClick de bo qua
  transform:
    position: {x: 0, y: -0.1, z: 0.1}
    size: {x: 0.4, y: 0.2, z: 0.01}
  text-size: 0.12
  shadow: true
  background-color: '#8B0000'
  collision:
    enabled: true
    size: {x: 0.15, y: 0.03, z: 0.01}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: hide_widget
      widget: warning_text
```

---

## Thuc Hanh Tot Nhat

1. **To chuc theo lop (z)**:
   - z=0.05: Nen
   - z=0.1: Nut
   - z=0.15: Overlay
   - z=1.0: Con tro

2. **Dat ten widget mo ta**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Luon bao gom fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEXT"}
   ```

4. **Collision lon hon visual**:
   - Visual: 0.02
   - Collision: 0.08x0.04 (de click hon)

5. **Su dung am thanh Minecraft khi co the**:
   - Khong can resource pack
   - Hoat dong khong can cau hinh them

6. **Kiem tra tung buoc**:
   - Them 1 widget moi lan
   - Su dung `/cm reload` thuong xuyen
   - Kiem tra tung tuong tac

---

Cap nhat lan cuoi: 2026-02-02
