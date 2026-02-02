# Guida all'Installazione

Questa guida copre l'installazione e la configurazione di CraftMenu sul tuo server Minecraft.

## Prerequisiti

Prima di installare CraftMenu, assicurati di avere:

- Server Minecraft con Paper, Spigot o Purpur 1.20.4+
- Java 17 o superiore installato
- Plugin PacketEvents installato

## Passaggi di Installazione

### 1. Scarica CraftMenu

Scarica l'ultimo JAR di CraftMenu dalla pagina delle release.

### 2. Installa le Dipendenze

Assicurati che PacketEvents sia installato nella cartella `plugins/` prima di CraftMenu.

### 3. Installa CraftMenu

Posiziona `CraftMenu.jar` nella cartella `plugins/` del tuo server.

### 4. Avvia il Server

Avvia il server. CraftMenu creera i suoi file di configurazione:

```
plugins/CraftMenu/
├── config.yml           # Configurazione globale
├── menus/              # Template dei menu
│   └── template.yml    # Menu di esempio predefinito
├── images/             # Immagini personalizzate
│   └── template/       # Immagini per il menu template
├── sounds/             # Suoni personalizzati
│   └── template/       # Suoni per il menu template
└── language/           # File di lingua
```

### 5. Genera il Resource Pack

Esegui `/cm pacchetto` per generare il resource pack. Questo crea:

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Configura la Distribuzione del Resource Pack

Hai diverse opzioni:

**Opzione A: Resource Pack del Server**
```properties
# In server.properties
resource-pack=https://tuo-host.com/craftmenu.zip
resource-pack-sha1=<sha1-hash>
require-resource-pack=true
```

**Opzione B: Distribuzione Manuale**
Condividi il file ZIP con i giocatori e fallo installare manualmente.

**Opzione C: Usa un Plugin per Resource Pack**
Usa plugin come ItemsAdder o Oraxen per la distribuzione automatica.

## Configurazione

### Impostazioni Base

Modifica `plugins/CraftMenu/config.yml`:

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "it_IT"          # it_IT, en_US, pt_BR o fr_FR
    debug: false               # Abilita per la risoluzione problemi

  resourcepack:
    auto-generate: true        # Auto-genera all'avvio
    compression: true          # Comprimi il file ZIP
```

### Impostazioni di Performance

```yaml
craftmenu:
  performance:
    async-loading: true        # Carica i menu in modo asincrono
    cache-enabled: true        # Cache dei template menu
    update-interval: 1         # Tick tra gli aggiornamenti
```

## Verifica dell'Installazione

1. Esegui `/cm aiuto` per vedere i comandi disponibili
2. Esegui `/cm lista` per vedere i menu caricati
3. Esegui `/cm apri template` per testare il menu predefinito

## Prossimi Passi

- [Crea il tuo primo menu](menu-creation.md)
- [Scopri i widget](widgets.md)
- [Configura gli eventi](events.md)
