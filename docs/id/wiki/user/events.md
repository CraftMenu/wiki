# Sistem Event

CraftMenu menggunakan sistem event untuk menangani interaksi pengguna dengan widget.

## Jenis Event

| Event | Pemicu | Tersedia Pada |
|-------|--------|---------------|
| `on_menu_open` | Menu terbuka | Semua widget |
| `on_cursor_hover` | Kursor masuk ke widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Kursor keluar dari widget | IMAGE, TEXT |
| `on_cursor_click` | Widget diklik | IMAGE, TEXT |
| `on_click_any` | Klik apa saja | Hanya CURSOR |

## Struktur Event Dasar

```yaml
widgets:
  tombol_saya:
    type: IMAGE
    visual:
      normal: {type: image, value: template/button.png}
    events:
      on_cursor_hover:
        - action: sound
          file: minecraft:ui.button.click
          volume: 0.5
          pitch: 1.2
      on_cursor_click:
        - action: command
          command: "[MESSAGE] &aAnda mengklik!"
```

## Jenis Aksi

### Aksi Suara

Memutar efek suara:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Suara Minecraft
  volume: 1.0                       # 0.0 hingga 1.0
  pitch: 1.0                        # 0.5 hingga 2.0
```

Suara kustom:
```yaml
- action: sound
  file: template/click.ogg         # File suara kustom
```

### Aksi Animasi

Memicu animasi:

```yaml
- action: animation
  effect: scale                    # Jenis animasi
  duration: 200                    # Durasi dalam ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Skala target
  easing_style: ease_out           # Fungsi easing
  priority: false                  # Blokir aksi lain?
```

### Aksi Perintah

Menjalankan perintah:

```yaml
- action: command
  command: "[MESSAGE] Halo!"      # Perintah khusus
  delay: 0                         # Delay dalam ms
```

**Perintah Khusus:**
- `[MESSAGE] teks` - Kirim pesan ke pemain
- `[TELEPORT] world x y z yaw pitch` - Teleportasi pemain
- `[CLOSE]` - Tutup menu
- `[PLAY_MUSIC] path/file.ogg` - Putar musik latar
- `[STOP_MUSIC]` - Hentikan musik
- `[OPEN_URL] https://...` - Buka URL (dapat diklik)
- `[PLAYER] /perintah` - Jalankan perintah sebagai pemain
- `[CONSOLE] /perintah` - Jalankan perintah sebagai konsol

### Aksi Status

Mengubah status widget:

```yaml
# Beralih antar status
- action: toggle_state
  states: [normal, disabled]

# Atur status tertentu
- action: set_state
  state: disabled
```

### Aksi Perubahan Visual

Mengubah tampilan widget:

```yaml
- action: visual_change
  to: hover

# Perubahan kondisional
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Aksi Sembunyikan Widget

Menghapus widget dari tampilan:

```yaml
- action: hide_widget
  widget: nama_widget_saya
```

### Aksi Hentikan Animasi

Menghentikan animasi yang berjalan:

```yaml
- action: stop_animation
  animation_type: rotate          # Animasi yang akan dihentikan
```

## Urutan Eksekusi Event

Aksi dieksekusi sesuai urutan yang tercantum. Untuk hasil terbaik:

1. Efek suara (umpan balik langsung)
2. Perubahan status
3. Perintah
4. Animasi (mungkin memiliki delay)

## Animasi Prioritas

Gunakan `priority: true` untuk memblokir aksi lain hingga animasi selesai:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Memblokir aksi berikutnya
    - action: command
      command: "[MESSAGE] Selesai!"  # Dieksekusi setelah animasi
```
