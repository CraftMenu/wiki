# การสร้างเมนู

คู่มือนี้ครอบคลุมการสร้างเมนูที่กำหนดเองใน CraftMenu

## โครงสร้างเมนู

เมนูถูกกำหนดในไฟล์ YAML ใน `plugins/CraftMenu/menus/`

### เทมเพลตเมนูพื้นฐาน

```yaml
menu:
  name: my_menu
  title: "&b&lเมนูของฉัน"
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
    # กำหนด widget ที่นี่
```

## คุณสมบัติเมนู

### คุณสมบัติพื้นฐาน

| คุณสมบัติ | ชนิด | คำอธิบาย |
|-----------|------|----------|
| `name` | String | ตัวระบุเฉพาะสำหรับเมนู |
| `title` | String | ชื่อที่แสดง (รองรับรหัสสี) |
| `main` | Boolean | นี่คือเมนูหลักหรือไม่? |
| `open-on-join` | Boolean | เปิดอัตโนมัติเมื่อผู้เล่นเข้าโลก |
| `open-on-teleport` | Boolean | เปิดอัตโนมัติเมื่อผู้เล่นเทเลพอร์ตไปโลก |

### ตำแหน่ง

```yaml
location:
  world: world               # ชื่อโลก
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # การหมุนแนวนอน (-180 ถึง 180)
    pitch: 0.0               # การหมุนแนวตั้ง (-90 ถึง 90)
```

### การตั้งค่า

```yaml
settings:
  cursor-sensitivity: 1.0    # ความไวของเมาส์ (1.0 = ปกติ)
  max-yaw-offset: 61.0       # ขีดจำกัดแนวนอนเป็นองศา
  max-pitch-offset: 36.0     # ขีดจำกัดแนวตั้งเป็นองศา
  camera-lock-enabled: true  # ล็อคกล้องผู้เล่นเมื่อเมนูเปิด
  camera-lock-strength: 0.4  # ความแรงของการล็อค (0.0-1.0)
```

### การตั้งค่าการมองเห็น

```yaml
settings:
  visibility:
    hide_players: false      # ซ่อนผู้เล่นอื่น
    hide_mobs: false         # ซ่อนม็อบ
    hide_items: false        # ซ่อนไอเท็มที่ตกอยู่
    whitelist_players: []    # ผู้เล่นที่ยังคงมองเห็นได้
```

## การเพิ่ม Widget

Widget คือองค์ประกอบที่โต้ตอบได้ของเมนูของคุณ

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
        value: "&b&lยินดีต้อนรับ!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## สร้างอย่างรวดเร็วด้วยคำสั่ง

ใช้ `/cm sangmai <ชื่อ>` เพื่อสร้างเมนูอย่างรวดเร็วที่ตำแหน่งปัจจุบันของคุณ

## การเพิ่มภาพที่กำหนดเอง

1. สร้างโฟลเดอร์: `plugins/CraftMenu/images/my_menu/`
2. เพิ่มภาพ PNG ของคุณไปยังโฟลเดอร์นี้
3. รัน `/cm pakked` เพื่อสร้าง resource pack ใหม่
4. อ้างอิงภาพเป็น `my_menu/image_name.png`

## การทดสอบเมนูของคุณ

1. บันทึกไฟล์ YAML ของคุณ
2. รัน `/cm lodmai`
3. รัน `/cm perd my_menu`

## แนวทางปฏิบัติที่ดี

- ใช้โฟลเดอร์ย่อยเพื่อจัดระเบียบภาพตามเมนู
- รักษาขนาดภาพให้เหมาะสม (สูงสุด 128x128 สำหรับปุ่ม)
- ทดสอบเมนูอย่างละเอียดก่อน deploy
- ใช้ชื่อ widget ที่อธิบายได้
- แสดงความคิดเห็นในคอนฟิกที่ซับซ้อน
