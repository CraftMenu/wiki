# CraftMenu - Guida Rapida

## Guida in 5 Minuti

Questa guida ti porta da zero a un menu funzionante in 5 minuti.

---

## 1. Installazione (1 min)

1. **Scarica**:
   - CraftMenu.jar
   - [PacketEvents](https://hangar.papermc.io/retrooper/packetevents) (dipendenza)

2. **Installa**:
   ```
   /plugins/
     ├─ PacketEvents.jar
     └─ CraftMenu.jar
   ```

3. **Avvia il server**

4. **Verifica**:
   ```
   /cm info
   ```

---

## 2. Crea il Tuo Primo Menu (2 min)

1. **Nel gioco**, vai alla posizione desiderata
2. Esegui:
   ```
   /cm create miomenu
   ```

3. **Menu creato!** File generato in:
   ```
   /plugins/CraftMenu/menus/miomenu.yml
   ```

---

## 3. Aggiungi Immagini (1 min)

1. **Crea cartella**:
   ```
   /plugins/CraftMenu/images/miomenu/
   ```

2. **Aggiungi immagini PNG** (64x64 o 128x128):
   ```
   images/miomenu/
     ├─ button.png
     ├─ button-hover.png
     └─ cursor.png
   ```

3. **Genera resource pack**:
   ```
   /cm zip
   ```

---

## 4. Configura il Menu (1 min)

Modifica `/plugins/CraftMenu/menus/miomenu.yml`:

```yaml
menu:
  name: miomenu
  title: '&b&lIl Mio Primo Menu'
  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}  # Dove lo hai creato
    rotation: {yaw: 0, pitch: 0}

  settings:
    max-yaw-offset: 60
    max-pitch-offset: 35

  widgets:
    # Pulsante semplice (usando IMAGE con eventi hover/click)
    my_button:
      type: IMAGE
      visual:
        normal:
          type: image
          value: miomenu/button.png       # ← LA TUA IMMAGINE
        hover:
          type: image
          value: miomenu/button-hover.png # ← IMMAGINE HOVER
        fallback:
          type: text
          value: "CLICCAMI"               # Se l'immagine fallisce
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
          command: '[MESSAGE] &aHai cliccato il pulsante!'
        - action: sound
          file: "minecraft:entity.experience_orb.pickup"

    # Cursore
    cursor:
      type: CURSOR
      visual:
        normal:
          type: image
          value: miomenu/cursor.png  # ← LA TUA IMMAGINE
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

## 5. Testa

1. **Ricarica**:
   ```
   /cm reload
   ```

2. **Apri menu**:
   ```
   /cm open miomenu
   ```

3. **Muovi il mouse** per controllare il cursore
4. **Clicca** il pulsante

---

## Checklist

- [ ] Plugin installato e funzionante
- [ ] Menu creato con `/cm create`
- [ ] Immagini aggiunte in `/images/miomenu/`
- [ ] Resource pack generato con `/cm zip`
- [ ] Menu configurato in YAML
- [ ] Menu funziona con `/cm open miomenu`
- [ ] Resource pack applicato sul client

---

## Problemi Comuni

### "Menu non caricato"

```bash
/cm reload
/cm list  # Verifica se il menu appare
```

### Cursore non appare

**Soluzione**: Verifica che il cursore sia nel YAML e abbia la visual configurata

### Le immagini mostrano "?"

```bash
/cm images scan    # Verifica se le immagini sono state trovate
/cm zip            # Rigenera il resource pack
/cm reload         # Ricarica
```

### Resource pack non si scarica

Il giocatore deve:
1. Installare manualmente: copia `/plugins/CraftMenu/craftmenu.zip` in `.minecraft/resourcepacks/`
2. OPPURE configurare in `server.properties` (richiede hosting web)

---

## Prossimi Passi

1. [Documentazione Completa Menu](MENU_CREATION.md)
3. [Funzionalita Avanzate](FEATURES.md)

---

## Risorse Utili

- **Immagini di esempio**: Cerca "minecraft UI icons" o crea le tue
- **Dimensioni consigliate**: 64x64, 128x128
- **Formato**: PNG con trasparenza
- **Suoni Minecraft**: [Lista completa](https://minecraft.fandom.com/wiki/Sounds.json)

---

Ultimo aggiornamento: 2026-02-02
