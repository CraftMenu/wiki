# CraftMenu - Panduan Cepat

## Panduan 5 Menit

Panduan ini membawa Anda dari nol ke menu yang berfungsi dalam 5 menit.

---

## 1. Instalasi (1 menit)

1. **Unduh**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (dependensi)

2. **Instal**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Jalankan server**

4. **Verifikasi**:
   ```
   /cm info
   ```

---

## 2. Buat Menu Pertama Anda (2 menit)

1. **Dalam game**, pergi ke lokasi yang diinginkan
2. Jalankan:
   ```
   /cm create menuku
   ```

3. **Menu dibuat!** File dihasilkan di:
   ```
   /plugins/CraftMenu/menus/menuku.yml
   ```

---

## 3. Tambahkan Gambar (1 menit)

1. **Buat folder**:
   ```
   /plugins/CraftMenu/images/menuku/
   ```

2. **Tambahkan gambar PNG** (64x64 atau 128x128):
   ```
   images/menuku/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Hasilkan resource pack**:
   ```
   /cm zip
   ```

---

## 4. Konfigurasi Menu (1 menit)

Edit `/plugins/CraftMenu/menus/menuku.yml`:

```yaml
menu:
  name: menuku
  title: '&b&lMenu Pertama Saya'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Tempat Anda membuatnya
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Tombol sederhana (menggunakan IMAGE dengan event hover/click)
    tombol_saya:
      type: IMAGE
      visual:
        normal:
          type: image
          value: menuku/button.png       # ← GAMBAR ANDA
        hover:
          type: image
          value: menuku/button-hover.png # ← GAMBAR HOVER
        fallback:
          type: text
          value: "KLIK SAYA"              # Jika gambar gagal
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
          command: '[MESSAGE] &aAnda mengklik tombol!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Kursor
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: menuku/cursor.png  # ← GAMBAR ANDA
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

## 5. Uji Coba

1. **Muat ulang**:
   ```
   /cm reload
   ```

2. **Buka menu**:
   ```
   /cm open menuku
   ```

3. **Gerakkan mouse** untuk mengontrol kursor
4. **Klik** tombolnya

---

## Daftar Periksa

- [ ] Plugin terinstal dan berfungsi
- [ ] Menu dibuat dengan `/cm create`
- [ ] Gambar ditambahkan di `/images/menuku/`
- [ ] Resource pack dihasilkan dengan `/cm zip`
- [ ] Menu dikonfigurasi dalam YAML
- [ ] Menu berfungsi dengan `/cm open menuku`
- [ ] Resource pack diterapkan di client

---

## Masalah Umum

### "Menu tidak dimuat"

```bash
/cm reload
/cm list  # Periksa apakah menu muncul
```

### Kursor tidak muncul

**Solusi**: Periksa kursor ada di YAML dan memiliki visual yang dikonfigurasi

### Gambar menampilkan "?"

```bash
/cm images scan    # Periksa apakah gambar ditemukan
/cm zip            # Hasilkan ulang resource pack
/cm reload         # Muat ulang
```

### Resource pack tidak terunduh

Pemain perlu:
1. Instal manual: salin `/plugins/CraftMenu/craftmenu.zip` ke `.minecraft/resourcepacks/`
2. ATAU konfigurasikan di `server.properties` (memerlukan web hosting)

---

## Langkah Selanjutnya

1. [Dokumentasi Menu Lengkap](MENU_CREATION.md)
3. [Fitur Lanjutan](FEATURES.md)

---

## Sumber Daya Berguna

- **Contoh gambar**: Cari "minecraft UI icons" atau buat sendiri
- **Ukuran yang direkomendasikan**: 64x64, 128x128
- **Format**: PNG dengan transparansi
- **Suara Minecraft**: [Daftar lengkap](https://minecraft.fandom.com/wiki/Sounds.json)

---

Terakhir diperbarui: 2026-02-02
