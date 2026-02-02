# CraftMenu - Schnellstart

## 5-Minuten-Anleitung

Diese Anleitung bringt Sie in 5 Minuten von Null zu einem funktionierenden Menu.

---

## 1. Installation (1 Min)

1. **Download**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (Abhangigkeit)

2. **Installation**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Server starten**

4. **Verifizieren**:
   ```
   /cm info
   ```

---

## 2. Erstes Menu erstellen (2 Min)

1. **Im Spiel**, gehe zur gewunschten Position
2. Fuhre aus:
   ```
   /cm create mymenu
   ```

3. **Menu erstellt!** Datei generiert unter:
   ```
   /plugins/CraftMenu/menus/mymenu.yml
   ```

---

## 3. Bilder hinzufugen (1 Min)

1. **Ordner erstellen**:
   ```
   /plugins/CraftMenu/images/mymenu/
   ```

2. **PNG-Bilder hinzufugen** (64x64 oder 128x128):
   ```
   images/mymenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Resource Pack generieren**:
   ```
   /cm zip
   ```

---

## 4. Menu konfigurieren (1 Min)

Bearbeite `/plugins/CraftMenu/menus/mymenu.yml`:

```yaml
menu:
  name: mymenu
  title: '&b&lMein erstes Menu'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Wo du es erstellt hast
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Einfacher Button (IMAGE mit hover/click Events)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: mymenu/button.png       # ← DEIN BILD
        hover:
          type: image
          value: mymenu/button-hover.png # ← HOVER BILD
        fallback:
          type: text
          value: "KLICK MICH"             # Falls Bild fehlschlagt
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
          command: '[MESSAGE] &aDu hast den Button geklickt!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Cursor
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: mymenu/cursor.png  # ← DEIN BILD
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

## 5. Test

1. **Neu laden**:
   ```
   /cm reload
   ```

2. **Menu offnen**:
   ```
   /cm open mymenu
   ```

3. **Maus bewegen** um Cursor zu steuern
4. **Klicke** den Button

---

## Checkliste

- [ ] Plugin installiert und funktioniert
- [ ] Menu erstellt mit `/cm create`
- [ ] Bilder hinzugefugt in `/images/mymenu/`
- [ ] Resource Pack generiert mit `/cm zip`
- [ ] Menu in YAML konfiguriert
- [ ] Menu funktioniert mit `/cm open mymenu`
- [ ] Resource Pack auf Client angewendet

---

## Haufige Probleme

### "Menu nicht geladen"

```bash
/cm reload
/cm list  # Prufe ob Menu erscheint
```

### Cursor erscheint nicht

**Losung**: Prufe ob Cursor in YAML ist und visual konfiguriert hat

### Bilder zeigen "?"

```bash
/cm images scan    # Prufe ob Bilder gefunden wurden
/cm zip            # Resource Pack neu generieren
/cm reload         # Neu laden
```

### Resource Pack ladt nicht herunter

Spieler muss:
1. Manuell installieren: kopiere `/plugins/CraftMenu/craftmenu.zip` nach `.minecraft/resourcepacks/`
2. ODER in `server.properties` konfigurieren (benotigt Web-Hosting)

---

## Nachste Schritte

1. [Vollstandige Menu-Dokumentation](MENU_CREATION.md)
3. [Erweiterte Funktionen](FEATURES.md)

---

## Nutzliche Ressourcen

- **Beispielbilder**: Suche "minecraft UI icons" oder erstelle eigene
- **Empfohlene Grosen**: 64x64, 128x128
- **Format**: PNG mit Transparenz
- **Minecraft-Sounds**: [Vollstandige Liste](https://minecraft.fandom.com/wiki/Sounds.json)

---

Zuletzt aktualisiert: 2026-02-02
