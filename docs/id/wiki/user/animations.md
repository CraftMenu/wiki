# Sistem Animasi

CraftMenu menyediakan sistem animasi yang kuat dengan 19 jenis animasi dan 6 fungsi easing.

## Jenis Animasi

### Animasi Gerakan

| Tipe | Deskripsi |
|------|-----------|
| `translate` | Memindahkan posisi widget |
| `bounce` | Efek memantul |
| `float` | Mengambang naik/turun perlahan |
| `orbit` | Gerakan orbit melingkar |

### Animasi Rotasi

| Tipe | Deskripsi |
|------|-----------|
| `rotate` | Rotasi berkelanjutan |
| `swing` | Ayunan pendulum |
| `flip` | Balik 180 derajat |
| `wobble` | Rotasi bergoyang |
| `spiral` | Gerakan spiral |

### Animasi Skala

| Tipe | Deskripsi |
|------|-----------|
| `scale` | Mengubah ukuran |
| `pulse` | Denyutan ritmis |
| `squeeze` | Tekan/regangkan |
| `zoom_in` | Efek zoom |

### Animasi Visual

| Tipe | Deskripsi |
|------|-----------|
| `fade` | Pudar opacity |
| `glow` | Efek bersinar |
| `shake` | Gerakan bergetar |
| `jiggle` | Gerakan bergoyang |
| `wave` | Gerakan gelombang |

## Penggunaan Animasi Dasar

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Properti Animasi

### Properti Umum

```yaml
- action: animation
  effect: pulse           # Jenis animasi (wajib)
  duration: 1000          # Durasi dalam milidetik
  easing_style: ease_out  # Fungsi easing
  intensity: 1.0          # Intensitas efek
  priority: false         # Blokir aksi lain?
```

### Properti Khusus Efek

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Derajat
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = fade out, false = fade in
```

## Fungsi Easing

| Easing | Deskripsi |
|--------|-----------|
| `linear` | Kecepatan konstan |
| `ease_in` | Mulai lambat |
| `ease_out` | Akhir lambat |
| `ease_in_out` | Awal dan akhir lambat |
| `bounce` | Efek memantul |
| `elastic` | Efek pegas |

### Contoh Easing

```yaml
# Efek hover halus
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Umpan balik klik memantul
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Prioritas Animasi

Gunakan `priority: true` untuk memastikan animasi selesai sebelum aksi lain:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Memblokir aksi berikutnya

    - action: command
      command: "[CLOSE]"      # Menunggu animasi selesai
```

## Menghentikan Animasi

```yaml
- action: stop_animation
  animation_type: rotate      # Hentikan tipe tertentu
  # atau
  type: all                   # Hentikan semua animasi
```

## Animasi Berkelanjutan

Definisikan animasi yang berjalan terus-menerus dalam konfigurasi widget:

```yaml
widgets:
  ikon_berputar:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## Praktik Terbaik

1. Jaga durasi di bawah 500ms untuk umpan balik responsif
2. Gunakan `ease_out` untuk efek hover
3. Gunakan `bounce` untuk umpan balik klik
4. Hindari beberapa animasi simultan pada satu widget
5. Uji animasi pada berbagai perangkat keras
