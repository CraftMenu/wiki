# Komut Referansi

CraftMenu menuleri yonetmek icin kapsamli bir komut seti saglar.

## Temel Komut

Tum komutlar `/craftmenu` (kisaltma: `/cm`) kullanir.

## Genel Komutlar

### Yardim
```
/cm yardim [komut]
```
Tum komutlar veya belirli bir komut icin yardim bilgisi gosterir.

### Menuleri Listele
```
/cm liste
```
Tum yuklu menu sablonlarini listeler.

### Eklenti Bilgisi
```
/cm bilgi
```
Eklenti surumunu ve istatistikleri gosterir.

## Menu Komutlari

### Menu Ac
```
/cm ac <menu_adi> [oyuncu]
```
Kendiniz veya baska bir oyuncu icin menu acar.

**Ornekler:**
- `/cm ac template` - Template menusunu kendiniz icin acin
- `/cm ac lobby Steve` - Steve oyuncusu icin lobby menusunu acin

### Menu Kapat
```
/cm kapat [oyuncu]
```
Kendiniz veya baska bir oyuncu icin aktif menuyu kapatir.

### Menu Olustur
```
/cm olustur <menu_adi>
```
Mevcut konumunuzda yeni bir menu sablonu olusturur.

### Menu Sil
```
/cm sil <menu_adi>
```
Bir menu sablonunu siler.

## Kaynak Paketi Komutlari

### Kaynak Paketi Olustur
```
/cm paket
```
CraftMenu klasorundeki gorsellerden ve seslerden kaynak paketi olusturur.

### Gorsel Komutlari
```
/cm resimler tara
/cm resimler onar [--backup]
/cm resimler boyutlandir <gorsel_yolu> <hedef_boyut>
/cm resimler yedekle
/cm resimler geriykle <yedek_adi>
/cm resimler liste
/cm resimler yedekler
```
- `tara` - Asiri buyuk gorselleri tarar
- `onar` - Asiri buyuk gorselleri otomatik optimize eder
- `boyutlandir` - Belirli bir gorseli hedef boyuta yeniden boyutlandirir (16-4096 piksel)
- `yedekle` - Gorsellerin yedegini olusturur
- `geriykle` - Bir yedekten gorselleri geri yukler
- `liste` - images klasorundeki tum gorselleri listeler
- `yedekler` - Tum mevcut yedekleri listeler

## Yapilandirma Komutlari

### Yeniden Yukle
```
/cm yenidenyukle
```
Tum yapilandirmalari ve menu sablonlarini yeniden yukler.

### Dil
```
/cm dil <dil>
/cm dil liste
```
- `/cm dil <dil>` - Eklenti dilini dogrudan degistirir ("set" gerekli degil)
- `/cm dil liste` - Tum mevcut dilleri listeler

**Mevcut diller:**
- `en_US` - Ingilizce
- `pt_BR` - Portekizce (Brezilya)
- `es_ES` - Ispanyolca
- `fr_FR` - Fransizca
- `de_DE` - Almanca
- `it_IT` - Italyanca
- `nl_NL` - Hollandaca
- `ru_RU` - Rusca
- `pl_PL` - Lehce
- `tr_TR` - Turkce
- `uk_UA` - Ukraynaca
- `ar_SA` - Arapca
- `ja_JP` - Japonca
- `ko_KR` - Korece
- `zh_CN` - Cince (Basitlestirilmis)
- `hi_IN` - Hintce
- `id_ID` - Endonezce
- `th_TH` - Tayca
- `vi_VN` - Vietnamca

## Hata Ayiklama Komutlari

### Hata Ayiklama Parcaciklari
```
/cm hataayikla parcaciklar
/cm hataayikla parcaciklar boyut <deger>
```
- `/cm hataayikla parcaciklar` - TUM hata ayiklama parcaciklarini acar/kapatir (carpisma kutulari, imlec konumu, widget merkezleri)
- `/cm hataayikla parcaciklar boyut <deger>` - Parcacik boyutunu ayarlar (0.001 ile 2.0 arasi)

### Izgara Hata Ayiklama
```
/cm hataayikla izgara
/cm hataayikla izgara numaralar
```
- `/cm hataayikla izgara` - Hata ayiklama izgarasi gorsellestirmesini acar/kapatir
- `/cm hataayikla izgara numaralar` - Izgara hucre numaralarinin goruntulenmesini acar/kapatir

### Saglik Kontrolu
```
/cm saglik
```
Bilesen saglik durumunu gosterir.

### Kurtar
```
/cm kurtar
```
Hatalardan kurtulmaya calisir.

## Editor Komutu

Menuler ve widgetlar icin oyun ici gorsel editoru acar.

### Editor Ac
```
/cm editor
/cm editor <menu_adi>
```
- `/cm editor` - Editor ana sayfasini acar
- `/cm editor <menu_adi>` - Belirli bir menu icin editoru acar

**Gerekli Izin:** `craftmenu.admin`

## Izinler

| Izin | Aciklama |
|------|----------|
| `craftmenu.use` | Temel kullanim (menuleri acma) |
| `craftmenu.admin` | Admin komutlari |
| `craftmenu.open` | Menuleri acma |
| `craftmenu.create` | Menu olusturma |
| `craftmenu.reload` | Eklentiyi yeniden yukleme |
| `craftmenu.debug` | Hata ayiklama komutlari |
