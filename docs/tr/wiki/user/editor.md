# Oyun Ici Duzenleyici

CraftMenu, YAML dosyalarini manuel olarak duzenlemeden, menuleri dogrudan envanter GUI'si uzerinden yapilandirmaniza olanak taniyan guclu bir gorsel duzenleyici icerir.

## Baslangic

### Duzenleyiciyi Acma

```
/cm duzenleyici              # Ana duzenleyici merkezini ac
/cm duzenleyici <menu>       # Belirli bir menuyu dogrudan duzenle
```

**Gerekli Izin:** `craftmenu.admin` veya `craftmenu.edit`

### Duzenleyici Navigasyonu

Duzenleyici **yigin tabanli navigasyon** sistemi kullanir:
- **Sol tikla** alt menulere girmek veya degerleri duzenlemek icin
- **Sag tikla** ikincil eylemler icin (onizleme, test)
- **Shift + Sol tikla** ogeleri silmek icin (onay ile)
- **Ok ogesi** (geri butonu) onceki menuye donmek icin
- **Envanteri kapat** veya disari tikla cikmak icin

---

## Duzenleyici Ana Menusu

`/cm duzenleyici` komutunu calistirdiginizda, su seceneklere sahip ana duzenleyici merkezini goreceksiniz:

| Oge | Aciklama |
|-----|----------|
| **Menu Listesi** | Tum yuklenmis menuleri goruntule ve duzenle |
| **Resim Tarayicisi** | Tum mevcut resimleri goruntule |
| **Ses Tarayicisi** | Tum mevcut sesleri goruntule |
| **Yapilandirma** | Genel eklenti yapilandirmasi |

---

## Menu Duzenleme

### Menu Listesi

`menus/` klasorunuzdeki tum menuleri gosterir. Duzenleyicisini acmak icin bir menuye tiklayin.

- **Sol tikla**: Menuyu duzenle
- **Shift + Sol tikla**: Menuyu sil (onay ile)
- **Yeni Olustur**: Mevcut konumunuzda yeni bir menu ekle

### Menu Eylemleri Merkezi

Bir menu sectikten sonra, su bolumlerle ana menu duzenleyicisini goreceksiniz:

| Bolum | Aciklama |
|-------|----------|
| **Ozellikler** | Temel ayarlar (ad, baslik, ana menu, otomatik acilma) |
| **Konum** | Dunya pozisyonu ve dondurme |
| **Duzeni** | Izgara duzeni yapilandirmasi |
| **Kisayol Tuslari** | Klavye kisayollari |
| **Gorunurluk** | Oyunculari/moblari/ogeleri gizleme ayarlari |
| **Gelismis** | Imleç hassasiyeti, kamera kilidi, sinirlar |
| **Widgetlar** | Bu menudeki widgetlari duzenle |

---

## Menu Ozellikleri

Temel menu bilgilerini duzenleme:

| Ozellik | Aciklama |
|---------|----------|
| **Ad** | Menu tanimlayicisi (komutlarda kullanilir) |
| **Baslik** | Gosterilen baslik (& renk kodlarini destekler) |
| **Aciklama** | Istege bagli aciklama |
| **Ana Menu** | Birincil menu olarak isaretle |
| **Giriste Ac** | Oyuncu sunucuya girdiginde otomatik ac |
| **Isginlanmada Ac** | Oyuncu bu dunyaya isinlandiginda otomatik ac |
| **Dunya** | Menunun bulundugu dunya |

### Metin Degerlerini Duzenleme

Bir metin ozelligine tikladiginizda:
1. Envanter kapanir
2. Sohbette bir istem belirir
3. Sohbete yeni degerinizi yazin
4. Onaylamak icin Enter'a basin (veya iptal etmek icin `cancel` yazin)

---

## Menu Konumu

Menunun dunyada nerede gorunecegini yapilandirma:

| Ozellik | Aciklama |
|---------|----------|
| **Dunya** | Mevcut dunyalardan sec |
| **X / Y / Z** | Koordinatlar (sohbet ile duzenlemek icin tiklayin) |
| **Yaw** | Yatay dondurme (-180 ila 180) |
| **Pitch** | Dikey dondurme (-90 ila 90) |
| **Mevcut Olarak Ayarla** | Mevcut pozisyonunuzu/dondurmenizi kullan |

---

## Menu Duzeni (Izgara)

Izgara tabanli widget konumlandirmasini yapilandirma:

| Ozellik | Aciklama |
|---------|----------|
| **Etkin** | Izgara duzenini ac/kapat |
| **Sutunlar** | Izgara sutun sayisi |
| **Satirlar** | Izgara satir sayisi |
| **Bosluk X / Y / Z** | Hucreler arasi mesafe |
| **Hizalama** | Izgara hizalamasi (CENTER, TOP_LEFT vb.) |

Izgara duzeni etkinlestirildiginde, widgetlar manuel koordinatlar yerine `grid-position: {row: X, col: Y}` kullanir.

---

## Menu Kisayol Tuslari

Klavye kisayollarini yapilandirma:

| Eylem | Aciklama |
|-------|----------|
| **Kisayol Ekle** | Yeni bir klavye kisayolu olustur |
| **Kisayolu Duzenle** | Mevcut kisayolu degistir |
| **Kisayolu Sil** | Bir kisayolu kaldir |

### Kisayol Ozellikleri

- **Tus**: Tus veya kombinasyon (orn., `SHIFT`, `CTRL+E`, `F`)
- **Eylem**: `activate`, `toggle` veya `close`
- **Widget**: Hedef widget adi (activate/toggle icin)

---

## Menu Gorunurlugu

Menu acikken neyin gorunur oldugunu kontrol edin:

| Ozellik | Aciklama |
|---------|----------|
| **Oyunculari Gizle** | Diger oyunculari goruntulemeden gizle |
| **Moblari Gizle** | Tum moblari gizle |
| **Ogeleri Gizle** | Yerdeki ogeleri gizle |
| **Beyaz Liste** | Gorunur kalan oyuncular (listeyi duzenle) |

---

## Gelismis Ayarlar

Menu davranisini ince ayar yapma:

| Ozellik | Aciklama |
|---------|----------|
| **Imlec Hassasiyeti** | Fare hareket hizi (0.1 - 5.0) |
| **Maks Yaw Ofseti** | Yatay imlec siniri (derece) |
| **Maks Pitch Ofseti** | Dikey imlec siniri (derece) |
| **Kamera Kilidi Etkin** | Menu acikken oyuncunun kamerasini kilitle |
| **Kamera Kilidi Gucu** | Kameranin ne kadar guclu kilitlenecegi (0.0 - 1.0) |
| **Sinir Sesi** | Imlec sinira ulastiginda calan ses |
| **Sinir Ses Seviyesi/Tiz** | Ses ozellikleri |
| **Sinir Mesaji** | Sinirda gosterilen mesaj |

---

## Widget Duzenleme

### Widget Listesi

Mevcut menudeki tum widgetlari gosterir:

- **Sol tikla**: Widgeti duzenle
- **Shift + Sol tikla**: Widgeti sil
- **Yeni Olustur**: Yeni bir widget ekle

### Widget Duzenleyici Merkezi

Her widgetin su duzenlenebilir bolumleri vardir:

| Bolum | Aciklama |
|-------|----------|
| **Tur** | IMAGE, TEXT veya CURSOR |
| **Donusum** | Pozisyon, boyut, dondurme |
| **Gorsel Durumlar** | Normal, hover, pressed, disabled gorunumleri |
| **Carpisma** | Carpisma kutusu yapilandirmasi |
| **Olaylar** | Etkilesim olaylari ve eylemler |
| **[Ture ozel]** | Widget turune gore ek secenekler |

---

## Donusum Duzenleyici

Widget konumlandirma ve boyutlandirmayi yapilandirma:

### Pozisyon
- **X**: Yatay pozisyon
- **Y**: Dikey pozisyon
- **Z**: Derinlik pozisyonu

### Boyut
- **X**: Genislik olcegi
- **Y**: Yukseklik olcegi
- **Z**: Derinlik olcegi

### Dondurme
- **Pitch**: Yukari/asagi dondurme
- **Yaw**: Sol/sag dondurme
- **Roll**: Egim dondurme

**Ipucu**: Sohbet girisi ile duzenlemek icin herhangi bir degere tiklayin.

---

## Gorsel Durumlar

Widgetlar farkli durumlar icin farkli gorunumlere sahip olabilir:

| Durum | Ne Zaman Uygulanir |
|-------|-------------------|
| **normal** | Varsayilan durum |
| **hover** | Imlec widgetin uzerinde |
| **pressed** | Widget tiklanmakta |
| **disabled** | Widget aktif degil |
| **Ozel** | Herhangi bir ozel durum adi |

### Gorsel Durum Duzenleyici

Her durumun:

| Ozellik | Aciklama |
|---------|----------|
| **Tur** | `image`, `text` veya `unicode` |
| **Deger** | Resim yolu, metin icerigi veya unicode karakter |
| **Gecersiz Kilmalar** | Istege bagli donusum/carpisma/metin boyutu gecersiz kilmalari |

---

## Carpisma Duzenleyici

Widgetin tiklanabilir alanini yapilandirma:

| Ozellik | Aciklama |
|---------|----------|
| **Etkin** | Carpisma algilamayi ac/kapat |
| **Pozisyon X/Y/Z** | Carpisma kutusu merkez ofseti |
| **Boyut X/Y/Z** | Carpisma kutusu boyutlari |
| **Ofset X/Y/Z** | Ek ofset |

**Ipucu**: Oyun icinde carpisma kutularini gorsellestirmek icin `/cm hataayiklama particles` kullanin.

---

## Olay Duzenleyici

### Olay Turleri

| Olay | Tetikleyici |
|------|-------------|
| **on_menu_open** | Menu acildiginda |
| **on_cursor_hover** | Imlec widgete girdiginde |
| **on_cursor_hover_exit** | Imlec widgetten ayrildiginda |
| **on_cursor_click** | Widget tiklandiginda |

### Eylem Listesi

Her olay, sirayla yurutulen eylemlerin bir listesini icerir:

- **Sol tikla**: Eylemi duzenle
- **Shift + Sol tikla**: Eylemi sil
- **Eylem Ekle**: Yeni eylem olustur
- **Yeniden Sirala**: Yurutme sirasini degistirmek icin suruklein

---

## Eylem Duzenleyicileri

Her eylem turunde ozel bir duzenleyici vardir:

### Animasyon Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Efekt** | Animasyon turu (rotate, scale, bounce vb.) |
| **Sure** | Milisaniye cinsinden animasyon uzunlugu |
| **Olcek X/Y/Z** | Olcek carpanlari (olcek animasyonlari icin) |
| **Yogunluk** | Efekt gucu (0.1 - 5.0) |
| **Yumusatma** | Zamanlama fonksiyonu (linear, ease_in, ease_out vb.) |
| **Oncelik** | Animasyon sirasinda etkilesimleri engelle |

### Ses Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Dosya** | Ses yolu (minecraft:... veya ozel yol) |
| **Ses Seviyesi** | Ses duzeyi (0.0 - 1.0) |
| **Tiz** | Ses tizi (0.5 - 2.0) |

**Gozat**: Ses tarayicisini acmak ve bir ses secmek icin tiklayin.

### Komut Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Komut** | Yurutulecek komut (ozel komutlarla) |
| **Gecikme** | Yurutmeden onceki milisaniye cinsinden gecikme |

**Ozel Komutlar:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aMesajiniz burada`
- `[CLOSE]`
- `[PLAY_MUSIC] path/file.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /command`
- `[CONSOLE] /command`

### Durum Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Eylem Turu** | `toggle_state` veya `set_state` |
| **Durumlar** | Arasinda gecis yapilacak durumlarin listesi (toggle_state) |
| **Durum** | Hedef durum adi (set_state) |

### Gorsel Degisiklik Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Hedef** | Hedef gorsel durum adi |

### Widget Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Eylem** | `hide_widget`, `show_widget` vb. |
| **Widget** | Hedef widget adi |

### Efekt Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Efekt** | Uygulanacak efekt turu |
| **Parametreler** | Efekte ozgu parametreler |

### Animasyonu Durdur Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Animasyon Turu** | Hangi animasyonun durduruluacgi |

### Efekti Durdur Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Efekt Turu** | Hangi efektin durduruluacgi |

### Temel Durumu Ayarla Eylemi

| Ozellik | Aciklama |
|---------|----------|
| **Durum** | Widget icin yeni temel durum |

---

## Varlik Tarayicilari

### Resim Tarayicisi

`images/` klasorunuzdeki tum resimleri gozatin:

- **Sayfalama**: Resim sayfalari arasinda gezinin
- **Onizleme**: Resim yolunu ve ayrintilari gorun
- **Sec**: Mevcut baglamda kullanmak icin tiklayin

Resimler klasore gore duzenlenmistir (orn., `template/button.png`).

### Ses Tarayicisi

`sounds/` klasorunuzdeki tum sesleri ve Minecraft yerlesik seslerini gozatin:

- **Ozel Sesler**: `sounds/` klasorunuzdeki .ogg dosyalariniz
- **Minecraft Sesleri**: Yerlesik sesler (minecraft:ui.button.click vb.)
- **Sec**: Mevcut baglamda kullanmak icin tiklayin

---

## Ipuclari ve En Iyi Uygulamalar

### Is Akisi Ipuclari

1. **Ozelliklerle Baslayin**: Ilk once ad, baslik ve konumu ayarlayin
2. **Widget Ekleyin**: Temel donusumlerle widgetlarinizi olusturun
3. **Gorselleri Yapilandirin**: Normal ve hover durumlarini ayarlayin
4. **Carpisma Ekleyin**: Carpisma kutularini etkinlestirin ve boyutlandirin
5. **Olay Ekleyin**: Hover seslerini ve tiklama eylemlerini yapilandirin
6. **Sik Sik Test Edin**: Degisiklikleri test etmek icin `/cm ac <menu>` kullanin

### Klavye Kisayollari

| Kisayol | Eylem |
|---------|-------|
| **Escape** | Duzenleyiciyi kapat |
| **Sayi tuslari (1-9)** | Hizli slot secimi |

### Yaygin Sorunlar

**Degisiklikler gorunmuyor:**
- Degisiklik yaptiktan sonra `/cm yenidenyukle` calistirin
- Duzenleyicide "Kaydet"e tikladiginizdan emin olun

**Carpisma algilanmiyor:**
- Carpismanin etkin oldugunu kontrol edin
- Carpisma boyutunun yeterince buyuk oldugunu dogrulayin
- Gorsellestirmek icin `/cm hataayiklama particles` kullanin

**Resimler gorunmuyor:**
- Kaynak paketini yeniden olusturmak icin `/cm paket` calistirin
- Resmin bir alt klasorde oldugunu dogrulayin (orn., `images/mymenu/`)
- Kaynak paketini istemciye uygulyin

---

## Ayrica Bakiniz

- [Komut Referansi](commands.md)
- [Menu Olusturma](menu-creation.md)
- [Widget Turleri](widgets.md)
- [Olay Sistemi](events.md)
- [Animasyonlar](animations.md)
