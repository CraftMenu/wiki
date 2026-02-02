# Tworzenie menu

Ten przewodnik obejmuje tworzenie niestandardowych menu w CraftMenu.

## Struktura menu

Menu sa definiowane w plikach YAML w `plugins/CraftMenu/menus/`.

### Podstawowy szablon menu

```yaml
menu:
  name: my_menu
  title: "&b&lMoje niestandardowe menu"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # Definicje widgetow tutaj
```

## Wlasciwosci menu

### Podstawowe wlasciwosci

| Wlasciwosc | Typ | Opis |
|------------|-----|------|
| `name` | String | Unikalny identyfikator menu |
| `title` | String | Tytul wyswietlania (obsluguje kody kolorow) |
| `main` | Boolean | Czy to jest menu glowne? |
| `open-on-join` | Boolean | Automatyczne otwarcie gdy gracz dolacza do swiata |
| `open-on-teleport` | Boolean | Automatyczne otwarcie gdy gracz teleportuje sie do swiata |

### Lokalizacja

```yaml
location:
  world: world               # Nazwa swiata
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Rotacja pozioma (-180 do 180)
    pitch: 0.0               # Rotacja pionowa (-90 do 90)
```

### Ustawienia

```yaml
settings:
  cursor-sensitivity: 1.0    # Czulosc myszy (1.0 = normalna)
  max-yaw-offset: 61.0       # Limit poziomy w stopniach
  max-pitch-offset: 36.0     # Limit pionowy w stopniach
  camera-lock-enabled: true  # Zablokuj kamere gracza gdy menu jest otwarte
  camera-lock-strength: 0.4  # Sila blokady (0.0-1.0)
```

### Ustawienia widocznosci

```yaml
settings:
  visibility:
    hide_players: false      # Ukryj innych graczy
    hide_mobs: false         # Ukryj moby
    hide_items: false        # Ukryj upuszczone przedmioty
    whitelist_players: []    # Gracze ktorzy pozostaja widoczni
```

## Dodawanie widgetow

Widgety sa interaktywnymi elementami twojego menu.

### Widget obrazu

```yaml
widgets:
  my_button:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### Widget tekstu

```yaml
widgets:
  title_text:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lWitaj!"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Szybkie tworzenie komenda

Uzyj `/cm create <nazwa>` aby szybko utworzyc menu w twojej aktualnej lokalizacji.

## Dodawanie niestandardowych obrazow

1. Utworz folder: `plugins/CraftMenu/images/my_menu/`
2. Dodaj swoje obrazy PNG do tego folderu
3. Uruchom `/cm zip` aby zregenerowac resource pack
4. Odwoluj sie do obrazow jako `my_menu/nazwa_obrazu.png`

## Testowanie menu

1. Zapisz plik YAML
2. Uruchom `/cm reload`
3. Uruchom `/cm open my_menu`

## Najlepsze praktyki

- Uzyj podfolderow do organizowania obrazow wedlug menu
- Utrzymuj rozsadne rozmiary obrazow (max 128x128 dla przyciskow)
- Testuj menu dokładnie przed wdrozeniem
- Uzywaj opisowych nazw widgetow
- Komentuj zlozone konfiguracje
