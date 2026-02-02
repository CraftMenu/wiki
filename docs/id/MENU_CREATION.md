# Membuat Menu di CraftMenu

## Daftar Isi
1. [Pembuatan via Perintah](#pembuatan-via-perintah)
2. [Struktur YAML](#struktur-yaml)
3. [Widget yang Tersedia](#widget-yang-tersedia)
4. [Transform (Penempatan)](#transform-penempatan)
5. [Collision](#collision)
6. [Event dan Aksi](#event-dan-aksi)
7. [Contoh Praktis](#contoh-praktis)

---

## Pembuatan via Perintah

### Metode yang Direkomendasikan

1. **Masuk ke game** dan pergi ke lokasi di mana Anda ingin menu tersebut
2. **Lihat ke arah** yang harus dihadapi pemain saat membuka menu
3. **Jalankan**:
   ```
   /cm create nama_menu
   ```

Menu akan dibuat dengan lokasi dan rotasi Anda saat ini!

### Struktur yang Dihasilkan

```
/plugins/CraftMenu/menus/nama_menu.yml
```

**Template default mencakup**:
- Widget peringatan FOV (dapat dihapus)
- Kursor yang dikonfigurasi
- Pengaturan yang dioptimalkan
- Umpan balik batas
- **Kursor menggunakan TEXT secara default** - ubah ke IMAGE setelah menambahkan tekstur

---

## Struktur YAML

### Bagian Utama

```yaml
menu:
  name: String              # Nama menu
  title: String             # Judul (mendukung &codes)
  main: boolean             # Menu utama? (masa depan)
  location:                 # Lokasi dunia
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Pengaturan
    # ... (lihat di bawah)
  widgets:                  # Widget menu
    nama_widget:
      # ... (lihat di bawah)
```

### Pengaturan Detail

```yaml
settings:
  # Audio
  background-music: "template/background.ogg"  # Musik latar (opsional)

  # Pergerakan kursor
  cursor-sensitivity: 1.0          # Sensitivitas (0.1 - 5.0)
  max-yaw-offset: 61.0             # Batas horizontal dalam derajat
  max-pitch-offset: 36.0           # Batas vertikal dalam derajat
  mount-time: 100                  # Waktu mount dalam tick

  # Penempatan menu
  distance-multiplier: -0.01       # Pengali jarak
  menu-distance: 0.3               # Jarak menu

  # Performa
  debug-mode: false                # Mode debug
  update-rate: 1                   # Tingkat pembaruan
  collision-detection: true        # Deteksi collision aktif

  # Kamera
  camera-lock-enabled: true        # Kunci kamera
  camera-lock-strength: 0.4        # Kekuatan kunci (0.0-1.0)

  # Umpan balik batas
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lBatas kursor tercapai!"
```

---

## Widget yang Tersedia

### BUTTON

Tombol interaktif dengan hover dan klik.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "▶ MAIN"
  transform:
    position: {x: 0, y: 0.1, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover: [...]
    on_cursor_click: [...]
```

### IMAGE

Gambar statis (bisa memiliki hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Opsional
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Tanpa interaksi
```

### TEXT

Teks berformat.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lSELAMAT DATANG
        &7di server
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Ukuran teks
  shadow: true              # Bayangan
  background-color: '#000000'  # Warna latar (hex)
```

### CURSOR

Kursor yang dikontrol mouse (**hanya 1 per menu**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # z tinggi = di depan
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Pengaturan kursor
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animasi
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Area collision
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Penempatan)

### Position

Posisi dalam ruang 3D relatif terhadap titik spawn menu.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Kiri (-) / Kanan (+)
- **y**: Bawah (-) / Atas (+)
- **z**: Jauh (-) / Dekat (+)

**Tips**: z=0.1 bagus untuk latar belakang, z=1.0 untuk kursor (selalu terlihat)

### Size

Ukuran widget.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Skala tipikal**:
- Tombol kecil: `0.015`
- Tombol sedang: `0.02`
- Tombol besar: `0.03`
- Logo: `0.04-0.05`
- Kursor: `0.005`

### Rotation (Opsional)

Rotasi dalam derajat.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Catatan**: Biasanya tidak diperlukan (ViewFrame sudah menyesuaikan)

---

## Collision

### Konfigurasi Dasar

```yaml
collision:
  enabled: true                     # Aktifkan collision
  position: {x: 0, y: 0, z: 0.1}   # Opsional: override posisi
  size: {x: 0.08, y: 0.04, z: 0.02} # Ukuran kotak
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Opsional
```

### Debug Visual

```yaml
collision:
  debug:
    enabled: true     # Tampilkan partikel
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, dll
    size: 0.005       # Ukuran partikel
```

**Aktifkan secara global**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Tips Collision

1. **Ukuran visual ≠ ukuran collision**
   - Collision bisa lebih besar untuk klik yang lebih mudah
   - Contoh: visual 0.02, collision 0.08x0.04

2. **Posisi collision**
   - Jika tidak ditentukan, menggunakan transform.position
   - Tentukan jika Anda ingin area yang berbeda

3. **Collision-area (Kursor)**
   - Kursor menggunakan `collision-area` bukan `collision`
   - Alasan: Kursor memiliki perilaku khusus

---

## Event dan Aksi

### Event yang Tersedia

| Event | Kapan Dijalankan | Widget |
|-------|------------------|--------|
| `on_menu_open` | Menu dibuka | Semua |
| `on_cursor_hover` | Kursor masuk | Button, Image, Text |
| `on_cursor_hover_exit` | Kursor keluar | Button, Image, Text |
| `on_cursor_click` | Widget diklik | Button |
| `on_click_any` | Klik apa pun | Cursor |

### Aksi yang Tersedia

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, dll
```

#### visual_change_conditional

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

#### sound

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # ATAU "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ms
```

#### scale_reset

```yaml
- action: scale_reset
  duration: 200
```

#### command

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  delay: 1000  # Opsional, dalam ms
```

**Perintah khusus**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] teks dengan &warna`
- `[CLOSE]`
- `[PLAY_MUSIC] path/sound.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`

#### toggle_state

```yaml
- action: toggle_state
  states: [normal, disabled]
```

#### hide_widget

```yaml
- action: hide_widget
  widget: nama_widget
```

---

## Contoh Praktis

### Tombol Sederhana dengan Suara

```yaml
simple_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/button.png}
    hover: {type: image, value: menu/button-hover.png}
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
      command: '[MESSAGE] &aTombol diklik!'
```

### Tombol dengan Teleport

```yaml
spawn_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/spawn.png}
    hover: {type: image, value: menu/spawn-hover.png}
  transform:
    position: {x: -0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_click:
    - action: sound
      file: "minecraft:entity.enderman.teleport"
    - action: command
      command: '[MESSAGE] &eTeleportasi...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Tombol Toggle (Hidup/Mati)

```yaml
toggle_button:
  type: BUTTON
  initial-state: normal
  visual:
    normal: {type: image, value: menu/on.png}
    hover: {type: image, value: menu/on-hover.png}
    disabled: {type: image, value: menu/off.png}
    disabled_hover: {type: image, value: menu/off-hover.png}
  transform:
    position: {x: 0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change_conditional
      if_state: normal
      to: hover
    - action: visual_change_conditional
      if_state: disabled
      to: disabled_hover
    on_cursor_hover_exit:
    - action: visual_change_conditional
      if_state: normal
      to: normal
    - action: visual_change_conditional
      if_state: disabled
      to: disabled
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[MESSAGE] &cDinonaktifkan!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aDiaktifkan!'
```

### Widget Teks yang Dapat Diklik

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lPERINGATAN
        &7Klik untuk menutup
    hover:
      type: text
      value: |-
        &c&lPERINGATAN
        &e&oKlik untuk menutup
  transform:
    position: {x: 0, y: -0.1, z: 0.1}
    size: {x: 0.4, y: 0.2, z: 0.01}
  text-size: 0.12
  shadow: true
  background-color: '#8B0000'
  collision:
    enabled: true
    size: {x: 0.15, y: 0.03, z: 0.01}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: hide_widget
      widget: warning_text
```

---

## Praktik Terbaik

1. **Organisir berdasarkan layer (z)**:
   - z=0.05: Latar belakang
   - z=0.1: Tombol
   - z=0.15: Overlay
   - z=1.0: Kursor

2. **Beri nama widget secara deskriptif**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Selalu sertakan fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEKS"}
   ```

4. **Collision lebih besar dari visual**:
   - Visual: 0.02
   - Collision: 0.08x0.04 (lebih mudah diklik)

5. **Gunakan suara Minecraft jika memungkinkan**:
   - Tidak perlu resource pack
   - Berfungsi tanpa konfigurasi tambahan

6. **Uji secara bertahap**:
   - Tambahkan 1 widget sekaligus
   - Gunakan `/cm reload` secara sering
   - Uji setiap interaksi

---

Terakhir diperbarui: 2026-02-02
