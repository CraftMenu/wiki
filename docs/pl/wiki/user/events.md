# System zdarzen

CraftMenu uzywa systemu zdarzen do obslugi interakcji uzytkownika z widgetami.

## Typy zdarzen

| Zdarzenie | Wyzwalacz | Dostepne dla |
|-----------|-----------|--------------|
| `on_menu_open` | Menu sie otwiera | Wszystkie widgety |
| `on_cursor_hover` | Kursor wchodzi na widget | IMAGE, TEXT |
| `on_cursor_hover_exit` | Kursor opuszcza widget | IMAGE, TEXT |
| `on_cursor_click` | Widget zostaje klikniety | IMAGE, TEXT |
| `on_click_any` | Jakiekolwiek klikniecie | Tylko CURSOR |

## Podstawowa struktura zdarzenia

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
          command: "[MESSAGE] &aKliknales!"
```

## Typy akcji

### Akcja dzwieku

Odtwarza efekt dzwiekowy:

```yaml
- action: sound
  file: minecraft:ui.button.click  # Dzwiek Minecraft
  volume: 1.0                       # 0.0 do 1.0
  pitch: 1.0                        # 0.5 do 2.0
```

Niestandardowe dzwieki:
```yaml
- action: sound
  file: template/click.ogg         # Niestandardowy plik dzwiekowy
```

### Akcja animacji

Uruchamia animacje:

```yaml
- action: animation
  effect: scale                    # Typ animacji
  duration: 200                    # Czas trwania w ms
  scale: {x: 1.2, y: 1.2, z: 1.2}  # Docelowa skala
  easing_style: ease_out           # Funkcja wygladzania
  priority: false                  # Blokowac inne akcje?
```

### Akcja komendy

Wykonuje komendy:

```yaml
- action: command
  command: "[MESSAGE] Witaj!"      # Specjalna komenda
  delay: 0                         # Opoznienie w ms
```

**Specjalne komendy:**
- `[MESSAGE] tekst` - Wyslij wiadomosc do gracza
- `[TELEPORT] swiat x y z yaw pitch` - Teleportuj gracza
- `[CLOSE]` - Zamknij menu
- `[PLAY_MUSIC] sciezka/plik.ogg` - Odtwarzaj muzyke w tle
- `[STOP_MUSIC]` - Zatrzymaj muzyke
- `[OPEN_URL] https://...` - Otworz URL (klikalny)
- `[PLAYER] /komenda` - Wykonaj komende jako gracz
- `[CONSOLE] /komenda` - Wykonaj komende jako konsola

### Akcje stanow

Zmien stany widgetow:

```yaml
# Przelaczaj miedzy stanami
- action: toggle_state
  states: [normal, disabled]

# Ustaw konkretny stan
- action: set_state
  state: disabled
```

### Akcja zmiany wizualnej

Zmien wyglad widgeta:

```yaml
- action: visual_change
  to: hover

# Warunkowa zmiana
- action: visual_change_conditional
  if_state: normal
  to: hover
```

### Akcja ukrywania widgeta

Usun widget z widoku:

```yaml
- action: hide_widget
  widget: nazwa_mojego_widgeta
```

### Akcja zatrzymania animacji

Zatrzymaj trwajace animacje:

```yaml
- action: stop_animation
  animation_type: rotate          # Animacja do zatrzymania
```

## Kolejnosc wykonania zdarzen

Akcje wykonuja sie w podanej kolejnosci. Dla najlepszych wynikow:

1. Efekty dzwiekowe (natychmiastowa informacja zwrotna)
2. Zmiany stanow
3. Komendy
4. Animacje (moga miec opoznienia)

## Animacje priorytetowe

Uzyj `priority: true` aby blokowac inne akcje do zakonczenia animacji:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 500
      priority: true              # Blokuje nastepne akcje
    - action: command
      command: "[MESSAGE] Gotowe!"  # Wykonuje sie po animacji
```
