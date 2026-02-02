# Typy widgetow

CraftMenu obsluguje trzy typy widgetow do budowania menu.

## Przeglad typow widgetow

| Typ | Opis | Interaktywny |
|-----|------|--------------|
| IMAGE | Wyswietla obrazy | Tak |
| TEXT | Wyswietla sformatowany tekst | Tak |
| CURSOR | Kursor myszy | Specjalny |

## Widget IMAGE

Uzywany do przyciskow, tel i elementow dekoracyjnych.

### Podstawowy obraz

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

### Obraz ze stanami

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

### Nadpisania stanow

Kazdy stan moze miec nadpisania transformacji i kolizji:

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Lekko wiekszy przy najechaniu
```

## Widget TEXT

Wyswietla sformatowany tekst z obsluga PlaceholderAPI.

### Podstawowy tekst

```yaml
welcome_text:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bWitaj na serwerze!"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Tekst z placeholderami

```yaml
player_info:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Gracz: &f%player_name%\n&7Poziom: &a%player_level%"
      text-size: 0.8
```

### Tekst wieloliniowy

Uzyj `\n` dla lamania linii:

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Linia 1\nLinia 2\nLinia 3"
```

## Widget CURSOR

Kursor sledzi ruch myszy gracza.

### Podstawowy kursor

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

## Wlasciwosci transformacji

Wszystkie widgety obsluguja wlasciwosci transformacji:

```yaml
transform:
  position:
    x: 0.0    # Przesuniecie poziome
    y: 0.0    # Przesuniecie pionowe
    z: 0.0    # Przesuniecie glebi
  size:
    x: 0.1    # Skala szerokosci
    y: 0.1    # Skala wysokosci
    z: 0.1    # Skala glebi
  rotation:
    pitch: 0  # Rotacja osi X
    yaw: 0    # Rotacja osi Y
    roll: 0   # Rotacja osi Z
```

## Wlasciwosci kolizji

Wlacz lub dostosuj wykrywanie kolizji:

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Kolejnosc widgetow

Widgety sa renderowane w kolejnosci, w jakiej pojawiaja sie w pliku YAML. Pozniejsze widgety pojawiaja sie przed wczesnniejszymi.
