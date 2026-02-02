# Animasyon Sistemi

CraftMenu 19 animasyon turu ve 6 easing fonksiyonuyla guclu bir animasyon sistemi saglar.

## Animasyon Turleri

### Hareket Animasyonlari

| Tur | Aciklama |
|-----|----------|
| `translate` | Widget pozisyonunu tasi |
| `bounce` | Sicrama efekti |
| `float` | Hafif yukari/asagi suzulme |
| `orbit` | Dairesel yore hareketi |

### Rotasyon Animasyonlari

| Tur | Aciklama |
|-----|----------|
| `rotate` | Surekli rotasyon |
| `swing` | Sarkac sallantisi |
| `flip` | 180 derece cevirme |
| `wobble` | Titrek rotasyon |
| `spiral` | Spiral hareket |

### Olcek Animasyonlari

| Tur | Aciklama |
|-----|----------|
| `scale` | Boyut degistir |
| `pulse` | Ritmik nabiz |
| `squeeze` | Sikistirma/germe |
| `zoom_in` | Yakinlastirma efekti |

### Gorsel Animasyonlar

| Tur | Aciklama |
|-----|----------|
| `fade` | Opaklık solmasi |
| `glow` | Parlama efekti |
| `shake` | Sarsinti hareketi |
| `jiggle` | Titreme hareketi |
| `wave` | Dalga hareketi |

## Temel Animasyon Kullanimi

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Animasyon Ozellikleri

### Ortak Ozellikler

```yaml
- action: animation
  effect: pulse           # Animasyon turu (gerekli)
  duration: 1000          # Milisaniye olarak sure
  easing_style: ease_out  # Easing fonksiyonu
  intensity: 1.0          # Efekt yogunlugu
  priority: false         # Diger eylemleri engellesin mi?
```

### Efekte Ozel Ozellikler

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Derece
```

**Scale:**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade:**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = fade out, false = fade in
```

## Easing Fonksiyonlari

| Easing | Aciklama |
|--------|----------|
| `linear` | Sabit hiz |
| `ease_in` | Yavas baslar |
| `ease_out` | Yavas biter |
| `ease_in_out` | Yavas baslama ve bitis |
| `bounce` | Sicrama efekti |
| `elastic` | Yay efekti |

### Easing Ornekleri

```yaml
# Yumusak hover efekti
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Sicramali tiklama geri bildirimi
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Animasyon Onceligi

Diger eylemlerden once animasyonun tamamlanmasini saglamak icin `priority: true` kullanin:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Sonraki eylemi engeller

    - action: command
      command: "[CLOSE]"      # Animasyonu bekler
```

## Animasyonlari Durdurma

```yaml
- action: stop_animation
  animation_type: rotate      # Belirli turu durdur
  # veya
  type: all                   # Tum animasyonlari durdur
```

## Surekli Animasyonlar

Widget yapilandirmasinda surekli calisan animasyonlar tanimlayin:

```yaml
widgets:
  spinning_icon:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## En Iyi Uygulamalar

1. Duyarli geri bildirim icin sureleri 500ms altinda tutun
2. Hover efektleri icin `ease_out` kullanin
3. Tiklama geri bildirimi icin `bounce` kullanin
4. Bir widget'ta birden fazla eszamanli animasyondan kacinin
5. Farkli donanımlarda animasyonlari test edin
