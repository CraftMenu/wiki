# CraftMenu - Snelstartgids

## 5-Minuten Gids

Deze gids helpt je van nul naar een werkend menu in 5 minuten.

---

## 1. Installatie (1 min)

1. **Downloaden**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (afhankelijkheid)

2. **Installeren**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Start de server**

4. **Verifieer**:
   ```
   /cm info
   ```

---

## 2. Maak Je Eerste Menu (2 min)

1. **In het spel**, ga naar de gewenste locatie
2. Voer uit:
   ```
   /cm create mijnmenu
   ```

3. **Menu aangemaakt!** Bestand gegenereerd op:
   ```
   /plugins/CraftMenu/menus/mijnmenu.yml
   ```

---

## 3. Afbeeldingen Toevoegen (1 min)

1. **Maak map aan**:
   ```
   /plugins/CraftMenu/images/mijnmenu/
   ```

2. **Voeg PNG-afbeeldingen toe** (64x64 of 128x128):
   ```
   images/mijnmenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Genereer resource pack**:
   ```
   /cm zip
   ```

---

## 4. Menu Configureren (1 min)

Bewerk `/plugins/CraftMenu/menus/mijnmenu.yml`:

```yaml
menu:
  name: mijnmenu
  title: '&b&lMijn Eerste Menu'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Waar je het hebt aangemaakt
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Simpele knop (met IMAGE met hover/click events)
    mijn_knop:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mijnmenu/button.png       # ← JOUW AFBEELDING
        hover:
          type: image
          value: mijnmenu/button-hover.png # ← HOVER AFBEELDING
        fallback:
          type: text
          value: "KLIK HIER"               # Als afbeelding faalt
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
          command: '[MESSAGE] &aJe hebt op de knop geklikt!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Cursor
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mijnmenu/cursor.png  # ← JOUW AFBEELDING
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

## 5. Testen

1. **Herladen**:
   ```
   /cm reload
   ```

2. **Open menu**:
   ```
   /cm open mijnmenu
   ```

3. **Beweeg de muis** om de cursor te besturen
4. **Klik** op de knop

---

## Checklist

- [ ] Plugin geinstalleerd en werkend
- [ ] Menu aangemaakt met `/cm create`
- [ ] Afbeeldingen toegevoegd in `/images/mijnmenu/`
- [ ] Resource pack gegenereerd met `/cm zip`
- [ ] Menu geconfigureerd in YAML
- [ ] Menu werkt met `/cm open mijnmenu`
- [ ] Resource pack toegepast op client

---

## Veelvoorkomende Problemen

### "Menu niet geladen"

```bash
/cm reload
/cm list  # Controleer of menu verschijnt
```

### Cursor verschijnt niet

**Oplossing**: Controleer of cursor in YAML staat en visual geconfigureerd heeft

### Afbeeldingen tonen "?"

```bash
/cm images scan    # Controleer of afbeeldingen gevonden zijn
/cm zip            # Genereer resource pack opnieuw
/cm reload         # Herladen
```

### Resource pack downloadt niet

Speler moet:
1. Handmatig installeren: kopieer `/plugins/CraftMenu/craftmenu.zip` naar `.minecraft/resourcepacks/`
2. OF configureren in `server.properties` (vereist webhosting)

---

## Volgende Stappen

1. [Volledige Menu Documentatie](MENU_CREATION.md)
3. [Geavanceerde Functies](FEATURES.md)

---

## Handige Bronnen

- **Voorbeeldafbeeldingen**: Zoek "minecraft UI icons" of maak je eigen
- **Aanbevolen formaten**: 64x64, 128x128
- **Formaat**: PNG met transparantie
- **Minecraft Geluiden**: [Volledige lijst](https://minecraft.fandom.com/wiki/Sounds.json)

---

Laatst bijgewerkt: 2026-02-02
