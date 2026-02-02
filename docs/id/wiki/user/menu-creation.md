# Membuat Menu

Panduan ini mencakup pembuatan menu kustom di CraftMenu.

## Struktur Menu

Menu didefinisikan dalam file YAML di `plugins/CraftMenu/menus/`.

### Template Menu Dasar

```yaml
menu:
  name: menu_saya
  title: "&b&lMenu Kustom Saya"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # Definisi widget di sini
```

## Properti Menu

### Properti Dasar

| Properti | Tipe | Deskripsi |
|----------|------|-----------|
| `name` | String | Pengidentifikasi unik untuk menu |
| `title` | String | Judul tampilan (mendukung kode warna) |
| `main` | Boolean | Apakah ini menu utama? |
| `open-on-join` | Boolean | Buka otomatis saat pemain bergabung ke dunia |
| `open-on-teleport` | Boolean | Buka otomatis saat pemain teleportasi ke dunia |

### Lokasi

```yaml
location:
  world: world               # Nama dunia
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Rotasi horizontal (-180 hingga 180)
    pitch: 0.0               # Rotasi vertikal (-90 hingga 90)
```

### Pengaturan

```yaml
settings:
  cursor-sensitivity: 1.0    # Sensitivitas mouse (1.0 = normal)
  max-yaw-offset: 61.0       # Batas horizontal dalam derajat
  max-pitch-offset: 36.0     # Batas vertikal dalam derajat
  camera-lock-enabled: true  # Kunci kamera pemain saat menu terbuka
  camera-lock-strength: 0.4  # Kekuatan kunci (0.0-1.0)
```

### Pengaturan Visibilitas

```yaml
settings:
  visibility:
    hide_players: false      # Sembunyikan pemain lain
    hide_mobs: false         # Sembunyikan mob
    hide_items: false        # Sembunyikan item yang dijatuhkan
    whitelist_players: []    # Pemain yang tetap terlihat
```

## Menambahkan Widget

Widget adalah elemen interaktif dari menu Anda.

### Widget Gambar

```yaml
widgets:
  tombol_saya:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### Widget Teks

```yaml
widgets:
  teks_judul:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lSelamat Datang!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Buat Cepat dengan Perintah

Gunakan `/cm buat <nama>` untuk membuat menu dengan cepat di lokasi Anda saat ini.

## Menambahkan Gambar Kustom

1. Buat folder: `plugins/CraftMenu/images/menu_saya/`
2. Tambahkan gambar PNG Anda ke folder ini
3. Jalankan `/cm paket` untuk membuat ulang resource pack
4. Referensikan gambar sebagai `menu_saya/nama_gambar.png`

## Menguji Menu Anda

1. Simpan file YAML Anda
2. Jalankan `/cm muatulang`
3. Jalankan `/cm buka menu_saya`

## Praktik Terbaik

- Gunakan subfolder untuk mengorganisir gambar berdasarkan menu
- Jaga ukuran gambar tetap wajar (maksimal 128x128 untuk tombol)
- Uji menu secara menyeluruh sebelum menerapkan
- Gunakan nama widget yang deskriptif
- Berikan komentar pada konfigurasi yang kompleks
