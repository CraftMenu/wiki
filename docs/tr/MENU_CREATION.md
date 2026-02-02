# CraftMenu'de Menu Olusturma

## Icindekiler
1. [Komut ile Olusturma](#komut-ile-olusturma)
2. [YAML Yapisi](#yaml-yapisi)
3. [Mevcut Widget'lar](#mevcut-widgetlar)
4. [Transform (Konumlandirma)](#transform-konumlandirma)
5. [Carpisma](#carpisma)
6. [Olaylar ve Eylemler](#olaylar-ve-eylemler)
7. [Pratik Ornekler](#pratik-ornekler)

---

## Komut ile Olusturma

### Onerilen Yontem

1. **Oyuna girin** ve menunun olmasini istediginiz konuma gidin
2. **Oyuncular menuyu actiklari zaman bakmalari gereken yonu gozleyin**
3. **Calistirin**:
   ```
   /cm create menu_adi
   ```

Menu mevcut konumunuz ve rotasyonunuzla olusturulacak!

### Olusturulan Yapi

```
/plugins/CraftMenu/menus/menu_adi.yml
```

**Varsayilan sablon iceriyor**:
- FOV uyari widget'i (kaldirilabilir)
- Yapilandirilmis imlecc
- Optimize edilmis ayarlar
- Sinir geri bildirimi
- **Imlec varsayilan olarak TEXT kullaniyor** - doku ekledikten sonra IMAGE'a gecin

---

## YAML Yapisi

### Ana Bolumler

```yaml
menu:
  name: String              # Menu adi
  title: String             # Baslik (& kodlarini destekler)
  main: boolean             # Ana menu mu? (gelecek icin)
  location:                 # Dunya konumu
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Ayarlar
    # ... (asagiya bakin)
  widgets:                  # Menu widget'lari
    widget_adi:
      # ... (asagiya bakin)
```

### Detayli Ayarlar

```yaml
settings:
  # Ses
  background-music: "template/background.ogg"  # Arka plan muzigi (opsiyonel)

  # Imlec hareketi
  cursor-sensitivity: 1.0          # Hassasiyet (0.1 - 5.0)
  max-yaw-offset: 61.0             # Yatay limit derece olarak
  max-pitch-offset: 36.0           # Dikey limit derece olarak
  mount-time: 100                  # Tick olarak baglama suresi

  # Menu konumlandirma
  distance-multiplier: -0.01       # Mesafe carpani
  menu-distance: 0.3               # Menu mesafesi

  # Performans
  debug-mode: false                # Hata ayiklama modu
  update-rate: 1                   # Guncelleme orani
  collision-detection: true        # Aktif carpisma algilama

  # Kamera
  camera-lock-enabled: true        # Kamerayi kilitle
  camera-lock-strength: 0.4        # Kilit gucu (0.0-1.0)

  # Sinir geri bildirimi
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lImlec sinira ulasti!"
```

---

## Mevcut Widget'lar

### BUTTON

Hover ve tiklamali interaktif buton.

```yaml
play_button:
  type: BUTTON
  visual:
    normal:
      type: image
      value: mymenu/play.png
    hover:
      type: image
      value: mymenu/play-hover.png
    pressed:
      type: image
      value: mymenu/play-pressed.png
    fallback:
      type: text
      value: "OYNA"
  transform:
    position: {x: 0, y: 0.1, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover: [...]
    on_cursor_click: [...]
```

### IMAGE

Statik gorsel (hover'a sahip olabilir).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Opsiyonel
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Etkilesim yok
```

### TEXT

Biçimlendirilmis metin.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lHOS GELDINIZ
        &7sunucuya
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Metin boyutu
  shadow: true              # Golge
  background-color: '#000000'  # Arka plan rengi (hex)
```

### CURSOR

Fare ile kontrol edilen imlec (**menu basina sadece 1**).

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: mymenu/cursor.png
    hover:
      type: image
      value: mymenu/cursor-hover.png
    fallback:
      type: text
      value: "§f→"
  transform:
    position: {x: 0, y: 0, z: 1.0}  # yuksek z = onde
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Imlec ayarlari
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animasyon
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Carpisma alani
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Konumlandirma)

### Pozisyon

Menu dogus noktasina gore 3D uzayda pozisyon.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Sol (-) / Sag (+)
- **y**: Asagi (-) / Yukari (+)
- **z**: Uzak (-) / Yakin (+)

**Ipucu**: z=0.1 arka plan icin iyidir, z=1.0 imlec icin (her zaman gorunur)

### Boyut

Widget boyutu.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Tipik olcekler**:
- Kucuk buton: `0.015`
- Orta buton: `0.02`
- Buyuk buton: `0.03`
- Logo: `0.04-0.05`
- Imlec: `0.005`

### Rotasyon (Opsiyonel)

Derece olarak rotasyon.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Not**: Genellikle gerekli degil (ViewFrame zaten ayarliyor)

---

## Carpisma

### Temel Yapilandirma

```yaml
collision:
  enabled: true                     # Carpismay etkinlestir
  position: {x: 0, y: 0, z: 0.1}   # Opsiyonel: pozisyon override
  size: {x: 0.08, y: 0.04, z: 0.02} # Kutu boyutu
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Opsiyonel
```

### Gorsel Hata Ayiklama

```yaml
collision:
  debug:
    enabled: true     # Parcaciklari goster
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, vb
    size: 0.005       # Parcacik boyutu
```

**Global olarak etkinlestir**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Carpisma Ipuclari

1. **Gorsel boyut ≠ carpisma boyutu**
   - Carpisma daha kolay tiklamak icin daha buyuk olabilir
   - Ornek: gorsel 0.02, carpisma 0.08x0.04

2. **Carpisma pozisyonu**
   - Belirtilmezse, transform.position kullanir
   - Farkli bir alan istiyorsaniz belirtin

3. **Collision-area (Imlec)**
   - Imlec `collision` yerine `collision-area` kullaniyor
   - Sebep: Imlec ozel davranisa sahip

---

## Olaylar ve Eylemler

### Mevcut Olaylar

| Olay | Ne Zaman Tetiklenir | Widget'lar |
|------|---------------------|------------|
| `on_menu_open` | Menu acilir | Tumu |
| `on_cursor_hover` | Imlec girer | Button, Image, Text |
| `on_cursor_hover_exit` | Imlec cikar | Button, Image, Text |
| `on_cursor_click` | Widget tiklanir | Button |
| `on_click_any` | Herhangi bir tiklama | Sadece Cursor |

### Mevcut Eylemler

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, vb
```

#### visual_change_conditional

```yaml
- action: visual_change_conditional
  if_state: normal
  to: hover
```

#### sound

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # VEYA "mymenu/click.ogg"
  volume: 0.8    # 0.0-1.0
  pitch: 1.0     # 0.5-2.0
```

#### scale

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}
  duration: 300  # ms
```

#### scale_reset

```yaml
- action: scale_reset
  duration: 200
```

#### command

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  delay: 1000  # Opsiyonel, ms olarak
```

**Ozel komutlar**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &renkli metin`
- `[CLOSE]`
- `[PLAY_MUSIC] path/sound.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`

#### toggle_state

```yaml
- action: toggle_state
  states: [normal, disabled]
```

#### hide_widget

```yaml
- action: hide_widget
  widget: widget_adi
```

---

## Pratik Ornekler

### Sesli Basit Buton

```yaml
simple_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/button.png}
    hover: {type: image, value: menu/button-hover.png}
  transform:
    position: {x: 0, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.2
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: command
      command: '[MESSAGE] &aButon tiklandi!'
```

### Teleportlu Buton

```yaml
spawn_button:
  type: BUTTON
  visual:
    normal: {type: image, value: menu/spawn.png}
    hover: {type: image, value: menu/spawn-hover.png}
  transform:
    position: {x: -0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_click:
    - action: sound
      file: "minecraft:entity.enderman.teleport"
    - action: command
      command: '[MESSAGE] &eIsinlaniyor...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Acar/Kapatir Butonu (Acik/Kapali)

```yaml
toggle_button:
  type: BUTTON
  initial-state: normal
  visual:
    normal: {type: image, value: menu/on.png}
    hover: {type: image, value: menu/on-hover.png}
    disabled: {type: image, value: menu/off.png}
    disabled_hover: {type: image, value: menu/off-hover.png}
  transform:
    position: {x: 0.1, y: 0, z: 0.1}
    size: {x: 0.02, y: 0.02, z: 0.02}
  collision:
    enabled: true
    size: {x: 0.08, y: 0.04, z: 0.02}
  events:
    on_cursor_hover:
    - action: visual_change_conditional
      if_state: normal
      to: hover
    - action: visual_change_conditional
      if_state: disabled
      to: disabled_hover
    on_cursor_hover_exit:
    - action: visual_change_conditional
      if_state: normal
      to: normal
    - action: visual_change_conditional
      if_state: disabled
      to: disabled
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[MESSAGE] &cDevre disi!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aEtkin!'
```

### Tiklanabilir Metin Widget'i

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lUYARI
        &7Kapatmak icin tiklayin
    hover:
      type: text
      value: |-
        &c&lUYARI
        &e&oKapatmak icin tiklayin
  transform:
    position: {x: 0, y: -0.1, z: 0.1}
    size: {x: 0.4, y: 0.2, z: 0.01}
  text-size: 0.12
  shadow: true
  background-color: '#8B0000'
  collision:
    enabled: true
    size: {x: 0.15, y: 0.03, z: 0.01}
  events:
    on_cursor_hover:
    - action: visual_change
      to: hover
    on_cursor_hover_exit:
    - action: visual_change
      to: normal
    on_cursor_click:
    - action: hide_widget
      widget: warning_text
```

---

## En Iyi Uygulamalar

1. **Katmanlara gore duzenleyin (z)**:
   - z=0.05: Arka plan
   - z=0.1: Butonlar
   - z=0.15: Katmanlar
   - z=1.0: Imlec

2. **Widget'lara aciklayici isimler verin**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img` degil

3. **Her zaman fallback ekleyin**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "METIN"}
   ```

4. **Carpisma gorselden buyuk olsun**:
   - Gorsel: 0.02
   - Carpisma: 0.08x0.04 (tiklamasi daha kolay)

5. **Mumkun oldugunda Minecraft seslerini kullanin**:
   - Kaynak paketi gerekmiyor
   - Ekstra yapilandirma olmadan calisiyor

6. **Asamali olarak test edin**:
   - Bir seferde 1 widget ekleyin
   - `/cm reload` sik kullanin
   - Her etkilesimi test edin

---

Son guncelleme: 2026-02-02
