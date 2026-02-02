# CraftMenu Ozellikleri

## Icerik

1. [Birlesik Ses Sistemi](#birlesik-ses-sistemi)
2. [Widget Olaylari](#widget-olaylari)
3. [Durum Sistemi](#durum-sistemi)
4. [Yapilandirabilir Sinir Geri Bildirimi](#yapilandirabilir-sinir-geri-bildirimi)
5. [Ozel Komutlar](#ozel-komutlar)

---

## Birlesik Ses Sistemi

Tum ses alanlari artik iki tipi destekliyor:

### Minecraft Sesleri

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Yerel Minecraft sesi
  volume: 0.8
  pitch: 1.0
```

**Minecraft ses ornekleri**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Ozel Sesler (Kaynak Paketi)

```yaml
- action: sound
  file: "template/click.ogg"         # Otomatik cozumlenir
  # VEYA
  file: "craftmenu:template/click"   # Ad alaniyla acikca
  volume: 1.0
  pitch: 1.2
```

**Ozel sesler icin adimlar**:
1. `.ogg` dosyasini `/plugins/CraftMenu/sounds/template/click.ogg` konumuna ekleyin
2. `/cm zip` komutunu calistirin
3. Kaynak paketi sesi otomatik olarak icerir

---

## Widget Olaylari

### on_menu_open

Menu acildiginda otomatik olarak tetiklenir. Arka plan muzigi icin kullanislidir.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Imlec widget alanina girdiginde.

```yaml
events:
  on_cursor_hover:
  - action: visual_change
    to: hover
  - action: sound
    file: "template/hover.ogg"
  - action: scale
    scale: {x: 1.1, y: 1.1, z: 1.1}
    duration: 200
```

### on_cursor_hover_exit

Imlec widget alanindan ciktiginda.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Widget tiklandiginda.

```yaml
events:
  on_cursor_click:
  - action: visual_change
    to: pressed
  - action: sound
    file: "template/click.ogg"
  - action: command
    command: '[TELEPORT] world 100 64 100 0 0'
```

### on_click_any (Yalnizca Imlec)

Widget'lar disinda bile HER tiklamada tetiklenir.

```yaml
cursor:
  events:
    on_click_any:
    - action: sound
      file: "minecraft:ui.button.click"
      volume: 0.5
      pitch: 1.0
```

---

## Durum Sistemi

Birden fazla davranisa sahip widget'lara izin verir (orn. acik/kapali gecis butonu).

### Varsayilan Durumlar

- `normal`: Baslangic durumu
- `hover`: Fare widget uzerinde
- `pressed`: Widget tiklandi
- `disabled`: Widget devre disi
- `fallback`: Gorsel yuklenemediginde

### Ozel Durumlar

Kendi durumlarinizi olusturabilirsiniz:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Ses acik
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Ses kapali (ozel durum)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Kapali durumda hover (ozel durum)
      type: image
      value: template/sound-mute-hover.png
```

### Durum Eylemleri

#### toggle_state

Bir durum listesi arasinda gecis yapar.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Durumlar arasinda doner
```

#### visual_change_conditional

Yalnizca mevcut durum X ise gorseli degistirir.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Durum "normal" ise
  to: hover                      # "hover"a degistir
- action: visual_change_conditional
  if_state: disabled            # Durum "disabled" ise
  to: disabled_hover             # "disabled_hover"a degistir
```

#### command_conditional

Yalnizca durum X ise komutu calistirir.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # "disabled" olduysa
  command: '[STOP_MUSIC]'        # Muzigi durdur
- action: command_conditional
  if_state: normal              # "normal" olduysa
  command: '[PLAY_MUSIC] template/background.ogg'  # Muzik cal
```

### Tam Ornek: Gecis Butonu

```yaml
sound_toggle:
  type: BUTTON
  initial-state: normal

  visual:
    normal:
      type: image
      value: mymenu/sound-on.png
    hover:
      type: image
      value: mymenu/sound-on-hover.png
    disabled:
      type: image
      value: mymenu/sound-off.png
    disabled_hover:
      type: image
      value: mymenu/sound-off-hover.png

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
      command: '[STOP_MUSIC]'
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] mymenu/background.ogg'
```

---

## Yapilandirabilir Sinir Geri Bildirimi

Imlec hareket sinarlarina ulastiginda geri bildirimi ozellestirin.

### Yapilandirma

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Sinira ulastiginda ses
      volume: 0.5                          # Ses seviyesi 0.0-1.0
      pitch: 0.6                           # Perde 0.5-2.0
      message: "&c&lImlec siniri asildi!"  # Eylem cubugunda mesaj
```

### Onerilen Sesler

- `minecraft:ui.button.click` - Yumusak tiklama
- `minecraft:block.note_block.bass` - Dusuk ton
- `craftmenu:template/warning.ogg` - Ozel ses

---

## Ozel Komutlar

`action: command` ile kullanilir.

### [TELEPORT]

Oyuncuyu isinlar.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

Oyuncuya mesaj gonderir.

```yaml
- action: command
  command: '[MESSAGE] &aOyuna hos geldiniz!'
  delay: 500  # Gondermeden once 500ms bekle
```

### [CLOSE]

Menuyu kapatir.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # 1 saniye sonra kapat
```

### [PLAY_MUSIC]

Widget icin muzik calar (widget basina yalnizca bir ses).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Ad alanlarini destekler**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Bu widget icin calisan sesi durdurur.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Onemli**: `[STOP_MUSIC]` yalnizca bu widget'in sesini durdurur, diger widget'lari veya genel sesleri etkilemez.

**Teknik Not**: Komut dahili olarak `player.stopAllSounds()` kullanir cunku `player.stopSound(key)` ozel kaynak paketi sesleriyle calismaz. Ancak yalnizca belirli widget tarafindan tetiklenir.

### [OPEN_URL]

Oyuncunun tarayicisinda URL acar (onay gerektirir).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/sunucunuz'
```

---

## Otomatik Ses Durdurma

**Menu kapandiginda**, oyuncu icin TUM sesler otomatik olarak durdurulur. Bu su sesleri icerir:

- `[PLAY_MUSIC]` ile calnan arka plan muzigi
- Widget hover/tiklama sesleri
- Kapanma aninda aktif olan herhangi bir ses

### Nasil Calisir

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← close() oncesi cagirilir
}
menuInstance.close();
```

### Teknik Sinir

Sistem `player.stopAllSounds()` kullanir cunku:
- `player.stopSound(key)` ozel kaynak paketi sesleriyle **calismaz**
- `player.stopSound(key, category)` de **calismaz**
- `stopAllSounds()` **tek guvenilir cozumdur**

Bu, menu kapatildiginda yalnizca menu sesleri degil **tum** oyuncu seslerinin durdurulacagi anlamina gelir. Bu CraftMenu degil, Minecraft/Bukkit sinirlamasidir.

### Alternatif: Manuel Kontrol

Sesleri otomatik olarak durdurmamak isterseniz, menude bir gecis butonu kullanin:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Muzigi manuel olarak durdur
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Gorsel Eylemler

### visual_change

Gorsel durumu kosulsuz olarak degistirir.

```yaml
- action: visual_change
  to: hover
```

### scale

Widget olcegini gecici olarak animasyonlu degistirir.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Boyutun %120'si
  duration: 300                     # ms cinsinden sure
```

### scale_reset

Olcegi orijinal boyuta sifirlar.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Widget'i tamamen kaldirir (gorsel, carpisma, sesler).

```yaml
- action: hide_widget
  widget: fov_warning  # Gizlenecek widget adi
```

**Not**: Gizlenen widget, menu yeniden acilmadan kurtarilamaz.

---

## Tam Ornek: Tum Ozelliklerle Menu

```yaml
menu:
  name: complete_example
  title: '&b&lTam Menu Ornegi'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35
    boundary-feedback:
      sound: "minecraft:block.note_block.bass"
      volume: 0.6
      pitch: 0.8
      message: "&e⚠ &cImlec kenara ulasti!"

  widgets:
    # Arka plan muzikli buton
    music_button:
      type: BUTTON
      initial-state: normal
      visual:
        normal: {type: image, value: menu/music-on.png}
        disabled: {type: image, value: menu/music-off.png}
      transform:
        position: {x: 0.2, y: 0.1, z: 0.1}
        size: {x: 0.02, y: 0.02, z: 0.02}
      collision:
        enabled: true
        size: {x: 0.08, y: 0.03, z: 0.02}
      events:
        on_menu_open:
        - action: command
          command: '[PLAY_MUSIC] menu/background.ogg'
        on_cursor_click:
        - action: toggle_state
          states: [normal, disabled]
        - action: command_conditional
          if_state: disabled
          command: '[STOP_MUSIC]'
        - action: command_conditional
          if_state: normal
          command: '[PLAY_MUSIC] menu/background.ogg'

    # Tam geri bildirimli eylem butonu
    play_button:
      type: BUTTON
      visual:
        normal: {type: image, value: menu/play.png}
        hover: {type: image, value: menu/play-hover.png}
      transform:
        position: {x: 0, y: 0, z: 0.1}
        size: {x: 0.025, y: 0.025, z: 0.025}
      events:
        on_cursor_hover:
        - action: visual_change
          to: hover
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.5
          pitch: 1.2
        - action: scale
          scale: {x: 1.1, y: 1.1, z: 1.1}
          duration: 150
        on_cursor_hover_exit:
        - action: visual_change
          to: normal
        - action: scale_reset
          duration: 150
        on_cursor_click:
        - action: sound
          file: "menu/select.ogg"
          volume: 0.8
          pitch: 1.0
        - action: command
          command: '[MESSAGE] &aOyun basliyor...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Ses geri bildirimli imlec
    cursor:
      type: CURSOR
      visual:
        normal: {type: text, value: '§f→'}
      transform:
        position: {x: 0, y: 0, z: 1.0}
        size: {x: 0.005, y: 0.005, z: 0.005}
      collision-area:
        enabled: true
        size: {x: 0.01, y: 0.01, z: 0.01}
      events:
        on_click_any:
        - action: sound
          file: "minecraft:ui.button.click"
          volume: 0.4
          pitch: 1.0
```

---

Son guncelleme: 2026-02-02
Eklenti Surumu: 2.0
