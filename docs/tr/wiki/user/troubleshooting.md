# Sorun Giderme

CraftMenu icin yaygin sorunlar ve cozumler.

## Gorseller Gorunmuyor

**Belirti:** Gorseller "?" veya eksik karakter olarak gorunuyor.

**Cozumler:**

1. **Kaynak paketini yeniden olusturun:**
   ```
   /cm zip
   ```

2. **Gorsel konumunu kontrol edin:**
   - Gorseller alt klasorlerde olmali: `plugins/CraftMenu/images/klasor/gorsel.png`
   - Kokte OLMAMALI: `plugins/CraftMenu/images/gorsel.png`

3. **Gorsel formatini dogrulayin:**
   - Sadece PNG dosyalari desteklenir
   - Dogru dosya uzantisini saglayin (`.png`, `.PNG` degil)

4. **Kaynak paketinin yuklenip yuklenmedigini kontrol edin:**
   - Sunucu kaynak paketi yapilandirilmis olmali
   - Oyuncu kaynak paketini kabul etmis olmali

5. **Eklentiyi yeniden yukleyin:**
   ```
   /cm reload
   ```

## Menu Acilmiyor

**Belirti:** `/cm open` komutu bir sey yapmiyor.

**Cozumler:**

1. **Menunun var olup olmadigini kontrol edin:**
   ```
   /cm list
   ```

2. **Komutu calistirdiktan sonra konsolda hata olup olmadigini kontrol edin**

3. **YAML sozdizimini dogrulayin:**
   - Bir YAML dogrulayici kullanin
   - Yanlis girintileri kontrol edin

4. **Dogus konumunun gecerli oldugundan emin olun:**
   - Dunya yuklu olmali
   - Konuma erisilebilir olmali

## Carpisma Calismiyor

**Belirti:** Imlec widget'lari algilamiyor.

**Cozumler:**

1. **Hata ayiklama parcaciklarini etkinlestirin:**
   ```
   /debugcollision toggle
   ```

2. **Carpisma yapilandirmasini kontrol edin:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Cok kucukse carpisma kutusu boyutunu artirin**

4. **Widget pozisyonunu kontrol edin** - carpisma offset edilmis olabilir

## Sesler Calmiyor

**Belirti:** Ses eylemlerinin etkisi yok.

**Cozumler:**

1. **Ozel sesler icin:**
   - `.ogg` dosyalarini `plugins/CraftMenu/sounds/klasor/` icine koyun
   - Kaynak paketini yeniden olusturun: `/cm zip`

2. **Minecraft sesleri icin:**
   - Dogru formati kullanin: `minecraft:ui.button.click`

3. **Eylem yapilandirmasindaki ses ayarlarini kontrol edin**

## Performans Sorunlari

**Belirti:** Menu kullanirken lag.

**Cozumler:**

1. **Gorselleri optimize edin:**
   ```
   /cm images scan
   /cm images fix --backup
   ```

2. **Karmasik menulerde animasyon sikligini azaltin**

3. **Hata ayiklama modunu devre disi birakin:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Guncelleme araligini artirin:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Eklenti Yuklenmiyor

**Belirti:** Eklenti baslatmada hata gosteriyor.

**Cozumler:**

1. **Java surumunu kontrol edin:**
   - Java 17 veya ustü gerekli

2. **Bagimliliklari dogrulayin:**
   - PacketEvents yuklu olmali

3. **Sunucu surumunu kontrol edin:**
   - Minecraft 1.20.4+ gerekli

4. **Belirli hatalar icin baslangic loglarini inceleyin**

5. **Kurtarmayi deneyin:**
   ```
   /cm recover
   ```

## YAML Hatalari

**Belirti:** Hatalar YAML ayristirmasindan bahsediyor.

**Yaygin Sorunlar:**

1. **Yanlis girinti:**
   ```yaml
   # Yanlis
   widgets:
   my_widget:
     type: IMAGE

   # Dogru
   widgets:
     my_widget:
       type: IMAGE
   ```

2. **Ozel degerlerin etrafinda eksik tirnak:**
   ```yaml
   # Yanlis - & ozel anlama sahip
   title: &bMerhaba

   # Dogru
   title: "&bMerhaba"
   ```

3. **Yanlis liste formati:**
   ```yaml
   # Yanlis
   events:
     on_cursor_click:
       action: sound

   # Dogru
   events:
     on_cursor_click:
       - action: sound
   ```

## Yardim Alma

Hala sorun yasiyorsaniz:

1. Hata ayiklama modunu etkinlestirin ve konsol cikisini kontrol edin
2. Bilinen sorunlar icin GitHub issues'u kontrol edin
3. Asagidakileri iceren yeni bir issue olusturun:
   - Sunucu surumu
   - Eklenti surumu
   - Konsol loglari
   - Yapilandirma dosyalari (hassas verileri kaldirin)
