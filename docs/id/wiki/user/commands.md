# Referensi Perintah

CraftMenu menyediakan serangkaian perintah lengkap untuk mengelola menu.

## Perintah Dasar

Semua perintah menggunakan `/craftmenu` (alias: `/cm`).

## Perintah Umum

### Bantuan
```
/cm bantuan [perintah]
```
Menampilkan informasi bantuan untuk semua perintah atau perintah tertentu.

### Daftar Menu
```
/cm daftar
```
Menampilkan semua template menu yang dimuat.

### Info Plugin
```
/cm info
```
Menampilkan versi plugin dan statistik.

## Perintah Menu

### Buka Menu
```
/cm buka <nama_menu> [pemain]
```
Membuka menu untuk diri sendiri atau pemain lain.

**Contoh:**
- `/cm buka template` - Buka menu template untuk diri sendiri
- `/cm buka lobby Steve` - Buka menu lobby untuk pemain Steve

### Tutup Menu
```
/cm tutup [pemain]
```
Menutup menu aktif untuk diri sendiri atau pemain lain.

### Buat Menu
```
/cm buat <nama_menu>
```
Membuat template menu baru di lokasi Anda saat ini.

### Hapus Menu
```
/cm hapus <nama_menu>
```
Menghapus template menu.

## Perintah Resource Pack

### Buat Resource Pack
```
/cm paket
```
Membuat resource pack dari gambar dan suara di folder CraftMenu.

### Perintah Gambar
```
/cm gambar pindai
/cm gambar perbaiki [--backup]
/cm gambar resize <path_gambar> <ukuran_target>
/cm gambar cadangan
/cm gambar kembalikan <nama_backup>
/cm gambar daftar
/cm gambar cadangan-cadangan
```
- `pindai` - Memindai gambar yang terlalu besar
- `perbaiki` - Mengoptimalkan gambar yang terlalu besar secara otomatis
- `resize` - Mengubah ukuran gambar tertentu ke ukuran target (16-4096 piksel)
- `cadangan` - Membuat cadangan gambar
- `kembalikan` - Mengembalikan gambar dari cadangan
- `daftar` - Menampilkan semua gambar di folder images
- `cadangan-cadangan` - Menampilkan semua cadangan yang tersedia

## Perintah Konfigurasi

### Muat Ulang
```
/cm muatulang
```
Memuat ulang semua konfigurasi dan template menu.

### Bahasa
```
/cm bahasa <bahasa>
/cm bahasa daftar
```
- `/cm bahasa <bahasa>` - Mengatur bahasa yang ditentukan
- `/cm bahasa daftar` - Menampilkan daftar semua bahasa yang tersedia

Bahasa yang tersedia:
- `en_US` - Inggris
- `pt_BR` - Portugis (Brasil)
- `es_ES` - Spanyol
- `fr_FR` - Prancis
- `de_DE` - Jerman
- `it_IT` - Italia
- `nl_NL` - Belanda
- `ru_RU` - Rusia
- `pl_PL` - Polandia
- `tr_TR` - Turki
- `uk_UA` - Ukraina
- `ar_SA` - Arab
- `ja_JP` - Jepang
- `ko_KR` - Korea
- `zh_CN` - Cina (Sederhana)
- `hi_IN` - Hindi
- `id_ID` - Indonesia
- `th_TH` - Thailand
- `vi_VN` - Vietnam

## Perintah Debug

### Debug Partikel
```
/cm debug partikel
/cm debug partikel ukuran <nilai>
```
- `/cm debug partikel` - Mengaktifkan/menonaktifkan semua partikel debug (tabrakan, kursor, pusat)
- `/cm debug partikel ukuran <nilai>` - Mengatur ukuran partikel (0.001 hingga 2.0)

### Debug Kisi
```
/cm debug kisi
/cm debug kisi nomor
```
- `/cm debug kisi` - Mengaktifkan/menonaktifkan visualisasi kisi
- `/cm debug kisi nomor` - Mengaktifkan/menonaktifkan nomor sel kisi

### Pemeriksaan Kesehatan
```
/cm kesehatan
```
Menampilkan status kesehatan komponen.

### Pulihkan
```
/cm pulihkan
```
Mencoba memulihkan dari error.

## Perintah Editor

Membuka editor visual dalam game untuk menu dan widget.

### Buka Editor
```
/cm editor
/cm editor <nama_menu>
```
- `/cm editor` - Membuka hub editor
- `/cm editor <nama_menu>` - Membuka editor untuk menu tertentu

**Izin Diperlukan:** `craftmenu.admin`

## Izin

| Izin | Deskripsi |
|------|-----------|
| `craftmenu.use` | Penggunaan dasar (buka menu) |
| `craftmenu.admin` | Perintah admin |
| `craftmenu.open` | Buka menu |
| `craftmenu.create` | Buat menu |
| `craftmenu.reload` | Muat ulang plugin |
| `craftmenu.debug` | Perintah debug |
