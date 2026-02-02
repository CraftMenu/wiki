# System animacji

CraftMenu zapewnia potezny system animacji z 19 typami animacji i 6 funkcjami wygladzania.

## Typy animacji

### Animacje ruchu

| Typ | Opis |
|-----|------|
| `translate` | Przesun pozycje widgeta |
| `bounce` | Efekt odbijania |
| `float` | Lagodne unoszenie sie gora/dol |
| `orbit` | Ruch orbitalny kolowy |

### Animacje rotacji

| Typ | Opis |
|-----|------|
| `rotate` | Ciagla rotacja |
| `swing` | Wahanie jak wahadlo |
| `flip` | Obrot o 180 stopni |
| `wobble` | Chwiejaca sie rotacja |
| `spiral` | Ruch spiralny |

### Animacje skali

| Typ | Opis |
|-----|------|
| `scale` | Zmien rozmiar |
| `pulse` | Rytmiczne pulsowanie |
| `squeeze` | Sciskanie/rozciaganie |
| `zoom_in` | Efekt zoomu |

### Animacje wizualne

| Typ | Opis |
|-----|------|
| `fade` | Zanikanie przezroczystosci |
| `glow` | Efekt swiecenia |
| `shake` | Ruch trzesacy |
| `jiggle` | Ruch wibujacy |
| `wave` | Ruch falowy |

## Podstawowe uzycie animacji

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Wlasciwosci animacji

### Wspolne wlasciwosci

```yaml
- action: animation
  effect: pulse           # Typ animacji (wymagane)
  duration: 1000          # Czas trwania w milisekundach
  easing_style: ease_out  # Funkcja wygladzania
  intensity: 1.0          # Intensywnosc efektu
  priority: false         # Blokowac inne akcje?
```

### Wlasciwosci specyficzne dla efektu

**Rotate:**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Stopnie
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
  fade: true  # true = zanikanie, false = pojawianie
```

## Funkcje wygladzania

| Wygladzanie | Opis |
|-------------|------|
| `linear` | Stala predkosc |
| `ease_in` | Wolny start |
| `ease_out` | Wolny koniec |
| `ease_in_out` | Wolny start i koniec |
| `bounce` | Efekt odbijania |
| `elastic` | Efekt sprezynowy |

### Przyklady wygladzania

```yaml
# Gladki efekt najechania
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Skoczna informacja zwrotna klikniecia
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Priorytet animacji

Uzyj `priority: true` aby upewnic sie, ze animacja zakonczy sie przed innymi akcjami:

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Blokuje nastepna akcje

    - action: command
      command: "[CLOSE]"      # Czeka na animacje
```

## Zatrzymywanie animacji

```yaml
- action: stop_animation
  animation_type: rotate      # Zatrzymaj konkretny typ
  # lub
  type: all                   # Zatrzymaj wszystkie animacje
```

## Ciagle animacje

Zdefiniuj animacje ktore dzialaja ciagle w konfiguracji widgeta:

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

## Najlepsze praktyki

1. Utrzymuj czas trwania ponizej 500ms dla responsywnej informacji zwrotnej
2. Uzywaj `ease_out` dla efektow najechania
3. Uzywaj `bounce` dla informacji zwrotnej klikniecia
4. Unikaj wielu jednoczesnych animacji na jednym widgecie
5. Testuj animacje na roznym sprzecie
