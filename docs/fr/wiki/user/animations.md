# Systeme d'Animation

CraftMenu fournit un puissant systeme d'animation avec 19 types d'animations et 6 fonctions d'acceleration.

## Types d'Animations

### Animations de Mouvement

| Type | Description |
|------|-------------|
| `translate` | Deplacer la position du widget |
| `bounce` | Effet de rebond |
| `float` | Flottement doux haut/bas |
| `orbit` | Mouvement orbital circulaire |

### Animations de Rotation

| Type | Description |
|------|-------------|
| `rotate` | Rotation continue |
| `swing` | Balancement de pendule |
| `flip` | Retournement de 180 degres |
| `wobble` | Rotation vacillante |
| `spiral` | Mouvement en spirale |

### Animations d'Echelle

| Type | Description |
|------|-------------|
| `scale` | Changer la taille |
| `pulse` | Pulsation rythmique |
| `squeeze` | Comprimer/etirer |
| `zoom_in` | Effet de zoom |

### Animations Visuelles

| Type | Description |
|------|-------------|
| `fade` | Fondu d'opacite |
| `glow` | Effet de lueur |
| `shake` | Mouvement de secousse |
| `jiggle` | Mouvement de tremblotement |
| `wave` | Mouvement de vague |

## Utilisation de Base des Animations

```yaml
events:
  on_cursor_hover:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.1, y: 1.1, z: 1.1}
```

## Proprietes d'Animation

### Proprietes Communes

```yaml
- action: animation
  effect: pulse           # Type d'animation (requis)
  duration: 1000          # Duree en millisecondes
  easing_style: ease_out  # Fonction d'acceleration
  intensity: 1.0          # Intensite de l'effet
  priority: false         # Bloquer les autres actions ?
```

### Proprietes Specifiques aux Effets

**Rotate :**
```yaml
- action: animation
  effect: rotate
  duration: 2000
  rotate: {x: 0, y: 360, z: 0}  # Degres
```

**Scale :**
```yaml
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.2, y: 1.2, z: 1.2}
```

**Fade :**
```yaml
- action: animation
  effect: fade
  duration: 500
  fade: true  # true = fondu sortant, false = fondu entrant
```

## Fonctions d'Acceleration

| Acceleration | Description |
|--------------|-------------|
| `linear` | Vitesse constante |
| `ease_in` | Demarre lentement |
| `ease_out` | Finit lentement |
| `ease_in_out` | Lent au debut et a la fin |
| `bounce` | Effet rebondissant |
| `elastic` | Effet elastique |

### Exemples d'Acceleration

```yaml
# Effet de survol fluide
- action: animation
  effect: scale
  duration: 200
  scale: {x: 1.1, y: 1.1, z: 1.1}
  easing_style: ease_out

# Retour de clic rebondissant
- action: animation
  effect: scale
  duration: 300
  scale: {x: 0.9, y: 0.9, z: 0.9}
  easing_style: bounce
```

## Priorite d'Animation

Utilisez `priority: true` pour vous assurer qu'une animation se termine avant les autres actions :

```yaml
events:
  on_cursor_click:
    - action: animation
      effect: scale
      duration: 200
      scale: {x: 1.2, y: 1.2, z: 1.2}
      priority: true          # Bloque l'action suivante

    - action: command
      command: "[CLOSE]"      # Attend l'animation
```

## Arreter les Animations

```yaml
- action: stop_animation
  animation_type: rotate      # Arreter un type specifique
  # ou
  type: all                   # Arreter toutes les animations
```

## Animations Continues

Definissez des animations qui s'executent continuellement dans la config du widget :

```yaml
widgets:
  icone_tournante:
    type: IMAGE
    visual:
      normal: {type: image, value: template/icon.png}
    continuous_animations:
      - type: rotate
        duration: 3000
        rotate: {x: 0, y: 360, z: 0}
        easing_style: linear
```

## Bonnes Pratiques

1. Gardez les durees sous 500ms pour un retour reactif
2. Utilisez `ease_out` pour les effets de survol
3. Utilisez `bounce` pour le retour de clic
4. Evitez plusieurs animations simultanees sur un widget
5. Testez les animations sur differents materiels
