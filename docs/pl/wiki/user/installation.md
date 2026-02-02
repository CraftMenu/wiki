# Przewodnik instalacji

Ten przewodnik obejmuje instalacje i konfiguracje CraftMenu na twoim serwerze Minecraft.

## Wymagania wstepne

Przed zainstalowaniem CraftMenu upewnij sie, ze masz:

- Serwer Minecraft z Paper, Spigot lub Purpur 1.20.4+
- Zainstalowana Java 17 lub wyzsza
- Zainstalowany plugin PacketEvents

## Kroki instalacji

### 1. Pobierz CraftMenu

Pobierz najnowszy plik JAR CraftMenu ze strony wydawniczej.

### 2. Zainstaluj zaleznosci

Upewnij sie, ze PacketEvents jest zainstalowany w twoim folderze `plugins/` przed CraftMenu.

### 3. Zainstaluj CraftMenu

Umiesc `CraftMenu.jar` w folderze `plugins/` twojego serwera.

### 4. Uruchom serwer

Uruchom serwer. CraftMenu utworzy swoje pliki konfiguracyjne:

```
plugins/CraftMenu/
+-- config.yml           # Konfiguracja globalna
+-- menus/              # Szablony menu
|   +-- template.yml    # Domyslne przykladowe menu
+-- images/             # Niestandardowe obrazy
|   +-- template/       # Obrazy dla menu template
+-- sounds/             # Niestandardowe dzwieki
|   +-- template/       # Dzwieki dla menu template
+-- language/           # Pliki jezykowe
```

### 5. Wygeneruj Resource Pack

Uruchom `/cm zip` aby wygenerowac resource pack. To utworzy:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Skonfiguruj dystrybucje Resource Pack

Masz kilka opcji:

**Opcja A: Serwerowy Resource Pack**
```properties
# W server.properties
resource-pack=https://twoj-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Opcja B: Reczna dystrybucja**
Udostepnij plik ZIP graczom i poproos ich o reczna instalacje.

**Opcja C: Uzyj pluginu Resource Pack**
Uzyj pluginow takich jak ItemsAdder lub Oraxen do automatycznej dystrybucji.

## Konfiguracja

### Podstawowe ustawienia

Edytuj `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "pl_PL"          # en_US, pt_BR lub pl_PL
    debug: false               # Wlacz do rozwiazywania problemow

  resourcepack:
    auto-generate: true        # Automatyczne generowanie przy starcie
    compression: true          # Kompresuj plik ZIP
```

### Ustawienia wydajnosci

```yaml
craftmenu:
  performance:
    async-loading: true        # Laduj menu asynchronicznie
    cache-enabled: true        # Buforuj szablony menu
    update-interval: 1         # Ticki miedzy aktualizacjami
```

## Weryfikacja instalacji

1. Uruchom `/cm help` aby zobaczyc dostepne komendy
2. Uruchom `/cm list` aby zobaczyc zaladowane menu
3. Uruchom `/cm open template` aby przetestowac domyslne menu

## Nastepne kroki

- [Utworz swoje pierwsze menu](menu-creation.md)
- [Poznaj widgety](widgets.md)
- [Skonfiguruj zdarzenia](events.md)
