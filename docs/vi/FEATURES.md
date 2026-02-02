# Tinh Nang CraftMenu

## Muc Luc
1. [He Thong Am Thanh Thong Nhat](#he-thong-am-thanh-thong-nhat)
2. [Su Kien Widget](#su-kien-widget)
3. [He Thong Trang Thai](#he-thong-trang-thai)
4. [Phan Hoi Ranh Gioi Tuy Chinh](#phan-hoi-ranh-gioi-tuy-chinh)
5. [Lenh Dac Biet](#lenh-dac-biet)

---

## He Thong Am Thanh Thong Nhat

Tat ca cac truong am thanh ho tro hai loai:

### Am Thanh Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Am thanh Minecraft goc
  volume: 0.8
  pitch: 1.0
```

**Vi du am thanh Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Am Thanh Tuy Chinh (Resource Pack)

```yaml
- action: sound
  file: "template/click.ogg"         # Tu dong phan giai
  # HOAC
  file: "craftmenu:template/click"   # Chi dinh ro namespace
  volume: 1.0
  pitch: 1.2
```

**Cac buoc cho am thanh tuy chinh**:
1. Them `.ogg` tai `/plugins/CraftMenu/sounds/template/click.ogg`
2. Chay `/cm zip`
3. Resource pack se tu dong bao gom am thanh

---

## Su Kien Widget

### on_menu_open

Kich hoat tu dong khi menu mo. Huu ich cho nhac nen.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Khi con tro di vao vung widget.

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

Khi con tro roi khoi vung widget.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Khi widget duoc click.

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

### on_click_any (Chi con tro)

Kich hoat khi BAT KY click nao, ke ca ngoai widget.

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

## He Thong Trang Thai

Cho phep widget co nhieu hanh vi (vd: nut bat/tat).

### Trang Thai Mac Dinh

- `normal`: Trang thai ban dau
- `hover`: Chuot tren widget
- `pressed`: Widget duoc click
- `disabled`: Widget bi vo hieu hoa
- `fallback`: Khi visual khong tai duoc

### Trang Thai Tuy Chinh

Ban co the tao trang thai rieng:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Am thanh bat
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Am thanh tat (trang thai tuy chinh)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover khi tat (trang thai tuy chinh)
      type: image
      value: template/sound-mute-hover.png
```

### Hanh Dong Trang Thai

#### toggle_state

Chuyen doi giua danh sach trang thai.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Xoay vong giua cac trang thai
```

#### visual_change_conditional

Thay doi visual chi khi trang thai hien tai la X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Neu trang thai la "normal"
  to: hover                      # Chuyen sang "hover"
- action: visual_change_conditional
  if_state: disabled            # Neu trang thai la "disabled"
  to: disabled_hover             # Chuyen sang "disabled_hover"
```

#### command_conditional

Thuc thi lenh chi khi trang thai la X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Neu chuyen sang "disabled"
  command: '[STOP_MUSIC]'        # Dung nhac
- action: command_conditional
  if_state: normal              # Neu chuyen sang "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Phat nhac
```

### Vi Du Day Du: Nut Chuyen Doi

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

## Phan Hoi Ranh Gioi Tuy Chinh

Tuy chinh phan hoi khi con tro dat gioi han di chuyen.

### Cau Hinh

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Am thanh khi dat gioi han
      volume: 0.5                          # Am luong 0.0-1.0
      pitch: 0.6                           # Cao do 0.5-2.0
      message: "&c&lDat gioi han con tro!" # Thong bao tren action bar
```

### Am Thanh Khuyen Nghi

- `minecraft:ui.button.click` - Click nhe
- `minecraft:block.note_block.bass` - Am tram
- `craftmenu:template/warning.ogg` - Am thanh tuy chinh

---

## Lenh Dac Biet

Su dung voi `action: command`.

### [TELEPORT]

Dich chuyen nguoi choi.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    world  x   y   z yaw pitch
```

### [MESSAGE]

Gui tin nhan cho nguoi choi.

```yaml
- action: command
  command: '[MESSAGE] &aChao mung den voi tro choi!'
  delay: 500  # Doi 500ms truoc khi gui
```

### [CLOSE]

Dong menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Dong sau 1 giay
```

### [PLAY_MUSIC]

Phat nhac cho widget (chi mot am thanh moi widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Ho tro namespace**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Dung am thanh dang phat cho widget nay.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Quan trong**: `[STOP_MUSIC]` chi dung am thanh cua widget nay, khong anh huong den widget khac hoac am thanh toan cuc.

**Ghi chu ky thuat**: Lenh su dung `player.stopAllSounds()` noi bo vi `player.stopSound(key)` khong hoat dong voi am thanh resource pack tuy chinh. Tuy nhien, no chi duoc kich hoat boi widget cu the.

### [OPEN_URL]

Mo URL trong trinh duyet nguoi choi (yeu cau xac nhan).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/your-server'
```

---

## Tu Dong Dung Am Thanh

**Khi menu dong**, TAT CA am thanh se tu dong dung cho nguoi choi. Bao gom:

- Nhac nen phat qua `[PLAY_MUSIC]`
- Am thanh hover/click widget
- Bat ky am thanh nao dang hoat dong tai thoi diem dong

### Cach Hoat Dong

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← Goi TRUOC close()
}
menuInstance.close();
```

### Gioi Han Ky Thuat

He thong su dung `player.stopAllSounds()` vi:
- `player.stopSound(key)` **khong hoat dong** voi am thanh resource pack tuy chinh
- `player.stopSound(key, category)` **cung khong hoat dong**
- `stopAllSounds()` la **giai phap duy nhat dang tin cay**

Dieu nay co nghia **tat ca** am thanh cua nguoi choi se dung khi dong menu, khong chi am thanh menu. Day la gioi han cua Minecraft/Bukkit, khong phai CraftMenu.

### Thay The: Dieu Khien Thu Cong

Neu ban khong muon dung am thanh tu dong, su dung nut chuyen doi trong menu:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Dung nhac thu cong
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Hanh Dong Visual

### visual_change

Thay doi trang thai visual vo dieu kien.

```yaml
- action: visual_change
  to: hover
```

### scale

Hoat hoa scale widget tam thoi.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% kich thuoc
  duration: 300                     # Thoi luong tinh bang ms
```

### scale_reset

Dat lai scale ve kich thuoc goc.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Xoa widget hoan toan (visual, collision, am thanh).

```yaml
- action: hide_widget
  widget: fov_warning  # Ten widget can an
```

**Ghi chu**: Widget bi an khong the khoi phuc neu khong mo lai menu.

---

## Vi Du Day Du: Menu Voi Tat Ca Tinh Nang

```yaml
menu:
  name: complete_example
  title: '&b&lVi Du Menu Day Du'
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
      message: "&e⚠ &cCon tro dat gioi han!"

  widgets:
    # Nut voi nhac nen
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

    # Nut hanh dong voi phan hoi day du
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
          command: '[MESSAGE] &aDang bat dau tro choi...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Con tro voi phan hoi am thanh
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

Cap nhat lan cuoi: 2026-02-02
Phien ban Plugin: 2.0
