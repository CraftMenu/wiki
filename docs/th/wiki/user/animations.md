# ระบบแอนิเมชัน

CraftMenu มีระบบแอนิเมชันที่ทรงพลังพร้อม 19 ประเภทแอนิเมชันและ 6 ฟังก์ชัน easing

## ประเภทแอนิเมชัน

### แอนิเมชันการเคลื่อนที่

| ประเภท | คำอธิบาย |
|--------|----------|
| `translate` | ย้ายตำแหน่ง widget |
| `bounce` | เอฟเฟกต์เด้ง |
| `float` | ลอยขึ้นลงอย่างนุ่มนวล |
| `orbit` | การเคลื่อนที่เป็นวงกลม |

### แอนิเมชันการหมุน

| ประเภท | คำอธิบาย |
|--------|----------|
| `rotate` | หมุนอย่างต่อเนื่อง |
| `swing` | แกว่งแบบลูกตุ้ม |
| `flip` | พลิก 180 องศา |
| `wobble` | การหมุนที่สั่น |
| `spiral` | การเคลื่อนที่แบบเกลียว |

### แอนิเมชันการปรับขนาด

| ประเภท | คำอธิบาย |
|--------|----------|
| `scale` | เปลี่ยนขนาด |
| `pulse` | เต้นเป็นจังหวะ |
| `squeeze` | บีบ/ยืด |
| `zoom_in` | เอฟเฟกต์ซูม |

### แอนิเมชันภาพ

| ประเภท | คำอธิบาย |
|--------|----------|
| `fade` | ความโปร่งใสค่อยๆ เปลี่ยน |
| `glow` | เอฟเฟกต์เรืองแสง |
| `shake` | การสั่น |
| `jiggle` | การสั่นไหว |
| `wave` | การเคลื่อนที่แบบคลื่น |

## การใช้งานแอนิเมชันพื้นฐาน

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## คุณสมบัติแอนิเมชัน

### คุณสมบัติทั่วไป

```yaml
- action: animation
  effect: pulse           # ประเภทแอนิเมชัน (จำเป็น)
  duration: 1000          # ระยะเวลาเป็นมิลลิวินาที
  easing_style: ease_out  # ฟังก์ชัน easing
  intensity: 1.0          # ความเข้มของเอฟเฟกต์
  priority: false         # บล็อก action อื่น?
```

### คุณสมบัติเฉพาะเอฟเฟกต์

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # องศา
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = fade out, false = fade in
```

## ฟังก์ชัน Easing

| Easing | คำอธิบาย |
|--------|----------|
| `linear` | ความเร็วคงที่ |
| `ease_in` | เริ่มช้า |
| `ease_out` | จบช้า |
| `ease_in_out` | เริ่มและจบช้า |
| `bounce` | เอฟเฟกต์เด้ง |
| `elastic` | เอฟเฟกต์สปริง |

### ตัวอย่าง Easing

```yaml
# เอฟเฟกต์ hover นุ่มนวล
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# การตอบสนองการคลิกแบบเด้ง
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Priority ของแอนิเมชัน

ใช้ `priority: true` เพื่อให้แน่ใจว่าแอนิเมชันเสร็จสมบูรณ์ก่อน action อื่น:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # บล็อก action ถัดไป

    - action: command
      command: "[CLOSE]"      # รอให้แอนิเมชันเสร็จ
```

## การหยุดแอนิเมชัน

```yaml
- action: stop_animation
  animation_type: rotate      # หยุดประเภทเฉพาะ
  # หรือ
  type: all                   # หยุดแอนิเมชันทั้งหมด
```

## แอนิเมชันต่อเนื่อง

กำหนดแอนิเมชันที่ทำงานต่อเนื่องในคอนฟิก widget:

```yaml
widgets:
  spinning_icon:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## แนวทางปฏิบัติที่ดี

1. รักษาระยะเวลาต่ำกว่า 500ms สำหรับการตอบสนองที่รวดเร็ว
2. ใช้ `ease_out` สำหรับเอฟเฟกต์ hover
3. ใช้ `bounce` สำหรับการตอบสนองการคลิก
4. หลีกเลี่ยงแอนิเมชันหลายตัวพร้อมกันบน widget เดียว
5. ทดสอบแอนิเมชันบนฮาร์ดแวร์ที่แตกต่างกัน
