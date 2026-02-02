# Jenis Widget

CraftMenu mendukung tiga jenis widget untuk membangun menu.

## Ikhtisar Jenis Widget

| Tipe | Deskripsi | Interaktif |
|------|-----------|------------|
| IMAGE | Menampilkan gambar | Ya |
| TEXT | Menampilkan teks berformat | Ya |
| CURSOR | Kursor mouse | Khusus |

## Widget IMAGE

Digunakan untuk tombol, latar belakang, dan elemen dekoratif.

### Gambar Dasar

```yaml
gambar_saya:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Gambar dengan Status

```yaml
tombol_saya:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### Override Status

Setiap status dapat memiliki override transform dan collision:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Sedikit lebih besar saat hover
```

## Widget TEXT

Menampilkan teks berformat dengan dukungan PlaceholderAPI.

### Teks Dasar

```yaml
teks_selamat_datang:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bSelamat datang di server!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Teks dengan Placeholder

```yaml
info_pemain:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Pemain: &f%player_name%\n&7Level: &a%player_level%"
      text-size: 0.8
```

### Teks Multi-baris

Gunakan `\n` untuk jeda baris:

```yaml
deskripsi:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Baris 1\nBaris 2\nBaris 3"
```

## Widget CURSOR

Kursor mengikuti pergerakan mouse pemain.

### Kursor Dasar

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## Properti Transform

Semua widget mendukung properti transform:

```yaml
transform:
  position:
    x: 0.0    # Offset horizontal
    y: 0.0    # Offset vertikal
    z: 0.0    # Offset kedalaman
  size:
    x: 0.1    # Skala lebar
    y: 0.1    # Skala tinggi
    z: 0.1    # Skala kedalaman
  rotation:
    pitch: 0  # Rotasi sumbu-X
    yaw: 0    # Rotasi sumbu-Y
    roll: 0   # Rotasi sumbu-Z
```

## Properti Collision

Aktifkan atau sesuaikan deteksi tabrakan:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Urutan Widget

Widget dirender sesuai urutan kemunculannya di file YAML. Widget yang lebih belakang muncul di depan widget yang lebih awal.
