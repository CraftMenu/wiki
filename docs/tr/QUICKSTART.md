# CraftMenu - Hizli Baslangic

## 5 Dakikalik Rehber

Bu rehber sizi sifirdan calisan bir menuye 5 dakikada ulastirir.

---

## 1. Kurulum (1 dk)

1. **Indirin**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (bagimllik)

2. **Yukleyin**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Sunucuyu baslatin**

4. **Dogrulayin**:
   ```
   /cm info
   ```

---

## 2. Ilk Menunuzu Olusturun (2 dk)

1. **Oyun icinde**, istediginiz konuma gidin
2. Calistirin:
   ```
   /cm create menuum
   ```

3. **Menu olusturuldu!** Dosya burada olusturuldu:
   ```
   /plugins/CraftMenu/menus/menuum.yml
   ```

---

## 3. Resim Ekleyin (1 dk)

1. **Klasor olusturun**:
   ```
   /plugins/CraftMenu/images/menuum/
   ```

2. **PNG resimleri ekleyin** (64x64 veya 128x128):
   ```
   images/menuum/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Kaynak paketi olusturun**:
   ```
   /cm zip
   ```

---

## 4. Menuyu Yapilandirin (1 dk)

`/plugins/CraftMenu/menus/menuum.yml` dosyasini duzenleyin:

```yaml
menu:
  name: menuum
  title: '&b&lIlk Menum'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Olusturdugumuz yer
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Basit buton (hover/click olaylari ile IMAGE kullanarak)
    butonum:
      type: IMAGE
      visual:
        normal:
          type: image
          value: menuum/button.png       # ← SIZIN RESMINIZ
        hover:
          type: image
          value: menuum/button-hover.png # ← HOVER RESMI
        fallback:
          type: text
          value: "TIKLA"                  # Resim yuklenemezse
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
          command: '[MESSAGE] &aButona tikladiniz!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Imlec
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: menuum/cursor.png  # ← SIZIN RESMINIZ
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

## 5. Test Edin

1. **Yeniden yukleyin**:
   ```
   /cm reload
   ```

2. **Menuyu acin**:
   ```
   /cm open menuum
   ```

3. **Fareyi hareket ettirin** imleci kontrol etmek icin
4. **Butona tiklayin**

---

## Kontrol Listesi

- [ ] Eklenti yuklendi ve calisiyor
- [ ] Menu `/cm create` ile olusturuldu
- [ ] Resimler `/images/menuum/` klasorune eklendi
- [ ] Kaynak paketi `/cm zip` ile olusturuldu
- [ ] Menu YAML'da yapilandirildi
- [ ] Menu `/cm open menuum` ile calisiyor
- [ ] Kaynak paketi istemcide uyguland

---

## Sik Karsilasilan Sorunlar

### "Menu yuklenemedi"

```bash
/cm reload
/cm list  # Menunun gorunup gorunmedigini kontrol edin
```

### Imlec gorunmuyor

**Cozum**: Imlecinizin YAML'da oldugunu ve gorselin yapilandirildigini kontrol edin

### Resimler "?" gosteriyor

```bash
/cm images scan    # Resimlerin bulunup bulunmadigini kontrol edin
/cm zip            # Kaynak paketini yeniden olusturun
/cm reload         # Yeniden yukleyin
```

### Kaynak paketi indirilmiyor

Oyuncunun yapmasi gerekenler:
1. Manuel olarak yukleyin: `/plugins/CraftMenu/craftmenu.zip` dosyasini `.minecraft/resourcepacks/` klasorune kopyalayin
2. VEYA `server.properties` dosyasinda yapilandirin (web barindirma gerektirir)

---

## Sonraki Adimlar

1. [Tam Menu Dokumantasyonu](MENU_CREATION.md)
3. [Gelismis Ozellikler](FEATURES.md)

---

## Faydali Kaynaklar

- **Ornek resimler**: "minecraft UI icons" arayin veya kendiniz olusturun
- **Onerilen boyutlar**: 64x64, 128x128
- **Format**: Seffaflikli PNG
- **Minecraft Sesleri**: [Tam liste](https://minecraft.fandom.com/wiki/Sounds.json)

---

Son guncelleme: 2026-02-02
