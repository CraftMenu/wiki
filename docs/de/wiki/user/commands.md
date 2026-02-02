# Befehlsreferenz

CraftMenu bietet einen umfassenden Satz von Befehlen zur Verwaltung von Menues.

## Basisbefehl

Alle Befehle verwenden `/craftmenu` (Alias: `/cm`).

## Allgemeine Befehle

### Hilfe
```
/cm hilfe [befehl]
```
Zeigt Hilfeinformationen fuer alle Befehle oder einen bestimmten Befehl an.

### Menues auflisten
```
/cm liste
```
Listet alle geladenen Menuevorlagen auf.

### Plugin-Info
```
/cm info
```
Zeigt Plugin-Version und Statistiken an.

## Menue-Befehle

### Menue oeffnen
```
/cm oeffnen <menue_name> [spieler]
```
Oeffnet ein Menue fuer Sie selbst oder einen anderen Spieler.

**Beispiele:**
- `/cm oeffnen template` - Template-Menue fuer sich selbst oeffnen
- `/cm oeffnen lobby Steve` - Lobby-Menue fuer Spieler Steve oeffnen

### Menue schliessen
```
/cm schliessen [spieler]
```
Schliesst das aktive Menue fuer Sie selbst oder einen anderen Spieler.

### Menue erstellen
```
/cm erstellen <menue_name>
```
Erstellt eine neue Menuevorlage an Ihrer aktuellen Position.

### Menue loeschen
```
/cm loeschen <menue_name>
```
Loescht eine Menuevorlage.

## Ressourcenpaket-Befehle

### Ressourcenpaket generieren
```
/cm paket
```
Generiert das Ressourcenpaket aus Bildern und Sounds im CraftMenu-Ordner.

### Bild-Befehle
```
/cm bilder scannen
/cm bilder reparieren [--backup]
/cm bilder groesse <bild_pfad> <ziel_groesse>
/cm bilder sicherung
/cm bilder wiederherstellen <backup_name>
/cm bilder liste
/cm bilder sicherungen
```
- `scannen` - Scannt nach uebergrossen Bildern
- `reparieren` - Optimiert uebergrosse Bilder automatisch
- `groesse` - Aendert die Groesse eines bestimmten Bildes auf die Zielgroesse (16-4096 Pixel)
- `sicherung` - Erstellt ein Backup der Bilder
- `wiederherstellen` - Stellt Bilder aus einem Backup wieder her
- `liste` - Listet alle Bilder im Bilder-Ordner auf
- `sicherungen` - Listet alle verfuegbaren Backups auf

## Konfigurations-Befehle

### Neuladen
```
/cm neuladen
```
Laedt alle Konfigurationen und Menuevorlagen neu.

### Sprache
```
/cm sprache <sprache>
/cm sprache liste
```
- `/cm sprache <sprache>` - Aendert die Plugin-Sprache direkt (kein "set" erforderlich)
- `/cm sprache liste` - Zeigt alle verfuegbaren Sprachen an

Verfuegbare Sprachen:
- `en_US` - Englisch
- `pt_BR` - Portugiesisch (Brasilien)
- `es_ES` - Spanisch
- `fr_FR` - Franzoesisch
- `de_DE` - Deutsch
- `it_IT` - Italienisch
- `nl_NL` - Niederlaendisch
- `ru_RU` - Russisch
- `pl_PL` - Polnisch
- `tr_TR` - Tuerkisch
- `uk_UA` - Ukrainisch
- `ar_SA` - Arabisch
- `ja_JP` - Japanisch
- `ko_KR` - Koreanisch
- `zh_CN` - Chinesisch (Vereinfacht)
- `hi_IN` - Hindi
- `id_ID` - Indonesisch
- `th_TH` - Thai
- `vi_VN` - Vietnamesisch

## Debug-Befehle

### Partikel-Debug
```
/cm debug partikel
/cm debug partikel groesse <wert>
```
- `/cm debug partikel` - Schaltet ALLE Debug-Partikel um (Kollisionsboxen, Cursor-Trail, Widget-Zentren)
- `/cm debug partikel groesse <wert>` - Legt die Partikelgroesse fest (0.001 bis 2.0)

### Raster-Debug
```
/cm debug raster
/cm debug raster nummern
```
- `/cm debug raster` - Schaltet die Rastervisualisierung um
- `/cm debug raster nummern` - Schaltet die Rasterzellennummern um

### Debug-Status
```
/cm debug status
```
Zeigt den aktuellen Debug-Status an.

### Debug umschalten
```
/cm debug umschalten
```
Schaltet den Debug-Modus ein oder aus.

### Gesundheitspruefung
```
/cm gesundheit
```
Zeigt den Gesundheitsstatus der Komponenten an.

### Wiederherstellen
```
/cm wiederherstellen
```
Versucht, sich von Fehlern zu erholen.

## Editor-Befehl

Oeffnet den visuellen In-Game-Editor fuer Menues und Widgets.

### Editor Oeffnen
```
/cm editor
/cm editor <menu_name>
```
- `/cm editor` - Oeffnet den Editor-Hub
- `/cm editor <menu_name>` - Oeffnet den Editor fuer ein bestimmtes Menu

**Erforderliche Berechtigung:** `craftmenu.admin`

## Berechtigungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `craftmenu.use` | Grundlegende Nutzung (Menues oeffnen) |
| `craftmenu.admin` | Admin-Befehle |
| `craftmenu.open` | Menues oeffnen |
| `craftmenu.create` | Menues erstellen |
| `craftmenu.reload` | Plugin neu laden |
| `craftmenu.debug` | Debug-Befehle |
