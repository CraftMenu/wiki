# In-Game-Editor

CraftMenu beinhaltet einen leistungsstarken visuellen Editor, mit dem Sie Menus direkt uber eine Inventar-GUI konfigurieren konnen, ohne YAML-Dateien manuell bearbeiten zu mussen.

## Erste Schritte

### Den Editor offnen

```
/cm editor              # Offnet den Hauptbereich des Editors
/cm editor <menu>       # Bearbeitet ein bestimmtes Menu direkt
```

**Erforderliche Berechtigung:** `craftmenu.admin` oder `craftmenu.edit`

### Editor-Navigation

Der Editor verwendet ein **stapelbasiertes Navigationssystem**:
- **Linksklick** auf Elemente, um Untermenus zu offnen oder Werte zu bearbeiten
- **Rechtsklick** fur sekundare Aktionen (Vorschau, Test)
- **Umschalt + Linksklick** zum Loschen von Elementen (mit Bestatigung)
- **Pfeil-Element** (Zuruck-Button) um zum vorherigen Menu zuruckzukehren
- **Inventar schliessen** oder ausserhalb klicken zum Beenden

---

## Editor-Hauptmenu

Wenn Sie `/cm editor` ausfuhren, sehen Sie den Hauptbereich des Editors mit diesen Optionen:

| Element | Beschreibung |
|---------|--------------|
| **Menu-Liste** | Durchsuchen und Bearbeiten aller geladenen Menus |
| **Bild-Browser** | Alle verfugbaren Bilder anzeigen |
| **Sound-Browser** | Alle verfugbaren Sounds anzeigen |
| **Konfiguration** | Globale Plugin-Konfiguration |

---

## Menu-Bearbeitung

### Menu-Liste

Zeigt alle Menus in Ihrem `menus/`-Ordner. Klicken Sie auf ein Menu, um dessen Editor zu offnen.

- **Linksklick**: Menu bearbeiten
- **Umschalt + Linksklick**: Menu loschen (mit Bestatigung)
- **Neu erstellen**: Ein neues Menu an Ihrer aktuellen Position hinzufugen

### Menu-Aktionen-Hub

Nach Auswahl eines Menus sehen Sie den Hauptmenu-Editor mit diesen Abschnitten:

| Abschnitt | Beschreibung |
|-----------|--------------|
| **Eigenschaften** | Grundeinstellungen (Name, Titel, Hauptmenu, Auto-Offnen) |
| **Position** | Weltposition und Rotation |
| **Layout** | Raster-Layout-Konfiguration |
| **Tastenkurzel** | Tastaturkurzel |
| **Sichtbarkeit** | Spieler/Mobs/Items ausblenden |
| **Erweitert** | Cursor-Empfindlichkeit, Kamerasperre, Grenzen |
| **Widgets** | Widgets in diesem Menu bearbeiten |

---

## Menu-Eigenschaften

Bearbeiten Sie grundlegende Menu-Informationen:

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Name** | Menu-Identifikator (wird in Befehlen verwendet) |
| **Titel** | Anzeigetitel (unterstutzt & Farbcodes) |
| **Beschreibung** | Optionale Beschreibung |
| **Hauptmenu** | Als primares Menu markieren |
| **Offnen bei Beitritt** | Automatisch offnen, wenn Spieler dem Server beitritt |
| **Offnen bei Teleport** | Automatisch offnen, wenn Spieler zu dieser Welt teleportiert |
| **Welt** | Welt, in der das Menu existiert |

### Textwerte bearbeiten

Wenn Sie auf eine Texteigenschaft klicken:
1. Das Inventar schliesst sich
2. Eine Aufforderung erscheint im Chat
3. Geben Sie Ihren neuen Wert im Chat ein
4. Drucken Sie Enter zur Bestatigung (oder geben Sie `cancel` zum Abbrechen ein)

---

## Menu-Position

Konfigurieren Sie, wo das Menu in der Welt erscheint:

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Welt** | Aus verfugbaren Welten auswahlen |
| **X / Y / Z** | Koordinaten (zum Bearbeiten per Chat klicken) |
| **Gieren** | Horizontale Rotation (-180 bis 180) |
| **Nicken** | Vertikale Rotation (-90 bis 90) |
| **Auf aktuelle setzen** | Ihre aktuelle Position/Rotation verwenden |

---

## Menu-Layout (Raster)

Konfigurieren Sie rasterbasierte Widget-Positionierung:

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Aktiviert** | Raster-Layout ein-/ausschalten |
| **Spalten** | Anzahl der Rasterspalten |
| **Zeilen** | Anzahl der Rasterzeilen |
| **Abstand X / Y / Z** | Abstand zwischen Zellen |
| **Ausrichtung** | Rasterausrichtung (CENTER, TOP_LEFT, etc.) |

Wenn das Raster-Layout aktiviert ist, verwenden Widgets `grid-position: {row: X, col: Y}` anstelle von manuellen Koordinaten.

---

## Menu-Tastenkurzel

Konfigurieren Sie Tastaturkurzel:

| Aktion | Beschreibung |
|--------|--------------|
| **Tastenkurzel hinzufugen** | Neuen Tastaturkurzel erstellen |
| **Tastenkurzel bearbeiten** | Vorhandenen Tastenkurzel andern |
| **Tastenkurzel loschen** | Einen Tastenkurzel entfernen |

### Tastenkurzel-Eigenschaften

- **Taste**: Die Taste oder Kombination (z.B. `SHIFT`, `CTRL+E`, `F`)
- **Aktion**: `activate`, `toggle` oder `close`
- **Widget**: Ziel-Widget-Name (fur activate/toggle)

---

## Menu-Sichtbarkeit

Steuern Sie, was sichtbar ist, wahrend das Menu geoeffnet ist:

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Spieler ausblenden** | Andere Spieler aus der Sicht ausblenden |
| **Mobs ausblenden** | Alle Mobs ausblenden |
| **Items ausblenden** | Items auf dem Boden ausblenden |
| **Whitelist** | Spieler, die sichtbar bleiben (Liste bearbeiten) |

---

## Erweiterte Einstellungen

Feinabstimmung des Menu-Verhaltens:

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Cursor-Empfindlichkeit** | Mausbewegungsgeschwindigkeit (0.1 - 5.0) |
| **Max. Gier-Versatz** | Horizontale Cursor-Grenze (Grad) |
| **Max. Nick-Versatz** | Vertikale Cursor-Grenze (Grad) |
| **Kamerasperre aktiviert** | Kamera des Spielers sperren, wahrend Menu geoffnet ist |
| **Kamerasperre-Starke** | Wie stark die Kamera gesperrt ist (0.0 - 1.0) |
| **Grenz-Sound** | Sound, wenn Cursor die Grenze erreicht |
| **Grenz-Lautstarke/Tonhohe** | Sound-Eigenschaften |
| **Grenz-Nachricht** | Nachricht, die an der Grenze angezeigt wird |

---

## Widget-Bearbeitung

### Widget-Liste

Zeigt alle Widgets im aktuellen Menu:

- **Linksklick**: Widget bearbeiten
- **Umschalt + Linksklick**: Widget loschen
- **Neu erstellen**: Neues Widget hinzufugen

### Widget-Editor-Hub

Jedes Widget hat diese bearbeitbaren Abschnitte:

| Abschnitt | Beschreibung |
|-----------|--------------|
| **Typ** | IMAGE, TEXT oder CURSOR |
| **Transformation** | Position, Grosse, Rotation |
| **Visuelle Zustande** | Normal, Hover, Gedruckt, Deaktiviert Erscheinungen |
| **Kollision** | Kollisionsbox-Konfiguration |
| **Ereignisse** | Interaktionsereignisse und Aktionen |
| **[Typ-spezifisch]** | Zusatzliche Optionen basierend auf Widget-Typ |

---

## Transformations-Editor

Konfigurieren Sie Widget-Positionierung und -Grosse:

### Position
- **X**: Horizontale Position
- **Y**: Vertikale Position
- **Z**: Tiefenposition

### Grosse
- **X**: Breitenskalierung
- **Y**: Hohenskalierung
- **Z**: Tiefenskalierung

### Rotation
- **Nicken**: Auf/Ab-Rotation
- **Gieren**: Links/Rechts-Rotation
- **Rollen**: Neigungsrotation

**Tipp**: Klicken Sie auf einen beliebigen Wert, um ihn per Chat-Eingabe zu bearbeiten.

---

## Visuelle Zustande

Widgets konnen fur verschiedene Zustande unterschiedliche Erscheinungen haben:

| Zustand | Wann angewendet |
|---------|-----------------|
| **normal** | Standardzustand |
| **hover** | Cursor ist uber dem Widget |
| **pressed** | Widget wird geklickt |
| **disabled** | Widget ist inaktiv |
| **Benutzerdefiniert** | Beliebiger benutzerdefinierter Zustandsname |

### Visueller Zustands-Editor

Jeder Zustand hat:

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Typ** | `image`, `text` oder `unicode` |
| **Wert** | Bildpfad, Textinhalt oder Unicode-Zeichen |
| **Uberschreibungen** | Optionale Transformations-/Kollisions-/Textgrossen-Uberschreibungen |

---

## Kollisions-Editor

Konfigurieren Sie den klickbaren Bereich des Widgets:

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Aktiviert** | Kollisionserkennung umschalten |
| **Position X/Y/Z** | Kollisionsbox-Zentrumsversatz |
| **Grosse X/Y/Z** | Kollisionsbox-Dimensionen |
| **Versatz X/Y/Z** | Zusatzlicher Versatz |

**Tipp**: Verwenden Sie `/cm debug particles`, um Kollisionsboxen im Spiel zu visualisieren.

---

## Ereignis-Editor

### Ereignistypen

| Ereignis | Ausloser |
|----------|----------|
| **on_menu_open** | Wenn das Menu geoeffnet wird |
| **on_cursor_hover** | Wenn der Cursor das Widget betritt |
| **on_cursor_hover_exit** | Wenn der Cursor das Widget verlasst |
| **on_cursor_click** | Wenn das Widget geklickt wird |

### Aktionsliste

Jedes Ereignis enthalt eine Liste von Aktionen, die in Reihenfolge ausgefuhrt werden:

- **Linksklick**: Aktion bearbeiten
- **Umschalt + Linksklick**: Aktion loschen
- **Aktion hinzufugen**: Neue Aktion erstellen
- **Neu anordnen**: Ziehen, um Ausfuhrungsreihenfolge zu andern

---

## Aktions-Editoren

Jeder Aktionstyp hat einen spezialisierten Editor:

### Animations-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Effekt** | Animationstyp (rotate, scale, bounce, etc.) |
| **Dauer** | Animationslange in Millisekunden |
| **Skalierung X/Y/Z** | Skalierungsmultiplikatoren (fur Skalierungsanimationen) |
| **Intensitat** | Effektstarke (0.1 - 5.0) |
| **Easing** | Timing-Funktion (linear, ease_in, ease_out, etc.) |
| **Prioritat** | Interaktionen wahrend Animation blockieren |

### Sound-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Datei** | Sound-Pfad (minecraft:... oder benutzerdefinierter Pfad) |
| **Lautstarke** | Sound-Lautstarke (0.0 - 1.0) |
| **Tonhohe** | Sound-Tonhohe (0.5 - 2.0) |

**Durchsuchen**: Klicken Sie, um den Sound-Browser zu offnen und einen Sound auszuwahlen.

### Befehls-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Befehl** | Auszufuhrender Befehl (mit Spezialbefehlen) |
| **Verzogerung** | Verzogerung in Millisekunden vor Ausfuhrung |

**Spezialbefehle:**
- `[TELEPORT] world x y z yaw pitch`
- `[MESSAGE] &aIhre Nachricht hier`
- `[CLOSE]`
- `[PLAY_MUSIC] pfad/datei.ogg`
- `[STOP_MUSIC]`
- `[OPEN_URL] https://...`
- `[PLAYER] /befehl`
- `[CONSOLE] /befehl`

### Zustands-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Aktionstyp** | `toggle_state` oder `set_state` |
| **Zustande** | Liste der Zustande zum Umschalten (toggle_state) |
| **Zustand** | Ziel-Zustandsname (set_state) |

### Visuelle Anderungs-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Zu** | Ziel-visueller Zustandsname |

### Widget-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Aktion** | `hide_widget`, `show_widget`, etc. |
| **Widget** | Ziel-Widget-Name |

### Effekt-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Effekt** | Anzuwendender Effekttyp |
| **Parameter** | Effekt-spezifische Parameter |

### Animation-Stoppen-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Animationstyp** | Welche Animation gestoppt werden soll |

### Effekt-Stoppen-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Effekttyp** | Welcher Effekt gestoppt werden soll |

### Basiszustand-Setzen-Aktion

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Zustand** | Neuer Basiszustand fur das Widget |

---

## Asset-Browser

### Bild-Browser

Durchsuchen Sie alle Bilder in Ihrem `images/`-Ordner:

- **Seitennummerierung**: Durch Bildseiten navigieren
- **Vorschau**: Bildpfad und Details anzeigen
- **Auswahlen**: Klicken zur Verwendung im aktuellen Kontext

Bilder sind nach Ordner organisiert (z.B. `template/button.png`).

### Sound-Browser

Durchsuchen Sie alle Sounds in Ihrem `sounds/`-Ordner plus Minecraft-integrierte Sounds:

- **Benutzerdefinierte Sounds**: Ihre .ogg-Dateien aus `sounds/`
- **Minecraft-Sounds**: Integrierte Sounds (minecraft:ui.button.click, etc.)
- **Auswahlen**: Klicken zur Verwendung im aktuellen Kontext

---

## Tipps & Best Practices

### Workflow-Tipps

1. **Mit Eigenschaften beginnen**: Zuerst Name, Titel und Position einrichten
2. **Widgets hinzufugen**: Widgets mit grundlegenden Transformationen erstellen
3. **Visuelle konfigurieren**: Normal- und Hover-Zustande einrichten
4. **Kollision hinzufugen**: Kollisionsboxen aktivieren und dimensionieren
5. **Ereignisse hinzufugen**: Hover-Sounds und Klick-Aktionen konfigurieren
6. **Haufig testen**: `/cm oeffnen <menu>` verwenden, um Anderungen zu testen

### Tastaturkurzel

| Kurzel | Aktion |
|--------|--------|
| **Escape** | Editor schliessen |
| **Zahlentasten (1-9)** | Schnelle Slot-Auswahl |

### Haufige Probleme

**Anderungen erscheinen nicht:**
- `/cm neuladen` nach Anderungen ausfuhren
- Sicherstellen, dass Sie im Editor "Speichern" geklickt haben

**Kollision erkennt nicht:**
- Prufen, ob Kollision aktiviert ist
- Uberprufen, ob Kollisionsgrosse gross genug ist
- `/cm debug particles` zur Visualisierung verwenden

**Bilder werden nicht angezeigt:**
- `/cm paket` ausfuhren, um Ressourcenpaket neu zu generieren
- Sicherstellen, dass Bild in einem Unterordner ist (z.B. `images/meinmenu/`)
- Ressourcenpaket auf Client anwenden

---

## Siehe auch

- [Befehls-Referenz](commands.md)
- [Menus erstellen](menu-creation.md)
- [Widget-Typen](widgets.md)
- [Ereignissystem](events.md)
- [Animationen](animations.md)
