# Panduan Instalasi

Panduan ini mencakup instalasi dan konfigurasi CraftMenu di server Minecraft Anda.

## Prasyarat

Sebelum menginstal CraftMenu, pastikan Anda memiliki:

- Server Minecraft yang menjalankan Paper, Spigot, atau Purpur 1.20.4+
- Java 17 atau lebih tinggi terinstal
- Plugin PacketEvents terinstal

## Langkah-langkah Instalasi

### 1. Unduh CraftMenu

Unduh JAR CraftMenu terbaru dari halaman rilis.

### 2. Instal Dependensi

Pastikan PacketEvents terinstal di folder `plugins/` Anda sebelum CraftMenu.

### 3. Instal CraftMenu

Letakkan `CraftMenu.jar` di folder `plugins/` server Anda.

### 4. Mulai Server

Mulai server Anda. CraftMenu akan membuat file konfigurasinya:

```
plugins/CraftMenu/
├── config.yml           # Konfigurasi global
├── menus/              # Template menu
│   └── template.yml    # Contoh menu default
├── images/             # Gambar kustom
│   └── template/       # Gambar untuk menu template
├── sounds/             # Suara kustom
│   └── template/       # Suara untuk menu template
└── language/           # File bahasa
```

### 5. Buat Resource Pack

Jalankan `/cm paket` untuk membuat resource pack. Ini akan membuat:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Konfigurasikan Distribusi Resource Pack

Anda memiliki beberapa opsi:

**Opsi A: Resource Pack Server**
```properties
# Di server.properties
resource-pack=https://host-anda.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Opsi B: Distribusi Manual**
Bagikan file ZIP dengan pemain dan minta mereka menginstalnya secara manual.

**Opsi C: Gunakan Plugin Resource Pack**
Gunakan plugin seperti ItemsAdder atau Oraxen untuk distribusi otomatis.

## Konfigurasi

### Pengaturan Dasar

Edit `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "id_ID"          # id_ID untuk Indonesia
    debug: false               # Aktifkan untuk pemecahan masalah

  resourcepack:
    auto-generate: true        # Buat otomatis saat startup
    compression: true          # Kompres file ZIP
```

### Pengaturan Performa

```yaml
craftmenu:
  performance:
    async-loading: true        # Muat menu secara asinkron
    cache-enabled: true        # Cache template menu
    update-interval: 1         # Ticks antar pembaruan
```

## Verifikasi Instalasi

1. Jalankan `/cm bantuan` untuk melihat perintah yang tersedia
2. Jalankan `/cm daftar` untuk melihat menu yang dimuat
3. Jalankan `/cm buka template` untuk menguji menu default

## Langkah Selanjutnya

- [Buat menu pertama Anda](menu-creation.md)
- [Pelajari tentang widget](widgets.md)
- [Konfigurasikan event](events.md)
