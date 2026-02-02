# คู่มือแอนิเมชันฉบับสมบูรณ์ - CraftMenu

เอกสารนี้นำเสนอแอนิเมชันทุกประเภทที่มีใน CraftMenu พร้อมตัวอย่างการใช้งาน YAML จริง

---

## สารบัญ

1. [แอนิเมชันพื้นฐาน](#แอนิเมชันพื้นฐาน)
2. [แอนิเมชันการเคลื่อนที่](#แอนิเมชันการเคลื่อนที่)
3. [แอนิเมชันขั้นสูง](#แอนิเมชันขั้นสูง)
4. [การรวมแอนิเมชัน](#การรวมแอนิเมชัน)
5. [คุณสมบัติทั่วไป](#คุณสมบัติทั่วไป)

---

## แอนิเมชันพื้นฐาน

### SCALE - เปลี่ยนขนาด

เปลี่ยนขนาด widget บนแกน X, Y, Z

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% ของขนาดเดิม
    easing_style: out
```

**คุณสมบัติ**:
- `scaleX`: มาตราส่วนบนแกน X (ค่าเริ่มต้น: intensity)
- `scaleY`: มาตราส่วนบนแกน Y (ค่าเริ่มต้น: intensity)
- `scaleZ`: มาตราส่วนบนแกน Z (ค่าเริ่มต้น: intensity)

---

### ROTATE - การหมุน

หมุน widget รอบแกน X, Y, Z

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # หมุนเต็มรอบบนแกน Y
    easing_style: in_out
```

**คุณสมบัติ**:
- `rotationX`: การหมุนบนแกน X เป็นองศา
- `rotationY`: การหมุนบนแกน Y เป็นองศา
- `rotationZ`: การหมุนบนแกน Z เป็นองศา

---

### TRANSLATE - การเลื่อน

เลื่อน widget ไปยังตำแหน่งใหม่

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # การเลื่อนเป็น blocks
    easing_style: out
```

**คุณสมบัติ**:
- `offsetX`: การเลื่อนบนแกน X
- `offsetY`: การเลื่อนบนแกน Y
- `offsetZ`: การเลื่อนบนแกน Z

---

### FADE - จางเข้า/ออก

ควบคุมความทึบ/การมองเห็นของ widget

```yaml
# จางออก (หายไป)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = จางออก, false = จางเข้า
    easing_style: in

# จางเข้า (ปรากฏ)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**คุณสมบัติ**:
- `fadeOut`: true เพื่อหายไป, false เพื่อปรากฏ

---

## แอนิเมชันการเคลื่อนที่

### PULSE - การเต้น

เอฟเฟกต์หายใจ/หัวใจเต้นพร้อมการปรับขนาดเป็นจังหวะ

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # แอนิเมชันต่อเนื่อง
    easing_style: in_out
```

---

### BOUNCE - การเด้ง

จำลองฟิสิกส์ลูกบอลเด้งในแนวตั้ง

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # ความสูงการกระโดด
    easing_style: out
```

---

### SWING - การแกว่งลูกตุ้ม

การเคลื่อนที่แบบลูกตุ้ม/ชิงช้า

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # แอมพลิจูดการแกว่ง
    loop: true
    easing_style: in_out
```

---

### FLOAT - การลอย

การเคลื่อนที่ขึ้นลงอย่างนุ่มนวล

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # ความสูงการลอย
    loop: true
    easing_style: in_out
```

---

### SHAKE - การสั่น

การสั่นเร็วและสุ่ม

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # ความเข้มข้นการสั่น
    easing_style: linear
```

---

### JIGGLE - การสั่นยืดหยุ่น

การสั่นที่นุ่มนวลและควบคุมได้มากขึ้นพร้อมเอฟเฟกต์ยืดหยุ่น

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # แอมพลิจูดการสั่น
    easing_style: out
```

---

## แอนิเมชันขั้นสูง

### SLIDE - เลื่อนเข้าจากนอกหน้าจอ

Widget เข้ามาเลื่อนจากนอกหน้าจอ

```yaml
# เลื่อนจากซ้าย
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # ระยะทางเป็น blocks
    easing_style: out

# เลื่อนจากบน
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**คุณสมบัติ**:
- `direction`: ทิศทางเข้า (left, right, top, bottom, front, back)
- `distance`: ระยะทางเริ่มต้นเป็น blocks (ค่าเริ่มต้น: intensity * 2.0)

**การใช้งานทั่วไป**: เหมาะสำหรับแอนิเมชัน `on_menu_open` พร้อม priority CRITICAL

---

### ZOOM_IN - เข้าพร้อม Overshoot

ปรับขนาดจาก 0 เป็น 1 พร้อม "overshoot" (เลยไปแล้วกลับมา)

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # มาตราส่วนสูงสุดก่อนกลับเป็น 1.0
    easing_style: out
```

**คุณสมบัติ**:
- `overshoot`: มาตราส่วนสูงสุดก่อนคงที่ที่ 1.0 (ค่าเริ่มต้น: 1.2)

**การใช้งานทั่วไป**: แอนิเมชันเข้าแบบดราม่าใน `on_menu_open`

---

### SQUEEZE - เอฟเฟกต์บีบอัด

แบนแกนหนึ่งขณะขยายแกนอื่น

```yaml
# บีบอัดแนวนอน
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # ความเข้มข้นการบีบอัด
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# บีบอัดแนวตั้ง
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**คุณสมบัติ**:
- `axis`: แกนที่จะบีบอัด (x, y, z)
- `intensity`: ความเข้มข้นการบีบอัด

---

### FLIP - หมุน 180°

การหมุน 180 องศาบนแกนที่กำหนด

```yaml
# พลิกแนวตั้ง (เหมือนพลิกการ์ด)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# พลิกแนวนอน
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**คุณสมบัติ**:
- `axis`: แกนหมุน (x, y, z)

**การใช้งานทั่วไป**: การเปลี่ยนสถานะ, การเปิดเผยเนื้อหาอื่น

---

### WOBBLE - การแกว่งแบบเยลลี่

การแกว่งซ้ายขวาแบบ "เยลลี่"

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # ความเข้มข้นการแกว่ง
    loop: true
    easing_style: in_out
```

**การใช้งานทั่วไป**: แอนิเมชันดึงความสนใจ, feedback hover

---

### ORBIT - การเคลื่อนที่วงโคจร

Widget โคจรเป็นวงกลมรอบจุดกลาง

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # รัศมีวงโคจรเป็น blocks
    speed: 1.0  # ตัวคูณความเร็ว
    loop: true
    easing_style: linear
```

**คุณสมบัติ**:
- `radius`: รัศมีวงโคจร (ค่าเริ่มต้น: intensity * 0.5)
- `speed`: ความเร็วหมุน (ค่าเริ่มต้น: 1.0)

**การใช้งานทั่วไป**: แอนิเมชันพื้นหลังตกแต่ง

---

### SPIRAL - การเคลื่อนที่เกลียว

รวมการหมุนกับการเคลื่อนที่เป็นวงกลม

```yaml
# เกลียวตามเข็มนาฬิกา
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # รัศมีเกลียว
    clockwise: true  # ทิศทางตามเข็มนาฬิกา
    loop: true
    easing_style: linear

# เกลียวทวนเข็มนาฬิกา
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**คุณสมบัติ**:
- `radius`: รัศมีเกลียว (ค่าเริ่มต้น: intensity * 0.3)
- `clockwise`: ทิศทางการเคลื่อนที่ (true/false)

---

### WAVE - การเคลื่อนที่คลื่น

คลื่นนุ่มนวลใช้ฟังก์ชัน sine

```yaml
# คลื่นแนวนอน
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # แอมพลิจูดคลื่น
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# คลื่นแนวตั้ง
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**คุณสมบัติ**:
- `axis`: ทิศทางคลื่น (horizontal, vertical)

---

### GLOW - การเรืองแสงเป็นจังหวะ

รวมการเต้นเบาๆ กับการเปลี่ยนความทึบ

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # ความเข้มข้นการเรืองแสง
    loop: true
    easing_style: in_out
```

**การใช้งานทั่วไป**: เน้นองค์ประกอบสำคัญ, ตัวบ่งชี้ความสนใจ

---

## การรวมแอนิเมชัน

คุณสามารถรวมแอนิเมชันหลายตัวตามลำดับหรือพร้อมกัน

### ตัวอย่าง 1: เข้าแบบดราม่า

```yaml
on_menu_open:
  # 1. เลื่อนจากซ้าย
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - บล็อกการกระทำถัดไป
      easing_style: out

  # 2. ซูมพร้อม overshoot (ทำงานหลัง slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. ลอยต่อเนื่อง (เริ่มหลังซูม)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### ตัวอย่าง 2: ปุ่มโต้ตอบซับซ้อน

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # เสียง hover
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # เปลี่ยน visual
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # เต้นเบาๆ
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # คืน visual
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # เสียงคลิก
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # ลำดับแอนิเมชัน
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # คำสั่ง (ทำงานหลังแอนิเมชัน)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### ตัวอย่าง 3: Widget ตกแต่งพร้อมหลายแอนิเมชัน

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # วงโคจรวงกลม
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # หมุนขณะโคจร
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # เรืองแสงเป็นจังหวะ
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## คุณสมบัติทั่วไป

แอนิเมชันทั้งหมดรองรับคุณสมบัติเหล่านี้:

### type
ประเภทการกระทำ (เสมอ `animation`)

### effect
ชื่อแอนิเมชัน (scale, rotate, pulse, ฯลฯ)

### duration
ระยะเวลาเป็นมิลลิวินาที

```yaml
duration: 1000  # 1 วินาที
```

### intensity
ความเข้มข้นแอนิเมชันทั่วไป (ความหมายแตกต่างตามประเภท)

```yaml
intensity: 0.5  # ครึ่งหนึ่งของความเข้มข้นเริ่มต้น
```

### loop
ว่าแอนิเมชันควรทำซ้ำไม่สิ้นสุด

```yaml
loop: true  # แอนิเมชันต่อเนื่อง
loop: false # แอนิเมชันเดียว (ค่าเริ่มต้น)
```

### delay
หน่วงเวลาก่อนแอนิเมชันเริ่ม (เป็น ms)

```yaml
delay: 500  # รอ 500ms ก่อนเริ่ม
```

### easing_style
ประเภท easing สำหรับการทำให้นุ่มนวล

```yaml
easing_style: linear      # ความเร็วคงที่
easing_style: in          # เร่งที่จุดเริ่มต้น
easing_style: out         # ชะลอที่จุดสิ้นสุด
easing_style: in_out      # เร่งและชะลอ
```

### priority
ลำดับความสำคัญแอนิเมชัน (ส่งผลต่อการขัดจังหวะ)

```yaml
priority: true   # CRITICAL - ไม่ถูกขัดจังหวะ, บล็อกการกระทำถัดไป
priority: false  # INTERRUPTIBLE - สามารถถูกขัดจังหวะได้ (ค่าเริ่มต้น)
```

**หมายเหตุ**: แอนิเมชันต่อเนื่อง (`loop: true`) มีลำดับความสำคัญ BACKGROUND เสมอ

---

## คู่มือการใช้งานตามบริบท

### แอนิเมชันสำหรับ on_menu_open

```yaml
on_menu_open:
  - effect: slide       # เข้าเลื่อน
  - effect: zoom_in     # เข้าพร้อม overshoot
  - effect: fade        # จางเข้านุ่มนวล
```

### แอนิเมชันสำหรับ on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # เพิ่มขนาด
  - effect: pulse       # เต้นเบาๆ
  - effect: glow        # เรืองแสงเน้น
  - effect: wobble      # แกว่งดึงความสนใจ
```

### แอนิเมชันสำหรับ on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # feedback แรงกด
  - effect: bounce      # กระโดดยืนยัน
  - effect: shake       # สั่นกระแทก
  - effect: flip        # พลิก/เปิดเผย
```

### แอนิเมชันต่อเนื่อง (ตกแต่ง)

```yaml
continuous-animations:
  - effect: float       # ลอยนุ่มนวล
  - effect: rotate      # หมุนคงที่
  - effect: orbit       # การเคลื่อนที่วงโคจร
  - effect: spiral      # เกลียวตกแต่ง
  - effect: wave        # การเคลื่อนที่คลื่น
  - effect: glow        # เรืองแสงเป็นจังหวะ
```

---

## ตารางอ้างอิงด่วน

| แอนิเมชัน | ประเภท | การใช้งานหลัก | Loop? | ลำดับความสำคัญเริ่มต้น |
|-----------|------|----------|-------|------------------|
| SCALE | Transformation | Hover, Click | ไม่ | INTERRUPTIBLE |
| ROTATE | Transformation | ตกแต่ง | ใช่ | BACKGROUND |
| TRANSLATE | Transformation | การเคลื่อนที่ | ไม่ | CRITICAL |
| PULSE | Movement | ต่อเนื่อง | ใช่ | BACKGROUND |
| BOUNCE | Movement | Click | ไม่ | INTERRUPTIBLE |
| SWING | Movement | Hover | ใช่ | INTERRUPTIBLE |
| FLOAT | Movement | ต่อเนื่อง | ใช่ | BACKGROUND |
| SHAKE | Movement | Click | ไม่ | INTERRUPTIBLE |
| FADE | Visual | เข้า/ออก | ไม่ | CRITICAL |
| SLIDE | Advanced | เข้า | ไม่ | CRITICAL |
| ZOOM_IN | Advanced | เข้า | ไม่ | CRITICAL |
| SQUEEZE | Advanced | Click | ไม่/ใช่ | INTERRUPTIBLE |
| FLIP | Advanced | State | ไม่ | CRITICAL |
| WOBBLE | Advanced | Hover | ใช่ | BACKGROUND |
| ORBIT | Advanced | ตกแต่ง | ใช่ | BACKGROUND |
| SPIRAL | Advanced | ตกแต่ง | ใช่ | BACKGROUND |
| WAVE | Advanced | ตกแต่ง | ใช่ | BACKGROUND |
| JIGGLE | Advanced | Hover | ไม่ | INTERRUPTIBLE |
| GLOW | Advanced | เน้น | ใช่ | BACKGROUND |

---

**อัปเดตล่าสุด**: 2025-10-15
**เวอร์ชันปลั๊กอิน**: 2.0
**ผู้เขียน**: Zodunix
