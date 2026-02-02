# Guide d'Installation

Ce guide couvre l'installation et la configuration de CraftMenu sur votre serveur Minecraft.

## Prerequis

Avant d'installer CraftMenu, assurez-vous d'avoir :

- Un serveur Minecraft executant Paper, Spigot ou Purpur 1.20.4+
- Java 17 ou superieur installe
- Le plugin PacketEvents installe

## Etapes d'Installation

### 1. Telecharger CraftMenu

Telechargez le dernier JAR de CraftMenu depuis la page des releases.

### 2. Installer les Dependances

Assurez-vous que PacketEvents est installe dans votre dossier `plugins/` avant CraftMenu.

### 3. Installer CraftMenu

Placez `CraftMenu.jar` dans le dossier `plugins/` de votre serveur.

### 4. Demarrer le Serveur

Demarrez votre serveur. CraftMenu creera ses fichiers de configuration :

```
plugins/CraftMenu/
├── config.yml           # Configuration globale
├── menus/              # Templates de menus
│   └── template.yml    # Menu exemple par defaut
├── images/             # Images personnalisees
│   └── template/       # Images pour le menu template
├── sounds/             # Sons personnalises
│   └── template/       # Sons pour le menu template
└── language/           # Fichiers de langue
```

### 5. Generer le Resource Pack

Executez `/cm zip` pour generer le resource pack. Cela cree :

```
plugins/CraftMenu/resourcepack/craftmenu.zip
```

### 6. Configurer la Distribution du Resource Pack

Vous avez plusieurs options :

**Option A : Resource Pack Serveur**
```properties
# Dans server.properties
resource-pack=https://votre-hebergeur.com/craftmenu.zip
resource-pack-sha1=<hash-sha1>
require-resource-pack=true
```

**Option B : Distribution Manuelle**
Partagez le fichier ZIP avec les joueurs et faites-leur l'installer manuellement.

**Option C : Utiliser un Plugin de Resource Pack**
Utilisez des plugins comme ItemsAdder ou Oraxen pour la distribution automatique.

## Configuration

### Parametres de Base

Editez `plugins/CraftMenu/config.yml` :

```yaml
craftmenu:
  general:
    prefix: "&8[&bCraftMenu&8]"
    language: "fr_FR"          # en_US, pt_BR, ou fr_FR
    debug: false               # Activer pour le depannage

  resourcepack:
    auto-generate: true        # Generation auto au demarrage
    compression: true          # Compresser le fichier ZIP
```

### Parametres de Performance

```yaml
craftmenu:
  performance:
    async-loading: true        # Charger les menus de maniere asynchrone
    cache-enabled: true        # Mettre en cache les templates de menus
    update-interval: 1         # Ticks entre les mises a jour
```

## Verification de l'Installation

1. Executez `/cm help` pour voir les commandes disponibles
2. Executez `/cm list` pour voir les menus charges
3. Executez `/cm open template` pour tester le menu par defaut

## Prochaines Etapes

- [Creer votre premier menu](menu-creation.md)
- [Decouvrir les widgets](widgets.md)
- [Configurer les evenements](events.md)
