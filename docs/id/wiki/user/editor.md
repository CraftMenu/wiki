# Editor Dalam Game

CraftMenu menyertakan editor visual yang kuat yang memungkinkan Anda mengonfigurasi menu langsung melalui GUI inventaris, tanpa mengedit file YAML secara manual.

## Memulai

### Membuka Editor

```
/cm editor              # Buka hub editor utama
/cm editor <menu>       # Edit menu tertentu secara langsung
```

**Izin Diperlukan:** `craftmenu.admin` atau `craftmenu.edit`

### Navigasi Editor

Editor menggunakan sistem **navigasi berbasis stack**:
- **Klik kiri** pada item untuk masuk ke sub-menu atau mengedit nilai
- **Klik kanan** untuk aksi sekunder (pratinjau, tes)
- **Shift + Klik kiri** untuk menghapus item (dengan konfirmasi)
- **Item panah** (tombol kembali) untuk kembali ke menu sebelumnya
- **Tutup inventaris** atau klik di luar untuk keluar

---

## Menu Utama Editor

Ketika Anda menjalankan `/cm editor`, Anda akan melihat hub editor utama dengan opsi berikut:

| Item | Deskripsi |
|------|-------------|
| **Daftar Menu** | Jelajahi dan edit semua menu yang dimuat |
| **Browser Gambar** | Lihat semua gambar yang tersedia |
| **Browser Suara** | Lihat semua suara yang tersedia |
| **Konfigurasi** | Konfigurasi plugin global |

---

## Mengedit Menu

### Daftar Menu

Menampilkan semua menu di folder `menus/` Anda. Klik menu untuk membuka editornya.

- **Klik kiri**: Edit menu
- **Shift + Klik kiri**: Hapus menu (dengan konfirmasi)
- **Buat Baru**: Tambah menu baru di lokasi Anda saat ini

### Hub Aksi Menu

Setelah memilih menu, Anda akan melihat editor menu utama dengan bagian-bagian berikut:

| Bagian | Deskripsi |
|---------|-------------|
| **Properti** | Pengaturan dasar (nama, judul, menu utama, buka otomatis) |
| **Lokasi** | Posisi dan rotasi di dunia |
| **Tata Letak** | Konfigurasi tata letak grid |
| **Pintasan** | Pintasan keyboard |
| **Visibilitas** | Pengaturan sembunyikan pemain/mob/item |
| **Lanjutan** | Sensitivitas kursor, kunci kamera, batas |
| **Widget** | Edit widget di menu ini |

---

## Properti Menu

Edit informasi dasar menu:

| Properti | Deskripsi |
|----------|-------------|
| **Nama** | Pengidentifikasi menu (digunakan dalam perintah) |
| **Judul** | Judul tampilan (mendukung kode warna &) |
| **Deskripsi** | Deskripsi opsional |
| **Menu Utama** | Tandai sebagai menu utama |
| **Buka saat Bergabung** | Buka otomatis saat pemain bergabung ke server |
| **Buka saat Teleport** | Buka otomatis saat pemain teleport ke dunia ini |
| **Dunia** | Dunia tempat menu berada |

### Mengedit Nilai Teks

Ketika Anda mengklik properti teks:
1. Inventaris ditutup
2. Prompt muncul di chat
3. Ketik nilai baru Anda di chat
4. Tekan Enter untuk konfirmasi (atau ketik `cancel` untuk membatalkan)

---

## Lokasi Menu

Konfigurasi di mana menu muncul di dunia:

| Properti | Deskripsi |
|----------|-------------|
| **Dunia** | Pilih dari dunia yang tersedia |
| **X / Y / Z** | Koordinat (klik untuk edit via chat) |
| **Yaw** | Rotasi horizontal (-180 sampai 180) |
| **Pitch** | Rotasi vertikal (-90 sampai 90) |
| **Atur ke Saat Ini** | Gunakan posisi/rotasi Anda saat ini |

---

## Tata Letak Menu (Grid)

Konfigurasi penempatan widget berbasis grid:

| Properti | Deskripsi |
|----------|-------------|
| **Aktif** | Aktifkan/nonaktifkan tata letak grid |
| **Kolom** | Jumlah kolom grid |
| **Baris** | Jumlah baris grid |
| **Jarak X / Y / Z** | Spasi antar sel |
| **Penyelarasan** | Penyelarasan grid (CENTER, TOP_LEFT, dll.) |

Ketika tata letak grid diaktifkan, widget menggunakan `grid-position: {row: X, col: Y}` alih-alih koordinat manual.

---

## Pintasan Menu

Konfigurasi pintasan keyboard:

| Aksi | Deskripsi |
|--------|-------------|
| **Tambah Pintasan** | Buat pintasan keyboard baru |
| **Edit Pintasan** | Modifikasi pintasan yang ada |
| **Hapus Pintasan** | Hapus pintasan |

### Properti Pintasan

- **Tombol**: Tombol atau kombinasi (misalnya, `SHIFT`, `CTRL+E`, `F`)
- **Aksi**: `activate`, `toggle`, atau `close`
- **Widget**: Nama widget target (untuk activate/toggle)

---

## Visibilitas Menu

Kontrol apa yang terlihat saat menu terbuka:

| Properti | Deskripsi |
|----------|-------------|
| **Sembunyikan Pemain** | Sembunyikan pemain lain dari pandangan |
| **Sembunyikan Mob** | Sembunyikan semua mob |
| **Sembunyikan Item** | Sembunyikan item di tanah |
| **Daftar Putih** | Pemain yang tetap terlihat (edit daftar) |

---

## Pengaturan Lanjutan

Sesuaikan perilaku menu dengan detail:

| Properti | Deskripsi |
|----------|-------------|
| **Sensitivitas Kursor** | Kecepatan gerakan mouse (0.1 - 5.0) |
| **Offset Yaw Maks** | Batas kursor horizontal (derajat) |
| **Offset Pitch Maks** | Batas kursor vertikal (derajat) |
| **Kunci Kamera Aktif** | Kunci kamera pemain saat menu terbuka |
| **Kekuatan Kunci Kamera** | Seberapa kuat kamera dikunci (0.0 - 1.0) |
| **Suara Batas** | Suara saat kursor mencapai batas |
| **Volume/Pitch Batas** | Properti suara |
| **Pesan Batas** | Pesan yang ditampilkan di batas |

---

## Mengedit Widget

### Daftar Widget

Menampilkan semua widget di menu saat ini:

- **Klik kiri**: Edit widget
- **Shift + Klik kiri**: Hapus widget
- **Buat Baru**: Tambah widget baru

### Hub Editor Widget

Setiap widget memiliki bagian yang dapat diedit berikut:

| Bagian | Deskripsi |
|---------|-------------|
| **Tipe** | IMAGE, TEXT, atau CURSOR |
| **Transform** | Posisi, ukuran, rotasi |
| **Status Visual** | Tampilan normal, hover, ditekan, nonaktif |
| **Tabrakan** | Konfigurasi kotak tabrakan |
| **Event** | Event interaksi dan aksi |
| **[Spesifik Tipe]** | Opsi tambahan berdasarkan tipe widget |

---

## Editor Transform

Konfigurasi posisi dan ukuran widget:

### Posisi
- **X**: Posisi horizontal
- **Y**: Posisi vertikal
- **Z**: Posisi kedalaman

### Ukuran
- **X**: Skala lebar
- **Y**: Skala tinggi
- **Z**: Skala kedalaman

### Rotasi
- **Pitch**: Rotasi atas/bawah
- **Yaw**: Rotasi kiri/kanan
- **Roll**: Rotasi miring

**Tips**: Klik nilai mana pun untuk mengedit via input chat.

---

## Status Visual

Widget dapat memiliki tampilan berbeda untuk status berbeda:

| Status | Kapan Diterapkan |
|-------|--------------|
| **normal** | Status default |
| **hover** | Kursor berada di atas widget |
| **pressed** | Widget sedang diklik |
| **disabled** | Widget tidak aktif |
| **Kustom** | Nama status kustom apa pun |

### Editor Status Visual

Setiap status memiliki:

| Properti | Deskripsi |
|----------|-------------|
| **Tipe** | `image`, `text`, atau `unicode` |
| **Nilai** | Path gambar, konten teks, atau karakter unicode |
| **Override** | Override transform/tabrakan/ukuran-teks opsional |

---

## Editor Tabrakan

Konfigurasi area yang dapat diklik widget:

| Properti | Deskripsi |
|----------|-------------|
| **Aktif** | Aktifkan/nonaktifkan deteksi tabrakan |
| **Posisi X/Y/Z** | Offset pusat kotak tabrakan |
| **Ukuran X/Y/Z** | Dimensi kotak tabrakan |
| **Offset X/Y/Z** | Offset tambahan |

**Tips**: Gunakan `/cm debug particles` untuk memvisualisasikan kotak tabrakan dalam game.

---

## Editor Event

### Tipe Event

| Event | Pemicu |
|-------|---------|
| **on_menu_open** | Saat menu terbuka |
| **on_cursor_hover** | Saat kursor memasuki widget |
| **on_cursor_hover_exit** | Saat kursor meninggalkan widget |
| **on_cursor_click** | Saat widget diklik |

### Daftar Aksi

Setiap event berisi daftar aksi yang dieksekusi secara berurutan:

- **Klik kiri**: Edit aksi
- **Shift + Klik kiri**: Hapus aksi
- **Tambah Aksi**: Buat aksi baru
- **Urutkan Ulang**: Seret untuk mengubah urutan eksekusi

---

## Editor Aksi

Setiap tipe aksi memiliki editor khusus:

### Aksi Animasi

| Properti | Deskripsi |
|----------|-------------|
| **Efek** | Tipe animasi (rotate, scale, bounce, dll.) |
| **Durasi** | Panjang animasi dalam milidetik |
| **Skala X/Y/Z** | Pengali skala (untuk animasi skala) |
| **Intensitas** | Kekuatan efek (0.1 - 5.0) |
| **Easing** | Fungsi waktu (linear, ease_in, ease_out, dll.) |
| **Prioritas** | Blokir interaksi selama animasi |

### Aksi Suara

| Properti | Deskripsi |
|----------|-------------|
| **File** | Path suara (minecraft:... atau path kustom) |
| **Volume** | Volume suara (0.0 - 1.0) |
| **Pitch** | Pitch suara (0.5 - 2.0) |

**Jelajahi**: Klik untuk membuka browser suara dan memilih suara.

### Aksi Perintah

| Properti | Deskripsi |
|----------|-------------|
| **Perintah** | Perintah yang akan dieksekusi (dengan perintah khusus) |
| **Delay** | Delay dalam milidetik sebelum eksekusi |

**Perintah Khusus:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aPesan Anda di sini`
- `[CLOSE]`
- `[PLAY_MUSIC] path/file.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /command`
- `[CONSOLE] /command`

### Aksi Status

| Properti | Deskripsi |
|----------|-------------|
| **Tipe Aksi** | `toggle_state` atau `set_state` |
| **Status** | Daftar status untuk berganti (toggle_state) |
| **Status** | Nama status target (set_state) |

### Aksi Perubahan Visual

| Properti | Deskripsi |
|----------|-------------|
| **Ke** | Nama status visual target |

### Aksi Widget

| Properti | Deskripsi |
|----------|-------------|
| **Aksi** | `hide_widget`, `show_widget`, dll. |
| **Widget** | Nama widget target |

### Aksi Efek

| Properti | Deskripsi |
|----------|-------------|
| **Efek** | Tipe efek yang diterapkan |
| **Parameter** | Parameter spesifik efek |

### Aksi Hentikan Animasi

| Properti | Deskripsi |
|----------|-------------|
| **Tipe Animasi** | Animasi mana yang akan dihentikan |

### Aksi Hentikan Efek

| Properti | Deskripsi |
|----------|-------------|
| **Tipe Efek** | Efek mana yang akan dihentikan |

### Aksi Atur Status Dasar

| Properti | Deskripsi |
|----------|-------------|
| **Status** | Status dasar baru untuk widget |

---

## Browser Aset

### Browser Gambar

Jelajahi semua gambar di folder `images/` Anda:

- **Paginasi**: Navigasi melalui halaman gambar
- **Pratinjau**: Lihat path gambar dan detail
- **Pilih**: Klik untuk menggunakan dalam konteks saat ini

Gambar diorganisir berdasarkan folder (misalnya, `template/button.png`).

### Browser Suara

Jelajahi semua suara di folder `sounds/` Anda plus suara bawaan Minecraft:

- **Suara Kustom**: File .ogg Anda dari `sounds/`
- **Suara Minecraft**: Suara bawaan (minecraft:ui.button.click, dll.)
- **Pilih**: Klik untuk menggunakan dalam konteks saat ini

---

## Tips & Praktik Terbaik

### Tips Alur Kerja

1. **Mulai dengan Properti**: Atur nama, judul, dan lokasi terlebih dahulu
2. **Tambah Widget**: Buat widget Anda dengan transform dasar
3. **Konfigurasi Visual**: Atur status normal dan hover
4. **Tambah Tabrakan**: Aktifkan dan ukur kotak tabrakan
5. **Tambah Event**: Konfigurasi suara hover dan aksi klik
6. **Tes Sering**: Gunakan `/cm buka <menu>` untuk menguji perubahan

### Pintasan Keyboard

| Pintasan | Aksi |
|----------|--------|
| **Escape** | Tutup editor |
| **Tombol angka (1-9)** | Pemilihan slot cepat |

### Masalah Umum

**Perubahan tidak muncul:**
- Jalankan `/cm muatulang` setelah membuat perubahan
- Pastikan Anda mengklik "Simpan" di editor

**Tabrakan tidak mendeteksi:**
- Periksa tabrakan sudah diaktifkan
- Verifikasi ukuran tabrakan cukup besar
- Gunakan `/cm debug particles` untuk memvisualisasikan

**Gambar tidak muncul:**
- Jalankan `/cm paket` untuk regenerasi resource pack
- Pastikan gambar ada di subfolder (misalnya, `images/mymenu/`)
- Terapkan resource pack ke klien

---

## Lihat Juga

- [Referensi Perintah](commands.md)
- [Membuat Menu](menu-creation.md)
- [Tipe Widget](widgets.md)
- [Sistem Event](events.md)
- [Animasi](animations.md)
