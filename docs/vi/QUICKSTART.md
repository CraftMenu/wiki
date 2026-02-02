# CraftMenu - Khoi Dong Nhanh

## Huong Dan 5 Phut

Huong dan nay giup ban tao menu hoat dong chi trong 5 phut.

---

## 1. Cai Dat (1 phut)

1. **Tai xuong**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (phu thuoc)

2. **Cai dat**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Khoi dong server**

4. **Kiem tra**:
   ```
   /cm info
   ```

---

## 2. Tao Menu Dau Tien (2 phut)

1. **Trong game**, di den vi tri mong muon
2. Chay:
   ```
   /cm create mymenu
   ```

3. **Menu da duoc tao!** Tap tin duoc tao tai:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. Them Hinh Anh (1 phut)

1. **Tao thu muc**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **Them hinh anh PNG** (64x64 hoac 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Tao resource pack**:
   ```
   /cm zip
   ```

---

## 4. Cau Hinh Menu (1 phut)

Chinh sua `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&lMenu Dau Tien'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Noi ban tao menu
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Nut don gian (su dung IMAGE voi su kien hover/click)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← HINH CUA BAN
        hover:
          type: image
          value: mymenu/button-hover.png # ← HINH KHI HOVER
        fallback:
          type: text
          value: "CLICK TAI DAY"          # Neu hinh khong tai duoc
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
          command: '[MESSAGE] &aBan da click vao nut!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Con tro
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← HINH CUA BAN
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

## 5. Kiem Tra

1. **Tai lai**:
   ```
   /cm reload
   ```

2. **Mo menu**:
   ```
   /cm open mymenu
   ```

3. **Di chuyen chuot** de dieu khien con tro
4. **Click** vao nut

---

## Danh Sach Kiem Tra

- [ ] Plugin da cai dat va hoat dong
- [ ] Menu da tao voi `/cm create`
- [ ] Hinh anh da them trong `/images/mymenu/`
- [ ] Resource pack da tao voi `/cm zip`
- [ ] Menu da cau hinh trong YAML
- [ ] Menu hoat dong voi `/cm open mymenu`
- [ ] Resource pack da ap dung tren client

---

## Van De Thuong Gap

### "Menu khong tai duoc"

```bash
/cm reload
/cm list  # Kiem tra menu co xuat hien khong
```

### Con tro khong hien thi

**Giai phap**: Kiem tra cursor co trong YAML va co cau hinh visual

### Hinh anh hien thi "?"

```bash
/cm images scan    # Kiem tra hinh anh da duoc tim thay chua
/cm zip            # Tao lai resource pack
/cm reload         # Tai lai
```

### Resource pack khong tai xuong

Nguoi choi can:
1. Cai dat thu cong: sao chep `/plugins/CraftMenu/craftmenu.zip` den `.minecraft/resourcepacks/`
2. HOAC cau hinh trong `server.properties` (can hosting web)

---

## Buoc Tiep Theo

1. [Tai Lieu Menu Day Du](MENU_CREATION.md)
3. [Tinh Nang Nang Cao](FEATURES.md)

---

## Tai Nguyen Huu Ich

- **Hinh anh mau**: Tim kiem "minecraft UI icons" hoac tu tao
- **Kich thuoc khuyen nghi**: 64x64, 128x128
- **Dinh dang**: PNG co do trong suot
- **Am thanh Minecraft**: [Danh sach day du](https://minecraft.fandom.com/wiki/Sounds.json)

---

Cap nhat lan cuoi: 2026-02-02
