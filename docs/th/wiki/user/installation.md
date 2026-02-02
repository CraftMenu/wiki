# คู่มือการติดตั้ง

คู่มือนี้ครอบคลุมการติดตั้งและคอนฟิก CraftMenu บนเซิร์ฟเวอร์ Minecraft ของคุณ

## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง CraftMenu ตรวจสอบให้แน่ใจว่าคุณมี:

- เซิร์ฟเวอร์ Minecraft ที่รัน Paper, Spigot, หรือ Purpur 1.20.4+
- Java 17 หรือสูงกว่าที่ติดตั้งแล้ว
- ปลั๊กอิน PacketEvents ที่ติดตั้งแล้ว

## ขั้นตอนการติดตั้ง

### 1. ดาวน์โหลด CraftMenu

ดาวน์โหลด JAR CraftMenu ล่าสุดจากหน้า releases

### 2. ติดตั้ง Dependencies

ตรวจสอบว่า PacketEvents ติดตั้งอยู่ในโฟลเดอร์ `plugins/` ก่อน CraftMenu

### 3. ติดตั้ง CraftMenu

วาง `CraftMenu.jar` ในโฟลเดอร์ `plugins/` ของเซิร์ฟเวอร์

### 4. เริ่มเซิร์ฟเวอร์

เริ่มเซิร์ฟเวอร์ของคุณ CraftMenu จะสร้างไฟล์คอนฟิก:

```
plugins/CraftMenu/
├── config.yml           # คอนฟิกทั่วไป
├── menus/              # เทมเพลตเมนู
│   └── template.yml    # เมนูตัวอย่างเริ่มต้น
├── images/             # ภาพที่กำหนดเอง
│   └── template/       # ภาพสำหรับเมนู template
├── sounds/             # เสียงที่กำหนดเอง
│   └── template/       # เสียงสำหรับเมนู template
└── language/           # ไฟล์ภาษา
```

### 5. สร้าง Resource Pack

รัน `/cm pakked` เพื่อสร้าง resource pack ซึ่งจะสร้าง:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. คอนฟิกการแจกจ่าย Resource Pack

คุณมีหลายตัวเลือก:

**ตัวเลือก A: Server Resource Pack**
```properties
# ใน server.properties
resource-pack=https://your-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**ตัวเลือก B: แจกจ่ายด้วยตนเอง**
แชร์ไฟล์ ZIP กับผู้เล่นและให้พวกเขาติดตั้งด้วยตนเอง

**ตัวเลือก C: ใช้ปลั๊กอิน Resource Pack**
ใช้ปลั๊กอินเช่น ItemsAdder หรือ Oraxen สำหรับการแจกจ่ายอัตโนมัติ

## การคอนฟิก

### การตั้งค่าพื้นฐาน

แก้ไข `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "th_TH"          # th_TH, en_US, หรือ pt_BR
    debug: false               # เปิดสำหรับการแก้ปัญหา

  resourcepack:
    auto-generate: true        # สร้างอัตโนมัติเมื่อเริ่มต้น
    compression: true          # บีบอัดไฟล์ ZIP
```

### การตั้งค่าประสิทธิภาพ

```yaml
craftmenu:
  performance:
    async-loading: true        # โหลดเมนูแบบ asynchronous
    cache-enabled: true        # แคชเทมเพลตเมนู
    update-interval: 1         # ticks ระหว่างการอัปเดต
```

## ตรวจสอบการติดตั้ง

1. รัน `/cm chuayluea` เพื่อดูคำสั่งที่ใช้งานได้
2. รัน `/cm raykan` เพื่อดูเมนูที่โหลดแล้ว
3. รัน `/cm perd template` เพื่อทดสอบเมนูเริ่มต้น

## ขั้นตอนถัดไป

- [สร้างเมนูแรกของคุณ](menu-creation.md)
- [เรียนรู้เกี่ยวกับ widgets](widgets.md)
- [คอนฟิก events](events.md)
