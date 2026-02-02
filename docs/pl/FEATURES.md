# Funkcje CraftMenu

## Spis Tresci
1. [Zunifikowany System Dzwiekow](#zunifikowany-system-dzwiekow)
2. [Zdarzenia Widgetow](#zdarzenia-widgetow)
3. [System Stanow](#system-stanow)
4. [Konfigurowalny Feedback Granic](#konfigurowalny-feedback-granic)
5. [Specjalne Komendy](#specjalne-komendy)

---

## Zunifikowany System Dzwiekow

Wszystkie pola dzwiekow teraz obsluguja dwa typy:

### Dzwieki Minecraft

```yaml
- action: sound
  file: "minecraft:ui.button.click"  # Natywny dzwiek Minecraft
  volume: 0.8
  pitch: 1.0
```

**Przyklady dzwiekow Minecraft**:
- `minecraft:ui.button.click`
- `minecraft:block.note_block.pling`
- `minecraft:entity.experience_orb.pickup`
- `minecraft:block.anvil.land`

### Wlasne Dzwieki (Paczka Zasobow)

```yaml
- action: sound
  file: "template/click.ogg"         # Automatycznie rozwiazywane
  # LUB
  file: "craftmenu:template/click"   # Jawnie z przestrzenia nazw
  volume: 1.0
  pitch: 1.2
```

**Kroki dla wlasnych dzwiekow**:
1. Dodaj `.ogg` w `/plugins/CraftMenu/sounds/template/click.ogg`
2. Wykonaj `/cm zip`
3. Paczka zasobow automatycznie zawiera dzwiek

---

## Zdarzenia Widgetow

### on_menu_open

Uruchamia sie automatycznie gdy menu sie otwiera. Przydatne dla muzyki w tle.

```yaml
sound_button:
  events:
    on_menu_open:
    - action: command
      command: '[PLAY_MUSIC] template/background.ogg'
```

### on_cursor_hover

Gdy kursor wchodzi w obszar widgetu.

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

Gdy kursor opuszcza obszar widgetu.

```yaml
events:
  on_cursor_hover_exit:
  - action: visual_change
    to: normal
  - action: scale_reset
    duration: 150
```

### on_cursor_click

Gdy widget zostaje klikniety.

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

### on_click_any (Tylko kursor)

Uruchamia sie na KAZDE klikniecie, nawet poza widgetami.

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

## System Stanow

Pozwala widgetom na wiele zachowan (np. przelacznik wlaczony/wylaczony).

### Domyslne Stany

- `normal`: Stan poczatkowy
- `hover`: Myszka nad widgetem
- `pressed`: Widget klikniety
- `disabled`: Widget wylaczony
- `fallback`: Gdy visual nie zaladuje

### Wlasne Stany

Mozesz tworzyc wlasne stany:

```yaml
sound_button:
  initial-state: normal
  visual:
    normal:              # Dzwiek wlaczony
      type: image
      value: template/sound.png
    hover:
      type: image
      value: template/sound-hover.png
    disabled:            # Dzwiek wylaczony (wlasny stan)
      type: image
      value: template/sound-mute.png
    disabled_hover:      # Hover gdy wylaczony (wlasny stan)
      type: image
      value: template/sound-mute-hover.png
```

### Akcje Stanow

#### toggle_state

Przelacza miedzy lista stanow.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]  # Cyklicznie miedzy stanami
```

#### visual_change_conditional

Zmienia visual tylko jesli aktualny stan to X.

```yaml
on_cursor_hover:
- action: visual_change_conditional
  if_state: normal              # Jesli stan to "normal"
  to: hover                      # Zmien na "hover"
- action: visual_change_conditional
  if_state: disabled            # Jesli stan to "disabled"
  to: disabled_hover             # Zmien na "disabled_hover"
```

#### command_conditional

Wykonuje komende tylko jesli stan to X.

```yaml
on_cursor_click:
- action: toggle_state
  states: [normal, disabled]
- action: command_conditional
  if_state: disabled            # Jesli stalo sie "disabled"
  command: '[STOP_MUSIC]'        # Zatrzymaj muzyke
- action: command_conditional
  if_state: normal              # Jesli stalo sie "normal"
  command: '[PLAY_MUSIC] template/background.ogg'  # Odtworz muzyke
```

### Kompletny Przyklad: Przycisk Przelacznika

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

## Konfigurowalny Feedback Granic

Dostosowuje feedback gdy kursor osiaga granice ruchu.

### Konfiguracja

```yaml
menu:
  settings:
    boundary-feedback:
      sound: "minecraft:ui.button.click"  # Dzwiek przy osiagnieciu granicy
      volume: 0.5                          # Glosnosc 0.0-1.0
      pitch: 0.6                           # Wysokosc 0.5-2.0
      message: "&c&lOsiagnieto granice kursora!" # Wiadomosc w action bar
```

### Zalecane Dzwieki

- `minecraft:ui.button.click` - Lagodne klikniecie
- `minecraft:block.note_block.bass` - Niski ton
- `craftmenu:template/warning.ogg` - Wlasny dzwiek

---

## Specjalne Komendy

Uzywane z `action: command`.

### [TELEPORT]

Teleportuje gracza.

```yaml
- action: command
  command: '[TELEPORT] world 100 64 100 0 0'
  #                    swiat  x   y   z yaw pitch
```

### [MESSAGE]

Wysyla wiadomosc do gracza.

```yaml
- action: command
  command: '[MESSAGE] &aWitaj w grze!'
  delay: 500  # Czekaj 500ms przed wyslaniem
```

### [CLOSE]

Zamyka menu.

```yaml
- action: command
  command: '[CLOSE]'
  delay: 1000  # Zamknij po 1 sekundzie
```

### [PLAY_MUSIC]

Odtwarza muzyke dla widgetu (tylko jeden dzwiek na widget).

```yaml
- action: command
  command: '[PLAY_MUSIC] template/background.ogg'
```

**Obsluguje przestrzenie nazw**:
- `[PLAY_MUSIC] template/music.ogg`
- `[PLAY_MUSIC] craftmenu:template/music`
- `[PLAY_MUSIC] minecraft:music.menu`

### [STOP_MUSIC]

Zatrzymuje aktualnie odtwarzany dzwiek dla tego widgetu.

```yaml
- action: command
  command: '[STOP_MUSIC]'
```

**Wazne**: `[STOP_MUSIC]` zatrzymuje tylko dzwiek tego widgetu, nie wplywa na inne widgety ani globalne dzwieki.

**Uwaga techniczna**: Komenda uzywa wewnetrznie `player.stopAllSounds()` poniewaz `player.stopSound(key)` nie dziala z wlasnymi dzwiekami paczki zasobow. Jednak jest wyzwalana tylko przez konkretny widget.

### [OPEN_URL]

Otwiera URL w przegladarce gracza (wymaga potwierdzenia).

```yaml
- action: command
  command: '[OPEN_URL] https://discord.gg/twoj-serwer'
```

---

## Automatyczne Zatrzymywanie Dzwiekow

**Gdy menu sie zamyka**, WSZYSTKIE dzwieki sa automatycznie zatrzymywane dla gracza. Obejmuje to:

- Muzyke w tle odtwarzana przez `[PLAY_MUSIC]`
- Dzwieki hover/click widgetow
- Kazdy dzwiek aktywny w momencie zamykania

### Jak To Dziala

```java
// MenuManager.closeSimpleMenu()
if (player != null && player.isOnline()) {
    player.stopAllSounds();  // ← Wywolywane PRZED close()
}
menuInstance.close();
```

### Ograniczenie Techniczne

System uzywa `player.stopAllSounds()` poniewaz:
- `player.stopSound(key)` **nie dziala** z wlasnymi dzwiekami paczki zasobow
- `player.stopSound(key, category)` **tez nie dziala**
- `stopAllSounds()` to **jedyne niezawodne rozwiazanie**

To oznacza ze **wszystkie** dzwieki gracza sa zatrzymywane przy zamykaniu menu, nie tylko dzwieki menu. To ograniczenie Minecraft/Bukkit, nie CraftMenu.

### Alternatywa: Reczna Kontrola

Jesli wolisz nie zatrzymywac dzwiekow automatycznie, uzyj przycisku przelacznika w menu:

```yaml
sound_button:
  events:
    on_cursor_click:
    - action: toggle_state
      states: [normal, disabled]
    - action: command_conditional
      if_state: disabled
      command: '[STOP_MUSIC]'  # Zatrzymaj muzyke recznie
    - action: command_conditional
      if_state: normal
      command: '[PLAY_MUSIC] template/bg.ogg'
```

---

## Akcje Wizualne

### visual_change

Zmienia stan wizualny bezwarunkowo.

```yaml
- action: visual_change
  to: hover
```

### scale

Animuje skale widgetu tymczasowo.

```yaml
- action: scale
  scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% rozmiaru
  duration: 300                     # Czas trwania w ms
```

### scale_reset

Resetuje skale do oryginalnego rozmiaru.

```yaml
- action: scale_reset
  duration: 200
```

### hide_widget

Usuwa widget calkowicie (visual, kolizja, dzwieki).

```yaml
- action: hide_widget
  widget: fov_warning  # Nazwa widgetu do ukrycia
```

**Uwaga**: Ukryty widget nie moze byc przywrocony bez ponownego otwarcia menu.

---

## Kompletny Przyklad: Menu ze Wszystkimi Funkcjami

```yaml
menu:
  name: complete_example
  title: '&b&lPrzyklad Kompletnego Menu'
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
      message: "&e⚠ &cKursor osiagnal krawedz!"

  widgets:
    # Przycisk z muzyka w tle
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

    # Przycisk akcji z kompletnym feedbackiem
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
          command: '[MESSAGE] &aRozpoczynamie gry...'
        - action: command
          command: '[TELEPORT] world 200 64 200 0 0'
          delay: 1000
        - action: command
          command: '[CLOSE]'
          delay: 1200

    # Kursor z feedbackiem dzwiekowym
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

Ostatnia aktualizacja: 2026-02-02
Wersja Pluginu: 2.0
