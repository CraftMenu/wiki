# Pemecahan Masalah

Masalah umum dan solusi untuk CraftMenu.

## Gambar Tidak Muncul

**Gejala:** Gambar muncul sebagai "?" atau karakter hilang.

**Solusi:**

1. **Buat ulang resource pack:**
   ```
   /cm paket
   ```

2. **Periksa lokasi gambar:**
   - Gambar harus berada di subfolder: `plugins/CraftMenu/images/folder/gambar.png`
   - BUKAN di root: `plugins/CraftMenu/images/gambar.png`

3. **Verifikasi format gambar:**
   - Hanya file PNG yang didukung
   - Pastikan ekstensi file benar (`.png`, bukan `.PNG`)

4. **Periksa resource pack sudah dimuat:**
   - Resource pack server harus dikonfigurasi
   - Pemain harus menerima resource pack

5. **Muat ulang plugin:**
   ```
   /cm muatulang
   ```

## Menu Tidak Terbuka

**Gejala:** Perintah `/cm buka` tidak melakukan apa-apa.

**Solusi:**

1. **Periksa menu ada:**
   ```
   /cm daftar
   ```

2. **Periksa konsol untuk error** setelah menjalankan perintah

3. **Verifikasi sintaks YAML:**
   - Gunakan validator YAML
   - Periksa indentasi yang salah

4. **Pastikan lokasi spawn valid:**
   - Dunia harus dimuat
   - Lokasi harus dapat diakses

## Collision Tidak Berfungsi

**Gejala:** Kursor tidak mendeteksi widget.

**Solusi:**

1. **Aktifkan partikel debug:**
   ```
   /cm debug alihkan
   ```

2. **Periksa konfigurasi collision:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Perbesar ukuran kotak collision** jika terlalu kecil

4. **Periksa posisi widget** - collision mungkin tergeser

## Suara Tidak Diputar

**Gejala:** Aksi suara tidak memiliki efek.

**Solusi:**

1. **Untuk suara kustom:**
   - Letakkan file `.ogg` di `plugins/CraftMenu/sounds/folder/`
   - Buat ulang resource pack: `/cm paket`

2. **Untuk suara Minecraft:**
   - Gunakan format yang benar: `minecraft:ui.button.click`

3. **Periksa pengaturan volume** di konfigurasi aksi

## Masalah Performa

**Gejala:** Lag saat menggunakan menu.

**Solusi:**

1. **Optimalkan gambar:**
   ```
   /cm gambar pindai
   /cm gambar perbaiki --backup
   ```

2. **Kurangi frekuensi animasi** di menu kompleks

3. **Nonaktifkan mode debug:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Tingkatkan interval pembaruan:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Plugin Tidak Memuat

**Gejala:** Plugin menunjukkan error saat startup.

**Solusi:**

1. **Periksa versi Java:**
   - Membutuhkan Java 17 atau lebih tinggi

2. **Verifikasi dependensi:**
   - PacketEvents harus terinstal

3. **Periksa versi server:**
   - Membutuhkan Minecraft 1.20.4+

4. **Tinjau log startup** untuk error spesifik

5. **Coba pemulihan:**
   ```
   /cm pulihkan
   ```

## Error YAML

**Gejala:** Error menyebutkan parsing YAML.

**Masalah Umum:**

1. **Indentasi salah:**
   ```yaml
   # Salah
   widgets:
   widget_saya:
     type: IMAGE

   # Benar
   widgets:
     widget_saya:
       type: IMAGE
   ```

2. **Tanda kutip hilang di sekitar nilai khusus:**
   ```yaml
   # Salah - & memiliki arti khusus
   title: &bHalo

   # Benar
   title: "&bHalo"
   ```

3. **Format list salah:**
   ```yaml
   # Salah
   events:
     on_cursor_click:
       action: sound

   # Benar
   events:
     on_cursor_click:
       - action: sound
   ```

## Mendapatkan Bantuan

Jika Anda masih mengalami masalah:

1. Aktifkan mode debug dan periksa output konsol
2. Periksa GitHub issues untuk masalah yang diketahui
3. Buat issue baru dengan:
   - Versi server
   - Versi plugin
   - Log konsol
   - File konfigurasi (hapus data sensitif)
