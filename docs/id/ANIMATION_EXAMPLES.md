# Panduan Lengkap Animasi - CraftMenu

Dokumen ini menyajikan semua jenis animasi yang tersedia di CraftMenu, dengan contoh penggunaan YAML praktis.

---

## Daftar Isi

1. [Animasi Dasar](#animasi-dasar)
2. [Animasi Gerakan](#animasi-gerakan)
3. [Animasi Lanjutan](#animasi-lanjutan)
4. [Menggabungkan Animasi](#menggabungkan-animasi)
5. [Properti Umum](#properti-umum)

---

## Animasi Dasar

### SCALE - Perubahan Ukuran

Mengubah ukuran widget pada sumbu X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% dari ukuran asli
    easing_style: out
```

**Properti**:
- `scaleX`: Skala pada sumbu X (default: intensity)
- `scaleY`: Skala pada sumbu Y (default: intensity)
- `scaleZ`: Skala pada sumbu Z (default: intensity)

---

### ROTATE - Rotasi

Memutar widget di sekitar sumbu X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Rotasi penuh pada sumbu Y
    easing_style: in_out
```

**Properti**:
- `rotationX`: Rotasi pada sumbu X dalam derajat
- `rotationY`: Rotasi pada sumbu Y dalam derajat
- `rotationZ`: Rotasi pada sumbu Z dalam derajat

---

### TRANSLATE - Translasi

Memindahkan widget ke posisi baru.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Perpindahan dalam blok
    easing_style: out
```

**Properti**:
- `offsetX`: Perpindahan pada sumbu X
- `offsetY`: Perpindahan pada sumbu Y
- `offsetZ`: Perpindahan pada sumbu Z

---

### FADE - Pudar masuk/keluar

Mengontrol opasitas/visibilitas widget.

```yaml
# Pudar keluar (menghilang)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = pudar keluar, false = pudar masuk
    easing_style: in

# Pudar masuk (muncul)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Properti**:
- `fadeOut`: true untuk menghilang, false untuk muncul

---

## Animasi Gerakan

### PULSE - Denyutan

Efek pernapasan/detak jantung dengan penskalaan berirama.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Animasi berkelanjutan
    easing_style: in_out
```

---

### BOUNCE - Memantul

Mensimulasikan fisika bola memantul secara vertikal.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Tinggi lompatan
    easing_style: out
```

---

### SWING - Ayunan Pendulum

Gerakan pendulum/ayunan.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Amplitudo ayunan
    loop: true
    easing_style: in_out
```

---

### FLOAT - Mengambang

Gerakan vertikal halus naik dan turun.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Tinggi mengambang
    loop: true
    easing_style: in_out
```

---

### SHAKE - Gemetar

Getaran cepat dan acak.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Intensitas getaran
    easing_style: linear
```

---

### JIGGLE - Gemetar Elastis

Goyangan lebih lembut dan terkontrol dengan efek elastis.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Amplitudo getaran
    easing_style: out
```

---

## Animasi Lanjutan

### SLIDE - Geser dari Luar Layar

Widget masuk dengan bergeser dari luar layar.

```yaml
# Geser dari kiri
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Jarak dalam blok
    easing_style: out

# Geser dari atas
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Properti**:
- `direction`: Arah masuk (left, right, top, bottom, front, back)
- `distance`: Jarak awal dalam blok (default: intensity * 2.0)

**Penggunaan Umum**: Ideal untuk animasi `on_menu_open` dengan prioritas CRITICAL.

---

### ZOOM_IN - Masuk dengan Overshoot

Skala dari 0 ke 1 dengan "overshoot" (melampaui dan kembali).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Skala maksimum sebelum kembali ke 1.0
    easing_style: out
```

**Properti**:
- `overshoot`: Skala maksimum sebelum stabil di 1.0 (default: 1.2)

**Penggunaan Umum**: Animasi masuk dramatis di `on_menu_open`.

---

### SQUEEZE - Efek Kompresi

Meratakan satu sumbu sambil memperluas yang lain.

```yaml
# Kompresi horizontal
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Intensitas kompresi
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Kompresi vertikal
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Properti**:
- `axis`: Sumbu yang dikompresi (x, y, z)
- `intensity`: Intensitas kompresi

---

### FLIP - Rotasi 180°

Rotasi 180 derajat pada sumbu tertentu.

```yaml
# Flip vertikal (seperti membalik kartu)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Flip horizontal
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Properti**:
- `axis`: Sumbu rotasi (x, y, z)

**Penggunaan Umum**: Transisi state, mengungkapkan konten alternatif.

---

### WOBBLE - Ayunan Jeli

Ayunan bergaya "jeli" dari sisi ke sisi.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Intensitas ayunan
    loop: true
    easing_style: in_out
```

**Penggunaan Umum**: Animasi perhatian, umpan balik hover.

---

### ORBIT - Gerakan Orbital

Widget mengorbit dalam lingkaran di sekitar titik pusat.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Radius orbit dalam blok
    speed: 1.0  # Pengali kecepatan
    loop: true
    easing_style: linear
```

**Properti**:
- `radius`: Radius orbit (default: intensity * 0.5)
- `speed`: Kecepatan rotasi (default: 1.0)

**Penggunaan Umum**: Animasi latar belakang dekoratif.

---

### SPIRAL - Gerakan Spiral

Menggabungkan rotasi dengan gerakan melingkar.

```yaml
# Spiral searah jarum jam
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Radius spiral
    clockwise: true  # Arah searah jarum jam
    loop: true
    easing_style: linear

# Spiral berlawanan jarum jam
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Properti**:
- `radius`: Radius spiral (default: intensity * 0.3)
- `clockwise`: Arah gerakan (true/false)

---

### WAVE - Gerakan Gelombang

Gelombang halus menggunakan fungsi sinus.

```yaml
# Gelombang horizontal
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Amplitudo gelombang
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Gelombang vertikal
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Properti**:
- `axis`: Arah gelombang (horizontal, vertical)

---

### GLOW - Cahaya Berdenyut

Menggabungkan denyut halus dengan perubahan opasitas.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Intensitas cahaya
    loop: true
    easing_style: in_out
```

**Penggunaan Umum**: Menyorot elemen penting, indikator perhatian.

---

## Menggabungkan Animasi

Anda dapat menggabungkan beberapa animasi secara berurutan atau bersamaan.

### Contoh 1: Masuk Dramatis

```yaml
on_menu_open:
  # 1. Geser dari kiri
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - memblokir aksi berikutnya
      easing_style: out

  # 2. Zoom dengan overshoot (dijalankan SETELAH slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Float berkelanjutan (dimulai setelah zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Contoh 2: Tombol Interaktif Kompleks

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Suara hover
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Perubahan visual
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Denyut halus
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Kembalikan visual
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Suara klik
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Urutan animasi
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # Perintah (dijalankan SETELAH animasi)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Contoh 3: Widget Dekoratif dengan Beberapa Animasi

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Orbit melingkar
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Berputar sambil mengorbit
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Cahaya berdenyut
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Properti Umum

Semua animasi mendukung properti ini:

### type
Jenis aksi (selalu `animation`).

### effect
Nama animasi (scale, rotate, pulse, dll.).

### duration
Durasi dalam milidetik.

```yaml
duration: 1000  # 1 detik
```

### intensity
Intensitas animasi umum (artinya bervariasi berdasarkan jenis).

```yaml
intensity: 0.5  # Setengah dari intensitas default
```

### loop
Apakah animasi harus berulang tanpa batas.

```yaml
loop: true  # Animasi berkelanjutan
loop: false # Animasi sekali (default)
```

### delay
Penundaan sebelum animasi dimulai (dalam ms).

```yaml
delay: 500  # Tunggu 500ms sebelum memulai
```

### easing_style
Jenis easing untuk penghalusan animasi.

```yaml
easing_style: linear      # Kecepatan konstan
easing_style: in          # Percepat di awal
easing_style: out         # Perlambat di akhir
easing_style: in_out      # Percepat dan perlambat
```

### priority
Prioritas animasi (mempengaruhi interupsi).

```yaml
priority: true   # CRITICAL - tidak pernah terinterupsi, memblokir aksi berikutnya
priority: false  # INTERRUPTIBLE - dapat terinterupsi (default)
```

**Catatan**: Animasi berkelanjutan (`loop: true`) selalu prioritas BACKGROUND.

---

## Panduan Penggunaan Berdasarkan Konteks

### Animasi untuk on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Masuk bergeser
  - effect: zoom_in     # Masuk dengan overshoot
  - effect: fade        # Pudar masuk lembut
```

### Animasi untuk on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Perbesar ukuran
  - effect: pulse       # Denyut lembut
  - effect: glow        # Cahaya sorotan
  - effect: wobble      # Ayunan perhatian
```

### Animasi untuk on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Umpan balik tekanan
  - effect: bounce      # Lompatan konfirmasi
  - effect: shake       # Gemetar dampak
  - effect: flip        # Balik/ungkap
```

### Animasi Berkelanjutan (Dekoratif)

```yaml
continuous-animations:
  - effect: float       # Mengambang lembut
  - effect: rotate      # Rotasi konstan
  - effect: orbit       # Gerakan orbital
  - effect: spiral      # Spiral dekoratif
  - effect: wave        # Gerakan gelombang
  - effect: glow        # Cahaya berdenyut
```

---

## Tabel Referensi Cepat

| Animasi | Jenis | Penggunaan Utama | Loop? | Prioritas Default |
|---------|-------|------------------|-------|-------------------|
| SCALE | Transformasi | Hover, Klik | Tidak | INTERRUPTIBLE |
| ROTATE | Transformasi | Dekoratif | Ya | BACKGROUND |
| TRANSLATE | Transformasi | Gerakan | Tidak | CRITICAL |
| PULSE | Gerakan | Berkelanjutan | Ya | BACKGROUND |
| BOUNCE | Gerakan | Klik | Tidak | INTERRUPTIBLE |
| SWING | Gerakan | Hover | Ya | INTERRUPTIBLE |
| FLOAT | Gerakan | Berkelanjutan | Ya | BACKGROUND |
| SHAKE | Gerakan | Klik | Tidak | INTERRUPTIBLE |
| FADE | Visual | Masuk/Keluar | Tidak | CRITICAL |
| SLIDE | Lanjutan | Masuk | Tidak | CRITICAL |
| ZOOM_IN | Lanjutan | Masuk | Tidak | CRITICAL |
| SQUEEZE | Lanjutan | Klik | Tidak/Ya | INTERRUPTIBLE |
| FLIP | Lanjutan | State | Tidak | CRITICAL |
| WOBBLE | Lanjutan | Hover | Ya | BACKGROUND |
| ORBIT | Lanjutan | Dekoratif | Ya | BACKGROUND |
| SPIRAL | Lanjutan | Dekoratif | Ya | BACKGROUND |
| WAVE | Lanjutan | Dekoratif | Ya | BACKGROUND |
| JIGGLE | Lanjutan | Hover | Tidak | INTERRUPTIBLE |
| GLOW | Lanjutan | Sorotan | Ya | BACKGROUND |

---

**Terakhir Diperbarui**: 2025-10-15
**Versi Plugin**: 2.0
**Penulis**: Zodunix
