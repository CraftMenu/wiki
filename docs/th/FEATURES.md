# ฟีเจอร์ CraftMenu

## สารบัญ
1. [ระบบเสียงรวม](#ระบบเสียงรวม)
2. [อีเวนต์ Widget](#อีเวนต์-widget)
3. [ระบบสถานะ](#ระบบสถานะ)
4. [Feedback ขอบเขตที่ปรับแต่งได้](#feedback-ขอบเขตที่ปรับแต่งได้)
5. [คำสั่งพิเศษ](#คำสั่งพิเศษ)

---

## ระบบเสียงรวม

ฟิลด์เสียงทั้งหมดรองรับสองประเภท:

### เสียง Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # เสียง Minecraft ดั้งเดิม
  volume: 0.8
  pitch: 1.0
```

**ตัวอย่างเสียง Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### เสียงกำหนดเอง (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # แก้ไขอัตโนมัติ
  # หรือ
  file: "craftmenu:template/click"   # ระบุ namespace อย่างชัดเจน
  volume: 1.0
  pitch: 1.2
```

**ขั้นตอนสำหรับเสียงกำหนดเอง**:
1. เพิ่ม `.ogg` ใน `/plugins/CraftMenu/sounds/template/click.ogg`
2. รัน `/cm zip`
3. Resource pack จะรวมเสียงโดยอัตโนมัติ

---

## อีเวนต์ Widget

### on_menu_open

ทำงานอัตโนมัติเมื่อเมนูเปิด เหมาะสำหรับเพลงพื้นหลัง

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

เมื่อเคอร์เซอร์เข้าสู่พื้นที่ widget

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

เมื่อเคอร์เซอร์ออกจากพื้นที่ widget

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

เมื่อ widget ถูกคลิก

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (เฉพาะ Cursor)

ทำงานเมื่อมีการคลิกใดๆ แม้จะอยู่นอก widget

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## ระบบสถานะ

อนุญาตให้ widget มีพฤติกรรมหลายแบบ (เช่น ปุ่มสลับเปิด/ปิด)

### สถานะเริ่มต้น

- `normal`: สถานะเริ่มต้น
- `hover`: เมาส์อยู่เหนือ widget
- `pressed`: widget ถูกคลิก
- `disabled`: widget ถูกปิดใช้งาน
- `fallback`: เมื่อ visual โหลดไม่ได้

### สถานะกำหนดเอง

คุณสามารถสร้างสถานะของตัวเอง:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # เสียงเปิด
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # เสียงปิด (สถานะกำหนดเอง)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover เมื่อปิด (สถานะกำหนดเอง)
      type: image
      value: template/sound-mute-hover.png
```

### การกระทำสถานะ

#### toggle_state

สลับระหว่างรายการสถานะ

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # วนรอบระหว่างสถานะ
```

#### visual_change_conditional

เปลี่ยน visual เฉพาะเมื่อสถานะปัจจุบันเป็น X

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # ถ้าสถานะเป็น "normal"
  to: hover                      # เปลี่ยนเป็น "hover"
- action: visual_change_conditional
  if_state: disabled            # ถ้าสถานะเป็น "disabled"
  to: disabled_hover             # เปลี่ยนเป็น "disabled_hover"
```

#### command_conditional

รันคำสั่งเฉพาะเมื่อสถานะเป็น X

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # ถ้ากลายเป็น "disabled"
  command: '[STOP_MUSIC]'        # หยุดเพลง
- action: command_conditional
  if_state: normal              # ถ้ากลายเป็น "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # เล่นเพลง
```

### ตัวอย่างสมบูรณ์: ปุ่มสลับ

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## Feedback ขอบเขตที่ปรับแต่งได้

ปรับแต่ง feedback เมื่อเคอร์เซอร์ถึงขีดจำกัดการเคลื่อนที่

### การตั้งค่า

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # เสียงเมื่อถึงขีดจำกัด
      volume: 0.5                          # ความดัง 0.0-1.0
      pitch: 0.6                           # ระดับเสียง 0.5-2.0
      message: "&c&lเคอร์เซอร์ถึงขอบแล้ว!" # ข้อความใน action bar
```

### เสียงที่แนะนำ

- `minecraft:ui.button.click` - คลิกเบาๆ
- `minecraft:block.note_block.bass` - โทนต่ำ
- `craftmenu:template/warning.ogg` - เสียงกำหนดเอง

---

## คำสั่งพิเศษ

ใช้กับ `action: command`

### [TELEPORT]

เทเลพอร์ตผู้เล่น

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

ส่งข้อความถึงผู้เล่น

```yaml
- action: command
  command: '[MESSAGE] &aยินดีต้อนรับสู่เกม!'
  delay: 500  # รอ 500ms ก่อนส่ง
```

### [CLOSE]

ปิดเมนู

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # ปิดหลังจาก 1 วินาที
```

### [PLAY_MUSIC]

เล่นเพลงสำหรับ widget (เสียงเดียวต่อ widget)

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**รองรับ namespaces**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

หยุดเสียงที่กำลังเล่นสำหรับ widget นี้

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**สำคัญ**: `[STOP_MUSIC]` หยุดเฉพาะเสียงของ widget นี้ ไม่ส่งผลกระทบต่อ widget อื่นหรือเสียงทั่วไป

**หมายเหตุทางเทคนิค**: คำสั่งใช้ `player.stopAllSounds()` ภายในเพราะ `player.stopSound(key)` ไม่ทำงานกับเสียง resource pack กำหนดเอง อย่างไรก็ตาม มันถูกเรียกเฉพาะโดย widget ที่กำหนด

### [OPEN_URL]

เปิด URL ในเบราว์เซอร์ของผู้เล่น (ต้องการการยืนยัน)

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## หยุดเสียงอัตโนมัติ

**เมื่อเมนูปิด** เสียงทั้งหมดจะถูกหยุดโดยอัตโนมัติสำหรับผู้เล่น รวมถึง:

- เพลงพื้นหลังที่เล่นผ่าน `[PLAY_MUSIC]`
- เสียง hover/click ของ widget
- เสียงใดๆ ที่ทำงานอยู่ขณะปิด

### วิธีการทำงาน

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← เรียกก่อน close()
}
menuInstance.close();
```

### ข้อจำกัดทางเทคนิค

ระบบใช้ `player.stopAllSounds()` เพราะ:
- `player.stopSound(key)` **ไม่ทำงาน** กับเสียง resource pack กำหนดเอง
- `player.stopSound(key, category)` **ก็ไม่ทำงาน**
- `stopAllSounds()` เป็น **วิธีเดียวที่เชื่อถือได้**

ซึ่งหมายความว่าเสียง **ทั้งหมด** ของผู้เล่นจะถูกหยุดเมื่อปิดเมนู ไม่ใช่แค่เสียงเมนู นี่คือข้อจำกัดของ Minecraft/Bukkit ไม่ใช่ CraftMenu

### ทางเลือก: ควบคุมด้วยตนเอง

ถ้าคุณไม่ต้องการหยุดเสียงอัตโนมัติ ใช้ปุ่มสลับในเมนู:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # หยุดเพลงด้วยตนเอง
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## การกระทำ Visual

### visual_change

เปลี่ยนสถานะ visual โดยไม่มีเงื่อนไข

```yaml
- action: visual_change
  to: hover
```

### scale

ปรับขนาด widget ชั่วคราวพร้อมแอนิเมชัน

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% ของขนาด
  duration: 300                     # ระยะเวลาเป็น ms
```

### scale_reset

รีเซ็ตขนาดเป็นขนาดเดิม

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

ลบ widget ทั้งหมด (visual, collision, sounds)

```yaml
- action: hide_widget
  widget: fov_warning  # ชื่อ widget ที่จะซ่อน
```

**หมายเหตุ**: Widget ที่ซ่อนไม่สามารถกู้คืนได้โดยไม่เปิดเมนูใหม่

---

## ตัวอย่างสมบูรณ์: เมนูพร้อมฟีเจอร์ทั้งหมด

```yaml
menu:
  name: complete_example
  title: '&b&lตัวอย่างเมนูสมบูรณ์'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &cเคอร์เซอร์ถึงขอบแล้ว!"

  widgets:
    # ปุ่มพร้อมเพลงพื้นหลัง
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # ปุ่มการกระทำพร้อม feedback สมบูรณ์
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aกำลังเริ่มเกม...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # เคอร์เซอร์พร้อม sound feedback
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
      transform:
        position: {x: 0, y: 0, z: 1.0}
        size: {x: 0.005, y: 0.005, z: 0.005}
      collision-area:
        enabled: true
        size: {x: 0.01, y: 0.01, z: 0.01}
      events:
        on_click_any:
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.4
          pitch: 1.0
```

---

อัปเดตล่าสุด: 2026-02-02
เวอร์ชันปลั๊กอิน: 2.0
