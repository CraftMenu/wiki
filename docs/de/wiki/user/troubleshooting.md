# Fehlerbehebung

Haeufige Probleme und Loesungen fuer CraftMenu.

## Bilder erscheinen nicht

**Symptom:** Bilder werden als "?" oder fehlende Zeichen angezeigt.

**Loesungen:**

1. **Ressourcenpaket neu generieren:**
   ```
   /cm paket
   ```

2. **Bildspeicherort pruefen:**
   - Bilder muessen in Unterordnern sein: `plugins/CraftMenu/images/ordner/bild.png`
   - NICHT im Stammverzeichnis: `plugins/CraftMenu/images/bild.png`

3. **Bildformat ueberpruefen:**
   - Nur PNG-Dateien werden unterstuetzt
   - Korrekte Dateierweiterung sicherstellen (`.png`, nicht `.PNG`)

4. **Ressourcenpaket-Ladung pruefen:**
   - Server-Ressourcenpaket muss konfiguriert sein
   - Spieler muss das Ressourcenpaket akzeptieren

5. **Plugin neu laden:**
   ```
   /cm neuladen
   ```

## Menue oeffnet sich nicht

**Symptom:** `/cm oeffnen`-Befehl macht nichts.

**Loesungen:**

1. **Pruefen, ob Menue existiert:**
   ```
   /cm liste
   ```

2. **Konsole auf Fehler pruefen** nach Ausfuehren des Befehls

3. **YAML-Syntax ueberpruefen:**
   - Einen YAML-Validator verwenden
   - Auf falsche Einrueckung pruefen

4. **Spawn-Position ueberpruefen:**
   - Welt muss geladen sein
   - Position muss zugaenglich sein

## Kollision funktioniert nicht

**Symptom:** Cursor erkennt Widgets nicht.

**Loesungen:**

1. **Debug-Partikel aktivieren:**
   ```
   /debugcollision toggle
   ```

2. **Kollisionskonfiguration pruefen:**
   ```yaml
   collision:
     enabled: true
     size: {x: 0.1, y: 0.1, z: 0.1}
   ```

3. **Kollisionsbox vergroessern** wenn sie zu klein ist

4. **Widget-Position pruefen** - Kollision koennte versetzt sein

## Sounds spielen nicht

**Symptom:** Sound-Aktionen haben keine Wirkung.

**Loesungen:**

1. **Fuer benutzerdefinierte Sounds:**
   - `.ogg`-Dateien in `plugins/CraftMenu/sounds/ordner/` ablegen
   - Ressourcenpaket neu generieren: `/cm paket`

2. **Fuer Minecraft-Sounds:**
   - Korrektes Format verwenden: `minecraft:ui.button.click`

3. **Lautstaerke-Einstellungen pruefen** in der Aktionskonfiguration

## Leistungsprobleme

**Symptom:** Verzoegerung bei der Nutzung von Menues.

**Loesungen:**

1. **Bilder optimieren:**
   ```
   /cm bilder scan
   /cm bilder fix --backup
   ```

2. **Animationshaeufigkeit reduzieren** in komplexen Menues

3. **Debug-Modus deaktivieren:**
   ```yaml
   craftmenu:
     general:
       debug: false
   ```

4. **Update-Intervall erhoehen:**
   ```yaml
   craftmenu:
     performance:
       update-interval: 2
   ```

## Plugin laedt nicht

**Symptom:** Plugin zeigt Fehler beim Start.

**Loesungen:**

1. **Java-Version pruefen:**
   - Erfordert Java 17 oder hoeher

2. **Abhaengigkeiten ueberpruefen:**
   - PacketEvents muss installiert sein

3. **Server-Version pruefen:**
   - Erfordert Minecraft 1.20.4+

4. **Startprotokolle ueberpruefen** auf spezifische Fehler

5. **Wiederherstellung versuchen:**
   ```
   /cm wiederherstellen
   ```

## YAML-Fehler

**Symptom:** Fehler erwaehnen YAML-Parsing.

**Haeufige Probleme:**

1. **Falsche Einrueckung:**
   ```yaml
   # Falsch
   widgets:
   mein_widget:
     type: IMAGE

   # Richtig
   widgets:
     mein_widget:
       type: IMAGE
   ```

2. **Fehlende Anfuehrungszeichen bei speziellen Werten:**
   ```yaml
   # Falsch - & hat spezielle Bedeutung
   title: &bHallo

   # Richtig
   title: "&bHallo"
   ```

3. **Falsches Listenformat:**
   ```yaml
   # Falsch
   events:
     on_cursor_click:
       action: sound

   # Richtig
   events:
     on_cursor_click:
       - action: sound
   ```

## Hilfe erhalten

Wenn Sie immer noch Probleme haben:

1. Debug-Modus aktivieren und Konsolenausgabe pruefen
2. GitHub Issues auf bekannte Probleme pruefen
3. Neues Issue erstellen mit:
   - Server-Version
   - Plugin-Version
   - Konsolenprotokolle
   - Konfigurationsdateien (sensible Daten entfernen)
