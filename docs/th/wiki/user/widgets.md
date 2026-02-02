# ประเภท Widget

CraftMenu รองรับ widget สามประเภทสำหรับสร้างเมนู

## ภาพรวมประเภท Widget

| ประเภท | คำอธิบาย | โต้ตอบได้ |
|--------|----------|-----------|
| IMAGE | แสดงภาพ | ได้ |
| TEXT | แสดงข้อความที่จัดรูปแบบแล้ว | ได้ |
| CURSOR | เคอร์เซอร์เมาส์ | พิเศษ |

## IMAGE Widget

ใช้สำหรับปุ่ม พื้นหลัง และองค์ประกอบตกแต่ง

### ภาพพื้นฐาน

```yaml
my_image:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### ภาพที่มีสถานะ

```yaml
my_button:
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

### การ Override สถานะ

แต่ละสถานะสามารถมี override ของ transform และ collision:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # ใหญ่ขึ้นเล็กน้อยเมื่อ hover
```

## TEXT Widget

แสดงข้อความที่จัดรูปแบบแล้วพร้อมรองรับ PlaceholderAPI

### ข้อความพื้นฐาน

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bยินดีต้อนรับสู่เซิร์ฟเวอร์!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### ข้อความที่มี Placeholder

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7ผู้เล่น: &f%player_name%\n&7ระดับ: &a%player_level%"
      text-size: 0.8
```

### ข้อความหลายบรรทัด

ใช้ `\n` สำหรับการขึ้นบรรทัดใหม่:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "บรรทัด 1\nบรรทัด 2\nบรรทัด 3"
```

## CURSOR Widget

เคอร์เซอร์ติดตามการเคลื่อนที่ของเมาส์ผู้เล่น

### เคอร์เซอร์พื้นฐาน

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

## คุณสมบัติ Transform

Widget ทั้งหมดรองรับคุณสมบัติ transform:

```yaml
transform:
  position:
    x: 0.0    # ออฟเซ็ตแนวนอน
    y: 0.0    # ออฟเซ็ตแนวตั้ง
    z: 0.0    # ออฟเซ็ตความลึก
  size:
    x: 0.1    # สเกลความกว้าง
    y: 0.1    # สเกลความสูง
    z: 0.1    # สเกลความลึก
  rotation:
    pitch: 0  # การหมุนแกน X
    yaw: 0    # การหมุนแกน Y
    roll: 0   # การหมุนแกน Z
```

## คุณสมบัติ Collision

เปิดใช้งานหรือกำหนดการตรวจจับการชนเอง:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## ลำดับ Widget

Widget ถูกแสดงผลตามลำดับที่ปรากฏในไฟล์ YAML Widget ที่อยู่ทีหลังจะปรากฏอยู่ข้างหน้า widget ที่อยู่ก่อน
