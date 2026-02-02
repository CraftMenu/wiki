# Creation de Menus

Ce guide couvre la creation de menus personnalises dans CraftMenu.

## Structure des Menus

Les menus sont definis dans des fichiers YAML dans `plugins/CraftMenu/menus/`.

### Template de Menu de Base

```yaml
menu:
  name: mon_menu
  title: "&b&lMon Menu Personnalise"
  main: false
  open-on-join: false
  open-on-teleport: false

  location:
    world: world
    coordinates: {x: 100, y: 64, z: 100}
    rotation: {yaw: 0, pitch: 0}

  settings:
    cursor-sensitivity: 1.0
    max-yaw-offset: 61.0
    max-pitch-offset: 36.0
    camera-lock-enabled: true

  widgets:
    # Definitions des widgets ici
```

## Proprietes des Menus

### Proprietes de Base

| Propriete | Type | Description |
|-----------|------|-------------|
| `name` | String | Identifiant unique du menu |
| `title` | String | Titre affiche (supporte les codes couleur) |
| `main` | Boolean | Est-ce le menu principal ? |
| `open-on-join` | Boolean | Ouvrir auto quand le joueur rejoint le monde |
| `open-on-teleport` | Boolean | Ouvrir auto quand le joueur se teleporte dans le monde |

### Emplacement

```yaml
location:
  world: world               # Nom du monde
  coordinates:
    x: 100.0
    y: 64.0
    z: 100.0
  rotation:
    yaw: 0.0                 # Rotation horizontale (-180 a 180)
    pitch: 0.0               # Rotation verticale (-90 a 90)
```

### Parametres

```yaml
settings:
  cursor-sensitivity: 1.0    # Sensibilite de la souris (1.0 = normal)
  max-yaw-offset: 61.0       # Limite horizontale en degres
  max-pitch-offset: 36.0     # Limite verticale en degres
  camera-lock-enabled: true  # Verrouiller la camera quand le menu est ouvert
  camera-lock-strength: 0.4  # Force du verrouillage (0.0-1.0)
```

### Parametres de Visibilite

```yaml
settings:
  visibility:
    hide_players: false      # Cacher les autres joueurs
    hide_mobs: false         # Cacher les mobs
    hide_items: false        # Cacher les objets au sol
    whitelist_players: []    # Joueurs qui restent visibles
```

## Ajouter des Widgets

Les widgets sont les elements interactifs de votre menu.

### Widget Image

```yaml
widgets:
  mon_bouton:
    type: IMAGE
    visual:
      normal:
        type: image
        value: template/button.png
      hover:
        type: image
        value: template/button-hover.png
    transform:
      position: {x: 0, y: 0, z: 0}
      size: {x: 0.1, y: 0.1, z: 0.1}
    events:
      on_cursor_click:
        - action: sound
          file: minecraft:ui.button.click
```

### Widget Texte

```yaml
widgets:
  titre_texte:
    type: TEXT
    visual:
      normal:
        type: text
        value: "&b&lBienvenue !"
        text-size: 1.5
    transform:
      position: {x: 0, y: 0.2, z: 0}
      size: {x: 0.05, y: 0.05, z: 0.05}
```

## Creation Rapide avec Commande

Utilisez `/cm create <nom>` pour creer rapidement un menu a votre position actuelle.

## Ajouter des Images Personnalisees

1. Creez un dossier : `plugins/CraftMenu/images/mon_menu/`
2. Ajoutez vos images PNG dans ce dossier
3. Executez `/cm zip` pour regenerer le resource pack
4. Referencez les images comme `mon_menu/nom_image.png`

## Tester Votre Menu

1. Sauvegardez votre fichier YAML
2. Executez `/cm reload`
3. Executez `/cm open mon_menu`

## Bonnes Pratiques

- Utilisez des sous-dossiers pour organiser les images par menu
- Gardez des tailles d'images raisonnables (max 128x128 pour les boutons)
- Testez les menus soigneusement avant le deploiement
- Utilisez des noms de widgets descriptifs
- Commentez les configurations complexes
