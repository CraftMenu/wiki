# Installationsanleitung

Diese Anleitung behandelt die Installation und Konfiguration von CraftMenu auf Ihrem Minecraft-Server.

## Voraussetzungen

Bevor Sie CraftMenu installieren, stellen Sie sicher, dass Sie haben:

- Minecraft-Server mit Paper, Spigot oder Purpur 1.20.4+
- Java 17 oder hoeher installiert
- PacketEvents Plugin installiert

## Installationsschritte

### 1. CraftMenu herunterladen

Laden Sie die neueste CraftMenu JAR-Datei von der Releases-Seite herunter.

### 2. Abhaengigkeiten installieren

Stellen Sie sicher, dass PacketEvents in Ihrem `plugins/`-Ordner installiert ist, bevor Sie CraftMenu installieren.

### 3. CraftMenu installieren

Legen Sie `CraftMenu.jar` in den `plugins/`-Ordner Ihres Servers.

### 4. Server starten

Starten Sie Ihren Server. CraftMenu erstellt seine Konfigurationsdateien:

```
plugins/CraftMenu/
├── config.yml           # Globale Konfiguration
├── menus/              # Menuevorlagen
│   └── template.yml    # Standard-Beispielmenue
├── images/             # Benutzerdefinierte Bilder
│   └── template/       # Bilder fuer das Template-Menue
├── sounds/             # Benutzerdefinierte Sounds
│   └── template/       # Sounds fuer das Template-Menue
└── language/           # Sprachdateien
```

### 5. Ressourcenpaket generieren

Fuehren Sie `/cm paket` aus, um das Ressourcenpaket zu generieren. Dies erstellt:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Ressourcenpaket-Verteilung konfigurieren

Sie haben mehrere Optionen:

**Option A: Server-Ressourcenpaket**
```properties
# In server.properties
resource-pack=https://ihr-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Option B: Manuelle Verteilung**
Teilen Sie die ZIP-Datei mit Spielern und lassen Sie sie diese manuell installieren.

**Option C: Ressourcenpaket-Plugin verwenden**
Verwenden Sie Plugins wie ItemsAdder oder Oraxen fuer automatische Verteilung.

## Konfiguration

### Grundeinstellungen

Bearbeiten Sie `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "de_DE"          # de_DE, en_US, pt_BR oder fr_FR
    debug: false               # Fuer Fehlerbehebung aktivieren

  resourcepack:
    auto-generate: true        # Automatisch beim Start generieren
    compression: true          # ZIP-Datei komprimieren
```

### Leistungseinstellungen

```yaml
craftmenu:
  performance:
    async-loading: true        # Menues asynchron laden
    cache-enabled: true        # Menuevorlagen cachen
    update-interval: 1         # Ticks zwischen Updates
```

## Installation ueberpruefen

1. Fuehren Sie `/cm hilfe` aus, um verfuegbare Befehle zu sehen
2. Fuehren Sie `/cm liste` aus, um geladene Menues zu sehen
3. Fuehren Sie `/cm oeffnen template` aus, um das Standardmenue zu testen

## Naechste Schritte

- [Ihr erstes Menue erstellen](menu-creation.md)
- [Ueber Widgets lernen](widgets.md)
- [Events konfigurieren](events.md)
