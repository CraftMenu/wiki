# ระบบ Event

CraftMenu ใช้ระบบ event เพื่อจัดการการโต้ตอบของผู้ใช้กับ widget

## ประเภท Event

| Event | การเรียก | ใช้ได้กับ |
|-------|----------|-----------|
| `on_menu_open` | เมนูเปิด | Widget ทั้งหมด |
| `on_cursor_hover` | เคอร์เซอร์เข้าสู่ widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | เคอร์เซอร์ออกจาก widget | IMAGE, TEXT |
| `on_cursor_click` | Widget ถูกคลิก | IMAGE, TEXT |
| `on_click_any` | คลิกใดๆ | CURSOR เท่านั้น |

## โครงสร้าง Event พื้นฐาน

```yaml
widgets:
  my_button:
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
          command: "[MESSAGE] &aคุณคลิกแล้ว!"
```

## ประเภท Action

### Sound Action

เล่นเอฟเฟกต์เสียง:

```yaml
- action: sound
  file: minecraft:ui.button.click  # เสียง Minecraft
  volume: 1.0                       # 0.0 ถึง 1.0
  pitch: 1.0                        # 0.5 ถึง 2.0
```

เสียงที่กำหนดเอง:
```yaml
- action: sound
  file: template/click.ogg         # ไฟล์เสียงที่กำหนดเอง
```

### Animation Action

เรียกใช้แอนิเมชัน:

```yaml
- action: animation
  effect: scale                    # ประเภทแอนิเมชัน
  duration: 200                    # ระยะเวลาเป็น ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # สเกลเป้าหมาย
  easing_style: ease_out           # ฟังก์ชัน easing
  priority: false                  # บล็อก action อื่น?
```

### Command Action

รันคำสั่ง:

```yaml
- action: command
  command: "[MESSAGE] สวัสดี!"      # คำสั่งพิเศษ
  delay: 0                         # ดีเลย์เป็น ms
```

**คำสั่งพิเศษ:**
- `[MESSAGE] ข้อความ` - ส่งข้อความไปยังผู้เล่น
- `[TELEPORT] world x y z yaw pitch` - เทเลพอร์ตผู้เล่น
- `[CLOSE]` - ปิดเมนู
- `[PLAY_MUSIC] path/file.ogg` - เล่นเพลงพื้นหลัง
- `[STOP_MUSIC]` - หยุดเพลง
- `[OPEN_URL] https://...` - เปิด URL (คลิกได้)
- `[PLAYER] /command` - รันคำสั่งเป็นผู้เล่น
- `[CONSOLE] /command` - รันคำสั่งเป็นคอนโซล

### State Actions

เปลี่ยนสถานะ widget:

```yaml
# สลับระหว่างสถานะ
- action: toggle_state
  states: [normal, disabled]

# ตั้งค่าสถานะเฉพาะ
- action: set_state
  state: disabled
```

### Visual Change Action

เปลี่ยนลักษณะของ widget:

```yaml
- action: visual_change
  to: hover

# การเปลี่ยนแปลงแบบมีเงื่อนไข
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Hide Widget Action

ลบ widget ออกจากมุมมอง:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### Stop Animation Action

หยุดแอนิเมชันที่กำลังทำงาน:

```yaml
- action: stop_animation
  animation_type: rotate          # แอนิเมชันที่จะหยุด
```

## ลำดับการทำงานของ Event

Action ทำงานตามลำดับที่ระบุ สำหรับผลลัพธ์ที่ดีที่สุด:

1. เอฟเฟกต์เสียง (ตอบสนองทันที)
2. การเปลี่ยนสถานะ
3. คำสั่ง
4. แอนิเมชัน (อาจมีดีเลย์)

## แอนิเมชันที่มี Priority

ใช้ `priority: true` เพื่อบล็อก action อื่นจนกว่าแอนิเมชันจะเสร็จสมบูรณ์:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # บล็อก action ถัดไป
    - action: command
      command: "[MESSAGE] เสร็จแล้ว!"  # รันหลังจากแอนิเมชัน
```
