# CraftMenu - Szybki Start

## Przewodnik 5-minutowy

Ten przewodnik przeprowadzi Cie od zera do dzialajacego menu w 5 minut.

---

## 1. Instalacja (1 min)

1. **Pobierz**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (zaleznosc)

2. **Zainstaluj**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Uruchom serwer**

4. **Zweryfikuj**:
   ```
   /cm info
   ```

---

## 2. Utworz Swoje Pierwsze Menu (2 min)

1. **W grze** przejdz do wybranej lokalizacji
2. Wykonaj:
   ```
   /cm create mojemenu
   ```

3. **Menu utworzone!** Plik wygenerowany w:
   ```
   /plugins/CraftMenu/menus/mojemenu.yml
   ```

---

## 3. Dodaj Obrazy (1 min)

1. **Utworz folder**:
   ```
   /plugins/CraftMenu/images/mojemenu/
   ```

2. **Dodaj obrazy PNG** (64x64 lub 128x128):
   ```
   images/mojemenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Wygeneruj paczke zasobow**:
   ```
   /cm zip
   ```

---

## 4. Skonfiguruj Menu (1 min)

Edytuj `/plugins/CraftMenu/menus/mojemenu.yml`:

```yaml
menu:
  name: mojemenu
  title: '&b&lMoje Pierwsze Menu'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Gdzie je utworzyles
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Prosty przycisk (uzywajacy IMAGE z zdarzeniami hover/click)
    moj_przycisk:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mojemenu/button.png       # ← TWOJ OBRAZ
        hover:
          type: image
          value: mojemenu/button-hover.png # ← OBRAZ HOVER
        fallback:
          type: text
          value: "KLIKNIJ MNIE"             # Jesli obraz nie zaladuje
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
          command: '[MESSAGE] &aKliknales przycisk!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Kursor
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mojemenu/cursor.png  # ← TWOJ OBRAZ
        fallback:
          type: text
          value: "§f→"
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
          volume: 0.3
```

---

## 5. Testuj

1. **Przeladuj**:
   ```
   /cm reload
   ```

2. **Otworz menu**:
   ```
   /cm open mojemenu
   ```

3. **Przesun myszke** aby sterowac kursorem
4. **Kliknij** przycisk

---

## Lista kontrolna

- [ ] Plugin zainstalowany i dziala
- [ ] Menu utworzone za pomoca `/cm create`
- [ ] Obrazy dodane w `/images/mojemenu/`
- [ ] Paczka zasobow wygenerowana za pomoca `/cm zip`
- [ ] Menu skonfigurowane w YAML
- [ ] Menu dziala z `/cm open mojemenu`
- [ ] Paczka zasobow zastosowana na kliencie

---

## Typowe Problemy

### "Menu nie zaladowane"

```bash
/cm reload
/cm list  # Sprawdz czy menu sie pojawia
```

### Kursor sie nie pojawia

**Rozwiazanie**: Sprawdz czy kursor jest w YAML i ma skonfigurowany visual

### Obrazy pokazuja "?"

```bash
/cm images scan    # Sprawdz czy obrazy zostaly znalezione
/cm zip            # Wygeneruj ponownie paczke zasobow
/cm reload         # Przeladuj
```

### Paczka zasobow nie pobiera sie

Gracz musi:
1. Zainstalowac recznie: skopiuj `/plugins/CraftMenu/craftmenu.zip` do `.minecraft/resourcepacks/`
2. LUB skonfigurowac w `server.properties` (wymaga hostingu webowego)

---

## Nastepne Kroki

1. [Kompletna Dokumentacja Menu](MENU_CREATION.md)
3. [Zaawansowane Funkcje](FEATURES.md)

---

## Przydatne Zasoby

- **Przykladowe obrazy**: Szukaj "minecraft UI icons" lub stworz wlasne
- **Zalecane rozmiary**: 64x64, 128x128
- **Format**: PNG z przezroczystoscia
- **Dzwieki Minecraft**: [Kompletna lista](https://minecraft.fandom.com/wiki/Sounds.json)

---

Ostatnia aktualizacja: 2026-02-02
