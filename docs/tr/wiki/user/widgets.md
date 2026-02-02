# Widget Turleri

CraftMenu menu olusturmak icin uc tur widget destekler.

## Widget Turlerine Genel Bakis

| Tur | Aciklama | Interaktif |
|-----|----------|------------|
| IMAGE | Gorselleri goruntüler | Evet |
| TEXT | Biçimlendirilmis metin goruntüler | Evet |
| CURSOR | Fare imleci | Ozel |

## IMAGE Widget

Butonlar, arka planlar ve dekoratif elemanlar icin kullanilir.

### Temel Gorsel

```yaml
my_image:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Durumlarli Gorsel

```yaml
my_button:
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

### Durum Override'lari

Her durum transform ve carpisma override'larina sahip olabilir:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Hover'da biraz daha buyuk
```

## TEXT Widget

PlaceholderAPI destekli biçimlendirilmis metin goruntüler.

### Temel Metin

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bSunucuya hos geldiniz!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Placeholder'li Metin

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Oyuncu: &f%player_name%\n&7Seviye: &a%player_level%"
      text-size: 0.8
```

### Cok Satirli Metin

Satir sonlari icin `\n` kullanin:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Satir 1\nSatir 2\nSatir 3"
```

## CURSOR Widget

Imlec oyuncu fare hareketini takip eder.

### Temel Imlec

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

## Transform Ozellikleri

Tum widget'lar transform ozelliklerini destekler:

```yaml
transform:
  position:
    x: 0.0    # Yatay offset
    y: 0.0    # Dikey offset
    z: 0.0    # Derinlik offset
  size:
    x: 0.1    # Genislik olcegi
    y: 0.1    # Yukseklik olcegi
    z: 0.1    # Derinlik olcegi
  rotation:
    pitch: 0  # X-ekseni rotasyonu
    yaw: 0    # Y-ekseni rotasyonu
    roll: 0   # Z-ekseni rotasyonu
```

## Carpisma Ozellikleri

Carpisma algilamayi etkinlestirin veya ozellestirin:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Widget Sirasi

Widget'lar YAML dosyasinda gorunme sirasina gore render edilir. Sonraki widget'lar onceki widget'larin onunde gorunur.
