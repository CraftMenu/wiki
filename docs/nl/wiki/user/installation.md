# Installatiehandleiding

Deze handleiding behandelt het installeren en configureren van CraftMenu op je Minecraft-server.

## Vereisten

Voordat je CraftMenu installeert, zorg ervoor dat je hebt:

- Minecraft-server met Paper, Spigot of Purpur 1.20.4+
- Java 17 of hoger geinstalleerd
- PacketEvents plugin geinstalleerd

## Installatiestappen

### 1. Download CraftMenu

Download de nieuwste CraftMenu JAR van de releases pagina.

### 2. Installeer Afhankelijkheden

Zorg ervoor dat PacketEvents is geinstalleerd in je `plugins/` map voordat je CraftMenu installeert.

### 3. Installeer CraftMenu

Plaats `CraftMenu.jar` in de `plugins/` map van je server.

### 4. Start de Server

Start je server. CraftMenu zal zijn configuratiebestanden aanmaken:

```
plugins/CraftMenu/
├── config.yml           # Globale configuratie
├── menus/              # Menu templates
│   └── template.yml    # Standaard voorbeeldmenu
├── images/             # Aangepaste afbeeldingen
│   └── template/       # Afbeeldingen voor template menu
├── sounds/             # Aangepaste geluiden
│   └── template/       # Geluiden voor template menu
└── language/           # Taalbestanden
```

### 5. Genereer Resource Pack

Voer `/cm zip` uit om het resource pack te genereren. Dit maakt:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Configureer Resource Pack Distributie

Je hebt verschillende opties:

**Optie A: Server Resource Pack**
```properties
# In server.properties
resource-pack=https://jouw-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Optie B: Handmatige Distributie**
Deel het ZIP-bestand met spelers en laat ze het handmatig installeren.

**Optie C: Gebruik een Resource Pack Plugin**
Gebruik plugins zoals ItemsAdder of Oraxen voor automatische distributie.

## Configuratie

### Basisinstellingen

Bewerk `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "nl_NL"          # nl_NL, en_US, pt_BR, of fr_FR
    debug: false               # Inschakelen voor probleemoplossing

  resourcepack:
    auto-generate: true        # Automatisch genereren bij opstarten
    compression: true          # ZIP-bestand comprimeren
```

### Prestatie-instellingen

```yaml
craftmenu:
  performance:
    async-loading: true        # Menu's asynchroon laden
    cache-enabled: true        # Menu templates cachen
    update-interval: 1         # Ticks tussen updates
```

## Installatie Verifieren

1. Voer `/cm help` uit om beschikbare commando's te zien
2. Voer `/cm list` uit om geladen menu's te zien
3. Voer `/cm open template` uit om het standaardmenu te testen

## Volgende Stappen

- [Maak je eerste menu](menu-creation.md)
- [Leer over widgets](widgets.md)
- [Configureer events](events.md)
