# Olay Sistemi

CraftMenu widget'larla kullanici etkilesimlerini yonetmek icin bir olay sistemi kullanir.

## Olay Turleri

| Olay | Tetikleyici | Nerede Kullanilabilir |
|------|-------------|----------------------|
| `on_menu_open` | Menu acilir | Tum widget'lar |
| `on_cursor_hover` | Imlec widget'a girer | IMAGE, TEXT |
| `on_cursor_hover_exit` | Imlec widget'tan cikar | IMAGE, TEXT |
| `on_cursor_click` | Widget tiklanir | IMAGE, TEXT |
| `on_click_any` | Herhangi bir tiklama | Sadece CURSOR |

## Temel Olay Yapisi

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal: {type: image, value: template/button.png}
    events:
      on_cursor_hover:
        - action: sound
          file: minecraft:ui.button.click
          volume: 0.5
          pitch: 1.2
      on_cursor_click:
        - action: command
          command: "[MESSAGE] &aTikladin!"
```

## Eylem Turleri

### Sound Eylemi

Ses efekti calar:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Minecraft sesi
  volume: 1.0                       # 0.0 ile 1.0 arasi
  pitch: 1.0                        # 0.5 ile 2.0 arasi
```

Ozel sesler:
```yaml
- action: sound
  file: template/click.ogg         # Ozel ses dosyasi
```

### Animation Eylemi

Animasyon tetikler:

```yaml
- action: animation
  effect: scale                    # Animasyon turu
  duration: 200                    # Milisaniye olarak sure
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Hedef olcek
  easing_style: ease_out           # Easing fonksiyonu
  priority: false                  # Diger eylemleri engellesin mi?
```

### Command Eylemi

Komut calistirir:

```yaml
- action: command
  command: "[MESSAGE] Merhaba!"    # Ozel komut
  delay: 0                         # Milisaniye olarak gecikme
```

**Ozel Komutlar:**
- `[MESSAGE] metin` - Oyuncuya mesaj gonder
- `[TELEPORT] dunya x y z yaw pitch` - Oyuncuyu isinla
- `[CLOSE]` - Menuyu kapat
- `[PLAY_MUSIC] path/dosya.ogg` - Arka plan muzigi cal
- `[STOP_MUSIC]` - Muzigi durdur
- `[OPEN_URL] https://...` - URL ac (tiklanabilir)
- `[PLAYER] /komut` - Komutu oyuncu olarak calistir
- `[CONSOLE] /komut` - Komutu konsol olarak calistir

### State Eylemleri

Widget durumlarini degistirir:

```yaml
# Durumlar arasi gecis yap
- action: toggle_state
  states: [normal, disabled]

# Belirli durumu ayarla
- action: set_state
  state: disabled
```

### Visual Change Eylemi

Widget gorunumunu degistirir:

```yaml
- action: visual_change
  to: hover

# Kosullu degisiklik
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Hide Widget Eylemi

Widget'i gorunumden kaldirir:

```yaml
- action: hide_widget
  widget: my_widget_name
```

### Stop Animation Eylemi

Calisan animasyonlari durdurur:

```yaml
- action: stop_animation
  animation_type: rotate          # Durdurulacak animasyon
```

## Olay Calistirma Sirasi

Eylemler listelendigi sirada calisir. En iyi sonuclar icin:

1. Ses efektleri (aninda geri bildirim)
2. Durum degisiklikleri
3. Komutlar
4. Animasyonlar (gecikmeleri olabilir)

## Oncelikli Animasyonlar

Animasyon tamamlanana kadar diger eylemleri engellemek icin `priority: true` kullanin:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Sonraki eylemleri engeller
    - action: command
      command: "[MESSAGE] Tamamlandi!"  # Animasyondan sonra calisir
```
