# Fitur CraftMenu

## Daftar Isi
1. [Sistem Suara Terpadu](#sistem-suara-terpadu)
2. [Event Widget](#event-widget)
3. [Sistem State](#sistem-state)
4. [Umpan Balik Batas yang Dapat Dikonfigurasi](#umpan-balik-batas-yang-dapat-dikonfigurasi)
5. [Perintah Khusus](#perintah-khusus)

---

## Sistem Suara Terpadu

Semua field suara sekarang mendukung dua jenis:

### Suara Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Suara Minecraft native
  volume: 0.8
  pitch: 1.0
```

**Contoh suara Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Suara Kustom (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Otomatis diselesaikan
  # ATAU
  file: "craftmenu:template/click"   # Eksplisit dengan namespace
  volume: 1.0
  pitch: 1.2
```

**Langkah untuk suara kustom**:
1. Tambahkan `.ogg` di `/plugins/CraftMenu/sounds/template/click.ogg`
2. Jalankan `/cm zip`
3. Resource pack secara otomatis menyertakan suara tersebut

---

## Event Widget

### on_menu_open

Dijalankan secara otomatis saat menu dibuka. Berguna untuk musik latar.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Saat kursor memasuki area widget.

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

Saat kursor meninggalkan area widget.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Saat widget diklik.

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (Hanya Kursor)

Dijalankan pada SETIAP klik, bahkan di luar widget.

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## Sistem State

Memungkinkan widget dengan berbagai perilaku (misalnya, tombol toggle hidup/mati).

### State Default

- `normal`: State awal
- `hover`: Mouse di atas widget
- `pressed`: Widget diklik
- `disabled`: Widget dinonaktifkan
- `fallback`: Saat visual tidak dimuat

### State Kustom

Anda dapat membuat state Anda sendiri:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Suara aktif
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Suara mati (state kustom)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover saat mati (state kustom)
      type: image
      value: template/sound-mute-hover.png
```

### Aksi State

#### toggle_state

Beralih antara daftar state.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Berputar antar state
```

#### visual_change_conditional

Mengubah visual hanya jika state saat ini adalah X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Jika state adalah "normal"
  to: hover                      # Ubah ke "hover"
- action: visual_change_conditional
  if_state: disabled            # Jika state adalah "disabled"
  to: disabled_hover             # Ubah ke "disabled_hover"
```

#### command_conditional

Menjalankan perintah hanya jika state adalah X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Jika menjadi "disabled"
  command: '[STOP_MUSIC]'        # Hentikan musik
- action: command_conditional
  if_state: normal              # Jika menjadi "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Putar musik
```

### Contoh Lengkap: Tombol Toggle

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## Umpan Balik Batas yang Dapat Dikonfigurasi

Menyesuaikan umpan balik saat kursor mencapai batas pergerakan.

### Konfigurasi

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Suara saat mencapai batas
      volume: 0.5                          # Volume 0.0-1.0
      pitch: 0.6                           # Pitch 0.5-2.0
      message: "&c&lBatas kursor tercapai!" # Pesan di action bar
```

### Suara yang Direkomendasikan

- `minecraft:ui.button.click` - Klik lembut
- `minecraft:block.note_block.bass` - Nada rendah
- `craftmenu:template/warning.ogg` - Suara kustom

---

## Perintah Khusus

Digunakan dengan `action: command`.

### [TELEPORT]

Teleportasi pemain.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

Mengirim pesan ke pemain.

```yaml
- action: command
  command: '[MESSAGE] &aSelamat datang di game!'
  delay: 500  # Tunggu 500ms sebelum mengirim
```

### [CLOSE]

Menutup menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Tutup setelah 1 detik
```

### [PLAY_MUSIC]

Memutar musik untuk widget (hanya satu suara per widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Mendukung namespace**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Menghentikan suara yang sedang diputar untuk widget ini.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Penting**: `[STOP_MUSIC]` hanya menghentikan suara widget ini, tidak mempengaruhi widget lain atau suara global.

**Catatan Teknis**: Perintah menggunakan `player.stopAllSounds()` secara internal karena `player.stopSound(key)` tidak berfungsi dengan suara resource pack kustom. Namun, ini hanya dipicu oleh widget tertentu.

### [OPEN_URL]

Membuka URL di browser pemain (memerlukan konfirmasi).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## Penghentian Suara Otomatis

**Saat menu ditutup**, SEMUA suara secara otomatis dihentikan untuk pemain. Ini termasuk:

- Musik latar yang diputar via `[PLAY_MUSIC]`
- Suara hover/click widget
- Suara apa pun yang aktif saat penutupan

### Cara Kerjanya

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← Dipanggil SEBELUM close()
}
menuInstance.close();
```

### Keterbatasan Teknis

Sistem menggunakan `player.stopAllSounds()` karena:
- `player.stopSound(key)` **tidak berfungsi** dengan suara resource pack kustom
- `player.stopSound(key, category)` **juga tidak berfungsi**
- `stopAllSounds()` adalah **satu-satunya solusi yang dapat diandalkan**

Ini berarti **semua** suara pemain dihentikan saat menutup menu, bukan hanya suara menu. Ini adalah keterbatasan Minecraft/Bukkit, bukan CraftMenu.

### Alternatif: Kontrol Manual

Jika Anda lebih suka tidak menghentikan suara secara otomatis, gunakan tombol toggle di menu:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Hentikan musik secara manual
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Aksi Visual

### visual_change

Mengubah state visual tanpa syarat.

```yaml
- action: visual_change
  to: hover
```

### scale

Menganimasikan skala widget sementara.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% dari ukuran
  duration: 300                     # Durasi dalam ms
```

### scale_reset

Mengatur ulang skala ke ukuran asli.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Menghapus widget sepenuhnya (visual, collision, suara).

```yaml
- action: hide_widget
  widget: fov_warning  # Nama widget yang akan disembunyikan
```

**Catatan**: Widget tersembunyi tidak dapat dipulihkan tanpa membuka ulang menu.

---

## Contoh Lengkap: Menu dengan Semua Fitur

```yaml
menu:
  name: contoh_lengkap
  title: '&b&lContoh Menu Lengkap'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &cKursor mencapai tepi!"

  widgets:
    # Tombol dengan musik latar
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # Tombol aksi dengan umpan balik lengkap
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aMemulai game...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Kursor dengan umpan balik suara
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
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
          volume: 0.4
          pitch: 1.0
```

---

Terakhir diperbarui: 2026-02-02
Versi Plugin: 2.0
