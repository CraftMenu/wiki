# CraftMenu - เริ่มต้นอย่างรวดเร็ว

## คู่มือ 5 นาที

คู่มือนี้จะพาคุณจากศูนย์ไปสู่เมนูที่ใช้งานได้ใน 5 นาที

---

## 1. การติดตั้ง (1 นาที)

1. **ดาวน์โหลด**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (dependency)

2. **ติดตั้ง**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **เริ่มเซิร์ฟเวอร์**

4. **ตรวจสอบ**:
   ```
   /cm info
   ```

---

## 2. สร้างเมนูแรกของคุณ (2 นาที)

1. **ในเกม** ไปยังตำแหน่งที่ต้องการ
2. รัน:
   ```
   /cm create mymenu
   ```

3. **สร้างเมนูเสร็จแล้ว!** ไฟล์ถูกสร้างที่:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. เพิ่มรูปภาพ (1 นาที)

1. **สร้างโฟลเดอร์**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **เพิ่มรูป PNG** (64x64 หรือ 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **สร้าง resource pack**:
   ```
   /cm zip
   ```

---

## 4. ตั้งค่าเมนู (1 นาที)

แก้ไข `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&lเมนูแรกของฉัน'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # ตำแหน่งที่คุณสร้าง
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # ปุ่มง่ายๆ (ใช้ IMAGE พร้อม hover/click events)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← รูปของคุณ
        hover:
          type: image
          value: mymenu/button-hover.png # ← รูป HOVER
        fallback:
          type: text
          value: "คลิกฉัน"               # ถ้ารูปโหลดไม่สำเร็จ
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
          command: '[MESSAGE] &aคุณคลิกปุ่มแล้ว!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # เคอร์เซอร์
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← รูปของคุณ
        fallback:
          type: text
          value: "§f→"
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
          volume: 0.3
```

---

## 5. ทดสอบ

1. **โหลดใหม่**:
   ```
   /cm reload
   ```

2. **เปิดเมนู**:
   ```
   /cm open mymenu
   ```

3. **เลื่อนเมาส์** เพื่อควบคุมเคอร์เซอร์
4. **คลิก** ที่ปุ่ม

---

## รายการตรวจสอบ

- [ ] ติดตั้งปลั๊กอินและทำงานได้
- [ ] สร้างเมนูด้วย `/cm create`
- [ ] เพิ่มรูปภาพใน `/images/mymenu/`
- [ ] สร้าง resource pack ด้วย `/cm zip`
- [ ] ตั้งค่าเมนูใน YAML
- [ ] เมนูทำงานด้วย `/cm open mymenu`
- [ ] ใช้ resource pack บน client

---

## ปัญหาที่พบบ่อย

### "เมนูไม่โหลด"

```bash
/cm reload
/cm list  # ตรวจสอบว่าเมนูปรากฏ
```

### เคอร์เซอร์ไม่แสดง

**วิธีแก้**: ตรวจสอบว่า cursor อยู่ใน YAML และมี visual ที่ตั้งค่าไว้

### รูปภาพแสดง "?"

```bash
/cm images scan    # ตรวจสอบว่าพบรูปภาพ
/cm zip            # สร้าง resource pack ใหม่
/cm reload         # โหลดใหม่
```

### Resource pack ไม่ดาวน์โหลด

ผู้เล่นต้อง:
1. ติดตั้งด้วยตนเอง: คัดลอก `/plugins/CraftMenu/craftmenu.zip` ไปที่ `.minecraft/resourcepacks/`
2. หรือตั้งค่าใน `server.properties` (ต้องมี web hosting)

---

## ขั้นตอนถัดไป

1. [เอกสารเมนูฉบับสมบูรณ์](MENU_CREATION.md)
3. [ฟีเจอร์ขั้นสูง](FEATURES.md)

---

## แหล่งข้อมูลที่มีประโยชน์

- **รูปภาพตัวอย่าง**: ค้นหา "minecraft UI icons" หรือสร้างเอง
- **ขนาดที่แนะนำ**: 64x64, 128x128
- **รูปแบบ**: PNG พร้อมความโปร่งใส
- **เสียง Minecraft**: [รายการทั้งหมด](https://minecraft.fandom.com/wiki/Sounds.json)

---

อัปเดตล่าสุด: 2026-02-02
