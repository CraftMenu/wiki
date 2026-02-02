# Kapsamli Animasyon Rehberi - CraftMenu

Bu dokuman CraftMenu'de mevcut tum animasyon turlerini pratik YAML kullanim ornekleriyle sunmaktadir.

---

## Icindekiler

1. [Temel Animasyonlar](#temel-animasyonlar)
2. [Hareket Animasyonlari](#hareket-animasyonlari)
3. [Gelismis Animasyonlar](#gelismis-animasyonlar)
4. [Animasyonlari Birlestirme](#animasyonlari-birlestirme)
5. [Ortak Ozellikler](#ortak-ozellikler)

---

## Temel Animasyonlar

### SCALE - Boyut Degisimi

Widget boyutunu X, Y, Z eksenlerinde degistirir.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # Orijinal boyutun %120'si
    easing_style: out
```

**Ozellikler**:
- `scaleX`: X ekseninde olcek (varsayilan: intensity)
- `scaleY`: Y ekseninde olcek (varsayilan: intensity)
- `scaleZ`: Z ekseninde olcek (varsayilan: intensity)

---

### ROTATE - Rotasyon

Widget'i X, Y, Z eksenleri etrafinda dondurur.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Y ekseninde tam rotasyon
    easing_style: in_out
```

**Ozellikler**:
- `rotationX`: Derece olarak X ekseninde rotasyon
- `rotationY`: Derece olarak Y ekseninde rotasyon
- `rotationZ`: Derece olarak Z ekseninde rotasyon

---

### TRANSLATE - Yer Degistirme

Widget'i yeni bir pozisyona tasir.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Blok olarak yer degistirme
    easing_style: out
```

**Ozellikler**:
- `offsetX`: X ekseninde yer degistirme
- `offsetY`: Y ekseninde yer degistirme
- `offsetZ`: Z ekseninde yer degistirme

---

### FADE - Solma giri/cikis

Widget opakligini/gorunurlugunu kontrol eder.

```yaml
# Fade out (kaybolma)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = fade out, false = fade in
    easing_style: in

# Fade in (belirme)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Ozellikler**:
- `fadeOut`: true kaybolmak icin, false belirmek icin

---

## Hareket Animasyonlari

### PULSE - Nabiz

Ritmik olceklemeyle nefes alma/kalp atisi efekti.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Surekli animasyon
    easing_style: in_out
```

---

### BOUNCE - Sicrama

Dikey olarak top sicrama fizigini simule eder.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Sicrama yuksekligi
    easing_style: out
```

---

### SWING - Sarkac Sallantisi

Sarkac/sallanma hareketi.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Sallanma genisligi
    loop: true
    easing_style: in_out
```

---

### FLOAT - Suzulme

Yumusak dikey yukari asagi hareketi.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Suzulme yuksekligi
    loop: true
    easing_style: in_out
```

---

### SHAKE - Titreme

Hizli ve rastgele titresim.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Titresim yogunlugu
    easing_style: linear
```

---

### JIGGLE - Elastik Titreme

Elastik efektli daha yumusak ve kontrollü sarsilma.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Titreme genisligi
    easing_style: out
```

---

## Gelismis Animasyonlar

### SLIDE - Ekran Disindan Kayma

Widget ekran disindan kayarak girer.

```yaml
# Soldan kayma
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Blok olarak mesafe
    easing_style: out

# Ustten kayma
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Ozellikler**:
- `direction`: Giris yonu (left, right, top, bottom, front, back)
- `distance`: Blok olarak baslangic mesafesi (varsayilan: intensity * 2.0)

**Yaygin Kullanim**: CRITICAL oncelikli `on_menu_open` animasyonlari icin ideal.

---

### ZOOM_IN - Asirim ile Giris

0'dan 1'e asirimli (asiri gidip geri doner) olcekleme.

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # 1.0'a donmeden once maksimum olcek
    easing_style: out
```

**Ozellikler**:
- `overshoot`: 1.0'da stabilize olmadan once maksimum olcek (varsayilan: 1.2)

**Yaygin Kullanim**: `on_menu_open`'da dramatik giris animasyonu.

---

### SQUEEZE - Sikistirma Efekti

Digerlerini genisletirken bir ekseni duzlestirir.

```yaml
# Yatay sikistirma
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Sikistirma yogunlugu
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Dikey sikistirma
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Ozellikler**:
- `axis`: Sikistirilacak eksen (x, y, z)
- `intensity`: Sikistirma yogunlugu

---

### FLIP - 180° Dondurme

Belirli bir eksende 180 derece rotasyon.

```yaml
# Dikey flip (kart cevirme gibi)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Yatay flip
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Ozellikler**:
- `axis`: Rotasyon ekseni (x, y, z)

**Yaygin Kullanim**: Durum gecisleri, alternatif icerigi gosterme.

---

### WOBBLE - Jole Sallantisi

"Jole" tarzinda yana dogru sallanma.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Sallanma yogunlugu
    loop: true
    easing_style: in_out
```

**Yaygin Kullanim**: Dikkat animasyonlari, hover geri bildirimi.

---

### ORBIT - Yore Hareketi

Widget merkezi bir nokta etrafinda daire cizer.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Blok olarak yore yaricapi
    speed: 1.0  # Hiz carpani
    loop: true
    easing_style: linear
```

**Ozellikler**:
- `radius`: Yore yaricapi (varsayilan: intensity * 0.5)
- `speed`: Donme hizi (varsayilan: 1.0)

**Yaygin Kullanim**: Dekoratif arka plan animasyonlari.

---

### SPIRAL - Spiral Hareket

Rotasyonu dairesel hareketle birlestirir.

```yaml
# Saat yonunde spiral
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Spiral yaricapi
    clockwise: true  # Saat yonu
    loop: true
    easing_style: linear

# Saat yonunun tersinde spiral
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Ozellikler**:
- `radius`: Spiral yaricapi (varsayilan: intensity * 0.3)
- `clockwise`: Hareket yonu (true/false)

---

### WAVE - Dalga Hareketi

Sinus fonksiyonu kullanan yumusak dalga.

```yaml
# Yatay dalga
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Dalga genisligi
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Dikey dalga
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Ozellikler**:
- `axis`: Dalga yonu (horizontal, vertical)

---

### GLOW - Nabizli Parlama

Hafif nabiz ile opakluk degisikliklerini birlestirir.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Parlama yogunlugu
    loop: true
    easing_style: in_out
```

**Yaygin Kullanim**: Onemli elemanlari vurgulama, dikkat gostergeleri.

---

## Animasyonlari Birlestirme

Birden fazla animasyonu sirali veya eszamanli birlestirebilirsiniz.

### Ornek 1: Dramatik Giris

```yaml
on_menu_open:
  # 1. Soldan kayma
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - sonraki eylemleri engeller
      easing_style: out

  # 2. Asirimli zoom (kayma SONRASI calisir)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Surekli suzulme (zoom sonrasi baslar)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Ornek 2: Karmasik Interaktif Buton

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Hover sesi
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Gorsel degisiklik
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Hafif nabiz
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Gorseli geri yukle
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Tiklama sesi
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Animasyon dizisi
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

      # Komut (animasyonlar SONRASI calisir)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/your-server'
          delay: 1600
```

---

### Ornek 3: Coklu Animasyonlu Dekoratif Widget

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Dairesel yore
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Yore halindasken dondurme
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Nabizli parlama
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Ortak Ozellikler

Tum animasyonlar su ozellikleri destekler:

### type
Eylem turu (her zaman `animation`).

### effect
Animasyon adi (scale, rotate, pulse, vb.).

### duration
Milisaniye olarak sure.

```yaml
duration: 1000  # 1 saniye
```

### intensity
Genel animasyon yogunlugu (anlami ture gore degisir).

```yaml
intensity: 0.5  # Varsayilan yogunlugun yarisi
```

### loop
Animasyonun sonsuz tekrar edip etmeyecegi.

```yaml
loop: true  # Surekli animasyon
loop: false # Tek seferlik animasyon (varsayilan)
```

### delay
Animasyon baslamadan once gecikme (ms olarak).

```yaml
delay: 500  # Baslamadan 500ms bekle
```

### easing_style
Animasyon yumusakligi icin easing turu.

```yaml
easing_style: linear      # Sabit hiz
easing_style: in          # Baslangicta hizlanir
easing_style: out         # Sonunda yavaslar
easing_style: in_out      # Hizlanir ve yavaslar
```

### priority
Animasyon onceligi (kesmeyi etkiler).

```yaml
priority: true   # CRITICAL - asla kesilmez, sonraki eylemleri engeller
priority: false  # INTERRUPTIBLE - kesilebilir (varsayilan)
```

**Not**: Surekli animasyonlar (`loop: true`) her zaman BACKGROUND onceliktir.

---

## Baglama Gore Kullanim Rehberi

### on_menu_open icin Animasyonlar

```yaml
on_menu_open:
  - effect: slide       # Kayarak giris
  - effect: zoom_in     # Asirimli giris
  - effect: fade        # Yumusak fade in
```

### on_cursor_hover icin Animasyonlar

```yaml
on_cursor_hover:
  - effect: scale       # Boyut artirma
  - effect: pulse       # Yumusak nabiz
  - effect: glow        # Vurgulama parlamasi
  - effect: wobble      # Dikkat sallantisi
```

### on_cursor_click icin Animasyonlar

```yaml
on_cursor_click:
  - effect: squeeze     # Basinc geri bildirimi
  - effect: bounce      # Onay ziplama
  - effect: shake       # Darbe titremesi
  - effect: flip        # Cevirme/gosterme
```

### Surekli Animasyonlar (Dekoratif)

```yaml
continuous-animations:
  - effect: float       # Yumusak suzulme
  - effect: rotate      # Sabit rotasyon
  - effect: orbit       # Yore hareketi
  - effect: spiral      # Dekoratif spiral
  - effect: wave        # Dalga hareketi
  - effect: glow        # Nabizli parlama
```

---

## Hizli Referans Tablosu

| Animasyon | Tur | Ana Kullanim | Dongu? | Varsayilan Oncelik |
|-----------|-----|--------------|--------|-------------------|
| SCALE | Donusum | Hover, Tiklama | Hayir | INTERRUPTIBLE |
| ROTATE | Donusum | Dekoratif | Evet | BACKGROUND |
| TRANSLATE | Donusum | Hareket | Hayir | CRITICAL |
| PULSE | Hareket | Surekli | Evet | BACKGROUND |
| BOUNCE | Hareket | Tiklama | Hayir | INTERRUPTIBLE |
| SWING | Hareket | Hover | Evet | INTERRUPTIBLE |
| FLOAT | Hareket | Surekli | Evet | BACKGROUND |
| SHAKE | Hareket | Tiklama | Hayir | INTERRUPTIBLE |
| FADE | Gorsel | Giris/Cikis | Hayir | CRITICAL |
| SLIDE | Gelismis | Giris | Hayir | CRITICAL |
| ZOOM_IN | Gelismis | Giris | Hayir | CRITICAL |
| SQUEEZE | Gelismis | Tiklama | Hayir/Evet | INTERRUPTIBLE |
| FLIP | Gelismis | Durum | Hayir | CRITICAL |
| WOBBLE | Gelismis | Hover | Evet | BACKGROUND |
| ORBIT | Gelismis | Dekoratif | Evet | BACKGROUND |
| SPIRAL | Gelismis | Dekoratif | Evet | BACKGROUND |
| WAVE | Gelismis | Dekoratif | Evet | BACKGROUND |
| JIGGLE | Gelismis | Hover | Hayir | INTERRUPTIBLE |
| GLOW | Gelismis | Vurgulama | Evet | BACKGROUND |

---

**Son Guncelleme**: 2025-10-15
**Plugin Surumu**: 2.0
**Yazar**: Zodunix
