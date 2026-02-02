# Kompletny Przewodnik po Animacjach - CraftMenu

Ten dokument przedstawia wszystkie typy animacji dostepne w CraftMenu, z praktycznymi przykladami uzycia w YAML.

---

## Spis Tresci

1. [Podstawowe Animacje](#podstawowe-animacje)
2. [Animacje Ruchu](#animacje-ruchu)
3. [Zaawansowane Animacje](#zaawansowane-animacje)
4. [Laczenie Animacji](#laczenie-animacji)
5. [Wspólne Wlasciwosci](#wspólne-wlasciwosci)

---

## Podstawowe Animacje

### SCALE - Zmiana Rozmiaru

Zmienia rozmiar widgetu na osiach X, Y, Z.

```yaml
- action:
    type: animation
    effect: scale
    duration: 300
    scale: {x: 1.2, y: 1.2, z: 1.2}  # 120% oryginalnego rozmiaru
    easing_style: out
```

**Wlasciwosci**:
- `scaleX`: Skala na osi X (domyslnie: intensity)
- `scaleY`: Skala na osi Y (domyslnie: intensity)
- `scaleZ`: Skala na osi Z (domyslnie: intensity)

---

### ROTATE - Rotacja

Obraca widget wokol osi X, Y, Z.

```yaml
- action:
    type: animation
    effect: rotate
    duration: 1500
    rotate: {y: 360}  # Pelny obrot na osi Y
    easing_style: in_out
```

**Wlasciwosci**:
- `rotationX`: Rotacja na osi X w stopniach
- `rotationY`: Rotacja na osi Y w stopniach
- `rotationZ`: Rotacja na osi Z w stopniach

---

### TRANSLATE - Przesuniecie

Przesuwa widget do nowej pozycji.

```yaml
- action:
    type: animation
    effect: translate
    duration: 500
    translate: {x: 0.5, y: 0.2, z: 0}  # Przesuniecie w blokach
    easing_style: out
```

**Wlasciwosci**:
- `offsetX`: Przesuniecie na osi X
- `offsetY`: Przesuniecie na osi Y
- `offsetZ`: Przesuniecie na osi Z

---

### FADE - Pojawianie/Znikanie

Kontroluje przezroczystosc/widocznosc widgetu.

```yaml
# Zanikanie (znikanie)
- action:
    type: animation
    effect: fade
    duration: 500
    fade: true  # true = znikanie, false = pojawianie
    easing_style: in

# Pojawianie
- action:
    type: animation
    effect: fade
    duration: 500
    fade: false
    easing_style: out
```

**Wlasciwosci**:
- `fadeOut`: true aby zniknac, false aby sie pojawic

---

## Animacje Ruchu

### PULSE - Pulsowanie

Efekt oddychania/bicia serca z rytmicznym skalowaniem.

```yaml
- action:
    type: animation
    effect: pulse
    duration: 2000
    intensity: 0.15
    loop: true  # Ciagla animacja
    easing_style: in_out
```

---

### BOUNCE - Odbijanie

Symuluje fizke odbijania pilki wertykalnie.

```yaml
- action:
    type: animation
    effect: bounce
    duration: 600
    intensity: 0.8  # Wysokosc skoku
    easing_style: out
```

---

### SWING - Wahanie Wahadla

Ruch wahadlowy/hustawki.

```yaml
- action:
    type: animation
    effect: swing
    duration: 1500
    intensity: 0.3  # Amplituda wahniecia
    loop: true
    easing_style: in_out
```

---

### FLOAT - Unoszenie

Gladki ruch wertykalny w gore i w dol.

```yaml
- action:
    type: animation
    effect: float
    duration: 2000
    intensity: 0.15  # Wysokosc unoszenia
    loop: true
    easing_style: in_out
```

---

### SHAKE - Drżenie

Szybka i losowa wibracja.

```yaml
- action:
    type: animation
    effect: shake
    duration: 400
    intensity: 0.5  # Intensywnosc wibracji
    easing_style: linear
```

---

### JIGGLE - Elastyczne Drzenie

Lagodniejsze i bardziej kontrolowane drzenie z efektem elastycznym.

```yaml
- action:
    type: animation
    effect: jiggle
    duration: 600
    intensity: 0.15  # Amplituda drzenia
    easing_style: out
```

---

## Zaawansowane Animacje

### SLIDE - Wsuwanie spoza Ekranu

Widget wsuwa sie spoza ekranu.

```yaml
# Wsuwanie z lewej
- action:
    type: animation
    effect: slide
    duration: 800
    direction: left  # left/right/top/bottom/front/back
    distance: 2.0  # Odleglosc w blokach
    easing_style: out

# Wsuwanie z gory
- action:
    type: animation
    effect: slide
    duration: 800
    direction: top
    distance: 1.5
    easing_style: out
```

**Wlasciwosci**:
- `direction`: Kierunek wejscia (left, right, top, bottom, front, back)
- `distance`: Poczatkowa odleglosc w blokach (domyslnie: intensity * 2.0)

**Typowe Zastosowanie**: Idealne dla animacji `on_menu_open` z priorytetem CRITICAL.

---

### ZOOM_IN - Wejscie z Przeregulowaniem

Skalowanie od 0 do 1 z "przeregulowaniem" (przekracza i wraca).

```yaml
- action:
    type: animation
    effect: zoom_in
    duration: 600
    overshoot: 1.3  # Maksymalna skala przed powrotem do 1.0
    easing_style: out
```

**Wlasciwosci**:
- `overshoot`: Maksymalna skala przed stabilizacja na 1.0 (domyslnie: 1.2)

**Typowe Zastosowanie**: Dramatyczna animacja wejscia w `on_menu_open`.

---

### SQUEEZE - Efekt Sciskania

Splaszcza jedna os rozszerzajac inne.

```yaml
# Sciskanie horyzontalne
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3  # Intensywnosc sciskania
    axis: x  # x/y/z
    loop: true
    easing_style: in_out

# Sciskanie wertykalne
- action:
    type: animation
    effect: squeeze
    duration: 400
    intensity: 0.3
    axis: y
    loop: true
```

**Wlasciwosci**:
- `axis`: Os do scisniecia (x, y, z)
- `intensity`: Intensywnosc sciskania

---

### FLIP - Obrot o 180°

Obrot o 180 stopni na okreslonej osi.

```yaml
# Obrot wertykalny (jak przewracanie karty)
- action:
    type: animation
    effect: flip
    duration: 800
    axis: y  # x/y/z
    easing_style: in_out

# Obrot horyzontalny
- action:
    type: animation
    effect: flip
    duration: 800
    axis: x
    easing_style: in_out
```

**Wlasciwosci**:
- `axis`: Os obrotu (x, y, z)

**Typowe Zastosowanie**: Przejscia stanów, ujawnianie alternatywnej zawartosci.

---

### WOBBLE - Kołysanie Galaretki

Kolysanie w stylu "galaretki" na boki.

```yaml
- action:
    type: animation
    effect: wobble
    duration: 1000
    intensity: 1.0  # Intensywnosc kolysania
    loop: true
    easing_style: in_out
```

**Typowe Zastosowanie**: Animacje zwracajace uwage, feedback hover.

---

### ORBIT - Ruch Orbitalny

Widget krazy po okręgu wokol centralnego punktu.

```yaml
- action:
    type: animation
    effect: orbit
    duration: 5000
    radius: 0.5  # Promien orbity w blokach
    speed: 1.0  # Mnoznik predkosci
    loop: true
    easing_style: linear
```

**Wlasciwosci**:
- `radius`: Promien orbity (domyslnie: intensity * 0.5)
- `speed`: Predkosc obrotu (domyslnie: 1.0)

**Typowe Zastosowanie**: Dekoracyjne animacje tla.

---

### SPIRAL - Ruch Spiralny

Laczy rotacje z ruchem kolowym.

```yaml
# Spirala zgodnie ze wskazowkami zegara
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3  # Promien spirali
    clockwise: true  # Kierunek zgodny ze wskazowkami
    loop: true
    easing_style: linear

# Spirala przeciwnie do wskazowek zegara
- action:
    type: animation
    effect: spiral
    duration: 2000
    radius: 0.3
    clockwise: false
    loop: true
```

**Wlasciwosci**:
- `radius`: Promien spirali (domyslnie: intensity * 0.3)
- `clockwise`: Kierunek ruchu (true/false)

---

### WAVE - Ruch Falowy

Gladka fala z uzyciem funkcji sinus.

```yaml
# Fala horyzontalna
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2  # Amplituda fali
    axis: horizontal  # horizontal/vertical
    loop: true
    easing_style: in_out

# Fala wertykalna
- action:
    type: animation
    effect: wave
    duration: 3000
    intensity: 0.2
    axis: vertical
    loop: true
```

**Wlasciwosci**:
- `axis`: Kierunek fali (horizontal, vertical)

---

### GLOW - Pulsujacy Blask

Laczy subtelne pulsowanie ze zmianami przezroczystosci.

```yaml
- action:
    type: animation
    effect: glow
    duration: 1500
    intensity: 0.3  # Intensywnosc blasku
    loop: true
    easing_style: in_out
```

**Typowe Zastosowanie**: Podswietlanie waznych elementow, wskazniki uwagi.

---

## Laczenie Animacji

Mozesz laczyc wiele animacji sekwencyjnie lub równoczesnie.

### Przyklad 1: Dramatyczne Wejscie

```yaml
on_menu_open:
  # 1. Wsuwanie z lewej
  - action:
      type: animation
      effect: slide
      duration: 800
      direction: left
      distance: 2.0
      priority: true  # CRITICAL - blokuje nastepne akcje
      easing_style: out

  # 2. Zoom z przeregulowaniem (wykonuje sie PO slide)
  - action:
      type: animation
      effect: zoom_in
      duration: 600
      overshoot: 1.3
      easing_style: out

  # 3. Ciagłe unoszenie (zaczyna sie po zoom)
  - action:
      type: animation
      effect: float
      duration: 2000
      intensity: 0.1
      loop: true
      easing_style: in_out
```

---

### Przyklad 2: Zlozony Interaktywny Przycisk

```yaml
discord_button:
  type: BUTTON

  events:
    on_cursor_hover:
      # Dzwiek hover
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.3
          pitch: 1.2

      # Zmiana wizualna
      - action:
          type: visual_change_conditional
          if_state: normal
          to: hover

      # Subtelne pulsowanie
      - action:
          type: animation
          effect: pulse
          duration: 200
          intensity: 0.1
          easing_style: out

    on_cursor_hover_exit:
      # Przywroc visual
      - action:
          type: visual_change_conditional
          if_state: hover
          to: normal

    on_cursor_click:
      # Dzwiek klikniecia
      - action:
          type: sound
          file: "minecraft:ui.button.click"
          volume: 0.8

      # Sekwencja animacji
      - action:
          type: animation
          effect: squeeze
          duration: 150
          intensity: 0.3
          axis: y
          easing_style: out

      - action:
          type: animation
          effect: bounce
          duration: 400
          intensity: 0.5
          easing_style: out

      - action:
          type: animation
          effect: rotate
          duration: 1500
          rotate: {y: 360}
          easing_style: in_out

      # Komenda (wykonuje sie PO animacjach)
      - action:
          type: command
          command: '[OPEN_URL] https://discord.gg/twoj-serwer'
          delay: 1600
```

---

### Przyklad 3: Dekoracyjny Widget z Wieloma Animacjami

```yaml
decorative_star:
  type: IMAGE

  continuous-animations:
    # Kolowa orbita
    - effect: orbit
      duration: 8000
      radius: 0.4
      speed: 1.0
      loop: true
      easing_style: linear

    # Rotacja podczas orbitowania
    - effect: rotate
      duration: 4000
      rotate: {y: 360}
      loop: true
      easing_style: linear

    # Pulsujacy blask
    - effect: glow
      duration: 2000
      intensity: 0.3
      loop: true
      easing_style: in_out
```

---

## Wspólne Wlasciwosci

Wszystkie animacje obsluguja te wlasciwosci:

### type
Typ akcji (zawsze `animation`).

### effect
Nazwa animacji (scale, rotate, pulse, itp.).

### duration
Czas trwania w milisekundach.

```yaml
duration: 1000  # 1 sekunda
```

### intensity
Ogólna intensywnosc animacji (znaczenie zalezy od typu).

```yaml
intensity: 0.5  # Polowa domyslnej intensywnosci
```

### loop
Czy animacja powinna sie powtarzac w nieskonczonosc.

```yaml
loop: true  # Ciagla animacja
loop: false # Pojedyncza animacja (domyslnie)
```

### delay
Opoznienie przed rozpoczeciem animacji (w ms).

```yaml
delay: 500  # Czekaj 500ms przed startem
```

### easing_style
Typ easing dla wygladzenia animacji.

```yaml
easing_style: linear      # Stala predkosc
easing_style: in          # Przyspiesza na starcie
easing_style: out         # Zwalnia na koncu
easing_style: in_out      # Przyspiesza i zwalnia
```

### priority
Priorytet animacji (wplywa na przerywanie).

```yaml
priority: true   # CRITICAL - nigdy nie przerywana, blokuje nastepne akcje
priority: false  # INTERRUPTIBLE - moze byc przerwana (domyslnie)
```

**Uwaga**: Ciagle animacje (`loop: true`) zawsze maja priorytet BACKGROUND.

---

## Przewodnik Uzycia wg Kontekstu

### Animacje dla on_menu_open

```yaml
on_menu_open:
  - effect: slide       # Wsuwane wejscie
  - effect: zoom_in     # Wejscie z przeregulowaniem
  - effect: fade        # Lagodne pojawianie
```

### Animacje dla on_cursor_hover

```yaml
on_cursor_hover:
  - effect: scale       # Zwiekszenie rozmiaru
  - effect: pulse       # Lagodne pulsowanie
  - effect: glow        # Blask podswietlenia
  - effect: wobble      # Kolysanie uwagi
```

### Animacje dla on_cursor_click

```yaml
on_cursor_click:
  - effect: squeeze     # Feedback nacisku
  - effect: bounce      # Skok potwierdzenia
  - effect: shake       # Drzenie uderzenia
  - effect: flip        # Odwrocenie/ujawnienie
```

### Ciagle Animacje (Dekoracyjne)

```yaml
continuous-animations:
  - effect: float       # Lagodne unoszenie
  - effect: rotate      # Stala rotacja
  - effect: orbit       # Ruch orbitalny
  - effect: spiral      # Dekoracyjna spirala
  - effect: wave        # Ruch falowy
  - effect: glow        # Pulsujacy blask
```

---

## Szybka Tabela Referencyjna

| Animacja | Typ | Glowne Zastosowanie | Petla? | Domyslny Priorytet |
|----------|-----|---------------------|--------|-------------------|
| SCALE | Transformacja | Hover, Click | Nie | INTERRUPTIBLE |
| ROTATE | Transformacja | Dekoracyjne | Tak | BACKGROUND |
| TRANSLATE | Transformacja | Ruch | Nie | CRITICAL |
| PULSE | Ruch | Ciagle | Tak | BACKGROUND |
| BOUNCE | Ruch | Click | Nie | INTERRUPTIBLE |
| SWING | Ruch | Hover | Tak | INTERRUPTIBLE |
| FLOAT | Ruch | Ciagle | Tak | BACKGROUND |
| SHAKE | Ruch | Click | Nie | INTERRUPTIBLE |
| FADE | Wizualne | Wejscie/Wyjscie | Nie | CRITICAL |
| SLIDE | Zaawansowane | Wejscie | Nie | CRITICAL |
| ZOOM_IN | Zaawansowane | Wejscie | Nie | CRITICAL |
| SQUEEZE | Zaawansowane | Click | Nie/Tak | INTERRUPTIBLE |
| FLIP | Zaawansowane | Stan | Nie | CRITICAL |
| WOBBLE | Zaawansowane | Hover | Tak | BACKGROUND |
| ORBIT | Zaawansowane | Dekoracyjne | Tak | BACKGROUND |
| SPIRAL | Zaawansowane | Dekoracyjne | Tak | BACKGROUND |
| WAVE | Zaawansowane | Dekoracyjne | Tak | BACKGROUND |
| JIGGLE | Zaawansowane | Hover | Nie | INTERRUPTIBLE |
| GLOW | Zaawansowane | Podswietlenie | Tak | BACKGROUND |

---

**Ostatnia Aktualizacja**: 2025-10-15
**Wersja Pluginu**: 2.0
**Autor**: Zodunix
