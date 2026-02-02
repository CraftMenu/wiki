# Types de Widgets

CraftMenu supporte trois types de widgets pour construire des menus.

## Apercu des Types de Widgets

| Type | Description | Interactif |
|------|-------------|------------|
| IMAGE | Affiche des images | Oui |
| TEXT | Affiche du texte formate | Oui |
| CURSOR | Le curseur de souris | Special |

## Widget IMAGE

Utilise pour les boutons, arriere-plans et elements decoratifs.

### Image de Base

```yaml
mon_image:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
  transform:
    position: {x: 0, y: 0, z: 0}
    size: {x: 0.1, y: 0.1, z: 0.1}
```

### Image avec Etats

```yaml
mon_bouton:
  type: IMAGE
  visual:
    normal:
      type: image
      value: template/button.png
    hover:
      type: image
      value: template/button-hover.png
    pressed:
      type: image
      value: template/button-pressed.png
    disabled:
      type: image
      value: template/button-disabled.png
```

### Surcharges d'Etat

Chaque etat peut avoir des surcharges de transform et collision :

```yaml
visual:
  hover:
    type: image
    value: template/button-hover.png
    overrides:
      transform:
        size: {x: 0.11, y: 0.11, z: 0.11}  # Legerement plus grand au survol
```

## Widget TEXT

Affiche du texte formate avec support pour PlaceholderAPI.

### Texte de Base

```yaml
texte_bienvenue:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&bBienvenue sur le serveur !"
      text-size: 1.0
  transform:
    position: {x: 0, y: 0.3, z: 0}
    size: {x: 0.03, y: 0.03, z: 0.03}
```

### Texte avec Placeholders

```yaml
info_joueur:
  type: TEXT
  visual:
    normal:
      type: text
      value: "&7Joueur : &f%player_name%\n&7Niveau : &a%player_level%"
      text-size: 0.8
```

### Texte Multi-lignes

Utilisez `\n` pour les sauts de ligne :

```yaml
description:
  type: TEXT
  visual:
    normal:
      type: text
      value: "Ligne 1\nLigne 2\nLigne 3"
```

## Widget CURSOR

Le curseur suit les mouvements de la souris du joueur.

### Curseur de Base

```yaml
cursor:
  type: CURSOR
  visual:
    normal:
      type: image
      value: template/cursor.png
  cursor:
    animation:
      type: pulse
      duration: 1000
    glow: true
    glow-color: "#FFFFFF"
```

## Proprietes de Transform

Tous les widgets supportent les proprietes de transform :

```yaml
transform:
  position:
    x: 0.0    # Decalage horizontal
    y: 0.0    # Decalage vertical
    z: 0.0    # Decalage en profondeur
  size:
    x: 0.1    # Echelle de largeur
    y: 0.1    # Echelle de hauteur
    z: 0.1    # Echelle de profondeur
  rotation:
    pitch: 0  # Rotation axe X
    yaw: 0    # Rotation axe Y
    roll: 0   # Rotation axe Z
```

## Proprietes de Collision

Activez ou personnalisez la detection de collision :

```yaml
collision:
  enabled: true
  position: {x: 0, y: 0, z: 0}
  size: {x: 0.1, y: 0.1, z: 0.1}
  offset: {x: 0, y: 0, z: 0}
```

## Ordre des Widgets

Les widgets sont rendus dans l'ordre ou ils apparaissent dans le fichier YAML. Les widgets ulterieurs apparaissent devant les precedents.
