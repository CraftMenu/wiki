# Tworzenie Menu w CraftMenu

## Spis Tresci
1. [Tworzenie przez Komende](#tworzenie-przez-komende)
2. [Struktura YAML](#struktura-yaml)
3. [Dostepne Widgety](#dostepne-widgety)
4. [Transform (Pozycjonowanie)](#transform-pozycjonowanie)
5. [Kolizja](#kolizja)
6. [Zdarzenia i Akcje](#zdarzenia-i-akcje)
7. [Praktyczne Przyklady](#praktyczne-przyklady)

---

## Tworzenie przez Komende

### Zalecana Metoda

1. **Wejdz do gry** i przejdz do lokalizacji gdzie chcesz menu
2. **Spójrz w kierunku** w którym gracze powinni patrzec przy otwieraniu menu
3. **Wykonaj**:
   ```
   /cm create nazwa_menu
   ```

Menu zostanie utworzone z Twoja aktualna lokalizacja i rotacja!

### Wygenerowana Struktura

```
/plugins/CraftMenu/menus/nazwa_menu.yml
```

**Domyslny szablon zawiera**:
- Widget ostrzezenia FOV (mozna usunac)
- Skonfigurowany kursor
- Zoptymalizowane ustawienia
- Feedback granic
- **Kursor domyslnie uzywa TEXT** - zmien na IMAGE po dodaniu tekstur

---

## Struktura YAML

### Glowne Sekcje

```yaml
menu:
  name: String              # Nazwa menu
  title: String             # Tytul (obsluguje &kody)
  main: boolean             # Glowne menu? (przyszlosc)
  location:                 # Lokalizacja w swiecie
    world: String
    coordinates: {x, y, z}
    rotation: {yaw, pitch}
  settings:                 # Ustawienia
    # ... (patrz nizej)
  widgets:                  # Widgety menu
    nazwa_widgetu:
      # ... (patrz nizej)
```

### Szczegolowe Ustawienia

```yaml
settings:
  # Audio
  background-music: "template/background.ogg"  # Muzyka w tle (opcjonalnie)

  # Ruch kursora
  cursor-sensitivity: 1.0          # Czulosc (0.1 - 5.0)
  max-yaw-offset: 61.0             # Limit horyzontalny w stopniach
  max-pitch-offset: 36.0           # Limit wertykalny w stopniach
  mount-time: 100                  # Czas montowania w tickach

  # Pozycjonowanie menu
  distance-multiplier: -0.01       # Mnoznik odleglosci
  menu-distance: 0.3               # Odleglosc menu

  # Wydajnosc
  debug-mode: false                # Tryb debug
  update-rate: 1                   # Czestotliwosc aktualizacji
  collision-detection: true        # Aktywne wykrywanie kolizji

  # Kamera
  camera-lock-enabled: true        # Zablokuj kamere
  camera-lock-strength: 0.4        # Sila blokady (0.0-1.0)

  # Feedback granic
  boundary-feedback:
    sound: "minecraft:ui.button.click"
    volume: 0.5
    pitch: 0.6
    message: "&c&lOsiagnieto granice kursora!"
```

---

## Dostepne Widgety

### BUTTON

Interaktywny przycisk z hover i click.

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
      value: "▶ GRAJ"
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

Statyczny obraz (moze miec hover).

```yaml
logo:
  type: IMAGE
  visual:
    normal:
      type: image
      value: mymenu/logo.png
    hover:
      type: image
      value: mymenu/logo-glow.png  # Opcjonalnie
  transform:
    position: {x: 0, y: 0.2, z: 0.1}
    size: {x: 0.04, y: 0.04, z: 0.04}
  collision:
    enabled: false  # Brak interakcji
```

### TEXT

Sformatowany tekst.

```yaml
title_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &b&lWITAJ
        &7na serwerze
  transform:
    position: {x: 0, y: 0.15, z: 0.1}
    size: {x: 0.5, y: 0.2, z: 0.01}
  text-size: 0.15           # Rozmiar tekstu
  shadow: true              # Cien
  background-color: '#000000'  # Kolor tla (hex)
```

### CURSOR

Kursor kontrolowany myszka (**tylko 1 na menu**).

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
    position: {x: 0, y: 0, z: 1.0}  # wysokie z = z przodu
    size: {x: 0.005, y: 0.005, z: 0.005}

  # Ustawienia kursora
  cursor-settings:
    sensitivity: 0.02
    smoothing: true
    clamp-boundaries: true

  # Animacja
  animation:
    type: PULSE               # PULSE, ROTATE, FLOAT, COMBINED
    duration: 2000            # ms
    intensity: 0.15
    pulse: true
    rotate: false
    float: true

  # Obszar kolizji
  collision-area:
    enabled: true
    size: {x: 0.01, y: 0.01, z: 0.01}

  events:
    on_click_any: [...]
```

---

## Transform (Pozycjonowanie)

### Pozycja

Pozycja w przestrzeni 3D wzgledem punktu spawn menu.

```yaml
transform:
  position: {x: 0.0, y: 0.0, z: 0.1}
```

- **x**: Lewo (-) / Prawo (+)
- **y**: Dol (-) / Gora (+)
- **z**: Daleko (-) / Blisko (+)

**Wskazowka**: z=0.1 jest dobre dla tla, z=1.0 dla kursora (zawsze widoczny)

### Rozmiar

Rozmiar widgetu.

```yaml
transform:
  size: {x: 0.02, y: 0.02, z: 0.02}
```

**Typowe skale**:
- Maly przycisk: `0.015`
- Sredni przycisk: `0.02`
- Duzy przycisk: `0.03`
- Logo: `0.04-0.05`
- Kursor: `0.005`

### Rotacja (Opcjonalnie)

Rotacja w stopniach.

```yaml
transform:
  rotation: {pitch: 0, yaw: 0, roll: 0}
```

**Uwaga**: Zwykle niepotrzebne (ViewFrame juz dostosowuje)

---

## Kolizja

### Podstawowa Konfiguracja

```yaml
collision:
  enabled: true                     # Wlacz kolizje
  position: {x: 0, y: 0, z: 0.1}   # Opcjonalnie: nadpisanie pozycji
  size: {x: 0.08, y: 0.04, z: 0.02} # Rozmiar box'a
  rotation: {pitch: 0, yaw: 0, roll: 0}  # Opcjonalnie
```

### Wizualny Debug

```yaml
collision:
  debug:
    enabled: true     # Pokaz czasteczki
    color: GREEN      # RED, BLUE, YELLOW, PURPLE, itp.
    size: 0.005       # Rozmiar czasteczek
```

**Wlacz globalnie**:
```
/cm debug particles toggle
/cm debug particles collision
```

### Wskazowki dot. Kolizji

1. **Rozmiar wizualny ≠ rozmiar kolizji**
   - Kolizja moze byc wieksza dla latwiejszego klikania
   - Przyklad: visual 0.02, kolizja 0.08x0.04

2. **Pozycja kolizji**
   - Jesli nie okreslona, uzywa transform.position
   - Okresl jesli chcesz inny obszar

3. **Collision-area (Kursor)**
   - Kursor uzywa `collision-area` zamiast `collision`
   - Powod: Kursor ma specjalne zachowanie

---

## Zdarzenia i Akcje

### Dostepne Zdarzenia

| Zdarzenie | Kiedy sie uruchamia | Widgety |
|-----------|---------------------|---------|
| `on_menu_open` | Menu sie otwiera | Wszystkie |
| `on_cursor_hover` | Kursor wchodzi | Button, Image, Text |
| `on_cursor_hover_exit` | Kursor wychodzi | Button, Image, Text |
| `on_cursor_click` | Widget klikniety | Button |
| `on_click_any` | Kazde klikniecie | Kursor |

### Dostepne Akcje

#### visual_change

```yaml
- action: visual_change
  to: hover  # normal, hover, pressed, disabled, itp.
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
  file: "minecraft:ui.button.click"  # LUB "mymenu/click.ogg"
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
  delay: 1000  # Opcjonalnie, w ms
```

**Specjalne komendy**:
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] tekst z &kolorami`
- `[CLOSE]`
- `[PLAY_MUSIC] sciezka/dzwiek.ogg`
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
  widget: nazwa_widgetu
```

---

## Praktyczne Przyklady

### Prosty Przycisk z Dzwiekiem

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
      command: '[MESSAGE] &aKlikniety przycisk!'
```

### Przycisk z Teleportacja

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
      command: '[MESSAGE] &eTeleportowanie...'
    - action: command
      command: '[TELEPORT] world 0 64 0 0 0'
      delay: 1000
    - action: command
      command: '[CLOSE]'
      delay: 1200
```

### Przycisk Przelacznika (Wl/Wyl)

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
      command: '[MESSAGE] &cWylaczono!'
    - action: command_conditional
      if_state: normal
      command: '[MESSAGE] &aWlaczono!'
```

### Klikalny Widget Tekstowy

```yaml
warning_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: |-
        &c&lOSTRZEZENIE
        &7Kliknij aby zamknac
    hover:
      type: text
      value: |-
        &c&lOSTRZEZENIE
        &e&oKliknij aby zamknac
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

## Najlepsze Praktyki

1. **Organizuj warstwami (z)**:
   - z=0.05: Tlo
   - z=0.1: Przyciski
   - z=0.15: Nakladki
   - z=1.0: Kursor

2. **Nazywaj widgety opisowo**:
   - `play_button`, `settings_menu`, `warning_banner`
   - `widget1`, `button2`, `img`

3. **Zawsze dolaczaj fallback**:
   ```yaml
   visual:
     normal: {type: image, value: ...}
     fallback: {type: text, value: "TEKST"}
   ```

4. **Kolizja wieksza niz visual**:
   - Visual: 0.02
   - Kolizja: 0.08x0.04 (latwiejsze klikanie)

5. **Uzywaj dzwiekow Minecraft gdy to mozliwe**:
   - Nie wymaga paczki zasobow
   - Dziala bez dodatkowej konfiguracji

6. **Testuj przyrostowo**:
   - Dodawaj 1 widget naraz
   - Uzywaj `/cm reload` czesto
   - Testuj kazda interakcje

---

Ostatnia aktualizacja: 2026-02-02
