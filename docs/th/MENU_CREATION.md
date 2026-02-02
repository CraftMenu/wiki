# การสร้างเมนูใน CraftMenu

## สารบัญ
1. [การสร้างผ่านคำสั่ง](#การสร้างผ่านคำสั่ง)
2. [โครงสร้าง YAML](#โครงสร้าง-yaml)
3. [Widget ที่มีให้ใช้](#widget-ที่มีให้ใช้)
4. [Transform (การวางตำแหน่ง)](#transform-การวางตำแหน่ง)
5. [Collision](#collision)
6. [อีเวนต์และการกระทำ](#อีเวนต์และการกระทำ)
7. [ตัวอย่างปฏิบัติ](#ตัวอย่างปฏิบัติ)

---

## การสร้างผ่านคำสั่ง

### วิธีที่แนะนำ

1. **เข้าเกม** และไปยังตำแหน่งที่คุณต้องการให้เมนูอยู่
2. **มองไปในทิศทาง** ที่ผู้เล่นควรหันหน้าเมื่อเปิดเมนู
3. **รัน**:
   ```
   /cm create menu_name
   ```

เมนูจะถูกสร้างพร้อมตำแหน่งและการหมุนปัจจุบันของคุณ!

### โครงสร้างที่สร้างขึ้น

```
/plugins/CraftMenu/menus/menu_name.yml
```

**เทมเพลตเริ่มต้นรวมถึง**:
- FOV warning widget (สามารถลบได้)
- เคอร์เซอร์ที่ตั้งค่าแล้ว
- การตั้งค่าที่เหมาะสม
- Boundary feedback
- **เคอร์เซอร์ใช้ TEXT เป็นค่าเริ่มต้น** - เปลี่ยนเป็น IMAGE หลังจากเพิ่ม texture

---

## โครงสร้าง YAML

### ส่วนหลัก

```yaml
menu:
  name: String              # ชื่อเมนู
  title: String             # ชื่อแสดง (รองรับ &codes)
  main: boolean             # เป็นเมนูหลัก? (อนาคต)
  location:                 # ตำแหน่งโลก
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # การตั้งค่า
    # ... (ดูด้านล่าง)
  widgets:                  # widget เมนู
    widget_name:
      # ... (ดูด้านล่าง)
```

### การตั้งค่าโดยละเอียด

```yaml
settings:
  # เสียง
  background-music: "template/background.ogg"  # เพลงพื้นหลัง (ไม่บังคับ)

  # การเคลื่อนที่เคอร์เซอร์
  cursor-sensitivity: 1.0          # ความไว (0.1 - 5.0)
  max-yaw-offset: 61.0             # ขีดจำกัดแนวนอนเป็นองศา
  max-pitch-offset: 36.0           # ขีดจำกัดแนวตั้งเป็นองศา
  mount-time: 100                  # เวลา mount เป็น ticks

  # การวางตำแหน่งเมนู
  distance-multiplier: -0.01       # ตัวคูณระยะทาง
  menu-distance: 0.3               # ระยะห่างเมนู

  # ประสิทธิภาพ
  debug-mode: false                # โหมด debug
  update-rate: 1                   # อัตราอัปเดต
  collision-detection: true        # การตรวจจับ collision ที่ใช้งานอยู่

  # กล้อง
  camera-lock-enabled: true        # ล็อกกล้อง
  camera-lock-strength: 0.4        # ความแรงการล็อก (0.0-1.0)

  # Boundary feedback
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lเคอร์เซอร์ถึงขอบแล้ว!"
```

---

## Widget ที่มีให้ใช้

### BUTTON

ปุ่มโต้ตอบพร้อม hover และ click

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
      value: "▶ เล่น"
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

รูปภาพคงที่ (สามารถมี hover ได้)

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # ไม่บังคับ
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # ไม่มีการโต้ตอบ
```

### TEXT

ข้อความที่จัดรูปแบบ

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lยินดีต้อนรับ
        &7สู่เซิร์ฟเวอร์
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # ขนาดข้อความ
  shadow: true              # เงา
  background-color: '#000000'  # สีพื้นหลัง (hex)
```

### CURSOR

เคอร์เซอร์ที่ควบคุมด้วยเมาส์ (**1 ตัวต่อเมนูเท่านั้น**)

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
    position: {x: 0, y: 0, z: 1.0}  # z สูง = อยู่ข้างหน้า
    size: {x: 0.005, y: 0.005, z: 0.005}

  # การตั้งค่าเคอร์เซอร์
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # แอนิเมชัน
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # พื้นที่ collision
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (การวางตำแหน่ง)

### Position

ตำแหน่งในพื้นที่ 3D สัมพัทธ์กับจุด spawn ของเมนู

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: ซ้าย (-) / ขวา (+)
- **y**: ล่าง (-) / บน (+)
- **z**: ไกล (-) / ใกล้ (+)

**เคล็ดลับ**: z=0.1 ดีสำหรับพื้นหลัง, z=1.0 สำหรับเคอร์เซอร์ (มองเห็นเสมอ)

### Size

ขนาด widget

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**มาตราส่วนทั่วไป**:
- ปุ่มเล็ก: `0.015`
- ปุ่มกลาง: `0.02`
- ปุ่มใหญ่: `0.03`
- โลโก้: `0.04-0.05`
- เคอร์เซอร์: `0.005`

### Rotation (ไม่บังคับ)

การหมุนเป็นองศา

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**หมายเหตุ**: ปกติไม่จำเป็น (ViewFrame ปรับอยู่แล้ว)

---

## Collision

### การตั้งค่าพื้นฐาน

```yaml
collision:
  enabled: true                     # เปิดใช้ collision
  position: {x: 0, y: 0, z: 0.1}   # ไม่บังคับ: override ตำแหน่ง
  size: {x: 0.08, y: 0.04, z: 0.02} # ขนาดกล่อง
  rotation: {pitch: 0, yaw: 0, roll: 0}  # ไม่บังคับ
```

### Visual Debug

```yaml
collision:
  debug:
    enabled: true     # แสดง particles
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, ฯลฯ
    size: 0.005       # ขนาด particle
```

**เปิดใช้งานทั่วไป**:
```
/cm debug particles toggle
/cm debug particles collision
```

### เคล็ดลับ Collision

1. **ขนาด Visual ≠ ขนาด collision**
   - Collision สามารถใหญ่กว่าเพื่อให้คลิกง่ายขึ้น
   - ตัวอย่าง: visual 0.02, collision 0.08x0.04

2. **ตำแหน่ง collision**
   - ถ้าไม่ระบุ ใช้ transform.position
   - ระบุถ้าคุณต้องการพื้นที่ต่างกัน

3. **Collision-area (Cursor)**
   - Cursor ใช้ `collision-area` แทน `collision`
   - เหตุผล: Cursor มีพฤติกรรมพิเศษ

---

## อีเวนต์และการกระทำ

### อีเวนต์ที่มี

| อีเวนต์ | เมื่อทำงาน | Widget |
|-------|------------|---------|
| `on_menu_open` | เมนูเปิด | ทั้งหมด |
| `on_cursor_hover` | เคอร์เซอร์เข้า | Button, Image, Text |
| `on_cursor_hover_exit` | เคอร์เซอร์ออก | Button, Image, Text |
| `on_cursor_click` | Widget ถูกคลิก | Button |
| `on_click_any` | คลิกใดๆ | Cursor |

### การกระทำที่มี

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, ฯลฯ
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
  file: "minecraft:ui.button.click"  # หรือ "mymenu/click.ogg"
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
  delay: 1000  # ไม่บังคับ, เป็น ms
```

**คำสั่งพิเศษ**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] ข้อความพร้อม &colors`
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
  widget: widget_name
```

---

## ตัวอย่างปฏิบัติ

### ปุ่มง่ายพร้อมเสียง

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
      command: '[MESSAGE] &aคลิกปุ่มแล้ว!'
```

### ปุ่มพร้อมเทเลพอร์ต

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
      command: '[MESSAGE] &eกำลังเทเลพอร์ต...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### ปุ่มสลับ (เปิด/ปิด)

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
      command: '[MESSAGE] &cปิดใช้งานแล้ว!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aเปิดใช้งานแล้ว!'
```

### Text Widget ที่คลิกได้

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lคำเตือน
        &7คลิกเพื่อปิด
    hover:
      type: text
      value: |-
        &c&lคำเตือน
        &e&oคลิกเพื่อปิด
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

## แนวทางปฏิบัติที่ดี

1. **จัดเป็นชั้นตาม z**:
   - z=0.05: พื้นหลัง
   - z=0.1: ปุ่ม
   - z=0.15: Overlays
   - z=1.0: เคอร์เซอร์

2. **ตั้งชื่อ widget ให้อธิบายได้**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **รวม fallback เสมอ**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEXT"}
   ```

4. **Collision ใหญ่กว่า visual**:
   - Visual: 0.02
   - Collision: 0.08x0.04 (คลิกง่ายกว่า)

5. **ใช้เสียง Minecraft เมื่อเป็นไปได้**:
   - ไม่ต้องการ resource pack
   - ทำงานได้โดยไม่ต้องตั้งค่าเพิ่มเติม

6. **ทดสอบทีละขั้นตอน**:
   - เพิ่ม widget ทีละ 1 ตัว
   - ใช้ `/cm reload` บ่อยๆ
   - ทดสอบแต่ละการโต้ตอบ

---

อัปเดตล่าสุด: 2026-02-02
